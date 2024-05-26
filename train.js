//Task B
function countDigits(str) {
  let count = 0;
  for (let char of str) {
    if (!isNaN(char) && char !== " ") {
      count++;
    }
  }
  return count;
}

console.log(countDigits("ad2a54y79wet0sfgb9"));
