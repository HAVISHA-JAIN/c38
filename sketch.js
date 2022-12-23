var canvas;
var backgroundImage;
var bgImg;
var database;
var form;
var player;
var game;
var Mygamestate, myplayercount;
var car1,car2,track


function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Image= loadImage("car1.png")
  car2Image= loadImage("car2.png")
  trackImage= loadImage("track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();

  game.getstate();
}

function draw() {
  background(backgroundImage);

  if (myplayercount === 2) {
    game.updatestate(1);
  }
  if (Mygamestate === 2) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
