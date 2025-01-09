import{c as B,j as m,p as b,d as y,s,m as w,e as x,I,x as C}from"./withWebComponent-CT6sGXpP.js";import{l as D}from"./event-strict-DgQLNDEV.js";import{d as S}from"./slot-_4yKMUwC.js";import{f as O}from"./ItemNavigation-D44tNNZq.js";import{i as T}from"./i18n-DEVDpFvK.js";import"./utils-B6HmSsR9.js";import{A as N,b as z,i as g}from"./Keys-D3vKxxqj.js";import{aN as R,aO as E,aP as A}from"./i18n-defaults-Do22Zz-4.js";import{l as M}from"./Tooltips-vhX1-CiW.js";import{A as $}from"./AccessibilityTextsHelper-Beeze-lh.js";import{t as P}from"./willShowContent-CZcfsNXp.js";import{I as j}from"./Icon-Bi16vwdR.js";import{d as k}from"./parameters-bundle.css-BzaqQttB.js";import{d as H}from"./useIsomorphicLayoutEffect-CPnToY9g.js";function F(){return B("li",{role:"option",class:"ui5-segmented-button-item-root","aria-posinset":this.posInSet,"aria-setsize":this.sizeOfSet,"aria-selected":this.selected,"aria-disabled":this.disabled,"aria-roledescription":this.ariaDescription,"data-sap-focus-ref":!0,onClick:this._onclick,onKeyUp:this._onkeyup,tabindex:this.tabIndexValue?parseInt(this.tabIndexValue):void 0,"aria-label":this.ariaLabelText,title:this.tooltip,children:[this.icon&&m(j,{part:"icon",class:"ui5-segmented-button-item-icon",name:this.icon,showTooltip:this.showIconTooltip}),m("span",{id:`${this._id}-content`,class:"ui5-segmented-button-item-text",children:m("bdi",{children:m("slot",{})})})]})}b("@ui5/webcomponents-theming","sap_horizon",async()=>y);b("@ui5/webcomponents","sap_horizon",async()=>k);const U=`:host{vertical-align:middle}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5-v2-6-2_button_base_min_width);height:var(--_ui5-v2-6-2_button_base_height);line-height:normal;font-family:var(--_ui5-v2-6-2_button_fontFamily);font-size:var(--sapFontSize);text-shadow:var(--_ui5-v2-6-2_button_text_shadow);border-radius:var(--_ui5-v2-6-2_button_border_radius);cursor:pointer;background-color:var(--sapButton_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);color:var(--sapButton_TextColor);box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-segmented-button-item-root{min-width:inherit;cursor:inherit;height:100%;width:100%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;outline:none;padding:0 var(--_ui5-v2-6-2_button_base_padding);position:relative;background:transparent;border:none;color:inherit;text-shadow:inherit;font:inherit;white-space:inherit;overflow:inherit;text-overflow:inherit;letter-spacing:inherit;word-spacing:inherit;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host(:not([hidden]):not([disabled]).ui5_hovered){background:var(--sapButton_Hover_Background);border:.0625rem solid var(--sapButton_Hover_BorderColor);color:var(--sapButton_Hover_TextColor)}.ui5-segmented-button-item-icon{color:inherit;flex-shrink:0;padding-inline-end:.375rem}:host([icon-only]) .ui5-segmented-button-item-icon{padding-inline-end:0}:host([icon-only]) .ui5-segmented-button-item-root{min-width:auto;padding:0}:host([icon-only]) .ui5-segmented-button-item-text{display:none}.ui5-segmented-button-item-text{outline:none;position:relative;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([has-icon]:not([icon-end])) .ui5-segmented-button-item-text{margin-inline-start:var(--_ui5-v2-6-2_button_base_icon_margin)}:host([has-icon][icon-end]) .ui5-segmented-button-item-text{margin-inline-start:0}:host([disabled]){opacity:var(--sapContent_DisabledOpacity);pointer-events:unset;cursor:default}:host([has-icon]:not([icon-only])) .ui5-segmented-button-item-text{min-width:calc(var(--_ui5-v2-6-2_button_base_min_width) - var(--_ui5-v2-6-2_button_base_icon_margin) - 1rem)}:host([disabled]){pointer-events:none}:host([desktop]:not([active])) .ui5-segmented-button-item-root:focus-within:after,:host(:not([active])) .ui5-segmented-button-item-root:focus-visible:after,:host([desktop][active]) .ui5-segmented-button-item-root:focus-within:before,:host([active]) .ui5-segmented-button-item-root:focus-visible:before{content:"";position:absolute;box-sizing:border-box;inset:.0625rem;border:var(--_ui5-v2-6-2_button_focused_border);border-radius:var(--_ui5-v2-6-2_button_focused_border_radius)}:host([desktop][active]) .ui5-segmented-button-item-root:focus-within:before,:host([active]) .ui5-segmented-button-item-root:focus-visible:before{border-color:var(--_ui5-v2-6-2_button_pressed_focused_border_color)}.ui5-segmented-button-item-root::-moz-focus-inner{border:0}bdi{display:block;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([active][desktop]) .ui5-segmented-button-item-root:focus-within:after,:host([active]) .ui5-segmented-button-item-root:focus-visible:after,:host([selected][desktop]) .ui5-segmented-button-item-root:focus-within:after,:host([selected]) .ui5-segmented-button-item-root:focus-visible:after{border-color:var(--_ui5-v2-6-2_button_pressed_focused_border_color);outline:none}:host([desktop]:not(:last-child)) .ui5-segmented-button-item-root:focus-within:after,:host(:not(:last-child)) .ui5-segmented-button-item-root:focus-visible:after{border-start-end-radius:var(--_ui5-v2-6-2_button_focused_inner_border_radius);border-end-end-radius:var(--_ui5-v2-6-2_button_focused_inner_border_radius)}:host([desktop]:not(:first-child)) .ui5-segmented-button-item-root:focus-within:after,:host(:not(:first-child)) .ui5-segmented-button-item-root:focus-visible:after{border-start-start-radius:var(--_ui5-v2-6-2_button_focused_inner_border_radius);border-end-start-radius:var(--_ui5-v2-6-2_button_focused_inner_border_radius)}
`;var r=function(d,e,t,n){var a=arguments.length,o=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(d,e,t,n);else for(var c=d.length-1;c>=0;c--)(u=d[c])&&(o=(a<3?u(o):a>3?u(e,t,o):u(e,t))||o);return a>3&&o&&Object.defineProperty(e,t,o),o},p;let i=p=class extends I{get ariaDescription(){return p.i18nBundle.getText(R)}constructor(){super(),this.disabled=!1,this.selected=!1,this.iconOnly=!1,this.nonInteractive=!1,this.posInSet=0,this.sizeOfSet=0}_onclick(e){this.disabled&&(e.preventDefault(),e.stopPropagation()),this.selected=!this.selected}onEnterDOM(){C()&&this.setAttribute("desktop","")}onBeforeRendering(){this.iconOnly=!P(this.text)}_onkeyup(e){N(e)&&e.preventDefault()}get tabIndexValue(){if(this.disabled)return;const e=this.getAttribute("tabindex");return e||this.forcedTabIndex}get ariaLabelText(){return $(this)}get showIconTooltip(){return M()&&this.iconOnly&&!this.tooltip}};r([s({type:Boolean})],i.prototype,"disabled",void 0);r([s({type:Boolean})],i.prototype,"selected",void 0);r([s()],i.prototype,"tooltip",void 0);r([s()],i.prototype,"accessibleName",void 0);r([s()],i.prototype,"accessibleNameRef",void 0);r([s()],i.prototype,"icon",void 0);r([s({type:Boolean})],i.prototype,"iconOnly",void 0);r([s({type:Boolean})],i.prototype,"nonInteractive",void 0);r([s({noAttribute:!0})],i.prototype,"forcedTabIndex",void 0);r([s({type:Number})],i.prototype,"posInSet",void 0);r([s({type:Number})],i.prototype,"sizeOfSet",void 0);r([S({type:Node,default:!0})],i.prototype,"text",void 0);r([T("@ui5/webcomponents")],i,"i18nBundle",void 0);i=p=r([w({tag:"ui5-segmented-button-item",renderer:x,template:F,styles:U})],i);i.define();const se=i;var v;(function(d){d.Single="Single",d.Multiple="Multiple"})(v||(v={}));const f=v;function K(){return B("ul",{role:"listbox",class:"ui5-segmented-button-root",onClick:this._onclick,onMouseDown:this._onmousedown,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,onFocusIn:this._onfocusin,"aria-multiselectable":"true","aria-describedby":`${this._id}-invisibleText`,"aria-roledescription":this.ariaDescription,"aria-label":this.accessibleName,children:[m("slot",{}),m("span",{id:`${this._id}-invisibleText`,class:"ui5-hidden-text",children:this.ariaDescribedBy})]})}b("@ui5/webcomponents-theming","sap_horizon",async()=>y);b("@ui5/webcomponents","sap_horizon",async()=>k);const G=`:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;min-width:calc(var(--_ui5-v2-6-2_segmented_btn_items_count) * var(--_ui5-v2-6-2_button_base_min_width))}.ui5-segmented-button-root{width:inherit;display:grid;grid-template-columns:repeat(var(--_ui5-v2-6-2_segmented_btn_items_count),minmax(var(--_ui5-v2-6-2_button_base_min_width),1fr));margin:0;padding:0;background-color:var(--sapButton_Background);border-radius:var(--sapButton_BorderCornerRadius);box-shadow:inset 0 0 0 var(--sapButton_BorderWidth) var(--sapButton_BorderColor)}::slotted([ui5-segmented-button-item]){border-radius:var(--_ui5-v2-6-2_segmented_btn_inner_border_radius);border-color:var(--_ui5-v2-6-2_segmented_btn_border_color);background-color:var(--_ui5-v2-6-2_segmented_btn_background_color);height:var(--_ui5-v2-6-2_button_base_height);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:initial}::slotted([ui5-segmented-button-item]:hover){z-index:2;box-shadow:var(--_ui5-v2-6-2_segmented_btn_hover_box_shadow);border-color:var(--sapButton_Hover_BorderColor);background-color:var(--sapButton_Hover_Background)}::slotted([ui5-segmented-button-item][selected]),::slotted([ui5-segmented-button-item][active]){border-color:var(--sapButton_Selected_BorderColor);background-color:var(--sapButton_Selected_Background);color:var(--sapButton_Selected_TextColor)}::slotted([ui5-segmented-button-item][selected]:hover){border-color:var(--sapButton_Selected_Hover_BorderColor);background-color:var(--sapButton_Selected_Hover_Background);color:var(--sapButton_Selected_TextColor)}::slotted([ui5-segmented-button-item]:last-child){border-start-end-radius:var(--sapButton_BorderCornerRadius);border-end-end-radius:var(--sapButton_BorderCornerRadius)}::slotted([ui5-segmented-button-item]:first-child){border-start-start-radius:var(--sapButton_BorderCornerRadius);border-end-start-radius:var(--sapButton_BorderCornerRadius)}::slotted([ui5-segmented-button-item]:not(:first-child)){border-left-width:var(--_ui5-v2-6-2_segmented_btn_item_border_left);border-right-width:var(--_ui5-v2-6-2_segmented_btn_item_border_right)}::slotted([ui5-segmented-button-item][active]:not([active]):hover){border-color:var(--sapButton_BorderColor)}::slotted([ui5-segmented-button-item][active]:hover){border-color:var(--sapButton_Selected_BorderColor)}
`;var h=function(d,e,t,n){var a=arguments.length,o=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(d,e,t,n);else for(var c=d.length-1;c>=0;c--)(u=d[c])&&(o=(a<3?u(o):a>3?u(e,t,o):u(e,t))||o);return a>3&&o&&Object.defineProperty(e,t,o),o},_;let l=_=class extends I{constructor(){super(),this.selectionMode="Single",this._itemNavigation=new O(this,{getItemsCallback:()=>this.navigatableItems}),this.hasPreviouslyFocusedItem=!1}onBeforeRendering(){const e=this.getSlottedNodes("items");e.forEach((t,n,a)=>{t.posInSet=n+1,t.sizeOfSet=a.length}),this.normalizeSelection(),this.style.setProperty(H("--_ui5_segmented_btn_items_count"),`${e.length}`)}normalizeSelection(){if(this.items.length)switch(this.selectionMode){case f.Single:{const e=this.selectedItems,t=this._selectedItem?e.indexOf(this._selectedItem):-1;this._selectedItem&&e.length>1&&e.splice(t,1);const n=e.pop()||this.items[0];this._applySingleSelection(n);break}}}_selectItem(e){const t=e.target,n=t.hasAttribute("ui5-segmented-button-item");if(!(t.disabled||t===this.getDomRef()||!n)){switch(this.selectionMode){case f.Multiple:e instanceof KeyboardEvent&&(t.selected=!t.selected);break;default:this._applySingleSelection(t)}return this.fireDecoratorEvent("selection-change",{selectedItems:this.selectedItems}),this._itemNavigation.setCurrentItem(t),this}}_applySingleSelection(e){this.items.forEach(t=>{t.selected=!1}),e.selected=!0,this._selectedItem=e}_onclick(e){this._selectItem(e)}_onkeydown(e){z(e)?this._selectItem(e):g(e)&&e.preventDefault()}_onkeyup(e){g(e)&&this._selectItem(e)}_onmousedown(e){const t=e.target;t.hasAttribute("ui5-segmented-button-item")&&(this._itemNavigation.setCurrentItem(t),this.hasPreviouslyFocusedItem=!0)}_onfocusin(e){if(this.hasPreviouslyFocusedItem){this._itemNavigation.setCurrentItem(e.target);return}this.selectedItems.length&&(this._itemNavigation.setCurrentItem(this.selectedItems[0]),this.selectedItems[0].focus(),this.hasPreviouslyFocusedItem=!0)}get selectedItems(){return this.items.filter(e=>e.selected)}get navigatableItems(){return this.getSlottedNodes("items").filter(e=>!e.disabled)}get ariaDescribedBy(){return _.i18nBundle.getText(E)}get ariaDescription(){return _.i18nBundle.getText(A)}};h([s()],l.prototype,"accessibleName",void 0);h([s()],l.prototype,"selectionMode",void 0);h([S({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],l.prototype,"items",void 0);h([T("@ui5/webcomponents")],l,"i18nBundle",void 0);l=_=h([w({tag:"ui5-segmented-button",languageAware:!0,renderer:x,template:K,styles:G}),D("selection-change",{bubbles:!0})],l);l.define();const ae=l;export{se as S,ae as a};
