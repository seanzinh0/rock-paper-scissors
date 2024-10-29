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
const modal = document.getElementById("modal");

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

const user = {
	score: 0,
	incrementScore: function () {
		this.score++;
		userScore.innerHTML = this.score;
	},
};

let tie = 0;
function incrementTie() {
	tie++;
	tieCount.innerHTML = tie;
}

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

resetBtn.addEventListener("click", () => {
	robot.score = 0;
	user.score = 0;
	userScore.innerHTML = 0;
	robotScore.innerHTML = 0;
	tieCount.innerHTML = 0;
	robotChoice.innerHTML = "Mr. Robot chose:";
	userChoice.innerHTML = "You chose:";
	winner.innerHTML = "";
	playerName.innerHTML = "Guest";
	openModal();
});

function openModal() {
	const addBlur = document.getElementById("add-blur");
	modal.style.display = "block";
	addBlur.classList.add("blur");
}

window.onload = openModal;

continueAsGuest.addEventListener("click", () => {
	const addBlur = document.getElementById("add-blur");
	modal.style.display = "none";
	addBlur.classList.remove("blur");
});

submitUsername.addEventListener("click", () => {
	const addBlur = document.getElementById("add-blur");
	const usernameValue = username.value;
	modal.style.display = "none";
	playerName.innerHTML = usernameValue;
	addBlur.classList.remove("blur");
});
