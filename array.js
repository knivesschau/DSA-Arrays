const Memory = require('./memory');
const memory = new Memory();

class Array {
    constructor() {
        this.length = 0; 
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);

        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }

        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

Array.SIZE_RATIO = 3;

function main() {
    Array.SIZE_RATIO = 3;
    let arr = new Array();
    
    arr.push(3); // by itself - length 1, capacity 3, ptr 0 
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10); // length 6 (how many values there are), capacity 12 (double memory), ptr 3 

    arr.pop();
    arr.pop();
    arr.pop(); // length 3 (took out half of the values), capacity 12, ptr 3 

    console.log(arr);

    console.log(arr.get(0));

    arr.remove(2);
    arr.remove(1);
    arr.remove(0);

    arr.push("tauhida");

    console.log(arr.get(0));

    console.log(arr);
}

main();

module.exports = Array;