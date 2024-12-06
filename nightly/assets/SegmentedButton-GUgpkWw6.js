import{m as b,k as r,p as f,a as p,s as w,q as d,v as x,z as I,S,A as C}from"./withWebComponent-D2290JWW.js";import{l as D}from"./event-strict-DgQLNDEV.js";import{d as $}from"./slot-_4yKMUwC.js";import{f as N}from"./ItemNavigation-BFACp1PV.js";import{i as k}from"./i18n-DEVDpFvK.js";import"./utils-rQ0RHFcC.js";import{A as O,b as z,i as B}from"./Keys-CAuuEE_3.js";import{aW as R,aX as E,aY as A}from"./i18n-defaults-B_32hVC3.js";import{l as M}from"./Tooltips-Cvj6MDOu.js";import{A as P}from"./AccessibilityTextsHelper-Beeze-lh.js";import{t as H}from"./willShowContent-CZcfsNXp.js";import{I as j}from"./Icon-DNC_Q8W5.js";import{s as T}from"./parameters-bundle.css-DlWxkghp.js";import{d as F}from"./useIsomorphicLayoutEffect-UXkgNLQC.js";function G(n,e,t){return b`<li role="option" aria-roledescription="${r(this.ariaDescription)}" aria-posinset="${r(this.posInSet)}" aria-setsize="${r(this.sizeOfSet)}" aria-selected="${r(this.selected)}" class="ui5-segmented-button-item-root" aria-disabled="${r(this.disabled)}" data-sap-focus-ref @click=${this._onclick} @keyup=${this._onkeyup} tabindex=${r(this.tabIndexValue)} aria-label="${r(this.ariaLabelText)}" title="${r(this.tooltip)}">${this.icon?L.call(this,n,e,t):void 0}<span id="${r(this._id)}-content" class="ui5-segmented-button-item-text"><bdi><slot></slot></bdi></span></li>`}function L(n,e,t){return t?b`<${f("ui5-icon",e,t)} class="ui5-segmented-button-item-icon" name="${r(this.icon)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${f("ui5-icon",e,t)}>`:b`<ui5-icon class="ui5-segmented-button-item-icon" name="${r(this.icon)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}p("@ui5/webcomponents-theming","sap_horizon",async()=>w);p("@ui5/webcomponents","sap_horizon",async()=>T);const U={packageName:"@ui5/webcomponents",fileName:"themes/SegmentedButtonItem.css.ts",content:`:host{vertical-align:middle}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5-v2-5-0_button_base_min_width);height:var(--_ui5-v2-5-0_button_base_height);line-height:normal;font-family:var(--_ui5-v2-5-0_button_fontFamily);font-size:var(--sapFontSize);text-shadow:var(--_ui5-v2-5-0_button_text_shadow);border-radius:var(--_ui5-v2-5-0_button_border_radius);cursor:pointer;background-color:var(--sapButton_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);color:var(--sapButton_TextColor);box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-segmented-button-item-root{min-width:inherit;cursor:inherit;height:100%;width:100%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;outline:none;padding:0 var(--_ui5-v2-5-0_button_base_padding);position:relative;background:transparent;border:none;color:inherit;text-shadow:inherit;font:inherit;white-space:inherit;overflow:inherit;text-overflow:inherit;letter-spacing:inherit;word-spacing:inherit;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host(:not([hidden]):not([disabled]).ui5_hovered){background:var(--sapButton_Hover_Background);border:.0625rem solid var(--sapButton_Hover_BorderColor);color:var(--sapButton_Hover_TextColor)}.ui5-segmented-button-item-icon{color:inherit;flex-shrink:0;padding-inline-end:.375rem}:host([icon-only]) .ui5-segmented-button-item-icon{padding-inline-end:0}:host([icon-only]) .ui5-segmented-button-item-root{min-width:auto;padding:0}:host([icon-only]) .ui5-segmented-button-item-text{display:none}.ui5-segmented-button-item-text{outline:none;position:relative;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([has-icon]:not([icon-end])) .ui5-segmented-button-item-text{margin-inline-start:var(--_ui5-v2-5-0_button_base_icon_margin)}:host([has-icon][icon-end]) .ui5-segmented-button-item-text{margin-inline-start:0}:host([disabled]){opacity:var(--sapContent_DisabledOpacity);pointer-events:unset;cursor:default}:host([has-icon]:not([icon-only])) .ui5-segmented-button-item-text{min-width:calc(var(--_ui5-v2-5-0_button_base_min_width) - var(--_ui5-v2-5-0_button_base_icon_margin) - 1rem)}:host([disabled]){pointer-events:none}:host([desktop]:not([active])) .ui5-segmented-button-item-root:focus-within:after,:host(:not([active])) .ui5-segmented-button-item-root:focus-visible:after,:host([desktop][active]) .ui5-segmented-button-item-root:focus-within:before,:host([active]) .ui5-segmented-button-item-root:focus-visible:before{content:"";position:absolute;box-sizing:border-box;inset:.0625rem;border:var(--_ui5-v2-5-0_button_focused_border);border-radius:var(--_ui5-v2-5-0_button_focused_border_radius)}:host([desktop][active]) .ui5-segmented-button-item-root:focus-within:before,:host([active]) .ui5-segmented-button-item-root:focus-visible:before{border-color:var(--_ui5-v2-5-0_button_pressed_focused_border_color)}.ui5-segmented-button-item-root::-moz-focus-inner{border:0}bdi{display:block;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([active][desktop]) .ui5-segmented-button-item-root:focus-within:after,:host([active]) .ui5-segmented-button-item-root:focus-visible:after,:host([selected][desktop]) .ui5-segmented-button-item-root:focus-within:after,:host([selected]) .ui5-segmented-button-item-root:focus-visible:after{border-color:var(--_ui5-v2-5-0_button_pressed_focused_border_color);outline:none}:host([desktop]:not(:last-child)) .ui5-segmented-button-item-root:focus-within:after,:host(:not(:last-child)) .ui5-segmented-button-item-root:focus-visible:after{border-start-end-radius:var(--_ui5-v2-5-0_button_focused_inner_border_radius);border-end-end-radius:var(--_ui5-v2-5-0_button_focused_inner_border_radius)}:host([desktop]:not(:first-child)) .ui5-segmented-button-item-root:focus-within:after,:host(:not(:first-child)) .ui5-segmented-button-item-root:focus-visible:after{border-start-start-radius:var(--_ui5-v2-5-0_button_focused_inner_border_radius);border-end-start-radius:var(--_ui5-v2-5-0_button_focused_inner_border_radius)}
`};var a=function(n,e,t,s){var u=arguments.length,o=u<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,s);else for(var m=n.length-1;m>=0;m--)(l=n[m])&&(o=(u<3?l(o):u>3?l(e,t,o):l(e,t))||o);return u>3&&o&&Object.defineProperty(e,t,o),o},v;let i=v=class extends S{get ariaDescription(){return v.i18nBundle.getText(R)}constructor(){super(),this.disabled=!1,this.selected=!1,this.iconOnly=!1,this.nonInteractive=!1,this.posInSet=0,this.sizeOfSet=0}_onclick(e){this.disabled&&(e.preventDefault(),e.stopPropagation()),this.selected=!this.selected}onEnterDOM(){C()&&this.setAttribute("desktop","")}onBeforeRendering(){this.iconOnly=!H(this.text)}_onkeyup(e){O(e)&&e.preventDefault()}get tabIndexValue(){if(this.disabled)return;const e=this.getAttribute("tabindex");return e||this.forcedTabIndex}get ariaLabelText(){return P(this)}get showIconTooltip(){return M()&&this.iconOnly&&!this.tooltip}};a([d({type:Boolean})],i.prototype,"disabled",void 0);a([d({type:Boolean})],i.prototype,"selected",void 0);a([d()],i.prototype,"tooltip",void 0);a([d()],i.prototype,"accessibleName",void 0);a([d()],i.prototype,"accessibleNameRef",void 0);a([d()],i.prototype,"icon",void 0);a([d({type:Boolean})],i.prototype,"iconOnly",void 0);a([d({type:Boolean})],i.prototype,"nonInteractive",void 0);a([d({noAttribute:!0})],i.prototype,"forcedTabIndex",void 0);a([d({type:Number})],i.prototype,"posInSet",void 0);a([d({type:Number})],i.prototype,"sizeOfSet",void 0);a([$({type:Node,default:!0})],i.prototype,"text",void 0);a([k("@ui5/webcomponents")],i,"i18nBundle",void 0);i=v=a([x({tag:"ui5-segmented-button-item",renderer:I,template:G,styles:U,dependencies:[j]})],i);i.define();const W=i;var g;(function(n){n.Single="Single",n.Multiple="Multiple"})(g||(g={}));const y=g;function V(n,e,t){return b`<ul @click="${this._onclick}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}" class="ui5-segmented-button-root" role="listbox" aria-multiselectable="true" aria-describedby="${r(this._id)}-invisibleText" aria-roledescription=${r(this.ariaDescription)} aria-label=${r(this.accessibleName)}><slot></slot><span id="${r(this._id)}-invisibleText" class="ui5-hidden-text">${r(this.ariaDescribedBy)}</span></ul>`}p("@ui5/webcomponents-theming","sap_horizon",async()=>w);p("@ui5/webcomponents","sap_horizon",async()=>T);const Y={packageName:"@ui5/webcomponents",fileName:"themes/SegmentedButton.css.ts",content:`:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;min-width:calc(var(--_ui5-v2-5-0_segmented_btn_items_count) * var(--_ui5-v2-5-0_button_base_min_width))}.ui5-segmented-button-root{width:inherit;display:grid;grid-template-columns:repeat(var(--_ui5-v2-5-0_segmented_btn_items_count),minmax(var(--_ui5-v2-5-0_button_base_min_width),1fr));margin:0;padding:0;background-color:var(--sapButton_Background);border-radius:var(--sapButton_BorderCornerRadius);box-shadow:inset 0 0 0 var(--sapButton_BorderWidth) var(--sapButton_BorderColor)}::slotted([ui5-segmented-button-item]){border-radius:var(--_ui5-v2-5-0_segmented_btn_inner_border_radius);border-color:var(--_ui5-v2-5-0_segmented_btn_border_color);background-color:var(--_ui5-v2-5-0_segmented_btn_background_color);height:var(--_ui5-v2-5-0_button_base_height);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:initial}::slotted([ui5-segmented-button-item]:hover){z-index:2;box-shadow:var(--_ui5-v2-5-0_segmented_btn_hover_box_shadow);border-color:var(--sapButton_Hover_BorderColor);background-color:var(--sapButton_Hover_Background)}::slotted([ui5-segmented-button-item][selected]),::slotted([ui5-segmented-button-item][active]){border-color:var(--sapButton_Selected_BorderColor);background-color:var(--sapButton_Selected_Background);color:var(--sapButton_Selected_TextColor)}::slotted([ui5-segmented-button-item][selected]:hover){border-color:var(--sapButton_Selected_Hover_BorderColor);background-color:var(--sapButton_Selected_Hover_Background);color:var(--sapButton_Selected_TextColor)}::slotted([ui5-segmented-button-item]:last-child){border-start-end-radius:var(--sapButton_BorderCornerRadius);border-end-end-radius:var(--sapButton_BorderCornerRadius)}::slotted([ui5-segmented-button-item]:first-child){border-start-start-radius:var(--sapButton_BorderCornerRadius);border-end-start-radius:var(--sapButton_BorderCornerRadius)}::slotted([ui5-segmented-button-item]:not(:first-child)){border-left-width:var(--_ui5-v2-5-0_segmented_btn_item_border_left);border-right-width:var(--_ui5-v2-5-0_segmented_btn_item_border_right)}::slotted([ui5-segmented-button-item][active]:not([active]):hover){border-color:var(--sapButton_BorderColor)}::slotted([ui5-segmented-button-item][active]:hover){border-color:var(--sapButton_Selected_BorderColor)}
`};var h=function(n,e,t,s){var u=arguments.length,o=u<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,s);else for(var m=n.length-1;m>=0;m--)(l=n[m])&&(o=(u<3?l(o):u>3?l(e,t,o):l(e,t))||o);return u>3&&o&&Object.defineProperty(e,t,o),o},_;let c=_=class extends S{constructor(){super(),this.selectionMode="Single",this._itemNavigation=new N(this,{getItemsCallback:()=>this.navigatableItems}),this.hasPreviouslyFocusedItem=!1}onBeforeRendering(){const e=this.getSlottedNodes("items");e.forEach((t,s,u)=>{t.posInSet=s+1,t.sizeOfSet=u.length}),this.normalizeSelection(),this.style.setProperty(F("--_ui5_segmented_btn_items_count"),`${e.length}`)}normalizeSelection(){if(this.items.length)switch(this.selectionMode){case y.Single:{const e=this.selectedItems,t=this._selectedItem?e.indexOf(this._selectedItem):-1;this._selectedItem&&e.length>1&&e.splice(t,1);const s=e.pop()||this.items[0];this._applySingleSelection(s);break}}}_selectItem(e){const t=e.target,s=t.hasAttribute("ui5-segmented-button-item");if(!(t.disabled||t===this.getDomRef()||!s)){switch(this.selectionMode){case y.Multiple:e instanceof KeyboardEvent&&(t.selected=!t.selected);break;default:this._applySingleSelection(t)}return this.fireDecoratorEvent("selection-change",{selectedItems:this.selectedItems}),this._itemNavigation.setCurrentItem(t),this}}_applySingleSelection(e){this.items.forEach(t=>{t.selected=!1}),e.selected=!0,this._selectedItem=e}_onclick(e){this._selectItem(e)}_onkeydown(e){z(e)?this._selectItem(e):B(e)&&e.preventDefault()}_onkeyup(e){B(e)&&this._selectItem(e)}_onmousedown(e){const t=e.target;t.hasAttribute("ui5-segmented-button-item")&&(this._itemNavigation.setCurrentItem(t),this.hasPreviouslyFocusedItem=!0)}_onfocusin(e){if(this.hasPreviouslyFocusedItem){this._itemNavigation.setCurrentItem(e.target);return}this.selectedItems.length&&(this._itemNavigation.setCurrentItem(this.selectedItems[0]),this.selectedItems[0].focus(),this.hasPreviouslyFocusedItem=!0)}get selectedItems(){return this.items.filter(e=>e.selected)}get navigatableItems(){return this.getSlottedNodes("items").filter(e=>!e.disabled)}get ariaDescribedBy(){return _.i18nBundle.getText(E)}get ariaDescription(){return _.i18nBundle.getText(A)}};h([d()],c.prototype,"accessibleName",void 0);h([d()],c.prototype,"selectionMode",void 0);h([$({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],c.prototype,"items",void 0);h([k("@ui5/webcomponents")],c,"i18nBundle",void 0);c=_=h([x({tag:"ui5-segmented-button",languageAware:!0,renderer:I,template:V,styles:Y,dependencies:[W]}),D("selection-change",{bubbles:!0})],c);c.define();const le=c;export{le as S,W as a};
