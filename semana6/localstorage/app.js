//primero atrapar al boton  -- capturar al elemento para disparar el evento
const btnLogin = document.querySelector("#btn-login");

//la funcion y el evento
btnLogin.onclick = function (event) {
  event.preventDefault();

  const inputs = document.querySelectorAll("input");
  //insertar un valor o almacenar en localstorage

  inputs.forEach((input) => {
    console.log(inputs);
    localStorage.setItem(input.name, input.value);
  });
  login();
};

//CAPTURAR ELEMENTOS DEL LOCAL STORAGE - esta e sla forma de capturar
// elemento del localstorage
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

function login() {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  form.style.display = "none";
  usuarioSection.style.display = "block";
  titleEmail.innerHTML = email;
  titlePassword.innerHTML = password;
}

const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerrarSesion = document.querySelector("#logout");
const usuarioSection = document.querySelector("#user-logged");

if (email !== null && password !== null) {
  //el usuario ya esta logeado
  //si el usario esta logeadio voy ocultar el form
} else {
  usuarioSection.style.display = "none";
}

btnCerrarSesion.onclick = function () {
  //vamos a eliminar las variable del local storage
  localStorage.clear();

  //mostrar el formulario y ocultar el mensaje
  form.style.display = "block";
  usuarioSection.style.display = "none";
};
