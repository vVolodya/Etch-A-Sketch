createBoard(16);

let color = 'black';
let click = true;

document.querySelector('body').addEventListener('click', (e) => {
	if(e.target.tagName != 'BUTTON' && e.target.tagName != 'INPUT') {
		click = !click
		if(click) {
			document.querySelector('.mode').textContent = 'Mode: Coloring';
		} else {
			document.querySelector('.mode').textContent = 'Mode: Not Coloring';
		}
	}
});

function createBoard(size) {

	let board = document.querySelector('.board');
	let squares = board.querySelectorAll('div');
	squares.forEach((div) => div.remove());
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	for (let i = 0; i < Math.pow(size, 2); i++) {
	let square = document.createElement('div');
	square.addEventListener('mouseover', colorSquare);
	square.style.backgroundColor = 'white';
	board.appendChild(square);
	}

}

function changeSize (input) {
	if(input >= 2 && input <= 64) {
		createBoard(input);
		removeInputError();
	} else {
		addInputError();
	}
}

function colorSquare() {
	if (click) {
		if(color === 'random') {
			this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
		} else {
			this.style.backgroundColor = color;
		}
	}
}

function changeColor(choice) {
	color = choice;
}

function resetBoard() {
	let board = document.querySelector('.board');
	let squares = board.querySelectorAll('div');
	squares.forEach((div) => div.style.backgroundColor = 'white');
}

function addInputError() {
	document.querySelector('.error').style.display = 'flex';
}

function removeInputError() {
	document.querySelector('.error').style.display = 'none';
}
