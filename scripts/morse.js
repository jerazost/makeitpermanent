var wordArray = [];
var lValues = [{key:"a", value:".-"},{key:"b", value:"-..."}, {key: "c", value: "-.-."}, {key: "d", value: "-.."}, {key: "e", value: "."}, {key: "f", value: "..-."},
{key:"g", value: "--.-"}, {key: "h", value: "...."}, {key: "i", value: ".."}, {key: "j", value: ".---"}, {key:"k", value: "-.-"}, {key:"l", value: ".-.."},
{key: "m", value: "--"}, {key:"n", value: "-."}, {key: "o", value: "---"}, {key: "p", value: ".--."}, {key: "q", value: "--.-"}, {key: "r", value: ".-."},
{key: "s", value: "..."}, {key: "t", value: "-"}, {key: "u", value: "..-"}, {key: "v", value: "...-"}, {key: "w", value: ".--"}, {key: "x", value: "-..-"},
{key: "y", value: "-.--"}, {key: "z", value: "--.."}];

window.onload = function () {
	
	$.getJSON( "https://github.com/fersot100/makeitpermanent/blob/master/scripts/words.json", function(data) {
	  	$.each( data, function(value) {
   		 	wordArray.push(value);
 		});

	});
	generateQuestion();
}

function generateQuestion() {
	
	var word = wordArray[Math.floor(Math.random() * 1000)];
	console.log(word);
	var morse = document.getElementById('morse');
	morse.innerHTML = convertToMorse(word);

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