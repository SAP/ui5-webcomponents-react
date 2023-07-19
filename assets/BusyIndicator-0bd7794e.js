import{r as p,U as _,l as v}from"./UI5Element-11982a12.js";import{b as a,l as r,d as y,s as g,a as w,p as u,c as x,f as I}from"./withWebComponent-03662f7f.js";import{m as B}from"./Icons-234bf59e.js";import{I as T}from"./Integer-f7f172c9.js";import z from"./Label-f867a533.js";import{o as $}from"./class-map-341004db.js";import{B as k}from"./i18n-defaults-1a83921e.js";var b;(function(i){i.Small="Small",i.Medium="Medium",i.Large="Large"})(b||(b={}));const f=b;function E(i,t,e){return a`<div class="${$(this.classes.root)}">${this._isBusy?L.call(this,i,t,e):void 0}<slot></slot>${this._isBusy?S.call(this,i,t,e):void 0}</div>`}function L(i,t,e){return a`<div class="ui5-busy-indicator-busy-area" title="${r(this.ariaTitle)}" tabindex="0" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Busy" aria-labelledby="${r(this.labelId)}" data-sap-focus-ref><div class="ui5-busy-indicator-circles-wrapper"><div class="ui5-busy-indicator-circle circle-animation-0"></div><div class="ui5-busy-indicator-circle circle-animation-1"></div><div class="ui5-busy-indicator-circle circle-animation-2"></div></div>${this.text?M.call(this,i,t,e):void 0}</div>`}function M(i,t,e){return e?a`<${y("ui5-label",t,e)} id="${r(this._id)}-label" class="ui5-busy-indicator-text">${r(this.text)}</${y("ui5-label",t,e)}>`:a`<ui5-label id="${r(this._id)}-label" class="ui5-busy-indicator-text">${r(this.text)}</ui5-label>`}function S(i,t,e){return a`<span data-ui5-focus-redirect tabindex="0" @focusin="${this._redirectFocus}"></span>`}p("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);p("@ui5/webcomponents","sap_fiori_3",async()=>w);const D={packageName:"@ui5/webcomponents",fileName:"themes/BusyIndicator.css",content:`:host(:not([hidden])) {
	display: inline-block;
}

:host([_is-busy]) {
	color: var(--_ui5_busy_indicator_color);
}

:host([size="Small"]) .ui5-busy-indicator-root {
	min-width: 1.5rem;
	min-height: .5rem;
}

:host([size="Small"][text]:not([text=""])) .ui5-busy-indicator-root {
	min-height: 1.75rem;
}

:host([size="Small"]) .ui5-busy-indicator-circle {
	width: .5rem;
	height: .5rem;
}

:host(:not([size])) .ui5-busy-indicator-root,
:host([size="Medium"]) .ui5-busy-indicator-root {
	min-width: 3rem;
	min-height: 1rem;
}

:host(:not([size])[text]:not([text=""])) .ui5-busy-indicator-root,
:host([size="Medium"][text]:not([text=""])) .ui5-busy-indicator-root {
	min-height: 2.25rem;
}

:host(:not([size])) .ui5-busy-indicator-circle,
:host([size="Medium"])  .ui5-busy-indicator-circle {
	width: 1rem;
	height: 1rem;
}

:host([size="Large"]) .ui5-busy-indicator-root {
	min-width: 6rem;
	min-height: 2rem;
}

:host([size="Large"][text]:not([text=""])) .ui5-busy-indicator-root {
	min-height: 3.25rem;
}

:host([size="Large"]) .ui5-busy-indicator-circle {
	width: 2rem;
	height: 2rem;
}

.ui5-busy-indicator-root {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: inherit;
	height: inherit;
}

.ui5-busy-indicator-busy-area {
	position: absolute;
	z-index: 99;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: inherit;
	flex-direction: column;
}

.ui5-busy-indicator-busy-area:focus-visible {
	outline: var(--_ui5_busy_indicator_focus_outline);
	outline-offset: -2px;
    border-radius: var(--_ui5_busy_indicator_focus_border_radius);
}

.ui5-busy-indicator-circles-wrapper {
	line-height: 0;
}

.ui5-busy-indicator-circle {
	display: inline-block;
	background-color: currentColor;
	border-radius: 50%;
}

.ui5-busy-indicator-circle::before {
	content: "";
	width: 100%;
	height: 100%;
	border-radius: 100%;
}

.circle-animation-0 {
	animation: grow 1.6s infinite cubic-bezier(0.32, 0.06, 0.85, 1.11);
}

.circle-animation-1 {
	animation: grow 1.6s infinite cubic-bezier(0.32, 0.06, 0.85, 1.11);
	animation-delay: 200ms;
}

.circle-animation-2 {
	animation: grow 1.6s infinite cubic-bezier(0.32, 0.06, 0.85, 1.11);
	animation-delay: 400ms;
}

.ui5-busy-indicator-text {
	width: 100%;
	margin-top: .25rem;
	text-align: center;
}

@keyframes grow {
	0%, 50%, 100% {
		-webkit-transform: scale(0.5);
		-moz-transform: scale(0.5);
		transform: scale(0.5);
	}
	25% {
		-webkit-transform: scale(1);
		-moz-transform: scale(1);
		transform: scale(1);
	}
}
`};var s=globalThis&&globalThis.__decorate||function(i,t,e,c){var l=arguments.length,o=l<3?t:c===null?c=Object.getOwnPropertyDescriptor(t,e):c,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,c);else for(var h=i.length-1;h>=0;h--)(d=i[h])&&(o=(l<3?d(o):l>3?d(t,e,o):d(t,e))||o);return l>3&&o&&Object.defineProperty(t,e,o),o},m;let n=m=class extends _{constructor(){super(),this._keydownHandler=this._handleKeydown.bind(this),this._preventEventHandler=this._preventEvent.bind(this)}onEnterDOM(){this.addEventListener("keydown",this._keydownHandler,{capture:!0}),this.addEventListener("keyup",this._preventEventHandler,{capture:!0})}onExitDOM(){this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this.removeEventListener("keydown",this._keydownHandler,!0),this.removeEventListener("keyup",this._preventEventHandler,!0)}static async onDefine(){m.i18nBundle=await v("@ui5/webcomponents")}get ariaTitle(){return m.i18nBundle.getText(k)}get labelId(){return this.text?`${this._id}-label`:void 0}get classes(){return{root:{"ui5-busy-indicator-root":!0}}}onBeforeRendering(){this.active?!this._isBusy&&!this._busyTimeoutId&&(this._busyTimeoutId=setTimeout(()=>{delete this._busyTimeoutId,this._isBusy=!0},Math.max(0,this.delay))):(this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this._isBusy=!1)}_handleKeydown(t){this._isBusy&&(t.stopImmediatePropagation(),B(t)&&(this.focusForward=!0,this.shadowRoot.querySelector("[data-ui5-focus-redirect]").focus(),this.focusForward=!1))}_preventEvent(t){this._isBusy&&t.stopImmediatePropagation()}_redirectFocus(t){this.focusForward||(t.preventDefault(),this.shadowRoot.querySelector(".ui5-busy-indicator-busy-area").focus())}};s([u()],n.prototype,"text",void 0);s([u({type:f,defaultValue:f.Medium})],n.prototype,"size",void 0);s([u({type:Boolean})],n.prototype,"active",void 0);s([u({validator:T,defaultValue:1e3})],n.prototype,"delay",void 0);s([u({type:Boolean})],n.prototype,"_isBusy",void 0);n=m=s([x({tag:"ui5-busy-indicator",languageAware:!0,styles:D,renderer:I,template:E,dependencies:[z]})],n);n.define();const O=n,A=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));export{f as B,O as a,A as b};
//# sourceMappingURL=BusyIndicator-0bd7794e.js.map
