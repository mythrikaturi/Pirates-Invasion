const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, canvas
var landimg


/* STEP 1 */ 
//create a variable for the object 
var ground

//creating a variable for the tower
var tower 

function preload() {
 //loading the image of the background 
landimg=loadImage("assets/background.gif")

}

function setup() {
//to create a canvas
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  //ground is made up of natural and physical properties 

  //physical properties are isstatic(something that doesn't move),restitution(bounciness),friction,density
  //natural properties are x,y,w,h,radius,angle


  /* STEP 2 */
  //creating physical properties
var ground_options={
isStatic:true,
restitution:0
}

//creaing physical properties for the tower 
var tower_options={
  isStatic:true,
  restitution:0
}



/* STEP 3 */
//creating a body of the ground
ground=Bodies.rectangle(0,550,2400,50,ground_options)

//creaing a body of the tower 
tower=Bodies.rectangle(160,350,160,310,tower_options)


/* STEP 4 */
//adding a body to the world 
World.add(world,ground)

//adding a body to the world
World.add(world,tower)
}

function draw() {
  //giving image to the background
  //syntax is =:image(variable holding the image, x,y,w,h)
image(landimg,0,0,1200,600)
  Engine.update(engine);

  /* STEP 5 */
 //display the ground
 fill("yellow")
 rect(ground.position.x,ground.position.y,2400,50)

 //display the tower 
push ()
rectMode(CENTER)
fill("red")
 rect(tower.position.x,tower.position.y,160,310)
pop ()
 
}
