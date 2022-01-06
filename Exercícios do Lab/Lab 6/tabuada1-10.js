
var n = document.querySelector('#num')
var operacao = 1
var res = document.querySelector('span')
function calcular() {
    res.innerHTML = parseInt(n.value) + parseInt(operacao.value)
    /*while(operacao <= 10){
        res.innerHTML = n.value * operacao.value
        operacao++
    }
    */
}