import os
import ocr
# import numpy as np
# from PIL import Image
# import scipy.signal

# def deNoise(imArr, N):
#     size = 3
#     kernel = np.ones((size,size))
#     y = scipy.signal.convolve(imArr,kernel)[int(size/2):-int(size/2),:][:,int(size/2):-int(size/2)]
#     imArr[y>N] = 1
#     return imArr

# def imgPrc(fn):
#     thrdGrey = 255*0.5
#     thrdNoise = 6
#     im = Image.open('/home/ganwenyao/Pictures/' + fn)
#     imArr = np.array(im.convert('L'))
#     imArr[imArr<thrdGrey] = 0
#     imArr[imArr>=thrdGrey] = 1
#     imArr = deNoise(imArr, thrdNoise)
#     imArr = imArr*255
#     Image.fromarray(imArr).save('/home/ganwenyao/Pictures/tmp/' + fn)


# for p, d, f in os.walk('/home/ganwenyao/Pictures/'):
#     for filename in f:
#         imgPrc(filename)

with open('resultEnglish', 'w') as fi:
    for p, d, f in os.walk('/home/ganwenyao/Pictures/'):
        for filename in f:
            print('http://139.198.189.135:5000/static/pictures/'+filename)
            url = 'http://139.198.189.135:5000/static/pictures/'+filename
            lines = ocr.text_detection(url)
            if lines:
                fi.write(filename + ', ' + lines + '\n')
                print(lines)
