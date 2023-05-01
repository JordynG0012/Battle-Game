// Battle Game Project 4/25/23

/* Simple text-based choose your own advenutre game using HTML < CSS and JavaScript, Focusing on user input, logic, functions, and events*/

// Add an event listener to the button element
document.getElementById("button").addEventListener("click", startBattle);

//Definition of the startBattle() function which controls the game itself
function startBattle() {
	// Clear and old messages in the document from previous games
	document.getElementById("victory").textContent = "";
	document.getElementById("victory").textContent = "";

	// Initial prompt for the user input that gets stored in a variable
	let action = window.prompt("you're floating through space minding your own business and a alien suddenly appears!\n\nDo you FIGHT the alien?\n\nDo you RUN from the alien?\n\nDo you try to BRIBE the alien?").toUpperCase(); 

	// Switch statement to handle the player's intial choice
	switch(action) {
		case "FIGHT": {
			fightBattle();
			break;
	}
		case "RUN": {
			runBattle();
			break;
	}
		case "BRIBE": {
			bribeBattle();
			break;
	}

	default: {

	// The user has not entered a valid choice at the original prompt
	window.alert("You entered: " + action + ". That is not a valid choice! Please try again");
		startBattle();
			break;
		}
	}
}

// Definition of the fightBattle() function
function fightBattle() {
	let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
	let strong = window.prompt("Are you stronger than a alien? (YES or NO)").toUpperCase();

	// IF statement that analyes the responses
	if(skill === "YES" || strong === "YES") {
		// The user said YES to at least one prompts
		document.getElementById("victory").innerHTML = "You can either be stronger or more skilled than a alien to survive.<br/>You survived another day!";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Play Again?";

	} else {
		// The user did NOT respond YES to either prompt
		document.getElementById("defeat").innerHTML = "You are NOT skilled or strong? Why did you fight a alien?<br/>You have been defeated!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Play Again?";
	}
}

// Defintion of the RunBattle() function
function runBattle() {
	let fast = window.prompt("Are you fast YES or NO)").toUpperCase();

	if(fast === "YES") {
		document.getElementById("victory").innerHTML = "Your speed has saved you.<br/>But can you live with your cowardice?";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Play Again?";

	} else {
		document.getElementById("defeat").innerHTML = "If you're going to run at least be faster than a alien<br/>You have lost!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Play Again?";
	}
}

// Defintion of the bribeBattle() function
function bribeBattle() {
	let money = window.prompt("You have to pay the alien-toll.\nDo you have any money? (YES or NO)").toUpperCase();
	if (money === "YES") {
		// Now ask if they have the correct amount
		let amount = window.prompt("How much money do you have\nPlease enter a NUMERIC VALUE.")
		// Try to convert the input to an integer value
		amount = parseInt(amount);
		// Check that amount against our condition
	if (amount > 50) {
		document.getElementById("victory").innerHTML = "Great job, the alien is happy!<br/>You may pass!";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Play Again?";
	
	} else {
		document.getElementById("defeat").innerHTML = "The alien needs more than that!<br/>Your fate is sealed!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Play Again?";
	}

	} else { 
		// User said they didn't have money
		document.getElementById("defeat").innerHTML = "No money? Trolls don't have Venmo...yet.<br/>You have lost!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Play Again?";
	}
}