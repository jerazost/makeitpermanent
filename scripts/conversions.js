var rand, toType, fromType;
var correct = document.getElementById('correct');
var next = document.getElementById('next'); // Gets an html element and assigns it to next

var options = {
	binaryON: true,
	octON: true,
	decON: true,
	hexON: true,
	convertTool: false
}

function getAnswer() {
	var answer = document.getElementById('answer_input'); // Gets an html element and assigns it to answer
	return answer;
}
function generateQuestion() { 
	answer = getAnswer();
	answer.value = '';
	correct.innerHTML = '';
	correct.style.display = 'none'; // Initialize the html objects when question generates.
	
	var max = 225, min = 1, base , fromInt;
	rand = Math.floor(Math.random() * (max - min) + min); //Math is part of javascript and gives you sweet functions
	

		do{
		fromType = Math.floor(Math.random() * (5 - 1) + 1);
		toType = Math.floor(Math.random() * (5 - 1) + 1); // These generate random numbers to pick what the base is going to be and they get passed into the switch statement 
		}while(fromType === toType);

		switch(toType) {
		    case 1:
		    	base = 'Binary';
		    	toType = 2;
		    	if(options.binaryON){
		    		repeat = false;
		    	}
		        break;
		    case 2:
		    	base = 'Octal';
		    	toType = 8;
		    	if(options.octON){
		    		repeat = false;
		    	}
		        break;
		    case 3:
		    	base = 'Decimal';
		    	toType = 10;
		    	if(options.decON){
		    		repeat = false;
		    	}
		    	break;
		    case 4:

		    	base = 'Hex';
		    	toType = 16;
		    	if(options.hexON){
		    		repeat = false;
		    	}
		    	break;
		    default:
		        alert('Error generating question');
		}

	switch(fromType) {
	    case 1:
	    	fromInt = rand.toString(2);
	    	fromType = 'Binary';
	        break;
	    case 2:
	    	fromInt = rand.toString(8);
	    	fromType = 'Octal';
	        break;
	    case 3:
	    	fromInt = rand.toString(10);
	    	fromType = 'Decimal';
	    	break;
	    case 4:
	    	fromInt = rand.toString(16);
	    	fromType = 'Hex'
	    	break;
	    default:
	        alert('Error generating question');
	}
	var question = "Convert the " + fromType + " integer " + fromInt + " to " + base;
	document.getElementById('Question').innerHTML = question;
}
function checkAnswer () { // Here I
	userAnswer = (getAnswer()).value;
	answer = rand.toString(toType);

	console.log(
		'userAnswer: ' + userAnswer + ' Type: ' + (typeof userAnswer) +
		' answer: ' + answer + ' Type: ' + (typeof answer)
		);
	if(answer.toUpperCase() == userAnswer.toUpperCase()){
		correct.style.color = '#43a047'; // This is how 
		correct.innerHTML = 'Correct! ';
		correct.style.display = 'inline';
	
	}else {
		correct.style.color = '#ec407a';
		correct.innerHTML = 'Incorrect, the answer was ' + answer;
		correct.style.display = 'inline';
	}
}
window.onload = function () { //Whenever website loads, it generates a question
	generateQuestion();
}

$("#main-btn").click(function() { // I change the text and then use that text to determine what the button does. If it says Submit I submit and vice versa
	console.log('click');
	if ($(this).html() == 'Submit'){
		checkAnswer();
		$(this).html('Next');
	}else if ($(this).html() == 'Next'){
		generateQuestion();
		$(this).html('Submit');
	}
});

$(document).ready(function(){  // This is so it listens for me to press enter. When I press enter it is equivalent to clicking the main button
    $('#answer').keypress(function(e){
      if(e.keyCode==13)
      $('#main-btn').click();
    });
});
