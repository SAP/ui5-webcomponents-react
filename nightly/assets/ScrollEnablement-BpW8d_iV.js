import{l as n}from"./jsx-runtime-DJfzgo3Z.js";import{i as a}from"./EventProvider-ChtD9rRX.js";import{f as u,v as p}from"./animate-JylhYHXj.js";const l=(i,t,s)=>{let e,o;return u({beforeStart:()=>{e=i.scrollLeft,o=i.scrollTop},duration:p,element:i,advance:r=>{i.scrollLeft=e+r*t,i.scrollTop=o+r*s}})},v="scroll",g=n()?"touchend":"mouseup";class T extends a{constructor(t){super(),this.supportsTouch=n(),this.containerComponent=t,this.mouseMove=this.ontouchmove.bind(this),this.mouseUp=this.ontouchend.bind(this),this.touchStart=this.ontouchstart.bind(this),this.supportsTouch=n(),this.cachedValue={dragX:0,dragY:0},this.startX=0,this.startY=0,this.supportsTouch?(t.addEventListener("touchstart",this.touchStart,{passive:!0}),t.addEventListener("touchmove",this.mouseMove,{passive:!0}),t.addEventListener("touchend",this.mouseUp,{passive:!0})):t.addEventListener("mousedown",this.touchStart,{passive:!0})}set scrollContainer(t){this._container=t}get scrollContainer(){return this._container}async scrollTo(t,s,e=0,o=0){let r=this.scrollContainer.clientHeight>0&&this.scrollContainer.clientWidth>0;for(;!r&&e>0;)await new Promise(h=>{setTimeout(()=>{r=this.scrollContainer.clientHeight>0&&this.scrollContainer.clientWidth>0,e--,h()},o)});this._container.scrollLeft=t,this._container.scrollTop=s}move(t,s,e){if(e){this._container.scrollLeft+=t,this._container.scrollTop+=s;return}if(this._container)return l(this._container,t,s)}getScrollLeft(){return this._container.scrollLeft}getScrollTop(){return this._container.scrollTop}_isTouchInside(t){let s=null;this.supportsTouch&&t instanceof TouchEvent&&(s=t.touches[0]);const e=this._container.getBoundingClientRect(),o=this.supportsTouch?s.clientX:t.x,r=this.supportsTouch?s.clientY:t.y;return o>=e.left&&o<=e.right&&r>=e.top&&r<=e.bottom}ontouchstart(t){let s=null;this.supportsTouch&&t instanceof TouchEvent&&(s=t.touches[0]),s?(this.startX=s.pageX,this.startY=s.pageY):(document.addEventListener("mouseup",this.mouseUp,{passive:!0}),document.addEventListener("mousemove",this.mouseMove,{passive:!0})),s&&(this._prevDragX=s.pageX,this._prevDragY=s.pageY),t instanceof MouseEvent&&(this._prevDragX=t.x,this._prevDragY=t.y),this._canScroll=this._isTouchInside(t)}ontouchmove(t){if(!this._canScroll)return;const s=this._container,e=this.supportsTouch?t.touches[0]:null,o=this.supportsTouch?e.pageX:t.x,r=this.supportsTouch?e.pageY:t.y;s.scrollLeft+=this._prevDragX-o,s.scrollTop+=this._prevDragY-r,this.fireEvent(v,{isLeft:o>this._prevDragX,isRight:o<this._prevDragX}),this.cachedValue.dragX=this._prevDragX,this.cachedValue.dragY=this._prevDragY,this._prevDragX=o,this._prevDragY=r}ontouchend(t){if(this.supportsTouch){const h=Math.abs(t.changedTouches[0].pageX-this.startX),c=Math.abs(t.changedTouches[0].pageY-this.startY);if(h<10&&c<10)return}if(!this._canScroll)return;const s=this._container,e=this.supportsTouch?t.changedTouches[0].pageX:t.x,o=this.supportsTouch?t.changedTouches[0].pageY:t.y;s.scrollLeft+=this._prevDragX-e,s.scrollTop+=this._prevDragY-o;const r=e===this._prevDragX?this.cachedValue.dragX:e;this.fireEvent(g,{isLeft:r<this._prevDragX,isRight:r>this._prevDragX}),this._prevDragX=e,this._prevDragY=o,this.supportsTouch||(document.removeEventListener("mousemove",this.mouseMove),document.removeEventListener("mouseup",this.mouseUp))}}export{T as v};
