//  tipos de datos

// String - cadena de texto
// Number - numero
// Boolean - booleano (verdadero o falso)
// Object - objeto
// Function -  funciones

//Null - valor nulo
//Undefined -  valor sin definir

// 01 cadena de texto

// comillas sensillas
const nombre = 'Carlos';
// commillas dobles
const parrafo = "este es un parrafo";
// dos tipos de comillas en una cadena
const parrafo2 = 'este es un "parrafo"';
// escape de comilla con barra invertida alt92
const parrafo3 = 'este es un \'parrafo\'';

// 02 numero
const numero = 4;
const numero2 = -4.123;

// 03 booleano
const usuarioConectado =  true;
console.log(usuarioConectado)

const mayorQue = 1 > 2 ;
console.log(mayorQue);

const mayorQue2 = 10 > 2 ;
console.log(mayorQue2)

// 04 arreglos
// se puede almanacenar varios valores diferentes
const arreglo = ['texto', {propiedad: 'valor'}, [1, 2, 3]];
console.log(arreglo);
// 05 objetos
// propiedad y valor 
const persona = {
    nombre: 'Carlos',
    edad: 27,
    carro: {
        marca: 'Mazda',
        color: 'negro'
    }
    };
console.log(persona);
// se puede apuntar al nombre
console.log(persona.nombre);
// se puede apuntar al objeto dentro del objeto
console.log(persona.carro);


// 05 Function
// son bloques de codigo que se puede reutilizar
function hola() {
    console.log('hola');

}

// asi se llama a una funcion
hola();

// 06 Null
// Normalemnte se usa para indicarnos que un valor no esta definido
const miVariable = null;

// 07 Undefined
const miVariable2 = undefined 
// se usa para indicarnos que un valor no esta definido

