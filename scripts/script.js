let localizacao = window.pageYOffset
window.onscroll = function() {
    let deslocamento = window.pageYOffset
    if(localizacao >= deslocamento) {
        document.querySelector('.menu').style.top = '0'
    } else {
        document.querySelector('.menu').style.top = '-100px'
    }
    localizacao = deslocamento
}