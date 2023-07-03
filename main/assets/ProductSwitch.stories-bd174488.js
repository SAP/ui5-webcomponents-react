import{j as w}from"./jsx-runtime-5926aa06.js";import{a as x,U as z,d as W,k as y}from"./UI5Element-3b11b083.js";import{p as G,o as Q,b,c as T,O as J,j as p}from"./Icons-f64cf5a7.js";import{h as K}from"./home-d5ed3c0f.js";import{_ as N}from"./iframe-1717c14f.js";import{e as s,l as n,a as D,p as r,c as E,d as O,w as R,s as q}from"./withWebComponent-d4224c1c.js";import{I as X,e as k}from"./Icon-9aa64f88.js";import{s as H}from"./parameters-bundle.css-f9dc8928.js";import{I as Y}from"./ItemNavigation-4baedd26.js";import{s as Z}from"./slot-76e48863.js";import{R as $}from"./ResizeHandler-13af62ac.js";import{I as tt}from"./Integer-f7f172c9.js";import{P as et}from"./i18n-defaults-1f5a0024.js";function ot(o,t,e){return s`<div class="ui5-product-switch-root" role="list" aria-label="${n(this._ariaLabelText)}" @focusin=${this._onfocusin} @keydown=${this._onkeydown} @click="${this.handleProductSwitchItemClick}"><slot></slot></div>`}x("@ui5/webcomponents-theming","sap_fiori_3",async()=>D);x("@ui5/webcomponents-fiori","sap_fiori_3",async()=>H);const it={packageName:"@ui5/webcomponents-fiori",fileName:"themes/ProductSwitch.css",content:`:host {
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
}

.ui5-product-switch-root {
	display: flex;
	flex-wrap: wrap;
	justify-content: inherit;
	align-items: inherit;
	width: 752px; /* 4 * item size */
	padding: 1.25rem .75rem;
}

:host([desktop-columns="3"]) .ui5-product-switch-root {
	width: 564px; /* 3 * item size */
}

@media only screen and (max-width: 900px) {
	.ui5-product-switch-root {
		width: 564px; /* 3 * item size */
	}
}

@media only screen and (max-width: 600px) {
	.ui5-product-switch-root,
	:host([desktop-columns="3"]) .ui5-product-switch-root {
		flex-direction: column;
		padding: 0;
		width: 100%;
	}
}
`};var S=globalThis&&globalThis.__decorate||function(o,t,e,l){var u=arguments.length,i=u<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,e):l,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,l);else for(var m=o.length-1;m>=0;m--)(h=o[m])&&(i=(u<3?h(i):u>3?h(t,e,i):h(t,e))||i);return u>3&&i&&Object.defineProperty(t,e,i),i},g;let _=g=class extends z{constructor(){super(),this._currentIndex=0,this._rowSize=4,this._itemNavigation=new Y(this,{rowSize:this._rowSize,getItemsCallback:()=>this.items}),this._handleResizeBound=this._handleResize.bind(this)}static get ROW_MIN_WIDTH(){return{ONE_COLUMN:600,THREE_COLUMN:900}}static async onDefine(){g.i18nBundle=await W("@ui5/webcomponents-fiori")}get _ariaLabelText(){return g.i18nBundle.getText(et)}onEnterDOM(){$.register(document.body,this._handleResizeBound)}onExitDOM(){$.deregister(document.body,this._handleResizeBound)}onBeforeRendering(){this.desktopColumns=this.items.length>6?4:3}_handleResize(){const t=document.body.clientWidth;t<=this.constructor.ROW_MIN_WIDTH.ONE_COLUMN?this._setRowSize(1):t<=this.constructor.ROW_MIN_WIDTH.THREE_COLUMN||this.items.length<=6?this._setRowSize(3):this._setRowSize(4)}handleProductSwitchItemClick(t){this.items.forEach(e=>{e.selected=!1}),t.target.selected=!0}_onfocusin(t){const e=t.target;this._itemNavigation.setCurrentItem(e),this._currentIndex=this.items.indexOf(e)}_setRowSize(t){this._rowSize=t,this._itemNavigation.setRowSize(t)}_onkeydown(t){G(t)?this._handleDown(t):Q(t)&&this._handleUp(t)}_handleDown(t){const e=this.items.length;this._currentIndex+this._rowSize>e&&t.stopPropagation()}_handleUp(t){this._currentIndex-this._rowSize<0&&t.stopPropagation()}};S([r({validator:tt})],_.prototype,"desktopColumns",void 0);S([Z({type:HTMLElement,default:!0})],_.prototype,"items",void 0);_=g=S([E({tag:"ui5-product-switch",renderer:O,styles:it,template:ot})],_);_.define();const nt=_,ct=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"})),v=R("ui5-product-switch",[],[],[],[],()=>N(()=>Promise.resolve().then(()=>ct),void 0,import.meta.url));v.displayName="ProductSwitch";try{v.displayName="ProductSwitch",v.__docgenInfo={description:'The `ProductSwitch` is an SAP Fiori specific web component that is used in `ShellBar` and allows the user to easily switch between products.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-ProductSwitch" target="_blank">UI5 Web Components Storybook</ui5-link>',displayName:"ProductSwitch",props:{children:{defaultValue:null,description:"Defines the items of the `ProductSwitch`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function st(o,t,e){return s`${this.targetSrc?rt.call(this,o,t,e):ht.call(this,o,t,e)}`}function rt(o,t,e){return s`<a class="ui5-product-switch-item-root" data-sap-focus-ref @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" tabindex=${n(this._tabIndex)} href="${n(this.targetSrc)}" target="${n(this.target)}">${this.icon?at.call(this,o,t,e):void 0}<span class="ui5-product-switch-item-text-content">${this.titleText?lt.call(this,o,t,e):void 0}${this.subtitleText?ut.call(this,o,t,e):void 0}</span></a>`}function at(o,t,e){return e?s`<${q("ui5-icon",t,e)} class="ui5-product-switch-item-icon" name="${n(this.icon)}"></${q("ui5-icon",t,e)}>`:s`<ui5-icon class="ui5-product-switch-item-icon" name="${n(this.icon)}"></ui5-icon>`}function lt(o,t,e){return s`<span class="ui5-product-switch-item-title">${n(this.titleText)}</span>`}function ut(o,t,e){return s`<span class="ui5-product-switch-item-subtitle">${n(this.subtitleText)}</span>`}function ht(o,t,e){return s`<div role="listitem" class="ui5-product-switch-item-root" data-sap-focus-ref @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" tabindex=${n(this._tabIndex)}>${this.icon?dt.call(this,o,t,e):void 0}<span class="ui5-product-switch-item-text-content">${this.titleText?pt.call(this,o,t,e):void 0}${this.subtitleText?mt.call(this,o,t,e):void 0}</span></div>`}function dt(o,t,e){return e?s`<${q("ui5-icon",t,e)} class="ui5-product-switch-item-icon" name="${n(this.icon)}"></${q("ui5-icon",t,e)}>`:s`<ui5-icon class="ui5-product-switch-item-icon" name="${n(this.icon)}"></ui5-icon>`}function pt(o,t,e){return s`<span class="ui5-product-switch-item-title">${n(this.titleText)}</span>`}function mt(o,t,e){return s`<span class="ui5-product-switch-item-subtitle">${n(this.subtitleText)}</span>`}x("@ui5/webcomponents-theming","sap_fiori_3",async()=>D);x("@ui5/webcomponents-fiori","sap_fiori_3",async()=>H);const wt={packageName:"@ui5/webcomponents-fiori",fileName:"themes/ProductSwitchItem.css",content:`:host {
	width: var(--_ui5_product_switch_item_width);
	height: var(--_ui5_product_switch_item_height);
	margin: .25rem;
	border-radius: .25rem;
	box-sizing: border-box;
	background:var(--sapList_Background);
}

:host([selected]) {
	background: var(--sapList_SelectionBackgroundColor);
	border: 0.125rem solid var(--sapList_SelectionBorderColor);
}

:host(:hover) {
	background:var(--sapList_Hover_Background);
}

:host([selected]:hover) {
	background: var(--sapList_Hover_SelectionBackground);
}

:host([active]),
:host([selected][active])  {
	background: var(--sapList_Active_Background);
}

:host([active]) .ui5-product-switch-item-root .ui5-product-switch-item-icon,
:host([active]) .ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title,
:host([active]) .ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle {
	color:var(--sapList_Active_TextColor);
}

:host([focused]) {
	outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	outline-offset:var(--_ui5_product_switch_item_outline_offset)
}

:host([active][focused]) {
	outline-color: var(--_ui5_product_switch_item_active_outline_color);
}

.ui5-product-switch-item-root {
	user-select: none;
	width: 100%;
	height: 100%;
	flex-direction: column;
	display: flex;
	align-items: center;
	text-decoration: none;
	outline: none;
	box-sizing: border-box;
	padding: .5rem;
	padding-top: 4rem;
	cursor: pointer;
	border: var(--_ui5_product_switch_item_border);
}

:host([icon]) .ui5-product-switch-item-root {
	padding-top: .5rem;
}

:host([selected]) .ui5-product-switch-item-root {
	padding: .375rem;
}

.ui5-product-switch-item-root .ui5-product-switch-item-icon {
	width: 3rem;
	height: 3rem;
	padding: .75rem;
	margin-bottom: .5rem;
	box-sizing: border-box;
	color: var(--sapContent_IconColor);
	pointer-events: none;
}

.ui5-product-switch-item-root .ui5-product-switch-item-text-content {
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 10.25rem;
}

.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle,
.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title {
	line-height: 1.25rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 100%;
	pointer-events: none;
	text-align: center;
}

.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title {
	font-size:var( --sapFontHeader6Size);
	color:var(--sapGroup_TitleTextColor);
}

.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title:only-child {
	white-space: normal;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle {
	font-size:var( --sapFontSmallSize);
	color:var(--sapContent_LabelColor);
}

@media only screen and (max-width: 600px) {
	:host {
		margin: 0;
		width: 100%;
		width: 100%;
		max-width: 600px;
		height: 5rem;
		border-radius: 0;
	}

	.ui5-product-switch-item-root {
		padding: 0 1rem;
		flex-direction: row;
	}

	:host([icon]) .ui5-product-switch-item-root {
		padding-top: 0;
	}

	.ui5-product-switch-item-root .ui5-product-switch-item-icon {
		padding: .875rem;
		color: var(--sapContent_NonInteractiveIconColor);
		margin: 0 .75rem 0 0;
	}

	.ui5-product-switch-item-root .ui5-product-switch-item-text-content {
		align-items: flex-start;
		max-width: 100%;
	}

	:host([icon]) .ui5-product-switch-item-root .ui5-product-switch-item-text-content {
		max-width: calc(100% - 3.75rem); /* 100% width - (3rem for the icon + right margin)*/
	}


	.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle,
	.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title {
		line-height: normal;
	}

	.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle {
		font-size: var(--sapFontSize);
		padding-top: .75rem;
	}
}

[ui5-product-switch-item][focused] {
	outline: none;
	position: relative;
}

[ui5-product-switch-item][focused] .ui5-product-switch-item-root::after {
	content: "";
	position: absolute;
	border-color: var(--_ui5_product_switch_item_outline_color);
	border-width: var(--_ui5_product_switch_item_outline_width);
	border-style: dotted;
	top: var(--_ui5_product_switch_item_outline_offset_positive);
	bottom:  var(--_ui5_product_switch_item_outline_offset_positive);
	left:  var(--_ui5_product_switch_item_outline_offset_positive);
	right:  var(--_ui5_product_switch_item_outline_offset_positive);
}

[ui5-product-switch-item][active][focused] .ui5-product-switch-item-root::after {
	border-color: var(--_ui5_product_switch_item_active_outline_color);
}
`};var a=globalThis&&globalThis.__decorate||function(o,t,e,l){var u=arguments.length,i=u<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,e):l,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,l);else for(var m=o.length-1;m>=0;m--)(h=o[m])&&(i=(u<3?h(i):u>3?h(t,e,i):h(t,e))||i);return u>3&&i&&Object.defineProperty(t,e,i),i};let c=class extends z{constructor(){super(),this._deactivate=()=>{this.active&&(this.active=!1)}}onEnterDOM(){document.addEventListener("mouseup",this._deactivate)}onExitDOM(){document.removeEventListener("mouseup",this._deactivate)}_onmousedown(){this.active=!0}_onkeydown(t){(b(t)||T(t))&&(this.active=!0),b(t)&&t.preventDefault(),T(t)&&this._fireItemClick()}_onkeyup(t){(b(t)||T(t))&&(this.active=!1),b(t)&&(J(t)&&t.stopPropagation(),this._fireItemClick())}_onfocusout(){this.active=!1,this.focused=!1}_onfocusin(t){this.focused=!0,this.fireEvent("_focused",t)}_fireItemClick(){this.fireEvent("click",{item:this})}};a([r()],c.prototype,"titleText",void 0);a([r()],c.prototype,"subtitleText",void 0);a([r()],c.prototype,"icon",void 0);a([r({defaultValue:"_self"})],c.prototype,"target",void 0);a([r()],c.prototype,"targetSrc",void 0);a([r({type:Boolean})],c.prototype,"active",void 0);a([r({type:Boolean})],c.prototype,"focused",void 0);a([r({type:Boolean})],c.prototype,"selected",void 0);a([r({defaultValue:"-1",noAttribute:!0})],c.prototype,"_tabIndex",void 0);c=a([E({tag:"ui5-product-switch-item",renderer:O,styles:wt,template:st,dependencies:[X]}),k("click"),k("_focused")],c);c.define();const _t=c,ft=Object.freeze(Object.defineProperty({__proto__:null,default:_t},Symbol.toStringTag,{value:"Module"})),d=R("ui5-product-switch-item",["icon","subtitleText","target","targetSrc","titleText"],[],[],["click"],()=>N(()=>Promise.resolve().then(()=>ft),void 0,import.meta.url));d.displayName="ProductSwitchItem";try{d.displayName="ProductSwitchItem",d.__docgenInfo={description:'The `ProductSwitchItem` web component represents the items displayed in the `ProductSwitch` web component.\n\n**Note:** `ProductSwitchItem` is not supported when used outside of `ProductSwitch`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-ProductSwitch" target="_blank">UI5 Web Components Storybook</ui5-link>',displayName:"ProductSwitchItem",props:{onClick:{defaultValue:null,description:"Fired when the `ProductSwitchItem` is activated either with a click/tap or by using the Enter or Space key.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ProductSwitchItemDomRef, never>) => void"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as a graphical element within the component.

Example:

ProductSwitchItem icon="palette"

See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,name:"icon",required:!1,type:{name:"string"}},subtitleText:{defaultValue:null,description:"Defines the subtitle of the component.",name:"subtitleText",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Defines a target where the `targetSrc` content must be open.\n\nAvailable options are:\n\n*   `_self`\n*   `_top`\n*   `_blank`\n*   `_parent`\n*   `_search`",name:"target",required:!1,type:{name:"string"}},targetSrc:{defaultValue:null,description:"Defines the component target URI. Supports standard hyperlink behavior.",name:"targetSrc",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:"Defines the title of the component.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const vt="business-objects-experience",V="M68 143q-4-7-4-15 0-13 9-22.5T96 96t23 9.5 9 22.5q0 8-4 15l53 54q8-5 15-5h1l45-102q-14-11-14-26 0-13 9-22.5t23-9.5 23 9.5 9 22.5-8 21l60 78q6-3 12-3 12 0 19 7l93-106 12 10-94 109q1 5 1.5 8t.5 4q0 14-9 23t-23 9-23-9-9-23q0-9 8-20l-62-78q-2 0-4 .5t-4 .5q-1 1-2 1h-3l-45 101q7 5 11.5 12t4.5 15q0 14-9 23t-23 9-23-9-9-23q0-8 5-16l-52-53q-8 5-17 5-8 0-16-5l-37 37-11-11zm348 121q0-8 8-8h48q8 0 8 8v208q0 8-8 8h-48q-8 0-8-8V264zm-256 64q0-8 8-8h48q8 0 8 8v144q0 8-8 8h-48q-8 0-8-8V328zm136 24h48q8 0 8 8v112q0 8-8 8h-48q-8 0-8-8V360q0-8 8-8zM40 384h48q8 0 8 8v80q0 8-8 8H40q-8 0-8-8v-80q0-8 8-8z",bt=!1,gt="SAP-icons-v4",qt="@ui5/webcomponents-icons";p(vt,{pathData:V,ltr:bt,collection:gt,packageName:qt});const xt="business-objects-experience",L="M14 327Q0 313 0 294t14-33q19-19 44-12l83-83q-3-11 0-23.5t12-21.5q14-14 33-14t33 14q15 15 13 36l73 49q15-7 33-4l83-82q-3-12-.5-24T433 75q14-14 32.5-14T498 75t14 33-14 33q-19 19-44 11l-83 83q7 26-12 45-14 14-33 14t-33-14q-15-15-13-36l-73-48q-16 7-33 3l-83 83q3 11 .5 23.5T79 327q-14 14-32.5 14T14 327zm428-80q0-10 7-16.5t16-6.5q10 0 17 6.5t7 16.5v210q0 10-7 16.5t-17 6.5q-9 0-16-6.5t-7-16.5V247zm-279 47q0-10 6.5-16.5T186 271t16.5 6.5T209 294v163q0 10-6.5 16.5T186 480t-16.5-6.5T163 457V294zm186 163q0 10-6.5 16.5T326 480t-16.5-6.5T303 457v-93q0-10 6.5-17t16.5-7 16.5 7 6.5 17v93zM23 410q0-10 7-16.5t17-6.5q9 0 16 6.5t7 16.5v47q0 10-7 16.5T47 480q-10 0-17-6.5T23 457v-47z",yt=!1,Tt="SAP-icons-v5",St="@ui5/webcomponents-icons";p(xt,{pathData:L,ltr:yt,collection:Tt,packageName:St});y();const kt="business-objects-experience",$t="contacts",j="M0 384h32v-32H0v-32h32V192H0v-32h32v-32H0V96h32V32q0-14 9.5-23T64 0h384q14 0 23 9t9 23q14 0 23 9t9 23v64q0 14-9 23t-23 9v32q14 0 23 9t9 23v64q0 14-9 23t-23 9v32q14 0 23 9t9 23v64q0 14-9 23t-23 9q0 14-9 23t-23 9H64q-13 0-22.5-9T32 480v-64H0v-32zm96 0v32H64v64h384V32H64v64h32v32H64v32h32v32H64v128h32v32H64v32h32zM384 96v64H160V96h224z",It=!1,Pt="SAP-icons-v4",Ct="@ui5/webcomponents-icons";p($t,{pathData:j,ltr:It,collection:Pt,packageName:Ct});const zt="contacts",M="M359 128q11 0 18 7t7 18v13q0 11-7.5 18.5T358 192H153q-10 0-17.5-7.5T128 166v-13q0-11 7.5-18t18.5-7h205zm70-21q0-10-7-17t-17-7H107q-10 0-17 7t-7 17v298q0 10 7 17t17 7h298q10 0 17-7t7-17V107zm51 117v63h7q11 0 18 7t7 18v77q0 11-7 18.5t-18 7.5h-8q-4 28-24.5 46.5T405 480H107q-29 0-49.5-18.5T33 416h-7q-11 0-18.5-7.5T0 390t7.5-18 18.5-7h6v-39h-6q-11 0-18.5-7.5T0 300t7.5-18 18.5-7h6v-38h-6q-11 0-18.5-7.5T0 211t7.5-18 18.5-7h6v-39h-6q-11 0-18.5-7.5T0 121t7-18 18-7h8q4-27 24.5-45.5T107 32h298q29 0 49.5 18.5T479 96h8q11 0 18 7t7 18v77q0 11-7 18.5t-18 7.5h-7z",Nt=!1,Dt="SAP-icons-v5",Et="@ui5/webcomponents-icons";p(zt,{pathData:M,ltr:Nt,collection:Dt,packageName:Et});y();const Ot="contacts",Rt="flight",A="M469.9 43q9 9 10 24.5t-3 32-12.5 32-17.5 24.5l-45 45 68 204-68 68-91-181-87 66v90l-32 32-62-98-98-62 32-32h91l66-87-181-90 68-68 203 68 45-45q14-14 37-24t45-10q21 0 32 11zm-46 90q7-7 12.5-17t8.5-20.5 3.5-19-1.5-11.5h-2q-2 0-3.5-.5t-3.5-.5q-15 0-33 8t-26 16l-59 59-204-67-22 22 175 88-98 130h-79l61 39 39 61v-78l131-99 88 176 22-23-68-203z",Ht=!1,Vt="SAP-icons-v4",Lt="@ui5/webcomponents-icons";p(Rt,{pathData:A,ltr:Ht,collection:Vt,packageName:Lt});const jt="flight",U="M466 259q7 3 10.5 9.5T480 283v9q0 11-8 19.5t-19 8.5q-5 0-8-1l-157-31v103l58 37q13 8 13 24 0 12-8.5 20t-20.5 8q-5 0-8-1l-69-21-69 21q-3 1-8 1-11 0-20-8t-9-20q0-16 13-24l57-37V289L67 319q-2 1-7 1-11 0-19.5-8.5T32 292v-9q0-16 14-24l171-99V68q0-15 10.5-25.5T253 32t25 10.5T288 68v92z",Mt=!1,At="SAP-icons-v5",Ut="@ui5/webcomponents-icons";p(jt,{pathData:U,ltr:Mt,collection:At,packageName:Ut});y();const Bt="flight",Ft="wrench",B="M471 381q9 10 9 22.5t-9 21.5l-46 46q-9 9-21 9-14 0-23-9L218 307q-23 10-52 10-47 0-83-26.5T32 224h118q14 0 27.5-9.5T191 191v-32q0-14-13.5-23t-27.5-9H32q15-42 51-68.5T166 32q30 0 55.5 11.5t45 31T297 120t11 55q0 20-6 39zm-23 23L266 223l5-18q3-9 4-16t1-14q0-23-8.5-43T244 97t-35-24-43-9q-46 0-77 33h61q13 0 26 5t23.5 13 17 19.5T223 159v32q0 13-6.5 24.5t-17 20.5-23.5 14-26 5H89q15 14 35 22t42 8q17 0 41-8l19-8 178 179z",Wt=!1,Gt="SAP-icons-v4",Qt="@ui5/webcomponents-icons";p(Ft,{pathData:B,ltr:Wt,collection:Gt,packageName:Qt});const Jt="wrench",F="M505 403q7 6 7 16t-7 16l-70 70q-6 7-16 7-9 0-16-7L214 317q-12 5-24 7t-25 2q-34 0-64.5-12.5T48 279t-35-52-13-64q0-32 14-65 4-10 17-14 5 0 11 1.5T52 91l65 63 37-38-63-65q-8-8-8-16 1-1 1-3l1-3q1-5 4.5-9t8.5-6q33-14 65-14 34 0 64 12.5t52 34T313.5 97t12.5 61q0 16-3 30t-6 26zM47 163q0 24 9 45.5t24.5 37 37 24.5 45.5 9 45.5-9 37.5-24.5 25-37 9-45.5-9-45.5-25.5-37T207 56t-48-9h-7l51 53q7 9 7 16 0 8-7 17l-70 70q-9 7-16 7-8 0-17-7l-53-52v12zm409 256L296 258q-9 11-17.5 20.5T259 296l160 160z",Kt=!1,Xt="SAP-icons-v5",Yt="@ui5/webcomponents-icons";p(Jt,{pathData:F,ltr:Kt,collection:Xt,packageName:Yt});y();const Zt="wrench",te={title:"Inputs / ProductSwitch",component:v,argTypes:{children:{control:{disable:!0}}}},f={render:o=>w.jsxs(v,{...o,children:[w.jsx(d,{titleText:"ProductSwitchItem",icon:Zt,target:"_blank",targetSrc:"https://sap.github.io/ui5-webcomponents-react/"}),w.jsx(d,{titleText:"Home",subtitleText:"Central Home",icon:K}),w.jsx(d,{titleText:"Analytical Cloud",subtitleText:"Analytical Cloud",icon:kt}),w.jsx(d,{titleText:"Catalog",subtitleText:"Ariba",icon:Ot}),w.jsx(d,{titleText:"Travel & Expense",subtitleText:"Concur",icon:Bt})]})};var I,P,C;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    return <ProductSwitch {...args}>
        <ProductSwitchItem titleText={'ProductSwitchItem'} icon={wrenchIcon} target="_blank" targetSrc="https://sap.github.io/ui5-webcomponents-react/" />
        <ProductSwitchItem titleText="Home" subtitleText="Central Home" icon={homeIcon} />
        <ProductSwitchItem titleText="Analytical Cloud" subtitleText="Analytical Cloud" icon={businessObjectsExperienceIcon} />
        <ProductSwitchItem titleText="Catalog" subtitleText="Ariba" icon={contactsIcon} />
        <ProductSwitchItem titleText="Travel & Expense" subtitleText="Concur" icon={flightIcon} />
      </ProductSwitch>;
  }
}`,...(C=(P=f.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const ee=["Default"],fe=Object.freeze(Object.defineProperty({__proto__:null,Default:f,__namedExportsOrder:ee,default:te},Symbol.toStringTag,{value:"Module"}));export{fe as C,f as D,d as P};
//# sourceMappingURL=ProductSwitch.stories-bd174488.js.map
