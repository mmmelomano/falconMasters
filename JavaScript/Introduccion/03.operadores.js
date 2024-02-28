/*
----Operadores Aritmeticos-----

= operador de asignacion, se usa para asignar valores a una variable
+ suma
- resta
* Multiplicacion
/ division
% Modulo
++ Aumento
-- Disminucion
 */

 const resultado = 10 + 10;
 const resultado2 = 10 - 10;
 const resultado3 = 10 % 3;


//  metodo largo
//  let numero = 1;
//  numero = numero + 1;

// metodo abreviado
let numero = 10;
// numero = numero + 5;
numero += 5;
numero -= 5;
numero /= 5;
numero *= 5
//  el ultimo valor siempre sobreescribe a las demas
 console.log(numero)


//  -----------Operadores de Comparacion-----------
// nos permiten comparar valores

/* 
== igual que
=== igual en valor y tipo de valor
!= diferente
!== diferente en valor y diferente en tipo
> mayor que 
< menor que 
>= mayor o igual que
<= menor o igual que
? operador ternario
*/

const resultado4 = 5 > 1;
console.log(resultado4);

const resultado5 = 20 > 20;
console.log(resultado5)

const resultado6 = 20 >= 20;
console.log(resultado6);

const  resultado7 = 20 <= 20;
console.log(resultado7);

const resultado8 = 10 == 10;  // solo compara el valor
console.log(resultado8)

const resultado9 = 10 == '10'; // un numero y una cadena de texto
console.log(resultado9);

const resultado10 = 10 === '10'; // compara si el valor es igual y si el tipo es igual
console.log(resultado10);

// operador ternario
// mostrando las dos opciones 
// ? este simbolo es por lo tanto
const resultado11 = 7 > 1 ? 'el primer valor es mayor que el segundo' : 'el segundo valor es mayor que el primero ';
console.log(resultado11)

const resultado12 = 7 > 10 ? 'el primer valor es mayor que el segundo' : 'el segundo valor es mayor que el primero ';
console.log(resultado12)


