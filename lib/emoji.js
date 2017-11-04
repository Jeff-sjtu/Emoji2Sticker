/*global exports */
/*!
 * emoji
 *
 * This file auto create by `bin/create_emoji_js.py`.
 * Emoji\'s table come from <a href="http://code.iamcal.com/php/emoji/">http://code.iamcal.com/php/emoji/</a>
 *
 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

;(function (name, definition) {
  // Come from eventproxy: https://github.com/JacksonTian/eventproxy/blob/master/lib/eventproxy.js#L7

  // this is considered "safe":
  var hasDefine = typeof define === 'function';
  var hasExports = typeof module !== 'undefined' && module.exports;

  if (hasDefine) {
    // AMD Module or CMD Module
    define(definition);
  } else if (hasExports) {
    // Node.js Module
    module.exports = definition();
  } else {
    // Assign to common namespaces or simply the global object (window)
    this[name] = definition();
  }
})('jEmoji', function () {

var jEmoji = {
  EMOJI_RE: function () {
    return EMOJI_RE
      || (EMOJI_RE = _createRegexp(EMOJI_MAP));
  },
  EMOJI_DOCOMO_RE: function () {
    return EMOJI_DOCOMO_RE
      || (EMOJI_DOCOMO_RE = _createRegexp(EMOJI_DOCOMO_MAP));
  },
  EMOJI_KDDI_RE: function () {
    return EMOJI_KDDI_RE
      || (EMOJI_KDDI_RE = _createRegexp(EMOJI_KDDI_MAP));
  },
  EMOJI_SOFTBANK_RE: function () {
    return EMOJI_SOFTBANK_RE
      || (EMOJI_SOFTBANK_RE = _createRegexp(EMOJI_SOFTBANK_MAP));
  },
  EMOJI_GOOGLE_RE: function () {
    return EMOJI_GOOGLE_RE
      || (EMOJI_GOOGLE_RE = _createRegexp(EMOJI_GOOGLE_MAP));
  }
};

/**
 * Emoji code map.
 *
 * format:
 *   Unified: [unified_unicode, title, classname, DoCoMo, KDDI, Softbank, Google]'
 *
 * @type {Object}
 */
var EMOJI_MAP = jEmoji.EMOJI_MAP = {
  // missing
  "👬": ["U+1F46C", "man and man holding hands", "1f46c", ["-", "-"], ["-", "-"], ["", "U+E428"], ["󾆠", "U+FE1A0"]],
  "👭": ["U+1F46D", "woman and woman holding hands", "1f46d", ["-", "-"], ["-", "-"], ["", "U+E428"], ["󾆠", "U+FE1A0"]],
  "😎": ["U+1F60E", "smiling face with sunglasses", "1f60e", ["", "U+E726"], ["", "U+E5C4"], ["", "U+E106"], ["󾌧", "U+FE327"]],
  "😀":  ["U+1F600", "grinning face", "1f600", ["", "U+E753"], ["", "U+EB80"], ["", "U+E404"], ["󾌳", "U+FE333"]],
  "👀": ["U+1F440", "eyes", "1f440", ["", "U+E691"], ["", "U+E5A4"], ["", "U+E419"], ["󾆐", "U+FE190"]],
  "💆": ["U+1F486", "face massage", "1f486", ["-", "-"], ["", "U+E50B"], ["", "U+E31E"], ["󾆗", "U+FE197"]],
  "💇": ["U+1F487", "haircut", "1f487", ["", "U+E675"], ["", "U+EAA1"], ["", "U+E31F"], ["󾆘", "U+FE198"]],
  "👦": ["U+1F466", "boy", "1f466", ["", "U+E6F0"], ["", "U+E4FC"], ["", "U+E001"], ["󾆛", "U+FE19B"]],
  "👧": ["U+1F467", "girl", "1f467", ["", "U+E6F0"], ["", "U+E4FA"], ["", "U+E002"], ["󾆜", "U+FE19C"]],
  "👨": ["U+1F468", "man", "1f468", ["", "U+E6F0"], ["", "U+E4FC"], ["", "U+E004"], ["󾆝", "U+FE19D"]],
  "👩": ["U+1F469", "woman", "1f469", ["", "U+E6F0"], ["", "U+E4FA"], ["", "U+E005"], ["󾆞", "U+FE19E"]],
  "👪": ["U+1F46A", "family", "1f46a", ["-", "-"], ["", "U+E501"], ["-", "-"], ["󾆟", "U+FE19F"]],
  "👫": ["U+1F46B", "man and woman holding hands", "1f46b", ["-", "-"], ["-", "-"], ["", "U+E428"], ["󾆠", "U+FE1A0"]],
  "👮": ["U+1F46E", "police officer", "1f46e", ["-", "-"], ["", "U+E5DD"], ["", "U+E152"], ["󾆡", "U+FE1A1"]],
  "👯": ["U+1F46F", "woman with bunny ears", "1f46f", ["-", "-"], ["", "U+EADB"], ["", "U+E429"], ["󾆢", "U+FE1A2"]],
  "👰": ["U+1F470", "bride with veil", "1f470", ["-", "-"], ["", "U+EAE9"], ["-", "-"], ["󾆣", "U+FE1A3"]],
  "👱": ["U+1F471", "person with blond hair", "1f471", ["-", "-"], ["", "U+EB13"], ["", "U+E515"], ["󾆤", "U+FE1A4"]],
  "👲": ["U+1F472", "man with gua pi mao", "1f472", ["-", "-"], ["", "U+EB14"], ["", "U+E516"], ["󾆥", "U+FE1A5"]],
  "👳": ["U+1F473", "man with turban", "1f473", ["-", "-"], ["", "U+EB15"], ["", "U+E517"], ["󾆦", "U+FE1A6"]],
  "👴": ["U+1F474", "older man", "1f474", ["-", "-"], ["", "U+EB16"], ["", "U+E518"], ["󾆧", "U+FE1A7"]],
  "👵": ["U+1F475", "older woman", "1f475", ["-", "-"], ["", "U+EB17"], ["", "U+E519"], ["󾆨", "U+FE1A8"]],
  "👶": ["U+1F476", "baby", "1f476", ["-", "-"], ["", "U+EB18"], ["", "U+E51A"], ["󾆩", "U+FE1A9"]],
  "👷": ["U+1F477", "construction worker", "1f477", ["-", "-"], ["", "U+EB19"], ["", "U+E51B"], ["󾆪", "U+FE1AA"]],
  "👸": ["U+1F478", "princess", "1f478", ["-", "-"], ["", "U+EB1A"], ["", "U+E51C"], ["󾆫", "U+FE1AB"]],
  "👹": ["U+1F479", "japanese ogre", "1f479", ["-", "-"], ["", "U+EB44"], ["-", "-"], ["󾆬", "U+FE1AC"]],
  "👺": ["U+1F47A", "japanese goblin", "1f47a", ["-", "-"], ["", "U+EB45"], ["-", "-"], ["󾆭", "U+FE1AD"]],
  "👻": ["U+1F47B", "ghost", "1f47b", ["-", "-"], ["", "U+E4CB"], ["", "U+E11B"], ["󾆮", "U+FE1AE"]],
  "👼": ["U+1F47C", "baby angel", "1f47c", ["-", "-"], ["", "U+E5BF"], ["", "U+E04E"], ["󾆯", "U+FE1AF"]],
  "👽": ["U+1F47D", "extraterrestrial alien", "1f47d", ["-", "-"], ["", "U+E50E"], ["", "U+E10C"], ["󾆰", "U+FE1B0"]],
  "👾": ["U+1F47E", "alien monster", "1f47e", ["-", "-"], ["", "U+E4EC"], ["", "U+E12B"], ["󾆱", "U+FE1B1"]],
  "👿": ["U+1F47F", "imp", "1f47f", ["-", "-"], ["", "U+E4EF"], ["", "U+E11A"], ["󾆲", "U+FE1B2"]],
  "💀": ["U+1F480", "skull", "1f480", ["-", "-"], ["", "U+E4F8"], ["", "U+E11C"], ["󾆳", "U+FE1B3"]],
  "💁": ["U+1F481", "information desk person", "1f481", ["-", "-"], ["-", "-"], ["", "U+E253"], ["󾆴", "U+FE1B4"]],
  "💂": ["U+1F482", "guardsman", "1f482", ["-", "-"], ["-", "-"], ["", "U+E51E"], ["󾆵", "U+FE1B5"]],
  "💃": ["U+1F483", "dancer", "1f483", ["-", "-"], ["", "U+EB1C"], ["", "U+E51F"], ["󾆶", "U+FE1B6"]],
  "🐵": ["U+1F435", "monkey face", "1f435", ["-", "-"], ["", "U+E4D9"], ["", "U+E109"], ["󾇄", "U+FE1C4"]],
  "🐶": ["U+1F436", "dog face", "1f436", ["", "U+E6A1"], ["", "U+E4E1"], ["", "U+E052"], ["󾆷", "U+FE1B7"]],
  "🐷": ["U+1F437", "pig face", "1f437", ["", "U+E755"], ["", "U+E4DE"], ["", "U+E10B"], ["󾆿", "U+FE1BF"]],
  "🐻": ["U+1F43B", "bear face", "1f43b", ["-", "-"], ["", "U+E5C1"], ["", "U+E051"], ["󾇁", "U+FE1C1"]],
  "🐹": ["U+1F439", "hamster face", "1f439", ["-", "-"], ["-", "-"], ["", "U+E524"], ["󾇊", "U+FE1CA"]],
  "🐺": ["U+1F43A", "wolf face", "1f43a", ["", "U+E6A1"], ["", "U+E4E1"], ["", "U+E52A"], ["󾇐", "U+FE1D0"]],
  "🐮": ["U+1F42E", "cow face", "1f42e", ["-", "-"], ["", "U+EB21"], ["", "U+E52B"], ["󾇑", "U+FE1D1"]],
  "🐰": ["U+1F430", "rabbit face", "1f430", ["-", "-"], ["", "U+E4D7"], ["", "U+E52C"], ["󾇒", "U+FE1D2"]],
  "🐸": ["U+1F438", "frog face", "1f438", ["-", "-"], ["", "U+E4DA"], ["", "U+E531"], ["󾇗", "U+FE1D7"]],
  "🐾": ["U+1F43E", "paw prints", "1f43e", ["", "U+E698"], ["", "U+E4EE"], ["", "U+E536"], ["󾇛", "U+FE1DB"]],
  "🐲": ["U+1F432", "dragon face", "1f432", ["-", "-"], ["", "U+EB3F"], ["-", "-"], ["󾇞", "U+FE1DE"]],
  "🐼": ["U+1F43C", "panda face", "1f43c", ["-", "-"], ["", "U+EB46"], ["-", "-"], ["󾇟", "U+FE1DF"]],
  "🐽": ["U+1F43D", "pig nose", "1f43d", ["", "U+E755"], ["", "U+EB48"], ["", "U+E10B"], ["󾇠", "U+FE1E0"]],
  "😠": ["U+1F620", "angry face", "1f620", ["", "U+E6F1"], ["", "U+E472"], ["", "U+E059"], ["󾌠", "U+FE320"]],
  "😩": ["U+1F629", "weary face", "1f629", ["", "U+E6F3"], ["", "U+EB67"], ["", "U+E403"], ["󾌡", "U+FE321"]],
  "😲": ["U+1F632", "astonished face", "1f632", ["", "U+E6F4"], ["", "U+EACA"], ["", "U+E410"], ["󾌢", "U+FE322"]],
  "😞": ["U+1F61E", "disappointed face", "1f61e", ["", "U+E6F2"], ["", "U+EAC0"], ["", "U+E058"], ["󾌣", "U+FE323"]],
  "😵": ["U+1F635", "dizzy face", "1f635", ["", "U+E6F4"], ["", "U+E5AE"], ["", "U+E406"], ["󾌤", "U+FE324"]],
  "😰": ["U+1F630", "face with open mouth and cold sweat", "1f630", ["", "U+E723"], ["", "U+EACB"], ["", "U+E40F"], ["󾌥", "U+FE325"]],
  "😒": ["U+1F612", "unamused face", "1f612", ["", "U+E725"], ["", "U+EAC9"], ["", "U+E40E"], ["󾌦", "U+FE326"]],
  "😍": ["U+1F60D", "smiling face with heart-shaped eyes", "1f60d", ["", "U+E726"], ["", "U+E5C4"], ["", "U+E106"], ["󾌧", "U+FE327"]],
  "😤": ["U+1F624", "face with look of triumph", "1f624", ["", "U+E753"], ["", "U+EAC1"], ["", "U+E404"], ["󾌨", "U+FE328"]],
  "😜": ["U+1F61C", "face with stuck-out tongue and winking eye", "1f61c", ["", "U+E728"], ["", "U+E4E7"], ["", "U+E105"], ["󾌩", "U+FE329"]],
  "😝": ["U+1F61D", "face with stuck-out tongue and tightly-closed eyes", "1f61d", ["", "U+E728"], ["", "U+E4E7"], ["", "U+E409"], ["󾌪", "U+FE32A"]],
  "😋": ["U+1F60B", "face savouring delicious food", "1f60b", ["", "U+E752"], ["", "U+EACD"], ["", "U+E056"], ["󾌫", "U+FE32B"]],
  "😘": ["U+1F618", "face throwing a kiss", "1f618", ["", "U+E726"], ["", "U+EACF"], ["", "U+E418"], ["󾌬", "U+FE32C"]],
  "😚": ["U+1F61A", "kissing face with closed eyes", "1f61a", ["", "U+E726"], ["", "U+EACE"], ["", "U+E417"], ["󾌭", "U+FE32D"]],
  "😷": ["U+1F637", "face with medical mask", "1f637", ["-", "-"], ["", "U+EAC7"], ["", "U+E40C"], ["󾌮", "U+FE32E"]],
  "😳": ["U+1F633", "flushed face", "1f633", ["", "U+E72A"], ["", "U+EAC8"], ["", "U+E40D"], ["󾌯", "U+FE32F"]],
  "😃": ["U+1F603", "smiling face with open mouth", "1f603", ["", "U+E6F0"], ["", "U+E471"], ["", "U+E057"], ["󾌰", "U+FE330"]],
  "😅": ["U+1F605", "smiling face with open mouth and cold sweat", "1f605", ["", "U+E722"], ["", "U+E471 U+E5B1"], ["", "U+E415 U+E331"], ["󾌱", "U+FE331"]],
  "😆": ["U+1F606", "smiling face with open mouth and tightly-closed eyes", "1f606", ["", "U+E72A"], ["", "U+EAC5"], ["", "U+E40A"], ["󾌲", "U+FE332"]],
  "😁": ["U+1F601", "grinning face with smiling eyes", "1f601", ["", "U+E753"], ["", "U+EB80"], ["", "U+E404"], ["󾌳", "U+FE333"]],
  "😂": ["U+1F602", "face with tears of joy", "1f602", ["", "U+E72A"], ["", "U+EB64"], ["", "U+E412"], ["󾌴", "U+FE334"]],
  "😊": ["U+1F60A", "smiling face with smiling eyes", "1f60a", ["", "U+E6F0"], ["", "U+EACD"], ["", "U+E056"], ["󾌵", "U+FE335"]],
  "☺": ["U+263A", "white smiling face", "263a", ["", "U+E6F0"], ["", "U+E4FB"], ["", "U+E414"], ["󾌶", "U+FE336"]],
  "😄": ["U+1F604", "smiling face with open mouth and smiling eyes", "1f604", ["", "U+E6F0"], ["", "U+E471"], ["", "U+E415"], ["󾌸", "U+FE338"]],
  "😢": ["U+1F622", "crying face", "1f622", ["", "U+E72E"], ["", "U+EB69"], ["", "U+E413"], ["󾌹", "U+FE339"]],
  "😭": ["U+1F62D", "loudly crying face", "1f62d", ["", "U+E72D"], ["", "U+E473"], ["", "U+E411"], ["󾌺", "U+FE33A"]],
  "😨": ["U+1F628", "fearful face", "1f628", ["", "U+E757"], ["", "U+EAC6"], ["", "U+E40B"], ["󾌻", "U+FE33B"]],
  "😣": ["U+1F623", "persevering face", "1f623", ["", "U+E72B"], ["", "U+EAC2"], ["", "U+E406"], ["󾌼", "U+FE33C"]],
  "😡": ["U+1F621", "pouting face", "1f621", ["", "U+E724"], ["", "U+EB5D"], ["", "U+E416"], ["󾌽", "U+FE33D"]],
  "😌": ["U+1F60C", "relieved face", "1f60c", ["", "U+E721"], ["", "U+EAC5"], ["", "U+E40A"], ["󾌾", "U+FE33E"]],
  "😖": ["U+1F616", "confounded face", "1f616", ["", "U+E6F3"], ["", "U+EAC3"], ["", "U+E407"], ["󾌿", "U+FE33F"]],
  "😔": ["U+1F614", "pensive face", "1f614", ["", "U+E720"], ["", "U+EAC0"], ["", "U+E403"], ["󾍀", "U+FE340"]],
  "😱": ["U+1F631", "face screaming in fear", "1f631", ["", "U+E757"], ["", "U+E5C5"], ["", "U+E107"], ["󾍁", "U+FE341"]],
  "😪": ["U+1F62A", "sleepy face", "1f62a", ["", "U+E701"], ["", "U+EAC4"], ["", "U+E408"], ["󾍂", "U+FE342"]],
  "😏": ["U+1F60F", "smirking face", "1f60f", ["", "U+E72C"], ["", "U+EABF"], ["", "U+E402"], ["󾍃", "U+FE343"]],
  "😓": ["U+1F613", "face with cold sweat", "1f613", ["", "U+E723"], ["", "U+E5C6"], ["", "U+E108"], ["󾍄", "U+FE344"]],
  "😥": ["U+1F625", "disappointed but relieved face", "1f625", ["", "U+E723"], ["", "U+E5C6"], ["", "U+E401"], ["󾍅", "U+FE345"]],
  "😫": ["U+1F62B", "tired face", "1f62b", ["", "U+E72B"], ["", "U+E474"], ["", "U+E406"], ["󾍆", "U+FE346"]],
  "😉": ["U+1F609", "winking face", "1f609", ["", "U+E729"], ["", "U+E5C3"], ["", "U+E405"], ["󾍇", "U+FE347"]],
  "😺": ["U+1F63A", "smiling cat face with open mouth", "1f63a", ["", "U+E6F0"], ["", "U+EB61"], ["", "U+E057"], ["󾍈", "U+FE348"]],
  "😸": ["U+1F638", "grinning cat face with smiling eyes", "1f638", ["", "U+E753"], ["", "U+EB7F"], ["", "U+E404"], ["󾍉", "U+FE349"]],
  "😹": ["U+1F639", "cat face with tears of joy", "1f639", ["", "U+E72A"], ["", "U+EB63"], ["", "U+E412"], ["󾍊", "U+FE34A"]],
  "😽": ["U+1F63D", "kissing cat face with closed eyes", "1f63d", ["", "U+E726"], ["", "U+EB60"], ["", "U+E418"], ["󾍋", "U+FE34B"]],
  "😻": ["U+1F63B", "smiling cat face with heart-shaped eyes", "1f63b", ["", "U+E726"], ["", "U+EB65"], ["", "U+E106"], ["󾍌", "U+FE34C"]],
  "😿": ["U+1F63F", "crying cat face", "1f63f", ["", "U+E72E"], ["", "U+EB68"], ["", "U+E413"], ["󾍍", "U+FE34D"]],
  "😾": ["U+1F63E", "pouting cat face", "1f63e", ["", "U+E724"], ["", "U+EB5E"], ["", "U+E416"], ["󾍎", "U+FE34E"]],
  "😼": ["U+1F63C", "cat face with wry smile", "1f63c", ["", "U+E753"], ["", "U+EB6A"], ["", "U+E404"], ["󾍏", "U+FE34F"]],
  "🙀": ["U+1F640", "weary cat face", "1f640", ["", "U+E6F3"], ["", "U+EB66"], ["", "U+E403"], ["󾍐", "U+FE350"]],
  "🙅": ["U+1F645", "face with no good gesture", "1f645", ["", "U+E72F"], ["", "U+EAD7"], ["", "U+E423"], ["󾍑", "U+FE351"]],
  "🙆": ["U+1F646", "face with ok gesture", "1f646", ["", "U+E70B"], ["", "U+EAD8"], ["", "U+E424"], ["󾍒", "U+FE352"]],
  "🙇": ["U+1F647", "person bowing deeply", "1f647", ["-", "-"], ["", "U+EAD9"], ["", "U+E426"], ["󾍓", "U+FE353"]],
  "🙈": ["U+1F648", "see-no-evil monkey", "1f648", ["-", "-"], ["", "U+EB50"], ["-", "-"], ["󾍔", "U+FE354"]],
  "🙊": ["U+1F64A", "speak-no-evil monkey", "1f64a", ["-", "-"], ["", "U+EB51"], ["-", "-"], ["󾍕", "U+FE355"]],
  "🙉": ["U+1F649", "hear-no-evil monkey", "1f649", ["-", "-"], ["", "U+EB52"], ["-", "-"], ["󾍖", "U+FE356"]],
  "🙋": ["U+1F64B", "happy person raising one hand", "1f64b", ["-", "-"], ["", "U+EB85"], ["", "U+E012"], ["󾍗", "U+FE357"]],
  "🙌": ["U+1F64C", "person raising both hands in celebration", "1f64c", ["-", "-"], ["", "U+EB86"], ["", "U+E427"], ["󾍘", "U+FE358"]],
  "🙍": ["U+1F64D", "person frowning", "1f64d", ["", "U+E6F3"], ["", "U+EB87"], ["", "U+E403"], ["󾍙", "U+FE359"]],
  "🙎": ["U+1F64E", "person with pouting face", "1f64e", ["", "U+E6F1"], ["", "U+EB88"], ["", "U+E416"], ["󾍚", "U+FE35A"]],
  "🙏": ["U+1F64F", "person with folded hands", "1f64f", ["-", "-"], ["", "U+EAD2"], ["", "U+E41D"], ["󾍛", "U+FE35B"]],
  "🎀": ["U+1F380", "ribbon", "1f380", ["", "U+E684"], ["", "U+E59F"], ["", "U+E314"], ["󾔏", "U+FE50F"]],
  "🎁": ["U+1F381", "wrapped present", "1f381", ["", "U+E685"], ["", "U+E4CF"], ["", "U+E112"], ["󾔐", "U+FE510"]],
  "🎂": ["U+1F382", "birthday cake", "1f382", ["", "U+E686"], ["", "U+E5A0"], ["", "U+E34B"], ["󾔑", "U+FE511"]],
  "🎉": ["U+1F389", "party popper", "1f389", ["-", "-"], ["", "U+EA9C"], ["", "U+E312"], ["󾔗", "U+FE517"]],
  "💔": ["U+1F494", "broken heart", "1f494", ["", "U+E6EE"], ["", "U+E477"], ["", "U+E023"], ["󾬎", "U+FEB0E"]],
  "🚾": ["U+1F6BE", "water closet", "1f6be", ["", "U+E66E"], ["", "U+E4A5"], ["", "U+E309"], ["󾔈", "U+FE508"]],
  "🚼": ["U+1F6BC", "baby symbol", "1f6bc", ["-", "-"], ["", "U+EB18"], ["", "U+E13A"], ["󾬵", "U+FEB35"]],
  "🚫": ["U+1F6AB", "no entry sign", "1f6ab", ["", "U+E738"], ["", "U+E541"], ["-", "-"], ["󾭈", "U+FEB48"]],
  "💨": ["U+1F4A8", "dash symbol", "1f4a8", ["", "U+E708"], ["", "U+E4F4"], ["", "U+E330"], ["󾭝", "U+FEB5D"]],
  "💩": ["U+1F4A9", "pile of poo", "1f4a9", ["-", "-"], ["", "U+E4F5"], ["", "U+E05A"], ["󾓴", "U+FE4F4"]],
  "💪": ["U+1F4AA", "flexed biceps", "1f4aa", ["-", "-"], ["", "U+E4E9"], ["", "U+E14C"], ["󾭞", "U+FEB5E"]],
  "💫": ["U+1F4AB", "dizzy symbol", "1f4ab", ["-", "-"], ["", "U+EB5C"], ["", "U+E407"], ["󾭟", "U+FEB5F"]],
  "💬": ["U+1F4AC", "speech balloon", "1f4ac", ["-", "-"], ["", "U+E4FD"], ["-", "-"], ["󾔲", "U+FE532"]],
  "✨": ["U+2728", "sparkles", "2728", ["", "U+E6FA"], ["", "U+EAAB"], ["", "U+E32E"], ["󾭠", "U+FEB60"]],
  "💮": ["U+1F4AE", "white flower", "1f4ae", ["-", "-"], ["", "U+E4F0"], ["-", "-"], ["󾭺", "U+FEB7A"]],
  "💯": ["U+1F4AF", "hundred points symbol", "1f4af", ["-", "-"], ["", "U+E4F2"], ["-", "-"], ["󾭻", "U+FEB7B"]],
  "✅": ["U+2705", "white heavy check mark", "2705", ["-", "-"], ["", "U+E55E"], ["-", "-"], ["󾭊", "U+FEB4A"]],
  "✊": ["U+270A", "raised fist", "270a", ["", "U+E693"], ["", "U+EB83"], ["", "U+E010"], ["󾮓", "U+FEB93"]],
  "✋": ["U+270B", "raised hand", "270b", ["", "U+E695"], ["", "U+E5A7"], ["", "U+E012"], ["󾮕", "U+FEB95"]],
  "✌": ["U+270C", "victory hand", "270c", ["", "U+E694"], ["", "U+E5A6"], ["", "U+E011"], ["󾮔", "U+FEB94"]],
  "👊": ["U+1F44A", "fisted hand sign", "1f44a", ["", "U+E6FD"], ["", "U+E4F3"], ["", "U+E00D"], ["󾮖", "U+FEB96"]],
  "👍": ["U+1F44D", "thumbs up sign", "1f44d", ["", "U+E727"], ["", "U+E4F9"], ["", "U+E00E"], ["󾮗", "U+FEB97"]],
  "☝": ["U+261D", "white up pointing index", "261d", ["-", "-"], ["", "U+E4F6"], ["", "U+E00F"], ["󾮘", "U+FEB98"]],
  "👆": ["U+1F446", "white up pointing backhand index", "1f446", ["-", "-"], ["", "U+EA8D"], ["", "U+E22E"], ["󾮙", "U+FEB99"]],
  "👇": ["U+1F447", "white down pointing backhand index", "1f447", ["-", "-"], ["", "U+EA8E"], ["", "U+E22F"], ["󾮚", "U+FEB9A"]],
  "👈": ["U+1F448", "white left pointing backhand index", "1f448", ["-", "-"], ["", "U+E4FF"], ["", "U+E230"], ["󾮛", "U+FEB9B"]],
  "👉": ["U+1F449", "white right pointing backhand index", "1f449", ["-", "-"], ["", "U+E500"], ["", "U+E231"], ["󾮜", "U+FEB9C"]],
  "👋": ["U+1F44B", "waving hand sign", "1f44b", ["", "U+E695"], ["", "U+EAD6"], ["", "U+E41E"], ["󾮝", "U+FEB9D"]],
  "👏": ["U+1F44F", "clapping hands sign", "1f44f", ["-", "-"], ["", "U+EAD3"], ["", "U+E41F"], ["󾮞", "U+FEB9E"]],
  "👌": ["U+1F44C", "ok hand sign", "1f44c", ["", "U+E70B"], ["", "U+EAD4"], ["", "U+E420"], ["󾮟", "U+FEB9F"]],
  "👎": ["U+1F44E", "thumbs down sign", "1f44e", ["", "U+E700"], ["", "U+EAD5"], ["", "U+E421"], ["󾮠", "U+FEBA0"]],
  "👐": ["U+1F450", "open hands sign", "1f450", ["", "U+E695"], ["", "U+EAD6"], ["", "U+E422"], ["󾮡", "U+FEBA1"]],
  "🌞": ["U+1F31e", "sun with face", "1f31e", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌝": ["U+1F31D", "full moon with face", "1f31d", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌜": ["U+1F31C", "last quarter moon with face", "1f31c", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "🌚": ["U+1F31A", "new moon with face", "1f31a", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😇": ["U+1F607", "smiling face with halo", "1f607", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😈": ["U+1F608", "smiling face with horns", "1f608", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😐": ["U+1F610", "neutral face", "1f610", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😑": ["U+1F611", "expressionless face", "1f611", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😕": ["U+1F615", "confused face", "1f615", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😗": ["U+1F617", "kissing face", "1f617", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😗": ["U+1F617", "kissing face", "1f617", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😛": ["U+1F61B", "face with stuck-out tongue", "1f61b", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😟": ["U+1F61F", "worried face", "1f61f", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😥": ["U+1F625", "disappointed but relieved face", "1f625", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😦": ["U+1F626", "frowning face with open mouth", "1f626", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😧": ["U+1F627", "anguished face", "1f627", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😬": ["U+1F62C", "grimacing face", "1f62c", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😬": ["U+1F62C", "grimacing face", "1f62c", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😮": ["U+1F62E", "face with open mouth", "1f62e", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😯": ["U+1F62F", "hushed face", "1f62f", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😴": ["U+1F634", "sleeping face", "1f634", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😶": ["U+1F636", "face without mouth", "1f636", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
  "😙": ["U+1F619", "kissing face with smiling eyes", "1f619", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]]
};


/**
 * Create map keys rexgep, keys sort by key's length desc.
 *
 * @param {Object} map
 * @return {RegExp}
 */
function _createRegexp(map) {
  var keys = Object.keys(map);
  keys.sort(function (a, b) {
    return b.length - a.length;
  });
  return new RegExp('(' + keys.join('|') + ')', 'g');
}

var EMOJI_RE = null;
/**
 * Convert unified code to HTML.
 *
 * @param {String} text
 * @return {String} html with emoji classname.
 */
function unifiedToHTML(text) {
  return text.replace(jEmoji.EMOJI_RE(), function (_, m) {
    var em = EMOJI_MAP[m];
    return '<span class="emoji emoji' + em[2] + '" title="' + em[1] + '"></span>';
  });
}
jEmoji.unifiedToHTML = unifiedToHTML;

var EMOJI_DOCOMO_MAP = {};
var EMOJI_KDDI_MAP = {};
var EMOJI_SOFTBANK_MAP = {};
var EMOJI_GOOGLE_MAP = {};
var _maps = [EMOJI_DOCOMO_MAP, EMOJI_KDDI_MAP, EMOJI_SOFTBANK_MAP, EMOJI_GOOGLE_MAP];
for (var k in EMOJI_MAP) {
  var em = EMOJI_MAP[k];
  for (var i = 0; i < _maps.length; i++) {
    var index = i + 3;
    var code = em[index][0];
    var map = _maps[i];
    if (code === '-' || map[code]) { // use first code
      continue;
    }
    map[code] = k;
  }
}

var EMOJI_DOCOMO_RE = null;
/**
 * Convert DoCoMo code to Unified code.
 *
 * @param {String} text
 * @return {String}
 */
function docomoToUnified(text) {
  return text.replace(jEmoji.EMOJI_DOCOMO_RE(), function (_, m) {
    return EMOJI_DOCOMO_MAP[m];
  });
}
jEmoji.docomoToUnified = docomoToUnified;

var EMOJI_KDDI_RE = null;
/**
 * Convert KDDI code to Unified code.
 *
 * @param {String} text
 * @return {String}
 */
function kddiToUnified(text) {
  return text.replace(jEmoji.EMOJI_KDDI_RE(), function (_, m) {
    return EMOJI_KDDI_MAP[m];
  });
}
jEmoji.kddiToUnified = kddiToUnified;

var EMOJI_SOFTBANK_RE = null;
/**
 * Convert SoftBank code to Unified code.
 *
 * @param {String} text
 * @return {String}
 */
function softbankToUnified(text) {
  return text.replace(jEmoji.EMOJI_SOFTBANK_RE(), function (_, m) {
    return EMOJI_SOFTBANK_MAP[m];
  });
}
jEmoji.softbankToUnified = softbankToUnified;

var EMOJI_GOOGLE_RE = null;
/**
 * Convert Google code to Unified code.
 *
 * @param {String} text
 * @return {String}
 */
function googleToUnified(text) {
  return text.replace(jEmoji.EMOJI_GOOGLE_RE(), function (_, m) {
    return EMOJI_GOOGLE_MAP[m];
  });
}
jEmoji.googleToUnified = googleToUnified;

return jEmoji;

});
