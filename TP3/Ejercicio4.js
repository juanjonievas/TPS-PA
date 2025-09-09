function sortByMany(list, specs) {
    return [...list].sort((a, b) => {
      for (let { key, dir } of specs) {
        const dirMultiplier = dir === 'desc' ? -1 : 1;
  
        if (a[key] < b[key]) return -1 * dirMultiplier;
        if (a[key] > b[key]) return 1 * dirMultiplier;
        // Si son iguales, sigue con el siguiente 
      }
      return 0; // Si todos los campos son iguales
    });
  }


// para probarlo 
const usuarios = [
    { nombre: "Juan", apellido: "Perez", años: 25 },
    { nombre: "Ana", apellido: "Gomez", años: 30 },
    { nombre: "Pedro", apellido: "Gomez", años: 20 },
    { nombre: "Lucas", apellido: "Perez", años: 30 }
  ];
  
  const specs = [
    { key: "apellido", dir: "asc" },  // primero por apellido ascendente
    { key: "años", dir: "desc" }       // despues por años descendente
  ];
  
  const sorted = sortByMany(usuarios, specs);
  
  console.log(sorted);
  
  