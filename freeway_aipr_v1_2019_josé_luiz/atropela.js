let atropelaVaca = false;
let atropelaTouro = false;

function atropelamento(){
  for(let i=0; i < imgCarro.length; i++){
    atropelaVaca = collideRectRect(xVacaD, yVacaD, 28, 28, xCarro[i], yCarro[i], 50, 30);
    
    if(atropelaVaca){
      //Vaca atropelada
      yVacaD = 368;
    }
    
    atropelaTouro = collideRectRect(xVacaE, yVacaE, 28, 28, xCarro[i], yCarro[i], 50, 30);
    
    if(atropelaTouro){
      //Touro atropelado
      yVacaE = 368;
    }
    
  }//For
}//Atropelamento

