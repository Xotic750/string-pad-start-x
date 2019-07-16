import padStart from '../src/string-pad-start-x';

describe('padStart', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof padStart).toBe('function');
  });

  it('should throw when target is null or undefined', function() {
    expect.assertions(3);
    expect(function() {
      padStart();
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      padStart(void 0);
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      padStart(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('normal cases', function() {
    expect.assertions(7);
    expect(padStart('a', 3, 'b')).toBe('bba', 'string pads start with single character');
    expect(padStart('abc', 3, 'd')).toBe('abc', 'string already of maximum length noops');
    expect(padStart('abc', -3, 'd')).toBe('abc', 'string already larger than maximum length noops');
    expect(padStart('cd', 3, 'ab')).toBe('acd', 'string with maximum length equal to length plus filler length, pads');
    expect(padStart('abc')).toBe('abc', 'absent maximum length is noop');
    expect(padStart('a', 3)).toBe('  a', 'absent fillStr defaults to a space');
    expect(padStart('ed', 6, null)).toBe('nulled', 'non-string fillStr gets stringified');
  });

  it('truncated fill string', function() {
    expect.assertions(1);
    expect(padStart('a', 2, 'bc')).toBe('ba', 'truncates at the provided max length');
  });
});
