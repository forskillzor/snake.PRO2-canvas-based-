import {Cell} from './cell.js'
import {conf} from "./game.config";

export class Matrix{
	constructor(){
		this.cells = [];
		this.create()
	}
	create(){
		for (let y = 0; y < conf.area.height * conf.cell.height; y += conf.cell.height){
			for(let x = 0; x < conf.area.width * conf.cell.width; x += conf.cell.width){
				this.cells.push(new Cell(x, y, conf.cell.width, conf.cell.height))
			}
		}
	}
	show(){
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
		return y * conf.area.width + x;
	}
}
