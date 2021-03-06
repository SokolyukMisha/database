'use strict';

class HashTable {
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 0;
  }

  addOne(elem) {
    const index = ++this.size;
    this.values[index] = {};
    for (const key in elem) {
      this.length++;
      this.values[index][key] = elem[key];
    }
  }

  addMany(arr) {
    for (const item of arr) {
      this.addOne(item);
    }
  }

  searchByValue(value) {
    const find = [];
    const arr = Object.values(this.values);
    if (typeof value !== 'object') {
      for (const item of arr) {
        if (Object.values(item).includes(value)) {
          find.push(item);
        }
      }
    } else {
      loop: for (const item of arr) {
        for (const keys in value) {
          const has = Object.prototype.hasOwnProperty;
          if (has.call(item, keys)) {
            if (item[keys] !== value[keys]) {
              continue loop;
            }
          } else continue loop;
        }
        find.push(item);
      }
    }
    if (find.length === 0) return null;
    return find;
  }

  searchByKey(key) {
    key = key.toLowerCase();
    const find = [];
    const arr = Object.values(this.values);
    const has = Object.prototype.hasOwnProperty;
    for (const item of arr) {
      if (has.call(item, key)) {
        find.push(item);
      }
    }
    if (find.length === 0) return null;
    return find;
  }

  change(index, key, value) {
    const has = Object.prototype.hasOwnProperty;
    if (!has.call(this.values, index)) {
      this.values[index] = {};
    }
    if (!has.call(this.values[index], key)) {
      this.length++;
    }
    this.values[index][key] = value;
  }

   remove(index) {
    if (!Object.keys(this.values).includes(index).toString())
      return console.log('there is no such index in table');
    this.length -= Object.keys(this.values[index]).length;
    delete this.values[index];
    for(let i = index; i< this.size; i++){
      this.values[i] = this.values[i+1];
    }
    delete this.values[this.size];
    this.size--;
  }

  sort(key, reverse) {
    for (let i = 0; i < this.size - 1; i++) {
      for (
          let index = 1;
          index < this.size - i;
          index++
      ) {
        if (this.values[index][key] > this.values[index + 1][key]) {
          const temp = this.values[index];
          this.values[index] = this.values[index + 1];
          this.values[index + 1] = temp;
        }
      }
    }
    if (reverse) {
      for (
          let index = 1, lastIndex = this.size;
          index <= lastIndex / 2;
          index++
      ) {
        const reverseIndex = lastIndex - index + 1;
        const temp = this.values[index];
        this.values[index] = this.values[reverseIndex];
        this.values[reverseIndex] = temp;
      }
    }
  }

  concatenation(obj) {
    this.addMany(Object.values(obj.values));
  }
  
  static intersection(ht1, ht2) {
    const result = [];
    const arr1 = Object.values(ht1.values);
    const arr2 = Object.values(ht2.values);
    for (const item of arr1) {
      for (const elem of arr2) {
        if (JSON.stringify(elem) === JSON.stringify(item)) result.push(item);
      }
    }
    return console.log(result);
  }
  
   static difference(ht1, ht2) {
    const result = [];
    const arr1 = Object.values(ht1.values);
    const arr2 = Object.values(ht2.values);
    loop: for (const item of arr1) {
      for (const elem of arr2) {
        if (JSON.stringify(elem) === JSON.stringify(item)) continue loop;
      }
      result.push(item);
    }
    return console.log(result);
  }
}

module.exports = HashTable;
