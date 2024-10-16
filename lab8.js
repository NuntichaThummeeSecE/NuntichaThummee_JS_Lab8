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

