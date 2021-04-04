const close = document.querySelector("#close");
const open = document.querySelector("#open");
const container = document.querySelector(".container");

close.addEventListener("click", () => {
  container.classList.remove("show_nav");
});

open.addEventListener("click", () => {
  container.classList.add("show_nav");
});
