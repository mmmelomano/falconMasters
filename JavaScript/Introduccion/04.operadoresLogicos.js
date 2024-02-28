/* 
Operadores Logicos
&& And
|| OR
! NOT
*/

const nombre = 'Carlos';
const edad = 18;
const edad2 = 17;
const tieneEntrada= true;
const tienePermiso = true;

// sin operadores logicos
const permitirAcceso = edad >= 18;
console.log(permitirAcceso);

//con operadores logicos
//para que sea true debe de cumplir los dos requisitos
const permitirAcceso2 = edad >= 18 && tieneEntrada;
console.log('acceso permitido al concierto' + permitirAcceso);

//ejemplo2 es menor de edad pero tiene permiso y la entrada
//si la primera condicion no se cumple se tiene que cumplir la segunda
const permitirAcceso3 = (edad2 >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);
console.log('acceso permitido al concierto')

//ejemplo3 para NOT !
//invierte el valor si es positivo lo vuelve negativo y viceversa/
//sirve para hacer comprobaciones por ejemple verifica si tiene entrrada o permiso
const variable = false;
console.log(!variable);

// aca dice si no tiene entrada
!tieneEntrada