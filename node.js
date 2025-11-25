// Inicializa o Typed.js
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('#typed', {
        strings: ["Programador Java", "Desenvolvedor Web", "Apaixonado por Tecnologia"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    });
});
const myCarouselElement = document.querySelector('#carousel slide')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

