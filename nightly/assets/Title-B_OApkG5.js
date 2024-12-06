import{m as o,k as a,a as H,s as m,q as f,v,S as z,z as b}from"./withWebComponent-D2290JWW.js";import{s as w}from"./parameters-bundle.css-DlWxkghp.js";var u;(function(t){t.H1="H1",t.H2="H2",t.H3="H3",t.H4="H4",t.H5="H5",t.H6="H6"})(u||(u={}));const r=u;function g(t,e,i){return o`${this.h1?$.call(this,t,e,i):void 0}${this.h2?y.call(this,t,e,i):void 0}${this.h3?x.call(this,t,e,i):void 0}${this.h4?_.call(this,t,e,i):void 0}${this.h5?k.call(this,t,e,i):void 0}${this.h6?F.call(this,t,e,i):void 0}`}function $(t,e,i){return o`<h1 class="ui5-title-root"><span id="${a(this._id)}-inner"><slot></slot></span></h1>`}function y(t,e,i){return o`<h2 class="ui5-title-root"><span id="${a(this._id)}-inner"><slot></slot></span></h2>`}function x(t,e,i){return o`<h3 class="ui5-title-root"><span id="${a(this._id)}-inner"><slot></slot></span></h3>`}function _(t,e,i){return o`<h4 class="ui5-title-root"><span id="${a(this._id)}-inner"><slot></slot></span></h4>`}function k(t,e,i){return o`<h5 class="ui5-title-root"><span id="${a(this._id)}-inner"><slot></slot></span></h5>`}function F(t,e,i){return o`<h6 class="ui5-title-root"><span id="${a(this._id)}-inner"><slot></slot></span></h6>`}H("@ui5/webcomponents-theming","sap_horizon",async()=>m);H("@ui5/webcomponents","sap_horizon",async()=>w);const S={packageName:"@ui5/webcomponents",fileName:"themes/Title.css.ts",content:`:host(:not([hidden])){display:block;cursor:text}:host{max-width:100%;color:var(--sapGroup_TitleTextColor);font-size:var(--sapFontHeader5Size);font-family:"72override",var(--sapFontHeaderFamily);text-shadow:var(--sapContent_TextShadow)}.ui5-title-root{display:inline-block;position:relative;font-weight:400;font-size:inherit;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;max-width:100%;vertical-align:bottom;-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0;margin:0;cursor:inherit}:host{white-space:pre-line}:host([wrapping-type="None"]){white-space:nowrap}.ui5-title-root,:host ::slotted(*){white-space:inherit}::slotted(*){font-size:inherit;font-family:inherit;text-shadow:inherit}:host([size="H1"]){font-size:var(--sapFontHeader1Size)}:host([size="H2"]){font-size:var(--sapFontHeader2Size)}:host([size="H3"]){font-size:var(--sapFontHeader3Size)}:host([size="H4"]){font-size:var(--sapFontHeader4Size)}:host([size="H5"]){font-size:var(--sapFontHeader5Size)}:host([size="H6"]){font-size:var(--sapFontHeader6Size)}
`};var c=function(t,e,i,l){var h=arguments.length,s=h<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,i):l,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,l);else for(var d=t.length-1;d>=0;d--)(p=t[d])&&(s=(h<3?p(s):h>3?p(e,i,s):p(e,i))||s);return h>3&&s&&Object.defineProperty(e,i,s),s};let n=class extends z{constructor(){super(...arguments),this.wrappingType="Normal",this.level="H2",this.size="H5"}get h1(){return this.level===r.H1}get h2(){return this.level===r.H2}get h3(){return this.level===r.H3}get h4(){return this.level===r.H4}get h5(){return this.level===r.H5}get h6(){return this.level===r.H6}};c([f()],n.prototype,"wrappingType",void 0);c([f()],n.prototype,"level",void 0);c([f()],n.prototype,"size",void 0);n=c([v({tag:"ui5-title",renderer:b,template:g,styles:S})],n);n.define();const j=n;export{r as T,j as a};
