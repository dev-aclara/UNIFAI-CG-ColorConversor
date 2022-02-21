function firstconvert(){
    //Lendo os valores RGB
    // Utilizando a função parseInt nos valores de entrada
    var R = parseInt(document.getElementById('valRed').value);
    var G = parseInt(document.getElementById('valGreen').value);
    var B = parseInt(document.getElementById('valBlue').value);
    

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
      alert ('Por favor, preencha todos os campos corretamente!');
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
        //Determinando o valor de K
        // K = 1-max(R', G', B’)
        // R' = R/255 G' = G/255 B' = B/255
        var K = 1-(Math.max((R/255), (G/255), (B/255)));

        // C = (1-R'-K) / (1-K)
        // R' = R/255
        valueC = (1 - (R/255) - K) / (1 - K);

        // M = (1-G'-K) / (1-K)
        // G' = G/255
        valueM = (1 - (G/255) - K) / (1 - K);

        // Y = (1-B'-K) / (1-K)
        // B' = B/255
        valueY = (1 - (B/255) - K) / (1 - K);

        // K = 1-max(R', G', B’)
        valueK = K;

        // Arredondando os resultados e colocando em forma de porcentagem
        rC = Math.round(valueC * 100);
        rM = Math.round(valueM * 100);
        rY = Math.round(valueY * 100) ;
        rK= Math.round(K * 100);

        document.getElementById('rC').innerHTML = rC.toFixed(0) + "%";
        document.getElementById('rM').innerHTML = rM.toFixed(0) + "%";
        document.getElementById('rY').innerHTML = rY.toFixed(0) + "%";
        document.getElementById('rK').innerHTML = rK.toFixed(0) + "%";
    }
   
}

function secondconvert(){
    //Lendo os valores  CMYK
    // Utilizando a função parseInt nos valores de entrada e depois dividindo por 0 
    var C = parseInt(document.getElementById('valC').value) / 100;
    var M = parseInt(document.getElementById('valM').value) / 100;
    var Y = parseInt(document.getElementById('valY').value) / 100;
    var K = parseInt(document.getElementById('valK').value) / 100;

    var valueR = 0;
    var valueG = 0;
    var valueB = 0;

    //Verificando se todos os valores estão preenchidos
    if ( C == null || M == null || Y == null || Y == null || isNaN(C) || isNaN(M)|| isNaN(Y) || isNaN(K) ){
      alert ('Por favor, preencha todos os campos corretamente!');
      return false;
    }
    
    //Verificando se os valores são menores que 0 e maiores que 100
    if ( C < 0 || M < 0 || Y < 0 || K < 0 || C > 100 || M > 100 || Y > 100 || K > 100) {
        alert ('Os valores para CMYK só podem ser de 0 até 100!');
        return;
    }
    
    // R é calculado a partir de cyan (C) e preto (K)
    valueR = 255 * (1 - C) * (1 - K);

    // G é calculado a partir de magenta (M) e preto (K)
    valueG = 255 * (1 - M) * (1 - K);

    // B é calculado a partir de amarelo (Y) e preto (K)
    valueB = 255 * (1 - Y) * (1 - K);
        

    // Arredondando os resultados 
    vR = Math.round(valueR);
    vG = Math.round(valueG);
    vB = Math.round(valueB) ;

    document.getElementById('vR').innerHTML = vR.toFixed(0);
    document.getElementById('vG').innerHTML = vG.toFixed(0);
    document.getElementById('vB').innerHTML = vB.toFixed(0);
 
}