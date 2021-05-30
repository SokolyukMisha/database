'use strict';

class HashTable {
    constructor() {
        this.values = {};
        this.length =  0;
        this.size =  0;
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
        for(const item of arr) {
            this.addOne(item);
        }
    }
    
    search(key) {
        const find = {};
        if (typeof key === 'string') {
            for (const hash in this.values) {
                for (const item in this.values[hash]) {
                    if (this.values[hash][item] === key) {
                        find[hash] = this.values[hash];
                    }
                }
            }
        }
        else if (typeof key === 'object') {
            for (const hash in this.values) {
                find[hash] = this.values[hash];
            }
            for (const hash in this.values) {
                for (const keys in key) {
                    if (this.values[hash].hasOwnProperty(keys)) {
                        if (this.values[hash][keys] !== key[keys]) {
                            delete find[hash];
                        }
                    else return null;
                    }
                }
            }
        }
        if (Object.keys(find).length == 0) return null;
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
        this.length = this.length - Object.keys(ht.values[index]).length
        for (let i = index; i <= this.size; i++) {
            this.values[-i] = this.values[i];
        }
        delete this.values[index];
        for (let i = index; i < this.size; i++) {
            this.values[i] = this.values[-(i + 1)];
            delete this.values[-i]
        }
        delete this.values[this.size];
        delete this.values[-(this.size)];
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
        if(reverse) {
            for (let i = 1, end = Object.keys(this.values).length; i <= end / 2; i++) {
                temp = this.values[i];
                this.values[i] = this.values[end - i + 1];
                this.values[end - i + 1] = temp;
            }
        }
    }
}
