const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var options ={
        isStatic: true
    }

    var ballOptions ={
        restitution: 1.0, friction: 1.0, density: 1.0
    }

    ground = Bodies.rectangle(200,390,200,20,options);
    World.add(world,ground);

    ball = Bodies.circle(200,200,20,ballOptions);
    World.add(world,ball);

    ball2 = Bodies.circle(100,100,20,ballOptions);
    World.add(world,ball2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20);
    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,20);
}