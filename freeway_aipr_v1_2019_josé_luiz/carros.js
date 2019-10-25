function mostrarCarros(){
   
  for(let i=0; i < imgCarro.length; i++)
   image(imgCarro[i], xCarro[i],yCarro[i], 50, 30);
   
}

function movimentaCarros(){
  
  for(let i=0; i < imgCarro.length; i++){
    if(i < 3){
       //Carros para Esquerda
      xCarro[i] -= velocidadeCarro[i];
      
      if(xCarro[i] < -55){
    xCarro[i] = 605;
  velocidadeCarro[i] = ceil(random(2,9));
      }   
       }else{
      //Carros para Direita
          xCarro[i] += velocidadeCarro[i];
  if(xCarro[i] > 605){
    xCarro[i]= -65;
    velocidadeCarro[i] = ceil(random(2,9));
  }
    }
  }

 
  
   
}

