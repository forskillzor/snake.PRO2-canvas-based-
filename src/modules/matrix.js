import {Cell} from './cell.js'
import {game_settings} from "./game.config";

export class Matrix{
	constructor(){
		this.cells = [];
		this.cellSize = game_settings.cell_width;
		this.height = game_settings.area_height;
		this.width = game_settings.area_width;
		this.create()
	}
	create(){
		const cell_width = game_settings.cell_width;
		const cell_height = game_settings.cell_height;
		const area_width = this.width * cell_width;
		const area_height = this.height * cell_height;

		for (let y = 0; y < area_height; y+=cell_height){
			for(let x = 0; x < area_width; x+=cell_width){
				this.cells.push(new Cell(x, y, this.cellSize, this.cellSize))
			}
		}
	}
	render(){
		for (let i = 0; i < this.cells.length; i++){
			this.cells[i].render()
		}
	}
	getCell(x, y){
		let num = this._calcNum(x, y);
		return this.cells[num]
	}
	setCell(x, y, val){
		let num = this._calcNum(x, y);
		this.cells[num].content = val;
		this.cells[num].render();

	}
	_calcNum(x, y){
		return y*40 + x;
	}
}
