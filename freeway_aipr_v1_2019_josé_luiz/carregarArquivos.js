//Variáveis para as imagens
let imgEstrada;
let imgvaca;
let imgCarro = [];

//Variáveis de movimento
let yVacaD = 368;
let yVacaE = 368;

let xVacaD = 400;
let xVacaE = 200;

//Placar
let meuPlacar = 0;
let placarOponente = 0;

let larguraCarro = 5

//Direita  / Esquerda
let xCarro = [615, 605, 610, -60, -65, -70];
let yCarro = [45, 105, 158, 215, 270, 320];
let velocidadeCarro = [3, 5, 7, 3, 5, 7];

function preload(){
 imgEstrada = loadImage('imagens/estrada.png');
 imgVaca = loadImage('imagens/ator-1.png');
 imgTouro = loadImage('imagens/touro.png');
 imgCarro[0] = loadImage('imagens/carro-1.png');
 imgCarro[1] = loadImage('imagens/carro-2.png');
 imgCarro[2] = loadImage('imagens/carro-3.png');

 imgCarro[3] = loadImage('imagens/carro-4.png');
 imgCarro[4] = loadImage('imagens/carro-5.png');
 imgCarro[5] = loadImage('imagens/carro-6.png');

}

