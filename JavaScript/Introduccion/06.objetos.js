// los arreglos tienen el siguiente problema
const personaArreglo = ['carlos', 27, 'correo@correo.com', true, true];
// en los arreglos no se ve que representa cada elemento, no se puede organizar

// asi se ve un objeto
// dentro van las propiedades y valores 
// a las variables dentro de un objeto son propiedades
// a las funciones dentro de un objeto son metodos

const persona = {
    nombre: 'Carlos',
    edad: 27,
    // se puede crear una categoria dentro del objeto
    suscripciones:{
        web: true,
        correo: true,
    },
    // se puede crear un arreglo dentro del objeto
    coloresFavoritos: ['negro', 'rojo'],
    
    // una funcion
    saludo: function(){
        alert('hola');
    }
    
};

// para imprimir los valores
console.log(persona);

// para acceder a un valor dentro del objeto
console.log(persona.nombre);
// otra forma de acceder
// de esta forma se toma como una variable se deben poner comiilas
console.log(persona['edad']);

// otra forma de acceder
const variable = 'suscripciones';
console.log(persona[variable])

//para acceder a las propiedades dentro de las suscripciones
console.log(persona.suscripciones.correo);

// para agregar pais a la persona
persona.pais = 'Mexico';
// tambien se puede sobreescribir
persona.pasi = 'España'

console.log(persona);

// para acceder al metodo (es la funcion dentro de un objeto)
persona.saludo();

