var gameState = 0;
var playerCount;
var allPlayers = [];
var distance = 0;
var database;
var finishedPlayers = 0;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1_Image, car2_Image, car3_Image, car4_Image;
var ground_Image, track_Image;
var bronze, silver, gold;
var citizen1_Image, citizen2_Image,citizen3_Image, citizen4_Image, citizen5_Image, citizen6_Image, citizen7_Image, citizen8_Image, citizen9_Image, citizen10_Image; 
var passedFinish;
var citizen1, citizen2, citizen3, citizen4, citizen5, citizen6, citizen7, citizen8, citizen9, citizen10;
var police_Image;
var police1, police2, police3, police4;
var citizen;
function preload()
{
   /*car1_Image = loadImage("images/car1.png");
   car2_Image = loadImage("images/car2.png");
   car3_Image = loadImage("images/car3.png");
   car4_Image = loadImage("images/car4.png");
   ground_Image = loadImage("images/ground.png");
   
   bronze = loadImage("images/bronze.png");
   silver = loadImage("images/silver.png");
   gold = loadImage("images/gold.png");*/
   track_Image = loadImage("images/track.jpg");

   citizen1_Image = loadImage("citizen/citizen1.png");
   citizen2_Image = loadImage("citizen/citizen2.png");
   citizen3_Image = loadImage("citizen/citizen3.png");
   citizen4_Image = loadImage("citizen/citizen4.png");
   citizen5_Image = loadImage("citizen/citizen5.png");
   citizen6_Image = loadImage("citizen/citizen6.png");
   citizen7_Image = loadImage("citizen/citizen7.png");
   citizen8_Image = loadImage("citizen/citizen8.png");
   citizen9_Image = loadImage("citizen/citizen9.png");
   citizen10_Image = loadImage("citizen/citizen10.png");

   police_Image = loadImage("policeCar.png");
   



}

function setup()
{
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw()
{
  background("lightgrey");
  if(playerCount === 4 && finishedPlayers === 0)
  {
    game.update(1);
  }

  if(gameState === 1)
  {
    clear();
    game.play();
  }

  if(finishedPlayers === 4)
  {
    game.update(2);
  }

  if(gameState === 2 && finishedPlayers === 4)
  {
    game.displayRanks();
  }

  
}

