const prompt = require("prompt-sync")({ sigint: true });
let onOff = "off";
var botao = +0;

while(true){

    switch (onOff) {

        case "off":
            console.log(` 

                Calculadora desligada, ligue-a para iniciar
                            _____________________
                           |  _________________  |
                           | |                 | |
                           | |_________________| |
                           |  ___ ___ ___   ___  |
                           | |   |   |OFF| | ON| |
                           | |___|___|___| |___| |
                           |  ___ ___ ___   ___  |
                           | | 7 | 8 | 9 | | + | |
                           | |___|___|___| |___| |
                           | | 4 | 5 | 6 | | - | |
                           | |___|___|___| |___| |
                           | | 1 | 2 | 3 | | x | |
                           | |___|___|___| |___| |
                           | | . | 0 | = | | / | |
                           | |___|___|___| |___| |
                           |_____________________|
                           `);
                           onOff = prompt("Digite On para ligar a calculadora: ");
                           console.log(onOff);
            break;
        case "on":
            console.log(` 

                Calculadora ligada
                             _____________________
                            |  _________________  |
                            | |#################| |
                            | |#################| |
                            |  ___ ___ ___   ___  |
                            | |   |   |OFF| | ON| |
                            | |___|___|___| |___| |
                            |  ___ ___ ___   ___  |
                            | | 7 | 8 | 9 | | + | |
                            | |___|___|___| |___| |
                            | | 4 | 5 | 6 | | - | |
                            | |___|___|___| |___| |
                            | | 1 | 2 | 3 | | x | |
                            | |___|___|___| |___| |
                            | | . | 0 | = | | / | |
                            | |___|___|___| |___| |
                            |_____________________|
                           `);
                                botao = prompt("Selecione um botão disponível na calculadora digitando sua respectiva tecla: ");

                                if(botao == "on"){
                                    onOff = "on";
                                }
                                if(botao == "off"){
                                    console.log("DIGITOU OFF");
                                    onoff = "off";
                                    break;
                                }
            break;
    
        default:
            break;

// NÂO ESTOU CONSEGUINDO DESLIGAR A CALCULADORA //

    }
}