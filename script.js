class AudioController {
    constructor() {
        this.bgMusic = newAudio('assets/Audio/creepy.mp3');
        this.flipSound = newAudio('assets/Audio/flip.wav');
        this.matchSound = newAudio('assets/Audio/match.wav');
        this.victorySound = newAudio('assets/Audio/victory.wav');
        this.gameOverSound = newAudio('assets/Audio/gameover.wav');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }

    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }

}

class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        tshi.timeRemaining = totalTime;
        this.timer = document.getElementsById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }
    startGame() {
        this.cardToCheck = null;
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {

        })
    })
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

let audioController = new AudioController();