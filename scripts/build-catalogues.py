"""Publish the catalogue PDFs served by the website.

  - product pdf.pdf      -> public/catalogue/product-photos.pdf   (verbatim copy)
  - diary designs.pdf    -> public/catalogue/diary-designs.pdf    (verbatim copy)
  - nameplate photos     -> public/catalogue/nameplate-stand.pdf   (only if missing)

No original nameplate PDF was supplied with this project, so the script compiles
one from the 26 supplied photographs. Once the client provides their own
nameplate PDF, drop it in place (or run with --force to rebuild) and this script
will not overwrite it on future runs.

Requires PyMuPDF. Run from the project root:
    python scripts/build-catalogues.py
"""

import os
import shutil
import sys

import pymupdf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATALOGUE = os.path.join(ROOT, "public", "catalogue")
NAMEPLATE_IMAGES = os.path.join(ROOT, "public", "images", "nameplate-stands")


def copy_verbatim(source: str, target_name: str) -> None:
    target = os.path.join(CATALOGUE, target_name)
    shutil.copyfile(source, target)
    print(target_name, f"{os.path.getsize(target) / 1024 / 1024:.1f} MB")


def build_nameplate_pdf() -> None:
    doc = pymupdf.open()
    page_width, page_height = 842, 595  # A4 landscape
    margin = 24

    for name in sorted(os.listdir(NAMEPLATE_IMAGES)):
        page = doc.new_page(width=page_width, height=page_height)
        page.insert_image(
            pymupdf.Rect(margin, margin, page_width - margin, page_height - margin),
            filename=os.path.join(NAMEPLATE_IMAGES, name),
            keep_proportion=True,
        )

    doc.set_metadata({
        "title": "Gift Occasions — Desk Nameplate Stands",
        "author": "Gift Occasions",
    })
    target = os.path.join(CATALOGUE, "nameplate-stand.pdf")
    doc.save(target, deflate=True, garbage=3)
    print("nameplate-stand.pdf", doc.page_count, "pages", f"{os.path.getsize(target) / 1024 / 1024:.1f} MB")


if __name__ == "__main__":
    os.makedirs(CATALOGUE, exist_ok=True)
    copy_verbatim(os.path.join(ROOT, "product pdf.pdf"), "product-photos.pdf")
    copy_verbatim(os.path.join(ROOT, "diary designs.pdf"), "diary-designs.pdf")

    nameplate_target = os.path.join(CATALOGUE, "nameplate-stand.pdf")
    if os.path.exists(nameplate_target) and "--force" not in sys.argv:
        print("nameplate-stand.pdf already exists - left untouched (use --force to rebuild)")
    else:
        build_nameplate_pdf()
