// solution 1
// time O(n^2) | space O(n)
var isSubsequence = function(s, t) {
  const arr = [];
  let lastOccurence = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = lastOccurence; j < t.length; j++) {
      if (s[i] === t[j]) {
        arr.push(j);
        lastOccurence = j + 1;
        break;
      }
    }
  }
  if (arr.length !== s.length) return false;
  return true;
};

// solution 2
// time O(n) | space O(1)
var isSubsequence = function(s, t) {
  if (s.length === 0) return true;
  let p1 = 0;
  let p2 = 0;
  while (p2 < t.length) {
    if (s[p1] === t[p2]) {
      p1++;
      p2++;
      if (p1 === s.length) return true;
    } else {
      p2++;
    }
  }
  return false;
};
