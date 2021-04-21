const burger = document.getElementById("btn-responsive");
const nav = document.getElementById("nav");
const navul = document.getElementById("nav-ul");
const article = document.getElementById("article-li");


for (i = 0; i < upBtn.length; i++) {
  upBtn[i].addEventListener("click", backToUp);
}

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
  navul.classList.toggle("nav-ul-show");
  article.classList.toggle("chevron-show");
});

const homepage = document.getElementById("homepage-text");
const aScroll = document.getElementById("a-scroll-hp");

aScroll.addEventListener("click", (e) => {
  e.preventDefault();
  homepage.scrollIntoView({ behavior: "smooth", block: "start" });
});

// let isInViewport = function (elem) {
//   let distance = elem.getBoundingClientRect();
//   return (
//     distance.top >= 0 &&
//     distance.left >= 0 &&
//     distance.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     distance.right <=
//       (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

// window.addEventListener("scroll", function () {
//   if (isInViewport(header)) {
//     //if in Viewport
//     upBtn.classList.toggle("notvisible");
//   }
// });
