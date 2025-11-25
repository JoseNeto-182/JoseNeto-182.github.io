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
// Alternar tema claro/escuro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

function toggleTheme() {
  body.classList.toggle('light-mode')
  const isLightMode = body.classList.contains('light-mode');

  if(isLightMode){
    themeIcon.className = 'bx bx-moon theme-icon';
    localStorage.setItem('theme', 'light');
  } else{
    themeIcon.className = 'bx bx-sun theme-icon';
    localStorage.setItem('theme', 'dark');
  }
 }
function loadSavedTheme(){
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme ==='light'){
    body.classList.add('light-mode');
    themeIcon.className - 'bx bx-moon theme-icon';
    } else{
      body.classList.remove('light-mode');
      themeIcon.className - 'bx bx-sun theme-icon';
    }
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', loadSavedTheme)
  } else {
    loadSavedTheme();
  }