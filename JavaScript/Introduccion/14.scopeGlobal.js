// tambien conocido como alcance o ambito de las variables
// se define a que altura del codigo se accede a las variables
// son variables globales, se pueden acceder desde cualquier parte del codigo

var nombre = 'Christian';
console.log(nombre);

// o desde una funcion
const saludo = () => {
    console.log('hola ' +  nombre);

    // asi se puede modificar el valor
    nombre = 'Arturo';
    console.log('el nuevo nombre es : ' + nombre);
}
// asi se llama a la funcion
saludo();