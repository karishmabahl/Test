// Inside Matter library 
// 3 objects
// Matter.Engine, Matter.World, Matter.Bodies

// save the three modules in constants (like short forms)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine,world;
//var ground,ball;

var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var bgI;
var platform;
var constrainedLog;
function preload(){
  bgI = loadImage("sprites/bg.png");
}

function setup() {
  var canvas = createCanvas(1200,400);
  

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  platform = new Ground(150,305,300,170);
  constrainedLog = new Log(230,180,80,PI/2);

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810,350);
  log1 = new Log(810,260,300, PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810,220);
  log2 = new Log(810,180,300, PI/2);

  box5 = new Box(810,160,70,70);
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);

  bird = new Bird(100,100);

  log6 = new Log(230,180,80,PI/2);
  chain = new Chain(bird.body, log6.body);


  
/*  
  var ground_options = {
    isStatic:true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  console.log(ground.position.x);
  console.log(ground.position.y);
  console.log(ground);
*/
  /*var ball_options = {
    restitution: 0.8
  }
  //x,y,radius.... r as 5 touches ground, bigger doesn't
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  console.log(ball); 
  */
  
  //Engine.run(engine);
}

function draw() {
  background(bgI); 
  Engine.update(engine);

  ground.display();
  platform.display();
  
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  
  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  bird.display();
  //constrainedLog.display();
  log6.display();
  chain.display();
  
  /*rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20); 
  text(mouseX + ", " + mouseY, mouseX, mouseY);
  ellipseMode(RADIUS);
  */
  /* RADIUS mode takes third and fourth parameters to 
  specify half of the shapes's width and height*/
  //ellipse(ball.position.x, ball.position.y,20,20);
  //circle(ball.position.x, ball.position.y,80);
}