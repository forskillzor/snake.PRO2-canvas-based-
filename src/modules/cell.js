import {colors} from './game.config'
const canvas = document.querySelector('.game');
export const ctx = canvas.getContext('2d');

export class Cell{

	constructor(x, y, m){

		this.x = x;
		this.y = y;
		this.m = m;
		this.content = 'empty';
	}

	render(){
		ctx.fillStyle = colors[this.content];
		ctx.strokeStyle = '#d2d2d2';
		ctx.fillRect(this.x, this.y, this.m, this.m);
		ctx.strokeRect(this.x, this.y, this.m, this.m);
	}
}

