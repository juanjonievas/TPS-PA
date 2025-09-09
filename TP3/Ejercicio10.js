//10) Asincronismo: withTimeout + allSettledLite

function withTimeout(promise, ms) {
    return Promise.race([
      promise,
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), ms)
      )
    ]);
  }

  // Simula una promesa que tarda 2 segundos
const slowPromise = new Promise(resolve => setTimeout(() => resolve("Listo"), 2000));

// Timeout de 1 segundo
withTimeout(slowPromise, 1000)
  .then(console.log)
  .catch(err => console.error("Error:", err.message));

// Timeout mayor, debería resolverse normalmente
withTimeout(slowPromise, 3000)
  .then(console.log)
  .catch(err => console.error("Error:", err.message));
