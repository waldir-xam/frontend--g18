//nombreDeLaFuncion();

//una funcion es creada para poder reutilziar codigo
//una de las misiones de la funcion es poder hacer un trabajo repetitivo

function suma(numero1, numero2) {
  //primero voy a convetir los parametros a numeros
  const convertNumero1 = +numero1;
  const convertNumero2 = +numero2;

  const suma = convertNumero1+convertNumero2;
  return suma;
}
console.log('total', suma(20,20));
