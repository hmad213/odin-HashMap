import { LinkedList } from "./LinkedList.js";

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.8;
    this.size = 0;
    this.buckets = Array.from(
      { length: this.capacity },
      () => new LinkedList(),
    );
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  getHashVal(key){
    let hashVal = this.hash(key);

    if (hashVal < 0 || hashVal >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    return hashVal;
  }

  set(key, value) {
    let hashVal = this.getHashVal(key);

    let index = this.buckets[hashVal].find(key);
    if (index == -1) {
      this.buckets[hashVal].append(key, value);
      this.size++;
    } else {
      this.buckets[hashVal].at(index).value = value;
    }
  }

  get(key) {
    let hashVal = this.getHashVal(key);

    let index = this.buckets[hashVal].find(key);
    if (index == -1) {
      return null;
    } else {
      return this.buckets[hashVal].at(index).value;
    }
  }

  has(key){
    let hashVal = this.getHashVal(key)

    return this.buckets[hashVal].find(key) != -1;
  }

  remove(key){
    let hashVal = this.getHashVal(key)

    let index = this.buckets[hashVal].find(key);
    if (index == -1) {
      return false;
    } else {
      this.buckets[hashVal].removeAt(index);
      this.size--;
      return true;
    }
  }

  length(){
    return this.size;
  }

  clear(){
    for(let i = 0; i < this.capacity; i++){
        this.buckets[i].clear();
    }
    this.size = 0;
  }

  keys(){
    let keys = []
    for(let i = 0; i < this.capacity; i++){
        let arr = this.buckets[i].getKeyValuePair();
        for(let j = 0; j < arr.length; j++){
            keys.push(arr[j][0]);
        }
    }
    return keys;
  }

  values(){
    let values = []
    for(let i = 0; i < this.capacity; i++){
        let arr = this.buckets[i].getKeyValuePair();
        for(let j = 0; j < arr.length; j++){
            values.push(arr[j][1]);
        }
    }
    return values;
  }

  entries(){
    let pairs = []
    for(let i = 0; i < this.capacity; i++){
        let arr = this.buckets[i].getKeyValuePair();
        for(let j = 0; j < arr.length; j++){
            pairs.push(arr[j]);
        }
    }
    return pairs;
  }

  print() {
    for (let i = 0; i < this.capacity; i++) {
      console.log(`Bucket ${i}: ${this.buckets[i].toString()}`);
    }
  }
}

let h = new HashMap();
h.set("apple", "red");
h.set("banana", "yellow");
h.set("carrot", "orange");
h.set("dog", "brown");
h.set("elephant", "gray");
h.set("elephant", "magenta");
h.set("frog", "green");
h.set("grape", "purple");
h.set("hat", "black");
h.set("ice cream", "white");
h.set("jacket", "blue");
h.set("kite", "pink");
h.set("lion", "golden");
console.log(h.length());
console.log(h.keys());
console.log(h.values());
console.log(h.entries());
h.print();
