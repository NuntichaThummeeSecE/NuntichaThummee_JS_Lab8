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

//Task 3 keyboard events : function keyup and add key pressed to the console //
const keyboardEvent = document.getElementById(`keyboardEvents`);

keyboardEvent.addEventListener(`keyup`, (event) => {
    console.log(`Key pressed:` + event.key);
});

//Task 4 form events : function recieve input from the user and keep the data in the console//
const form = document.getElementById(`formEvents`);
const nameInput = document.getElementById(`typeBox`);

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    console.log(`name: ` + nameInput.value);
});

//Task 5 focus and blur events : change color to pink while clicking at input field and change to a different color when clicking somewhere else//
const inputText = document.getElementById(`typeBox2`);

inputText.addEventListener(`focus`, () => {
    inputText.style.borderColor = `pink`;
});

inputText.addEventListener(`blur`,() => {
    inputText.style.borderColor = `lightblue`;
});

//Task 6 event delegation : select file from ul and make it change bg color when clicked//
const clickToChange = document.querySelector(`ul`);

clickToChange.addEventListener(`click`, (e) => {
    if(e.target && e.target.nodeName == "LI") {
        e.target.style.backgroundColor = `pink`;
    }
});