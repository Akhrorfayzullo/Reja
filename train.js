function findDoublers(str) {
  const charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      return true;
    } else {
      charCount[char] = 1;
    }
  }

  return false;
}

console.log(findDoublers("hello"));
console.log(findDoublers("world"));
console.log(findDoublers("example"));
console.log(findDoublers("test"));
