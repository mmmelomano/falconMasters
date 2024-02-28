// dentro de los arrays se pueden guardar texto, numeros enteros y decimales, booleanos, objetos, arreglos, etc.
const arreglo = ['texto', 456.10, false, {propiedad: 'valor'}, [1, 2, 3]];
console.log(arreglo);

//para acceder a un elemento dentro del arreglo
//el primer elemento es cero en adealante
const amigos = ['Alejandro', 'Manuel', 'Cesar'];
console.log(amigos[1]);

// --------------------
const colores = [];
colores[0] = 'rojo';
colores[1] = 'verde';
// si te salteas un numero
colores[3] = 'blanco';
// si se pone el mismo numero se sobreescribe el primer numero  
colores[3] = 'amarillo';

// para ver las propiedades dentro del arreglo se pone el elemento length
console.log(colores.length);
// los objetos tienen propiedades y metodos 
// los metodos serian funciones que podemos usar para hacer cosas con el arreglo

// se puede concatenar
console.log('el arreglo colores tiene: ' + colores.length + ' colores')

// el metoodo push (funcion) se llama asi
// dentro del push (parentesis) se pone un parametro
colores.push('azul');
// asi se agrega el azul al arreglo