import {Snake} from './snake.js'
import {Matrix} from './matrix.js'

export class Game{
	
	constructor(){

		const self = this
		this.$canvas = document.querySelector('.game')
		this.$newButton = document.querySelector('.new-game')
		this.$record = document.querySelector('.record')
		this.$score = document.querySelector('.score')
		this.score = 0
		this.lifes = 3
		this.matrix = new Matrix(this.$canvas);
		console.log('crate game')
		this.matrix.render()
		
		this.snake = new Snake(this.matrix, 0,5)
		//this.matrix.setCell(4, 4,'fruit')
		this.isRunning = false

		this.$newButton.addEventListener('click', this.newGame.bind(this))
		this.gameInterval = setInterval(function(){

			if (self.snake.isClosed && self.isRunning){
				self.gameOver()
			}
			self.$score.textContent = self.snake.body.length-1
		},10)

		this.KeyboardHandler()
	}

	gameOver(){

		clearInterval(this.snake.interval)
		//clearInterval(this.gameInterval)
		this.isRunning = false
		alert('GAME OVER')
		this.$newButton.classList.remove('hide')
	}

	newGame(){
		this.isRunning = true
		this.matrix = new Matrix(this.$canvas);
		this.snake = new Snake(this.matrix, 0,5)
		this.snake.newFruit()
		this.$newButton.classList.add('hide')
		console.log('new gamselecte')
		this.matrix.render()
	}

	_crash(){

	}

	KeyboardHandler(){

		const self = this
	
		window.addEventListener('keydown', function(event){

			//event.preventDefault()

			if(self.isRunning){
				switch (event.key) {
					case 'ArrowLeft':
						if(self.snake.direction == 'right') break;
						self.snake.direction = 'left'
						self.snake.changeMove()
						break;

					case 'ArrowRight':
						if(self.snake.direction == 'left') break;
						self.snake.direction = 'right'
						self.snake.changeMove()
						break;

					case 'ArrowUp':
						if(self.snake.direction == 'down') break;
						self.snake.direction = 'up'
						self.snake.changeMove()
						break;

					case 'ArrowDown':
						if(self.snake.direction == 'up') break;
						self.snake.direction = 'down'
						self.snake.changeMove()
						break;
				}
			}
		})
	}
}