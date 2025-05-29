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

  getSize() {
    return this.#size;
  }

  append(key, value) {
    let newNode = new Node(key, value);

    if (this.startNode == null) {
      this.startNode = newNode;
    } else {
      let currentNode = this.startNode;

      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
    this.#size++;
  }

  pop() {
  if (this.startNode == null) return;

  if (this.startNode.next == null) {
    this.startNode = null;
  } else {
    let currentNode = this.startNode;
    let prevNode = null;
    while (currentNode.next != null) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null;
  }
  this.#size--;
}

  head() {
    return this.startNode;
  }

  tail() {
    if (this.startNode == null) {
      return null;
    }

    let currentNode = this.startNode;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  find(key) {
    if (this.startNode == null) {
      return -1;
    }
    let currentNode = this.startNode;
    let index = 0;
    while (currentNode != null) {
      if (currentNode.key == key) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return -1;
  }

  at(index) {
    if (this.startNode == null) {
      return null;
    }
    let i = 0;
    let currentNode = this.startNode;
    while (currentNode != null && index != i) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  removeAt(index) {
    if (index < 0) {
      console.log("index must be greater than or equal to 0");
      return;
    }
    if (this.startNode != null) {
      let i = 0;
      let currentNode = this.startNode;
      let prevNode = null;
      while (currentNode.next != null && index != i) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      if (index != i) {
        console.log("Index must be lower than " + this.#size);
        return;
      }
      if (index == 0) {
        this.startNode = currentNode.next;
      } else {
        prevNode.next = currentNode.next;
      }
      this.#size--;
    } else {
      console.log("List is already empty");
    }
  }

  toString() {
    let currentNode = this.startNode;
    let str = "";
    while (currentNode != null) {
      str += "( " + currentNode.value + " ) -> ";
      currentNode = currentNode.next;
    }
    str += "null";
    return str;
  }

  getKeyValuePair(){
    let arr = []
    let currentNode = this.startNode;
    while (currentNode != null) {
      arr.push([currentNode.key, currentNode.value])
      currentNode = currentNode.next;
    }
    return arr;
  }

  clear() {
  this.startNode = null;
  this.#size = 0;
}
}

export { LinkedList };
