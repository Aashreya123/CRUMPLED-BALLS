
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var ball;

function preload(){
  dustbinImg = loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	ball = new Ball();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  
  ball.display();
  groundObject.display();
  dustbinObj.display();
  image(dustbinImg, 1075,400,250,300)
}

function keyPressed() {
  if (keyCode === 32){
  Matter.Body.applyForce(ball.body, ball.body.position, {x:20, y:-500})
  }
}