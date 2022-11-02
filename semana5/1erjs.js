//variables
//let =
//const 
//const nombre= 'waldir';
//const logico=true;

//var = conglicto - manera global

let numero1 = 10;
let numero2 = 20;
 
suma = numero1 + numero2;
resta = numero1 - numero2;
division = numero1 / numero2;
multiplicacion = numero1 * numero2;

console.log("este es el resultado",suma,resta,division,multiplicacion)
alert('hola g18')

//altert = es una alerta en el navegador
//console log = una funcion del navegador imprime en consola
//concatenacion = junta cadena texto - junta numer con un string

//vamos a hacer una calculadora con js
//prompt :es una ventana emergente que nos pide un valor
// y ese valor se guarda en una variable

const valor1 = prompt('ingresa el valor 1');
const valor2 = prompt('ingresa el valor 2');


const operacion = '+'; prompt ('ingresa una operacion +.-.*./')

if(operacion === '+'){
    resultadoCalculadora = +valor1 + valor2;
    console.log('resultado', resultadoCalculadora);
}else if(operacion === '-'){
    resultadoCalculadora = +valor1 - +valor2;
    console.log('resultado', resultadoCalculadora);
}else if(operacion === '*'){
    resultadoCalculadora = +valor1 * +valor2;
    console.log('resultado', resultadoCalculadora);
}else if(operacion === '/'){
    resultadoCalculadora = +valor1 / +valor2;
    console.log('resultado', resultadoCalculadora);
}