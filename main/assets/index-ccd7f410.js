import{_}from"./iframe-e3fb29ee.js";import{e as r,l as a,s,a as b,b as y,p as c,c as $,d as w,w as I}from"./withWebComponent-d4224c1c.js";import{c as R,I as x,e as T}from"./Icon-9aa64f88.js";import{a as g,U as C,d as N}from"./UI5Element-3b11b083.js";import{p as D,q as k,s as V,o as A,b as q,c as S,m as E,n as O}from"./Icons-f64cf5a7.js";import{g as M}from"./AriaLabelHelper-43a261ec.js";import{I as P}from"./Integer-f7f172c9.js";import{F as B}from"./Float-99d99064.js";import{ah as U,ai as L,aj as j}from"./i18n-defaults-f002f496.js";import"./favorite-7c1044c8.js";import"./unfavorite-d629df80.js";function F(o,e,i){return r`<div class="ui5-rating-indicator-root" role="slider" aria-roledescription="${a(this._ariaRoleDescription)}" aria-valuemin="0" aria-valuenow="${a(this.value)}" aria-valuemax="${a(this.max)}" aria-valuetext="${a(this.value)} of ${a(this.max)}" aria-orientation="horizontal" aria-disabled="${a(this._ariaDisabled)}" aria-readonly="${a(this.ariaReadonly)}" aria-description="${a(this._ariaDescription)}" tabindex="${a(this.effectiveTabIndex)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @click="${this._onclick}" @keydown="${this._onkeydown}" title="${a(this.tooltip)}" aria-label="${a(this._ariaLabel)}"><ul class="ui5-rating-indicator-list" aria-hidden="true">${R(this._stars,(t,n)=>t._id||n,(t,n)=>W.call(this,o,e,i,t,n))}</ul></div>`}function W(o,e,i,t,n){return r`${t.selected?z.call(this,o,e,i,t,n):G.call(this,o,e,i,t,n)}`}function z(o,e,i,t,n){return i?r`<li data-ui5-value="${a(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-sel"><${s("ui5-icon",e,i)} data-ui5-value="${a(t.index)}" name="favorite"></${s("ui5-icon",e,i)}></li>`:r`<li data-ui5-value="${a(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-sel"><ui5-icon data-ui5-value="${a(t.index)}" name="favorite"></ui5-icon></li>`}function G(o,e,i,t,n){return r`${t.halfStar?H.call(this,o,e,i,t,n):X.call(this,o,e,i,t,n)}`}function H(o,e,i,t,n){return i?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-half"><${s("ui5-icon",e,i)} data-ui5-value="${a(t.index)}" name="unfavorite"></${s("ui5-icon",e,i)}><div class="ui5-rating-indicator-half-icon-wrapper"><${s("ui5-icon",e,i)} data-ui5-value="${a(t.index)}" name="favorite" class="ui5-rating-indicator-half-icon"></${s("ui5-icon",e,i)}></div></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-half"><ui5-icon data-ui5-value="${a(t.index)}" name="unfavorite"></ui5-icon><div class="ui5-rating-indicator-half-icon-wrapper"><ui5-icon data-ui5-value="${a(t.index)}" name="favorite" class="ui5-rating-indicator-half-icon"></ui5-icon></div></li>`}function X(o,e,i,t,n){return r`${this.readonly?J.call(this,o,e,i,t,n):K.call(this,o,e,i,t,n)}`}function J(o,e,i,t,n){return i?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${s("ui5-icon",e,i)} data-ui5-value="${a(t.index)}" name="favorite"></${s("ui5-icon",e,i)}></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${a(t.index)}" name="favorite"></ui5-icon></li>`}function K(o,e,i,t,n){return r`${this.disabled?Q.call(this,o,e,i,t,n):Y.call(this,o,e,i,t,n)}`}function Q(o,e,i,t,n){return i?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${s("ui5-icon",e,i)} data-ui5-value="${a(t.index)}" name="favorite"></${s("ui5-icon",e,i)}></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${a(t.index)}" name="favorite"></ui5-icon></li>`}function Y(o,e,i,t,n){return i?r`<li data-ui5-value="${a(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${s("ui5-icon",e,i)} data-ui5-value="${a(t.index)}" name="unfavorite"></${s("ui5-icon",e,i)}></li>`:r`<li data-ui5-value="${a(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${a(t.index)}" name="unfavorite"></ui5-icon></li>`}g("@ui5/webcomponents-theming","sap_fiori_3",async()=>b);g("@ui5/webcomponents","sap_fiori_3",async()=>y);const Z={packageName:"@ui5/webcomponents",fileName:"themes/RatingIndicator.css",content:`:host(:not([hidden])) {
	display: inline-block;
	font-size: 24px;
	margin: var(--_ui5_rating_indicator_component_spacing);
	cursor: pointer;
}

:host([disabled]) {
	opacity: .4;
	cursor: initial;
	outline: none;
}

:host([readonly]) {
	cursor: initial;
}

:host([disabled]) .ui5-rating-indicator-item-unsel,
:host([readonly]) .ui5-rating-indicator-item-unsel {
	padding-inline: var(--_ui5_rating_indicator_readonly_item_spacing);
	width: var(--_ui5_rating_indicator_readonly_item_width);
	height: var(--_ui5_rating_indicator_readonly_item_height);
}

:host(:not([readonly]):not([disabled])) .ui5-rating-indicator-root:hover {
	opacity: .9;
}

:host([_focused]) {
	outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	outline-offset: var(--_ui5_rating_indicator_outline_offset);
	border-radius: var(--_ui5_rating_indicator_border_radius);
}

[ui5-icon] {
	display: flex;
	text-shadow: var(--sapContent_TextShadow);
}

.ui5-rating-indicator-root {
	outline: none;
	position: relative;
}

.ui5-rating-indicator-list {
	list-style-type: none;
	display: flex;
	align-items: center;
	margin: 0;
	padding: 0;
}

.ui5-rating-indicator-item {
	position: relative;
	width: var(--_ui5_rating_indicator_item_width);
	height: var(--_ui5_rating_indicator_item_height);
}

.ui5-rating-indicator-item:not(:last-child) {
	margin-inline-end: 0.1875rem;
}

.ui5-rating-indicator-item [ui5-icon] {
	width: 100%;
	height: 100%;
	color: inherit;
	user-select: none;
}

.ui5-rating-indicator-item.ui5-rating-indicator-item-sel {
	color: var(--sapContent_RatedColor);
}

.ui5-rating-indicator-item.ui5-rating-indicator-item-unsel {
	color: var(--sapContent_UnratedColor);
}

.ui5-rating-indicator-item.ui5-rating-indicator-item-half {
	color: var(--sapContent_UnratedColor);
}

.ui5-rating-indicator-item [ui5-icon].ui5-rating-indicator-half-icon {
	position: absolute;
    inset-inline-start: 50%;
    color: var(--sapContent_RatedColor);
}

.ui5-rating-indicator-half-icon-wrapper {
	width: 100%;
    height: 100%;
    position: absolute;
    inset-inline-start: -50%;
    top: 0;
    z-index: 32;
    overflow: hidden;
}`};var d=globalThis&&globalThis.__decorate||function(o,e,i,t){var n=arguments.length,u=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(o,e,i,t);else for(var p=o.length-1;p>=0;p--)(h=o[p])&&(u=(n<3?h(u):n>3?h(e,i,u):h(e,i))||u);return n>3&&u&&Object.defineProperty(e,i,u),u},m;let l=m=class extends C{static async onDefine(){m.i18nBundle=await N("@ui5/webcomponents")}constructor(){super()}onBeforeRendering(){this.calcState()}calcState(){this._stars=[];for(let e=1;e<this.max+1;e++){const i=Math.round((this.value-Math.floor(this.value))*10);let t=!1,n=this.value;Math.floor(this.value)+1===e&&i>2&&i<8?t=!0:i<=2?n=Math.floor(this.value):i>=8&&(n=Math.ceil(this.value)),this._stars.push({selected:e<=n,index:e,halfStar:t})}}_onclick(e){const i=e.target;if(!(i instanceof HTMLElement)||this.disabled||this.readonly)return;const t=i.getAttribute("data-ui5-value");t!==null&&(this.value=parseInt(t),this.value===1&&this._liveValue===1&&(this.value=0),this._liveValue!==this.value&&(this.fireEvent("change"),this._liveValue=this.value))}_onkeydown(e){if(this.disabled||this.readonly)return;const i=D(e)||k(e),t=V(e)||A(e),n=q(e)||S(e),u=E(e),h=O(e),p=e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=105;if(i||t||n||u||h||p){if(e.preventDefault(),i&&this.value>0)this.value=Math.round(this.value-1);else if(t&&this.value<this.max)this.value=Math.round(this.value+1);else if(n){const f=Math.round(this.value+1);this.value=f>this.max?0:f}else if(u)this.value=0;else if(h)this.value=this.max;else if(p){const f=parseInt(e.key);this.value=f>this.max?this.max:f}this.fireEvent("change")}}_onfocusin(){this.disabled||(this._focused=!0,this._liveValue=this.value)}_onfocusout(){this._focused=!1}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?"-1":e||"0"}get tooltip(){return this.getAttribute("title")||this.defaultTooltip}get defaultTooltip(){return m.i18nBundle.getText(U)}get _ariaRoleDescription(){return m.i18nBundle.getText(L)}get _ariaDisabled(){return this.disabled||void 0}get _ariaLabel(){return M(this)}get _ariaDescription(){return this.required?m.i18nBundle.getText(j):void 0}get ariaReadonly(){return this.readonly?"true":void 0}};d([c({validator:B,defaultValue:0})],l.prototype,"value",void 0);d([c({validator:P,defaultValue:5})],l.prototype,"max",void 0);d([c({type:Boolean})],l.prototype,"disabled",void 0);d([c({type:Boolean})],l.prototype,"readonly",void 0);d([c()],l.prototype,"accessibleName",void 0);d([c({defaultValue:""})],l.prototype,"accessibleNameRef",void 0);d([c({type:Boolean})],l.prototype,"required",void 0);d([c({type:Object,multiple:!0})],l.prototype,"_stars",void 0);d([c({type:Boolean})],l.prototype,"_focused",void 0);l=m=d([$({tag:"ui5-rating-indicator",languageAware:!0,renderer:w,styles:Z,template:F,dependencies:[x]}),T("change")],l);l.define();const ee=l,ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"})),v=I("ui5-rating-indicator",["accessibleName","accessibleNameRef","max","value"],["disabled","readonly","required"],[],["change"],()=>_(()=>Promise.resolve().then(()=>ie),void 0,import.meta.url));v.displayName="RatingIndicator";v.defaultProps={max:5,value:0};try{v.displayName="RatingIndicator",v.__docgenInfo={description:`The Rating Indicator is used to display a specific number of icons that are used to rate an item. Additionally, it is also used to display the average and overall ratings.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-RatingIndicator" target="_blank">UI5 Web Components Storybook</ui5-link>`,displayName:"RatingIndicator",props:{onChange:{defaultValue:null,description:"The event is fired when the value changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RatingIndicatorDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"5"},description:"The number of displayed rating symbols.",name:"max",required:!1,type:{name:"number"}},readonly:{defaultValue:null,description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"0"},description:`The indicated value of the rating.

**Note:** If you set a number which is not round, it would be shown as follows:

*   1.0 - 1.2 -> 1
*   1.3 - 1.7 -> 1.5
*   1.8 - 1.9 -> 2`,name:"value",required:!1,type:{name:"number"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{v as R};
//# sourceMappingURL=index-ccd7f410.js.map
