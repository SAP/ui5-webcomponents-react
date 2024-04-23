function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{U as T}from"./UI5Element-9EXj3atz.js";import{a,l,b as n,s as D,p as u,c as R,f as S,w as O}from"./withWebComponent-LTFbYRvs.js";import{s as F}from"./slot-HSrR9XJ-.js";import{e as B}from"./event-lM5HanI-.js";import{b as M}from"./i18nBundle-j8vDD4VY.js";import{I as x,a as k}from"./ItemNavigation-F0c19DRy.js";import{C as E}from"./CSSColor-cu9KZbQi.js";import{r as v,l as w}from"./Boot-vTaFuwdG.js";import{n as A,m as L,k as N,e as _,d as g}from"./Keys-ZEuNsqmZ.js";import{g as y}from"./VersionInfo-ldzxTIVv.js";import{o as j}from"./class-map-gjOVarQw.js";import{c as I}from"./Icon-kyep1SqZ.js";import{b as K}from"./Button-DcwyQdV9.js";import{aU as q,aV as U,aW as V,aX as W}from"./i18n-defaults-X1FTyPSK.js";import{s as $}from"./parameters-bundle.css-EKzfhWK3.js";import{_ as X}from"./iframe-PMMZ518-.js";import{I as H}from"./Integer-kog98579.js";import{s as G}from"./style-map-tejh5TI3.js";function Y(r,o,e){return a`<div class="${j(this.classes.colorPaletteRoot)}" @click=${this._onclick} @keyup=${this._onkeyup} @keydown=${this._onkeydown}>${this.showDefaultColor?J.call(this,r,o,e):void 0}<div class="ui5-cp-item-container" role="region" aria-label="${l(this.colorContainerLabel)}" @keydown="${this._onColorContainerKeyDown}">${I(this.displayedColors,(t,i)=>t._id||i,(t,i)=>Q.call(this,r,o,e,t,i))}</div>${this._showMoreColors?Z.call(this,r,o,e):void 0}${this.showRecentColors?oo.call(this,r,o,e):void 0}</div>`}function J(r,o,e){return e?a`<div class="ui5-cp-default-color-button-wrapper"><${n("ui5-button",o,e)} class="ui5-cp-default-color-button" design="Transparent" @click=${this._onDefaultColorClick} @keydown=${this._onDefaultColorKeyDown}>${l(this.colorPaletteDefaultColorText)}</${n("ui5-button",o,e)}><div class="ui5-cp-separator"></div></div>`:a`<div class="ui5-cp-default-color-button-wrapper"><ui5-button class="ui5-cp-default-color-button" design="Transparent" @click=${this._onDefaultColorClick} @keydown=${this._onDefaultColorKeyDown}>${l(this.colorPaletteDefaultColorText)}</ui5-button><div class="ui5-cp-separator"></div></div>`}function Q(r,o,e,t,i){return a`<slot name="${l(t._individualSlot)}"></slot>`}function Z(r,o,e){return e?a`<div class="ui5-cp-more-colors-wrapper"><div class="ui5-cp-separator"></div><${n("ui5-button",o,e)} design="Transparent" class="ui5-cp-more-colors" @click="${this._openMoreColorsDialog}" @keydown=${this._onMoreColorsKeyDown}>${l(this.colorPaletteMoreColorsText)}</${n("ui5-button",o,e)}></div>`:a`<div class="ui5-cp-more-colors-wrapper"><div class="ui5-cp-separator"></div><ui5-button design="Transparent" class="ui5-cp-more-colors" @click="${this._openMoreColorsDialog}" @keydown=${this._onMoreColorsKeyDown}>${l(this.colorPaletteMoreColorsText)}</ui5-button></div>`}function oo(r,o,e){return a`<div class="ui5-cp-recent-colors-wrapper"><div class="ui5-cp-separator"></div><div class="ui5-cp-recent-colors-container" @keydown="${this._onRecentColorsContainerKeyDown}">${I(this.recentColors,(t,i)=>t._id||i,(t,i)=>eo.call(this,r,o,e,t,i))}</div></div>`}function eo(r,o,e,t,i){return e?a`<${n("ui5-color-palette-item",o,e)} value="${l(t)}"></${n("ui5-color-palette-item",o,e)}>`:a`<ui5-color-palette-item value="${l(t)}"></ui5-color-palette-item>`}function to(r,o,e){return e?a`<${n("ui5-dialog",o,e)} header-text="${l(this.moreColorsFeature.colorPaletteDialogTitle)}"><div class="ui5-cp-dialog-content"><${n("ui5-color-picker",o,e)}></${n("ui5-color-picker",o,e)}></div><div slot="footer" class="ui5-cp-dialog-footer"><${n("ui5-button",o,e)} design="Emphasized" @click="${this._chooseCustomColor}">${l(this.moreColorsFeature.colorPaletteDialogOKButton)}</${n("ui5-button",o,e)}><${n("ui5-button",o,e)} design="Transparent" @click="${this._closeDialog}">${l(this.moreColorsFeature.colorPaletteCancelButton)}</${n("ui5-button",o,e)}></div></${n("ui5-dialog",o,e)}>`:a`<ui5-dialog header-text="${l(this.moreColorsFeature.colorPaletteDialogTitle)}"><div class="ui5-cp-dialog-content"><ui5-color-picker></ui5-color-picker></div><div slot="footer" class="ui5-cp-dialog-footer"><ui5-button design="Emphasized" @click="${this._chooseCustomColor}">${l(this.moreColorsFeature.colorPaletteDialogOKButton)}</ui5-button><ui5-button design="Transparent" @click="${this._closeDialog}">${l(this.moreColorsFeature.colorPaletteCancelButton)}</ui5-button></div></ui5-dialog>`}function ro(r,o,e){return a`<div class="ui5-cp-item" style="${G(this.styles.root)}" value="${l(this.value)}" tabindex="${l(this.forcedTabIndex)}" role="button" aria-label="${l(this.colorLabel)} - ${l(this.index)}: ${l(this.value)}" title="${l(this.colorLabel)} - ${l(this.index)}: ${l(this.value)}" ?disabled="${this._disabled}"></div>`}v("@ui5/webcomponents-theming","sap_horizon",async()=>D);v("@ui5/webcomponents","sap_horizon",async()=>$);const io={packageName:"@ui5/webcomponents",fileName:"themes/ColorPaletteItem.css.ts",content:`:host(:not([hidden])){height:var(--_ui5-v1-23-1_color-palette-item-height);width:var(--_ui5-v1-23-1_color-palette-item-height);border:1px solid var(--sapContent_ForegroundBorderColor);border-radius:var(--_ui5-v1-23-1_color-palette-item-outer-border-radius);display:inline-block;margin:var(--_ui5-v1-23-1_color-palette-item-margin);box-sizing:border-box}:host(:not([_disabled]):hover){height:var(--_ui5-v1-23-1_color-palette-item-hover-height);width:var(--_ui5-v1-23-1_color-palette-item-hover-height);margin:var(--_ui5-v1-23-1_color-palette-item-hover-margin);border-radius:var(--_ui5-v1-23-1_color-palette-item-hover-outer-border-radius)}:host(:not([hidden])[on-phone]){width:100%;padding-top:calc(100% - 2px);border:1px solid var(--sapContent_ForegroundBorderColor);border-radius:.25rem;display:inline-block;margin:0;max-width:4.5rem;max-height:4.5rem;height:auto}.ui5-cp-item{position:relative;box-sizing:border-box;border-radius:var(--_ui5-v1-23-1_color-palette-item-inner-border-radius);width:100%;height:100%}:host(:not([_disabled]):not([on-phone]):hover) .ui5-cp-item{border-radius:var(--_ui5-v1-23-1_color-palette-item-hover-inner-border-radius)}:host(:not([_disabled])[on-phone]) .ui5-cp-item{border-radius:.1875rem}.ui5-cp-item:hover:not(:focus){border:1px solid var(--sapGroup_ContentBackground);border-radius:var(--_ui5-v1-23-1_color-palette-item-hover-inner-border-radius);box-sizing:border-box}:host(:not([_disabled]):not([on-phone])) .ui5-cp-item:focus{outline:none}:host(:not([_disabled]):not([on-phone]):focus) .ui5-cp-item{pointer-events:none}:host(:not([_disabled]):not([on-phone])) .ui5-cp-item:focus:not(:hover):before{content:"";box-sizing:border-box;position:absolute;left:var(--_ui5-v1-23-1_color-palette-item-before-focus-offset);top:var(--_ui5-v1-23-1_color-palette-item-before-focus-offset);right:var(--_ui5-v1-23-1_color-palette-item-before-focus-offset);bottom:var(--_ui5-v1-23-1_color-palette-item-before-focus-offset);border:var(--_ui5-v1-23-1_color-palette-item-before-focus-color);border-radius:var(--_ui5-v1-23-1_color-palette-item-before-focus-border-radius);pointer-events:none}:host(:not([_disabled]):not([on-phone])) .ui5-cp-item:focus:not(:hover):after{content:"";box-sizing:border-box;position:absolute;left:var(--_ui5-v1-23-1_color-palette-item-after-focus-offset);top:var(--_ui5-v1-23-1_color-palette-item-after-focus-offset);right:var(--_ui5-v1-23-1_color-palette-item-after-focus-offset);bottom:var(--_ui5-v1-23-1_color-palette-item-after-focus-offset);border:var(--_ui5-v1-23-1_color-palette-item-after-focus-color);border-radius:var(--_ui5-v1-23-1_color-palette-item-after-focus-border-radius);pointer-events:none}:host(:not([_disabled]):not([on-phone]):hover:focus) .ui5-cp-item:focus:not(:hover):before{content:"";box-sizing:border-box;position:absolute;left:var(--_ui5-v1-23-1_color-palette-item-before-focus-hover-offset);top:var(--_ui5-v1-23-1_color-palette-item-before-focus-hover-offset);right:var(--_ui5-v1-23-1_color-palette-item-before-focus-hover-offset);bottom:var(--_ui5-v1-23-1_color-palette-item-before-focus-hover-offset);border:var(--_ui5-v1-23-1_color-palette-item-before-focus-color);border-radius:var(--_ui5-v1-23-1_color-palette-item-before-focus-border-radius);pointer-events:none}:host(:not([_disabled]):not([on-phone]):hover:focus) .ui5-cp-item:focus:not(:hover):after{content:"";box-sizing:border-box;position:absolute;left:var(--_ui5-v1-23-1_color-palette-item-after-focus-hover-offset);top:var(--_ui5-v1-23-1_color-palette-item-after-focus-hover-offset);right:var(--_ui5-v1-23-1_color-palette-item-after-focus-hover-offset);bottom:var(--_ui5-v1-23-1_color-palette-item-after-focus-hover-offset);border:var(--_ui5-v1-23-1_color-palette-item-after-focus-color);border-radius:var(--_ui5-v1-23-1_color-palette-item-after-focus-border-radius);pointer-events:none}
`};var C=function(r,o,e,t){var i=arguments.length,s=i<3?o:t===null?t=Object.getOwnPropertyDescriptor(o,e):t,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,o,e,t);else for(var m=r.length-1;m>=0;m--)(h=r[m])&&(s=(i<3?h(s):i>3?h(o,e,s):h(o,e))||s);return i>3&&s&&Object.defineProperty(o,e,s),s},b;let p=b=class extends T{static async onDefine(){b.i18nBundle=await M("@ui5/webcomponents")}constructor(){super()}onBeforeRendering(){this._disabled=!this.value,this.onPhone=w(),this.setAttribute("style",`background-color: ${this.value}`)}get colorLabel(){return b.i18nBundle.getText(q)}get styles(){return{root:{"background-color":this.value}}}};C([u({validator:E})],p.prototype,"value",void 0);C([u({defaultValue:"-1",noAttribute:!0})],p.prototype,"forcedTabIndex",void 0);C([u({validator:H})],p.prototype,"index",void 0);C([u({type:Boolean})],p.prototype,"onPhone",void 0);C([u({type:Boolean})],p.prototype,"_disabled",void 0);p=b=C([R({tag:"ui5-color-palette-item",renderer:S,styles:io,template:ro})],p);p.define();const z=p,lo=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));v("@ui5/webcomponents-theming","sap_horizon",async()=>D);v("@ui5/webcomponents","sap_horizon",async()=>$);const so={packageName:"@ui5/webcomponents",fileName:"themes/ColorPalette.css.ts",content:`:host(:not([hidden])){display:inline-block}:host(:not([hidden])[popup-mode]),:host(:not([hidden])[on-phone]){width:100%;overflow:hidden}.ui5-cp-root{display:flex;flex-direction:column}.ui5-cp-root.ui5-cp-root-phone,.ui5-cp-separator,.ui5-cp-root.ui5-cp-root-phone .ui5-cp-more-colors-wrapper,.ui5-cp-root.ui5-cp-root-phone .ui5-cp-default-color-button-wrapper,.ui5-cp-recent-colors-wrapper{width:100%}.ui5-cp-root.ui5-cp-root-phone .ui5-cp-item-container{padding:.375rem .625rem;width:100%;max-width:100%;max-height:100%;box-sizing:border-box}.ui5-cp-root-phone .ui5-cp-default-color-button,.ui5-cp-root-phone .ui5-cp-more-colors,.ui5-cp-root-phone .ui5-cp-more-colors-wrapper,.ui5-cp-root-phone .ui5-cp-default-color-button-wrapper{height:2.875rem}.ui5-cp-root-phone .ui5-cp-item-container{display:grid;grid-template-columns:repeat(5,1fr);grid-gap:.75rem}.ui5-cp-root-phone .ui5-cp-recent-colors-container{padding:.375rem .625rem;display:grid;grid-template-columns:repeat(5,1fr);grid-gap:.75rem;width:100%;box-sizing:border-box}.ui5-cp-root-phone .ui5-cp-recent-colors-wrapper{max-width:100%;padding:0;display:flex;justify-content:center;flex-flow:wrap;max-height:var(--_ui5-v1-23-1_color-palette-row-height);overflow:hidden}.ui5-cp-recent-colors-wrapper{display:flex;align-items:center;flex-direction:column}.ui5-cp-root.ui5-cp-root-phone{display:flex}.ui5-cp-item-container{display:flex;max-width:var(--_ui5-v1-23-1_color-palette-row-width);flex-flow:wrap;max-height:var(--_ui5-v1-23-1_color-palette-row-height);overflow:hidden;padding:var(--_ui5-v1-23-1_color-palette-swatch-container-padding)}.ui5-cp-more-colors,.ui5-cp-default-color-button{width:100%;height:var(--_ui5-v1-23-1_color-palette-button-height);text-align:center;border:none}.ui5-cp-more-colors-wrapper,.ui5-cp-default-color-button-wrapper{display:flex;flex-direction:column}.ui5-cp-separator{height:.0625rem;background:var(--sapToolbar_SeparatorColor)}.ui5-cp-default-color-button,.ui5-cp-more-colors{padding:.0625rem}
`};v("@ui5/webcomponents-theming","sap_horizon",async()=>D);v("@ui5/webcomponents","sap_horizon",async()=>$);const no={packageName:"@ui5/webcomponents",fileName:"themes/ColorPaletteStaticArea.css.ts",content:`.ui5-cp-dialog-content{display:flex;justify-content:center;align-items:center;margin:1rem 0}.ui5-cp-dialog-footer{width:100%;display:flex;justify-content:flex-end;margin:.1875rem 1rem}.ui5-cp-dialog-footer [ui5-button]:first-child{margin-right:1rem}
`};var d=function(r,o,e,t){var i=arguments.length,s=i<3?o:t===null?t=Object.getOwnPropertyDescriptor(o,e):t,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,o,e,t);else for(var m=r.length-1;m>=0;m--)(h=r[m])&&(s=(i<3?h(s):i>3?h(o,e,s):h(o,e))||s);return i>3&&s&&Object.defineProperty(o,e,s),s},f;let c=f=class extends T{static async onDefine(){const o=y("ColorPaletteMoreColors");[f.i18nBundle]=await Promise.all([M("@ui5/webcomponents"),o?o.init():Promise.resolve()])}constructor(){super(),this._itemNavigation=new x(this,{getItemsCallback:()=>this.displayedColors,rowSize:this.rowSize,behavior:k.Cyclic}),this._itemNavigationRecentColors=new x(this,{getItemsCallback:()=>this.recentColorsElements,rowSize:this.rowSize,behavior:k.Static}),this._recentColors=[]}onBeforeRendering(){if(this.displayedColors.forEach((o,e)=>{o.index=e+1}),this.showMoreColors){const o=y("ColorPaletteMoreColors");if(o)this.moreColorsFeature=new o;else throw new Error('You have to import "@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js" module to use the more-colors functionality.')}this.onPhone=w()}onAfterRendering(){this.popupMode&&(this.showDefaultColor?this.focusFirstFocusableElement():this.focusFirstDisplayColorElement())}selectColor(o){o.value&&(o.focus(),this.displayedColors.includes(o)&&this._itemNavigation.setCurrentItem(o),this._setColor(o.value))}_setColor(o){this._selectedColor=o,this._recentColors[0]!==this._selectedColor&&(this._recentColors.includes(this._selectedColor)?this._recentColors.unshift(this._recentColors.splice(this._recentColors.indexOf(this._selectedColor),1)[0]):this._recentColors.unshift(this._selectedColor)),this.fireEvent("item-click",{color:this._selectedColor})}_onclick(o){const e=o.target;e.hasAttribute("ui5-color-palette-item")&&this.selectColor(e)}_onkeyup(o){const e=o.target;A(o)&&e.hasAttribute("ui5-color-palette-item")&&(o.preventDefault(),this.selectColor(e))}_onkeydown(o){const e=o.target;L(o)&&e.hasAttribute("ui5-color-palette-item")&&this.selectColor(e)}_onDefaultColorKeyDown(o){if(N(o)&&this.popupMode&&(o.preventDefault(),this._onDefaultColorClick()),_(o))o.stopPropagation(),this.focusColorElement(this.colorPaletteNavigationElements[1],this._itemNavigation);else if(g(o)){o.stopPropagation();const e=this.colorPaletteNavigationElements[this.colorPaletteNavigationElements.length-1];if(this.hasRecentColors)this.focusColorElement(e,this._itemNavigationRecentColors);else if(this.showMoreColors)e.focus();else{const t=this.displayedColors.length%this.rowSize*this.rowSize;this.focusColorElement(this.displayedColors[t],this._itemNavigation)}}}_onMoreColorsKeyDown(o){const e=o.target,t=this.colorPaletteNavigationElements.indexOf(e),i=this.displayedColors.length%this.rowSize*this.rowSize;g(o)?(o.stopPropagation(),this.focusColorElement(this.displayedColors[i],this._itemNavigation)):_(o)&&(o.stopPropagation(),this.hasRecentColors?this.focusColorElement(this.colorPaletteNavigationElements[t+1],this._itemNavigationRecentColors):this.showDefaultColor?this.firstFocusableElement.focus():this.focusColorElement(this.displayedColors[0],this._itemNavigation))}_onColorContainerKeyDown(o){const e=o.target,t=this.colorPaletteNavigationElements[this.colorPaletteNavigationElements.length-1];if(N(o)&&this.popupMode&&(o.preventDefault(),this.selectColor(e)),g(o)&&e===this.displayedColors[0]&&this.colorPaletteNavigationElements.length>1)o.stopPropagation(),this.showDefaultColor?this.firstFocusableElement.focus():!this.showDefaultColor&&this.hasRecentColors?this.focusColorElement(t,this._itemNavigationRecentColors):!this.showDefaultColor&&this.showMoreColors&&t.focus();else if(_(o)&&e===this.displayedColors[this.displayedColors.length-1]&&this.colorPaletteNavigationElements.length>1){o.stopPropagation();const i=this.showDefaultColor&&!this.showMoreColors&&this.hasRecentColors||!this.showDefaultColor&&!this.showMoreColors&&this.hasRecentColors;this.showDefaultColor&&this.showMoreColors?this.colorPaletteNavigationElements[2].focus():this.showDefaultColor&&!this.showMoreColors&&(!this.showRecentColors||!this.recentColors[0])?this.firstFocusableElement.focus():i?this.focusColorElement(t,this._itemNavigationRecentColors):!this.showDefaultColor&&this.showMoreColors&&this.colorPaletteNavigationElements[1].focus()}}_onRecentColorsContainerKeyDown(o){if(g(o)){if(this.showMoreColors){const e=this.showDefaultColor?2:1;this.colorPaletteNavigationElements[e].focus()}else if(!this.showMoreColors&&this.colorPaletteNavigationElements.length>1){const e=this.displayedColors.length%this.rowSize*this.rowSize;o.stopPropagation(),this.focusColorElement(this.displayedColors[e],this._itemNavigation)}}else _(o)&&(this.showDefaultColor?this.firstFocusableElement.focus():(o.stopPropagation(),this.focusColorElement(this.displayedColors[0],this._itemNavigation)))}focusColorElement(o,e){e.setCurrentItem(o),e._focusCurrentItem()}focusFirstDisplayColorElement(){this.focusColorElement(this.displayedColors[0],this._itemNavigation)}focusFirstFocusableElement(){this.firstFocusableElement.focus()}get firstFocusableElement(){return this.colorPaletteNavigationElements[0]}async _chooseCustomColor(){const o=await this.getColorPicker();this._setColor(o.color),this._closeDialog()}async _closeDialog(){(await this._getDialog()).close()}async _openMoreColorsDialog(){(await this._getDialog()).show()}_onDefaultColorClick(){this.defaultColor&&this._setColor(this.defaultColor)}get selectedColor(){return this._selectedColor}get displayedColors(){return this.getSlottedNodes("colors").filter(e=>e.value).slice(0,15)}get colorContainerLabel(){return f.i18nBundle.getText(U)}get colorPaletteMoreColorsText(){return f.i18nBundle.getText(V)}get colorPaletteDefaultColorText(){return f.i18nBundle.getText(W)}get _showMoreColors(){return this.showMoreColors&&this.moreColorsFeature}get rowSize(){return 5}get hasRecentColors(){return this.showRecentColors&&this.recentColors[0]}get recentColors(){for(this._recentColors.length>this.rowSize&&(this._recentColors=this._recentColors.slice(0,this.rowSize));this._recentColors.length<this.rowSize;)this._recentColors.push("");return this._recentColors}get recentColorsElements(){const o=this.getDomRef();return o?Array.from(o.querySelectorAll(".ui5-cp-recent-colors-wrapper [ui5-color-palette-item]")).filter(e=>e.value!==""):[]}get colorPaletteNavigationElements(){const o=[],e=this.shadowRoot.querySelector(".ui5-cp-root");return this.showDefaultColor&&o.push(e.querySelector(".ui5-cp-default-color-button")),o.push(this.displayedColors[0]),this.showMoreColors&&o.push(e.querySelector(".ui5-cp-more-colors")),this.showRecentColors&&this.recentColorsElements.length&&o.push(this.recentColorsElements[0]),o}get classes(){return{colorPaletteRoot:{"ui5-cp-root":!0,"ui5-cp-root-phone":w()}}}async _getDialog(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-dialog]")}async getColorPicker(){return(await this._getDialog()).content[0].querySelector("[ui5-color-picker]")}};d([u({type:Boolean})],c.prototype,"showRecentColors",void 0);d([u({type:Boolean})],c.prototype,"showMoreColors",void 0);d([u({type:Boolean})],c.prototype,"showDefaultColor",void 0);d([u({validator:E})],c.prototype,"defaultColor",void 0);d([u({validator:E})],c.prototype,"_selectedColor",void 0);d([u({type:Boolean})],c.prototype,"popupMode",void 0);d([u({type:Boolean})],c.prototype,"onPhone",void 0);d([F({default:!0,type:HTMLElement,invalidateOnChildChange:!0,individualSlots:!0})],c.prototype,"colors",void 0);c=f=d([R({tag:"ui5-color-palette",renderer:S,template:Y,staticAreaTemplate:to,styles:so,staticAreaStyles:no,get dependencies(){const r=y("ColorPaletteMoreColors");return[z,K].concat(r?r.dependencies:[])}}),B("item-click",{detail:{color:{type:String}}})],c);c.define();const ao=c,To=Object.freeze(Object.defineProperty({__proto__:null,default:ao},Symbol.toStringTag,{value:"Module"})),P=O("ui5-color-palette-item",["value"],[],[],[],()=>X(()=>Promise.resolve().then(()=>lo),void 0,import.meta.url));P.displayName="ColorPaletteItem";try{P.displayName="ColorPaletteItem",P.__docgenInfo={description:"The `ColorPaletteItem` component represents a color in the the `ColorPalette`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)",displayName:"ColorPaletteItem",props:{value:{defaultValue:{value:"undefined"},description:`Defines the colour of the component.

**Note:** The value should be a valid CSS color.`,name:"value",required:!1,type:{name:"Color"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{P as C,ao as a,To as b};
