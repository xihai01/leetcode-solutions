class Node {
  constructor(value = null, node = null) {
    this.value = value;
    this.next = node;
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this._size = 0;
    this.head = head;
    this.tail = tail;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    this._size += size;
  }

  // linked list methods //

  empty() {
    if (this.head === null && this.tail === null) {
      return true;
    }
    return false;
  }

  // adds a new node with value at end
  push_back(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      const lastNode = this.tail;
      lastNode.next = newNode;
    }
    this.tail = newNode;
    this.size = 1;
  }

  // adds a new node with value at front
  push_front(value) {
    const newNode = new Node(value);
    this.head === null ? (this.tail = newNode) : (newNode.next = this.head);
    this.head = newNode;
    this.size = 1;
  }

  // removes last node and returns its value
  pop_back() {
    if (this.tail === null) {
      return null;
    }
    const value = this.tail.value;
    let currNode = this.head;
    while (currNode.next !== this.tail) {
      currNode = currNode.next;
    }
    currNode.next = null;
    this.tail = currNode;
    this.size = -1;
    return value;
  }

  // removes first node and returns its value
  pop_front() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    // one item
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size = -1;
    return value;
  }
}

const printList = function (linkedList) {
  let i = linkedList.head;
  let output = "";
  while (i !== null) {
    output += i.value + " -> ";
    i = i.next;
  }
  console.log(output + "null");
};

module.exports = { Node, LinkedList, printList };
