// EXISTE DENTRO DEL JS EL DOCMUENT... ESTE ATRIBUTO DE JS ME PERMITE OBTENER ELEMENTOS DE HTML..

//OBTENER ELEMENTO SEGUN EL NO,MBRE DE SU ETIQUETA
//TAG - ETIQUETA EN INGLES
//H1 DIV INPUT
/* 
const inputs = document.getElementsByTagName("input");
console.log("input", inputs);

//recirdenis que el input es un html collection para poder ecorrerlo debemos convertirlo en un array
//array.form esto convierte un html colection  a un array

const newInputs = Array.from(inputs);
console.log("newinput", newInputs);

newInputs.map((newInput) => {
  console.log("nueva forma", newInput.value);
});

//bucle
for (let i = 0; i < inputs.length; i++) {
  console.log("input", inputs[i].value);
}

//-----
const password = document.getElementById("input_password");
console.log("password", password);
//vamoos a acceder al elemento seleccionado en el value de mi input
password.style.backgroundColor = "#000";
password.style.color = "#f3f3f3";
password.style.fontSize = "20px";

const email = document.getElementById("input_email");
email.style.backgroundColor = "#060";
email.style.color = "#f3f3f3";
email.style.fontSize = "20px";

const text = document.getElementsByClassName("last_name");
last_name.style.backgroundColor = "#954356";
last_name.style.color = "#f3f3f3";
last_name.style.fontSize = "20px";

const name = document.getElementById("name");
name.style.backgroundColor = "#569";
name.style.color = "#f3f3f3";
name.style.fontSize = "20px";

//por clases
const InputsName = document.getElementsByClassName("last_name");
console.group(InputsName);

const inputName = Array.from(InputsName);
console.log(inputName);

inputName.forEach((input) => {
  console.log(input.value);
}); */
//mas ejemplos
/* const form = document.getElementsByTagName("form");
console.log(form);
 */

/* const input = document.getElementsByTagName("form");
console.log(form);
 */

document.write(email)