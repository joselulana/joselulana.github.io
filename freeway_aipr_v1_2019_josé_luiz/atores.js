function mostrarVaca(){
  image(imgVaca, 400, yVacaD, 30, 30);
  image(imgTouro, xVacaE, yVacaE, 28, 28);

}

function movimentarVaca(){
  //vacaE
  if(keyIsDown(UP_ARROW)){//Para cima
    if(yVacaD > 0)//Teto
      yVacaD -= 5;
    }
  if(keyIsDown(DOWN_ARROW)){//Para baixo
    if(yVacaD < 365)//Chão
      yVacaD += 5;
  }
  //VacaE
   if(keyIsDown(87)){//Para cima
    if(yVacaE > 0)//Teto
      yVacaE -= 5;
    }
  if(keyIsDown(83)){//Para baixo
    if(yVacaE < 365)//Chão
      yVacaE += 5;
  }
}

