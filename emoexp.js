RegExp.prototype.toEmoExp = function() {
	return this.toString().allReplace(charReplacements)
}

fromEmoExp = function(emo) {
	return new RegExp(emo.allReverseReplace(charReplacements).substring(1, emo.allReverseReplace(charReplacements).length-1))
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

String.prototype.allReplace = function(obj) {
  var retStr = this;
  for (var x in obj) {
    retStr = retStr.replaceAll(x, obj[x]);
  }
  return retStr;
};

String.prototype.allReverseReplace = function(obj) {
  var retStr = this;
  for (var x in obj) {
    retStr = retStr.replaceAll(obj[x], x);
  }
  return retStr;
};

let charReplacements = {
  // One Numerical Digit
  "\\d": "🔢",

  // One ascii letter or digit or underscore
  "\\w": "🔡",

  // Whitespace Character
  "\\s": "⬜",

  // Not a digit
  "\\D": "🅰️",

  // Not a word char
  "\\W": "🔣",

  // Not a whitespace char
  "\\S": "⬛",

  // One or more
  "+": "🔁",

  // Numerical quantifier start and end
  "{": "🤜",
  "}": "🤛",

  // Zero or more times
  "*": "👌",

  // Non capture group
  "?:": "🙈",

  // Positive Look ahead
  "?=": "📈",

  // Positive look behind
  "?<=": "❤️",

  // Negative look ahead
  "?!": "📉",

  // Negative look behind
  "?<!": "💔",

  // Once or more
  "?": "🤷‍",

  // Any char except line break
  ".": "🙆",

  // Alternation / OR
  "|": "🔀",

  // Capture Group
  "(": "👉",
  ")": "👈",

  // Tab
  "\\t": "💳",

  // Carriage return
  "\\r": "🚋",

  // Newline
  "\\n": "↩️",

  // One character not a newline
  "\\N": "☝",

  // One character that is not horizontal whitespace
  "\\H": "🖕",

  // Character Classes
  "[^": "▶️🚫", //nope
	"[": "▶️",
  "]": "◀️",

  // Start of string or line
  "^": "🆕",

  // End of string or line
  "$": "🔚",

  // Beginning or string or end of previous match
  "\\G": "⏭",

  // Word boundary
  "\\b": "🆒",

  // Not a word boundary
  "\\B": "🆖"
}
