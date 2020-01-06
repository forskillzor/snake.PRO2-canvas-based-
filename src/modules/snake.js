import {keybindings} from './game.config'
import {conf} from "./game.config";

export class Snake{
	constructor(matrix, x, y){
		this.matrix = matrix;
		this.body = [];
		this.x = x;
		this.y = y;
		this.direction = 'right';
		this.speed = 80;
		this.isClosed = false;
		this.body.push([this.x, this.y]);
		this.reverses = {
			'up': 'down',
			'down': 'up',
			'left': 'right',
			'right': 'left'
		};
		// this.interval = setInterval(() => {
		// 	this.move(this.direction)
		// }, this.speed);
	}
	render(){
		for (let i = 0; i < this.body.length; i++){
			this.matrix.setCell(this.body[i][0], this.body[i][1], 'snake')
		}
	}
	setDirection(key){
		if (this.direction !== this.reverses[keybindings[key]]
			&& keybindings[key])
			this.direction = keybindings[key];
	}
	// TODO
	outArea(){
		if (this.x < 0)
			return true;
	}
	move(direction){
		switch (direction) {
			case 'left':
				this.x--;
				if (this.x < 0 ){
					this.x = conf.area.width - 1;
				}
				break;
			case 'right':
				this.x++;
				if (this.x === conf.area.width){
					this.x = 0
				}
				break;
			case 'up':
				this.y--;
				if (this.y < 0){
					this.y = conf.area.height - 1;
				}
				break;
			case 'down':
				this.y++;
				if (this.y === conf.area.height){
					this.y = 0
				}
				break;
		}
		this.onMoveHook();
	}
	onMoveHook(){
			this.checkForClosed();
			this.stepForward();
			this.checkForFruit();
			this.render()
		}
	stepForward(){
		this.body.unshift([this.x, this.y]);
		const [x,y] = this.body.pop();
		this.matrix.setCell(x, y, 'empty')
	}
	newFruit(){
		let {x,y} = generator();
		if(this.matrix.getCell(x, y).content === 'snake'){
			console.log('SNAKE!!', this.matrix.getCell(x, y).content);
			this.newFruit();
		}
		this.matrix.setCell(x, y, 'fruit');
	}
	checkForClosed(){
		if(this.matrix.getCell(this.x, this.y).content === 'snake'){
			this.isClosed = true
		}
	}
	//TODO
	checkForward(){

	}
	checkForFruit(){
		if(this.matrix.getCell(this.x, this.y).content === 'fruit'){
			console.log("om-nom-nom");
			this.body.push([this.x, this.y]);
			this.matrix.setCell(this.x, this.y, 'snake');
			this.newFruit()
		}
	}
}
function generator(){
	return {
		x: parseInt(Math.random() * (conf.area.width - 1)),
		y: parseInt(Math.random() * (conf.area.height - 1))
	}
}
