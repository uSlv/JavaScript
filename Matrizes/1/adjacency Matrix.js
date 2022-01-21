var linhas = prompt("Digite a quantidade de linhas da matriz:")
var colunas = prompt("Digite a quantidade de colunas da matriz:")
alert(`Criar uma matriz de ${linhas} linhas por ${colunas} colunas`)

// Criação da Matriz
var matriz = []
for(var i = 0; i < linhas; i++){
    matriz[i] = []
    for(var j = 0; j< colunas;j ++){
        matriz [i][j]= ''
    }
}

// Adição de Valores na Matriz
for(var l = 0; l < linhas; l++){
    for(var c = 0; c < colunas; c++){
    matriz[l][c] = prompt(`Digite um valor para inserir na matriz:`)
    }
}


var Valores = ''
for(var l = 0; l < linhas; l++){
    for(var c = 0; c < colunas; c++){
        if (c < colunas - 1) {
            Valores += matriz[l][c] + ''
        } else{
            Valores += matriz[l][c] + '\n'
        }
    }
}
console.log(matriz)

