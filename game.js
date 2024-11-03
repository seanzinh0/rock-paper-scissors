"use strict"

//initialize variables used for DOM manipulation
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const robotChoice = document.getElementById("robot-choice");
const userChoice = document.getElementById("user-choice");
const winner = document.getElementById("winner");
const robotScore = document.getElementById("robot-score");
const userScore = document.getElementById("user-score");
const tieCount = document.getElementById("tie-count");
const resetBtn = document.getElementById("reset-btn");
const playerName = document.getElementById("guest");
const username = document.getElementById("username");
const submitUsername = document.getElementById("submit-user");
const continueAsGuest = document.getElementById("cont-guest");

/**
 *Robot object
 *Contains choices and score properties with two methods
 *getChoice takes a random index at the length of the choices array to get a random choice
 *incrementScore increments robot's score
 */
const robot = {
    choices: ["Rock", "Paper", "Scissors"],
    score: 0,
    getChoice: function () {
        let randomIndex = Math.floor(Math.random() * this.choices.length);
        return this.choices[randomIndex];
    },
    incrementScore: function () {
        this.score++;
        robotScore.innerHTML = this.score;
    },
};

/**
 *User object
 *Score is the only property
 *incrementScore method that increments user's score
 */
const user = {
    score: 0,
    incrementScore: function () {
        this.score++;
        userScore.innerHTML = this.score;
    },
};

//Initialize tie variable and set to 0
let tie = 0;

//Increment function to increment tie value
function incrementTie() {
    tie++;
    tieCount.innerHTML = tie;
}

/**
 *EventListener added onto the rock button
 * On Click the event listener calls a function that takes the users input and robots choice
 * and has a series of conditionals to see what is stronger than the selected choice
 * based on the result the robot score, user score, or tie will increment
 */
rock.addEventListener("click", () => {
    const userSelect = "Rock";
    const robotSelect = robot.getChoice();
    userChoice.innerHTML = "You chose: " + userSelect;
    robotChoice.innerHTML = "Mr Robot chose: " + robotSelect;
    if (userSelect === robotSelect) {
        winner.innerHTML = "Tie";
        incrementTie();
    } else if (robotSelect === "Paper") {
        winner.innerHTML = "Mr. Robot Won!";
        robot.incrementScore();
    } else {
        winner.innerHTML = "You Won!";
        user.incrementScore();
    }
});

/**
 *EventListener added onto the paper button
 * On Click the event listener calls a function that takes the users input and robots choice
 * and has a series of conditionals to see what is stronger than the selected choice
 * based on the result the robot score, user score, or tie will increment
 */
paper.addEventListener("click", () => {
    const userSelect = "Paper";
    const robotSelect = robot.getChoice();
    userChoice.innerHTML = "You chose: " + userSelect;
    robotChoice.innerHTML = "Mr Robot chose: " + robotSelect;
    if (userSelect === robotSelect) {
        winner.innerHTML = "Tie";
        incrementTie();
    } else if (robotSelect === "Scissors") {
        winner.innerHTML = "Mr. Robot Won!";
        robot.incrementScore();
    } else {
        winner.innerHTML = "You Won!";
        user.incrementScore();
    }
});

/**
 *EventListener added onto the scissors button
 * On Click the event listener calls a function that takes the users input and robots choice
 * and has a series of conditionals to see what is stronger than the selected choice
 * based on the result the robot score, user score, or tie will increment
 */
scissors.addEventListener("click", () => {
    const userSelect = "Scissors";
    const robotSelect = robot.getChoice();
    userChoice.innerHTML = "You chose: " + userSelect;
    robotChoice.innerHTML = "Mr Robot chose: " + robotSelect;
    if (userSelect === robotSelect) {
        winner.innerHTML = "Tie";
        incrementTie();
    } else if (robotSelect === "Rock") {
        winner.innerHTML = "Mr. Robot Won!";
        robot.incrementScore();
    } else {
        winner.innerHTML = "You Won!";
        user.incrementScore();
    }
});

//function that opens up modal and blurs background also disables any user select
function openModal() {
    const addBlur = document.getElementById("add-blur");
    const hideModal = document.querySelector(".hidden");
    hideModal.classList.remove("hide");
    addBlur.classList.add("blur");
}

/**
 *Event Listener added onto the reset button
 *On Click calls a function that resets object scores back to zero
 *resets all the html for scores as well and resets username
 *opens the modal as well
 */
resetBtn.addEventListener("click", () => {
    robot.score = 0;
    user.score = 0;
    tie = 0;
    userScore.innerHTML = 0;
    robotScore.innerHTML = 0;
    tieCount.innerHTML = 0;
    robotChoice.innerHTML = "Mr. Robot chose:";
    userChoice.innerHTML = "You chose:";
    winner.innerHTML = "";
    playerName.innerHTML = "Guest";
    openModal();
});

//when page is initialized or reset modal is open
window.onload = openModal;

/**
 *Event Listener add onto the continue as guest button
 *calls a function when clicked that removes background blur class from the background
 *sets modal display to none
 */
continueAsGuest.addEventListener("click", () => {
    const addBlur = document.getElementById("add-blur");
    const hideModal = document.querySelector(".hidden");
    hideModal.classList.add("hide");
    addBlur.classList.remove("blur");
});

/**
 *Event Listener add onto the submit username button
 *replaces the inner html for username to inputted username
 *calls a function when clicked that removes background blur class from the background
 *sets modal display to none
 */
submitUsername.addEventListener("click", () => {
    const addBlur = document.getElementById("add-blur");
    const usernameValue = username.value;
    const hideModal = document.querySelector(".hidden");
    hideModal.classList.add("hide");
    playerName.innerHTML = usernameValue;
    addBlur.classList.remove("blur");
});
