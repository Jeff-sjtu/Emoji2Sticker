########### Python 2.7 #############
#coding=utf8

import httplib, urllib, base64, json
from jeff.translate import translate


###############################################
#### Update or verify the following values. ###
###############################################

# Replace the subscription_key string value with your valid subscription key.
subscription_key = '3b24d41162714af897e7b00e4b29566d'

# Replace or verify the region.
#
# You must use the same region in your REST API call as you used to obtain your subscription keys.
# For example, if you obtained your subscription keys from the westus region, replace 
# "westcentralus" in the URI below with "westus".
#
# NOTE: Free trial subscription keys are generated in the westcentralus region, so if you are using
# a free trial subscription key, you should not need to change this region.
uri_base = 'westcentralus.api.cognitive.microsoft.com'

headers = {
    # Request headers.
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': subscription_key,
}

params = urllib.urlencode({
    # Request parameters. The language setting "unk" means automatically detect the language.
    'language': 'zh-Hans',
    'detectOrientation ': 'true',
})

def text_detection(url):
    body = "{'url':'" + url + "'}"
    # Execute the REST API call and get the response.
    conn = httplib.HTTPSConnection('westcentralus.api.cognitive.microsoft.com')
    conn.request("POST", "/vision/v1.0/ocr?%s" % params, body, headers)
    response = conn.getresponse()
    data = response.read()

    # 'data' contains the JSON data. The following formats the JSON data for display.
    parsed = json.loads(data)
    # print ("Response:")
    text = ''
    if u'regions' in parsed:
        for i in parsed[u'regions']:
            message = ''
            for j in i[u'lines']:
                for k in j[u'words']:
                    tex = k['text']
                    if (tex > u'\u4E00') & (tex < u'\u9FA5'):
                        t = tex.encode('utf-8')
                        message += t
                    else:
                        message += ' '
            text += message
            text += ' '
    else:
        print(parsed)
    # print (parsed)
    # print (json.dumps(parsed, sort_keys=True, indent=2))
    conn.close()
    text = text.strip()
    # print(text)
    if text:
        text = translate(text)[0].replace(',', '').replace('.', '')
    return text
