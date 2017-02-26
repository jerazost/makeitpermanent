var result = {}, lValues, lLength;
var wordArray;
var correct; //need to include addElemById;
var next; //need to include addElemById;



window.onload = function () {
	generateQuestion();
}


function generateQuestion() {
	answer = getAnswer();
	//answer.value = '';

	var word = wordArray[Math.floor(Math.random() * 1000)];






}


var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://mjohnson196.github.io/words.json', true);
xhr.send(null);
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
    	word = JSON.parse(xhr.responseText);





    }
}
function convertToMorse(regString){
	var morseString , currentChar;
	for (var i = 0; i < regString.length(); i++){
		currentChar = regString.charAt(i);
		for (var j = 0; j < translations.length(); j++){
			if (currentChar == translations[j].key){
				morseString.concat(translations[j].value);
				break;
			}
		}
	}
	return morseString;
}
function checkAnswer() {

}
function giveUp() {

}
function getAnswer() {
}