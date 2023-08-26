const numbers = [10, 25, 5, 30, 15, 18];

const maxNumber = numbers.reduce((max, current) => Math.max(max, current), -Infinity);

console.log(maxNumber);
