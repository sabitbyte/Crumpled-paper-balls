
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball



function preload()
{
	
}

function setup() {
	createCanvas(1350,655);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(400,10,20,ball_options);
	World.add(world,ball)

	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	}

	

	groundObj=new Ground(675,100,1350,20)
	leftside=new Ground (700,450,20,75)
	rightside=new Ground (777,450,20,75)
	Engine.run(engine);
  
}


function keyPressed(){
if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:+0.10,y:-0.05});

}



}





















function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  drawSprites();
  }



