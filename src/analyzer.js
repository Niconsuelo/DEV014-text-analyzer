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
        for (let j = 0; j < arregloPalabras[i].length; j++) {//el indice j no puede ser mayor o igual al largo de la palabra
          if (!SignosPuntuacion.includes(arregloPalabras[i][j])) {//el largo de un arreglo, es mayor a 1 mas que el indice//
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
    let caracteresSinespacio = 0;
    let contadorPalabras = 0;

    for (let i = 0; i < arregloPalabras.length; i++) {
      if (arregloPalabras[i] !== "") {
        contadorPalabras = contadorPalabras + 1;
        if (!SignosPuntuacion.includes(arregloPalabras[i])) {
          //si es falso, entra
          caracteresSinespacio =
            caracteresSinespacio + arregloPalabras[i].length;
        }
      }

      //arregloPalabras[i] // haga un filtro, y me diga si es un signo o no.
    }
    return caracteresSinespacio / contadorPalabras;
  },
  getNumberCount: (text) => {
    //4 ----[3] OK
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const arregloPalabras = text.split(" ");
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
        const numero = Number(arregloPalabras[i]);
        if (!isNaN(numero)) {
          sumaNumeros = numero + sumaNumeros;
        }
      }
    }
    return sumaNumeros;
  },
};
export default analyzer;
