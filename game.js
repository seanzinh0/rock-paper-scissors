const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const robotChoice = document.getElementById("robot-choice");
const userChoice = document.getElementById("user-choice");
const winner = document.getElementById("winner");
const robotScore = document.getElementById("robot-score");
const userScore = document.getElementById("user-score");
const tieCount = document.getElementById("tie-count");

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
	} else if (robotSelect === "Rock") {
		winner.innerHTML = "Mr. Robot Won!";
		robot.incrementScore();
	} else {
		winner.innerHTML = "You Won!";
		user.incrementScore();
	}
});
