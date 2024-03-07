let numSquaresAcross = 12;

function setup() {
  createCanvas(400, 400);
  // noLoop();
}

function draw() {
  background(220);
  let squareSize = width / numSquaresAcross;
  for (let j = 0; j < numSquaresAcross; j++) {
    for (let i = 0; i < numSquaresAcross; i++) {
      makeSquare((i + 0.5) * squareSize, (j + 0.5) * squareSize, squareSize*0.9);
    }
  }
}

function makeSquare(x, y, s) {
  let numSquares=20;
  strokeWeight(0.5);
  noFill();
  rectMode(CENTER);
  push();
  translate(x,y);
  for(let k=1; k<=numSquares; k++){
    let relSize=1-k/numSquares;
    // let doDraw=random(10)<6;
    let doDraw=noise(x*3,y/3,frameCount/20+k/4)*10<4;
    if(doDraw){
      push();
      fill(random(255),100);
      shearX(random(-0.1,0.1));
      shearY(random(-0.1,0.1));
      rect(0,0, s*relSize, s*relSize);
      pop();
    }
  }
  pop();
}
