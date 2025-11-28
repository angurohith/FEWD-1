// Modern array method examples (arrow functions + extras)
const nums = [1, 2, 3, 4, 5];

// map -> multiply each value by 2
const newArr = nums.map(num => num * 2);
console.log('map ->', newArr); // [2, 4, 6, 8, 10]

// filter -> keep only even numbers
const filteredArr = nums.filter(num => num % 2 === 0);
console.log('filter ->', filteredArr); // [2, 4]

// reduce -> sum all numbers
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log('reduce (sum) ->', sum); // 15

// forEach -> iterate and log each value with index
console.log('forEach ->');
nums.forEach((num, idx) => console.log(`index ${idx}: ${num}`));

// Chaining example: filter evens then double them
const doubleEvens = nums
    .filter(n => n % 2 === 0)
    .map(n => n * 2);
console.log('chaining (double evens) ->', doubleEvens); // [4, 8]

// Small reusable helper using map
const multiply = (arr, factor = 1) => arr.map(x => x * factor);
console.log('multiply helper ->', multiply(nums, 3)); // [3, 6, 9, 12, 15]