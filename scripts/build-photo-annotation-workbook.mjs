import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const repoRoot = process.cwd();
const csvPath = path.join(repoRoot, "new-photos-annotation.csv");
const outputDir = path.join(repoRoot, "outputs", "photo-annotation");
const thumbDir = path.join(outputDir, "thumbs");
const outputPath = path.join(outputDir, "new-photos-annotation.xlsx");

function parseCsvLine(line) {
  const values = [];
  let value = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      value += '"';
      i += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      values.push(value);
      value = "";
    } else {
      value += char;
    }
  }

  values.push(value);
  return values;
}

function parseCsv(text) {
  const [headerLine, ...lines] = text.trim().split(/\r?\n/);
  const headers = parseCsvLine(headerLine);

  return lines.map((line) => {
    const values = parseCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""]));
  });
}

function colLetter(index) {
  let dividend = index + 1;
  let column = "";

  while (dividend > 0) {
    const modulo = (dividend - 1) % 26;
    column = String.fromCharCode(65 + modulo) + column;
    dividend = Math.floor((dividend - modulo) / 26);
  }

  return column;
}

function dataUrlForPng(bytes) {
  return `data:image/png;base64,${Buffer.from(bytes).toString("base64")}`;
}

const rows = parseCsv(await fs.readFile(csvPath, "utf8"));
const workbook = Workbook.create();
const sheet = workbook.worksheets.add("New Photos");
sheet.showGridLines = false;

const columns = [
  "thumbnail",
  "original_filename",
  "target_filename",
  "src",
  "width",
  "height",
  "camera",
  "location",
  "title",
  "alt",
  "caption",
  "story",
  "instagram",
  "featured",
  "notes",
  "source_path",
];

sheet.getRangeByIndexes(0, 0, 1, columns.length).values = [columns];
sheet.getRangeByIndexes(1, 0, rows.length, columns.length).values = rows.map((row) =>
  columns.map((column) => {
    if (column === "thumbnail") return "";
    return row[column] ?? "";
  }),
);

const usedRange = sheet.getRangeByIndexes(0, 0, rows.length + 1, columns.length);
usedRange.format = {
  font: { name: "Aptos", size: 10, color: "#171717" },
  fill: "#FFFFFF",
  borders: { preset: "all", style: "thin", color: "#E5E7EB" },
  verticalAlignment: "Top",
};

const headerRange = sheet.getRangeByIndexes(0, 0, 1, columns.length);
headerRange.format = {
  fill: "#111827",
  font: { bold: true, color: "#FFFFFF" },
  horizontalAlignment: "Center",
  verticalAlignment: "Middle",
};

sheet.freezePanes.freezeRows(1);
sheet.freezePanes.freezeColumns(1);

const widths = [170, 230, 230, 240, 72, 72, 90, 140, 180, 280, 220, 360, 220, 80, 220, 520];
widths.forEach((width, index) => {
  sheet.getRange(`${colLetter(index)}:${colLetter(index)}`).format.columnWidthPx = width;
});

sheet.getRangeByIndexes(0, 0, 1, columns.length).format.rowHeightPx = 34;
for (let i = 0; i < rows.length; i += 1) {
  sheet.getRangeByIndexes(i + 1, 0, 1, columns.length).format.rowHeightPx = 132;
}

sheet.getRangeByIndexes(1, 7, rows.length, 8).format.wrapText = true;
sheet.getRangeByIndexes(1, 15, rows.length, 1).format.wrapText = true;

for (const [index, row] of rows.entries()) {
  const sourceExt = path.extname(row.source_path).toLowerCase();
  const thumbName = `${path.parse(row.target_filename).name}.png`;
  const thumbPath = path.join(thumbDir, thumbName);
  const imagePath = sourceExt === ".bmp" ? thumbPath : thumbPath;
  const bytes = await fs.readFile(imagePath);

  sheet.images.add({
    dataUrl: dataUrlForPng(bytes),
    anchor: {
      from: { row: index + 1, col: 0, rowOffsetPx: 6, colOffsetPx: 8 },
      extent: { widthPx: 148, heightPx: 112 },
    },
  });
}

const tableRange = `A1:${colLetter(columns.length - 1)}${rows.length + 1}`;
const table = sheet.tables.add(tableRange, true, "NewPhotosAnnotation");
table.style = "TableStyleMedium2";
table.showFilterButton = true;

const instructions = workbook.worksheets.add("Instructions");
instructions.showGridLines = false;
instructions.getRange("A1").values = [["Photo annotation guide"]];
instructions.getRange("A3:A8").values = [
  ["Fill in location, title, alt, caption, story, instagram, featured, and notes as needed."],
  ["Use alt for factual accessibility text that describes what is visibly in the image."],
  ["Use title for the display heading."],
  ["Use caption/story for the more personal narrative shown in the detail view."],
  ["Use featured as TRUE only for photos that should load eagerly or lead the section."],
  ["Do not edit source_path unless the original source file moves."],
];
instructions.getRange("A1").format = {
  font: { bold: true, size: 18, color: "#111827" },
};
instructions.getRange("A3:A8").format = {
  font: { size: 11, color: "#374151" },
  wrapText: true,
};
instructions.getRange("A:A").format.columnWidthPx = 720;

await fs.mkdir(outputDir, { recursive: true });
const preview = await workbook.render({ sheetName: "New Photos", range: "A1:J8", scale: 1, format: "png" });
await fs.writeFile(path.join(outputDir, "new-photos-annotation-preview.png"), new Uint8Array(await preview.arrayBuffer()));

const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(outputPath);
console.log(outputPath);
