var num = [5,8,6,1,3]

num.push(2)
//comprimento -> num.length 
num.sort() //bota os valores em orderm crescente

console.log(num)

/*for(var pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`O vetor tem  ${num.length} posições.`)

console.log(`O primeiro valor do vetor é ${num[0]}`)*/

for(var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//variavel.indexOf(x) -> pesquisa o valor entre os elementos