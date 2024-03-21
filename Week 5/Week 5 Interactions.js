function setup() {
    createCanvas(400, 400);
    //frameRate(200)
    background(220);
  }
  
  function mousePressed(){
    strokeWeight(1)
    noFill()
    ellipse(mouseX, mouseY, 10)
  }
  
  function mouseReleased(){
    background(200)
  }
  
  function keyPressed(){
    background(20,20,20)
  }
  
  function draw() {
    //background(220);
    if(mouseIsPressed){
      let d=dist(pmouseX, pmouseY, mouseX, mouseY)
      strokeWeight(d/10)
      stroke(0,100)
      line(pmouseX, pmouseY, mouseX, mouseY)
      fill(0,200,200)
      ellipse(mouseX, mouseY, 20)
      
    }
    
  }