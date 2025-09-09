//Suma de números únicos



function sumUnique(nums) { 
    const uniqueNumbers = new Set();
    // Recorremos el array
    nums.forEach(item => {
      if (Number.isFinite(item)) {
        uniqueNumbers.add(item); 
      }
    });
  
    return [...uniqueNumbers].reduce((acc, num) => acc + num, 0);
  }

  console.log(sumUnique([1, 2, 2, 3]));        // → 6
  console.log(sumUnique([1, '2', 2, 3, 'a'])); // → 6
  