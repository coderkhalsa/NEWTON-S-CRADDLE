
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var roof
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new bob(400,300,20);
	bobObject2=new bob(400+40,300,20);
	bobObject3=new bob(400+80,300,20);
	bobObject4=new bob(400-40,300,20);
	bobObject5=new bob(400-80,300,20);
	roof= new Roof(400,100,400,20)
rope1= new Rope(roof.body,bobObject1.body,0)
rope2= new Rope(roof.body,bobObject2.body,40)
rope3= new Rope(roof.body,bobObject3.body,80)
rope4= new Rope(roof.body,bobObject4.body,-40)
rope5= new Rope(roof.body,bobObject5.body,-80)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  rope1 .display();
  rope2 .display();
  rope3 .display();
  rope4 .display();
  rope5 .display();
  drawSprites();
 
}



