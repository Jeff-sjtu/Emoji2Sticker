import numpy as np
from PIL import Image
import scipy.signal

def main():
    thrdGrey = 255*0.3
    thrdNoise = 6

    im = Image.open('./imgData/dage.jpg')

    imArr = np.array(im.convert('L'))

    imArr[imArr<thrdGrey] = 0
    imArr[imArr>=thrdGrey] = 1
    imArr = deNoise(imArr, thrdNoise)
    imArr = imArr*255
    Image.fromarray(imArr).save('dage3.jpg')

def deNoise(imArr, N):
    size = 3
    kernel = np.ones((size,size))
    y = scipy.signal.convolve(imArr,kernel)[int(size/2):-int(size/2),:][:,int(size/2):-int(size/2)]
    imArr[y>N] = 1
    return imArr

if __name__ == '__main__':
    main()