//con DOCUMENT SE PUEDE MANIPULAR COSAS DEL BODY
const input = document.querySelector("#color");
//
console.log(input);

//
input.addEventListener("input", function (event) {
  console.log(event.target.value);

  document.body.style.backgroundColor=event.target.value
});
