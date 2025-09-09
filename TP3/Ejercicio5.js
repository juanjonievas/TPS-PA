function deepEqual(a, b) {
    //si son estrictamente iguales (===), no sigue 
    if (a === b) return true;
  
    // Si alguno es null o no es un objeto, no son iguales
    if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
      return false;
    }
  
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
  
    // Si tienen distinta cantidad de claves, no son iguales
    if (keysA.length !== keysB.length) return false;
  

    for (let key of keysA) {

      if (!keysB.includes(key)) return false;
  
      // Se compara los valores
      if (!deepEqual(a[key], b[key])) return false;
    }
  
    return true; // Si pasó todas las validaciones, son iguales
  }


console.log(deepEqual({ x: [1, 2] }, { x: [1, 2] })); 
console.log(deepEqual({ x: 1 }, { x: '1' }));         
console.log(deepEqual([1, { a: 2 }], [1, { a: 2 }])); 
console.log(deepEqual(null, null));                    
console.log(deepEqual(null, {}));                      
  