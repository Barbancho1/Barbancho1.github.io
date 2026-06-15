function setup() {
  createCanvas(600, 400);
}

function draw() {
  let sinus=sin(frameCount*0.01)*25;
    let cosinus=cos(frameCount*0.01)*25;
  let sinuscolor=sin(frameCount*0.01)*255;
 
  background(217+sinuscolor, 199, 59-sinuscolor);
  fill(250, 224, 180)
  ellipse (300,200,200,250)
  
  fill(250, 224, 180)
  ellipse (270,175,28,29)
  ellipse (330,175,28,29)
  
  fill (250+sinus,110,110)
  arc (300,250,100,50+sinus,0,PI)
}
