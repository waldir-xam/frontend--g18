const carro = {
  color: "azul",
  motor: 1.6,
  modelo: "beetle",
  marca: "vw",
  nuevo: "false",
};

console.log("tipo de auto", carro);

//objet persona

const persona = {
  edad: 34,
  nombre: "panfilo",
  sexo: "masculino",
  talla: "casado",
  mayorEdad: true,
  donacionOrganos: true,
};
console.log("estado civil", persona);



const stuffs = {
  screen: "wide monitor",
  PC: "pcerdo",
  drink: "water",
  Funcional: true,
  vacio: true,
};
console.log("Office stuffs", stuffs);
console.table(stuffs);

stuffs.drink = "coffee";
console.log("office stuffs", stuffs);

stuffs["guitarra: "] = "Acustica";
console.log("Office stuffs", stuffs);
console.table(stuffs);