import{r as m,U as h,l as b}from"./UI5Element-11982a12.js";import{b as y,l as d,s as w,a as g,p as c,c as v,f as x}from"./withWebComponent-99b005ba.js";import{W as u}from"./WrappingType-b81e595a.js";import{L as _}from"./i18n-defaults-1a83921e.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-626dc1bf.js";import"./index-f1f2c4b1.js";import"./jsx-runtime-d079401a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";function L(i,e,o){return y`<label class="ui5-label-root" @click=${this._onclick}><span class="ui5-label-text-wrapper"><bdi id="${d(this._id)}-bdi"><slot></slot></bdi></span><span aria-hidden="true" class="ui5-label-required-colon" data-colon="${d(this._colonSymbol)}"></span></label>`}m("@ui5/webcomponents-theming","sap_fiori_3",async()=>w);m("@ui5/webcomponents","sap_fiori_3",async()=>g);const q={packageName:"@ui5/webcomponents",fileName:"themes/Label.css",content:`:host(:not([hidden])) {
	display: inline-flex;
}

:host {
	max-width: 100%;
	color: var(--sapContent_LabelColor);
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	font-weight: normal;
	cursor: text;
}

.ui5-label-root {
	width: 100%;
	cursor: inherit;
}

:host([wrapping-type="Normal"]) .ui5-label-root {
	white-space: normal;
}

:host(:not([wrapping-type="Normal"])) .ui5-label-root {
	display: inline-flex;
	white-space: nowrap;
}

:host(:not([wrapping-type="Normal"])) .ui5-label-text-wrapper {
	text-overflow: ellipsis;
	overflow: hidden;
	display: inline-block;
	vertical-align: top;
	flex: 0 1 auto;
	min-width: 0;
}

:host([show-colon]) .ui5-label-required-colon:before {
	content: attr(data-colon);
}

:host([required]) .ui5-label-required-colon:after {
	content:"*";
	color: var(--sapField_RequiredColor);
	font-size: 1.25rem;
	font-weight: bold;
	position: relative;
	font-style: normal;
	vertical-align: middle;
	line-height: 0;
}

:host([required][show-colon]) .ui5-label-required-colon:after {
	margin-inline-start: .125rem;
}

bdi {
	padding-right: 0.075rem; /*1.2px - fix for last letter clipping issue when style is italic*/
}

:host([show-colon]) .ui5-label-required-colon {
	margin-inline-start: -0.05rem; /*0.8px - fix for last letter clipping issue when style is italic*/
	white-space: pre;
}`};var l=globalThis&&globalThis.__decorate||function(i,e,o,r){var a=arguments.length,t=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,e,o,r);else for(var f=i.length-1;f>=0;f--)(s=i[f])&&(t=(a<3?s(t):a>3?s(e,o,t):s(e,o))||t);return a>3&&t&&Object.defineProperty(e,o,t),t},p;let n=p=class extends h{static async onDefine(){p.i18nBundle=await b("@ui5/webcomponents-fiori")}_onclick(){if(!this.for)return;const e=this.getRootNode().querySelector(`#${this.for}`);e&&e.focus()}get _colonSymbol(){return p.i18nBundle.getText(_)}};l([c()],n.prototype,"for",void 0);l([c({type:Boolean})],n.prototype,"showColon",void 0);l([c({type:Boolean})],n.prototype,"required",void 0);l([c({type:u,defaultValue:u.None})],n.prototype,"wrappingType",void 0);n=p=l([v({tag:"ui5-label",renderer:x,template:L,styles:q})],n);n.define();const j=n;export{j as default};
//# sourceMappingURL=Label-62dd8470.js.map
