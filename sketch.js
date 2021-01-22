const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundIMG;
var ironman;
function preload(){
backgroundIMG=loadImage("download.png")

}

function setup(){
var canvas=createCanvas(400, 400)

  engine = Engine.create();
    world = engine.world;
ironman=new Ironman (200, 200, 50, 50 )

}
function draw(){
  background(backgroundIMG)
  ironman.display();
}