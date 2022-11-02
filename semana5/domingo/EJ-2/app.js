//MODO 1
/* const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("darkTheme");
}); */
//MODO 2
const btn = document.querySelector(".btn");


btn.addEventListener('mouseover', ()=>{
    document.documentElement.classList.toggle('darkTheme')
});