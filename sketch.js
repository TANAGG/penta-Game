const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground,pent,ground1,ground2;
var tar1,tar2,tar3,tar4,tar5,tar6;
var get1,get2,get3,get4,get5,get6;
var slingshot;
var score = 0;

function setup() {
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
    world = engine.world;
  createSprite(400, 200, 50, 50);
  ground = new Ground(600,598,1400,20);
  ground1 = new Ground(630,440,170,15);
  ground2 = new Ground(860,290,170,15);
  pent = new Pentagon(200,200,60,60);
  tar1 = new Tar(570,400,40,40);
  tar2 = new Tar(630,400,40,40);
  tar3 = new Tar(690,400,40,40);
  tar4 = new Tar(600,330,40,40);
  tar5 = new Tar(660,330,40,40);
  tar6 = new Tar(630,260,40,40);
  get1 = new Get(800,250,40,40);
  get2 = new Get(860,250,40,40);
  get3 = new Get(920,250,40,40);
  get4 = new Get(830,180,40,40);
  get5 = new Get(890,180,40,40);
  get6 = new Get(860,110,40,40);
  slingshot = new SlingShot(pent.body,{x: 200,y: 200});
}

function draw() {
  background(255,255,255); 
  textSize(35);
  fill("black")
  text("score: "+ score,900,50); 
  Engine.update(engine);
  ground.display();
  ground1.display();
  pent.display();
  tar1.display();
  tar2.display();
  tar3.display();
  tar4.display();
  tar5.display();
  tar6.display();
  get1.display();
  get2.display();
  get3.display();
  get4.display();
  get5.display();
  get6.display();
  ground2.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(pent.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}