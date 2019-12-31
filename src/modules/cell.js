export class Cell{

	constructor(x, y, m){

		this.x = x;
		this.y = y;
		this.m = m;
		this.n = m;
		this.content = 'empty'
	}

	render(ctx){

		switch (this.content) {

			case 'empty':

				ctx.fillStyle = '#fff';
				ctx.strokeStyle = '#d2d2d2';
				ctx.fillRect(this.x, this.y, this.m, this.n);
				ctx.strokeRect(this.x, this.y, this.m, this.n);
				break;

			case 'snake':

				ctx.fillStyle = 'green';
				ctx.strokeStyle = '#d2d2d2';
				ctx.fillRect(this.x, this.y, this.m, this.n);
				ctx.strokeRect(this.x, this.y, this.m, this.n);
				break;

			case 'fruit':

				ctx.fillStyle = 'red';
				ctx.fillRect(this.x, this.y, this.m, this.n);
				break;
		}
	}
}
const drawObject = (content) => {
    let fillColor = '#fff';
	let strokeColor = '#fff';
	switch(content){
		case 'empty':
		    break;
		case 'snake':
			break;
		case 'fruit':
			break;
	}
	ctx.fillStyle = fillColor;
	ctx.strokeStyle = strokeColor;
	ctx.fillRect(this.x, this.y, this.m, this.n);
	ctx.strokeRect(this.x, this.y, this.m, this.n);
};
break;
module.exports = {foo};
