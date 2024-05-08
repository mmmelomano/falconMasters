// local scope o variables locales 
// son las variables declaradas dentro de una funcion
// solo podemos acceder a ellas desde dentro de una funcion
var numero = 1;

var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;
    console.log(`${nombre} tiene ${numero} letras`);

    // anidar una funcion dentro de otra funcion
    var funcionAnidada = () => {

    }
    funcionAnidada();
    console.log(numero);
};

obtenerNumeroLetras('christian');
// console.log(numero);
