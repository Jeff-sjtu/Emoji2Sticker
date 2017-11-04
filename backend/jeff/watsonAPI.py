import json
from watson_developer_cloud import NaturalLanguageClassifierV1

natural_language_classifier = NaturalLanguageClassifierV1(
  username='7225c6a1-224d-4bca-b5f8-fe68e8841253',
  password='HJlM8EgVPGkJ')

classes = natural_language_classifier.classify('ebd2f7x230-nlc-71076', 'How hot will it be today?')
print(json.dumps(classes, indent=2))