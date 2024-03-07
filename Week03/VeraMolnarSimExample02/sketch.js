let vs
let na=12


function setup() {
  createCanvas(600,600)
  vs=new VMGrid(na,12)
}

function draw() {
  background(230);
  vs.run()
}

function VMGrid(na,n){
  let step=width/na
  vmss=[]
  let vMod=sin(PI/3)
  for(let j=0; j<na; j++){
    for(let i=0; i<na; i++){
      vmss.push(new VMSquareSet(
        (i+(j%2==0?0.125:0.675))*step,
        (j+1)*step*vMod,
        step*1,
        step*0.2,
        PI/8,
        n,
        step
      ))
    }
  }
  
  this.run=function(){
    vmss.forEach(function(vms){
      vms.run()
    })
  }
}

function VMSquareSet(x,y,s,ds,da,nn,sr){
  let vss=[]
  let n=floor(random(nn/2)+nn/2)
  for(let i=0; i<n; i++){
    vss.push(new VMSquare(x,y,s-i*sr/n,ds,da))
  }
  
  this.run=function(){
    vss.forEach(function(vs,i){
      vs.run(i)
      vs.show()
    })
  }
}

function VMSquare(x,y,s,ds,da){
  let offset=random(10)
  let numVerts=6
  let verts=[]
  for(let i=0; i<numVerts; i++){
    verts.push({aNom:(i+0.5)*TWO_PI/numVerts, rNom:s*0.5})
  }
  
  // let verts=[
  //   {aNom:-PI*0.75, rNom:s*0.5},
  //   {aNom:-PI*0.25, rNom:s*0.5},
  //   {aNom:PI*0.25, rNom:s*0.5},
  //   {aNom:PI*0.75, rNom:s*0.5},
  // ]
  
  this.run=function(iSq){
    verts.forEach(function(v,i){
      v.a=v.aNom+(noise(
        offset+x*0.01+frameCount*0.01+i*0.1,
        y*0.01+frameCount*0.001
      )-0.5)*2*da
      v.r=v.rNom+ds*(noise(iSq*frameCount*0.0033+x*0.02,y*0.02)-0.5)
      v.x=x+cos(v.a)*v.r+ds*noise(x,y,i/10+frameCount*0.0045)
      v.y=y+sin(v.a)*v.r+ds*noise(x,y,i/12+frameCount*0.0038)
      // console.log()
    })
  }
  
  this.show=function(){
    noFill()
    stroke(0,180)
    strokeWeight(0.1+2*noise(x+frameCount*0.01,y+offset))
    beginShape()
    verts.forEach(function(v){
     vertex(v.x, v.y) 
    })
    endShape(CLOSE)
  }
}

