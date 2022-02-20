function firstconvert(){
    //Lendo os valores RGB
    // Utilizando a função parseInt nos valores de entrada
    var R = parseInt(document.getElementById('valRed').value);
    var G = parseInt(document.getElementById('valGreen').value)
    var B = parseInt(document.getElementById('valBlue').value)
    

    var valueC = 0;
    var valueM = 0;
    var valueY = 0;
    var valueK = 0;

    console.log(valueC);


    //Confirmando os valores de entrada no Console
    console.log("Red:" + R);
    console.log("Green:" + G);
    console.log("Blue:" + B);

    //Verificando se todos os valores estão preenchidos
    if ( R == null || G == null || B == null || isNaN(R) || isNaN(G)|| isNaN(B) ){
      alert ('Por favor, preencha todos os campos!');
      return false;
    }
    
    //Verificando se os valores são menores que 0 e maiores que 255
    if ( R < 0 || G < 0 || B <0 || R > 255 || G > 255 || B > 255) {
        alert ('Os valores para RGB só podem ser de 0 até 255!');
        console.log('Os valores para RGB só podem ser de 0 até 255!');
        return;
    }


    //Caso todos os valores de RGB sejam 0 CMY são 0 também e K é igual a 1
    if (R == 0 && G == 0 && B == 0) {
        rC = 0;
        rM = 0;
        rY = 0;
        rK = 1;
        document.getElementById('rC').innerHTML = rC.toFixed(1) + "%";;
        document.getElementById('rM').innerHTML = rM.toFixed(1) + "%";;
        document.getElementById('rY').innerHTML = rY.toFixed(1) + "%";;
        document.getElementById('rK').innerHTML = rK.toFixed(1) + "%";;
    }

    else {
    valueC = 1 - (R/255);
    valueM = 1 - (G/255);
    valueY = 1 - (B/255);

    var minCMY = Math.min(valueC, Math.min(valueM,valueY));

    valueC = (valueC - minCMY) / (1 - minCMY) ;
    valueM = (valueM - minCMY) / (1 - minCMY) ;
    valueY = (valueY - minCMY) / (1 - minCMY) ;
    valueK = minCMY;

    rC = Math.round(valueC * 100);
    rM = Math.round(valueM * 100);
    rY = Math.round(valueY * 100) ;
    rK= Math.round(minCMY * 100);

    document.getElementById('rC').innerHTML = rC.toFixed(0) + "%";
    document.getElementById('rM').innerHTML = rM.toFixed(0) + "%";
    document.getElementById('rY').innerHTML = rY.toFixed(0) + "%";
    document.getElementById('rK').innerHTML = rK.toFixed(0) + "%";
    }
   
}