function hamburg() {
    const navbar = document.querySelector(".dropdown") // Corregido: `querySelection` a `querySelector`
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown") // Corregido: `querySelection` a `querySelector`
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "DESARROLADOR",
    "ESTUDIANTE",
    "DEPORTISTA"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text"); // Corregido: `querySelection` a `querySelector`

let textindex = 0;
let characterindex = 0; // Corregido: `charcterindex` a `characterindex`

function typeWriter() {
    if (characterindex < texts[textindex].length) { // Corregido: `charcterindex` a `characterindex`
        textElements.innerHTML += texts[textindex].charAt(characterindex); // Corregido: `charcterindex` a `characterindex`
        characterindex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textindex = (textindex + 1) % texts.length;
        characterindex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;


