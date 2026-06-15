function setup() {
  createCanvas(600, 400);//Àrea de dibuix
  //El primer número es l'amplade en pixels i el segon número es l'altura en pixels
}

function draw() {
  let sinus=sin(frameCount*0.01)*25;
    let cosinus=cos(frameCount*0.01)*25;
  let sinuscolor=sin(frameCount*0.01)*255;
  // Sinus és una variable, és un nom que conte números que canvien,// es a dir una variable numérica on guardem números que provenen
  // de la funció sinus que genera numeros entre el -1 i el +1.
  // si els números entre el -1 i el +1 es transformaràn en números entre el -20 i +20, no seràn aleatoris sinò que aniran augmentant i disminuint sempre. Aquesta variable la put sumar, multiplicar, dividir o canviar en cualsevol parametre de cualsevol funcións següents.
  background(217+sinuscolor, 199, 59-sinuscolor);//color del fons del dibuix
  //El primer número es el primer nivell de vermell, el segon número es el nivell de verd i el tercer es la intensitat de blau (RGB) en html dintre de backgrpud o fons.
  fill(250, 224, 180)//color de la cara exterior
  //en el cas del fill serà el mateix però el que fa és omplir de color la figura seguent.
  ellipse (300,200,200,250)//Forma de la cara exterior
  // El primer número es la posició x del centre de la elipse, desde la contonada superior esquerre que es el "0.0", el segon número es la posició esquerra a l'alçada del centre de la elipse, el tercer número l'amplada de l'elipse sencera i el cuart número el l'alçada de l'elipse sensera.
  
  fill(250, 224, 180)//Color Blanc
  ellipse (270,175,28,29)//Forma de ull dret perquè x=270
  ellipse (330,175,28,29)//Forma de ull dret perquè x=330
  
  fill (250+sinus,110,110)//color vermell
  arc (300,250,100,50+sinus,0,PI)//Forma de la boca
}
