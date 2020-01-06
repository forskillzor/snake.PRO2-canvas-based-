import {Game} from './game.js'
import {conf} from "./game.config";
export class App{

	constructor(){
		this.game = new Game();
		this.wrapper = document.querySelector('.game-wrapper')
        applySettings(this.wrapper);
	}
}
const applySettings = (el) => {
	el.style.width = conf.area.width * conf.cell.width + 'px';
	el.style.height = conf.area.height * conf.cell.height + 'px';
};

