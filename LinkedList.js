class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
    #size;

  constructor() {
    this.startNode = null;
    this.#size = 0;
  }

  getSize(){
    return this.#size;
  }

  append(key, value) {
    let newNode = new Node(key, value);

    if (this.startNode == null) {
      this.startNode = newNode;
    } else {
      let currentNode = this.startNode;

      while (currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = newNode;
    }
    this.#size++;
  }

  find(key) {
    if (this.startNode == null) {
      return null;
    }
    let currentNode = this.startNode;
    let index = 0;
    while (currentNode != null) {
      if (currentNode.key == key) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  at(index) {
    if (this.startNode == null) {
      return null;
    }
    let i = 0;
    let currentNode = this.startNode;
    while (currentNode != null && index != i) {
      currentNode = currentNode.nextNode;
      i++;
    }
    return currentNode;
  }

  insertAt(key, value, index) {
    if (index < 0) {
      return;
    }
    let newNode = new Node(key, value);

    if (this.startNode == null) {
      this.startNode = newNode;
    } else {
      let i = 0;
      let currentNode = this.startNode;
      let prevNode = null;
      while (currentNode != null && index != i) {
        prevNode = currentNode;
        currentNode = currentNode.nextNode;
        i++;
      }
      prevNode.nextNode = newNode;
      newNode.nextNode = currentNode;
    }
    this.#size++;
  }

  removeAt(index) {
    if (index < 0) {
      console.log("index must be greater than or equal to 0")
      return;
    }
    if (this.startNode != null) {
      let i = 0;
      let currentNode = this.startNode;
      let prevNode = null;
      while (currentNode.nextNode != null && index != i) {
        prevNode = currentNode;
        currentNode = currentNode.nextNode;
        i++;
      }
      if (index != i) {
        return;
      }
      if(index == 0){
        this.startNode = currentNode.nextNode;
      }else{
        prevNode.nextNode = currentNode.nextNode;
      }
    }else{
      console.log("List is already empty")
    }
  }

  toString() {
    let currentNode = this.startNode;
    let str = "";
    while (currentNode != null) {
      str += "( " + currentNode.value + " ) -> ";
      currentNode = currentNode.nextNode;
    }
    str += "null";
    return str;
  }
}


export {LinkedList};