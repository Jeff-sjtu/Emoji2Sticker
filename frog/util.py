#coding=utf8
import numpy as np

def getScore(imgs_info, taglist):
    scores = np.zeros(len(imgs_info))
    for i,img_info in enumerate(imgs_info):
        tag_info = img_info[2]
        for cla in tag_info['classes']:
            if cla['class_name'] in taglist:
                scores[i] += cla['confidence']
    return scores