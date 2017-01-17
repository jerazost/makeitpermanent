var rand, toType, fromType;
var correct = document.getElementById('correct');
var next = document.getElementById('next');

function getAnswer() {
	var answer = document.getElementById('answer');
	return answer;
}
function generateQuestion() {
	answer = getAnswer();
	answer.value = '';
	correct.innerHTML = '';
	correct.style.display = 'none';
	
	var max = 225, min = 1, base , fromInt;
	rand = Math.floor(Math.random() * (max - min) + min);
	do{
		fromType = Math.floor(Math.random() * (5 - 1) + 1);
		toType = Math.floor(Math.random() * (5 - 1) + 1);
	}while(fromType === toType);
	switch(toType) {
	    case 1:
	    	base = 'Binary';
	    	toType = 2;
	        break;
	    case 2:
	    	base = 'Octal';
	    	toType = 8;
	        break;
	    case 3:
	    	base = 'Decimal';
	    	toType = 10;
	    	break;
	    case 4:
	    	base = 'Hex';
	    	toType = 16;
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
function checkAnswer () {
	userAnswer = (getAnswer()).value;
	answer = rand.toString(toType);

	console.log(
		'userAnswer: ' + userAnswer + ' Type: ' + (typeof userAnswer) +
		' answer: ' + answer + ' Type: ' + (typeof answer)
		);
	if(answer.toUpperCase() == userAnswer.toUpperCase()){
		correct.style.color = 'green';
		correct.innerHTML = 'Correct! ';
		correct.style.display = 'inline';
	
	}else {
		correct.style.color = 'red';
		correct.innerHTML = 'Incorrect, the answer was ' + answer;
		correct.style.display = 'inline';
	}
}
window.onload = function () {
	generateQuestion();
}

$("#main-btn").click(function() {
	if ($(this).html() == 'Submit'){
		checkAnswer();
		$(this).html('Next');
	}else if ($(this).html() == 'Next'){
		generateQuestion();
		$(this).html('Submit');
	}
});

$(document).ready(function(){
    $('#answer').keypress(function(e){
      if(e.keyCode==13)
      $('#main-btn').click();
    });
});
