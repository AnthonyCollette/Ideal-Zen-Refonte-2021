const upBtn = document.getElementsByClassName("up");
const header = document.querySelector("header");

function backToUp() {
  header.scrollIntoView({ behavior: "smooth", block: "start" });
}
