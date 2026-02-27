let mic;//crea una variable per al micròfon
function setup() {
  createCanvas(600, 400);//Àrea de dibuix
  //El primer número es l'amplade en pixels i el segon número es l'altura en pixels.
  mic=new p5.AudioIn();//el micròfon es una entrada de audio amb p5
  mic.start()//activa el micròfon
}

function draw() {
  let vol=mic.getLevel()
  let h=map(vol,0,1,0,400.);
  background(217, 199, 59);//color del fons del dibuix
  //El primer número es el primer nivell de vermell, el segon número es el nivell de verd i el tercer es la intensitat de blau (RGB) en html dintre de backgrpud o fons.
  fill(250, 224, 180)//color de la cara exterior
  //en el cas del fill serà el mateix però el que fa és omplir de color la figura seguent.
  ellipse (mouseX,mouseY,200,250)//Forma de la cara exterior
  //mouseX=300 mouseY=200
  // El primer número es la posició x del centre de la elipse, desde la contonada superior esquerre que es el "0.0", el segon número es la posició esquerra a l'alçada del centre de la elipse, el tercer número l'amplada de l'elipse sencera i el cuart número el l'alçada de l'elipse sensera.
  
  fill(250, 224, 180)//Color Blanc
  ellipse (270,175,28,29)//Forma de ull dret perquè x=270
  ellipse (mouseX+35,mouseY-35,28,29)//Forma de ull dret perquè x=330
  line (mouseX+20,mouseY-60,mouseX+70,mouseY-70)
  line (230,145,290,120)
  fill (250-h,110-h,110+h)//color vermell
  arc (mouseX,mouseY+50,100,50+h,0,PI)//Forma de la boca
}
