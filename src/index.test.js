import { solution } from './index';

describe('Solution', () => {
  const testCases = [
    { input: 'A', expected: 0 },
    { input: 'B', expected: 1 },
    { input: 'Z', expected: 25 },
    { input: 'AA', expected: 26 },
    { input: 'AB', expected: 27 },
    { input: 'BA', expected: 52 },
    { input: 'BZ', expected: 77 },
    { input: 'CA', expected: 78 },
    { input: 'ZZ', expected: 701 },
    { input: 'AAA', expected: 702 },
  ];

  testCases.forEach((testCase) => {
    it(`should convert ${testCase.input} to ${testCase.expected}`, () => {
      expect(solution(testCase.input)).toBe(testCase.expected);
    });
  });

  it('should handle lower case strings', () => {
    expect(solution('a')).toBe(0);
  });

  it('throws an error for non-string input', () => {
    try {
      solution(23);
    } catch (e) {
      expect(e).toStrictEqual(new Error('Input is not a string'));
    }
  });

  it('throws an error for string input that contains unexpected characters', () => {
    try {
      solution('A4B');
    } catch (e) {
      expect(e).toStrictEqual(new Error('Input contains unexpected characters'));
    }
  });
});
