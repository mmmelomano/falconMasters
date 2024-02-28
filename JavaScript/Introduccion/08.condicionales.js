// los operadores de comparacion nos permite comparar dos valores
// los operadores logicos
// los condicionales nos permiten hacer preguntas, para que nuestro codigo efectue una accion
// if - si? devuelve true o false
// else - se ejecuta si la condicion if no se cumple

// ejemplo1 - si el usuario es mayor de edad 
const usuario = {
    edad: 27,
    pais: 'mexico',
    ticket: true,
};

if (usuario.edad > 17){
    console.log('el usuario es mayor de edad, puede entrar al concierto');
} else {
    console.log('el usuario es menor de edad, no puede entrar al concierto');
}

// ejemplo 2 - si el usuario es mayor de edad y ademas tiene una entrada
// como ticket es true, no es necesario preguntar === true
if(usuario.edad >=18 && usuario.ticket){
    console.log('el usuario es mayor de edad y tiene un ticket')
} else{
    console.log('el usuario es menor de edad o no tiene ticket');
}

// ejemplo 3 - anidando condicionales (esto quiere decir se puede meter algo dentro de algo)
// en este caso se anidan condiciones dentro de condiciones
const usuario2 = {
    edad: 27,
    pais: 'mexico',
    ticket: false,
}

// aca quiere decir si el usuario2 es mayor o igual a 18 años
if (usuario2.edad >= 18){
// si se cumple lo de arriba la segunda condicional es si tiene ticket, esta condicional esta dendtro de la primera
    if(usuario2.ticket){
        console.log('el usuario es mayor de edad y tiene ticket');
        // si la conndicion no se cumple se ejecuta else
    }else{
        console.log('el usuario es mayor de edad, pero no tiene ticket')
    }
    // ahora si no se ejecuta el codigo anterior se aplica else 
} else{
    console.log('el usuario es menor de edad');
}

// ejemplo4 - Else If (si? - entonces)
// permite preguntar de donde es el usuario
const usuario3 = {
    edad: 27,
    pais: 'francia',
    ticket: false,
};

// la condicion
if (usuario3.pais === 'mexico'){
    console.log('el usuario es mexicano');
}
// la segunda condicion pregunta
if (usuario3.pais === 'colombia'){
    console.log('el usuario es colombiano');
}

// el codigo de arriba se puede compactar con elf if
if (usuario3.pais === 'mexico'){
    console.log('el usuario es mexicano');
} else if (usuario3.pais === 'colombia'){
    console.log('el usuario es colombiano');
} else if (usuario3.pais === 'españa'){
    console.log('el usuario es español');
} else {
    console.log('el usuario es de otro pais');
}