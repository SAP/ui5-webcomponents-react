import{h as c,j as n,f as _,s as D,a,m as k,k as R,I,w as F}from"./withWebComponent-CPW0iYAf.js";import{d as A}from"./slot-_4yKMUwC.js";import{s as L}from"./event-Dq0fpeHi.js";import{f as T}from"./i18nBundle-shm5Q6c6.js";import{f as E,l as S}from"./ItemNavigation-CIi6TzBH.js";import{d as P,a as y,b as x,H as N,D as v,c as b}from"./Keys-F_3Gvx0K.js";import{F as M}from"./utils-B4B9qFe5.js";import{o as O}from"./class-map-CQfLTfub.js";import{l}from"./if-defined-BCPYWAh1.js";import{c as z}from"./Icon-BIxZr4TA.js";import{b as K}from"./Button-BsDFAdhY.js";import{aT as j,aU as q,aV as U,aW as V}from"./i18n-defaults-DRoh8QZU.js";import{s as $}from"./parameters-bundle.css-DJWIHzS2.js";import{_ as W}from"./iframe-D7O9TNL9.js";import{s as H}from"./style-map-Do0KrzH5.js";function X(i,e,o){return c`<div class="${O(this.classes.colorPaletteRoot)}" @click=${this._onclick} @keyup=${this._onkeyup} @keydown=${this._onkeydown}>${this.showDefaultColor?G.call(this,i,e,o):void 0}<div class="ui5-cp-item-container" role="region" aria-label="${l(this.colorContainerLabel)}" @keydown="${this._onColorContainerKeyDown}">${z(this.displayedColors,(t,r)=>t._id||r,(t,r)=>J.call(this,i,e,o,t,r))}</div>${this._showMoreColors?Q.call(this,i,e,o):void 0}${this.showRecentColors?Y.call(this,i,e,o):void 0}</div>${this._effectiveShowMoreColors?ee.call(this,i,e,o):void 0} `}function G(i,e,o){return o?c`<div class="ui5-cp-default-color-button-wrapper"><${n("ui5-button",e,o)} class="ui5-cp-default-color-button" design="Transparent" @click=${this._onDefaultColorClick} @keydown=${this._onDefaultColorKeyDown} @keyup=${this._onDefaultColorKeyUp}>${l(this.colorPaletteDefaultColorText)}</${n("ui5-button",e,o)}><div class="ui5-cp-separator"></div></div>`:c`<div class="ui5-cp-default-color-button-wrapper"><ui5-button class="ui5-cp-default-color-button" design="Transparent" @click=${this._onDefaultColorClick} @keydown=${this._onDefaultColorKeyDown} @keyup=${this._onDefaultColorKeyUp}>${l(this.colorPaletteDefaultColorText)}</ui5-button><div class="ui5-cp-separator"></div></div>`}function J(i,e,o,t,r){return c`<slot name="${l(t._individualSlot)}"></slot>`}function Q(i,e,o){return o?c`<div class="ui5-cp-more-colors-wrapper"><div class="ui5-cp-separator"></div><${n("ui5-button",e,o)} design="Transparent" class="ui5-cp-more-colors" @click="${this._openMoreColorsDialog}" @keydown=${this._onMoreColorsKeyDown}>${l(this.colorPaletteMoreColorsText)}</${n("ui5-button",e,o)}></div>`:c`<div class="ui5-cp-more-colors-wrapper"><div class="ui5-cp-separator"></div><ui5-button design="Transparent" class="ui5-cp-more-colors" @click="${this._openMoreColorsDialog}" @keydown=${this._onMoreColorsKeyDown}>${l(this.colorPaletteMoreColorsText)}</ui5-button></div>`}function Y(i,e,o){return c`<div class="ui5-cp-recent-colors-wrapper"><div class="ui5-cp-separator"></div><div class="ui5-cp-recent-colors-container" @keydown="${this._onRecentColorsContainerKeyDown}">${z(this.recentColors,(t,r)=>t._id||r,(t,r)=>Z.call(this,i,e,o,t,r))}</div></div>`}function Z(i,e,o,t,r){return o?c`<${n("ui5-color-palette-item",e,o)} value="${l(t)}"></${n("ui5-color-palette-item",e,o)}>`:c`<ui5-color-palette-item value="${l(t)}"></ui5-color-palette-item>`}function ee(i,e,o){return o?c`<${n("ui5-dialog",e,o)} header-text="${l(this.colorPaletteDialogTitle)}"><div class="ui5-cp-dialog-content"><${n("ui5-color-picker",e,o)}></${n("ui5-color-picker",e,o)}></div><div slot="footer" class="ui5-cp-dialog-footer"><${n("ui5-button",e,o)} design="Emphasized" @click="${this._chooseCustomColor}">${l(this.colorPaletteDialogOKButton)}</${n("ui5-button",e,o)}><${n("ui5-button",e,o)} design="Transparent" @click="${this._closeDialog}">${l(this.colorPaletteCancelButton)}</${n("ui5-button",e,o)}></div></${n("ui5-dialog",e,o)}>`:c`<ui5-dialog header-text="${l(this.colorPaletteDialogTitle)}"><div class="ui5-cp-dialog-content"><ui5-color-picker></ui5-color-picker></div><div slot="footer" class="ui5-cp-dialog-footer"><ui5-button design="Emphasized" @click="${this._chooseCustomColor}">${l(this.colorPaletteDialogOKButton)}</ui5-button><ui5-button design="Transparent" @click="${this._closeDialog}">${l(this.colorPaletteCancelButton)}</ui5-button></div></ui5-dialog>`}function oe(i,e,o){return c`<div class="${O(this.classes.root)}" style="${H(this.styles.root)}" value="${l(this.value)}" tabindex="${l(this.forcedTabIndex)}" role="button" aria-label="${l(this.colorLabel)} - ${l(this.index)}: ${l(this.value)}" title="${l(this.colorLabel)} - ${l(this.index)}: ${l(this.value)}" ?disabled="${this._disabled}"></div>`}_("@ui5/webcomponents-theming","sap_horizon",async()=>D);_("@ui5/webcomponents","sap_horizon",async()=>$);const te={packageName:"@ui5/webcomponents",fileName:"themes/ColorPaletteItem.css.ts",content:`:host(:not([hidden])){height:var(--_ui5-v2-1-1_color-palette-item-height);width:var(--_ui5-v2-1-1_color-palette-item-height);border:.0625rem solid var(--sapContent_ForegroundBorderColor);border-radius:var(--_ui5-v2-1-1_color-palette-item-outer-border-radius);display:inline-block;margin:var(--_ui5-v2-1-1_color-palette-item-margin);box-sizing:border-box}:host(:not([_disabled]):hover),:host([selected]){height:var(--_ui5-v2-1-1_color-palette-item-hover-height);width:var(--_ui5-v2-1-1_color-palette-item-hover-height);margin:var(--_ui5-v2-1-1_color-palette-item-hover-margin);border-radius:var(--_ui5-v2-1-1_color-palette-item-hover-outer-border-radius)}:host(:not([hidden])[on-phone]){width:calc(100% - .5rem);padding-block-start:calc(100% - .625rem);border:.0625rem solid var(--sapContent_ForegroundBorderColor);border-radius:.25rem;display:inline-block;margin:.625rem;height:0;max-width:4.5rem;max-height:4.5rem}:host([selected][on-phone]){padding-block-start:calc(100% - .125rem);width:100%;margin:0}.ui5-cp-item{position:relative;box-sizing:border-box;border-radius:var(--_ui5-v2-1-1_color-palette-item-inner-border-radius);width:100%;height:100%}:host(:not([_disabled]):not([on-phone]):hover) .ui5-cp-item{border-radius:var(--_ui5-v2-1-1_color-palette-item-hover-inner-border-radius)}:host(:not([_disabled])[on-phone]) .ui5-cp-item{border-radius:.1875rem}.ui5-cp-item:hover:not(:focus),:host([selected]:not([on-phone])) .ui5-cp-item{border-radius:var(--_ui5-v2-1-1_color-palette-item-hover-inner-border-radius);box-sizing:border-box}:host(:not([_disabled]):not([on-phone])) .ui5-cp-item:focus,:host([selected]:not([_disabled]):not([on-phone]):hover:focus) .ui5-cp-item{border:var(--_ui5-v2-1-1_color-palette-item-selected-focused-border)}:host([selected]) .ui5-cp-item:focus,:host(:not([_disabled])) .ui5-cp-item:focus{outline:none}:host(:not([_disabled]):not([on-phone]):focus) .ui5-cp-item{pointer-events:none}:host(:not([_disabled]):not([on-phone])) .ui5-cp-item:focus:not(:hover):before{content:"";box-sizing:border-box;position:absolute;inset:var(--_ui5-v2-1-1_color-palette-item-before-focus-inset);border:var(--_ui5-v2-1-1_color-palette-item-before-focus-color);border-radius:var(--_ui5-v2-1-1_color-palette-item-before-focus-border-radius);pointer-events:none}:host(:not([_disabled]):not([on-phone])) .ui5-cp-item:focus:not(:hover):after{content:"";box-sizing:border-box;position:absolute;inset:var(--_ui5-v2-1-1_color-palette-item-after-focus-inset);border:var(--_ui5-v2-1-1_color-palette-item-after-focus-color);border-radius:var(--_ui5-v2-1-1_color-palette-item-after-focus-border-radius);pointer-events:none}:host(:not([_disabled]):not([on-phone]):hover:focus) .ui5-cp-item:focus:not(:hover):before{content:"";box-sizing:border-box;position:absolute;inset:var(--_ui5-v2-1-1_color-palette-item-before-focus-hover-inset);border:var(--_ui5-v2-1-1_color-palette-item-before-focus-color);border-radius:var(--_ui5-v2-1-1_color-palette-item-before-focus-border-radius);pointer-events:none}:host(:not([_disabled]):not([on-phone]):focus:not(:hover)) .ui5-cp-item:focus:not(:hover):after{content:"";box-sizing:border-box;position:absolute;inset:var(--_ui5-v2-1-1_color-palette-item-after-focus-hover-inset);border:var(--_ui5-v2-1-1_color-palette-item-after-focus-color);border-radius:var(--_ui5-v2-1-1_color-palette-item-after-focus-border-radius);pointer-events:none}:host([selected]:not([_disabled]):not([on-phone]):not(:focus):not(:hover)) .ui5-cp-item:after,:host([selected]:not([_disabled]):not([on-phone]):not(:focus):hover) .ui5-cp-item:after,:host(:not([selected]):hover) .ui5-cp-item:after{content:"";box-sizing:border-box;position:absolute;inset:calc(var(--_ui5-v2-1-1_color-palette-item-after-focus-hover-inset) - .0625rem);border:var(--_ui5-v2-1-1_color-palette-item-after-not-focus-color);border-radius:calc(var(--_ui5-v2-1-1_color-palette-item-after-focus-border-radius) + .0625rem);pointer-events:none}:host(:not([_disabled]):not([on-phone]):not([selected]):not(:hover)) .ui5-cp-item:focus:not(:hover):after{border:var(--_ui5-v2-1-1_color-palette-item-after-focus-not-selected-border)}:host([selected]:not([_disabled]):not([on-phone])) .ui5-cp-item:focus:not(:hover):before,:host([selected]:not([_disabled]):not([on-phone])) .ui5-cp-item:focus:hover:before{content:"";box-sizing:border-box;position:absolute;inset:var(--_ui5-v2-1-1_color-palette-item-selected-focused-border-before);border:var(--_ui5-v2-1-1_color-palette-item-before-focus-color);border-radius:var(--_ui5-v2-1-1_color-palette-item-before-focus-border-radius);pointer-events:none}
`};var f=function(i,e,o,t){var r=arguments.length,s=r<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,o,t);else for(var m=i.length-1;m>=0;m--)(d=i[m])&&(s=(r<3?d(s):r>3?d(e,o,s):d(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},w;let h=w=class extends I{static async onDefine(){w.i18nBundle=await T("@ui5/webcomponents")}constructor(){super(),this.value="",this.selected=!1,this.forcedTabIndex="-1",this.onPhone=!1,this._disabled=!1}onBeforeRendering(){this._disabled=!this.value,this.onPhone=P(),this.setAttribute("style",`background-color: ${this.value}`)}get colorLabel(){return w.i18nBundle.getText(j)}get styles(){return{root:{"background-color":this.value}}}get classes(){return{root:{"ui5-cp-item":!0}}}};f([a()],h.prototype,"value",void 0);f([a({type:Boolean})],h.prototype,"selected",void 0);f([a({noAttribute:!0})],h.prototype,"forcedTabIndex",void 0);f([a({type:Number})],h.prototype,"index",void 0);f([a({type:Boolean})],h.prototype,"onPhone",void 0);f([a({type:Boolean})],h.prototype,"_disabled",void 0);h=w=f([k({tag:"ui5-color-palette-item",renderer:R,styles:te,template:oe})],h);h.define();const B=h,ie=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));_("@ui5/webcomponents-theming","sap_horizon",async()=>D);_("@ui5/webcomponents","sap_horizon",async()=>$);const re={packageName:"@ui5/webcomponents",fileName:"themes/ColorPalette.css.ts",content:`:host(:not([hidden])){display:inline-block}:host(:not([hidden])[popup-mode]),:host(:not([hidden])[on-phone]){width:100%;overflow:hidden}.ui5-cp-root{display:flex;flex-direction:column}.ui5-cp-root.ui5-cp-root-phone,.ui5-cp-separator,.ui5-cp-root.ui5-cp-root-phone .ui5-cp-more-colors-wrapper,.ui5-cp-root.ui5-cp-root-phone .ui5-cp-default-color-button-wrapper,.ui5-cp-recent-colors-wrapper{width:100%}.ui5-cp-root.ui5-cp-root-phone .ui5-cp-item-container{padding:.375rem .625rem;width:100%;max-width:100%;max-height:100%;box-sizing:border-box}.ui5-cp-root-phone .ui5-cp-default-color-button,.ui5-cp-root-phone .ui5-cp-more-colors,.ui5-cp-root-phone .ui5-cp-more-colors-wrapper,.ui5-cp-root-phone .ui5-cp-default-color-button-wrapper{height:2.875rem}.ui5-cp-root-phone .ui5-cp-item-container{display:grid;grid-template-columns:repeat(5,1fr);grid-gap:.75rem;justify-items:center;align-items:center}.ui5-cp-root-phone .ui5-cp-recent-colors-container{padding:.375rem .625rem;display:grid;grid-template-columns:repeat(5,1fr);grid-gap:.75rem;justify-items:center;align-items:center;width:100%;box-sizing:border-box}.ui5-cp-root-phone .ui5-cp-recent-colors-wrapper{max-width:100%;padding:0;display:flex;justify-content:center;flex-flow:wrap;max-height:var(--_ui5-v2-1-1_color-palette-row-height);overflow:hidden}.ui5-cp-recent-colors-wrapper{display:flex;align-items:center;flex-direction:column;gap:.25rem}.ui5-cp-root.ui5-cp-root-phone{display:flex}.ui5-cp-item-container{display:flex;max-width:var(--_ui5-v2-1-1_color-palette-row-width);flex-flow:wrap;max-height:var(--_ui5-v2-1-1_color-palette-row-height);overflow:hidden;padding:var(--_ui5-v2-1-1_color-palette-swatch-container-padding)}.ui5-cp-more-colors,.ui5-cp-default-color-button{width:100%;height:var(--_ui5-v2-1-1_color-palette-button-height);text-align:center;border:none}.ui5-cp-more-colors-wrapper,.ui5-cp-default-color-button-wrapper{display:flex;flex-direction:column}.ui5-cp-separator{height:.0625rem;background:var(--sapToolbar_SeparatorColor)}.ui5-cp-default-color-button,.ui5-cp-more-colors{padding:.0625rem}
`};_("@ui5/webcomponents-theming","sap_horizon",async()=>D);_("@ui5/webcomponents","sap_horizon",async()=>$);const le={packageName:"@ui5/webcomponents",fileName:"themes/ColorPaletteDialog.css.ts",content:`.ui5-cp-dialog-content{display:flex;justify-content:center;align-items:center;margin:1rem 0}.ui5-cp-dialog-footer{width:100%;display:flex;justify-content:flex-end;margin:.1875rem 1rem}.ui5-cp-dialog-footer [ui5-button]:first-child{margin-right:1rem}
`};var p=function(i,e,o,t){var r=arguments.length,s=r<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,o,t);else for(var m=i.length-1;m>=0;m--)(d=i[m])&&(s=(r<3?d(s):r>3?d(e,o,s):d(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},C;let u=C=class extends I{static async onDefine(){C.i18nBundle=await T("@ui5/webcomponents")}constructor(){super(),this.showRecentColors=!1,this.showMoreColors=!1,this.showDefaultColor=!1,this.popupMode=!1,this.onPhone=!1,this._shouldFocusRecentColors=!1,this._itemNavigation=new E(this,{getItemsCallback:()=>this.displayedColors,rowSize:this.rowSize,behavior:S.Cyclic}),this._itemNavigationRecentColors=new E(this,{getItemsCallback:()=>this.recentColorsElements,rowSize:this.rowSize,behavior:S.Static}),this._recentColors=[]}onBeforeRendering(){this._ensureSingleSelectionOrDeselectAll();const e=this.allColorsInPalette.find(o=>o.selected);if(e&&!this.showRecentColors&&(this._selectedColor=e.value),this.displayedColors.forEach((o,t)=>{o.index=t+1}),this.showMoreColors){const o=M("ColorPaletteMoreColors");o&&(this.moreColorsFeature=new o)}this.onPhone=P()}get _effectiveShowMoreColors(){return!!(this.showMoreColors&&this.moreColorsFeature)}onAfterRendering(){this._shouldFocusRecentColors&&this.hasRecentColors&&(this.recentColorsElements[0].selected=!0,this.recentColorsElements[0].focus())}selectColor(e){e.value&&(e.focus(),this.displayedColors.includes(e)&&this._itemNavigation.setCurrentItem(e),this._setColor(e.value))}_setColor(e){this._selectedColor=e,this._recentColors[0]!==this._selectedColor&&(this._recentColors.includes(this._selectedColor)?this._recentColors.unshift(this._recentColors.splice(this._recentColors.indexOf(this._selectedColor),1)[0]):this._addRecentColor(this._selectedColor)),this.fireEvent("item-click",{color:this._selectedColor})}get effectiveColorItems(){let e=this.colors;return this.popupMode&&(e=this.getSlottedNodes("colors")),e}_ensureSingleSelectionOrDeselectAll(){let e;this.allColorsInPalette.forEach(o=>{o.selected&&(e&&(e.selected=!1),e=o)})}_onclick(e){this.handleSelection(e.target)}_onkeyup(e){const o=e.target;y(e)&&(e.preventDefault(),this.handleSelection(o))}_onkeydown(e){const o=e.target;x(e)&&this.handleSelection(o),y(e)&&e.preventDefault()}handleSelection(e){!e.hasAttribute("ui5-color-palette-item")||!e.value||(this._shouldFocusRecentColors=!1,this.selectColor(e),this.recentColorsElements.includes(e)?(this.recentColorsElements[0].selected=!0,this.recentColorsElements[0].focus(),this._currentlySelected=this.recentColorsElements[0]):(this.allColorsInPalette.forEach(o=>{o.selected=o===e}),this._currentlySelected=e),this._ensureSingleSelectionOrDeselectAll())}_handleDefaultColorClick(e){e.preventDefault(),this._onDefaultColorClick()}_onDefaultColorKeyUp(e){y(e)&&this._handleDefaultColorClick(e)}_onDefaultColorKeyDown(e){if(N(e)&&this.popupMode&&this._handleDefaultColorClick(e),x(e)&&this._handleDefaultColorClick(e),v(e))e.stopPropagation(),this.focusColorElement(this.colorPaletteNavigationElements[1],this._itemNavigation);else if(b(e)){e.stopPropagation();const o=this.colorPaletteNavigationElements[this.colorPaletteNavigationElements.length-1];if(this.hasRecentColors)this.focusColorElement(o,this._itemNavigationRecentColors);else if(this.showMoreColors)o.focus();else{const t=this.displayedColors.length%this.rowSize*this.rowSize;this.focusColorElement(this.displayedColors[t],this._itemNavigation)}}}_onMoreColorsKeyDown(e){const o=e.target,t=this.colorPaletteNavigationElements.indexOf(o),r=this.displayedColors.length%this.rowSize*this.rowSize;b(e)?(e.stopPropagation(),this.focusColorElement(this.displayedColors[r],this._itemNavigation)):v(e)&&(e.stopPropagation(),this.hasRecentColors?this.focusColorElement(this.colorPaletteNavigationElements[t+1],this._itemNavigationRecentColors):this.showDefaultColor?this.firstFocusableElement.focus():this.focusColorElement(this.displayedColors[0],this._itemNavigation))}_isUpOrDownNavigatableColorPaletteItem(e){return(b(e)||v(e))&&this._currentlySelected&&this.colorPaletteNavigationElements.includes(this._currentlySelected)}_onColorContainerKeyDown(e){const o=e.target,t=this.colorPaletteNavigationElements[this.colorPaletteNavigationElements.length-1];if(this._isUpOrDownNavigatableColorPaletteItem(e)&&(this._currentlySelected=void 0),N(e)&&this.popupMode&&(e.preventDefault(),this.selectColor(o)),b(e)&&o===this.displayedColors[0]&&this.colorPaletteNavigationElements.length>1)e.stopPropagation(),this.showDefaultColor?this.firstFocusableElement.focus():!this.showDefaultColor&&this.hasRecentColors?this.focusColorElement(t,this._itemNavigationRecentColors):!this.showDefaultColor&&this.showMoreColors&&t.focus();else if(v(e)&&o===this.displayedColors[this.displayedColors.length-1]&&this.colorPaletteNavigationElements.length>1){e.stopPropagation();const r=this.showDefaultColor&&!this.showMoreColors&&this.hasRecentColors||!this.showDefaultColor&&!this.showMoreColors&&this.hasRecentColors;this.showDefaultColor&&this.showMoreColors?this.colorPaletteNavigationElements[2].focus():this.showDefaultColor&&!this.showMoreColors&&(!this.showRecentColors||!this.recentColors[0])?this.firstFocusableElement.focus():r?this.focusColorElement(t,this._itemNavigationRecentColors):!this.showDefaultColor&&this.showMoreColors&&this.colorPaletteNavigationElements[1].focus()}}_onRecentColorsContainerKeyDown(e){if(this._isUpOrDownNavigatableColorPaletteItem(e)&&(this._currentlySelected=void 0),b(e)){if(this.showMoreColors){const o=this.showDefaultColor?2:1;this.colorPaletteNavigationElements[o].focus()}else if(!this.showMoreColors&&this.colorPaletteNavigationElements.length>1){const o=this.displayedColors.length%this.rowSize*this.rowSize;e.stopPropagation(),this.focusColorElement(this.displayedColors[o],this._itemNavigation)}}else v(e)&&(this.showDefaultColor?this.firstFocusableElement.focus():(e.stopPropagation(),this.focusColorElement(this.displayedColors[0],this._itemNavigation)))}focusColorElement(e,o){o.setCurrentItem(e),o._focusCurrentItem()}get firstFocusableElement(){return this.colorPaletteNavigationElements[0]}_chooseCustomColor(){const e=this.getColorPicker();this._setColor(e.value),this._closeDialog(),this._shouldFocusRecentColors=!this.popupMode,this.recentColorsElements[0].selected=!0,this._currentlySelected=e.value?this.recentColorsElements[0]:void 0}_addRecentColor(e){this.showRecentColors&&!this._recentColors.includes(e)&&(this._recentColors.unshift(e),this._recentColors.length>this.rowSize&&this._recentColors.pop())}_closeDialog(){const e=this._getDialog();e.open=!1}_openMoreColorsDialog(){const e=this._getDialog();e.open=!0}_onDefaultColorClick(){this.defaultColor&&(this._setColor(this.defaultColor),this._addRecentColor(this.defaultColor),this.selectedItem&&(this.selectedItem.selected=!1,this._currentlySelected=void 0))}get selectedItem(){return[...this.effectiveColorItems,...this.recentColorsElements].find(e=>e.selected)}get allColorsInPalette(){return[...this.effectiveColorItems,...this.recentColorsElements]}get colorPaletteDialogTitle(){var e;return(e=this.moreColorsFeature)==null?void 0:e.colorPaletteDialogTitle}get colorPaletteDialogOKButton(){var e;return(e=this.moreColorsFeature)==null?void 0:e.colorPaletteDialogOKButton}get colorPaletteCancelButton(){var e;return(e=this.moreColorsFeature)==null?void 0:e.colorPaletteCancelButton}get selectedColor(){return this._selectedColor}get displayedColors(){return this.getSlottedNodes("colors").filter(o=>o.value).slice(0,15)}get colorContainerLabel(){return C.i18nBundle.getText(q)}get colorPaletteMoreColorsText(){return C.i18nBundle.getText(U)}get colorPaletteDefaultColorText(){return C.i18nBundle.getText(V)}get _showMoreColors(){return this.showMoreColors&&this.moreColorsFeature}get rowSize(){return 5}get hasRecentColors(){return this.showRecentColors&&this.recentColors[0]}get recentColors(){for(this._recentColors.length>this.rowSize&&(this._recentColors=this._recentColors.slice(0,this.rowSize));this._recentColors.length<this.rowSize;)this._recentColors.push("");return this._recentColors}get recentColorsElements(){const e=this.getDomRef();return e?Array.from(e.querySelectorAll(".ui5-cp-recent-colors-wrapper [ui5-color-palette-item]")).filter(o=>o.value!==""):[]}get colorPaletteNavigationElements(){const e=[],o=this.shadowRoot.querySelector(".ui5-cp-root");return this._currentlySelected&&e.push(this._currentlySelected),this.showDefaultColor&&e.push(o.querySelector(".ui5-cp-default-color-button")),e.push(this.displayedColors[0]),this.showMoreColors&&e.push(o.querySelector(".ui5-cp-more-colors")),this.showRecentColors&&this.recentColorsElements.length&&e.push(this.recentColorsElements[0]),e}get classes(){return{colorPaletteRoot:{"ui5-cp-root":!0,"ui5-cp-root-phone":P()}}}_getDialog(){return this.shadowRoot.querySelector("[ui5-dialog]")}getColorPicker(){return this._getDialog().content[0].querySelector("[ui5-color-picker]")}};p([a({type:Boolean})],u.prototype,"showRecentColors",void 0);p([a({type:Boolean})],u.prototype,"showMoreColors",void 0);p([a({type:Boolean})],u.prototype,"showDefaultColor",void 0);p([a()],u.prototype,"defaultColor",void 0);p([a()],u.prototype,"_selectedColor",void 0);p([a({type:Boolean})],u.prototype,"popupMode",void 0);p([a({type:Boolean})],u.prototype,"onPhone",void 0);p([A({default:!0,type:HTMLElement,invalidateOnChildChange:!0,individualSlots:!0})],u.prototype,"colors",void 0);u=C=p([k({tag:"ui5-color-palette",renderer:R,features:["ColorPaletteMoreColors"],template:X,styles:[re,le],get dependencies(){const i=M("ColorPaletteMoreColors");return[B,K].concat(i?i.dependencies:[])}}),L("item-click",{detail:{color:{type:String}}})],u);u.define();const se=u,De=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"})),g=F("ui5-color-palette-item",["value"],["selected"],[],[],()=>W(()=>Promise.resolve().then(()=>ie),void 0,import.meta.url));g.displayName="ColorPaletteItem";try{g.displayName="ColorPaletteItem",g.__docgenInfo={description:"The `ColorPaletteItem` component represents a color in the the `ColorPalette`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ColorPaletteItem",props:{selected:{defaultValue:{value:"false"},description:`Defines if the component is selected.

**Note:** Only one item must be selected per <code>ui5-color-palette</code>.
If more than one item is defined as selected, the last one would be considered as the selected one.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"selected",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the colour of the component.

**Note:** The value should be a valid CSS color.`,name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="ColorPaletteItem",g.__docgenInfo={description:"The `ColorPaletteItem` component represents a color in the the `ColorPalette`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ColorPaletteItem",props:{selected:{defaultValue:{value:"false"},description:`Defines if the component is selected.

**Note:** Only one item must be selected per <code>ui5-color-palette</code>.
If more than one item is defined as selected, the last one would be considered as the selected one.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"selected",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the colour of the component.

**Note:** The value should be a valid CSS color.`,name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{g as C,se as a,De as b};
