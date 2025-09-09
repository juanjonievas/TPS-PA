//

function wordFreq(text) {
    const freqMap = new Map();
  
    //Normalizar texto: minúsculas + quitar puntuación
    const cleanedText = text
      .toLowerCase()
      .replace(/[.,:;!?]/g, "");
  
    //Separar en palabras por espacios
    const words = cleanedText.split(/\s+/).filter(word => word.length > 0);
  
    //Contar cada palabra
    for (let word of words) {
      freqMap.set(word, (freqMap.get(word) || 0) + 1);
    }
  
    return freqMap;
  }

  const text = "Hola, hola! chau.";
  console.log(wordFreq(text));

  const text2 = "Soy de boca . de boca, boca!";
  console.log(wordFreq(text2));
  