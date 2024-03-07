let step=200
let across=1
let down=1
let numDirections=4

function setup() {
  createCanvas(400, 400);
  background(220);
}

function mousePressed(){
  background(220);
  let myPick = pickRandom(numDirections);
  myTile(across, down, myPick)
}

function myTile(across, down, pick){
  push(); //start measuring from the top left corner
  translate((across + 0.5) * step, (down + 0.5) * step);
  rotate(pick * TWO_PI / numDirections); //rotate according to pick
  //*************************
  //Add your tile design here, use 'step' for tile size
  noStroke()
  fill(235,135,0)
  ellipse(0,0,step,step)
  rectMode(CENTER)
  fill(255,0,200)
  // rect(0,step*0.25,step*0.5,step*0.5)
  triangle(-step/2, -step/2, step/2, -step/2, -step/2, step/2);
  stroke(0,200,200)
  strokeWeight(step*0.1)
  line(-step*0.25,-step*0.5,-step*0.25,step*0.5)
  //*************************
  pop(); //measure from wherever we were before
}

function pickRandom(n) {
  return floor(random(n));
}