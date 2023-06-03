function inicio() {
    numeroCandidato = 0,
    nulo = 0,
    branco = 0,
    confirmaCandidato

    candidato1 = 0.0,
    candidato2 = 0.0,
    candidato3 = 0.0,
    percentualCandidato1,
    percentualCandidato2,
    percentualCandidato3,
    numeroVotos = 0.0


    confirmaEncerramento = 'n'

    nomeCandidato1 = "Helen",
    nomeCandidato2 = "Enrick",
    nomeCandidato3 = "Guilherme",
    confirma,
    naoConfirma

    empate = falso,
    encerraVotacao = falso



console.log("Nome do Candidato 1: ")
prompt(nomeCandidato1)

console.log("Nome do Candidato 2: ")
prompt(nomeCandidato2)


console.log("Nome do Candidato 3: ")
prompt(nomeCandidato3)


console.log("Opções de voto: \n")
console.log("1| ", nomeCandidato1, "\n")
console.log("2| ", nomeCandidato2, "\n")
console.log("3| ", nomeCandidato3, "\n")
console.log("6| Voto Nulo \n")
console.log("9| Voto em branco \n")
console.log("PIN| Encerrar votação \n")
    


        do {
        console.log("\n \n Digite o número do candidato: ")
        prompt(confirmaCandidato)

        console.log("\n Você confirma o seu voto? \n \n Digite 'S' para Sim \n Digite 'N' para Não \n")
        prompt(confirma)

    } while(confirma == "N", confirma == "n");
        if (confirma == "S", ou, confirma == "s"); {
        numeroCandidato = confirmaCandidato
    }

       switch (numeroCandidato) {

        case 1:
        candidato1++ //candidato1 = candidato1 + 1//
        numeroVotos++
        console.log(nomeCandidato1, " recebeu um voto \n")
        break //caso a pessoa tenha escolhido o caso 1 o pragrama vai parar de executar//
            
        case 2:
        candidato2++
        numeroVotos++
        console.log(candidato2, " recebeu um voto \n")
        break
            
        case 3:
        candidato3++
        numeroVotos++
        console.log(nomeCandidato3, " recebeu um voto \n")
        break
            
        case 6:
        nulo++
        numeroVotos++
        console.log("O voto foi nulo \n")
        break

        case 123456:
        console.click()
        console.log("Deseja REALMENTE encerrar a votação? \n")
        console.log("Digite 'S' para sim: ")
        prompt(confirmaEncerramento)

        if(confirmaEncerramento == 's', ou , confirmaEncerramento == 'S');{
            encerraVotacao = verdadeiro
        }
        break
        
        case contrario:
        branco++
        numeroVotos++
        console.log("O voto foi em branco \n")

    }

} while(numeroCandidato = 0)

     if(candidato1 > candidato2 && candidato1 > candidato3) {
      candidato1 = candidato1 + branco

} else if (candidato2 > candidato1 && candidato2 > candidato3) {
    candidato2 = candidato2 + branco

} else {
    candidato3 = candidato3 + branco
}

console.click

percentualCandidato1 = (candidato1 / numeroVotos) * 100
percentualCandidato1 = Mat.arredondar(percentualCandidato1, 3)

percentualCandidato2 = (candidato2 / numeroVotos) * 100
percentualCandidato2 = Mat.arredondar(percentualCandidato2, 3)

percentualCandidato3 = (candidato3 / numeroVotos) * 100
percentualCandidato3 = Mat.arredondar(percentualCandidato3, 3)

console.log("Valor do percentual de votos para ", nomeCandidato1, " é: ", percentualCandidato1, "%. \n")
console.log("Valor do percentual de votos para ", nomeCandidato2, " é: ", percentualCandidato2, "%. \n")
console.log("Valor do percentual de votos para ", nomeCandidato3, " é: ", percentualCandidato3, "%. \n")


//Para o candidato 1 ganhar
if(candidato1 > candidato2  && candidato1 > candidato3);{
    console.log("O candidato 1 ganhou a votação!")

}

//Para o candidato 2 ganhar
if(candidato2 > candidato1  && candidato2 > candidato3); {
    console.log("O candidato 2 ganhou a votação!")
}

//Para o candidato 3 ganhar
if(candidato3 > candidato1 && candidato3 > candidato2); {
    console.log("O candidato 3 ganhou a votação!")
}


function audioConfirmacao() {
const audio = new Audio("./confirmacao.mp3")
audio.play();

}

function escreverNoConsole() {
console.log("Mensagem no Console");
}

function escreverNoAlert() {
Window.alert("Mensagem no Alert\nOutra mensagem\n\nMais uma mensagem");
}

function escrevrNoDocumento() {
document.write("Mensagem no documento");
}