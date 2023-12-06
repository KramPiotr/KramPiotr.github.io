#!/usr/bin/env python3

from PyPDF2 import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter

def create_watermark(output_pdf_path):
    c = canvas.Canvas(output_pdf_path, pagesize=letter)
    width, height = letter
    c.setFillColorRGB(1,1,1) # white color
    c.setStrokeColorRGB(1,1,1) # white border
    c.rect(width-90, 0, 90, 30, fill=True, stroke=True) # Draw a rectangle at bottom-right
    c.save()

def add_watermark(input_pdf_path, output_pdf_path, watermark_pdf_path):
    watermark = PdfReader(watermark_pdf_path)
    watermark_page = watermark.pages[0]

    pdf = PdfReader(input_pdf_path)
    pdf_writer = PdfWriter()

    for page in pdf.pages:
        page.merge_page(watermark_page)
        pdf_writer.add_page(page)

    with open(output_pdf_path, 'wb') as fh:
        pdf_writer.write(fh)

# Create a watermark
create_watermark("watermark.pdf")

# Add the watermark to each page
add_watermark("/mnt/c/Users/piotr/Desktop/Piotr/CV/Piotr_Kram_CV.pdf", "/mnt/c/Users/piotr/Desktop/Piotr/CV/Piotr_Kram_CV.pdf", "watermark.pdf")

