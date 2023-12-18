const farsiDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function toPersianNumbersWithComma(n) {
  const numWithCommas = numberWithCommas(n);
  const persianNumber = toPersianNumbers(numWithcommas);
  return persianNumber;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toPersianNumbers(n) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
