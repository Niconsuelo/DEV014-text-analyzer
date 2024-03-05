const analyzer = {
  getWordCount: (text) => {
    //3-[2]
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //dividir texto con delimitar espacios
    const arregloPalabras = text.split(" ");
    let contadorPalabras = 0;
    //por cada una de las palabras
    for (let i = 0; i < arregloPalabras.length; i++) {
      //si es efectivamente una palabra
      if (arregloPalabras[i] !== "") {
        //suma 1
        contadorPalabras = contadorPalabras + 1;
      }
    }
    return contadorPalabras;
  },
  getCharacterCount: (text) => {
    // 1 -[0]

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    //retorna largo del texto
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    // 2 -[1]
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const arregloPalabras = text.split(" ");
    // arreglo de signos de puntuacion
    const SignosPuntuacion = [
      "!",
      "¡",
      "?",
      "¿",
      ",",
      ".",
      ":",
      ";",
      "...",
      "(",
      ")",
      "[",
      "]",
      '"',
      "-",
      "º",
      "*",
      "{",
      "}",
    ];
    let sinespacioSinsignos = 0;

    for (let i = 0; i < arregloPalabras.length; i++) {
      //si es palabra
      if (arregloPalabras[i] !== "") {
        //ciclo por letra
        for (let j = 0; j < arregloPalabras[i].length; j++) {
          //si no es un signo de puntuacion
          if (!SignosPuntuacion.includes(arregloPalabras[i][j])) {
            //se suma 1
            sinespacioSinsignos = sinespacioSinsignos + 1;
          }
        }
      }
    }
    return sinespacioSinsignos;
  },
  getAverageWordLength: (text) => {
    //6 TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const arregloPalabras = text.split(" ");
    let contadorPalabras = 0;
    let sumaPalabra = 0;

    for (let i = 0; i < arregloPalabras.length; i++) {
      if (arregloPalabras[i] !== "") {
        contadorPalabras = contadorPalabras + 1;
        // se suma largo de la palabra
        sumaPalabra = sumaPalabra + arregloPalabras[i].length;
      }
    }
    //retorna numero con los ultimo dos digitos (redondeado)
    return Number((sumaPalabra / contadorPalabras).toFixed(2));
  },
  getNumberCount: (text) => {
    //4-[3]
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //eliminación de puntos, división de objeto en arrays, unión de subcadenas
    const numerosfloatSinespacios = text.split(".").join("");
    const arregloPalabras = numerosfloatSinespacios.split(" ");
    let totalNumeros = 0;

    for (let i = 0; i < arregloPalabras.length; i++) {
      if (arregloPalabras[i] !== "") {
        // transformo palabra en numero
        const numero = Number(arregloPalabras[i]);
        //si es un numero (!isNaN) es true
        if (!isNaN(numero)) {
          totalNumeros = totalNumeros + 1;
        }
      }
    }
    return totalNumeros;
  },
  getNumberSum: (text) => { 
    // 5 --[4]
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

    const arregloPalabras = text.split(" ");
    let sumaNumeros = 0;

    for (let i = 0; i < arregloPalabras.length; i++) {
      if (arregloPalabras[i] !== "") {
        let palabra = arregloPalabras[i];
        // obtener ultimo caracter de la palabra
        const ultimo = palabra[palabra.length - 1];
        //si el ultimo caracter es un punto true
        if (ultimo === ".") {
          //obtengo substring de la palabra sin el ultimo digito, que es el punto
          palabra = palabra.substring(0, palabra.length - 1);
        }
        //se transforma a numero
        const numero = Number(palabra);
        //si es un numero (!isNaN) es true 
        if (!isNaN(numero)) {
          sumaNumeros = numero + sumaNumeros;
        }
      }
    }
    return sumaNumeros;
  },
};
export default analyzer;
 