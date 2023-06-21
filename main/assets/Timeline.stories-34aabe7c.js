import{j as v}from"./jsx-runtime-5926aa06.js";import{c as W}from"./calendar-58e3ce24.js";import{a as T,U as $,d as F,k as M}from"./UI5Element-b6f0d493.js";import{k as z,e as B,j as D}from"./Icons-bac066a4.js";import{_ as S}from"./iframe-48dea8cd.js";import{e as s,l as r,s as y,a as V,p as c,c as P,d as L,w as E}from"./withWebComponent-7b9bd1ee.js";import{c as U,I as G,e as J}from"./Icon-bd7f152d.js";import{a as X}from"./Link-fd0c7f1f.js";import{o as k}from"./class-map-6a9bd920.js";import{s as R}from"./parameters-bundle.css-5626463c.js";import{s as Q}from"./slot-76e48863.js";import{I as Y,N as q}from"./ItemNavigation-9c411313.js";import{g as K}from"./MarkedEvents-b83081e9.js";import{T as x}from"./i18n-defaults-44d0f21e.js";var I;(function(n){n.Vertical="Vertical",n.Horizontal="Horizontal"})(I||(I={}));const d=I;function Z(n,e,t){return s`<div class="ui5-timeline-root" @focusin=${this._onfocusin} @keydown=${this._onkeydown}><div class="ui5-timeline-scroll-container"><ul class="ui5-timeline-list" aria-live="polite" aria-label="${r(this.ariaLabel)}">${U(this.items,(o,l)=>o._id||l,(o,l)=>ee.call(this,n,e,t,o,l))}</ul></div></div>`}function ee(n,e,t,o,l){return s`<li class="ui5-timeline-list-item"><slot name="${r(o._individualSlot)}"></slot></li>`}function te(n,e,t){return s`<div class="ui5-tli-root" dir="${r(this.effectiveDir)}"><div class="${k(this.classes.indicator)}"><div class="ui5-tli-icon-outer">${this.icon?ne.call(this,n,e,t):ie.call(this,n,e,t)}</div></div><div class="ui5-tli-bubble" tabindex="${r(this._tabIndex)}" data-sap-focus-ref><div class="ui5-tli-title">${this.name?oe.call(this,n,e,t):void 0}<span>${r(this.titleText)}</span></div><div class="ui5-tli-subtitle">${r(this.subtitleText)}</div>${this.textContent?ae.call(this,n,e,t):void 0}<span class="${k(this.classes.bubbleArrowPosition)}"></span></div></div>`}function ne(n,e,t){return t?s`<${y("ui5-icon",e,t)} class="ui5-tli-icon" name="${r(this.icon)}"></${y("ui5-icon",e,t)}>`:s`<ui5-icon class="ui5-tli-icon" name="${r(this.icon)}"></ui5-icon>`}function ie(n,e,t){return s`<div class="ui5-tli-dummy-icon-container"></div>`}function oe(n,e,t){return s`${this.nameClickable?le.call(this,n,e,t):re.call(this,n,e,t)}`}function le(n,e,t){return t?s`<${y("ui5-link",e,t)} @ui5-click="${r(this.onNamePress)}" class="ui5-tli-title-name-clickable">${r(this.name)}&nbsp;</${y("ui5-link",e,t)}>`:s`<ui5-link @ui5-click="${r(this.onNamePress)}" class="ui5-tli-title-name-clickable">${r(this.name)}&nbsp;</ui5-link>`}function re(n,e,t){return s`<span class="ui5-tli-title-name">${r(this.name)}&nbsp;</span>`}function ae(n,e,t){return s`<div class="ui5-tli-desc"><slot></slot></div>`}T("@ui5/webcomponents-theming","sap_fiori_3",async()=>V);T("@ui5/webcomponents-fiori","sap_fiori_3",async()=>R);const se={packageName:"@ui5/webcomponents-fiori",fileName:"themes/TimelineItem.css",content:`:host(:not([hidden])) {
	display: block;
}

.ui5-tli-root {
	display: flex;
}

:host([layout="Horizontal"]) .ui5-tli-root {
	flex-direction: column;
}

:host(:not([layout="Horizontal"])) .ui5-tli-indicator {
	position: relative;
	width: 2rem;
}

:host([layout="Horizontal"]) .ui5-tli-indicator {
	position: relative;
	display: flex;
	height: 2rem;
	align-items: center;
}

:host(:not([layout="Horizontal"])) .ui5-tli-indicator::before {
	content: "";
	display: inline-block;
	background-color: var(--sapContent_ForegroundBorderColor);
	width: 1px;
	position: absolute;
	top: 2.125rem;
	bottom: var(--_ui5_timeline_tli_indicator_before_bottom);
	left: 50%;
}

:host([layout="Horizontal"]) .ui5-tli-indicator::before {
	content: "";
	display: inline-block;
	background-color: var(--sapContent_ForegroundBorderColor);
	height: 1px;
	top: 50%;
	position: absolute;
	left: 2.0625rem;
	right: var(--_ui5_timeline_tli_indicator_before_right);
}

:host(:not([layout="Horizontal"])) .ui5-tli-indicator.ui5-tli-indicator-large-line::before {
	bottom: var(--_ui5_timeline_tli_indicator_before_without_icon_bottom);
}

:host([layout="Horizontal"]) .ui5-tli-indicator.ui5-tli-indicator-large-line::before{
	right: var(--_ui5_timeline_tli_indicator_before_without_icon_right);
}

/* Line when no Icon is provided */

:host(:not([layout="Horizontal"])):not([icon]) .ui5-tli-indicator::before {
	bottom: var(--_ui5_timeline_tli_indicator_before_without_icon_bottom);
	top: 1.875rem;
}

/* Line when no Icon is provided in horizontal*/

:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator::before {
	top: 50%;
	right: var(--_ui5_timeline_tli_indicator_before_without_icon_right);
	left: 1.6875rem;
}

:host(:not([layout="Horizontal"])):not([icon]) .ui5-tli-indicator.ui5-tli-indicator-short-line::before {
	bottom: var(--_ui5_timeline_tli_indicator_before_bottom);
}

:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator.ui5-tli-indicator-short-line::before {
	right: var(--_ui5_timeline_tli_indicator_before_right);
}

/* No Icon Dot */

:host(:not([icon])) .ui5-tli-indicator::after {
	content: "";
	display: inline-block;
	box-sizing: border-box;
	border: 1px solid var(--sapContent_NonInteractiveIconColor);
	background-color: var(--sapContent_NonInteractiveIconColor);
	border-radius: 50%;
	width: 0.375rem;
	height: 0.375rem;
	position: absolute;
	top: 0.9375rem;
	left: 51.75%;
	transform: translateX(-50%);
}

/* No Icon Dot in Hotizontal */

:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator::after {
	top: 0.84rem;
	left: 0.9625rem;
}

:host(:last-child) .ui5-tli-indicator::before {
	display: none;
}

:host(:last-child) .ui5-tli-indicator::before {
	display: none;
}

.ui5-tli-icon-outer {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: .25rem;
	height: 1.625rem;
	width: 2rem;
}

:host([layout="Horizontal"]) .ui5-tli-icon-outer {
	margin-top: 0rem;
	height: 1.3125rem;
}

.ui5-tli-icon {
	color: var(--sapContent_NonInteractiveIconColor);
	height: 1.375rem;
	width: 1.375rem;
}

:host([layout="Horizontal"]) .ui5-tli-dummy-icon-container {
	height: 1.375rem;
	width: 1.375rem;
	display: inline-block;
	outline: none;
}

.ui5-tli-bubble {
	background: var(--sapGroup_ContentBackground);
	border: 1px solid var(--_ui5_TimelineItem_bubble_border_color);
	box-sizing: border-box;
	border-radius: var(--_ui5_TimelineItem_bubble_border_radius);
	flex: 1;
	position: relative;
	margin-left: .5rem;
	padding: var(--_ui5_TimelineItem_bubble_content_padding);
}

:host([layout="Horizontal"]) .ui5-tli-bubble {
	margin-top: .5rem;
	margin-left: 0;
}

.ui5-tli-bubble:focus {
	outline: none;
}

.ui5-tli-bubble:focus::after {
	content: "";
    border: var(--_ui5_TimelineItem_bubble_border_width) var(--_ui5_TimelineItem_bubble_border_style) var(--sapContent_FocusColor);
    border-radius: var(--_ui5_TimelineItem_bubble_focus_border_radius);
	position: absolute;
	top: var(--_ui5_TimelineItem_bubble_border_top);
	right: var(--_ui5_TimelineItem_bubble_border_right);
	bottom: var(--_ui5_TimelineItem_bubble_border_bottom);
	left: var(--_ui5_TimelineItem_bubble_border_left);
	pointer-events: none;
}

:host([layout="Horizontal"]) .ui5-tli-bubble:focus::after {
	top: var(--_ui5_TimelineItem_horizontal_bubble_focus_top_offset);
	left: var(--_ui5_TimelineItem_horizontal_bubble_focus_left_offset);
}

.ui5-tli-bubble-arrow {
	width: var(--_ui5_TimelineItem_arrow_size);
	padding-bottom: var(--_ui5_TimelineItem_arrow_size);
	position: absolute;
	pointer-events: none;
	top: 0;
	left: 0;
	overflow: hidden;
}

.ui5-tli-bubble-arrow::before {
	content: "";
	background: var(--sapGroup_ContentBackground);
	border: 1px solid var(--_ui5_TimelineItem_bubble_border_color);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transform-origin: 0 100%;
	transform: rotate(45deg);
}

:host([layout="Horizontal"]) .ui5-tli-bubble-arrow::before {
	transform: rotate(315deg);
}

.ui5-tli-bubble-arrow--left {
	left: calc(-1 * var(--_ui5_TimelineItem_arrow_size));
}

.ui5-tli-bubble-arrow--top {
	top: calc(-1 * var(--_ui5_TimelineItem_arrow_size));
}

.ui5-tli-bubble-arrow--left::before {
	left: 50%;
	width: 50%;
	transform-origin: 100% 100%;
}

.ui5-tli-bubble-arrow--top::before {
	left: 42%;
	width: 75%;
	transform-origin: 152% 104%;
}

.ui5-tli-title,
.ui5-tli-desc {
	color: var(--sapTextColor);
	font-family: var(--sapFontFamily);
	font-weight: 400;
	font-size: var(--sapFontSize);
}

.ui5-tli-title span {
	display: inline-block;
}

.ui5-tli-subtitle {
	color: var(--sapContent_LabelColor);
	font-family: var(--sapFontFamily);
	font-weight: 400;
	font-size: var(--sapFontSmallSize);
	padding-top: var(--_ui5_TimelineItem_bubble_content_subtitle_padding_top);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.ui5-tli-desc {
	padding-top: var(--_ui5_TimelineItem_bubble_content_description_padding_top);
}

[dir=rtl] .ui5-tli-bubble-arrow--left {
	right: calc(-1 * var(--_ui5_TimelineItem_arrow_size));
	left: auto;
	transform: scale(-1, 1);
}

[dir=rtl] .ui5-tli-bubble-arrow--top {
	right: 0;
	left: auto;
	transform: scale(-1, 1);
}

[dir=rtl] .ui5-tli-bubble {
	margin-left: auto;
	margin-right: .5rem;
}

:host([layout="Horizontal"]) [dir=rtl] .ui5-tli-bubble {
	margin-right: 0;
}

[dir=rtl] .ui5-tli-bubble:focus::after {
	left: var(--_ui5_TimelineItem_bubble_rtl_left_offset);
	right: var(--_ui5_TimelineItem_bubble_rtl_right_offset);
}

:host([layout="Horizontal"]) [dir=rtl]  .ui5-tli-bubble:focus::after {
	right: 0
}

:host([layout="Horizontal"]:not([icon])) [dir=rtl] .ui5-tli-indicator::after {
	right: 0.625rem;
}

/* Line when no Icon is provided in horizontal*/

:host([layout="Horizontal"]:not([icon])) [dir=rtl] .ui5-tli-indicator::before {
	right: 1.9375rem;
	left: var(--_ui5_timeline_tli_indicator_before_right);
}

:host([layout="Horizontal"]) [dir=rtl] .ui5-tli-indicator::before {
	left: var(--_ui5_timeline_tli_indicator_before_right);
	right: 2.125rem;
}`};var m=globalThis&&globalThis.__decorate||function(n,e,t,o){var l=arguments.length,i=l<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var p=n.length-1;p>=0;p--)(u=n[p])&&(i=(l<3?u(i):l>3?u(e,t,i):u(e,t))||i);return l>3&&i&&Object.defineProperty(e,t,i),i};const ce="ShortLineWidth",ue="LargeLineWidth";let a=class extends ${constructor(){super()}onNamePress(){this.fireEvent("name-click",{})}focusLink(){var e;(e=this.shadowRoot.querySelector("[ui5-link]"))==null||e.focus()}get classes(){return{indicator:{"ui5-tli-indicator":!0,"ui5-tli-indicator-short-line":this._lineWidth===ce,"ui5-tli-indicator-large-line":this._lineWidth===ue},bubbleArrowPosition:{"ui5-tli-bubble-arrow":!0,"ui5-tli-bubble-arrow--left":this.layout===d.Vertical,"ui5-tli-bubble-arrow--top":this.layout===d.Horizontal}}}};m([c()],a.prototype,"icon",void 0);m([c()],a.prototype,"name",void 0);m([c({type:Boolean})],a.prototype,"nameClickable",void 0);m([c()],a.prototype,"titleText",void 0);m([c()],a.prototype,"subtitleText",void 0);m([c({defaultValue:"-1",noAttribute:!0})],a.prototype,"_tabIndex",void 0);m([c({type:d,defaultValue:d.Vertical})],a.prototype,"layout",void 0);m([c()],a.prototype,"_lineWidth",void 0);a=m([P({tag:"ui5-timeline-item",renderer:L,styles:se,template:te,dependencies:[G,X]}),J("name-click")],a);a.define();const O=a,me=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));T("@ui5/webcomponents-theming","sap_fiori_3",async()=>V);T("@ui5/webcomponents-fiori","sap_fiori_3",async()=>R);const de={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Timeline.css",content:`:host(:not([hidden])) {
	display: block;
}

.ui5-timeline-root {
	padding: var(--_ui5_tl_padding);
	box-sizing: border-box;
	overflow: hidden;
}

.ui5-timeline-list {
	list-style: none;
	margin: 0;
	padding: 0;
}

.ui5-timeline-list-item {
	margin-bottom: var(--_ui5_tl_li_margin_bottom);
}

.ui5-timeline-list-item:last-child {
	margin-bottom: 0;
}

:host([layout="Horizontal"]) .ui5-timeline-list {
	white-space: nowrap;
	list-style: none;
	margin: 0;
	padding: 0;
}

:host([layout="Horizontal"]) .ui5-timeline-list-item {
	display: inline-block;
	margin-inline-start: var(--_ui5_tl_li_margin_bottom);
}

:host([layout="Horizontal"]) .ui5-timeline-scroll-container {
	overflow: auto;
	/* The padding values of the parent container are added to the size of scroll container */
	width: calc(100% + var(--_ui5_timeline_scroll_container_offset));
}`};var w=globalThis&&globalThis.__decorate||function(n,e,t,o){var l=arguments.length,i=l<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var p=n.length-1;p>=0;p--)(u=n[p])&&(i=(l<3?u(i):l>3?u(e,t,i):u(e,t))||i);return l>3&&i&&Object.defineProperty(e,t,i),i},_;const pe="ShortLineWidth",be="LargeLineWidth";let b=_=class extends ${constructor(){super(),this._itemNavigation=new Y(this,{getItemsCallback:()=>this.items})}static async onDefine(){_.i18nBundle=await F("@ui5/webcomponents-fiori")}get ariaLabel(){return this.accessibleName?`${_.i18nBundle.getText(x)} ${this.accessibleName}`:_.i18nBundle.getText(x)}_onfocusin(e){const t=e.target;this._itemNavigation.setCurrentItem(t)}onBeforeRendering(){this._itemNavigation._navigationMode=this.layout===d.Horizontal?q.Horizontal:q.Vertical;for(let e=0;e<this.items.length;e++)this.items[e].layout=this.layout,this.items[e+1]&&this.items[e+1].icon?this.items[e]._lineWidth=pe:this.items[e].icon&&this.items[e+1]&&!this.items[e+1].icon&&(this.items[e]._lineWidth=be)}_onkeydown(e){const t=e.target;z(e)?(!t.nameClickable||K(e)==="link")&&this._handleTabNextOrPrevious(e,z(e)):B(e)&&this._handleTabNextOrPrevious(e)}_handleTabNextOrPrevious(e,t){const o=e.target,l=t?this.items.indexOf(o)+1:this.items.indexOf(o)-1,i=this.items[l];if(i){if(i.nameClickable&&!t){e.preventDefault(),i.focusLink();return}e.preventDefault(),i.focus(),this._itemNavigation.setCurrentItem(i)}}};w([c({type:d,defaultValue:d.Vertical})],b.prototype,"layout",void 0);w([c()],b.prototype,"accessibleName",void 0);w([Q({type:HTMLElement,individualSlots:!0,default:!0})],b.prototype,"items",void 0);b=_=w([P({tag:"ui5-timeline",languageAware:!0,renderer:L,styles:de,template:Z,dependencies:[O]})],b);b.define();const he=b,_e=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"})),h=E("ui5-timeline",["accessibleName","layout"],[],[],[],()=>S(()=>Promise.resolve().then(()=>_e),void 0,import.meta.url));h.displayName="Timeline";h.defaultProps={layout:d.Vertical};try{h.displayName="Timeline",h.__docgenInfo={description:`The \`Timeline\` component shows entries (such as objects, events, or posts) in chronological order. A common use case is to provide information about changes to an object, or events related to an object. These entries can be generated by the system (for example, value XY changed from A to B), or added manually. There are two distinct variants of the timeline: basic and social. The basic timeline is read-only, while the social timeline offers a high level of interaction and collaboration, and is integrated within SAP Jam

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Timeline" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Timeline",props:{children:{defaultValue:null,description:"Determines the content of the `Timeline`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},layout:{defaultValue:{value:"TimelineLayout.Vertical"},description:`Defines the items orientation.

**Note:** Available options are:

*   \`Vertical\`
*   \`Horizontal\``,name:"layout",required:!1,type:{name:"enum",value:[{value:'"Vertical"'},{value:'"Horizontal"'},{value:'"Vertical"'},{value:'"Horizontal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const g=E("ui5-timeline-item",["icon","name","subtitleText","titleText"],["nameClickable"],[],["name-click"],()=>S(()=>Promise.resolve().then(()=>me),void 0,import.meta.url));g.displayName="TimelineItem";try{g.displayName="TimelineItem",g.__docgenInfo={description:`An entry posted on the timeline

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Timeline" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"TimelineItem",props:{children:{defaultValue:null,description:"Determines the description of the `TimelineItem`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNameClick:{defaultValue:null,description:"Fired when the item name is pressed either with a click/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `name-clickable` attribute is not set.",name:"onNameClick",required:!1,type:{name:"(event: Ui5CustomEvent<TimelineItemDomRef, never>) => void"}},icon:{defaultValue:null,description:'Defines the icon to be displayed as graphical element within the `TimelineItem`. SAP-icons font provides numerous options.\n\nSee all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.',name:"icon",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Defines the name of the item, displayed before the `title-text`.",name:"name",required:!1,type:{name:"string"}},nameClickable:{defaultValue:null,description:"Defines if the `name` is clickable.",name:"nameClickable",required:!1,type:{name:"boolean"}},subtitleText:{defaultValue:null,description:"Defines the subtitle text of the component.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:"Defines the title text of the component.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const fe="phone",j="M32 448q-13 0-22.5-9T0 416V32Q0 19 9.5 9.5T32 0h64q14 0 23 9.5t9 22.5v384q0 14-9 23t-23 9H32zM480 64q14 0 23 9.5t9 22.5v384q0 14-9 23t-23 9H32q-13 0-22.5-9T0 480h480V96H160V64h320zM224 320q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T224 256q14 0 23 9.5t9 22.5q0 14-9 23t-23 9zm96-64q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T320 256zm96 0q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T416 256zm0 96q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T416 352zm-96 0q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T320 352zm-96 64q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T224 352q14 0 23 9.5t9 22.5q0 14-9 23t-23 9zm224-240q0 16-16 16H208q-16 0-16-16v-32q0-6 4.5-11t11.5-5h224q7 0 11.5 5t4.5 11v32z",ge=!1,ve="SAP-icons-v4",ye="@ui5/webcomponents-icons";D(fe,{pathData:j,ltr:ge,collection:ve,packageName:ye});const Te="phone",A="M435 0q33 0 55 22t22 55v358q0 33-22 55t-55 22H77q-32 0-54.5-22T0 435v-25q0-26 26-26 25 0 25 26v25q0 12 7.5 19t18.5 7h358q26 0 26-26V77q0-26-26-26H231q-26 0-26-25 0-26 26-26h204zM51 333q-21 0-36-15T0 282V51q0-21 15-36T51 0h52q21 0 36 15t15 36v231q0 21-15 36t-36 15H51zm0-51h52V51H51v231zm180-77q11 0 18 7t7 18-7 18.5-18 7.5-18.5-7.5T205 230t7.5-18 18.5-7zm0 77q11 0 18 7t7 18-7 18.5-18 7.5-18.5-7.5T205 307t7.5-18 18.5-7zm76 0q11 0 18.5 7t7.5 18-7.5 18.5T307 333t-18-7.5-7-18.5 7-18 18-7zm0-77q11 0 18.5 7t7.5 18-7.5 18.5T307 256t-18-7.5-7-18.5 7-18 18-7zm77 0q11 0 18.5 7t7.5 18-7.5 18.5T384 256t-18-7.5-7-18.5 7-18 18-7zm0 77q11 0 18.5 7t7.5 18-7.5 18.5T384 333t-18-7.5-7-18.5 7-18 18-7zm-153 76q11 0 18 7.5t7 18.5-7 18.5-18 7.5-18.5-7.5T205 384t7.5-18.5T231 358zm76 0q11 0 18.5 7.5T333 384t-7.5 18.5T307 410t-18-7.5-7-18.5 7-18.5 18-7.5zm77 0q11 0 18.5 7.5T410 384t-7.5 18.5T384 410t-18-7.5-7-18.5 7-18.5 18-7.5zm0-256q12 0 19 7.5t7 18.5-7 18.5-19 7.5H231q-12 0-19-7.5t-7-18.5 7-18.5 19-7.5h153z",we=!1,Ie="SAP-icons-v5",ze="@ui5/webcomponents-icons";D(Te,{pathData:A,ltr:we,collection:Ie,packageName:ze});M();const ke="phone",qe={title:"Data Display / Timeline",component:h,argTypes:{children:{control:{disable:!0}}},args:{}},f={render:n=>v.jsxs(h,{...n,children:[v.jsx(g,{titleText:"Schedule Call",subtitleText:"2019/01/01",icon:ke,name:"John Smith"}),v.jsx(g,{titleText:"Weekly Sync - CP Design",subtitleText:"2019/01/02",icon:W,children:v.jsx("div",{children:"MR SOF02 2.43"})})]})};var N,H,C;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    return <Timeline {...args}>
        <TimelineItem titleText="Schedule Call" subtitleText="2019/01/01" icon={phoneIcon} name={\`John Smith\`} />
        <TimelineItem titleText="Weekly Sync - CP Design" subtitleText="2019/01/02" icon={calendarIcon}>
          <div>MR SOF02 2.43</div>
        </TimelineItem>
      </Timeline>;
  }
}`,...(C=(H=f.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};const xe=["Default"],Me=Object.freeze(Object.defineProperty({__proto__:null,Default:f,__namedExportsOrder:xe,default:qe},Symbol.toStringTag,{value:"Module"}));export{Me as C,f as D,g as T};
//# sourceMappingURL=Timeline.stories-34aabe7c.js.map
