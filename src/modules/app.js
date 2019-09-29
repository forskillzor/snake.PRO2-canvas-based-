import {Game} from './game.js'
export class App{

	constructor(){
		const self = this;
		this.$app = document.querySelector('.app');
		this.$record = document.querySelector('.score');
		this.game = new Game();
		//this.$record.textContent = 'Рекордов нет'
	}
}	

