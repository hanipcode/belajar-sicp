const square = (x) => x * x;
const isGoodEnough = (guess, x) => guess === improve3rd(guess, x);
const average = (x, y) => (x + y) / 2;
const improve = (guess, x) => average(guess, x / guess);
const improve3rd = (guess, x) => (x / square(guess) + 2 * guess) / 3;

const sqrtIter = (guess, x) =>
  isGoodEnough(guess, x) ? guess : sqrtIter(improve3rd(guess, x), x);

const sqrt = (x) => sqrtIter(1.0, x);

// const factorial = (n) => (n === 1 ? 1 : n * factorial(n - 1));

const factIter = (product, counter, maxCounter) =>
  counter > maxCounter
    ? product
    : factIter(counter * product, counter + 1, maxCounter);

const factorial = (n) => factIter(1, 1, n);

// const fib = (n) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

const fibIter = (a, b, count) => {
  console.log(a, b, count);
  if (count === 0) {
    return b;
  }
  return fibIter(a + b, a, count - 1);
};

const fib = (n) => fibIter(1, 0, n);

const kindsOfCoin = {
  1: 1,
  2: 5,
  3: 10,
  4: 25,
  5: 50,
};

const cc = (amount, coinKind) => {
  if (amount === 0) return 1;
  if (amount < 0 || coinKind === 0) return 0;
  return (
    cc(amount, coinKind - 1) + cc(amount - kindsOfCoin[coinKind], coinKind)
  );
};
const changeAmount = (amount) => cc(amount, 5);

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

console.log(gcd(17, 29));
