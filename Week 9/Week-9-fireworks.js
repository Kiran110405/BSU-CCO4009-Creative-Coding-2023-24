let p=[]
let firework
let numParticles=100

function setup() {
  createCanvas(400, 400);
  //p=new Particle(200,200)
   // p.push(new Particle(200,200))
}

function draw() {
  background(0,10);
  if(firework){
    firework.update()
  }
 }

function mousePressed(){
  firework=new Firework(mouseX,mouseY,random(2,900))
}

class Firework{
  constructor(x,y,n){
    this.p=[]
    let numParticles=n
    for (let i=0; i<numParticles;i++){
      this.p.push(new Particles(200,200))
    }
    
  }
  
  update(){
    // this.p.forEach(function(thingy){
    //   if (thingy.update()){
    //   thingy.show()
    // } else {
    //    //remove it       
    //    this.p.splice(i,1)
    // }
    for(let i=this.p.length-1; i>=0; i--){
      if (this.p[i].update()){
        this.p[i].show()
      } else {
         //remove it       
         this.p.splice(i,1)
      }
    }
}
}

class Particles{
  constructor(x,y,n){
    this.x=x
    this.y=y
    this.a=random(TWO_PI)
    this.speed=random(1,2.5)
    this.fall=1
    this.gravity=0.05
    this.moveX=cos(this.a)*this.speed
    this.moveY=sin(this.a)*this.speed
  }
  
  update(){
    this.x+=this.moveX
    this.y+=this.moveY
    this.y+=this.fall
    this.fall+=this.gravity
    return this.y<height
  }
  
  show(){
    fill(0,150,250)
    ellipse(this.x,this.y,5)
  }
}