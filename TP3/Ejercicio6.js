//6) Validador de paréntesis

function isBalanced(s) {
    const stack = []; 
    const pairs = {
      ')': '(',
      ']': '[',
      '}': '{'
    };
  
    for (let char of s) {
      // Si es un símbolo que abre 
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      } 
      // Si es un símbolo que cierre
      else if (char === ')' || char === ']' || char === '}') {
        // Si el stack está vacío o el último no coincide 
        if (stack.pop() !== pairs[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

console.log(isBalanced("([]{})")); 
console.log(isBalanced("(]"));     
console.log(isBalanced("([)]"));   
console.log(isBalanced("{[()]}")); 
console.log(isBalanced(""));      