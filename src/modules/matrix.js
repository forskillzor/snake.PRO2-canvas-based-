import {Cell} from './cell.js'

export class Matrix{
	
	constructor(canvas){

		this.ctx = canvas.getContext('2d')
		this.cells = []
		this.cellSize = 20
		this.create()
	}

	create(){
		for (let y = 0; y < 800; y+=20){
			for(let x = 0; x < 800; x+=20){
				this.cells.push(new Cell(x, y, this.cellSize, this.cellSize))
			}
		}
	}

	render(){
		for (let i = 0; i < this.cells.length; i++){
			this.cells[i].render(this.ctx)
		}
	}

	getCell(x, y){

		let num = this._calcNum(x, y)
		return this.cells[num]
	}

	clearCell(x, y){

		let num = this._calcNum(x, y)
		this.cells[num].content = "empty"
	}

	setCell(x, y, val){

		let num = this._calcNum(x, y)
		this.cells[num].content = val
		this.cells[num].render(this.ctx)

	}

	_calcNum(x, y){

		return y*40 + x //
	}
	select(x,y){
		this.setCell(x, y, 'snake')
		this.cells[this._calcNum(x,y)].render(this.ctx)
	}
}