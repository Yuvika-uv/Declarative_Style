const numbers = [10, 25, 5, 30, 15, 18];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / numbers.length;

console.log(average);
