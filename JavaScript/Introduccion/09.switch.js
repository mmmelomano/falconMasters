// el bloque condicional switch - permite ejectutar codigo cuando un valor es igual al otro a diferencia de las condicionales
// el condicional switch es codigo mas limpio


// ejemplo1 
const usuario = {
    nombre: 'carlos',
    pais: 'peru',
};

// condicional
if(usuario.pais === 'mexico'){
    console.log('el usuarion es mexicaco');
} else if (usuario.pais === 'españa') {
    console.log('el usuario es español');
} else {
    console.log('el usuario es de otro pais');
}

// cuando el codigo se hace muy largo se usa el condicional tipo switch
// aca aplica la palabra break para no generar un bucle
switch(usuario.pais){
    case 'mexico':
        console.log('el usuario es mexicano');
        break;
    case 'españa': 
        console.log('el usuario es español');
        break;
    case 'argentina':
        console.log('el usuario es argentino');
        break;
        // si el usuario no es de ni un pais se pone default
        default: 
        console.log('el usuario es de otro pais');
    }

