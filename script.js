const gameText = document.getElementById("game-text");
const gameButtons = document.getElementById("game-buttons");
const visualImage = document.getElementById("visual-image");

function makeChoice(choice) {
    if (choice === "start") {
        updateScene("You see a forest with a path and a tree. What do you observe?", "images/forest.jpg", ["Look at the Tree", "Walk the Path"]);
    } 
    else if (choice === "Look at the Tree") {
        updateScene("The tree glitches, pixelating as if incomplete. Is it real?", "images/glitch-tree.jpg", ["Walk the Path", "Restart"]);
        visualImage.classList.add("glitch");
    } 
    else if (choice === "Walk the Path") {
        updateScene("The path forms as you move forward. Reality is rendered on demand.", "images/path.jpg", ["Enter the White Room", "Restart"]);
    } 
    else if (choice === "Enter the White Room") {
        updateScene("You enter a room with two doors: 'Reality' and 'Simulation'.", "images/white-room.jpg", ["Open Reality Door", "Open Simulation Door", "Restart"]);
        visualImage.classList.remove("glitch");
    } 
    else if (choice === "Open Reality Door") {
        updateScene("The Reality door glitches and disappears. Reality cannot be accessed.", "images/glitch-reality.jpg", ["Restart"]);
        visualImage.classList.add("glitch");
    } 
    else if (choice === "Open Simulation Door") {
        updateScene("You see binary code cascading down. You are part of the simulation.", "images/simulation.jpg", ["Restart"]);
    } 
    else if (choice === "Restart") {
        restartGame();
    }
}

function updateScene(text, imagePath, options) {
    gameText.innerHTML = text;
    visualImage.src = imagePath;
    visualImage.style.display = "block";
    visualImage.style.opacity = "1";
    gameButtons.innerHTML = "";
    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => makeChoice(option);
        gameButtons.appendChild(button);
    });
}

function restartGame() {
    visualImage.style.opacity = "0";
    setTimeout(() => {
        visualImage.style.display = "none";
        gameText.innerHTML = "Welcome, Observer. You are entering a simulated world where reality depends on your choices.";
        gameButtons.innerHTML = '<button onclick="makeChoice(\'start\')">Start</button>';
    }, 1000);
}
