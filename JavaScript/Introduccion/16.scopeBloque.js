// //  Block Scope / Alcance tipo bloque
// // pertenecen las variables declaradas con const o let dentro de un bloque {}
// // solo podemos acceder a ellas dentro del bloque

//  const edad = 19;
// // se puede usar otra variable con el mismo nombre pero fuera del bloque {}
// // let accesoPermitido = false;

//  if (edad >= 18) {
//     const accesoPermitido = true;
    
//     if (true) {
//         console.log(accesoPermitido);
//     }

//     // otra funcion|

//     const miFuncion = () => {
//         console.log(accesoPermitido);
//     };
//     miFuncion();
//  }

// //  no encuentra la variable dentro del bloque sino el que esta afuera del bloque
// //  console.log(accesoPermitido);
// const accesoPermitido = 'SI';
// console.log(accesoPermitido);

// ejemplo de por que siempre se debe utilizar let o const y no var
if (true) {
    let nombre ='Christian';
}

// no se puede ejecutar si estuviera con var si
console.log(nombre);


