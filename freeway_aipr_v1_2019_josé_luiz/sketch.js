function setup() {
 createCanvas(600, 400);
}

function draw() {
 background(imgEstrada);
  movimentarVaca();
  mostrarVaca();
  mostrarCarros();
  movimentaCarros();
  mostrarPlacar();
  pontuar();
  atropelamento();
  }

