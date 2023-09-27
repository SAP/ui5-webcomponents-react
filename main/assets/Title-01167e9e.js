import{r as m,U as b}from"./UI5Element-fe43d284.js";import{b as n,l as r,s as H,a as g,p as v,c as z,f as w}from"./withWebComponent-40b4b429.js";import{W as f}from"./WrappingType-b81e595a.js";var d;(function(e){e.H1="H1",e.H2="H2",e.H3="H3",e.H4="H4",e.H5="H5",e.H6="H6"})(d||(d={}));const u=d;function y(e,t,i){return n`${this.h1?_.call(this,e,t,i):void 0}${this.h2?$.call(this,e,t,i):void 0}${this.h3?x.call(this,e,t,i):void 0}${this.h4?T.call(this,e,t,i):void 0}${this.h5?k.call(this,e,t,i):void 0}${this.h6?S.call(this,e,t,i):void 0}`}function _(e,t,i){return n`<h1 class="ui5-title-root"><span id="${r(this._id)}-inner"><slot></slot></span></h1>`}function $(e,t,i){return n`<h2 class="ui5-title-root"><span id="${r(this._id)}-inner"><slot></slot></span></h2>`}function x(e,t,i){return n`<h3 class="ui5-title-root"><span id="${r(this._id)}-inner"><slot></slot></span></h3>`}function T(e,t,i){return n`<h4 class="ui5-title-root"><span id="${r(this._id)}-inner"><slot></slot></span></h4>`}function k(e,t,i){return n`<h5 class="ui5-title-root"><span id="${r(this._id)}-inner"><slot></slot></span></h5>`}function S(e,t,i){return n`<h6 class="ui5-title-root"><span id="${r(this._id)}-inner"><slot></slot></span></h6>`}m("@ui5/webcomponents-theming","sap_fiori_3",async()=>H);m("@ui5/webcomponents","sap_fiori_3",async()=>g);const F={packageName:"@ui5/webcomponents",fileName:"themes/Title.css",content:':host(:not([hidden])){cursor:text;display:block}:host{color:var(--sapGroup_TitleTextColor);font-family:"72override",var(--sapFontHeaderFamily);font-size:var(--sapFontHeader2Size);max-width:100%;text-shadow:var(--sapContent_TextShadow)}.ui5-title-root{-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0;box-sizing:border-box;cursor:inherit;display:inline-block;font-size:inherit;font-weight:400;margin:0;max-width:100%;overflow:hidden;position:relative;text-overflow:ellipsis;vertical-align:bottom;white-space:nowrap}:host([wrapping-type=Normal]) .ui5-title-root,:host([wrapping-type=Normal]) ::slotted(*){white-space:pre-line}::slotted(*){font-family:inherit;font-size:inherit;text-shadow:inherit}:host([level=H1]){font-size:var(--sapFontHeader1Size)}:host([level=H2]){font-size:var(--sapFontHeader2Size)}:host([level=H3]){font-size:var(--sapFontHeader3Size)}:host([level=H4]){font-size:var(--sapFontHeader4Size)}:host([level=H5]){font-size:var(--sapFontHeader5Size)}:host([level=H6]){font-size:var(--sapFontHeader6Size)}'};var c=globalThis&&globalThis.__decorate||function(e,t,i,a){var l=arguments.length,o=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,a);else for(var p=e.length-1;p>=0;p--)(h=e[p])&&(o=(l<3?h(o):l>3?h(t,i,o):h(t,i))||o);return l>3&&o&&Object.defineProperty(t,i,o),o};let s=class extends b{get normalizedLevel(){return this.level.toLowerCase()}get h1(){return this.normalizedLevel==="h1"}get h2(){return this.normalizedLevel==="h2"}get h3(){return this.normalizedLevel==="h3"}get h4(){return this.normalizedLevel==="h4"}get h5(){return this.normalizedLevel==="h5"}get h6(){return this.normalizedLevel==="h6"}};c([v({type:f,defaultValue:f.None})],s.prototype,"wrappingType",void 0);c([v({type:u,defaultValue:u.H2})],s.prototype,"level",void 0);s=c([z({tag:"ui5-title",renderer:w,template:y,styles:F})],s);s.define();const L=s,P=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{u as T,L as a,P as b};
//# sourceMappingURL=Title-01167e9e.js.map
