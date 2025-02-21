document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach(item => {
        item.addEventListener("click", () => {
            alert(`You clicked on ${item.textContent}`);
        });
    });
});
