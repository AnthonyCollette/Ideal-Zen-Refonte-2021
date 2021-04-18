const burger = document.getElementById("btn-responsive");
const nav = document.getElementById("nav");
const navul = document.getElementById("nav-ul");
const article = document.getElementById("article-li");

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
  navul.classList.toggle("nav-ul-show");
  article.classList.toggle("chevron-show");
});
