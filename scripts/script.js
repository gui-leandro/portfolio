let localizacao = window.pageYOffset
window.onscroll = function() {
    let deslocamento = window.pageYOffset
    if(localizacao >= deslocamento) {
        document.querySelector('.menu').style.top = '0'
    }
    if(localizacao < deslocamento) {
        document.querySelector('.menu').style.top = '-100px'
    }
    if(deslocamento == 0) {
        document.querySelector('.float-buttom').style.display = 'none'
    } else {
        document.querySelector('.float-buttom').style.display = 'flex'
    }
    localizacao = deslocamento
}

const menuItems = document.querySelectorAll('.menu a')
menuItems.forEach(item => {
    item.addEventListener('click', scrollToId)
})

const backHome = document.querySelector('.back-home')
.addEventListener('click', () => {
    scrollToPosition(0)
})

function getScrollTopById(element) {
    //pega os elementos que possui href
    const id = element.getAttribute('href')
    //retorna o valor do topo do id
    return document.querySelector(id).offsetTop
}

function scrollToId(event) {
    event.preventDefault()
    //pega o valor do topo do ID clicado
    const goTo = getScrollTopById(event.target) - 50
    scrollToPosition(goTo)
}

function scrollToPosition(goTo) {
    smoothScrollTo(0, goTo, 1000)
}

//função para um scroll suave que funcione em todos os navegadores
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };