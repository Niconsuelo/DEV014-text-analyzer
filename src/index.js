import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("reset-button"); // quiero que boton haga una accion, cuando se haga click
  boton.addEventListener("click", function () {
    //

    document.getElementsByName("user-input")[0].value = "";
    //get elemento retorna cajas, al accder a la caja de ese elemento, debo poner [0], para encontrar el textarea, manipularlo
  });
  const elementosLi = document.querySelectorAll(".elemento-caja");

  const textarea = document.querySelector("[name='user-input']"); //al query busca elemento .areatexto, la variable contiene que sepa que es el area text
  const contador = elementosLi[0]; // 1
  const palabra1 = elementosLi[2]; // 3
  const totalNumeros = elementosLi[3]; // 4
  const sumaNumeros = elementosLi[4]; // 5
  const sinespacioSinsignos = elementosLi[1]; // 2
  const longuitud = elementosLi[5]; //6

  textarea.addEventListener("input", function () {
    //1contador caracteres
    contador.innerHTML =
      "Caràcteres:" + " " + analyzer.getCharacterCount(textarea.value);
    //cuando event listener escucha un evento en textarea, se activa el input, se ejecuta funcion

    sinespacioSinsignos.innerHTML =
      "Carácteres sin espacios:" +
      " " +
      analyzer.getCharacterCountExcludingSpaces(textarea.value); // 2 Recuento de caracteres excluyendo espacios y signos de puntuación: la aplicación debe poder contar el número de caracteres en el texto
    palabra1.innerHTML =
      "Palabras:" + " " + analyzer.getWordCount(textarea.value); // 3 recuento de palabras: la aplicación debe poder contar el número de palabras en el texto de entrada
    totalNumeros.innerHTML =
      "Números:" + " " + analyzer.getNumberCount(textarea.value); // 4 Recuento de números: la aplicación debe contar cúantos números hay en el texto de entrada
    sumaNumeros.innerHTML =
      "Suma de números:" + " " + analyzer.getNumberSum(textarea.value); // 5 Suma total de números: la aplicación debe sumar todos los números que hay en el texto de entrada
    longuitud.innerHTML =
      "Promedio Longuitud:" +
      " " +
      analyzer.getAverageWordLength(textarea.value); // 6 Longitud media de las palabras: la aplicación debe calcular la longitud media de las palabras en el texto
  });
});
