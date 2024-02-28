// son bloques de codigo que podemos definir y llamar 
// nosotros decidimos cuando se ejecuta
// se puede reutilizar codigo

// si no queremos este codigo no salga al inicio usamos las funciones
console.log('hola ejemplo');

//forma1, definir una funcion
// la estructura de la funcion, luego el nombre de la funcion, parentesis, luego las llaves, dentro de las llaves va el codigo a ejecutar
// function saludo(){
//     console.log('hola forma1');
// }
// // la funcion no se ejecuta si no se llama a la funcion de esta forma
// saludo();
// si no se ponen las parentesis solo se esta creando una referencia a la funcion
// la referencia se puede guardar en una variable 
// cuando queremos ejecutar la funcion dando clik aun boton
// para esto hay que tener conocimiento del dom para acceder a los elementos
// const variable = saludo;
// console.log(variable);

//forma 2, asignar una funcion a una variable
// const saludo = function(){
//     console.log('hola desde una variable');
// };

// forma 3, funcion de tipo flecha
// nos permite ahorrar codigo
const saludo = () => console.log('hola tipo flecha!');
saludo()