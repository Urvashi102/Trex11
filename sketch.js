var ground;
var trex ,trex_running;
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,180,20,50);
 trex.addAnimation("running", trex_running);

 // adding scale and position 
 trex.scale = 0.5;
 trex.x = 50;

 // creating ground
ground = createSprite(200,180,400,20);
}

function draw(){
  background("white")

  //jumping trex on the space key
  if(keyDown("space"))
  {
    trex.velocityY = -12;
  }

  trex.velocityY = trex.velocityY + 0.8;


  //stoping trex from falling
  trex.collide(ground);
  drawSprites();

}
