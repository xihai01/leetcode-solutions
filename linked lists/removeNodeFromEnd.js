// solution 1
// time - O(n) | space - O(1)
// returns the value of the node at nth position from the end
const remove_n_from_end = function (head, k) {
  const listSize = get_size(head);
  // 0 -> 1 -> 2 -> 3 -> null, k = 3
  let currNode = this.head;
  // when we are removing the head node
  if (listSize === k) {
    currNode.value = currNode.next.value;
    currNode.next = currNode.next.next;
    return;
  }
  for (let i = listSize - k; i > 1; i--) {
    currNode = currNode.next;
  }
  // remove node
  currNode.next = currNode.next.next;
};

// get size of linked list
const get_size = function (head) {
  let currNode = head;
  let count = 0;
  while (currNode !== null) {
    count++;
    currNode = currNode.next;
  }
  return count;
};
