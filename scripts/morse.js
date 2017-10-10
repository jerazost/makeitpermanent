var translations = [{key:"a", value:".-"},{key:"b", value:"-..."}, {key: "c", value: "-.-."}, {key: "d", value: "-.."}, {key: "e", value: "."}, {key: "f", value: "..-."},
{key:"g", value: "--."}, {key: "h", value: "...."}, {key: "i", value: ".."}, {key: "j", value: ".---"}, {key:"k", value: "-.-"}, {key:"l", value: ".-.."},
{key: "m", value: "--"}, {key:"n", value: "-."}, {key: "o", value: "---"}, {key: "p", value: ".--."}, {key: "q", value: "--.-"}, {key: "r", value: ".-."},
{key: "s", value: "..."}, {key: "t", value: "-"}, {key: "u", value: "..-"}, {key: "v", value: "...-"}, {key: "w", value: ".--"}, {key: "x", value: "-..-"},
{key: "y", value: "-.--"}, {key: "z", value: "--.."}];
var generatedWord;
var submit = document.getElementById('submit');

window.onload = function () {
	
	generateQuestion();
}

function generateQuestion() {
	
	generatedWord = wordArray[Math.floor(Math.random() * 1000)];
	var morse = document.getElementById('morse');
	morse.innerHTML = convertToMorse(generatedWord);
	console.log(generatedWord);

}

function convertToMorse(regString){
	var morseString = "", currentChar;

	for (var i = 0; i < regString.length; i++){
		currentChar = regString.charAt(i);
		for (var j = 0; j < translations.length; j++){
			if (currentChar == translations[j].key){
				morseString += translations[j].value;
				morseString += ' ';
				break;
			}
		}
	}

	return morseString;
}
function checkAnswer() {
	var answer = document.getElementById('answer_input');
	var result = document.getElementById('result');
	
	if(answer.value.toLowerCase() == generatedWord){
		result.innerHTML = 'Correct!';
	} else {
		result.innerHTML = 'Wrong! The word is <br/>' + "'" + generatedWord + "'";
	}
}
function giveUp() {

}

$("#main-btn").click(function() { // I change the text and then use that text to determine what the button does. If it says Submit I submit and vice versa
	if ($(this).html() == 'submit'){
		checkAnswer();
		$(this).html('next');
	}else if ($(this).html() == 'next'){
		generateQuestion();
		$(this).html('submit');
	}
});
$(document).ready(function(){  // This is so it listens for me to press enter. When I press enter it is equivalent to clicking the main button
    $('#answer').keypress(function(e){
      if(e.keyCode==13)
      $('#main-btn').click();
    });
});
