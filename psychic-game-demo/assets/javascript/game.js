
var mLetters = ["b", "x", "i", "t", "v"];
var compScore = 0;
var userScore = 0;
var guess = 10;

//document.getElementById("start").innerHTML = I need to define the var

//This is reporting back null. I have set it to "start on my HTML page"
//why is it having trouble running the function?

//Step One: Have the computer generate a random letter from the array




//step one: Working
var rand = mLetters[Math.floor(Math.random() * mLetters.length)];
console.log(rand);
//Step Two: Have a user guess a key (onkey is Working)
document.onkeyup = function(event) {
var choice = event.key


//if choice === mLetter,0 , the userscore advances.
if (choice === rand) {
	userScore++;
	document.getElementById("userScore").innerHTML = userScore;
	
} 

//if choice does not then, com
else if (choice !== rand) {

	compScore++;
	document.getElementById("compScore").innerHTML = compScore;
	guess--;
}

 if (guess===0){
alert("Game Over");

}

}



