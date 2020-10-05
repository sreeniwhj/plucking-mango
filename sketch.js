
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImg=loadImage("Images/boy.png");
	treeImg=loadImage("Images/tree.png")

}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=Bodies.rectangle(width/2,680,width,20)
mango1=new mango(800,400,30);
mango2=new mango(700,500,50);
mango3=new mango(750,540,40);
mango4=new mango(770,530,45);
mango5=new mango(730,440,44);
mango6=new mango(760,533,49);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER)
  image(boyImg,80,650,200,200);
  image(treeImg,1000,450,600,600);
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  drawSprites();
 
}



