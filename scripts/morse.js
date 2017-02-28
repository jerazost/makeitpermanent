var translations = [{key:"a", value:".-"},{key:"b", value:"-..."}, {key: "c", value: "-.-."}, {key: "d", value: "-.."}, {key: "e", value: "."}, {key: "f", value: "..-."},
{key:"g", value: "--.-"}, {key: "h", value: "...."}, {key: "i", value: ".."}, {key: "j", value: ".---"}, {key:"k", value: "-.-"}, {key:"l", value: ".-.."},
{key: "m", value: "--"}, {key:"n", value: "-."}, {key: "o", value: "---"}, {key: "p", value: ".--."}, {key: "q", value: "--.-"}, {key: "r", value: ".-."},
{key: "s", value: "..."}, {key: "t", value: "-"}, {key: "u", value: "..-"}, {key: "v", value: "...-"}, {key: "w", value: ".--"}, {key: "x", value: "-..-"},
{key: "y", value: "-.--"}, {key: "z", value: "--.."}];
var word;

window.onload = function () {
	
	generateQuestion();
}

function generateQuestion() {
	
	word = wordArray[Math.floor(Math.random() * 1000)];
	var morse = document.getElementById('morse');
	morse.innerHTML = convertToMorse(word);

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

}
function giveUp() {

}
function getAnswer() {
}