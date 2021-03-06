const { Node, LinkedList, printList } = require("./linkedList");

// solution 1
// time - O(n) | space - O(1)
// 1 -> 1 -> 2 -> 2-> 3
const removeDuplicates = function (linkedList) {
  if (linkedList.next === null) return linkedList;
  let lastUniqueNode = linkedList; // 1
  let nextNode = linkedList; // 1
  while (nextNode !== null) {
    // update nextNode to point to next node
    nextNode = nextNode.next;
    if (nextNode === null) {
      lastUniqueNode.next = nextNode;
    } else if (nextNode.value !== lastUniqueNode.value) {
      // update last..Node to point to nextNode
      lastUniqueNode.next = nextNode;
      lastUniqueNode = nextNode;
    }
  }
  return linkedList;
};

/* const removeDuplicates = function (linkedList) {
  if (linkedList.next === null) return linkedList;
  let lastUniqueNode = linkedList; // 3
  let nextNode = linkedList; // null
  while (nextNode !== null) {
    if (nextNode.value === lastUniqueNode.value) {
      // update nextNode to point to next node
      nextNode = nextNode.next;
    } else {
      // update last..Node to point to nextNode
      lastUniqueNode.next = nextNode;
      lastUniqueNode = nextNode;
    }
  }
  return linkedList;
}; */

const node5 = new Node(9);
const node4 = new Node(7, node5);
const node3 = new Node(5, node4);
const node2 = new Node(4, node3);
const node1 = new Node(2, node2);
const linkedList = new LinkedList();
linkedList.push_back(2);
linkedList.push_back(4);
linkedList.push_back(5);
linkedList.push_back(7);
linkedList.push_back(9);
//linkedList.insert(0, 1);
// console.log(linkedList.value_n_from_end(2));
/* linkedList.insert(2, 6);
linkedList.insert(4, 7); */
linkedList.remove_value(2);
printList(linkedList);
console.log(linkedList.size);
console.log(linkedList.head.value);
console.log(linkedList.tail.value);
// printList(linkedList.reverse());
