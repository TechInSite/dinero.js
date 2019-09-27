/**
 * Returns how many fraction digits a number has.
 *
 * @param n The number to test.
 */
function countFractionDigits(n: number) {
  const [, fractionDigits] = n.toString().split(".");

  return (fractionDigits && fractionDigits.length) || 0;
}

export default countFractionDigits;
