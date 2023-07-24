import{r as f,U as p}from"./UI5Element-11982a12.js";import{b as g,l as m,s as _,p as v,c as y,f as w}from"./withWebComponent-99b005ba.js";import{s as h}from"./slot-76e48863.js";import{R as c}from"./ResizeHandler-9ebe913c.js";import{o as x}from"./class-map-b4d8f3b0.js";import{s as R}from"./parameters-bundle.css-f9dc8928.js";var u;(function(e){e.Header="Header",e.Subheader="Subheader",e.Footer="Footer",e.FloatingFooter="FloatingFooter"})(u||(u={}));const b=u;function B(e,t,n){return g`<div class="${x(this.classes.root)}" aria-label="${m(this.accInfo.label)}" role="toolbar" part="bar"><div class="ui5-bar-content-container ui5-bar-startcontent-container"><slot name="startContent"></slot></div><div class="ui5-bar-content-container ui5-bar-midcontent-container"><slot></slot></div><div class="ui5-bar-content-container ui5-bar-endcontent-container"><slot name="endContent"></slot></div></div>`}f("@ui5/webcomponents-theming","sap_fiori_3",async()=>_);f("@ui5/webcomponents-fiori","sap_fiori_3",async()=>R);const C={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Bar.css",content:`:host {
	background-color: var(--sapPageHeader_Background);
	height: var(--_ui5_bar_base_height);
	width: 100%;
	box-shadow: var(--sapContent_HeaderShadow);
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
	padding-inline-start: var(--_ui5_bar-start-container-padding-start);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
}

.ui5-bar-root .ui5-bar-content-container {
	min-width: calc(30% - calc(var(--_ui5_bar-start-container-padding-start)
							 + var(--_ui5_bar-end-container-padding-end)
						  + (2*var(--_ui5_bar-mid-container-padding-start-end))));
}

.ui5-bar-root.ui5-bar-root-shrinked .ui5-bar-content-container {
	min-width: 0px;
	overflow: hidden;
	height: 100%;
}

.ui5-bar-root .ui5-bar-endcontent-container {
	padding-inline-end: var(--_ui5_bar-end-container-padding-end);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
}

.ui5-bar-root .ui5-bar-midcontent-container {
	padding: 0 var(--_ui5_bar-mid-container-padding-start-end);
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
`};var s=globalThis&&globalThis.__decorate||function(e,t,n,a){var i=arguments.length,r=i<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,a);else for(var l=e.length-1;l>=0;l--)(d=e[l])&&(r=(i<3?d(r):i>3?d(t,n,r):d(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let o=class extends p{get accInfo(){return{label:this.design}}constructor(){super(),this._handleResizeBound=this.handleResize.bind(this)}handleResize(){const t=this.getDomRef(),n=t.offsetWidth,a=Array.from(t.children).some(i=>i.offsetWidth>n/3);t.classList.toggle("ui5-bar-root-shrinked",a)}get classes(){return{root:{"ui5-bar-root":!0}}}onBeforeRendering(){[...this.startContent,...this.middleContent,...this.endContent].forEach(t=>t.classList.add("ui5-bar-content"))}onEnterDOM(){c.register(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(t=>{c.register(t,this._handleResizeBound)},this)}onExitDOM(){c.deregister(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(t=>{c.deregister(t,this._handleResizeBound)},this)}};s([v({type:b,defaultValue:b.Header})],o.prototype,"design",void 0);s([h({type:HTMLElement})],o.prototype,"startContent",void 0);s([h({type:HTMLElement,default:!0})],o.prototype,"middleContent",void 0);s([h({type:HTMLElement})],o.prototype,"endContent",void 0);o=s([y({tag:"ui5-bar",fastNavigation:!0,renderer:w,styles:C,template:B})],o);o.define();const F=o,P=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));export{b as B,F as a,P as b};
//# sourceMappingURL=Bar-e19b5f8b.js.map
