let dobraCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave")
chosenOption = prompt("Deseja entrar em dobra espacial? \n 1- Sim \n 2- Não")

while(chosenOption == "1" ) {
    dobraCount += 1
   chosenOption = prompt("Deseja realizar a proxima dobra? \n 1- Sim \n 2- Não")
} 

alert("Nave:" + spaceship + "\n Quantidade de dobras:" + dobraCount )
