import {Cell} from './cell.js'
import {conf} from "./game.config";

const cell_size = conf.cell.width;
const height = conf.area.height;
const width = conf.area.width;
export class Matrix{
	constructor(){
		this.cells = [];
		this.create()
	}
	create(){
		const cell_width = conf.cell.width;
		const cell_height = conf.cell.height;
		const area_width = width * cell_width;
		const area_height = height * cell_height;

		for (let y = 0; y < area_height; y+=cell_height){
			for(let x = 0; x < area_width; x+=cell_width){
				this.cells.push(new Cell(x, y, cell_size, cell_size))
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
