function pontuar(){
  if(yVacaD < 5){
    meuPlacar += 1;
    yVacaD = 368;
  }
  if(yVacaE < 5){
    yVacaE = 368;
    placarOponente += 1;
  }
}

function mostrarPlacar(){
  textSize(30);
  fill("Black");
  text(meuPlacar, 450, 30);
  
  fill("Black");
  text(placarOponente, 150, 30);
}

