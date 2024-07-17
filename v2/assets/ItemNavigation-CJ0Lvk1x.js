import{C as _,K as a,c,D as d,p as l,F as u,J as I,Y as g}from"./Keys-F_3Gvx0K.js";import{t as m}from"./getActiveElement-kltGt_DR.js";import{v as f}from"./withWebComponent-DykTwaBJ.js";var s=(n=>(n.Auto="Auto",n.Vertical="Vertical",n.Horizontal="Horizontal",n.Paging="Paging",n))(s||{}),r=(n=>(n.Static="Static",n.Cyclic="Cyclic",n))(r||{});class S{constructor(t,e){if(!t.isUI5Element)throw new Error("The root web component must be a UI5 Element instance");if(this.rootWebComponent=t,this.rootWebComponent.addEventListener("keydown",this._onkeydown.bind(this)),this._initBound=this._init.bind(this),this.rootWebComponent.attachComponentStateFinalized(this._initBound),typeof e.getItemsCallback!="function")throw new Error("getItemsCallback is required");this._getItems=e.getItemsCallback,this._currentIndex=e.currentIndex||0,this._rowSize=e.rowSize||1,this._behavior=e.behavior||r.Static,this._navigationMode=e.navigationMode||s.Auto,this._affectedPropertiesNames=e.affectedPropertiesNames||[],this._skipItemsSize=e.skipItemsSize||null}setCurrentItem(t){const e=this._getItems().indexOf(t);if(e===-1){console.warn("The provided item is not managed by ItemNavigation",t);return}this._currentIndex=e,this._applyTabIndex()}setRowSize(t){this._rowSize=t}_init(){this._getItems().forEach((t,e)=>{t.forcedTabIndex=e===this._currentIndex?"0":"-1"})}_onkeydown(t){if(!this._canNavigate())return;const e=this._navigationMode===s.Horizontal||this._navigationMode===s.Auto,i=this._navigationMode===s.Vertical||this._navigationMode===s.Auto,h=this.rootWebComponent.effectiveDir==="rtl";if(h&&_(t)&&e)this._handleRight();else if(h&&a(t)&&e)this._handleLeft();else if(_(t)&&e)this._handleLeft();else if(a(t)&&e)this._handleRight();else if(c(t)&&i)this._handleUp();else if(d(t)&&i)this._handleDown();else if(l(t))this._handleHome();else if(u(t))this._handleEnd();else if(I(t))this._handlePageUp();else if(g(t))this._handlePageDown();else return;t.preventDefault(),this._applyTabIndex(),this._focusCurrentItem()}_handleUp(){const t=this._getItems().length;if(this._currentIndex-this._rowSize>=0){this._currentIndex-=this._rowSize;return}if(this._behavior===r.Cyclic){const e=this._currentIndex%this._rowSize,i=e===0?this._rowSize-1:e-1,h=Math.ceil(t/this._rowSize);let o=i+(h-1)*this._rowSize;o>t-1&&(o-=this._rowSize),this._currentIndex=o}else this._currentIndex=0}_handleDown(){const t=this._getItems().length;if(this._currentIndex+this._rowSize<t){this._currentIndex+=this._rowSize;return}if(this._behavior===r.Cyclic){const e=(this._currentIndex%this._rowSize+1)%this._rowSize;this._currentIndex=e}else this._currentIndex=t-1}_handleLeft(){const t=this._getItems().length;if(this._currentIndex>0){this._currentIndex-=1;return}this._behavior===r.Cyclic&&(this._currentIndex=t-1)}_handleRight(){const t=this._getItems().length;if(this._currentIndex<t-1){this._currentIndex+=1;return}this._behavior===r.Cyclic&&(this._currentIndex=0)}_handleHome(){const t=this._rowSize>1?this._rowSize:this._getItems().length;this._currentIndex-=this._currentIndex%t}_handleEnd(){const t=this._rowSize>1?this._rowSize:this._getItems().length;this._currentIndex+=t-1-this._currentIndex%t}_handlePageUp(){this._rowSize>1||this._handlePageUpFlat()}_handlePageDown(){this._rowSize>1||this._handlePageDownFlat()}_handlePageUpFlat(){if(this._skipItemsSize===null){this._currentIndex-=this._currentIndex;return}this._currentIndex+1>this._skipItemsSize?this._currentIndex-=this._skipItemsSize:this._currentIndex-=this._currentIndex}_handlePageDownFlat(){if(this._skipItemsSize===null){this._currentIndex=this._getItems().length-1;return}this._getItems().length-this._currentIndex-1>this._skipItemsSize?this._currentIndex+=this._skipItemsSize:this._currentIndex=this._getItems().length-1}_applyTabIndex(){const t=this._getItems();for(let e=0;e<t.length;e++)t[e].forcedTabIndex=e===this._currentIndex?"0":"-1";this._affectedPropertiesNames.forEach(e=>{const i=this.rootWebComponent[e];this.rootWebComponent[e]=Array.isArray(i)?[...i]:{...i}})}_focusCurrentItem(){const t=this._getCurrentItem();t&&t.focus()}_canNavigate(){const t=this._getCurrentItem(),e=m();return t&&t===e}_getCurrentItem(){const t=this._getItems();if(!t.length)return;for(;this._currentIndex>=t.length;)this._currentIndex-=this._rowSize;this._currentIndex<0&&(this._currentIndex=0);const e=t[this._currentIndex];if(!e)return;if(f(e))return e.getFocusDomRef();const i=this.rootWebComponent.getDomRef();if(i&&e.id)return i.querySelector(`[id="${e.id}"]`)}}export{S as f,r as l,s as r};
