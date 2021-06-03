'use strict';

const HashTable = require('./main.js');

//create object of type hash table
const TB = new HashTable();

//add 1 item
TB.addOne({ name: 'Tolik', number: +380986233900, age: 19 });
console.log(TB);

//add many items
TB.addMany([
  { name: 'Danya', number: +380664346307, age: 18 },
  { name: 'Misha', number: +380985660644, age: 17 },
  { name: 'Sasha', number: +380955396374, age: 18 },
  { name: 'Vanya', number: +380955396374, age: 18 },
]);
console.log(TB);

//change item
TB.change(1, 'name', 'Ivan');
console.log(TB);
