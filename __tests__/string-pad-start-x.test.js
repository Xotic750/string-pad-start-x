let padStart;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  padStart = require('../../index.js');
} else {
  padStart = returnExports;
}

describe('padStart', function() {
  it('is a function', function() {
    expect(typeof padStart).toBe('function');
  });

  it('should throw when target is null or undefined', function() {
    expect(function() {
      padStart();
    }).toThrow();

    expect(function() {
      padStart(void 0);
    }).toThrow();

    expect(function() {
      padStart(null);
    }).toThrow();
  });

  it('normal cases', function() {
    expect(padStart('a', 3, 'b')).toBe('bba', 'string pads start with single character');
    expect(padStart('abc', 3, 'd')).toBe('abc', 'string already of maximum length noops');
    expect(padStart('abc', -3, 'd')).toBe('abc', 'string already larger than maximum length noops');
    expect(padStart('cd', 3, 'ab')).toBe('acd', 'string with maximum length equal to length plus filler length, pads');
    expect(padStart('abc')).toBe('abc', 'absent maximum length is noop');
    expect(padStart('a', 3)).toBe('  a', 'absent fillStr defaults to a space');
    expect(padStart('ed', 6, null)).toBe('nulled', 'non-string fillStr gets stringified');
  });

  it('truncated fill string', function() {
    expect(padStart('a', 2, 'bc'), 'ba', 'truncates at the provided max length');
  });
});
