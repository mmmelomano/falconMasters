// se hacen codigos con menos lineas

// ejemplo
// aca haremos codigo para vender boletos de diferentes categorias
const boleto = 'vip';
let codigoAcceso;

if(boleto === 'vip'){
    codigoAcceso = 'VIP-123-456'
} else {
    codigoAcceso = 'REGULAR-456-789';
}

console.log(codigoAcceso);

// con el operador ternario
// condicional ? entonces, : tambien es obligatorio si no se cumple la primera condicion, salta a la segunda
const codigoDeAcceso = (boleto === 'vip') ? 'VIP-123-456' : 'REGULAR-456-789';
boleto === 'vip' 
// sino se cumple la condicion entonces (?)
? console.log('tu boleto es de VIP') 
// salta a la siguiente
: console.log('tu boleto es de tipo REGULAR')

