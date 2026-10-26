# Asset pipeline

These scripts rebuild the website's media from the client's original files. They
are **not** part of the Vite build and are only needed when the source files
change.

## Requirements

- Python 3.9+
- `pip install pymupdf pillow`

## Commands

```bash
python scripts/build-images.py       # PDF pages / photos -> public/images/**
python scripts/build-catalogues.py   # source PDFs -> public/catalogue/*.pdf
```

## What gets generated

| Output | Source | Notes |
| --- | --- | --- |
| `public/images/products/*.jpg` | `product pdf.pdf` (117 pages) | Ten selected crops; the marquee uses these |
| `public/images/diary-designs/*.jpg` | `diary designs.pdf` (10 pages) | All 30 unique designs; the repeated blank page and cover collage are skipped |
| `public/images/nameplate-stands/*.jpg` | `nameplate stand/` | All 26 unique photographs; byte-identical duplicates skipped |
| `public/images/site/*.jpg` | Product/diary catalogues | Hero, About and diary-section imagery |
| `public/catalogue/product-photos.pdf` | `product pdf.pdf` | Verbatim copy of the client file |
| `public/catalogue/diary-designs.pdf` | `diary designs.pdf` | Verbatim copy of the client file |
| `public/catalogue/nameplate-stand.pdf` | nameplate photographs | Compiled A4 PDF; skipped if the file already exists unless `--force` is passed |

## Replacing the compiled nameplate PDF

No nameplate PDF was provided with the project — only the 26 photographs. The
generated `nameplate-stand.pdf` exists so the catalogue button has a real,
downloadable document. When the client supplies the original PDF, replace
`public/catalogue/nameplate-stand.pdf` with it; the build script will leave it
untouched on subsequent runs.

## Editing the crops

`PRODUCT_CROPS`, `HERO_CROP` and `ABOUT_CROPS` in `build-images.py` map PDF page
numbers to pixel crop boxes. Update them if a different selection of photographs
is preferred. Page images are 829 × 1160–1172 px.
