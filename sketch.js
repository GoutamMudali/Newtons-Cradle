const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ball1Object1,ball2Object2,ball3Object3, ball4Object4,ball5Object5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new Ground (width/2,height/4,width/7,20);

	BallsDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	ball1Object1=new Balls (startBallsPositionX-BallsDiameter*2,startBallsPositionY,BallsDiameter);
	ball2Object2=new Balls (startBallsPositionX-BallsDiameter,startBallsPositionY,BallsDiameter);
	ball3Object3=new Balls (startBallsPositionX,startBallsPositionY,BallsDiameter);
	ball4Object4=new Balls (startBallsPositionX+BallsDiameter,startBallsPositionY,BallsDiameter);
	ball5Object5=new Balls (startBallsPositionX+BallsDiameter*2,startBallsPositionY,BallsDiameter);
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	rope1=new rope(Ball1Object1.body,roofObject.body,-BallsDiameter*2, 0)

	rope2=new rope(Ball2Object2.body,roofObject.body,-BallsDiameter*1, 0)
	rope3=new rope(Ball3Object3.body,roofObject.body,0, 0)
	rope4=new rope(Ball4Object4.body,roofObject.body,BallsDiameter*1, 0)
	rope5=new rope(Ball5Object5.body,roofObject.body,BallsDiameter*2, 0)

	constraint1={
		bodyA:Ball1Object1.body,
		bodyB:roofObject.body,
		pointB: {x:-BallsDiameter*2, y:0}
	}

	constraint2={
		bodyA:Ball2Object2.body,
		bodyB:roofObject.body,		
		pointB: {x:-BallsDiameter, y:0}
	}


	constraint3={
		bodyA:Ball3Object3.body,
		bodyB:roofObject.body,		
		pointB: {x:0, y:0}

	}

	constraint4={
		bodyA:Ball4Object4.body,
		bodyB:roofObject.body,		
		pointB: {x:BallsDiameter, y:0}	

	}

	constraint5={
		bodyA:Ball5Object5.body,
		bodyB:roofObject.body,		
		pointB: {x:BallsDiameter*2, y:0}
	}

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	
	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  ball1Object1.display();
  ball2Object2.display();
  ball3Object3.display();
  ball4Object4.display();
  ball5Object5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ball1Object1.body,ball1Object1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	BallBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(BallBodyPosition.x, BallBodyPosition.y, roofBodyX,roofBodyY);
}






