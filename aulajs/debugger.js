//Espera carregar todo o conteúdo HTML
window.onload = function(){
    //alert("Alo Ha");
    console.log("Se quiser me ver, tem que precionar F12! Console...");
    //Concatenação de strings com o símbolo + 
    console.log("a = " + a + " b = " + b);
    console.log("a + b = " + parseInt(a+b) );
    };
    
    //Variável Global
    var a = 2;
    var b = 2;
    
    let entradas = document.querySelectorAll('input');
    let resposta = document.querySelector('.resposta');
    let botão = document.querySelector('#btnSomar');
    
    //Monitoramento do click no botão
    //Quando o botão for clicado, a função somar será chamada!
    botão.addEventListener('click',somar);
    
    peganúmero1 = function(){
    return entradas[0].value;
    }
    
    pegaNúmero2 = function(){
    return entradas[1].value;
    }
    
    testarEntradasVazias = function(){
    if(pegaNúmero1() === '' || pegaNúmero2() === '')
    return true;
    else 
    return false;
    }
    
    somar = function(){
    if(testarEntradasVazias()){
    resposta.textContent = "Erro: Preencha os dois campos numéricos";
    return false;
    }else{
    atualizaResposta(); 
    }
    }
    
    atualizaResposta = function(){
    let num1 = pegaNúmero1();
    let num2 = pegaNúmero2();
    resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
    }
    
    