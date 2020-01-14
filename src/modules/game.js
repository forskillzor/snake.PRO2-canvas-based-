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
		this.gameInterval = null;
	}
	start(){
		this.gameInterval = setInterval(() => {
			if (this.snake.isClosed && this.isRunning){
				this.gameOver()
			}
			this.snake.move(this.snake.direction);
		},this.snake.speed);
	}
	stop(){
		clearInterval(this.gameInterval);
	}

	gameOver(){
		this.stop();
		delete this.snake;
		this.isRunning = false;
		alert('GAME OVER');
		this.$newButton.classList.remove('hide')
	}

	newGame(){
		this.isRunning = true;
		this.matrix = new Matrix();
		this.snake = new Snake(this, this.matrix, 0,5);
		this.snake.newFruit();
		this.$newButton.classList.add('hide');
		this.matrix.show();
		this.$score.innerText = this.score;
		this.start();
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
