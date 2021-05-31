'use strict';

class HashTable {
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 0;
  }

  addOne(elem) {
    const index = ++this.size;
    const has = Object.prototype.hasOwnProperty;
    if (!has.call(this.values, index)) {
      this.values[index] = {};
    }
    for (const key in elem) {
      if (!has.call(this.values[index], key)) {
        this.length++;
      }
      this.values[index][key] = elem[key];
    }
  }

  addMany(arr) {
    for (const item of arr) {
      this.addOne(item);
    }
  }

  searchByValue(value) {
        const find = {};
        if (typeof value !== 'object') {
            for (const index in this.values) {
                for (const item in this.values[index]) {
                    if (this.values[index][item] === value) {
                        find[index] = this.values[index];
                    }
                }
            }
        } else {
            loop: for (const index in this.values) {
                for (const keys in value) {
                    const has = Object.prototype.hasOwnProperty;
                    if (has.call(this.values[index], keys)) {
                        if (this.values[index][keys] !== value[keys]) {
                            continue loop;
                        }
                    } else return null;
                }
                find[index] = this.values[index];
            }
        }
        if (Object.keys(find).length === 0) return null;
        return find;
    }

searchByKey(key) {
        key = key.toLowerCase();
        const find = {};
        for (const index in this.values) {
            const has = Object.prototype.hasOwnProperty;
            console.log(has.call(this.values[index], key));
            if (has.call(this.values[index], key)) {
                find[index] = this.values[index];
            }
        }
        if (Object.keys(find).length === 0) return null;
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
    for (let i = 0; i < Object.keys(this.values).length - 1; i++) {
      for (let j = 1; j < Object.keys(this.values).length - i; j++) {
        if (this.values[j][key] > this.values[j + 1][key]) {
          const temp = this.values[j];
          this.values[j] = this.values[j + 1];
          this.values[j + 1] = temp;
        }
      }
    }
    if (reverse) {
      for (
        let index = 1, lastIndex = Object.keys(this.values).length;
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
}
