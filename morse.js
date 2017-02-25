var result = {}, lValues, lLength;
var wordArray;
var correct; //need to include addElemById;
var next; //need to include addElemById;

function getAnswer() {

	var answer = document.getElementById('answer'); //melanie needs to create this html element

	return answer
}




function generateQuestion() {
	answer = getAnswer();
	//answer.value = '';

	var word = wordArray[Math.floor(Math.random() * 1000)];


	document.getElementById('word').innerHTML = word;
	


}


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
    	word = JSON.parse(xhr.responseText);
    	
    	

    	

    }
}



xhr.open('GET', 'https://mjohnson196.github.io/words.json', true);
xhr.send(null);

function checkAnswer() {

}


