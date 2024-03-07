let step
let numAcross=40

function setup() {
  createCanvas(500, 500);
  step=width/numAcross
  frameRate(10)
  //noLoop()
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
  let numSquares=8
  push() 
  translate((across+0.5)*step, (down+0.5)*step)
  rectMode(CENTER)  
  noFill()
  for(let k=0; k<numSquares; k++){
    let r=random(5)
    fill(random(-step*0.1,step*0.1),
         random(-step*0.1,step*0.1),
         step*k,numSquares)
    if(r<4){
    ellipse(random(-step*0.1,step*0.1),
         random(-step*0.1,step*0.1),
         step*k/numSquares)
    }
  }
  pop()
}