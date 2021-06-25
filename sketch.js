
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

 block1 = Bodies.rectangle(100,300,100,10,ground_options);
 World.add(world,block1);
 block2 = Bodies.rectangle(300,300,100,10,ground_options);
 World.add(world,block2);
 block3 = Bodies.rectangle(200,200,100,10,ground_options);
 World.add(world,block3);


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ball2 = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball2);
  
  
  ball3 = Bodies.circle(300,10,20,ball_options);
  World.add(world,ball3);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  var render = Matter.Render.create({ element:document.body, engine:engine, options: { width:400, height:400, wireframes:false } }); Matter.Render.run(render);
}


function draw() 
{
  background("lightgreen");
  Engine.update(engine);
  
  fill ("brown");

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(block1.position.x,block1.position.y,100,10);
  rect(block2.position.x,block2.position.y,100,10);
  Matter.Body.rotate(block3,0.03)
  push();
  translate(block3.position.x,block3.position.y)
  rotate(block3.angle);
  rect(0,0,100,10);
  pop(); 
  
 
  
}

