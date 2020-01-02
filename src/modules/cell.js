export class Cell{

	constructor(x, y, m){

		this.x = x;
		this.y = y;
		this.m = m;
		this.content = 'empty';
        this.contentColor = {
			empty: '#fff',
			snake: 'green',
			fruit: 'red'
		}
	}

	render(ctx){
		ctx.fillStyle = this.contentColor[this.content];
		ctx.strokeStyle = '#d2d2d2';
		ctx.fillRect(this.x, this.y, this.m, this.m);
		ctx.strokeRect(this.x, this.y, this.m, this.m);
	}
}
