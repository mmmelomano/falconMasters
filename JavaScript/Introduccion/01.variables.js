// reglas, las variables deben empezar con letras  no numeros no simbolos
// simbolos, solo puede empezar con $ y _ 
// las variables deben de tener nombres unicos 
// en las variables se pueden guardar datos (string, numeros, boolean, objetos, funciones)
// hay el null (nulo) y el undefined (sin definir)
// var ya no se usa esta obsoleto, ahora se usa let y const para constantes.

var edad = 27; 
console.log(edad);

let nombre ='Christian';
console.log(nombre);

const CORREO = 'chitarita@correo.com';
console.log(CORREO);

// se puede acortar el codigo

// let telefono;
// let pais;
// let id;
let telefono, pais, id;

telefono = 555555555;
// console.log(telefono);

// sumar
const resultado = 4 + 4;
console.log(resultado)

// concatenar
const nombre1 = 'Carlos ';
const nombre2 = 'Arturo';
const nombreCompleto = nombre1 + nombre2;
console.log(nombreCompleto);

// se puede sobreescribir un texto con un numero solo se puede hacer en javaScriptn
let miVariable = 'texto';
miVariable = 7
