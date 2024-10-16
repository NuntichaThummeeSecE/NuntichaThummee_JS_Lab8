//Task 1 click event : change to button text to Clicked//
const createClicked = () => {
    document.getElementById(`clickEvent`).innerHTML = "Clicked!";
}

document.getElementById(`clickEvent`).addEventListener(`click`, createClicked);

//Task 2 mouse events//