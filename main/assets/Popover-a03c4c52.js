import{e as b,l as T,a as W,b as V,p as u,c as F}from"./withWebComponent-d4224c1c.js";import{s as I}from"./slot-76e48863.js";import{D as G,I as O}from"./Integer-f7f172c9.js";import{e as j}from"./Device-99b8bbf4.js";import{n as R,a as B,o as X}from"./UI5Element-78be0f3d.js";import{a as Y,r as q,g as K,b as U,c as x,s as Z}from"./PopupsCommon.css-1eb36bcf.js";import{s as A}from"./style-map-54298215.js";import{o as L}from"./class-map-18f572ce.js";import{s as J}from"./BrowserScrollbar.css-119d6915.js";var M;(function(n){n.Center="Center",n.Left="Left",n.Right="Right",n.Stretch="Stretch"})(M||(M={}));const c=M;var $;(function(n){n.Left="Left",n.Right="Right",n.Top="Top",n.Bottom="Bottom"})($||($={}));const a=$;var C;(function(n){n.Center="Center",n.Top="Top",n.Bottom="Bottom",n.Stretch="Stretch"})(C||(C={}));const v=C;class Q extends G{static isValid(t){return typeof t=="string"||t instanceof HTMLElement}static propertyToAttribute(t){return t instanceof HTMLElement?null:t}}let E;const S=300,d=[],P=()=>{d.forEach(n=>{n.instance.reposition()})},z=()=>{document.activeElement.tagName==="IFRAME"&&pt().reverse().forEach(n=>n.instance.close(!1,!1,!0))},tt=()=>{E=setInterval(()=>{P(),z()},S)},et=()=>{clearInterval(E)},ot=()=>{document.body.addEventListener("scroll",P,{capture:!0})},nt=()=>{document.body.removeEventListener("scroll",P,{capture:!0})},it=n=>{n&&n.shadowRoot.addEventListener("scroll",P,{capture:!0})},rt=n=>{n&&n.shadowRoot.removeEventListener("scroll",P,{capture:!0})},st=()=>{document.addEventListener("mousedown",H)},at=()=>{document.removeEventListener("mousedown",H)},H=n=>{const t=K();if(!(t.length===0||!D(t[t.length-1].instance)))for(let o=t.length-1;o!==-1;o--){const i=t[o].instance;if(i.isModal||i.isOpenerClicked(n))return;if(R(n,i.getBoundingClientRect()))break;i.close()}},lt=n=>{const t=ct(n);Y(n,t),d.push({instance:n,parentPopovers:t}),it(n),d.length===1&&(ot(),st(),tt())},ht=n=>{const t=[n];for(let e=0;e<d.length;e++){const o=d[e].parentPopovers.indexOf(n);d[e].parentPopovers.length>0&&o>-1&&t.push(d[e].instance)}for(let e=t.length-1;e>=0;e--)for(let o=0;o<d.length;o++){let i=-1;t[e]===d[o].instance&&(i=o),i>=0&&(q(d[i].instance),rt(d[i].instance),d.splice(i,1)[0].instance.close(!1,!0))}d.length||(nt(),at(),et())},pt=()=>d,ct=n=>{let t=n.parentNode;const e=[];for(;t&&t.parentNode;){for(let o=0;o<d.length;o++)t===d[o].instance&&e.push(t);t=t.parentNode}return e};function dt(n,t,e){return b`<section style="${A(this.styles.root)}" class="${L(this.classes.root)}" role="${T(this._role)}" aria-modal="${T(this._ariaModal)}" aria-label="${T(this._ariaLabel)}" aria-labelledby="${T(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${A(this.styles.arrow)}"></span>${this._displayHeader?ut.call(this,n,t,e):void 0}<div style="${A(this.styles.content)}" class="${L(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter?wt.call(this,n,t,e):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function ut(n,t,e){return b`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length?ft.call(this,n,t,e):mt.call(this,n,t,e)}</header>`}function ft(n,t,e){return b`<slot name="header"></slot>`}function mt(n,t,e){return b`<h1 class="ui5-popup-header-text">${T(this.headerText)}</h1>`}function wt(n,t,e){return b`${this.footer.length?gt.call(this,n,t,e):void 0}`}function gt(n,t,e){return b`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}B("@ui5/webcomponents-theming","sap_fiori_3",async()=>W);B("@ui5/webcomponents","sap_fiori_3",async()=>V);const _t={packageName:"@ui5/webcomponents",fileName:"themes/Popover.css",content:`:host {
	box-shadow: var(--_ui5_popover_box_shadow);
	background-color: var(--_ui5_popover_background);
	max-width: calc(100vw - (100vw - 100%) - 2 * var(--_ui5_popup_viewport_margin));
}

:host([hide-arrow]) {
	box-shadow: var(--_ui5_popover_no_arrow_box_shadow);
}

:host([opened][actual-placement-type="Top"]) {
	margin-top: var(--_ui5-popover-margin-bottom);
}

:host([opened][actual-placement-type="Bottom"]) {
	margin-top: var(--_ui5-popover-margin-top);
}

/* pointing upward arrow */

:host([actual-placement-type="Bottom"]) .ui5-popover-arrow {
	left: calc(50% - 0.5625rem);
	top: -0.5rem;
	height: 0.5625rem;
}

:host([actual-placement-type="Bottom"]) .ui5-popover-arrow:after {
	margin: var(--_ui5_popover_upward_arrow_margin);
}

/* pointing right arrow */

:host([actual-placement-type="Left"]) .ui5-popover-arrow {
	top: calc(50% - 0.5625rem);
	right: -0.5625rem;
	width: 0.5625rem;
}

:host([actual-placement-type="Left"]) .ui5-popover-arrow:after {
	margin: var(--_ui5_popover_right_arrow_margin);
}

/* pointing downward arrow */

:host([actual-placement-type="Top"]) .ui5-popover-arrow {
	left: calc(50% - 0.5625rem);
	height: 0.5625rem;
	top: 100%;
}

:host([actual-placement-type="Top"]) .ui5-popover-arrow:after {
	margin: var(--_ui5_popover_downward_arrow_margin);
}

/* pointing left arrow */

:host(:not([actual-placement-type])) .ui5-popover-arrow,
:host([actual-placement-type="Right"]) .ui5-popover-arrow {
	left: -0.5625rem;
	top: calc(50% - 0.5625rem);
	width: 0.5625rem;
	height: 1rem;
}

:host(:not([actual-placement-type])) .ui5-popover-arrow:after,
:host([actual-placement-type="Right"]) .ui5-popover-arrow:after {
	margin: var(--_ui5_popover_left_arrow_margin);
}

:host([hide-arrow]) .ui5-popover-arrow {
	display: none;
}

.ui5-popover-root {
	min-width: 6.25rem;
}

.ui5-popover-arrow {
	pointer-events: none;
	display: block;
	width: 1rem;
	height: 1rem;
	position: absolute;
	overflow: hidden;
}

.ui5-popover-arrow:after {
	content: "";
	display: block;
	width: 0.7rem;
	height: 0.7rem;
	background-color: var(--_ui5_popover_background);
	box-shadow: var(--_ui5_popover_box_shadow);
	transform: rotate(-45deg);
}
`};var p=globalThis&&globalThis.__decorate||function(n,t,e,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,t,e,o);else for(var h=n.length-1;h>=0;h--)(s=n[h])&&(r=(i<3?s(r):i>3?s(t,e,r):s(t,e))||r);return i>3&&r&&Object.defineProperty(t,e,r),r},_;const k=8;let l=_=class extends U{static get VIEWPORT_MARGIN(){return 10}constructor(){super()}onAfterRendering(){if(!this.isOpen()&&this.open){let t;if(this.opener instanceof HTMLElement?t=this.opener:typeof this.opener=="string"&&(t=this.getRootNode().getElementById(this.opener)),!t){console.warn("Valid opener id is required.");return}this.showAt(t)}else this.isOpen()&&!this.open&&this.close()}isOpenerClicked(t){const e=t.target;if(e===this._opener)return!0;const o=e;return o.getFocusDomRef&&o.getFocusDomRef()===this._opener?!0:t.composedPath().indexOf(this._opener)>-1}async showAt(t,e=!1){!t||this.opened||(this._opener=t,this._openerRect=t.getBoundingClientRect(),await super._open(e))}_addOpenedPopup(){lt(this)}_removeOpenedPopup(){ht(this)}shouldCloseDueToOverflow(t,e){const i={Right:e.right,Left:e.left,Top:e.top,Bottom:e.bottom},r=X(this._opener);let s=!1,h=!1;if(r.showAt){const f=r.contentDOM.getBoundingClientRect();s=e.top>f.top+f.height,h=e.top+e.height<f.top}return i[t]<0||i[t]+32>r.innerHeight||s||h}shouldCloseDueToNoOpener(t){return t.top===0&&t.bottom===0&&t.left===0&&t.right===0}isOpenerOutsideViewport(t){return t.bottom<0||t.top>window.innerHeight||t.right<0||t.left>window.innerWidth}_resize(){super._resize(),this.opened&&this.reposition()}reposition(){this._show()}_show(){let t;const e=this.getPopoverSize();if(e.width===0||e.height===0)return;if(this.isOpen()&&(this._openerRect=this._opener.getBoundingClientRect()),this.shouldCloseDueToNoOpener(this._openerRect)&&this.isFocusWithin()?t=this._oldPlacement:t=this.calcPlacement(this._openerRect,e),this._preventRepositionAndClose||this.isOpenerOutsideViewport(this._openerRect))return this.close();this._oldPlacement=t,this.actualPlacementType=t.placementType;let o=x(this._left,_.VIEWPORT_MARGIN,document.documentElement.clientWidth-e.width-_.VIEWPORT_MARGIN);this.actualPlacementType===a.Right&&(o=Math.max(o,this._left));let i=x(this._top,_.VIEWPORT_MARGIN,document.documentElement.clientHeight-e.height-_.VIEWPORT_MARGIN);this.actualPlacementType===a.Bottom&&(i=Math.max(i,this._top)),this.arrowTranslateX=t.arrow.x,this.arrowTranslateY=t.arrow.y,i=this._adjustForIOSKeyboard(i),Object.assign(this.style,{top:`${i}px`,left:`${o}px`}),super._show(),this.horizontalAlign===c.Stretch&&this._width&&(this.style.width=this._width)}_adjustForIOSKeyboard(t){if(!j())return t;const e=Math.ceil(this.getBoundingClientRect().top);return t+(Number.parseInt(this.style.top||"0")-e)}getPopoverSize(){this.opened||Object.assign(this.style,{display:"block",top:"-10000px",left:"-10000px"});const t=this.getBoundingClientRect(),e=t.width,o=t.height;return{width:e,height:o}}get arrowDOM(){return this.shadowRoot.querySelector(".ui5-popover-arrow")}calcPlacement(t,e){let o=0,i=0;const r=this.allowTargetOverlap,s=document.documentElement.clientWidth,h=document.documentElement.clientHeight;let f=h,g=s;const w=this.getActualPlacementType(t,e);this._preventRepositionAndClose=this.shouldCloseDueToNoOpener(t)||this.shouldCloseDueToOverflow(w,t);const y=w===a.Top||w===a.Bottom;this.horizontalAlign===c.Stretch&&y?(e.width=t.width,this._width=`${t.width}px`):this.verticalAlign===v.Stretch&&!y&&(e.height=t.height);const m=this.hideArrow?0:k;switch(w){case a.Top:o=this.getVerticalLeft(t,e),i=Math.max(t.top-e.height-m,0),r||(f=t.top-m);break;case a.Bottom:o=this.getVerticalLeft(t,e),i=t.bottom+m,r?i=Math.max(Math.min(i,h-e.height),0):f=h-t.bottom-m;break;case a.Left:o=Math.max(t.left-e.width-m,0),i=this.getHorizontalTop(t,e),r||(g=t.left-m);break;case a.Right:o=t.left+t.width+m,i=this.getHorizontalTop(t,e),r?o=Math.max(Math.min(o,s-e.width),0):g=s-t.right-m;break}y?e.width>s||o<0?o=0:o+e.width>s&&(o-=o+e.width-s):e.height>h||i<0?i=0:i+e.height>h&&(i-=i+e.height-h),this._maxHeight=Math.round(f-_.VIEWPORT_MARGIN),this._maxWidth=Math.round(g-_.VIEWPORT_MARGIN),(this._left===void 0||Math.abs(this._left-o)>1.5)&&(this._left=Math.round(o)),(this._top===void 0||Math.abs(this._top-i)>1.5)&&(this._top=Math.round(i));const N=Number.parseInt(window.getComputedStyle(this).getPropertyValue("border-radius"));return{arrow:this.getArrowPosition(t,e,o,i,y,N),top:this._top,left:this._left,placementType:w}}getArrowPosition(t,e,o,i,r,s){const h=this._actualHorizontalAlign;let f=h===c.Center||h===c.Stretch;h===c.Right&&o<=t.left&&(f=!0),h===c.Left&&o+e.width>=t.left+t.width&&(f=!0);let g=0;r&&f&&(g=t.left+t.width/2-o-e.width/2);let w=0;r||(w=t.top+t.height/2-i-e.height/2);const y=e.height/2-s-k/2;w=x(w,-y,y);const m=e.width/2-s-k/2;return g=x(g,-m,m),{x:Math.round(g),y:Math.round(w)}}fallbackPlacement(t,e,o,i){if(o.left>i.width)return a.Left;if(t-o.right>o.left)return a.Right;if(e-o.bottom>i.height)return a.Bottom;if(e-o.bottom<o.top)return a.Top}getActualPlacementType(t,e){const o=this.placementType;let i=o;const r=document.documentElement.clientWidth,s=document.documentElement.clientHeight;switch(o){case a.Top:t.top<e.height&&t.top<s-t.bottom&&(i=a.Bottom);break;case a.Bottom:s-t.bottom<e.height&&s-t.bottom<t.top&&(i=a.Top);break;case a.Left:t.left<e.width&&(i=this.fallbackPlacement(r,s,t,e)||o);break;case a.Right:r-t.right<e.width&&(i=this.fallbackPlacement(r,s,t,e)||o);break}return i}getVerticalLeft(t,e){const o=this._actualHorizontalAlign;let i=0;switch(o){case c.Center:case c.Stretch:i=t.left-(e.width-t.width)/2;break;case c.Left:i=t.left;break;case c.Right:i=t.right-e.width;break}return i}getHorizontalTop(t,e){let o=0;switch(this.verticalAlign){case v.Center:case v.Stretch:o=t.top-(e.height-t.height)/2;break;case v.Top:o=t.top;break;case v.Bottom:o=t.bottom-e.height;break}return o}get isModal(){return this.modal}get shouldHideBackdrop(){return this.hideBackdrop}get _ariaLabelledBy(){if(!this._ariaLabel&&this._displayHeader)return"ui5-popup-header"}get styles(){return{...super.styles,root:{"max-height":this._maxHeight?`${this._maxHeight}px`:"","max-width":this._maxWidth?`${this._maxWidth}px`:""},arrow:{transform:`translate(${this.arrowTranslateX}px, ${this.arrowTranslateY}px)`}}}get classes(){const t=super.classes;return t.root["ui5-popover-root"]=!0,t}get _displayHeader(){return!!(this.header.length||this.headerText)}get _displayFooter(){return!0}get _actualHorizontalAlign(){if(this.effectiveDir==="rtl"){if(this.horizontalAlign===c.Left)return c.Right;if(this.horizontalAlign===c.Right)return c.Left}return this.horizontalAlign}};p([u()],l.prototype,"headerText",void 0);p([u({type:a,defaultValue:a.Right})],l.prototype,"placementType",void 0);p([u({type:c,defaultValue:c.Center})],l.prototype,"horizontalAlign",void 0);p([u({type:v,defaultValue:v.Center})],l.prototype,"verticalAlign",void 0);p([u({type:Boolean})],l.prototype,"modal",void 0);p([u({type:Boolean})],l.prototype,"hideBackdrop",void 0);p([u({type:Boolean})],l.prototype,"hideArrow",void 0);p([u({type:Boolean})],l.prototype,"allowTargetOverlap",void 0);p([u({validator:Q})],l.prototype,"opener",void 0);p([u({type:Boolean})],l.prototype,"disableScrolling",void 0);p([u({validator:O,defaultValue:0,noAttribute:!0})],l.prototype,"arrowTranslateX",void 0);p([u({validator:O,defaultValue:0,noAttribute:!0})],l.prototype,"arrowTranslateY",void 0);p([u({type:a,defaultValue:a.Right})],l.prototype,"actualPlacementType",void 0);p([u({validator:O,noAttribute:!0})],l.prototype,"_maxHeight",void 0);p([u({validator:O,noAttribute:!0})],l.prototype,"_maxWidth",void 0);p([I({type:HTMLElement})],l.prototype,"header",void 0);p([I({type:HTMLElement})],l.prototype,"footer",void 0);l=_=p([F({tag:"ui5-popover",styles:[J,Z,_t],template:dt})],l);const D=n=>"showAt"in n;l.define();const yt=l,Lt=Object.freeze(Object.defineProperty({__proto__:null,default:yt,instanceOfPopover:D},Symbol.toStringTag,{value:"Module"}));export{Q as D,a as P,c as a,v as b,yt as c,Lt as d};
//# sourceMappingURL=Popover-a03c4c52.js.map
