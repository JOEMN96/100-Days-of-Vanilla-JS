const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let current = 1;

next.addEventListener("click", () => {
  current++;

  if (current > circles.length) {
    current = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  current--;
  if (current < 1) {
    current = 1;
  }
  update();
});

function update() {
  circles.forEach((item, idx) => {
    if (idx < current) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  const active = document.querySelectorAll(".active");
  progress.style.width = ((active.length - 0.3) / circles.length) * 100 + "%";

  if (current === 1) {
    prev.disabled = true;
  } else if (current === 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
