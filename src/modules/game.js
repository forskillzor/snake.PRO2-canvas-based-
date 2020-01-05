import {Snake} from './snake.js'
import {Matrix} from './matrix.js'

export class Game{
	constructor(){
		this.$newButton = document.querySelector('.new-game');
		this.$score = document.querySelector('.score');
		this.$newButton.addEventListener('click', this.newGame.bind(this));
		this.score = 0;
		this.lifes = 3;
		this.snake = null;
		this.isRunning = false;
		this.KeyboardHandler();
		this.gameInterval = setInterval(() => {
			if (this.snake.isClosed && this.isRunning){
				this.gameOver()
			}
			// self.$score.textContent = self.snake.body.length-1
		},10);

	}

	gameOver(){
		clearInterval(this.snake.interval);
		this.isRunning = false;
		alert('GAME OVER');
		this.$newButton.classList.remove('hide')
	}

	newGame(){
		this.isRunning = true;
		this.matrix = new Matrix();
		this.snake = new Snake(this.matrix, 0,5);
		this.snake.newFruit();
		this.$newButton.classList.add('hide');
		this.matrix.show();
	}

	KeyboardHandler(){
		const handle = (event) => {
			event.preventDefault();
			if(this.isRunning)
			    this.snake.setDirection(event.key);

		};
		window.addEventListener('keydown', handle);
	}
}
