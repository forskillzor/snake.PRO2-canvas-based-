!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);const s={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"},r={area:{width:30,height:30},cell:{width:20,height:20}},h={empty:"#fff",snake:"green",fruit:"red"};class n{constructor(t,e,i){this.matrix=t,this.body=[],this.x=e,this.y=i,this.direction="right",this.speed=80,this.isClosed=!1,this.body.push([this.x,this.y]),this.reverses={up:"down",down:"up",left:"right",right:"left"}}render(){for(let t=0;t<this.body.length;t++)this.matrix.setCell(this.body[t][0],this.body[t][1],"snake")}setDirection(t){this.direction!==this.reverses[s[t]]&&s[t]&&(this.direction=s[t])}outArea(){if(this.x<0)return!0}move(t){switch(t){case"left":this.x--,this.x<0&&(this.x=r.area.width-1);break;case"right":this.x++,this.x===r.area.width&&(this.x=0);break;case"up":this.y--,this.y<0&&(this.y=r.area.height-1);break;case"down":this.y++,this.y===r.area.height&&(this.y=0)}this.onMoveHook()}onMoveHook(){this.checkForClosed(),this.stepForward(),this.checkForFruit(),this.render()}stepForward(){this.body.unshift([this.x,this.y]);const[t,e]=this.body.pop();this.matrix.setCell(t,e,"empty")}newFruit(){let{x:t,y:e}={x:parseInt(Math.random()*(r.area.width-1)),y:parseInt(Math.random()*(r.area.height-1))};"snake"===this.matrix.getCell(t,e).content&&(console.log("SNAKE!!",this.matrix.getCell(t,e).content),this.newFruit()),this.matrix.setCell(t,e,"fruit")}checkForClosed(){"snake"===this.matrix.getCell(this.x,this.y).content&&(this.isClosed=!0)}checkForward(){}checkForFruit(){"fruit"===this.matrix.getCell(this.x,this.y).content&&(console.log("om-nom-nom"),this.body.push([this.x,this.y]),this.matrix.setCell(this.x,this.y,"snake"),this.newFruit())}}const o=document.querySelector(".game");o.width=r.area.width*r.cell.width,o.height=r.area.height*r.cell.height;const l=o.getContext("2d");class a{constructor(t,e,i){this.x=t,this.y=e,this.m=i,this.content="empty"}render(){l.fillStyle=h[this.content],l.strokeStyle="#d2d2d2",l.fillRect(this.x,this.y,this.m,this.m),l.strokeRect(this.x,this.y,this.m,this.m)}}class c{constructor(){this.cells=[],this.create()}create(){for(let t=0;t<r.area.height*r.cell.height;t+=r.cell.height)for(let e=0;e<r.area.width*r.cell.width;e+=r.cell.width)this.cells.push(new a(e,t,r.cell.width,r.cell.height))}show(){for(let t=0;t<this.cells.length;t++)this.cells[t].render()}getCell(t,e){let i=this._calcNum(t,e);return this.cells[i]}setCell(t,e,i){let s=this._calcNum(t,e);this.cells[s].content=i,this.cells[s].render()}_calcNum(t,e){return e*r.area.width+t}}class d{constructor(){this.$newButton=document.querySelector(".new-game"),this.$score=document.querySelector(".score"),this.$newButton.addEventListener("click",this.newGame.bind(this)),this.score=0,this.lifes=3,this.snake=null,this.isRunning=!1,this.KeyboardHandler(),this.gameInterval=null}start(){this.gameInterval=setInterval(()=>{this.snake.isClosed&&this.isRunning&&this.gameOver(),this.snake.move(this.snake.direction)},this.snake.speed)}stop(){clearInterval(this.gameInterval)}gameOver(){this.stop(),delete this.snake,this.isRunning=!1,alert("GAME OVER"),this.$newButton.classList.remove("hide")}newGame(){this.isRunning=!0,this.matrix=new c,this.snake=new n(this.matrix,0,5),this.snake.newFruit(),this.$newButton.classList.add("hide"),this.matrix.show(),this.start()}KeyboardHandler(){window.addEventListener("keydown",t=>{t.preventDefault(),this.isRunning&&this.snake.setDirection(t.key)})}}const u=t=>{t.style.width=r.area.width*r.cell.width+"px",t.style.height=r.area.height*r.cell.height+"px"};i(0);new class{constructor(){this.game=new d,this.wrapper=document.querySelector(".game-wrapper"),u(this.wrapper)}}}]);