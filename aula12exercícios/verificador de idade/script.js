function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#resultado')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','images/children-m.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','images/jovem-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','images/jovem-m.jpg')
            } else {
                //idoso
                img.setAttribute('src','images/idoso.jpg')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','images/children-f.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','images/jovem-f.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','images/jovem-f.jpg')
            } else {
                //idoso
                img.setAttribute('src','images/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}