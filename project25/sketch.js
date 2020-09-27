
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject, dustbinObject, groundObject;
var wall1, wall2, wall3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	engine = Engine.create();
	world = engine.world;
	dustbinObject=new dustbin(1200,650);
	paperObject=new Paper(200,450,40);
    groundObject=new ground(width/2, 650, width, 10)
	World.add(world, ground);
   
 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  dustbinObject.display();
  paperObject.display();
  groundObject.display();

  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85, y:-85})
	}
  }

