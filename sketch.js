
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paper1 = new Paper(50,550);
     ground1 = new Ground(400,680,800,20);
     box2 = new Box(700,605,90,130);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  paper1.display();
  ground1.display();
  //box1.display();
  box2.display();
  //box3.display();
  drawSprites();
}


function keyPressed(){
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:70,y:-230})

                  }           
}
