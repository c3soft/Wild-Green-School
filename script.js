// Move menu
let stateMenuBurger = false;
const clicHamburger = document.getElementById('clickHamburger');
const moveMenu = document.getElementById('moveMenu');
clicHamburger.addEventListener('click', () => {
    if (stateMenuBurger) {
        moveMenu.style.transition = "0.5s";
        moveMenu.style.left = "-400px";
        stateMenuBurger = false;
    } else {
        moveMenu.style.transition = "0.5s";
        moveMenu.style.left = "0";
        stateMenuBurger = true;
    }
});

//close choose menu
function paramCloseMenu() {
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

////////////////////////////////////////////////////////////////////////////////////
const arrayCountEvalSimple = [];
const arrayQuestion =['Votre école est équipée de d\'ampoules basse consommation ?',
                    'Vous priviliger les échanges électroniques aux papiers (imprimante)',
                    'Fin du questionnaire !!!'];

                    
                    
// Color mouse move items
const choice1 = document.getElementById('choise1');
const choice2 = document.getElementById('choise2');
const choice3 = document.getElementById('choise3');
const choice4 = document.getElementById('choise4');
const choice5 = document.getElementById('choise5');
const choishowNote = document.getElementById('note');
const nextChoise = document.getElementById('btnNext');
const showPoints = document.getElementById('points');
const changeQuestion = document.getElementById('sentenseQuestionChange');
const clickCloseAssess = document.getElementById('closeAssess')
const showMessage = document.getElementById('message');

// Function reset choice
 function resetChoise() {
    choice1.style.color = '#8c8d8a';
    choice2.style.color = '#8c8d8a';
    choice3.style.color = '#8c8d8a';
    choice4.style.color = '#8c8d8a';
    choice5.style.color = '#8c8d8a';
}
//move 1
choice1.addEventListener('mouseenter', () => {
    choice1.style.color = 'green';
    choice2.style.color = '#8c8d8a';
    choice3.style.color = '#8c8d8a';
    choice4.style.color = '#8c8d8a';
    choice5.style.color = '#8c8d8a';
})

// move 2
choice2.addEventListener('mousemove', () => {
    choice2.style.color = 'green';
    choice1.style.color = 'green';
    choice3.style.color = '#8c8d8a';
    choice4.style.color = '#8c8d8a';
    choice5.style.color = '#8c8d8a';
})

// move 3
choice3.addEventListener('mousemove', () => {
    choice3.style.color = 'green';
    choice1.style.color = 'green';
    choice2.style.color = '#green';
    choice4.style.color = '#8c8d8a';
    choice5.style.color = '#8c8d8a';
})

// move 4
choice4.addEventListener('mousemove', () => {
    choice4.style.color = 'green';
    choice1.style.color = 'green';
    choice2.style.color = 'green';
    choice3.style.color = 'green';
    choice5.style.color = '#8c8d8a';
})

// move 5
choice5.addEventListener('mousemove', () => {
    choice5.style.color = 'green';
    choice1.style.color = 'green';
    choice2.style.color = 'green';
    choice3.style.color = 'green';
    choice4.style.color = 'green';
})

//click items choises
choice1.addEventListener('click', () => {
        arrayCountEvalSimple[arrayCountEvalSimple.length] = 1
    let sum = 0;
    for (let i = 0; i < arrayCountEvalSimple.length; i++) {
        sum += arrayCountEvalSimple[i]
        showPoints.innerHTML = sum + ' Pts';
        changeQuestion.innerHTML = arrayQuestion[i];
    resetChoise();
    }
    if(arrayCountEvalSimple.length === 3){
        choishowNote.style.display = 'none';
        showMessage.innerHTML="Merci Pour votre participation !!!";
    }
})

choice2.addEventListener('click', ()=>{
    arrayCountEvalSimple[arrayCountEvalSimple.length] = 2
    let sum = 0;
    for (let i = 0; i < arrayCountEvalSimple.length; i++) {
        sum += arrayCountEvalSimple[i]
        showPoints.innerHTML = sum + ' Pts';
        changeQuestion.innerHTML = arrayQuestion[i];
    resetChoise();
    }
    if(arrayCountEvalSimple.length === 3){
        choishowNote.style.display = 'none';
    }
})

choice3.addEventListener('click', ()=>{
    arrayCountEvalSimple[arrayCountEvalSimple.length] = 3
    let sum = 0;
    for (let i = 0; i < arrayCountEvalSimple.length; i++) {
        sum += arrayCountEvalSimple[i]
        showPoints.innerHTML = sum + ' Pts';
        changeQuestion.innerHTML = arrayQuestion[i];
    resetChoise();
    }
    if(arrayCountEvalSimple.length === 3){
        choishowNote.style.display = 'none';
    }
})

choice4.addEventListener('click', ()=>{
    arrayCountEvalSimple[arrayCountEvalSimple.length] = 4
    let sum = 0;
    for (let i = 0; i < arrayCountEvalSimple.length; i++) {
        sum += arrayCountEvalSimple[i]
        showPoints.innerHTML = sum + ' Pts';
        changeQuestion.innerHTML = arrayQuestion[i];
    resetChoise();
    }
    if(arrayCountEvalSimple.length === 3){
        choishowNote.style.display = 'none';
    }
})

choice5.addEventListener('click', ()=>{
    arrayCountEvalSimple[arrayCountEvalSimple.length] = 5
    let sum = 0;
    for (let i = 0; i < arrayCountEvalSimple.length; i++) {
        sum += arrayCountEvalSimple[i]
        showPoints.innerHTML = sum + ' Pts';
        changeQuestion.innerHTML = arrayQuestion[i];
    resetChoise();
    }
    if(arrayCountEvalSimple.length === 3){
        choishowNote.style.display = 'none';
    }
})

clickCloseAssess.addEventListener('click',()=>{
    document.body.style.background = '#f9f9f9';
    colorHeaderMask.style.fill = '#f9f9f9';
    moveQuestionAssess.style.zIndex = "-1";
    moveQuestionAssess.style.opacity = 0;
    moveQuestionAssess.style.transition = '1s';
})
////////////////////////////////////////////////////////////////////////////////////
