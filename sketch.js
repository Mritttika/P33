const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var bgImg;
var characterWalk;
//varcharacter2;
var characterWalkImg;
//var character2Img
var snow1;

function preload(){
  bgImg = loadImage("snow1.jpg");
  characterWalkImg = loadAnimation("character_walk1.jpg","character_walk2.jpg","character_walk3.jpg","character_walk4.jpg");
  //character2Img = loadImage();
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  characterWalk = createSprite(780,180,20,20);
  characterWalk.addAnimation("walking",characterWalkImg);
  characterWalk.velocityX = -4;

  snow1 = new Snow(400,0,2);

}

function draw() {
  Engine.update(engine);
  background(bgImg);  

  if(characterWalk.x <0){
    characterWalk.x = 1000;
  }

  if(keyDown === DOWN_ARROW){
    snow1.velocityY = 2;
  }

  drawSprites();
}