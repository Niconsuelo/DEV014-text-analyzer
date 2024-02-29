const analyzer = {
  getWordCount: (text) => {
    //3 OK TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    let arregloPalabras = text.split(" ");
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
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;

  },
  getCharacterCountExcludingSpaces: (text) => {
    //2 TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let SignosPuntuacion = [
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
    let arregloPalabras = text.split(" ");
    let recuento = 0;

    for (let i = 0; i < arregloPalabras.length; i++) {
      if (!SignosPuntuacion.includes(arregloPalabras[i])) {
        //2 Recuento sin signos ni espacios
        recuento = recuento + 1;
      }
    }
    return recuento;
  },
  getAverageWordLength: (text) => {
    //6 OK TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let arregloPalabras = text.split(" ");
    let contadorPalabras = 0;
    let sumaNumeros = 0;
    let SignosPuntuacion = [
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
    let recuento = 0;
    let contadorNumeros = 0;
    let sumaPalabras = 0;
    let longuitudPromedio = 0;

    for (let i = 0; i < arregloPalabras.length; i++) {
      if (arregloPalabras[i] !== "") {
        //  3 Recuento palabras sin espacio
        contadorPalabras = contadorPalabras + 1;

        sumaPalabras = sumaPalabras + arregloPalabras[i].length; // suma de numeros
        if (!SignosPuntuacion.includes(arregloPalabras[i])) {
          //2 Recuento sin signos ni espacios
          recuento = recuento + 1;
        }

        let palabraNumeros = Number(arregloPalabras[i]); // 5 suma de total de numeros NaN NaN = true //NaN !NaN = true !NaN = numero
        if (!isNaN(palabraNumeros)) {
          //Si no es no un numero, es un numero.
          sumaNumeros = palabraNumeros + sumaNumeros;

          contadorNumeros = contadorNumeros + 1; // 4 Recuento de numeros
        }
      }
      longuitudPromedio = sumaPalabras / contadorPalabras; //6 longuitud promedio
    }

    return longuitudPromedio;
  },

  getNumberCount: (text) => {
    //4 TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let arregloPalabras = text.split(" ");
    let contadorPalabras = 0;
    let contadorNumeros = 0;

    for (let i = 0; i < arregloPalabras.length; i++) {
      if (arregloPalabras[i] !== "") {
        contadorPalabras = contadorPalabras + 1;
      }
      let palabraNumeros = Number(arregloPalabras[i]); // 5 suma de total de numeros NaN NaN = true //NaN !NaN = true !NaN = numero
      if (!isNaN(palabraNumeros)) {
        //Si no es no un numero, es un numero.

        contadorNumeros = contadorNumeros + 1; // 4 Recuento de numeros
      }
    }
    return contadorNumeros;
  },
  getNumberSum: (text) => {
    //5 TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

    let sumaNumeros = 0;
    let arregloPalabras = text.split(" ");

    for (let i = 0; i < arregloPalabras.length; i++) {
      if (arregloPalabras[i] !== "") {
        let palabraNumeros = Number(arregloPalabras[i]);
      if (!isNaN(palabraNumeros)) {
        sumaNumeros = palabraNumeros + sumaNumeros;
      }
      }
      
    }
    return sumaNumeros;
  },
};

export default analyzer;
