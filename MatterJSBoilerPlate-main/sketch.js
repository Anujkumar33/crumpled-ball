
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine;
var world;
var ground1;
var leftSide;
var rightSide
var radius=40;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_option ={
		isStatic:false,
		restitution:0.3,
		friction:0,  
		density:1.2
	};

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball=Bodies.circle(220,100,20,ball_option);
	World.add(world,ball);

	
  ground1=new Game(width/2,670,width,20);
  leftSide=new Game(1100,600,20,120);
  rightSide= new Game(1350,600,20,120);
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(52);

 
  
  ellipse(ball.position.x,ball.position.y,radius,radius);

  ground1.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
 
}



