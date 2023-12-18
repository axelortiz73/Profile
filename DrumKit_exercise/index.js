// listen for button clicks
let numOfDrumButtons = document.querySelectorAll(".drum").length;

// listen for key presses. You can use "e" as the object instead of the full word "event".
let keyEntered = document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
    });

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.removeClass("pressed");
    }, 100)
}

for (let i=0; i < numOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    // what to do with each button clicked
    makeSound(buttonInnerHTML);
    });
}

function makeSound(keyEntered) {
    switch (keyEntered) {
        case "w": 
            let tom1 = new Audio("sounds/tom-1.mp3"); 
            tom1.play();  
            break;
        case "a": 
            let tom2 = new Audio("sounds/tom-2.mp3"); 
            tom2.play();  
            break;
        case "s": 
            let tom3 = new Audio("sounds/tom-3.mp3"); 
            tom3.play();  
            break;
        case "d": 
            let tom4 = new Audio("sounds/tom-4.mp3"); 
            tom4.play();  
            break;
        case "j": 
            let snare = new Audio("sounds/snare.mp3"); 
            snare.play();  
            break;
        case "k": 
            let crash = new Audio("sounds/crash.mp3"); 
            crash.play();  
            break;
        case "l": 
            let kick = new Audio("sounds/kick-bass.mp3"); 
            kick.play();  
            break;

        default: console.log(keyEntered);
            break;
        }
}

// create a new function called makeSound. Send the innerHTML if a button was pressed. Send the keydown 
// that was entered if a keystroke was used.



