const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(150,300,50,50);
    box2 = new Box(300,300,50,50);
    box3 = new Box(300,250,50,50);
    box4 = new Box(150,250,50,50);
    box5 = new Box(225,170,50,50);
    //box6 = new Box(150,250,50,50);
    pig1 = new Pig(225,300);
    pig2 = new Pig(225,250);
    log1 = new Log(225,270,250,PI/2)
    log2 = new Log(225,200,250,PI/2)
    log3 = new Log(170,170,80,PI/7)
    log4 = new Log(270,170,80,PI/-7)
    bird1 = new Bird(100,100)
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
}