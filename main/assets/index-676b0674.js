import{r as f,U as x,l as S}from"./UI5Element-a4bd3d38.js";import{b as a,l,d as s,s as P,a as $,p as u,c as R,f as T,w as z}from"./withWebComponent-7d7e5133.js";import{s as B}from"./slot-76e48863.js";import{c as M,e as L}from"./Icon-42236945.js";import{I as E,a as N}from"./ItemNavigation-0734b7c0.js";import{C as D}from"./CSSColor-f91c8158.js";import{i as I}from"./Device-6afa24d0.js";import{k as A,l as F,m as k,e as g,d as v}from"./Icons-74c917eb.js";import{g as w}from"./CustomElementsScopeUtils-137da8c8.js";import{o as j}from"./class-map-0ab40ab9.js";import{b as K}from"./Button-7043cfcf.js";import{aH as q,aI as V,aJ as U}from"./i18n-defaults-d675a36d.js";import{_ as H}from"./iframe-caf9e379.js";import{I as G}from"./Integer-f7f172c9.js";import{s as J}from"./style-map-132a30d8.js";function W(r,e,o){return a`<div class="${j(this.classes.colorPaletteRoot)}" @click=${this._onclick} @keyup=${this._onkeyup} @keydown=${this._onkeydown}>${this.showDefaultColor?X.call(this,r,e,o):void 0}<div class="ui5-cp-item-container" role="region" aria-label="${l(this.colorContainerLabel)}" @keydown="${this._onColorContainerKeyDown}">${M(this.displayedColors,(t,i)=>t._id||i,(t,i)=>Y.call(this,r,e,o,t,i))}</div>${this._showMoreColors?Q.call(this,r,e,o):void 0}${this.showRecentColors?Z.call(this,r,e,o):void 0}</div>`}function X(r,e,o){return o?a`<div class="ui5-cp-default-color-button-wrapper"><${s("ui5-button",e,o)} class="ui5-cp-default-color-button" design="Transparent" @click=${this._onDefaultColorClick} @keydown=${this._onDefaultColorKeyDown}>Default color</${s("ui5-button",e,o)}><div class="ui5-cp-separator"></div></div>`:a`<div class="ui5-cp-default-color-button-wrapper"><ui5-button class="ui5-cp-default-color-button" design="Transparent" @click=${this._onDefaultColorClick} @keydown=${this._onDefaultColorKeyDown}>Default color</ui5-button><div class="ui5-cp-separator"></div></div>`}function Y(r,e,o,t,i){return a`<slot name="${l(t._individualSlot)}"></slot>`}function Q(r,e,o){return o?a`<div class="ui5-cp-more-colors-wrapper"><div class="ui5-cp-separator"></div><${s("ui5-button",e,o)} design="Transparent" class="ui5-cp-more-colors" @click="${this._openMoreColorsDialog}" @keydown=${this._onMoreColorsKeyDown}>${l(this.colorPaleteMoreColorsText)}</${s("ui5-button",e,o)}></div>`:a`<div class="ui5-cp-more-colors-wrapper"><div class="ui5-cp-separator"></div><ui5-button design="Transparent" class="ui5-cp-more-colors" @click="${this._openMoreColorsDialog}" @keydown=${this._onMoreColorsKeyDown}>${l(this.colorPaleteMoreColorsText)}</ui5-button></div>`}function Z(r,e,o){return a`<div class="ui5-cp-recent-colors-wrapper"><div class="ui5-cp-separator"></div><div class="ui5-cp-recent-colors-container" @keydown="${this._onRecentColorsContainerKeyDown}">${M(this.recentColors,(t,i)=>t._id||i,(t,i)=>ee.call(this,r,e,o,t,i))}</div></div>`}function ee(r,e,o,t,i){return o?a`<${s("ui5-color-palette-item",e,o)} value="${l(t)}"></${s("ui5-color-palette-item",e,o)}>`:a`<ui5-color-palette-item value="${l(t)}"></ui5-color-palette-item>`}function oe(r,e,o){return o?a`<${s("ui5-dialog",e,o)} header-text="${l(this.moreColorsFeature.colorPaletteDialogTitle)}"><div class="ui5-cp-dialog-content"><${s("ui5-color-picker",e,o)}></${s("ui5-color-picker",e,o)}></div><div slot="footer" class="ui5-cp-dialog-footer"><${s("ui5-button",e,o)} design="Emphasized" @click="${this._chooseCustomColor}">${l(this.moreColorsFeature.colorPaletteDialogOKButton)}</${s("ui5-button",e,o)}><${s("ui5-button",e,o)} design="Transparent" @click="${this._closeDialog}">${l(this.moreColorsFeature.colorPaletteCancelButton)}</${s("ui5-button",e,o)}></div></${s("ui5-dialog",e,o)}>`:a`<ui5-dialog header-text="${l(this.moreColorsFeature.colorPaletteDialogTitle)}"><div class="ui5-cp-dialog-content"><ui5-color-picker></ui5-color-picker></div><div slot="footer" class="ui5-cp-dialog-footer"><ui5-button design="Emphasized" @click="${this._chooseCustomColor}">${l(this.moreColorsFeature.colorPaletteDialogOKButton)}</ui5-button><ui5-button design="Transparent" @click="${this._closeDialog}">${l(this.moreColorsFeature.colorPaletteCancelButton)}</ui5-button></div></ui5-dialog>`}function te(r,e,o){return a`<div class="ui5-cp-item" style="${J(this.styles.root)}" value="${l(this.value)}" tabindex="${l(this._tabIndex)}" role="button" aria-label="${l(this.colorLabel)} - ${l(this.index)}: ${l(this.value)}" title="${l(this.colorLabel)} - ${l(this.index)}: ${l(this.value)}" ?disabled="${this._disabled}"></div>`}f("@ui5/webcomponents-theming","sap_fiori_3",async()=>P);f("@ui5/webcomponents","sap_fiori_3",async()=>$);const re={packageName:"@ui5/webcomponents",fileName:"themes/ColorPaletteItem.css",content:`:host(:not([hidden])) {
	height: var(--_ui5_color-palette-item-height);
	width: var(--_ui5_color-palette-item-height);
	border: 1px solid var(--sapContent_ForegroundBorderColor);
	border-radius: var(--_ui5_color-palette-item-outer-border-radius);
	display: inline-block;
	margin: var(--_ui5_color-palette-item-margin);
	box-sizing: border-box;
}

:host(:not([_disabled]):hover) {
	height: var(--_ui5_color-palette-item-hover-height);
	width: var(--_ui5_color-palette-item-hover-height);
	margin: var(--_ui5_color-palette-item-hover-margin);
	border-radius: var(--_ui5_color-palette-item-hover-outer-border-radius);
}

:host(:not([hidden])[phone]) {
	height: 2.75rem;
	width: 2.75rem;
	border: 1px solid var(--sapContent_ForegroundBorderColor);
	border-radius: 0.25rem;
	display: inline-block;
	margin: 0.375rem;
}

.ui5-cp-item {
	position: relative;
	box-sizing: border-box;
	border-radius: var(--_ui5_color-palette-item-inner-border-radius);
	width: 100%;
	height: 100%;
}

:host(:not([_disabled]):not([phone]):hover) .ui5-cp-item {
	border-radius: var(--_ui5_color-palette-item-hover-inner-border-radius);
}

:host(:not([_disabled])[phone]) .ui5-cp-item {
	border-radius: 0.1875rem;
}

.ui5-cp-item:hover:not(:focus) {
	border: 1px solid var(--sapGroup_ContentBackground);
	border-radius: var(--_ui5_color-palette-item-hover-inner-border-radius);
	box-sizing: border-box;
}

:host(:not([_disabled]):not([phone])) .ui5-cp-item:focus{
	outline: none;
}

:host(:not([_disabled]):not([phone]):focus) .ui5-cp-item {
	pointer-events: none;
}

:host(:not([_disabled]):not([phone])) .ui5-cp-item:focus:not(:hover)::before {
	content: "";
	box-sizing: border-box;
	position: absolute;
	left: var(--_ui5_color-palette-item-before-focus-offset);
	top: var(--_ui5_color-palette-item-before-focus-offset);
	right: var(--_ui5_color-palette-item-before-focus-offset);
	bottom: var(--_ui5_color-palette-item-before-focus-offset);
	border: var(--_ui5_color-palette-item-before-focus-color);
	border-radius: var(--_ui5_color-palette-item-before-focus-border-radius);
	pointer-events: none;
}

:host(:not([_disabled])) .ui5-cp-item:focus:not(:hover)::after {
	content: "";
	box-sizing: border-box;
	position: absolute;
	left: var(--_ui5_color-palette-item-after-focus-offset);
	top: var(--_ui5_color-palette-item-after-focus-offset);
	right: var(--_ui5_color-palette-item-after-focus-offset);
	bottom: var(--_ui5_color-palette-item-after-focus-offset);
	border: var(--_ui5_color-palette-item-after-focus-color);
	border-radius: var(--_ui5_color-palette-item-after-focus-border-radius);
	pointer-events: none;
}

:host(:not([_disabled]):not([phone]):hover:focus) .ui5-cp-item:focus:not(:hover)::before {
	content: "";
	box-sizing: border-box;
	position: absolute;
	left: var(--_ui5_color-palette-item-before-focus-hover-offset);
	top: var(--_ui5_color-palette-item-before-focus-hover-offset);
	right: var(--_ui5_color-palette-item-before-focus-hover-offset);
	bottom: var(--_ui5_color-palette-item-before-focus-hover-offset);
	border: var(--_ui5_color-palette-item-before-focus-color);
	border-radius: var(--_ui5_color-palette-item-before-focus-border-radius);
	pointer-events: none;
}

:host(:not([_disabled]):not([phone]):hover:focus) .ui5-cp-item:focus:not(:hover)::after {
	content: "";
	box-sizing: border-box;
	position: absolute;
	left: var(--_ui5_color-palette-item-after-focus-hover-offset);
	top: var(--_ui5_color-palette-item-after-focus-hover-offset);
	right: var(--_ui5_color-palette-item-after-focus-hover-offset);
	bottom: var(--_ui5_color-palette-item-after-focus-hover-offset);
	border: var(--_ui5_color-palette-item-after-focus-color);
	border-radius: var(--_ui5_color-palette-item-after-focus-border-radius);
	pointer-events: none;
}
`};var _=globalThis&&globalThis.__decorate||function(r,e,o,t){var i=arguments.length,n=i<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,o,t);else for(var m=r.length-1;m>=0;m--)(h=r[m])&&(n=(i<3?h(n):i>3?h(e,o,n):h(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n},b;let p=b=class extends x{static async onDefine(){b.i18nBundle=await S("@ui5/webcomponents")}constructor(){super()}onBeforeRendering(){this._disabled=!this.value,this.phone=I()}get colorLabel(){return b.i18nBundle.getText(q)}get styles(){return{root:{"background-color":this.value}}}};_([u({validator:D})],p.prototype,"value",void 0);_([u({defaultValue:"-1",noAttribute:!0})],p.prototype,"_tabIndex",void 0);_([u({validator:G})],p.prototype,"index",void 0);_([u({type:Boolean})],p.prototype,"phone",void 0);_([u({type:Boolean})],p.prototype,"_disabled",void 0);p=b=_([R({tag:"ui5-color-palette-item",renderer:T,styles:re,template:te})],p);p.define();const O=p,ie=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));f("@ui5/webcomponents-theming","sap_fiori_3",async()=>P);f("@ui5/webcomponents","sap_fiori_3",async()=>$);const le={packageName:"@ui5/webcomponents",fileName:"themes/ColorPalette.css",content:`:host(:not([hidden])) {
	display: inline-block;
}

:host(:not([hidden])[popup-mode]) {
	width: 100%;
}

.ui5-cp-root {
	display: flex;
	flex-direction: column;
}

.ui5-cp-root.ui5-cp-root-phone,
.ui5-cp-separator,
.ui5-cp-root.ui5-cp-root-phone .ui5-cp-more-colors-wrapper,
.ui5-cp-root.ui5-cp-root-phone .ui5-cp-default-color-button-wrapper,
.ui5-cp-recent-colors-wrapper {
	width: 100%;
}

.ui5-cp-root.ui5-cp-root-phone .ui5-cp-item-container {
	width: 18.5rem;
	max-width: 19.5rem;
	max-height: 13rem;
	padding: 0.375rem 0.625rem;
}

.ui5-cp-recent-colors-wrapper {
	display: flex;
	align-items: center;
	flex-direction: column;
}

.ui5-cp-root.ui5-cp-root-phone {
	display: flex;
	align-items: center;
}

.ui5-cp-item-container {
	display: flex;
	max-width: var(--_ui5_color-palette-row-width);
	flex-flow: wrap;
	max-height: var(--_ui5_color-palette-row-height);
	overflow: hidden;
	padding: var(--_ui5_color-palette-swatch-container-padding);
}

.ui5-cp-separator {
	height: 0.0625rem;
	background: var(--sapToolbar_SeparatorColor);
}

.ui5-cp-more-colors,
.ui5-cp-default-color-button {
	width: 100%;
	height: var(--_ui5_color-palette-button-height);
	text-align: center;
	border: none;
}

.ui5-cp-more-colors-wrapper,
.ui5-cp-default-color-button-wrapper {
	display: flex;
	flex-direction: column;
}

.ui5-cp-separator {
	height: 0.0625rem;
	background: var(--sapToolbar_SeparatorColor);
}

.ui5-cp-default-color-button,
.ui5-cp-more-colors {
	padding: 0.0625rem;
}`};f("@ui5/webcomponents-theming","sap_fiori_3",async()=>P);f("@ui5/webcomponents","sap_fiori_3",async()=>$);const ne={packageName:"@ui5/webcomponents",fileName:"themes/ColorPaletteStaticArea.css",content:`.ui5-cp-dialog-content {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
}

.ui5-cp-dialog-footer {
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin: 0.1875rem 1rem;
}

.ui5-cp-dialog-footer [ui5-button]:first-child{
	margin-right: 1rem;
}
`};var d=globalThis&&globalThis.__decorate||function(r,e,o,t){var i=arguments.length,n=i<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,o,t);else for(var m=r.length-1;m>=0;m--)(h=r[m])&&(n=(i<3?h(n):i>3?h(e,o,n):h(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n},C;let c=C=class extends x{static async onDefine(){const e=w("ColorPaletteMoreColors");[C.i18nBundle]=await Promise.all([S("@ui5/webcomponents"),e?e.init():Promise.resolve()])}constructor(){super(),this._itemNavigation=new E(this,{getItemsCallback:()=>this.displayedColors,rowSize:this.rowSize,behavior:N.Cyclic}),this._itemNavigationRecentColors=new E(this,{getItemsCallback:()=>this.recentColorsElements,rowSize:this.rowSize,behavior:N.Static}),this._recentColors=[]}onBeforeRendering(){if(this.displayedColors.forEach((e,o)=>{e.index=o+1}),this.showMoreColors){const e=w("ColorPaletteMoreColors");if(e)this.moreColorsFeature=new e;else throw new Error('You have to import "@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js" module to use the more-colors functionality.')}}selectColor(e){e.value&&(e.focus(),this.displayedColors.includes(e)&&this._itemNavigation.setCurrentItem(e),this._setColor(e.value))}_setColor(e){this._selectedColor=e,this._recentColors[0]!==this._selectedColor&&(this._recentColors.includes(this._selectedColor)?this._recentColors.unshift(this._recentColors.splice(this._recentColors.indexOf(this._selectedColor),1)[0]):this._recentColors.unshift(this._selectedColor)),this.fireEvent("item-click",{color:this._selectedColor})}_onclick(e){const o=e.target;o.hasAttribute("ui5-color-palette-item")&&this.selectColor(o)}_onkeyup(e){const o=e.target;A(e)&&o.hasAttribute("ui5-color-palette-item")&&(e.preventDefault(),this.selectColor(o))}_onkeydown(e){const o=e.target;F(e)&&o.hasAttribute("ui5-color-palette-item")&&this.selectColor(o)}_onDefaultColorKeyDown(e){if(k(e)&&this.popupMode&&(e.preventDefault(),this._onDefaultColorClick()),g(e))e.stopPropagation(),this.focusColorElement(this.colorPaletteNavigationElements[1],this._itemNavigation);else if(v(e)){e.stopPropagation();const o=this.colorPaletteNavigationElements[this.colorPaletteNavigationElements.length-1];if(this.hasRecentColors)this.focusColorElement(o,this._itemNavigationRecentColors);else if(this.showMoreColors)o.focus();else{const t=this.displayedColors.length%this.rowSize*this.rowSize;this.focusColorElement(this.displayedColors[t],this._itemNavigation)}}}_onMoreColorsKeyDown(e){const o=e.target,t=this.colorPaletteNavigationElements.indexOf(o),i=this.displayedColors.length%this.rowSize*this.rowSize;v(e)?(e.stopPropagation(),this.focusColorElement(this.displayedColors[i],this._itemNavigation)):g(e)&&(e.stopPropagation(),this.hasRecentColors?this.focusColorElement(this.colorPaletteNavigationElements[t+1],this._itemNavigationRecentColors):this.showDefaultColor?this.colorPaletteNavigationElements[0].focus():this.focusColorElement(this.displayedColors[0],this._itemNavigation))}_onColorContainerKeyDown(e){const o=e.target,t=this.colorPaletteNavigationElements[this.colorPaletteNavigationElements.length-1];if(k(e)&&this.popupMode&&(e.preventDefault(),this.selectColor(o)),v(e)&&o===this.displayedColors[0]&&this.colorPaletteNavigationElements.length>1)e.stopPropagation(),this.showDefaultColor?this.colorPaletteNavigationElements[0].focus():!this.showDefaultColor&&this.hasRecentColors?this.focusColorElement(t,this._itemNavigationRecentColors):!this.showDefaultColor&&this.showMoreColors&&t.focus();else if(g(e)&&o===this.displayedColors[this.displayedColors.length-1]&&this.colorPaletteNavigationElements.length>1){e.stopPropagation();const i=this.showDefaultColor&&!this.showMoreColors&&this.hasRecentColors||!this.showDefaultColor&&!this.showMoreColors&&this.hasRecentColors;this.showDefaultColor&&this.showMoreColors?this.colorPaletteNavigationElements[2].focus():this.showDefaultColor&&!this.showMoreColors&&(!this.showRecentColors||!this.recentColors[0])?this.colorPaletteNavigationElements[0].focus():i?this.focusColorElement(t,this._itemNavigationRecentColors):!this.showDefaultColor&&this.showMoreColors&&this.colorPaletteNavigationElements[1].focus()}}_onRecentColorsContainerKeyDown(e){if(v(e)){if(this.showMoreColors){const o=this.showDefaultColor?2:1;this.colorPaletteNavigationElements[o].focus()}else if(!this.showMoreColors&&this.colorPaletteNavigationElements.length>1){const o=this.displayedColors.length%this.rowSize*this.rowSize;e.stopPropagation(),this.focusColorElement(this.displayedColors[o],this._itemNavigation)}}else g(e)&&(this.showDefaultColor?this.colorPaletteNavigationElements[0].focus():(e.stopPropagation(),this.focusColorElement(this.displayedColors[0],this._itemNavigation)))}focusColorElement(e,o){o.setCurrentItem(e),o._focusCurrentItem()}async _chooseCustomColor(){const e=await this.getColorPicker();this._setColor(e.color),this._closeDialog()}async _closeDialog(){(await this._getDialog()).close()}async _openMoreColorsDialog(){(await this._getDialog()).show()}_onDefaultColorClick(){this.defaultColor&&this._setColor(this.defaultColor)}get selectedColor(){return this._selectedColor}get displayedColors(){return this.getSlottedNodes("colors").filter(o=>o.value).slice(0,15)}get colorContainerLabel(){return C.i18nBundle.getText(V)}get colorPaleteMoreColorsText(){return C.i18nBundle.getText(U)}get _showMoreColors(){return this.showMoreColors&&this.moreColorsFeature}get rowSize(){return 5}get hasRecentColors(){return this.showRecentColors&&this.recentColors[0]}get recentColors(){for(this._recentColors.length>this.rowSize&&(this._recentColors=this._recentColors.slice(0,this.rowSize));this._recentColors.length<this.rowSize;)this._recentColors.push("");return this._recentColors}get recentColorsElements(){const e=this.getDomRef();return e?Array.from(e.querySelectorAll(".ui5-cp-recent-colors-wrapper [ui5-color-palette-item]")).filter(o=>o.value!==""):[]}get colorPaletteNavigationElements(){const e=[],o=this.shadowRoot.querySelector(".ui5-cp-root");return this.showDefaultColor&&e.push(o.querySelector(".ui5-cp-default-color-button")),e.push(this.displayedColors[0]),this.showMoreColors&&e.push(o.querySelector(".ui5-cp-more-colors")),this.showRecentColors&&this.recentColorsElements.length&&e.push(this.recentColorsElements[0]),e}get classes(){return{colorPaletteRoot:{"ui5-cp-root":!0,"ui5-cp-root-phone":I()}}}async _getDialog(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-dialog]")}async getColorPicker(){return(await this._getDialog()).content[0].querySelector("[ui5-color-picker]")}};d([u({type:Boolean})],c.prototype,"showRecentColors",void 0);d([u({type:Boolean})],c.prototype,"showMoreColors",void 0);d([u({type:Boolean})],c.prototype,"showDefaultColor",void 0);d([u({validator:D})],c.prototype,"defaultColor",void 0);d([u({validator:D})],c.prototype,"_selectedColor",void 0);d([u({type:Boolean})],c.prototype,"popupMode",void 0);d([B({default:!0,type:HTMLElement,invalidateOnChildChange:!0,individualSlots:!0})],c.prototype,"colors",void 0);c=C=d([R({tag:"ui5-color-palette",renderer:T,template:W,staticAreaTemplate:oe,styles:le,staticAreaStyles:ne,get dependencies(){const r=w("ColorPaletteMoreColors");return[O,K].concat(r?r.dependencies:[])}}),L("item-click",{detail:{color:{type:String}}})],c);c.define();const se=c,De=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"})),y=z("ui5-color-palette-item",["value"],[],[],[],()=>H(()=>Promise.resolve().then(()=>ie),void 0,import.meta.url));y.displayName="ColorPaletteItem";try{y.displayName="ColorPaletteItem",y.__docgenInfo={description:"The `ColorPaletteItem` component represents a color in the the `ColorPalette`",displayName:"ColorPaletteItem",props:{value:{defaultValue:null,description:`Defines the colour of the component.

**Note:** The value should be a valid CSS color.`,name:"value",required:!1,type:{name:"Color"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{y as C,se as a,De as b};
//# sourceMappingURL=index-676b0674.js.map
