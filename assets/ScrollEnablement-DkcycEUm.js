import{s as c}from"./ManagedStyles-0Bwp9t5R.js";import{E as u}from"./EventProvider-B3ZIXKWe.js";import{a as l,d as p}from"./animate-DFaKyidW.js";const d=(i,t,s)=>{let o,e;return l({beforeStart:()=>{o=i.scrollLeft,e=i.scrollTop},duration:p,element:i,advance:r=>{i.scrollLeft=o+r*t,i.scrollTop=e+r*s}})},g="scroll",v=c()?"touchend":"mouseup";class m extends u{constructor(t){super(),this.supportsTouch=c(),this.containerComponent=t,this.mouseMove=this.ontouchmove.bind(this),this.mouseUp=this.ontouchend.bind(this),this.touchStart=this.ontouchstart.bind(this),this.supportsTouch=c(),this.cachedValue={dragX:0,dragY:0},this.startX=0,this.startY=0,this.supportsTouch?(t.addEventListener("touchstart",this.touchStart,{passive:!0}),t.addEventListener("touchmove",this.mouseMove,{passive:!0}),t.addEventListener("touchend",this.mouseUp,{passive:!0})):t.addEventListener("mousedown",this.touchStart,{passive:!0})}set scrollContainer(t){this._container=t}get scrollContainer(){return this._container}async scrollTo(t,s,o=0,e=0){let r=this.scrollContainer.clientHeight>0&&this.scrollContainer.clientWidth>0;for(;!r&&o>0;)await new Promise(h=>{setTimeout(()=>{r=this.scrollContainer.clientHeight>0&&this.scrollContainer.clientWidth>0,o--,h()},e)});this._container.scrollLeft=t,this._container.scrollTop=s}move(t,s,o){if(o){this._container.scrollLeft+=t,this._container.scrollTop+=s;return}if(this._container)return d(this._container,t,s)}getScrollLeft(){return this._container.scrollLeft}getScrollTop(){return this._container.scrollTop}_isTouchInside(t){let s=null;this.supportsTouch&&t instanceof TouchEvent&&(s=t.touches[0]);const o=this._container.getBoundingClientRect(),e=this.supportsTouch?s.clientX:t.x,r=this.supportsTouch?s.clientY:t.y;return e>=o.left&&e<=o.right&&r>=o.top&&r<=o.bottom}ontouchstart(t){let s=null;this.supportsTouch&&t instanceof TouchEvent&&(s=t.touches[0]),s?(this.startX=s.pageX,this.startY=s.pageY):(document.addEventListener("mouseup",this.mouseUp,{passive:!0}),document.addEventListener("mousemove",this.mouseMove,{passive:!0})),s&&(this._prevDragX=s.pageX,this._prevDragY=s.pageY),t instanceof MouseEvent&&(this._prevDragX=t.x,this._prevDragY=t.y),this._canScroll=this._isTouchInside(t)}ontouchmove(t){if(!this._canScroll)return;const s=this._container,o=this.supportsTouch?t.touches[0]:null,e=this.supportsTouch?o.pageX:t.x,r=this.supportsTouch?o.pageY:t.y;s.scrollLeft+=this._prevDragX-e,s.scrollTop+=this._prevDragY-r,this.fireEvent(g,{isLeft:e>this._prevDragX,isRight:e<this._prevDragX}),this.cachedValue.dragX=this._prevDragX,this.cachedValue.dragY=this._prevDragY,this._prevDragX=e,this._prevDragY=r}ontouchend(t){if(this.supportsTouch){const a=Math.abs(t.changedTouches[0].pageX-this.startX),n=Math.abs(t.changedTouches[0].pageY-this.startY);if(a<10&&n<10)return}if(!this._canScroll)return;const s=this._container,o=this.supportsTouch?t.changedTouches[0].pageX:t.x,e=this.supportsTouch?t.changedTouches[0].pageY:t.y;s.scrollLeft+=this._prevDragX-o,s.scrollTop+=this._prevDragY-e;const h=o===this._prevDragX?this.cachedValue.dragX:o;this.fireEvent(v,{isLeft:h<this._prevDragX,isRight:h>this._prevDragX}),this._prevDragX=o,this._prevDragY=e,this.supportsTouch||(document.removeEventListener("mousemove",this.mouseMove),document.removeEventListener("mouseup",this.mouseUp))}}export{m as S};
