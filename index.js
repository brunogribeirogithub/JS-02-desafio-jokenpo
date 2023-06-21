while(true){
    jogador1 = prompt("Jogador 1: Digite pedra, papel ou tesoura");
    jogador2 = "tesoura";

    if (jogador1 == "pedra") {
        if (jogador2 == "tesoura") {
            alert ("Pedra quebra tesoura");
        //} else if (jogador2 == "tesoura"){
           // alert ("Pedra quebra tesoura");
        //} else if (jogador2 == "tesoura") {
           // alert ("Empate");
        }

    }
    else if (jogador1 == "tesoura") {
        if (jogador2 == "tesoura") {
            alert ("empate");
        //} else if (jogador2 == papel){
           // alert ("tesoura corta papel");
        //} else if (jogadoe2 == "tesoura") {
           // alert ("Empate");
        }
    }

    else if (jogador1 == "papel"){
        //if (jogador2 == "tesoura") {
            //alert ("Papel envolve pedra");
        if (jogador2 == "tesoura") {
            alert ("Tesoura corta papel");
        //}else if (jogador2 == "papel")  {
            //alert ("Empate");
        }

    }

}


