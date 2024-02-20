function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}

function draw() {
  background(0,0,80);
  fill(frameCount%360,60,100)
  noStroke()
  circle(mouseX, mouseY,120)
}
