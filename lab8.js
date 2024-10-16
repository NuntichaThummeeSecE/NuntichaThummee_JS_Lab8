//Task 1 click event : change to button text to Clicked//

//-- in this using .getElementById 2 times so I try to make it 1--//
/*const createClicked = () => {
    document.getElementById(`clickEvent`).innerHTML = "Clicked!";
}

document.getElementById(`clickEvent`).addEventListener(`click`, createClicked);*/

const clickButton = document.getElementById(`clickEvent`);

clickButton.addEventListener(`click`, () => {
    clickButton.innerHTML = `Clicked!`;
});

//Task 2 mouse event : function change bg color while moseover and mouseout//
const createMouseEvent = document.getElementById(`mouseEvents`);

createMouseEvent.addEventListener(`mouseover`, () => {
    createMouseEvent.style.backgroundColor = `pink`;
});

createMouseEvent.addEventListener(`mouseout`, () => {
    createMouseEvent.style.backgroundColor = `lightblue`;
});

//Task 3 keyboard events : function keyup //
const keyboardEvent = document.getElementById(`keyboardEvents`);

keyboardEvent.addEventListener(`keyup`, (event) => {
    console.log(`Key pressed:` + event.key);
});






