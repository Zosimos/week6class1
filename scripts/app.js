function init() {
    console.log("Task Manager");
    $("#topIcon").click(toggleImportant);
}

window.onload = init;

// console log a message when the user clicks on the icon
//add an id to the icon
//catch the click event on the icon, (on init fn)
//when th eicon is clicked, call a fn named toggleImportant
//in toggleImportant console log a message

function toggleImportant() {
    console.log("Toggled");
}

//homework read about git and github
