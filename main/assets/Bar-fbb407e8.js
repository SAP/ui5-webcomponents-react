import{a as f,U as p}from"./UI5Element-978c7ec7.js";import{e as g,l as m,a as _,p as v,c as y,d as x}from"./withWebComponent-7b9bd1ee.js";import{s as u}from"./slot-76e48863.js";import{R as l}from"./ResizeHandler-d96d99c4.js";import{o as w}from"./class-map-6a9bd920.js";import{s as R}from"./parameters-bundle.css-5626463c.js";var h;(function(e){e.Header="Header",e.Subheader="Subheader",e.Footer="Footer",e.FloatingFooter="FloatingFooter"})(h||(h={}));const b=h;function B(e,t,n){return g`<div class="${w(this.classes.root)}" aria-label="${m(this.accInfo.label)}" role="toolbar" part="bar"><div class="ui5-bar-content-container ui5-bar-startcontent-container"><slot name="startContent"></slot></div><div class="ui5-bar-content-container ui5-bar-midcontent-container"><slot></slot></div><div class="ui5-bar-content-container ui5-bar-endcontent-container"><slot name="endContent"></slot></div></div>`}f("@ui5/webcomponents-theming","sap_fiori_3",async()=>_);f("@ui5/webcomponents-fiori","sap_fiori_3",async()=>R);const C={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Bar.css",content:`:host {
	background-color: var(--sapPageHeader_Background);
	height: var(--_ui5_bar_base_height);
	width: 100%;
	box-shadow: inset 0 -0.0625rem var(--sapPageHeader_BorderColor);
	display: block;
}

.ui5-bar-root {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: inherit;
	width: inherit;
	background-color: inherit;
	box-shadow: inherit;
	border-radius: inherit;
}

.ui5-bar-root .ui5-bar-startcontent-container {
	padding-inline-start: 0.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
}

.ui5-bar-root .ui5-bar-content-container {
	min-width: 30%;
}

.ui5-bar-root.ui5-bar-root-shrinked .ui5-bar-content-container {
	min-width: 0px;
	overflow: hidden;
	height: 100%;
}

.ui5-bar-root .ui5-bar-endcontent-container {
	padding-inline-end: 0.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
}

.ui5-bar-root .ui5-bar-midcontent-container {
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

:host([design="Footer"]){
	background-color: var(--sapPageFooter_Background);
	border-top: 0.0625rem solid var(--sapPageFooter_BorderColor);
	box-shadow: none;
}

:host([design="Subheader"]){
	height: var(--_ui5_bar_subheader_height);
}

:host([design="FloatingFooter"]){
	border-radius: var(--sapElement_BorderCornerRadius);
	background-color: var(--sapPageFooter_Background);
	box-shadow: var(--sapContent_Shadow1);
	border: none;
}

::slotted(*) {
	margin: 0 0.25rem;
}
`};var s=globalThis&&globalThis.__decorate||function(e,t,n,i){var a=arguments.length,o=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(d=e[c])&&(o=(a<3?d(o):a>3?d(t,n,o):d(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let r=class extends p{get accInfo(){return{label:this.design}}constructor(){super(),this._handleResizeBound=this.handleResize.bind(this)}handleResize(){const t=this.getDomRef(),n=t.offsetWidth,i=Array.from(t.children).some(a=>a.offsetWidth>n/3);t.classList.toggle("ui5-bar-root-shrinked",i)}get classes(){return{root:{"ui5-bar-root":!0}}}onBeforeRendering(){[...this.startContent,...this.middleContent,...this.endContent].forEach(t=>t.classList.add("ui5-bar-content"))}onEnterDOM(){l.register(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(t=>{l.register(t,this._handleResizeBound)},this)}onExitDOM(){l.deregister(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(t=>{l.deregister(t,this._handleResizeBound)},this)}};s([v({type:b,defaultValue:b.Header})],r.prototype,"design",void 0);s([u({type:HTMLElement})],r.prototype,"startContent",void 0);s([u({type:HTMLElement,default:!0})],r.prototype,"middleContent",void 0);s([u({type:HTMLElement})],r.prototype,"endContent",void 0);r=s([y({tag:"ui5-bar",fastNavigation:!0,renderer:x,styles:C,template:B})],r);r.define();const F=r,D=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));export{b as B,F as a,D as b};
//# sourceMappingURL=Bar-fbb407e8.js.map
