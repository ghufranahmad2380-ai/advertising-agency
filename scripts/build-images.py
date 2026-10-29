"""Regenerate the web-ready image assets from the client's source files.

Inputs (kept in the project root, outside public/):
  - "product pdf.pdf"        Gift Occasions product catalogue, 117 pages
  - "diary designs.pdf"      Diary design catalogue, 10 pages
  - "nameplate stand/"       28 JPEG photographs (26 unique after de-duplication)
  - "new photos/"            WhatsApp photographs of printed apparel and print work

Outputs:
  - public/images/products/*.jpg         10 selected product photographs (crops)
  - public/images/printed-apparel/*.jpg  8 printed apparel photographs
  - public/images/diary-designs/*.jpg    every unique diary design (30)
  - public/images/nameplate-stands/*.jpg all unique nameplate photographs (26)
  - public/images/site/*.jpg             hero / about / diary section imagery

Requires: Python 3, PyMuPDF (`pip install pymupdf`) and Pillow (`pip install pillow`).
Run from the project root:  python scripts/build-images.py
"""

import hashlib
import os
import pymupdf
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES = os.path.join(ROOT, "public", "images")
PRODUCT_PDF = os.path.join(ROOT, "product pdf.pdf")
DIARY_PDF = os.path.join(ROOT, "diary designs.pdf")
NAMEPLATE_DIR = os.path.join(ROOT, "nameplate stand")
NEW_PHOTOS_DIR = os.path.join(ROOT, "new photos")

# (PDF page number, crop box in source pixels, output slug)
PRODUCT_CROPS = [
    (2, (0, 0, 829, 520), "branded-caps"),
    (9, (0, 90, 829, 520), "coffee-tumblers"),
    (10, (0, 30, 829, 440), "steel-mugs"),
    (13, (0, 110, 829, 760), "travel-mugs"),
    (16, (0, 110, 829, 800), "glass-mugs"),
    (17, (0, 80, 730, 505), "sports-bottles"),
    (31, (0, 60, 829, 580), "notebook-pen-sets"),
    (43, (0, 20, 829, 500), "tote-bags"),
    (46, (0, 30, 829, 640), "cotton-tote-bags"),
    (60, (0, 60, 829, 620), "lanyards"),
]

HERO_CROP = (34, (0, 30, 829, 1060), "corporate-gift-set")
ABOUT_CROPS = [(37, (0, 40, 829, 640), "gift-box-detail")]

# (source file name in "new photos/", output slug)
PRINTED_PHOTOS = [
    ("WhatsApp Image 2026-10-28 at 2.18.28 PM.jpeg", "restaurant-polo-shirts"),
    ("WhatsApp Image 2026-10-28 at 6.50.23 PM (5).jpeg", "security-polo-shirts"),
    ("WhatsApp Image 2026-10-28 at 6.50.22 PM.jpeg", "football-jersey"),
    ("WhatsApp Image 2026-10-28 at 6.50.22 PM (2).jpeg", "graduation-tshirt"),
    ("WhatsApp Image 2026-10-28 at 6.50.23 PM (8).jpeg", "club-tshirt"),
    ("WhatsApp Image 2026-10-28 at 6.50.23 PM (1).jpeg", "safety-vest-design"),
    ("WhatsApp Image 2026-10-28 at 6.50.23 PM.jpeg", "saudi-flag-size-guide"),
    ("WhatsApp Image 2026-10-28 at 6.50.23 PM (7).jpeg", "national-day-scarf"),
]


def save_jpeg(image: Image.Image, path: str, max_side: int, quality: int = 82) -> None:
    image = image.convert("RGB")
    if max(image.size) > max_side:
        image.thumbnail((max_side, max_side), Image.LANCZOS)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    image.save(path, "JPEG", quality=quality, optimize=True, progressive=True)
    print(os.path.relpath(path, ROOT), image.size, f"{os.path.getsize(path) / 1024:.0f} KB")


def page_image(doc, page_number: int) -> Image.Image:
    page = doc[page_number - 1]
    images = page.get_images(full=True)
    main = max(images, key=lambda item: item[2] * item[3])
    pix = pymupdf.Pixmap(doc, main[0])
    if pix.n - pix.alpha >= 4:
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
    return Image.frombytes("RGB", (pix.width, pix.height), pix.samples)


def clear(folder: str) -> None:
    path = os.path.join(IMAGES, folder)
    if not os.path.isdir(path):
        return
    for name in os.listdir(path):
        os.remove(os.path.join(path, name))


def build_products() -> None:
    doc = pymupdf.open(PRODUCT_PDF)
    clear("products")

    for page_number, box, slug in PRODUCT_CROPS:
        save_jpeg(
            page_image(doc, page_number).crop(box),
            os.path.join(IMAGES, "products", f"{slug}.jpg"),
            1200,
        )

    page_number, box, slug = HERO_CROP
    save_jpeg(
        page_image(doc, page_number).crop(box),
        os.path.join(IMAGES, "site", f"{slug}.jpg"),
        1100,
        quality=84,
    )

    for page_number, box, slug in ABOUT_CROPS:
        save_jpeg(
            page_image(doc, page_number).crop(box),
            os.path.join(IMAGES, "site", f"{slug}.jpg"),
            1000,
        )


def build_diary() -> None:
    doc = pymupdf.open(DIARY_PDF)
    clear("diary-designs")
    hashes = set()
    index = 0

    for page in doc:
        for image_ref in sorted(page.get_images(full=True), key=lambda item: item[2] * item[3], reverse=True):
            pix = pymupdf.Pixmap(doc, image_ref[0])
            if pix.n - pix.alpha >= 4:
                pix = pymupdf.Pixmap(pymupdf.csRGB, pix)

            digest = hashlib.md5(pix.tobytes("png")).hexdigest()
            if digest in hashes:
                continue
            hashes.add(digest)

            image = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)

            # The 702x991 cream sheet is the catalogue's blank background page and
            # the 1086x1449 collage is the catalogue cover — neither is a design.
            if (pix.width, pix.height) == (702, 991):
                continue
            if (pix.width, pix.height) == (1086, 1449):
                save_jpeg(image, os.path.join(IMAGES, "site", "diary-collection.jpg"), 1000)
                continue

            index += 1
            save_jpeg(
                image,
                os.path.join(IMAGES, "diary-designs", f"diary-design-{index:02d}.jpg"),
                900,
            )

    print("diary designs:", index)


def build_nameplates() -> None:
    clear("nameplate-stands")
    hashes = set()
    index = 0

    for name in sorted(os.listdir(NAMEPLATE_DIR)):
        source = os.path.join(NAMEPLATE_DIR, name)
        with open(source, "rb") as handle:
            digest = hashlib.md5(handle.read()).hexdigest()
        if digest in hashes:
            print("duplicate skipped:", name)
            continue
        hashes.add(digest)

        index += 1
        with Image.open(source) as image:
            save_jpeg(
                ImageOps.exif_transpose(image),
                os.path.join(IMAGES, "nameplate-stands", f"nameplate-stand-{index:02d}.jpg"),
                1200,
            )

    print("nameplate photographs:", index)


def build_printed_apparel() -> None:
    clear("printed-apparel")

    for name, slug in PRINTED_PHOTOS:
        source = os.path.join(NEW_PHOTOS_DIR, name)
        with Image.open(source) as image:
            save_jpeg(
                ImageOps.exif_transpose(image),
                os.path.join(IMAGES, "printed-apparel", f"{slug}.jpg"),
                1400,
            )

    print("printed apparel photographs:", len(PRINTED_PHOTOS))


if __name__ == "__main__":
    build_products()
    build_printed_apparel()
    build_diary()
    build_nameplates()
