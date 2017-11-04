import json
from watson_developer_cloud import NaturalLanguageClassifierV1

natural_language_classifier = NaturalLanguageClassifierV1(
  username='bdca85ec-1f45-4ad3-874f-1ef4601403b0',
  password='LlVJ5cCwX5gt')

classes = natural_language_classifier.classify('ebd2f7x230-nlc-71076', 'How hot will it be today?')
print(json.dumps(classes, indent=2))