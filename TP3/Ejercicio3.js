function groupBy(list, keyOrFn) {
    return list.reduce((acc, item) => {
      // se determina clave si es string o función
      const key = typeof keyOrFn === 'function' ? keyOrFn(item) : item[keyOrFn];
  
      // Si no existe el array para esa clave, lo inicializamos
      if (!acc[key]) {
        acc[key] = [];
      }
  
      acc[key].push(item);
  
      return acc;
    }, {}); 
  }
  
  console.log(groupBy([{ t: 'a' }, { t: 'b' }, { t: 'a' }], 't'));
  
  console.log(groupBy([6, 7, 8, 9], n => n % 2 ? 'impar' : 'par'));
  