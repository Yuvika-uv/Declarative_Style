const numbers = [10, 25, 5, 30, 15, 18];

const evenSum = numbers.filter(number => number % 2 === 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const oddSum = numbers.filter(number => number % 2 !== 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of even elements:", evenSum);
console.log("Sum of odd elements:", oddSum);
