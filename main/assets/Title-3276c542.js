import{r as m,U as H}from"./UI5Element-11982a12.js";import{b as o,l as r,s as b,a as g,p as v,c as z,f as w}from"./withWebComponent-99b005ba.js";import{W as f}from"./WrappingType-b81e595a.js";var d;(function(t){t.H1="H1",t.H2="H2",t.H3="H3",t.H4="H4",t.H5="H5",t.H6="H6"})(d||(d={}));const u=d;function y(t,e,n){return o`${this.h1?_.call(this,t,e,n):void 0}${this.h2?$.call(this,t,e,n):void 0}${this.h3?x.call(this,t,e,n):void 0}${this.h4?L.call(this,t,e,n):void 0}${this.h5?T.call(this,t,e,n):void 0}${this.h6?k.call(this,t,e,n):void 0}`}function _(t,e,n){return o`<h1 class="ui5-title-root"><span id="${r(this._id)}-inner"><slot></slot></span></h1>`}function $(t,e,n){return o`<h2 class="ui5-title-root"><span id="${r(this._id)}-inner"><slot></slot></span></h2>`}function x(t,e,n){return o`<h3 class="ui5-title-root"><span id="${r(this._id)}-inner"><slot></slot></span></h3>`}function L(t,e,n){return o`<h4 class="ui5-title-root"><span id="${r(this._id)}-inner"><slot></slot></span></h4>`}function T(t,e,n){return o`<h5 class="ui5-title-root"><span id="${r(this._id)}-inner"><slot></slot></span></h5>`}function k(t,e,n){return o`<h6 class="ui5-title-root"><span id="${r(this._id)}-inner"><slot></slot></span></h6>`}m("@ui5/webcomponents-theming","sap_fiori_3",async()=>b);m("@ui5/webcomponents","sap_fiori_3",async()=>g);const S={packageName:"@ui5/webcomponents",fileName:"themes/Title.css",content:`:host(:not([hidden])) {
	display: block;
	cursor: text;
}

:host {
	max-width: 100%;
	color: var(--sapGroup_TitleTextColor);
	font-size: var(--sapFontHeader2Size);
	font-family: "72override", var(--sapFontHeaderFamily);
	text-shadow: var(--sapContent_TextShadow);
}

.ui5-title-root {
	display: inline-block;
	position: relative;
	font-weight: normal;
	font-size: inherit;
	box-sizing: border-box;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 100%;
	vertical-align: bottom;
	-webkit-margin-before: 0;
	-webkit-margin-after: 0;
	-webkit-margin-start: 0;
	-webkit-margin-end: 0;
	margin: 0;
	cursor: inherit;
}

:host([wrapping-type="Normal"]) .ui5-title-root,
:host([wrapping-type="Normal"]) ::slotted(*) {
	white-space: pre-line;
}

::slotted(*) {
	font-size: inherit;
	font-family: inherit;
	text-shadow: inherit;
}

/* Level H1 */

:host([level="H1"]) {
	font-size: var(--sapFontHeader1Size);
}

/* Level H2 */

:host([level="H2"]) {
	font-size: var(--sapFontHeader2Size);
}

/* Level H3 */

:host([level="H3"]) {
	font-size: var(--sapFontHeader3Size);
}

/* Level H4 */

:host([level="H4"]) {
	font-size: var(--sapFontHeader4Size);
}

/* Level H5 */

:host([level="H5"]) {
	font-size: var(--sapFontHeader5Size);
}

/* Level H6 */

:host([level="H6"]) {
	font-size: var(--sapFontHeader6Size);
}
`};var c=globalThis&&globalThis.__decorate||function(t,e,n,l){var a=arguments.length,i=a<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,n):l,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,l);else for(var p=t.length-1;p>=0;p--)(h=t[p])&&(i=(a<3?h(i):a>3?h(e,n,i):h(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i};let s=class extends H{get normalizedLevel(){return this.level.toLowerCase()}get h1(){return this.normalizedLevel==="h1"}get h2(){return this.normalizedLevel==="h2"}get h3(){return this.normalizedLevel==="h3"}get h4(){return this.normalizedLevel==="h4"}get h5(){return this.normalizedLevel==="h5"}get h6(){return this.normalizedLevel==="h6"}};c([v({type:f,defaultValue:f.None})],s.prototype,"wrappingType",void 0);c([v({type:u,defaultValue:u.H2})],s.prototype,"level",void 0);s=c([z({tag:"ui5-title",renderer:w,template:y,styles:S})],s);s.define();const F=s,P=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));export{u as T,F as a,P as b};
//# sourceMappingURL=Title-3276c542.js.map
