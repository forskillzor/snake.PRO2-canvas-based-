import {Game} from './game.js'
import {game_settings} from "./game.config";
export class App{

	constructor(){
		this.game = new Game();
		this.wrapper = document.querySelector('.game-wrapper')
        applySettings(this.wrapper);
	}
}
const applySettings = (el) => {
	el.style.width = game_settings.area_width * game_settings.cell_width + 'px';
	el.style.height = game_settings.area_height * game_settings.cell_height + 'px';
};

