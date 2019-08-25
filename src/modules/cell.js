export class Cell{

	constructor(x, y, m, n){
		this.x = x
		this.y = y
		this.m = m
		this.n = m
		this.content = 'empty'
	}

	render(ctx){
		switch (this.content) {
			case 'empty':
				ctx.fillStyle = '#fff'
				ctx.strokeStyle = '#d2d2d2'; 
				ctx.fillRect(this.x, this.y, this.m, this.n);
				ctx.strokeRect(this.x, this.y, this.m, this.n);
				break;
			case 'snake':
				ctx.fillStyle = 'green'; 
				ctx.fillRect(this.x, this.y, this.m, this.n);
				ctx.strokeStyle = '#d2d2d2';
				ctx.strokeRect(this.x, this.y, this.m, this.n); 
				break;
			case 'fruit':
				ctx.fillStyle = 'red'; 
				ctx.fillRect(this.x, this.y, this.m, this.n);
				break;
		}
	}
}