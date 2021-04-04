const button = document.querySelector("button");
const input = document.querySelector("input");
const searchContainer = document.querySelector(".search");

button.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
  input.focus();
});
