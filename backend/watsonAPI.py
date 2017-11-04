import json
from watson_developer_cloud import NaturalLanguageClassifierV1

natural_language_classifier = NaturalLanguageClassifierV1(
  username='726ac318-6015-4666-b38e-df099c571619',
  password='7N3j4DZZSDPZ')

#classes = natural_language_classifier.classify('ebd2f7x230-nlc-71076', 'How hot will it be today?')
#print(json.dumps(classes, indent=2))

def getClasses(tmp):
    classes = natural_language_classifier.classify('1e0d8ex232-nlc-28667', tmp)
    #print(classes)
    return classes



if __name__ == '__main__':
    getClasses("I am not happy.")