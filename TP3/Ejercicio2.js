function pick(obj, keys) {
    const result = {};
  
    keys.forEach(key => {
      // Solo se agrega la propiedad si existe en el objeto original
      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key];
      }
    });
  
    return result;
  }
  
  console.log(pick({ a: 1, b: 2, c: 3 }, ['a', 'c', 'z'])); 

  