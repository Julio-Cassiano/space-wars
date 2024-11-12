import Player from "./classes/Player.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = new Player(canvas.width, canvas.height)


player.draw(ctx);

window.addEventListener("keydown", (event) => {
    const key = event.key.toLocaleLowerCase()
    
    if (key === "a") {
        player.position.x += 20;
    }
})