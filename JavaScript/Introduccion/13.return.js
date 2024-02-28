
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
const operacion = (tipo, numero1, numero2) => {
    // si el tip es suma se muesra el resultado del numero1 + numero2
    if (tipo === 'suma') {
        console.log(numero1 + numero2);
    } else if ( tipo === 'resta') {
        console.log(numero1 - numero2);
    }
    // return nos indica queremos retornar un valaor
    return 'hola';
};