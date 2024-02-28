// funciones parametros
// parametros: los valores especificados en la definicion, variables
// argumentos: los valores que le pasamos a la funcion cuando la invocamos
// nos permtien tener funciones dinamicas

const saludo = (nombre = 'amigo') => {
    // estructura
    console.log(`hola ${nombre}!`);
}

// en la invocacion se define lo que se mostrara en la funcion, en este caso la constante saludo con el parametro de la nombre
// lo que esta dentro de los parentesis son los argumentos
// saludo('carlos');
// saludo('christian');
// saludo('chitara');
// saludo('minimal');
// saludo('dobi');
// // para este caso donde no esta definida, en el parametro se le agrega un parametro por defecto seria 'amigo'
// saludo();

// multiples parametros
// importante poner tipo al principio
const operacion = (tipo, numero1, numero2) => {
    // console.log(numero1 + numero2)
    if(tipo === 'suma'){
        console.log(numero1 + numero2);
    } else if (tipo === 'resta'){
        console.log(numero1 - numero2);
    }
};

// aca se llama a la funcion dentro del paramatro de la variable
// operacion(2, 5);
operacion('suma', 100, 200);
operacion('resta', 100, 200);
