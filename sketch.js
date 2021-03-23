
const Constraint = Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,b2,b3,b4,b5,r1,r2,r3,r4,r5,roof
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
b1 = new Ball (200,400,50)
b2 = new Ball (300,400,50)
b3 = new Ball (400,400,50)
b4 = new Ball (500,400,50)
b5 = new Ball (600,400,50)

roof = new Roof (400,100,600,50)

r1 = new Rope (b1.body,{x:200,y:100})
r2 = new Rope (b2.body,{x:300,y:100})
r3 = new Rope (b3.body,{x:400,y:100})
r4 = new Rope (b4.body,{x:500,y:100})
r5 = new Rope (b5.body,{x:600,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()

  roof.display()

r1.display()
r2.display()
r3.display()
r4.display()
r5.display()

  drawSprites();

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){Matter.Body.applyForce(b1.body,b1.position,{x:-150,y:-150})}
}



