/* for (let i = 0; i <= 10; i++) {
  console.log("iterador", i);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let j = 0; j < numeros.length; j++) {
  //imprimir los numeros pares
  if (numeros[j] % 2 === 0) {
    console.log(numeros[j]);
  }
}

const alumnos = ["pepe", "yovana", "yubel", "pedro", "diego"];

for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}

const laptops = [
  {
    marca: "apple",
    precio: 2500,
    propietario: "android",
  },
  {
    marca: "asus",
    precio: 1500,
    propietario: "jose",
  },
  {
    marca: "HP",
    precio: 1250,
    propietario: "luis",
  },
];

for (o = 0; o < laptops.length; o++) {
  console.log(laptops[o].propietario);
}

console.log(laptops[o].propietario); */

const productos = [
  {
    name: "tv",
    price: 1800,
  },
  {
    name: "celular",
    price: 2000,
  },
  {
    name: "monitor",
    price: 1200,
  },
];
 
/* productos.map((productos, index) => {
  console.log("indice", index);
  console.log("producto", productos.price);
}); */

for (let m = 0; m < productos.length; m++) {
  console.log(productos[m].name);
}
/*
let contador = 0;

while (contador <= 10){
  console.log("contador", contador);
  //no se olvide de alterar el contador en cada vuelta
  contador++
}

//escribir un programa que pueda al usuaria una palabra y la meustra en pantalla 10mveces

function imprimirx10(palabra) {
  let contador = 0;
  while (contador < 20) {
    console.log(palabra);
    contador++;
  }
}
 */

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros2.forEach(numeros2, (index) => {
  /*     console.log('inicio',index)
   */ console.log("que hace", numeros2);
  return numeros2 * 2;
});

productos2.forEach((productos2)=>{
    
})