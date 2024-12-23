const noButton = document.querySelector(".btn-no");
const message = document.getElementById("message");

function sayILoveYou() {
    message.textContent = "Eu te amo, princesa!";
}

function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}