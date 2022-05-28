class Node {
  constructor(value = null, node = null) {
    this.value = value;
    this.next = node;
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this.size = 0;
    this.head = head;
    this.tail = tail;
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
