function setup() {
    createCanvas(400, 400);
    posX=width/2
  }
  
  function keyPressed(){
    console.log(key)
    if (key=='a'){
      posX-=5
  }
    if(key=='d'){
      posX+=5
    }
  }
  
  function draw() {
    background(220);
    ellipse(posX,200,50)
  }