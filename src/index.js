module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (const item of str) {
    for (const brackets of bracketsConfig) {
      if (item === brackets[0]) {
        if (brackets[0] === brackets[1]) {
          if (stack[stack.length - 1] === item) {
            stack.pop();
            continue;
          }
        }
        stack.push(brackets[1]);
        continue;
      }
      if (item === brackets[1]) {
        if (stack.pop() !== item) {
          return false;
        }
      }
    }
  }
  return (stack.length === 0);
}
