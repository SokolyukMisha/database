'use strict';

class HashTable {
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 0;
  }

  addOne(elem) {
    const hash = ++this.size;
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    for (const key in elem) {
      if (!this.values[hash].hasOwnProperty(key)) {
        this.length++;
      }
      this.values[hash][key] = elem[key];
    }
  }

  addMany(arr) {
    for (const item of arr) {
      this.addOne(item);
    }
  }

  searchByValue(value) {
    const find = {};
    if (typeof value === 'string') {
      for (const hash in this.values) {
        for (const item in this.values[hash]) {
          if (this.values[hash][item] === value) {
            find[hash] = this.values[hash];
          }
        }
      }
    } else if (typeof value === 'object') {
      for (const hash in this.values) {
        find[hash] = this.values[hash];
      }
      for (const hash in this.values) {
        for (const keys in value) {
          if (this.values[hash].hasOwnProperty(keys)) {
            if (this.values[hash][keys] !== value[keys]) {
              delete find[hash];
            }
          } else return null;
        }
      }
    }
    if (Object.keys(find).length === 0) return null;
    return find;
  }

  searchByKey(key) {
    const find = {};
    for (const hash in this.values) {
      if (
        this.values.hasOwnProperty(hash) &&
                this.values[hash].hasOwnProperty(key)
      ) {
        find[hash] = this.values[hash][key];
      }
    }
    if (Object.keys(find).length === 0) return null;
    return find;
  }

  change(hash, key, value) {
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      this.length++;
    }
    this.values[hash][key] = value;
  }

  remove(index) {
    this.length -= Object.keys(this.values[index]).length;
    for (let i = index; i <= this.size; i++) {
      this.values[-i] = this.values[i];
    }
    delete this.values[index];
    for (let i = index; i < this.size; i++) {
      this.values[i] = this.values[-(i + 1)];
      delete this.values[-i];
    }
    delete this.values[this.size];
    delete this.values[-this.size];
    this.size--;
  }

  sort(key, reverse) {
    let temp;
    for (let i = 0; i < Object.keys(this.values).length - 1; i++) {
      for (let j = 1; j < Object.keys(this.values).length - i; j++) {
        if (this.values[j][key] > this.values[j + 1][key]) {
          temp = this.values[j];
          this.values[j] = this.values[j + 1];
          this.values[j + 1] = temp;
        }
      }
    }
    if (reverse) {
      for (
        let i = 1, end = Object.keys(this.values).length;
        i <= end / 2;
        i++
      ) {
        temp = this.values[i];
        this.values[i] = this.values[end - i + 1];
        this.values[end - i + 1] = temp;
      }
    }
  }

  concatenation(obj) {
    this.addMany(Object.values(obj.values));
  }
}
