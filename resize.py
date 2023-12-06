#!/usr/bin/env python3
from PIL import Image
import os, sys

path = "public/images/projects/"
dirs = os.listdir( path )

def resize():
    for item in dirs:
        if os.path.isfile(path+item) and "close.png" not in item:
            im = Image.open(path+item)
            f, e = os.path.splitext(path+item)
            imResize = im.resize((480,480), Image.LANCZOS)
            imResize.save(f +".png", 'png', quality=100)

resize()