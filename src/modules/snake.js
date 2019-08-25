export class Snake{

	constructor(matrix, x, y){
		this.matrix = matrix
		this.body = []
		this.x = x
		this.y = y
		this.body.push([this.x, this.y])
		this.direction = 'right'
		this.speed = 100
		this.interval = false
		this.isClosed = false

	}

	show(){

		for (let i = 0; i < this.body.length; i++){
			this.matrix.setCell(this.body[i][0], this.body[i][1], 'snake')
		}
		//this.matrix.render()
	}

	hide(){

	} 

	changeMove(){

		const self = this
		if(self)
		clearInterval(self.interval)
		self.interval = setInterval(function(){
			self.move(self.direction)
		}, self.speed)
	}

	move(direction){

		const currentCell = this.matrix._calcNum(this.x, this.y)
		this.matrix.clearCell(this.x, this.y)
		switch (direction) {
			case 'left':
				this.x--
				if (this.x < 0 ){
					this.x = 39
				}
				break;
			case 'right':
				this.x++
				if (this.x == 40){
					this.x = 0
				}
				break;
			case 'up':
				this.y--
				if (this.y < 0){
					this.y = 39
				}
				break;
			case 'down':
				this.y++
				if (this.y == 40){
					this.y = 0
				}
				break;
		}
		this.closer()
		this.body.push([this.x, this.y])
		const [x,y] = this.body.shift()
		this.matrix.setCell(x, y, 'empty')
		this.eat()
		this.show()
	}

	newFruit(){
		this.matrix.setCell(parseInt(Math.random()*39),parseInt(Math.random()*39),'fruit')

	}

	closer(){
		
		if(this.matrix.getCell(this.x, this.y).content == 'snake'){
			this.isClosed = true
		}
	}

	eat(){

		if(this.matrix.getCell(this.x, this.y).content == 'fruit'){
			console.log("om-nom-nom")
			this.body.push([this.x, this.y])
			this.speed -= 1
			this.matrix.setCell(this.x, this.y, 'snake')
			this.newFruit()
		}
		this.changeMove()
	}
}
