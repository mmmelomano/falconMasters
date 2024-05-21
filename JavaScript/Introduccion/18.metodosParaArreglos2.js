// .indexOf() 
// obtenemos el primer index de un elemento que empieza con el digito 0
// si no hay elemento nos retorna -1
const nombres = ['carlos', 'rafael', 'estefania', 'rodrigo', 'rafael', 'gema', 'diana', 'sara'];
// nombres.indexOf(rafael);
// console.log(nombres.indexOf('carlos'));
// cuando no esta dentro del arreglo se declara como -1
// console.log(nombres.indexOf('chitara'));

// .lastIndexOf() 
// obtenemos el ultimo index de un elemento
// console.log(nombres.lastIndexOf('rafael'));

// .forEach()
// nos permite ejecutar una funcion por cada elemento
// nombres.forEach((nombre) => {
//     console.log(`hola ${nombre}`);
// });
// tambien se puede acceder al index
nombres.forEach((nombre, index) => {
    // console.log(`hola ${nombre} (${index})`);
});

// .find()
// nos permite recorrer un arreglo y devuelve el primer elemento que retornemos
// nombres.find((nombre) => {
//     console.log(nombre);

// }); 

// condicional para acceder a la primera letra de cada nombre
// const resultado = nombres.find((nombre) => {
//     if (nombre[0] === 'e') {
//         return nombre;
//     }
// });
// console.log(resultado);

// .map()
// nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo en basse a los resultados de esa funcion.
// para transformar cada elemento a mayuscula por ejemplo o hacer lo que queramos
// const nombresMayusculas = nombres.map((nombre) => {
//     return nombre;
// });
// console.log(nombresMayusculas);
// volver a mayuscula
// const nombresMayusculas = nombres.map((nombre) => {
//     return nombre.toLocaleUpperCase();
// });
// console.log(nombresMayusculas);
// el mismo codigo pero en una linea
const nombresMayusculas = nombres.map((nombre) =>  nombre.toLocaleUpperCase());
console.log(nombresMayusculas);

// .filter()
// nos permite ejecutar una funcion por cada elemento y luego crear un arreglo en base a los resultados de esa funcion.
// ejemplo queremos los nombres con 4 letras
// const nombres4Letras = nombres.filter((nombre) => {
//     return nombre;
// });
// console.log(nombres4Letras);

// .includes()
// nos permite saber si el arreglo contiene un elemento especificado
console.log(nombres.includes('julio'));
console.log(nombres.includes('carlos'));

// .every()
// nos permite ejecutar un condicional sobre cada elemento y nos devuelve TRUE si TODOS los elementos cumplen.
// const nombresValidos = nombres.every((nombre) => {
//     if (typeof nombre === 'string') {
//         return true;
//     }else {
//         return false;
//     }
// });
// console.log('todos los nombres son validos? ' + nombresValidos);

// .some()
// nos permite ejecutar un condicional sobre cada elemento y nos devuelve TRUE si algun elemento cumple la condicion.
const nombresValidos = nombres.some((nombre) => {
    if (typeof nombre !== 'string') {
        return true;
    }else {
        return false;
    }
});
console.log('el arreglo es invalido ' + nombresValidos);
// true si hay algun valor invalido
// false si no hay algun valor invalido