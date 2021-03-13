var panels = document.querySelectorAll(".panel");
console.log(panels);
panels.forEach(function (panel) {
    panel.addEventListener("click", function (e) {
        removeClass(panels);
        panel.classList.add("active");
    });
});
function removeClass(panels) {
    panels.forEach(function (elm) {
        elm.classList.remove("active");
    });
}
