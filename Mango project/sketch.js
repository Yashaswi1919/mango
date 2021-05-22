
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeImg,tree
var stones,ground, launcher;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy,boyImg;


function preload(){
	boyImg=loadImage("images/boy.png");
	treeImg=loadImage("images/tree.png")
  }

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;
    
	ground=new Ground();

	stones=new Stone(100,460,23);
	stones.scale=0.2;

	mango1=new Mango(600,290,20);
    mango2=new Mango(855,325,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(730,200,35);
	mango5=new Mango(710,320,36);
	mango6=new Mango(780,250,35);
	mango7=new Mango(825,170,33);
	mango8=new Mango(880,260,35);
	mango9=new Mango(940,220,35);
	mango10=new Mango(980,305,35);
	
	attach=new Throw(stones.body,{x:100,y:465});

	tree=createSprite(775,368);
	tree.addImage(treeImg);
    tree.scale=0.42;

	boy=createSprite(160,550);
	boy.addImage(boyImg);
	boy.scale=0.125;
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!

  
  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  drawSprites();

  stones.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  tree.display();
  mango10.display();
  mango9.display();

  ground.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	attach.fly();
}

function detectCollision(lstones,lmango){
	mangoBodyPosition=lmango.body.position
    stonesBodyPosition=lstones.body.position

	var distance=dist(stonesBodyPosition.x, stonesBodyPosition.y, mangoBodyPosition.x, 
		mangoBodyPosition.y)
		if(distance<=lmango.diametre+lstones.diamtre){
			Matter.Body.setStatic(lmango.body,false);
		}
		
	}

	function keyPressed(){
		if(keyCode===32){
			Matter.Body.setPosition(stones.body,{x:100,y:465});
			attach.Launch(stones.body);
		}
	}
