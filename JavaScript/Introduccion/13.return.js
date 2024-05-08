
// en esta funcion hay 3 parametros, tipo, numoero1 y numero2
// const operacion = (tipo, numero1, numero2) => {
//     // si el tip es suma se muesra el resultado del numero1 + numero2
//     if (tipo === 'suma') {
//         console.log(numero1 + numero2);
//     } else if ( tipo === 'resta') {
//         console.log(numero1 - numero2);
//     }
// };
// el codigo de arriba cumple dos funciones 
// debemos hacer un codigo que cumpla una funcion 
// hacer el codigo reutilizable

// const operacion = (tipo, numero1, numero2) => {
//     // si el tip es suma se muesra el resultado del numero1 + numero2
//     if (tipo === 'suma') {
//         console.log(numero1 + numero2);
//     } else if ( tipo === 'resta') {
//         console.log(numero1 - numero2);
//     }

// return nos indica queremos retornar un valaor
//     return 'hola';
// };

// se retorna hacia la invocacion
// const miVariable = operacion('suma', 100, 11);
// console.log(miVariable);

// retornar un resultado en vez de mostrarlo
// const operacion = (tipo, numero1, numero2) => {
//     let resultado;

//     if(tipo === 'suma') {
//         resultado = numero1 + numero2;
//     } else if (tipo === 'resta') {
//         resultado = numero1 - numero2;
//     }
//     return resultado; 
// };

// // el resultado se puede guardar en una variable
// // la ventaja es que la funcion se encarga
// const miVariable = operacion ('suma', 100, 11);
// console.log(miVariable);

// otra forma
const operacion = (tipo, numero1, numero2) => {

    // return;   (si se pone la palabra return a esta altura lo de abajo deja de funcionar)

    if (tipo === 'suma') {
        return numero1 + numero2;
    }else if (tipo === 'resta') {
        return numero1 - numero2;
    } 
};

const miVariable = operacion ('suma', 111, 111);
console.log(miVariable);