var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	/*wall1=new box(400,600,100,20);
	wall2=new box(350,650,20,100);
    wall3=new box(450,600,20,100);*/

	wall1=createSprite(400,650,100,20);
	wall1.shapeColor="red";
	wall2=createSprite(350,610,20,100);
	wall2.shapeColor="red";
	wall3=createSprite(450,610,20,100);
	wall3.shapeColor="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var packageBody_options={
		'restitution':0,
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 ,/* {restitution:3, isStatic:true}*/packageBody_options);
	//World.add(world, packageBody);
	
	var ground_options={
		isStatic:true
	}

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , /*{isStatic:true}*/ground_options );
 	//World.add(world, ground);

	var wall1_options={
		isStatic:true
	}

	wall1 = Bodies.rectangle(400, 630,100, 20 ,wall1_options );
 	World.add(world, wall1);

	 var wall2_options={
		isStatic:true
	}

	wall2 = Bodies.rectangle(370, 600,20,100 ,wall2_options );
 	World.add(world, wall2);

	 var wall3_options={
		isStatic:true
	}

	wall3 = Bodies.rectangle(430, 600,20,100 ,wall3_options );
 	World.add(world, wall3);

	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  /*wall1.display();
  wall2.display();
  wall3.display();*/

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    World.add(world, packageBody);
  }
}
