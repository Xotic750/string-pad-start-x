import requireObjectCoercible from 'require-object-coercible-x';
import toStr from 'to-string-x';
import toLength from 'to-length-x';
var EMPTY_STRING = '';
var slice = EMPTY_STRING.slice;
var SPACE = ' '; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method pads the current string with another string (repeated, if needed)
 * so that the resulting string reaches the given length. The padding is applied
 * from the start (left) of the current string.
 *
 * @param {string} string - The string to pad.
 * @throws {TypeError} If target is null or undefined.
 * @param {number} targetLength - The length of the resulting string once the
 *  current string has been padded. If the value is lower than the current
 *  string's length, the current string will be returned as is.
 * @param {string} [padString] - The string to pad the current string with. If
 *  this string is too long to stay within the target length, it will be
 *  truncated and the left-most part will be applied. The default value for this
 *  parameter is " " (U+0020).
 * @returns {string} A String of the specified length with the pad string
 *  applied from the start.
 */
// eslint-enable jsdoc/check-param-names

var padStart = function padStart(string, targetLength) {
  var str = toStr(requireObjectCoercible(string));
  var stringLength = toLength(str.length);
  /* eslint-disable-next-line prefer-rest-params,no-void */

  var fillString = arguments.length > 2 ? arguments[2] : void 0;
  var filler = typeof fillString === 'undefined' ? EMPTY_STRING : toStr(fillString);

  if (filler === EMPTY_STRING) {
    filler = SPACE;
  }

  var intMaxLength = toLength(targetLength);

  if (intMaxLength <= stringLength) {
    return str;
  }

  var fillLen = intMaxLength - stringLength;

  while (filler.length < fillLen) {
    var fLen = filler.length;
    var remainingCodeUnits = fillLen - fLen;
    filler += fLen > remainingCodeUnits ? slice.call(filler, 0, remainingCodeUnits) : filler;
  }

  var truncatedStringFiller = filler.length > fillLen ? slice.call(filler, 0, fillLen) : filler;
  return truncatedStringFiller + str;
};

export default padStart;

//# sourceMappingURL=string-pad-start-x.esm.js.map