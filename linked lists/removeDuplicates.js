const { Node, LinkedList, printList } = require("./linkedList");

// solution 1
// time - O(n) | space - O(1)
const removeDuplicates = function (linkedList) {
  if (linkedList.next === null) return null;
  let lastUniqueNode = linkedList;
  let nextNode = linkedList;
  while (nextNode !== null) {
    if (nextNode.value === lastUniqueNode.value) {
      // update last..Node to point to nextNode
      lastUniqueNode = nextNode;
    }
    // update nextNode to point to next node
    nextNode = nextNode.next;
  }
  return null;
};

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
linkedList.push_front(1);
console.log(linkedList.pop_back());
console.log(linkedList.pop_front());

printList(linkedList);
console.log(linkedList.size);
console.log(linkedList.head.value);
console.log(linkedList.tail.value);
