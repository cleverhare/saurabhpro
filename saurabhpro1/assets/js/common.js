let BurgerIcon = document.querySelector("header span");
let CloseIcon = document.querySelector(".close_icon");
let Cursor = document.querySelector(".cursor");
BurgerIcon.addEventListener("click", (e) => {
  document.querySelector(".menu").classList.add("active");
});
CloseIcon.addEventListener("click", (e) => {
  document.querySelector(".menu").classList.remove("active");
});

window.addEventListener("scroll", (e) => {
  let Scroll_top = document.querySelector("main").getBoundingClientRect().top;

  if (Scroll_top > 0) {
    document.querySelector(".header_wrapper").classList.remove("active");
  } else {
    document.querySelector(".header_wrapper").classList.add("active");
  }
});
