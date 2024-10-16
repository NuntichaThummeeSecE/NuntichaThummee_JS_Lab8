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



