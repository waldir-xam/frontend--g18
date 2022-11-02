//escribir en el htm directamente desde js

document.write("hola genteee");
document.write("hola gente con temblores");

///vamos a crear una lista usando js y lo insertaremos a nuestro html

//reto : crear una lista con los datos que tengo en los inputs
const input = document.querySelectorAll("input");
//obtener mi contenedor
const contenedor = document.querySelector("#container-list");
//vamos a crear el ul desde js
const ul = document.createElement("ul");
//ahora debo llenar mi lista debemos recorrer el input nodelist

input.map((element) => {
  //en la interaccion debo crear cada elemento de mi lista
  const li = document.createElement("li");
  //debo crear el valor de mi li, es oinput value
  //create TextaNode : crea los valores para mis elementos html
  const elementText = document.createTextNode(element.value);
  //ahora debo insertar el valor de mis li
  li.appendChild(elementText);
  //debo agregar lo a mi lista
  ul.appendChild(ul);
});


const personas ={
    {
        nombre
    }
}