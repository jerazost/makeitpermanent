const inputField = document.getElementById('answer_input');
const problem = document.getElementById('Question');
const boxes = document.getElementsByClassName('box');
const submitBtn = document.getElementById('main-btn');
const newQuestionButton = document.getElementById('new-btn');

const ENTER_KEY_CODE = 13;
const TEXT_STATE = 0;
const NUMBER_STATE = 1;

const B2 = 'Binary ';
const B8 = 'Octal ';
const B10 = 'Decimal ';
const B16 = 'Hexadecimal ';

//Global Variable declarations
let problemNumber;
let answerNumber;
let fromBase;
let toBase;
let fString;
let tString;
let noneSelected = false;
let state = TEXT_STATE;

//Settings object bases: 2, 4, 8, 16 values from and to 
let settings = {
	from: [true, true, true, true],
	to: [true, true, true, true]
}

//Event Listeners for checkboxes
for(let i = 0; i < boxes.length; i++){
	boxes[i].addEventListener('change', changeSettings);
}
//Event Listeners for submit and new question buttons
submitBtn.addEventListener('click', ()=>{
	readAndCheckInput();
});
newQuestionButton.addEventListener('click', ()=>{
	generateQuestion();
});

//Event listener for pressing enter after typing an answer
inputField.addEventListener('keypress', (event) => {
	if (event.keyCode === ENTER_KEY_CODE){
		if(state == TEXT_STATE){
			generateQuestion();
		}else{
			readAndCheckInput();
		}
	}
});

function generateQuestion() { 
	inputField.value = '';
	correct.innerHTML = '';
	correct.style.display = 'none'; // Initialize the html objects when question generates.
	
	var max = Math.pow(2, 16);
	var min = Math.pow(2, 8);

	//Picks a number 1-4
	fromBase = Math.floor(Math.random() * 5);
	//Picks base that isn't the first one
	do{
		toBase = Math.floor(Math.random() * 5);
	}while(fromBase === toBase);
	problemNumber = Math.floor(Math.random() * (max - min) + min);
	chooseFrom();
	chooseTo();
	problem.style.color = 'white';
	if(noneSelected) {
		problem.innerHTML = "Not enough bases selected";
		state = TEXT_STATE;
	}else{
		problem.innerHTML = "Convert " + fString + problemNumber.toString(fromBase) + " to " + tString;
		state = NUMBER_STATE;
	}
}

//Reads a number from the input field and compares the numerical value to the first number
function readAndCheckInput(){
	answerNumber = parseInt(inputField.value, toBase);
	if(answerNumber == problemNumber){
		problem.style.color = 'green';
		problem.innerHTML = 'Correct. \n Press "New Question" to continue';
	}else{
		problem.style.color = 'red';
		problem.innerHTML =
		 "Wrong! \nThe correct answer was " 
		 + problemNumber.toString(toBase);
	}
	state = TEXT_STATE;
}
//Choose from and choose to do the same thing, I need to make these into a single function. ideas?
function chooseFrom(){
	noneSelected = true;
	for(let i = 0; i < 4; i++){
		if(settings.from[i]){
			noneSelected = false;
		}
	}
	if(!noneSelected){
		switch(fromBase){
			case 1:
				if(settings.from[0]){
					fromBase = 2;
					fString = B2;
					break;
				}
			case 2:
				if(settings.from[1]){
					fromBase = 8;
					fString = B8;
					break;
				}
			case 3:
				if(settings.from[2]){
					fromBase = 10;
					fString = B10;
					break;
				}
			case 4:
				if(settings.from[3]){
					fromBase = 16;
					fString = B16;
					break;
				}
			default:
				if(fromBase < 4){
					fromBase++;
				}else{
					fromBase = 1;
				}
				chooseFrom();
		}
	}
}

function chooseTo(){
	noneSelected = true;
	for(let i = 0; i < 4; i++){
		if(settings.to[i]){
			noneSelected = false;
		}
	}
	if(!noneSelected){
		switch(toBase){
			case 1:
				if(settings.to[0]){
					toBase = 2;
					tString = B2;
					break;
				}
			case 2:
				if(settings.to[1]){
					toBase = 8;
					tString = B8;
					break;
				}

			case 3:
				if(settings.to[2]){
					toBase = 10;
					tString = B10;
					break;
				}
			case 4:
				if(settings.to[3]){
					toBase = 16;
					tString = B16;
					break;
				}
			default:
				if(toBase < 4){
					toBase++;
				}else{
					toBase = 1;
				}
				chooseTo();
		}
	}
}
//Change settings is the callback function that gets passed to every checkbox listener
function changeSettings(event){
	let id = event.srcElement.id;
	if(id[0] == 'f'){
		settings.from[id[1]] = event.srcElement.checked;
	} else if (id[0] == 't'){
		settings.to[id[1]] = event.srcElement.checked;
	}
	console.log(settings);
}


window.onload = function () { //Whenever website loads, it generates a question
	generateQuestion();
}
