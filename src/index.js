import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

document.addEventListener("DOMContentLoaded", function () {
  // se obtiene boton de limpiar
  const boton = document.getElementById("reset-button");
  // cuando se haga click en el boton
  boton.addEventListener("click", function () {
    //limpiar text area
    document.getElementsByName("user-input")[0].value = "";
  });
  //se obtiene arreglo de li para mostrar los resultados
  const elementosLi = document.querySelectorAll(".elemento-caja");
  //se obtiene text area
  const textarea = document.querySelector("[name='user-input']");
  //asigno cada li en su correspondiente variable
  const contador = elementosLi[0]; // 1
  const palabra1 = elementosLi[2]; // 3
  const totalNumeros = elementosLi[3]; // 4
  const sumaNumeros = elementosLi[4]; // 5
  const sinespacioSinsignos = elementosLi[1]; // 2
  const longuitud = elementosLi[5]; //6
  //por cada letra que ingresa en el textarea
  textarea.addEventListener("input", function () {
    //se agrega texto en el elemento contador con resultado de la cantidad de caracteres,
    //el resultado se obtiene llamando a la funcion getCharacterCount del archivo analyzer.js
    contador.innerHTML =
      "Caracteres:" + " " + analyzer.getCharacterCount(textarea.value);
    //se agrega texto en el elemento sinespacioSinsigno con resultado de la cantidad de caracteres,
    //el resultado se obtiene llamando a la funcion getCharacterCountExcludingSpaces del archivo analyzer.js
    sinespacioSinsignos.innerHTML =
      "Caracteres sin espacios:" +
      " " +
      analyzer.getCharacterCountExcludingSpaces(textarea.value); // 2 Recuento de caracteres excluyendo espacios y signos de puntuación.
    //se agrega texto en el elemento palabra1 con resultado de la cantidad de caracteres,
    //el resultado se obtiene llamando a la funcion getWordCount del archivo analyzer.js
    palabra1.innerHTML =
      "Palabras:" + " " + analyzer.getWordCount(textarea.value); // 3 recuento de palabras: la aplicación debe poder contar el número de palabras.
    //se agrega texto en el elemento ctotalNumeros con resultado de la cantidad de caracteres,
    //el resultado se obtiene llamando a la funcion getNumberCount del archivo analyzer.js

    totalNumeros.innerHTML =
      "Números:" + " " + analyzer.getNumberCount(textarea.value); // 4 Recuento de números: la aplicación debe contar cúantos números.
    //se agrega texto en el elemento sumaNumeros con resultado de la cantidad de caracteres,
    //el resultado se obtiene llamando a la funcion getNumberSum del archivo analyzer.js

    sumaNumeros.innerHTML =
      "Suma de números:" + " " + analyzer.getNumberSum(textarea.value); // 5 Suma total de números: la aplicación debe sumar todos los números.
    //se agrega texto en el elemento longuitud con resultado de la cantidad de caracteres,
    //el resultado se obtiene llamando a la funcion getAverageWordLength del archivo analyzer.js

    longuitud.innerHTML =
      "Promedio Longuitud:" +
      " " +
      analyzer.getAverageWordLength(textarea.value); // 6 Longitud media de las palabras: la aplicación debe calcular la longitud media de las palabras.
  });
});
