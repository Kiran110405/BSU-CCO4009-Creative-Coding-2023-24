let step
let numAcross=100

function setup() {
  createCanvas(500, 500);
  step=width/numAcross
  //frameRate(10)
}

function draw() {
  background(220);
  
  for(let j=0; j<numAcross; j++){
    for(let i=0; i<numAcross; i++){
      drawTile(i,j,step*5)
    }
  }
}

function drawTile(across, down, step){
  push() 
  translate((across+0.5)*step, (down+0.5)*step)
  rectMode(CENTER)  
  angleMode(DEGREES)
  rotate(frameCount)
  let r=noise(across*0.1,down/10,frameCount/10)
  let r2=noise(across*0.5,down*0.15,frameCount*0.2)
  rect(across*step, down*step, across*step)
  pop()
}