function calcular() {
    var n = document.getElementById('n')
    var tab = document.getElementById('stabuada')
    var res = document.getElementById('res')
    if (n.value.length == 0) {
        window.alert('[ERRO] Nenhum valor!')
    } else {
        var numero = Number(n.value)
        //res.innerHTML = `Aqui está a sua tabuada do ${numero}:`
        var c = 1
        tab.innerHTML = ''
        while(c <=10){
            var finish = document.createElement('option')
            finish.text = `${numero} x ${c} = ${numero*c}`
            tab.appendChild(finish)
            c++
        }
        }
    }

