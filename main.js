'use strict'
class HashTable {
    constructor() {
        this.values = {};
        this.length =  0;
        this.size =  0;
    }

    new() {
        this.size++;
    }

    add(key, value) {
        const hash = this.size;
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.length++;
        }
        this.values[hash][key] = value;
    }

    search(key) {
        const find = {};
        if (typeof key === 'string') {
            for (const hash in this.values) {
                if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
                    find[hash] = this.values[hash][key];
                }
            }
        }
        else if (typeof key === 'object') {
            for (const hash in this.values) {
                for ( const keys in key) {
                    if (this.values[hash][keys] != key[keys]) break;
                    find[hash] = this.values[hash];
                }
            }
        }
        if (Object.keys(find).length == 0) return null;
        return find;
    }

    log(){
        for (const hash in this.values){
            console.log(this.values[hash]);
        }
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
}
