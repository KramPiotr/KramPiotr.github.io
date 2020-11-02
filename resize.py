#!/usr/bin/python
from PIL import Image
import os, sys

path = "public/images/projects/"
dirs = os.listdir( path )

def resize():
    for item in dirs:
        if os.path.isfile(path+item):
            im = Image.open(path+item)
            f, e = os.path.splitext(path+item)
            imResize = im.resize((480,480), Image.ANTIALIAS)
            imResize.save(f +".png", 'png', quality=100)

resize()