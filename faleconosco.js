const form = document.querySelector("form");
const button = document.querySelector("button");

console.log(button)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.alert("Mensagem enviada com sucesso")
})