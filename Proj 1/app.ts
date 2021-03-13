const panels = document.querySelectorAll(".panel");

console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", (e: Event) => {
    removeClass(panels);
    panel.classList.add("active");
  });
});

function removeClass(panels) {
  panels.forEach((elm) => {
    elm.classList.remove("active");
  });
}
