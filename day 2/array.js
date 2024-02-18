//map
// const numbers = [1, 2, 3];
// const doubled = numbers.map(number => number * 2); // [2, 4, 6]
//filter
const fruits = ["apple", "banana", "orange"];
const longFruits = fruits.filter(fruit => fruit.length > 5); // ["banana", "orange"]

//reduce
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0); // 10