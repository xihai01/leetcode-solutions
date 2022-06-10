// solution 1
// time - O(n) | space - O(n)
const sumOfLinkedLists = function (linkedListOne, linkedListTwo) {
  const result = new LinkedList(0);
  const currNode = result;
  let carryOver = 0;
  while (linkedListOne !== null && linkedListTwo !== null) {
    // create a new node
    const newNode = new LinkedList(0);
    currNode.next = newNode;
    currNode = newNode;

    let value = carryOver;
    if (linkedListOne === null) {
      value += linkedListTwo.value;
      linkedListTwo = linkedListTwo.next;
    } else if (linkedListTwo === null) {
      value += linkedListOne.value;
      linkedListOne = linkedListOne.next;
    } else {
      value += linkedListOne.value + linkedListTwo.value;
      linkedListOne = linkedListOne.next;
      linkedListTwo = linkedListTwo.next;
    }
    currNode.value = value > 9 ? value - 10 : value;
    carryOver = returnCarryOver(value);
  }
  // if we left with a carryover, then add one extra node
  if (carryOver === 1) {
    const newNode = new LinkedList(carryOver);
    currNode.next = newNode;
  }

  return (result = result.next);
};

const returnCarryOver = function (value) {
  return value > 9 ? 1 : 0;
};
