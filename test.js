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
//search
console.log(TB.searchByKey('name'));
console.log(TB.searchByValue('Sasha'));
console.log(TB.searchByValue({ name: 'Misha', number: +380985660644 }));

//remowe
TB.remove(3);
console.log(TB);

//sort
TB.sort('name', 1);
console.log(TB);


const table = new HashTable();

table.addMany([
  { name: 'Tolik', Number: +380986233900, age: 19 },
  { name: 'Danya', Number: +380664346307, age: 18 },
  { name: 'Misha', Number: +380985660644, age: 17 },
  { name: 'Sasha', Number: +380955396374, age: 18 },
  { name: 'Vanya', Number: +380955396374, age: 18 },
]);

//intersection
HashTable.intersection(TB, table);

//difference
HashTable.difference(TB, table);

//concatenation
TB.concatenation(table);
console.log(TB);
