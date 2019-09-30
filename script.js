// Move menu
let stateMenuBurger = false;
const clicHamburger = document.getElementById('clickHamburger');
const moveMenu = document.getElementById('moveMenu');
clicHamburger.addEventListener('click', () => {
    if(stateMenuBurger){
        moveMenu.style.transition = "0.5s";
        moveMenu.style.left = "-400px";
        stateMenuBurger = false;
    }else{
        moveMenu.style.transition = "0.5s";
        moveMenu.style.left = "0";
        stateMenuBurger = true;
    }
});

//close choose menu
function paramCloseMenu(){
    moveMenu.style.transition = "0.5s";
    moveMenu.style.left = "-400px";
    stateMenuBurger = false;
};
const clickCloseMenuGesture = document.getElementById('menuGesture');
const clickCloseMenucontact = document.getElementById('menucontact');
const clickCloseMenuSuggestion = document.getElementById('menuSuggestion');
const clickCloseMenuAbout = document.getElementById('menuAbout');

clickCloseMenuGesture.addEventListener('click', () => { //close menu gesture
    paramCloseMenu();
});
clickCloseMenucontact.addEventListener('click', () => { //close menu contact
    paramCloseMenu();
});
clickCloseMenuSuggestion.addEventListener('click', () => { //close menu suggestion
    paramCloseMenu();
});
clickCloseMenuAbout.addEventListener('click', () => { //close menu about
    paramCloseMenu();
});

// Open about
const clickAbout = document.getElementById('menuAbout');
const openAbout = document.getElementById('aboutOf');


clickAbout.addEventListener('click', () => {
    openAbout.style.display = "flex";
    openAbout.style.zIndex = "3000";

});

//Assess
const moveQuestionAssess = document.getElementById('assess');
const clickAssess = document.getElementById('assessBtn');
const colorHeaderMask = document.getElementById('headerMask');

clickAssess.addEventListener('click', () => {
    document.body.style.background = 'rgba(1,1,1,0.3)'.replace(/[^,]+(?=\))/, '0.5');
    colorHeaderMask.style.fill = '#7D7C7C';
    moveQuestionAssess.style.zIndex = "999";
    moveQuestionAssess.style.opacity = "1";
    moveQuestionAssess.style.transition = '2s';

});

//Close modal
window.onclick = function () {
    setTimeout(function () {
        if (openAbout.style.zIndex == 3000) {
            openAbout.style.zIndex = "-2";
            openAbout.style.display = "none";
        }
    }, 3000)
};




function hamburger_click(open)
{
    // var hamburgerElement = document.getElementById("hamburger");
    // var menuElement = document.getElementById("menu");

    if (open) {
        // hamburgerElement.style.display = "none";
        moveMenu.style.transition = "0.5s";
        moveMenu.style.left = "-400";
    } else {
        // hamburgerElement.style.display = "block";
        // moveMenu.style.display = "none";
        // moveMenu.style.transition = "0.5s";
        moveMenu.style.left = "-400px";
    }
};