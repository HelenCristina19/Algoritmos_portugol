programa 
{
	inclua biblioteca Matematica --> Mat
	 
	funcao inicio()
	{
		inteiro numeroCandidato, nulo, branco, confirmaCandidato 
		real candidato1, candidato2, candidato3, percentualCandidato1, percentualCandidato2, percentualCandidato3, numeroVotos
		cadeia nomeCandidato1 = "Helen", nomeCandidato2 = "Enrick", nomeCandidato3 = "Guilherme", confirma, naoConfirma
		
		numeroVotos = 0.0
		candidato1 = 0.0
		candidato2 = 0.0
		candidato3 = 0.0
		nulo = 0
		branco = 0


		escreva("Nome do Candidato 1: ")
		leia(nomeCandidato1)

          escreva("Nome do Candidato 2: ")
		leia(nomeCandidato2)

	
          escreva("Nome do Candidato 3: ")
		leia(nomeCandidato3)

		
		faca{
			escreva("Digite o número do candidato: ")
			leia(confirmaCandidato)

			escreva("Você confirma o seu voto? S/N: ")
			leia(confirma)

			se(confirma == 's') {
				   numeroCandidato == confirmaCandidato
			}

			senao{
				
			}

			escolha (numeroCandidato) {
			caso 1: 
				candidato1++ 
				numeroVotos++
				escreva(nomeCandidato1, " recebeu um voto \n")
				pare 
				
			caso 2:
				candidato2++
				numeroVotos++
				escreva(nomeCandidato2, " recebeu um voto \n")
				pare
				
			caso 3:
				candidato3++
				numeroVotos++
				escreva(nomeCandidato3, " recebeu um voto \n")
				pare
				
			caso 6: 
				nulo++
				numeroVotos++
				escreva("O voto foi nulo \n")
				pare

			caso 0: 
				pare
			
			caso contrario:
				branco++
				numeroVotos++
				escreva("O voto foi em branco \n")
	
			} 
		}enquanto (numeroCandidato != 0)
		
			
				se(candidato1>candidato2 e candidato1>candidato3){
					candidato1 = candidato1 + branco
				}
				senao se(candidato2>candidato1 e candidato2>candidato3){
					candidato2 = candidato2 + branco
				}
				senao{
					candidato3 = candidato3 + branco
				}
			
			limpa()

			percentualCandidato1 = (candidato1 / numeroVotos) * 100
			percentualCandidato1 = Mat.arredondar(percentualCandidato1, 3)
			
			percentualCandidato2 = (candidato2 / numeroVotos) * 100
			percentualCandidato2 = Mat.arredondar(percentualCandidato2, 3)
			
			percentualCandidato3 = (candidato3 / numeroVotos) * 100
			percentualCandidato3 = Mat.arredondar(percentualCandidato3, 3)
			
			escreva("Valor do percentual de votos para ", nomeCandidato1, " é: ", percentualCandidato1, "%. \n")
			escreva("Valor do percentual de votos para ", nomeCandidato2, " é: ", percentualCandidato2, "%. \n")
			escreva("Valor do percentual de votos para ", nomeCandidato3, " é: ", percentualCandidato3, "%. \n")

			
	
				//Para o candidato 1 ganhar
				se(candidato1>candidato2 e candidato1>candidato3){
					escreva("O candidato 1 ganhou a votação!")
		
				}

				//Para o candidato 2 ganhar
				se(candidato2>candidato1 e candidato2>candidato3){
					escreva("O candidato 2 ganhou a votação!")
				}

				//Para o candidato 3 ganhar
				se(candidato3>candidato1 e candidato3>candidato2){
					escreva("O candidato 3 ganhou a votação!")
				}
		
		}
}


/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 817; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */