import "../styles/styles.css";

if (module.hot) {
  module.hot.accept();
}

//Tooltip script
const tooltips = document.querySelectorAll(".ttips");
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t);
});
