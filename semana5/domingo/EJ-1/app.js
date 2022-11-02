//aca haremos la dinamica

//DARKMODE CON VARIABLES
let button = document.querySelector(".switch");
let circle = document.querySelector(".circle");
let mode = "light";
let title = document.querySelector(".h1");
let container = document.querySelector(".container");

function lightMode() {
  button.className = "switch";
  container.className = "container";
  circle.className = "circle";
  title.textContent = "light mode";
}

function darkMode() {
  button.className = "darkButton";
  container.className = "darkContainer";
  circle.className = "darkCircle";
  title.textContent = "Dark Mode";
}

circle.addEventListener("click", () => {
  if (mode == "light") {
    darkMode();
    mode = "dark";
  } else {
    lightMode();
    mode = "light";
  }
});




let input = document.querySelector("#color");

input.addEventListener("input", function (event) {
  console.log(event.target.value);

  document.body.style.backgroundColor=event.target.value
});
 
