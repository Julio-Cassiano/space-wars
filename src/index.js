import Grid from "./classes/Grid.js";
import Obstacle from "./classes/Obstacle.js";
import Particle from "./classes/Particle.js";
import Player from "./classes/Player.js";
import SoundEffects from "./classes/SoundEffects.js";
import { GameState } from "./utils/constants.js";

const soundEffects = new SoundEffects();

const startScreen = document.querySelector(".start-screen");
const gameOverScreen = document.querySelector(".game-over");
const scoreUi = document.querySelector(".score-ui");
const scoreElement = scoreUi.querySelector(".score > span");
const levelElement = scoreUi.querySelector(".level > span");
const highElement = scoreUi.querySelector(".high > span");
const buttonPlay = document.querySelector(".button-play");
const buttonRestart = document.querySelector(".button-restart");

gameOverScreen.remove()

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.imageSmoothingEnabled = false;

let currentState = GameState.START;

const gameData = {
    score: 0,
    level: 1,
    high: 0
}

const showGameData = () => {
    scoreElement.textContent = gameData.score;
    levelElement.textContent = gameData.level;
    highElement.textContent = gameData.high;
}

const player = new Player(canvas.width, canvas.height);
const grid = new Grid(3, 6);

const playerProjectiles = [];
const invaderProjectiles = [];
const particles = [];
const obstacles = [];


const initObstacles = () => {
    const x = canvas.width / 2 - 50;
    const y = canvas.height - 250;
    const offset = canvas.width * 0.15;
    const color = "crimson";

    const obstacle1 = new Obstacle({x: x - offset, y},100, 20, color);
    const obstacle2 = new Obstacle({x: x + offset, y},100, 20, "orange");
    

    obstacles.push(obstacle1);
    obstacles.push(obstacle2);
};

initObstacles();

const keys = {
    left: false,
    right: false,
    shoot: {
        pressed: false,
        released: true,
        shoot: {
            pressed: false,
            released: true,
        },
    },
};

const incrementScore = (value) => {
    gameData.score += value;

    if(gameData.score > gameData.high) {
        gameData.high = gameData.score;
    }
}

const drawObstacles = () => {
    obstacles.forEach((obstacle) => obstacle.draw(ctx));
}

const drawProjectiles = () => {
    const projectiles = [...playerProjectiles,...invaderProjectiles]


        projectiles.forEach((projectile) => {
        projectile.draw(ctx);
        projectile.update()
    });
};


const drawParticles = () =>{
    particles.forEach((particle) =>{
        particle.draw(ctx);
        particle.update();
    });
};


const clearProjectiles = () => {
    playerProjectiles.forEach((projectile, index) => {
        if (projectile.position.y <= 0){
            playerProjectiles.splice(index, 1);
        }
    });
};

const clearParticles = () => {
    particles.forEach((particle, i) => {
       if (particle.opacity <= 0){
            particles.splice(i, 1);
       }
    });
};


const createExplosion = (position, size, color) => {
    for (let i = 0; i < 10; i += 1) {
        const particle = new Particle(
            {
                x: position.x,
                y: position.y,
            },
            {
                x:Math.random() -0.5 * 1.5,
                y:Math.random() -0.5 * 1.5,
            },
            2,
            color
        );      

        particles.push(particle);
    }
};    
const checkShootInvaders = () => {
    grid.invaders.forEach((invader,invaderIndex) => {
        playerProjectiles.some((projectile, projectileIndex) => {
            if (invader.hit(projectile)) {
                soundEffects.playHitSound();
                createExplosion({
                    x: invader.position.x + invader.width/2,
                    y: invader.position.y + invader.height/2,
                    },
                    10,
                    "#941CFF"
                );

                incrementScore(10);

                grid.invaders.splice(invaderIndex, 1);
                playerProjectiles.splice(projectileIndex, 1);
            }

        });
    });
};

const checkShootPlayer = () => {
    invaderProjectiles.some ((projectile, i) => {
        if(player.hit(projectile)){
            soundEffects.playExplosionSound();
            invaderProjectiles.splice(i, 1);
            gameOver();
        }
    });
};

const checkShootObstacles = () => {
    obstacles.forEach((obstacle) => {
        playerProjectiles.some ((projectile, i) => {
            if(obstacle.hit(projectile)){
                playerProjectiles.splice(i, 1);
                
            }
        });

        invaderProjectiles.some ((projectile, i) => {
            if(obstacle.hit(projectile)){
                invaderProjectiles.splice(i, 1);
                
            }
        });
    });
};

const spawnGrid = () => {
    if (grid.invaders.length === 0){
        soundEffects.playNextLevelSound();

        grid.rows = Math.round(Math.random() + 5 +1)
        grid.cols = Math.round(Math.random() + 5 +1)
        grid.restart();

        gameData.level += 1;
    }
};

const gameOver = () =>{
    createExplosion(
        {x: player.position.x + player.width / 2,
         y: player.position.y + player.height / 2,
        },
        10,
        "white");

    createExplosion(
        {x: player.position.x + player.width / 2,
         y: player.position.y + player.height / 2,
        },
        10,
        "#4D9BE6");

    createExplosion(
        {x: player.position.x + player.width / 2,
         y: player.position.y + player.height / 2,
        },
        10,
        "crimson");

        currentState = GameState.GAME_OVER;
        player.alive = false;
        document.body.append(gameOverScreen);
};

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    if(currentState == GameState.PLAYING){
        showGameData();
        spawnGrid();
        
        drawParticles();
        drawProjectiles();
        drawObstacles();
        
        clearProjectiles();
        clearParticles();
        
        checkShootInvaders();
        checkShootPlayer();
        checkShootObstacles();

    grid.draw(ctx);
    grid.update(player.alive);

    ctx.save();

    ctx.translate(
        player.position.x + player.width / 2, 
        player.position.y + player.height / 2
    )

    if (keys.shoot.pressed && keys.shoot.released) {
        soundEffects.playShootSound();
        player.shoot(playerProjectiles);
        keys.shoot.released = false;
    }

    if (keys.left && player.position.x >= 0) {
        player.moveLeft();
        ctx.rotate(-0.15)
    }

    if (keys.right && player.position.x <= canvas.width - player.width) {
        player.moveRight();
        ctx.rotate(0.15)
    }

    ctx.translate(
        - player.position.x - player.width / 2,
        - player.position.y - player.height / 2
    )

    player.draw(ctx);
    ctx.restore();
    }

    if(currentState == GameState.GAME_OVER){
        checkShootObstacles();
        
        drawParticles();
        drawProjectiles();
        drawObstacles();

        clearParticles();
        clearProjectiles();

        grid.draw(ctx);
        grid.update(player.alive);
    }



    requestAnimationFrame(gameLoop);
}

window.addEventListener("keydown", (event) => {
    const key = event.key.toLocaleLowerCase()
    
    if (key === "a" || key === "arrowleft") {
        keys.left = true;
    }
    if (key === "d" || key === "arrowright") {
        keys.right = true;
    }
    if (key === "enter") {
        keys.shoot.pressed = true;
    }
});




window.addEventListener("keyup", (event) => {
    const key = event.key.toLocaleLowerCase()

    if (key === "a" || key === "arrowleft") {
        keys.left = false;
    }
    if (key === "d" || key === "arrowright") {
        keys.right = false;
    }
    if (key === "enter") {
        keys.shoot.pressed = false;
        keys.shoot.released = true;
    }
});

buttonPlay.addEventListener("click", () => {
    startScreen.remove();
    scoreUi.style.display = "block";
    currentState = GameState.PLAYING;

    setInterval(() => {
        const invader = grid.getRandomInvader()
        if (invader){
            invader.shoot(invaderProjectiles);
        }
    }, 1000)
})

buttonRestart.addEventListener("click", () => {
    currentState = GameState.PLAYING;
    player.alive = true;

    grid.invaders.length = 0;
    grid.invadersVelocity = 1;

    invaderProjectiles.length = 0;

    gameData.score = 0;
    gameData.level = 0;

    gameOverScreen.remove()
})

gameLoop();