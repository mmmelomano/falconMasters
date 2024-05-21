// ejemplo
const colores = [ 'rojo', 'verde', 'azul'];

// .length (propiedad) 
// nos permite conocer la cantidad de elementos de un arreglo.
console.log(colores.length);

// .toString() 
// nos permite transformar un arreglo a una cadena de texto
// por ejemplo para poder mostrarlo en el navegador
document.body.innerHTML = colores.toString();

// .join() 
// nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
console.log(colores.join('- -'));

//  .sort() 
// nos permite un arreglo de cadenas de texto, de forma alfabetica
// tambien sirve para ordenar numeros
const letras = ['c', 'b', 'd', 'a'];
console.log(letras.sort());

const numeros = [3, 2, 4, 1];
console.log(numeros.sort());

// .reverse() 
// nos permite ordenar un arreglo de forma descendente
console.log(letras.reverse());
console.log(numeros.reverse());

// .concat() 
// nos permite juntar dos arreglos en uno solo
const arreglo1 = [1, 2, 3];
const arreglo2 = ['a', 'b', 'c'];
const arreglo3 = arreglo1.concat(arreglo2);

console.log(arreglo3);

// .push() 
// nos permite agregar un elemento al final de un arreglo
colores.push('amarillo');
console.log(colores);

// .pop() 
// nos permite eliminar el ultimo elemento de un arreglo
colores.pop();
console.log(colores);

// .shift() 
// elimina el primer elemento de un arreglo y recorre los elementos
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
console.log(dias);
//recorrer dias, este metodo elimina el primer elemento 
const diaEliminado = dias.shift();
// para ver el dia eliminado
console.log(diaEliminado);
// para ver el primer elemento
console.log(dias[0]);

// .unshift() 
// agrega un elemento al inicio del arreglo y empuja los elementos
dias.unshift('chitarita');
console.log(dias);

// .splice() 
// permite insertar elementos a un arreglo donde le especifiquemos
// 1er parametro - posicion donde queremos comenzar a insertar los elementos
// 2do parametro - si queremos eliminar elementos del arreglo desde la posicion indicada
// resto de parametros - los elementos a insertar
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.slice(1, 2, 'Rafael', 'Roberto');
console.log(amigos);

// .slice() 
// permite copiar una parte del arreglo a otro
// 1er parametro - posicion desde donde queremos copiar
// 2do parametro - hasta antes de que elemento copiar
const frutas = ['fresas', 'manzana', 'piña', 'mango', 'naranja', 'melon'];
// quiero sacar mis frutas favoritas
const frutasFavoritas = frutas.slice(1, 5);
console.log(frutasFavoritas);
