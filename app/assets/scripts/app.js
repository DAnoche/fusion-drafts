import "../styles/styles.css";

if (module.hot) {
  module.hot.accept();
}

//Tooltip script
const tooltips = document.querySelectorAll(".ttips");
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t);
});

//Clear on submit
let btnClear = document.querySelector(".btn--clear");
let inputs = document.querySelectorAll("input");

btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});
