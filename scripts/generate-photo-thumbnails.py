from pathlib import Path

from PIL import Image, ImageOps


SOURCE_DIR = Path("/Users/keiryanwilson/Downloads/New Photos for Keiryan Website")
OUTPUT_DIR = Path("/Users/keiryanwilson/Desktop/keiryan/outputs/photo-annotation/thumbs")
THUMBNAIL_SIZE = (296, 224)


def thumbnail_name(path: Path) -> str:
    slug = path.stem.lower().replace("_", "-").replace(" ", "-")
    if not slug.startswith("new-"):
        slug = f"new-{slug}"
    return f"{slug}.png"


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    count = 0
    for source in sorted(SOURCE_DIR.iterdir()):
        if not source.is_file():
            continue

        with Image.open(source) as image:
            image = ImageOps.exif_transpose(image).convert("RGB")
            image.thumbnail(THUMBNAIL_SIZE, Image.Resampling.LANCZOS)
            canvas = Image.new("RGB", THUMBNAIL_SIZE, (245, 245, 245))
            canvas.paste(
                image,
                ((THUMBNAIL_SIZE[0] - image.width) // 2, (THUMBNAIL_SIZE[1] - image.height) // 2),
            )
            canvas.save(OUTPUT_DIR / thumbnail_name(source), "PNG", optimize=True)
            count += 1

    print(count)


if __name__ == "__main__":
    main()
