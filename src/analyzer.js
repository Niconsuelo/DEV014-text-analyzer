const analyzer = {
  getWordCount: (text) => {
    //3----[2] OK

    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    const arregloPalabras = text.split(" ");
    let contadorPalabras = 0;

    for (let i = 0; i < arregloPalabras.length; i++) {
      if (arregloPalabras[i] !== "") {
        //  3 Recuento palabras sin espacio
        contadorPalabras = contadorPalabras + 1;
      }
    }
    return contadorPalabras;
  },
  getCharacterCount: (text) => {
    // 1 ----[0] OK

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    // 2 ----[1] OK

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const arregloPalabras = text.split(" ");
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
      if (arregloPalabras[i] !== "") {
        for (let j = 0; j < arregloPalabras[i].length; j++) {
          //el indice j no puede ser mayor o igual al largo de la palabra
          if (!SignosPuntuacion.includes(arregloPalabras[i][j])) {
            //el largo de un arreglo, es mayor a 1 mas que el indice//
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
        sumaPalabra = sumaPalabra + arregloPalabras[i].length;
      }
    }
    return Number((sumaPalabra / contadorPalabras).toFixed(2));
  },
  getNumberCount: (text) => {
    //4 ----[3] OK
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

    const numerosfloatSinespacios = text.split(".").join(""); // necesito reemplazar los puntos por vacio
    const arregloPalabras = numerosfloatSinespacios.split(" "); // necesito dividir los numeros por un vacio
    let totalNumeros = 0;

    for (let i = 0; i < arregloPalabras.length; i++) {
      if (arregloPalabras[i] !== "") {
        const numero = Number(arregloPalabras[i]);
        if (!isNaN(numero)) {
          totalNumeros = totalNumeros + 1;
        }
      }
    }
    return totalNumeros;
  },
  getNumberSum: (text) => {
    // 5 --[4] OK
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

    const arregloPalabras = text.split(" ");
    let sumaNumeros = 0;

    for (let i = 0; i < arregloPalabras.length; i++) {
      if (arregloPalabras[i] !== "") {
        let palabra = arregloPalabras[i]; // necesito eliminar los puntos de termino de oracion
        const ultimo = palabra[palabra.length - 1];
        if (ultimo === ".") {
          palabra = palabra.substring(0, palabra.length - 1);
        }

        const numero = Number(palabra);
        if (!isNaN(numero)) {
          sumaNumeros = numero + sumaNumeros;
        }
      }
    }
    return sumaNumeros;
  },
};
export default analyzer;
