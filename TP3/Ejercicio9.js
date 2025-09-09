//

function debounce(fn, delay) {
    let timerId; // Guardará el identificador del temporizador activo
  
    return function(...args) {
      // Preservar el contexto donde se llama
      const context = this;
  
      // Cancelar el timer anterior si existe
      clearTimeout(timerId);
  
      // Crear un nuevo timer
      timerId = setTimeout(() => {
        fn.apply(context, args); // Ejecuta fn con su this y argumentos originales
      }, delay);
    };
  }

  function sayHi(name) {
    console.log(`Hola, ${name} ¿queres un mate?`, new Date().toLocaleTimeString());
  }
  
  const debouncedSayHi = debounce(sayHi, 2000);
  
  debouncedSayHi("Juan");
  debouncedSayHi("Pedro");
  debouncedSayHi("Ana");
  //2 segundos después de la última llamada
  