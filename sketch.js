
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var stone;
var hammer;
var rubber;
var iron;
var sand1;
var sand2;
var sand3;
var sand4;
var sand5;
var sand6;
var sand7;
var sand8;



function setup() 
{
var canvas = createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
	
//Create the Bodies Here.
ground = new Ground(600,height,1200,20);
stone = new Stone(700,320,70,70);
hammer = new Hammer(500, 260, 100, 30);
rubber = new Rubber(300, 100, 35);
iron = new Iron(100, 230, 120, 10);
sand1 = new Sand(300, 50, 7);
sand2 = new Sand(300, 50, 7);
sand3 = new Sand(300, 50, 7);
sand4 = new Sand(300, 50, 7);
sand5 = new Sand(300, 50, 7);
sand6 = new Sand(300, 50, 7);
sand7 = new Sand(300, 50, 7);
sand8 = new Sand(300, 50, 7);

Engine.run(engine);
  
}


function draw() 
{
rectMode(CENTER);
background(0);

ground.display();
stone.display();
hammer.display();
rubber.display();
iron.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
sand6.display();
sand7.display();
sand8.display();

drawSprites();
 
}



