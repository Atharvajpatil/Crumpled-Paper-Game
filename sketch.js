const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50, 400, 10);

  ground = new Ground(300, 500, 800, 20);
  
  leftSide = new Dustbin(400, 480, 20, 100);
  bottom = new Dustbin(550, 630, 100, 20);
  rightSide = new Dustbin(530, 480, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:11, y: -15})
  }
}