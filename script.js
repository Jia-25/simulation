document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("click", function () {
            alert(`You clicked on ${this.textContent}`);
        });
    });
});
