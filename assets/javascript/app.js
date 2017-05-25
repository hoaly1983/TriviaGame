// if(1===1){alert("hi");}testing to make sure js is linked to html
$(document).ready(function(){


	$(".a1").click(function(){
		// console.log("hello")
		if($(this).val()==="d"){
			console.log("correct")
		}
		else { console.log ("wrong")}
	})

	$(".a2").click(function(){
		// console.log("hello")
		if($(this).val()==="c"){
			console.log("correct")
		}
		else { console.log ("wrong")}
	})

	$(".a3").click(function(){
		// console.log("hello")
		if($(this).val()==="a"){
			console.log("correct")
		}
		else { console.log ("wrong")}
	})

	$(".a4").click(function(){
		// console.log("hello")
		if($(this).val()==="c"){
			console.log("correct")
		}
		else { console.log ("wrong")}
	})

	$(".a5").click(function(){
		// console.log("hello")
		if($(this).val()==="b"){
			console.log("correct")
		}
		else { console.log ("wrong")}
	})



	

	var count = 300;
	var sec =0;
	var min =0;

	var counter = setInterval(timer, 1000);
		function timer() {
		count = count -1;
		var time = convert(count);
		$("#timer").text("Time remaining is: " + time);
		if (count <= 0) {
		clearInterval(counter);
			return;
	}
}

	function convert(count){
	var min = Math.floor(count/60)
	var sec = count%60
	return min+':' + sec
	}
	timer();

});

// function to make questions work 


// function generateLossDueToTimeOut() {
// 	unansweredTally++;
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
// 	$(".mainArea").html(gameHTML);
// 	setTimeout(wait, 4000);  //  change to 4000 or other amount
// }

// function generateWin() {
// 	correctTally++;
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
// 	$(".mainArea").html(gameHTML);
// 	setTimeout(wait, 4000);  //  change to 4000 or other amount
// }

// function generateLoss() {
// 	incorrectTally++;
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
// 	$(".mainArea").html(gameHTML);
// 	setTimeout(wait, 4000); //  change to 4000 or other amount
// }

// function generateHTML() {
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
// 	$(".mainArea").html(gameHTML);
// }

// function wait() {
// 	if (questionCounter < 7) {
// 	questionCounter++;
// 	generateHTML();
// 	counter = 30;
// 	timerWrapper();
// 	}
// 	else {
// 		finalScreen();
// 	}
// }

// function timerWrapper() {
// 	theClock = setInterval(thirtySeconds, 1000);
// 	function thirtySeconds() {
// 		if (counter === 0) {
// 			clearInterval(theClock);
// 			generateLossDueToTimeOut();
// 		}
// 		if (counter > 0) {
// 			counter--;
// 		}
// 		$(".timer").html(counter);
// 	}
// }

// function finalScreen() {
// 	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
// 	$(".mainArea").html(gameHTML);
// }

// function resetGame() {
// 	questionCounter = 0; 
// 	correctTally = 0;
// 	incorrectTally = 0;
// 	unansweredTally = 0;
// 	counter = 30;
// 	generateHTML();
// 	timerWrapper();
// }

// var startScreen;
// var gameHTML;
// var counter = 30;
// var questionArray = ["Which of the following function of String object returns the characters in a string between two indexes into the string?", "Which of the followng function of string object returns a string representing the specified object?", "Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?", "Which of the following function of Array object adds and/or removes elements from an array?", "Which of the following type of variable takes precedence over other if names are same ?",];
// var answerArray = [["slice ()","split()","substr()","substring()"],["A.toLocaleUpperCase()","toUpperCase()","toString()","substring()"],["concat()",'pop()','push()','some()'],['toSource()','sort()','splice()','unShift',],["global variable",'local variable','Both A and B','None of the Ab']]
// var correctAnswers = ["A. Canberra", "B. Monrovia", "C. Taipei", "C. Tokyo", "D. Beijing", "A. Ankara", "B. Bogota", "D. New Delhi"];
// var questionCounter = 0;
// var selecterAnswer;
// var theClock;
// var correctTally = 0;
// var incorrectTally = 0;
// var unansweredTally = 0;
// var clickSound = new Audio("sound/button-click.mp3");


// });


