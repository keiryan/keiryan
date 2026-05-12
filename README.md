# Keiryan

Personal website for Keiryan Wilson: writing, work history, hobbies, and a photo gallery.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui-style Radix components

## Development

```sh
npm install
npm run dev
```

The dev server defaults to `http://localhost:8080/`.

To preview from another device on the same Wi-Fi network:

```sh
npm run dev -- --host 0.0.0.0
```

Then open the network URL printed by Vite.

## Build

```sh
npm run build
```

## Content

- Site-wide config and structured content live in `src/lib/data.ts`.
- Photos live in `public/photos`.
- The homepage image lives at `public/keiryan-about.jpeg`.
- Long-form writing routes are generated from post data in `src/lib/data.ts`.
