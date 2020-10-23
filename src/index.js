export const solution = (letters) => {
  if (typeof letters !== 'string') {
    throw new Error('Input is not a string');
  }

  const lettersOnly = RegExp('^[a-zA-Z]+$');
  if (!lettersOnly.test(letters)) {
    throw new Error('Input contains unexpected characters');
  }

  const values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const chars = letters.toUpperCase().split('');
  const charValues = chars.map(
    (letter) => values.indexOf(letter),
  );

  const value = charValues.reverse().reduce(
    (acc, v, index) => (
      index === 0
        ? v
        : acc + (v + 1) * (26 ** index)
    ),
    0,
  );

  return value;
};

export default {
  solution,
};
