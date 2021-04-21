let firstButton = document.getElementById("button-1");
let firstTextButton = document.getElementById("text-1");
let secondButton = document.getElementById("button-2");
let secondTextButton = document.getElementById("text-2");
let thirdButton = document.getElementById("button-3");
let thirdTextButton = document.getElementById("text-3");

firstButton.addEventListener("click", () => {
  firstTextButton.classList.toggle("text-appear");
  firstButton.classList.toggle("btn-hover");
  secondTextButton.classList.remove("text-appear");
  secondButton.classList.remove("btn-hover");
  thirdTextButton.classList.remove("text-appear");
  thirdButton.classList.remove("btn-hover");
});

secondButton.addEventListener("click", () => {
  secondTextButton.classList.toggle("text-appear");
  secondButton.classList.toggle("btn-hover");
  firstTextButton.classList.remove("text-appear");
  firstButton.classList.remove("btn-hover");
  thirdTextButton.classList.remove("text-appear");
  thirdButton.classList.remove("btn-hover");
});

thirdButton.addEventListener("click", () => {
  thirdTextButton.classList.toggle("text-appear");
  thirdButton.classList.toggle("btn-hover");
  firstTextButton.classList.remove("text-appear");
  firstButton.classList.remove("btn-hover");
  secondTextButton.classList.remove("text-appear");
  secondButton.classList.remove("btn-hover");
});
