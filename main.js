song_1 = "";
song_2 = "";

function preload(){
    song_1 = loadSound("song_1.mp3");
    song_2 = loadSound("song_2.mp3");
}

function setup() {
    canvas=createCanvas(700,500);
    canvas.position(340,270);
    video= createCapture(VIDEO);
    video.hide()
}

function draw(){
    image(video, 0,0,700,500)
}
