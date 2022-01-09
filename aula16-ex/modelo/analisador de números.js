
var num = document.getElementById('entrada')
var lista = document.getElementById('seladd')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor Inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Nenhum valor adicionado!')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var medio = 0
        for(var pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma /total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p> <br>`
        res.innerHTML += `<p>O maior valor informado foi o ${maior}</p> <br>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor}</p> <br>`
        res.innerHTML += `<p>Somando todos os valores vale :${soma}</p> <br>`
        res.innerHTML += `<p>A média de todos os valores vale :${media}</p> <br>`
    }
}