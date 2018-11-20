let song;
let color = 255;
let mcLogo;
let snow;
let snowArr = [];

function preload() {
}
function setup() {
    frameRate(30);
    noStroke();
    createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
    mcLogo = loadImage('assets/mcLogo.svg');
    snow = loadImage('assets/snow.svg');
    song = loadSound('assets/let-it-snow.mp3');

    /*song.setVolume(.5);
    //song.loop();
    song.play();*/

    /*const canvasElt = createCanvas(400, 600);
    canvasElt.style.width = '100%', canvasElt.style.height = '100%';*/

    for (let i = 0; i < 1000; i++) {
        snowArr[i] = new Flake();
    }
}
/*document.addEventListener('click', () => triggerSong());
document.addEventListener('keypress', (e) => {
    if (e.code === 'Space') {
        triggerSong();
    }
});*/
function triggerSong() {
    if (!song.isPlaying()) {
        song.play();
    } else  {
        song.pause();
    }
}

function draw() {
    background('black');
    //background('#eb1c24');
    //fill(32,23,124);
    //image(mcLogo, width/2 - mcLogo.width/2, height - 220);
    //image(snow, 0, 0);
    for (let i = 0; i < snowArr.length; i++) {
        snowArr[i].show();
        snowArr[i].fall();
    }

}
