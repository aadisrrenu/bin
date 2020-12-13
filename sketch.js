
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var lineDown, lineLeft, lineRight;
var ground, paper;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Creating the objects
	ground = new Ground(width / 2, height - 30, width, 20);

	lineDown = new Box(width / 2 +200, height - 50, 80, 20);
	lineLeft = new Box(width / 2 + 150, height - 90, 20, 100);
	lineRight = new Box(width / 2 + 250, height - 90, 20, 100);

	paper = new Paper(width / 4, height - 90, 20)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
    background(0);

	ground.display();


	paper.display("white");
	paper.update();

	lineLeft.display("red","black");
	lineRight.display("red","black");
	lineDown.display("red","black");

	drawSprites();
 
}
