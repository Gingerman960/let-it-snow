let song;
let mcLogo;
let snow = [];
let gravity;
let intensity;
let drift = [];
let blockWidth = 5;

function preload() {
}
function setup() {
    frameRate(30);
    noStroke();
    createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
    mcLogo = loadImage('assets/mcLogo.svg');
    song = loadSound('assets/let-it-snow.mp3');

    /*for (let i = 0; i < width / blockWidth; i++) { // enable for snowDrifts
        drift.push({x: i * blockWidth, y: height});
    }*/

    song.setVolume(.3);
    //song.loop();
    //song.play();
}
document.addEventListener('click', () => triggerSong());
document.addEventListener('keypress', (e) => {
    if (e.code === 'Space') {
        triggerSong();
    }
});
function triggerSong() {
    if (!song.isPlaying()) {
        song.play();
    } else  {
        song.pause();
    }
}

function draw() {
    gravity = map(mouseY, 0, height, 0, 0.3 );
    intensity = map(mouseX, 0, width, 1, 10);
    //background('black');
    //background('#eb1c24');
    background('#5aa9c2');
    image(mcLogo, width/2 - mcLogo.width/2, height - 220);
    for (let i = 0; i < random(intensity); i++) {
        snow.push(new Flake());
    }
    for (let flake of snow) {
        flake.show();
        flake.fall();
    }

}
