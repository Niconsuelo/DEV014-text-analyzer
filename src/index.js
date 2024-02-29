import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

document.addEventListener("DOMContentLoaded", function () {

  const boton = document.getElementById("reset-button"); // quiero que boton haga una accion, cuando se haga click
  boton.addEventListener("click", function () {  // 

    document.getElementsByName("user-input")[0].value = "";
    //get elemento retorna cajas, al accder a la caja de ese elemento, debo poner [0], para encontrar el textarea, manipularlo 

    document.getElementById("contador").innerHTML = '0';  //cuando aprete el click, aparecera un 0 por default
    document.getElementById("palabras").innerHTML = '0';
    document.getElementById("numero").innerHTML = '0';
    document.getElementById("suma").innerHTML = '0';
    document.getElementById("sinespacio").innerHTML = '0';
    document.getElementById("promedio").innerHTML = '0';
  });
  const elementosLi = document.querySelectorAll('.elemento-caja');
  console.log (elementosLi);
  const textarea = document.querySelector("[name='user-input']"); //al query busca elemento .areatexto, la variable contiene que sepa que es el area text
  const contador = elementosLi[0]; // 1
  const palabra1 = elementosLi[2]; // 3
  const numeros = elementosLi[3]; // 4
  const suma1 = elementosLi[4]; // 5
  const totalPalabra = elementosLi[1]; // 2
  const longuitud = elementosLi[5]; //6



  textarea.addEventListener("input", function () { //1contador caracteres 
    contador.innerHTML = "Caràcteres:"+ " " + analyzer.getCharacterCount(textarea.value);
    //cuando event listener escucha un evento en textarea, se activa el input, se ejecuta funcion

    let text = textarea.value.trim(); // limpia el texto, solo inicio y final del texto.
    let arregloPalabras = text.split(" "); // separa palabras, una de otras. segun el delimitador, en este caso es el espacio.

    // ahora necesito que el contador de palabras, solo tome palabras y no cuente los espacios
    // que existen entre palabras dentro del texto.

    let contadorPalabras = 0;
    let contadorNumeros = 0;
    let sumaNumeros = 0;
    let sumaPalabras = 0;
    let SignosPuntuacion = ['!', '¡', '?', '¿', ',', '.', ':', ';', '...', '(', ')', '[', ']', '"', '-', 'º', '*', '{', '}'];
    let recuento = 0;
    let longuitudPromedio = 0;
    let textVacio = 0;


    for (let i = 0; i < arregloPalabras.length; i++) {
      if (arregloPalabras[i] !== "") {  //  3 Recuento palabras sin espacio
        contadorPalabras = contadorPalabras + 1;

        sumaPalabras = sumaPalabras + arregloPalabras[i].length; // suma de numeros
      if (!SignosPuntuacion.includes(arregloPalabras[i])){//2 Recuento sin signos ni espacios
        recuento = recuento + 1;
      }  

        let palabraNumeros = Number(arregloPalabras[i]); // 5 suma de total de numeros NaN NaN = true //NaN !NaN = true !NaN = numero
        if (!(isNaN(palabraNumeros))) {
          //Si no es no un numero, es un numero.
          sumaNumeros = palabraNumeros + sumaNumeros; 
          
          contadorNumeros = contadorNumeros + 1; // 4 Recuento de numeros
        }
      }
      if (arregloPalabras[i] == "") {
        return textVacio;
      }
    }
    longuitudPromedio = sumaPalabras / contadorPalabras; //6 longuitud promedio

    totalPalabra.innerHTML = "Carácteres sin espacios:" + " " + analyzer.getCharacterCountExcludingSpaces(textarea.value);// 2 Recuento de caracteres excluyendo espacios y signos de puntuación: la aplicación debe poder contar el número de caracteres en el texto
    palabra1.innerHTML = "Palabras:" + " " + analyzer.getWordCount(textarea.value); // 3 recuento de palabras: la aplicación debe poder contar el número de palabras en el texto de entrada
    numeros.innerHTML = "Números:" + " " + analyzer.getNumberCount(textarea.value);// 4 Recuento de números: la aplicación debe contar cúantos números hay en el texto de entrada
    suma1.innerHTML = "Suma de números:"+ " " + analyzer.getNumberSum(textarea.value); // 5 Suma total de números: la aplicación debe sumar todos los números que hay en el texto de entrada 
    longuitud.innerHTML = "Promedio Longuitud:" + " " + analyzer.getAverageWordLength(textarea.value); // 6 Longitud media de las palabras: la aplicación debe calcular la longitud media de las palabras en el texto
    
  });
});

