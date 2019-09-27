// Move menu
const clicHamburger = document.getElementById('clickHamburger');
const moveMenu = document.getElementById('moveMenu');
clicHamburger.addEventListener('click', () => {
    moveMenu.style.transition = "0.5s";
    moveMenu.style.left = "0";

    
});
// About
const clickAbout = document.getElementById('about');
clickAbout.addEventListener('click', () => {
    alert('aa');

});