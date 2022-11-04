const btnPrueba = document.querySelector("#btn-prueba");
//atrapa el boton

btnPrueba.onclick = function (event) {
  console.log("click desde el boton");
  console.log(event);
  Swal.fire("Hola Mundo");
};
//--------

const btnPregunta = document.querySelector("#btn-pregunta");
btnPregunta.onclick = function () {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};
const btnError = document.querySelector("#btn-error");
btnError.onclick = function () {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="">Why do I have this issue?</a>',
  });
};
const btnWarning = document.querySelector("#btn-warning");
btnWarning.onclick = function () {
  Swal.fire({
    title: "Estas Seguro?",
    text: "No hay marcha atras",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sin miedo al exito!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};
const btnSuccess = document.querySelector("#btn-success");
btnSuccess.onclick = function () {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
};
// definamos una nueva funcion para el sweet alert
function showAlert(icon, title, text) {
  swal.fire({
    icon,
    title,
    text,
    footer: "<a href='https://google.com'>link de footer",
  });
}

const btnAlertaBotones = document.querySelector("#btn-alert-botones");

btnAlertaBotones.onclick = function () {
  swal
    .fire({
      title: "Alerta",
      text: "Texto de alerta",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "guardar",
      denyButtonText: "negar",
    })
    .then((resultado) => {
      console.log("resultado", resultado);
      if (resultado.isConfirmed) {
        showAlert("success", "confirmado", "se confirmo la operacion");
      }
      if (resultado.isDenied) {
        showAlert("success", "negado", "se cancelo la operacion");
      }
    });
};

const btnAlertaCustom = document.querySelector("#btn-alert-custom");
btnAlertaCustom.onclick = function () {
  Swal.fire({
    title: "custom alerta",
    text: "alerta personaliada",
    background: "url(${urlMarvel})",
    color: "#fff",
    backdrop: "rgba",
  });
};

const btnAlertaInputs = document.querySelector("#btn-alert-inputs");
btnAlertaInputs.onclick = function () {
  Swal.fire({
    title: "custom alerta",
    input: "text",
    inputlabel: "inrese su correo",
    inputPlaceholder: "el correo debe ser valido",
    background: "url(${urlMarvel})",
    color: "#fff",
    backdrop: "rgba",
  });
};

const países = document.querySelector("#select-options");
//onchange sirve para deetctar si hay un cambio en el elemento

países.onchange = function (event) {
  //de evento quier capturar el value options
  const { value, options } = event.target;
  console.log(value);
  const index = options.selectedIndex;
  console.log("index", index);
  console.log("texto", options[index].text);
};

const usuario = {
  nombre: "pepe",
  apellido: "zapata",
  edad: 33,
  direccion: {
    calle: "calle siempre viva",
    numero: 123,
    ciudad: "springfield",
  },
};

//nosotros podemos desesstructurar
const { nombre, apellido, edad, direccion } = usuario;
console.log(nombre);
console.log(usuario);
