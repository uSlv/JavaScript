function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!!`
    if (hora < 12 && hora >= 0) {
        img.src = 'images/manha.png'
        document.body.style.background = '#f0e1d9'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/tarde.png'
        document.body.style.background = '#b8e6f6'
    } else if (hora >= 18 && hora < 24) {
        img.src = 'images/noite.png'
        document.body.style.background = '#4b6a6b'
    }
}