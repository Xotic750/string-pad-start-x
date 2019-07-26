<a
  href="https://travis-ci.org/Xotic750/string-pad-start-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/string-pad-start-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/string-pad-start-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/string-pad-start-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/string-pad-start-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/string-pad-start-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/string-pad-start-x"
  title="npm version">
<img src="https://badge.fury.io/js/string-pad-start-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/string-pad-start-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/string-pad-start-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/string-pad-start-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/string-pad-start-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_string-pad-start-x"></a>

## string-pad-start-x

Pads a string with another string (repeated, if needed).

<a name="exp_module_string-pad-start-x--module.exports"></a>

### `module.exports(string, targetLength, [padString])` ⇒ <code>string</code> ⏏

This method pads the current string with another string (repeated, if needed)
so that the resulting string reaches the given length. The padding is applied
from the start (left) of the current string.

**Kind**: Exported function  
**Returns**: <code>string</code> - A String of the specified length with the pad string
applied from the start.  
**Throws**:

- <code>TypeError</code> If target is null or undefined.

| Param        | Type                | Description                                                                                                                                                                                                                |
| ------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| string       | <code>string</code> | The string to pad.                                                                                                                                                                                                         |
| targetLength | <code>number</code> | The length of the resulting string once the current string has been padded. If the value is lower than the current string's length, the current string will be returned as is.                                             |
| [padString]  | <code>string</code> | The string to pad the current string with. If this string is too long to stay within the target length, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

**Example**

```js
import padStart from 'string-pad-start-x';

console.log(padStart('a', 3, 'b')); // 'bba'
console.log(padStart('a', 3)); // '  a'
console.log(padStart('a', 2, 'bc')); // 'ba'
```
