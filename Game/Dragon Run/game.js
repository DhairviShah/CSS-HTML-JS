score = 0;
cross = true;
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
audio.play();
setTimeout(() => {
    audio.play()
}, 1000);



document.onkeydown = function (e) {

    // for making dino move upwards

    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);

    }

    //for making dino move forward

    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }

    //for making dino move backwards

    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}


// js for gameover
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.game-over');
    dragon = document.querySelector('.dragon');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 20 && offsetY < 30) {
    
        gameOver.style.visibility = 'visible';
        dragon.classList.remove('dragonani');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
            
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
       

    }

}, 100);

//display score

function updateScore(score) {
    scorecont.innerHTML = "Your Score: " + score
}