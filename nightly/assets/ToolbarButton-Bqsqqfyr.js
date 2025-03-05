import{j as v,b as S,F as D,p as u,d as y,s as n,m as A,l as N,A as W,z as E}from"./jsx-runtime-cXES_1K3.js";import{d as M}from"./slot-_4yKMUwC.js";import{l as O}from"./event-strict-DgQLNDEV.js";import{f as P}from"./ResizeHandler-DL3AhQCA.js";import{A as L}from"./AccessibilityTextsHelper-4hgGqLyb.js";import"./overflow-Ci29htuX.js";import{i as z}from"./i18n-CjR4HGlq.js";import{m as j,d as x}from"./CustomElementsScope-BUTWMsdD.js";import{bK as $,bL as R}from"./i18n-defaults-Be8E4wti.js";import{a as T}from"./Button-3tgFGa2X.js";import{d as V}from"./Popover-DfnLNPje.js";import{i as F}from"./overflow-BxBx6pT_.js";import{d as I}from"./parameters-bundle.css-DHLNbl9v.js";var w;(function(i){i.Default="Default",i.NeverOverflow="NeverOverflow",i.AlwaysOverflow="AlwaysOverflow"})(w||(w={}));const b=w;function q(){return v(V,{class:"ui5-overflow-popover",placement:"Bottom",horizontalAlign:"End",onClose:this.onOverflowPopoverClosed,onOpen:this.onOverflowPopoverOpened,accessibleName:this.accInfo.popover.accessibleName,hideArrow:!0,children:v("div",{class:{"ui5-overflow-list":!0,"ui5-overflow-list--alignleft":this.hasItemWithText},children:this.overflowItems.map(i=>i.toolbarPopoverTemplate.call(i.context))})})}function k(){return S(D,{children:[S("div",{class:{"ui5-tb-items":!0,"ui5-tb-items-full-width":this.hasFlexibleSpacers},role:this.accInfo.root.role,"aria-label":this.accInfo.root.accessibleName,children:[this.standardItems.map(i=>i.toolbarTemplate.call(i.context)),v(T,{"aria-hidden":this.hideOverflowButton,icon:F,design:"Transparent",onClick:this.toggleOverflow,class:{"ui5-tb-item":!0,"ui5-tb-overflow-btn":!0,"ui5-tb-overflow-btn-hidden":this.hideOverflowButton},tooltip:this.accInfo.overflowButton.tooltip,accessibleName:this.accInfo.overflowButton.accessibleName,accessibilityAttributes:this.accInfo.overflowButton.accessibilityAttributes})]}),q.call(this)]})}u("@ui5/webcomponents-theming","sap_horizon",async()=>y);u("@ui5/webcomponents","sap_horizon",async()=>I);const H=`:host(:not([hidden])){width:100%;height:var(--_ui5-v2-8-0-toolbar-height);display:flex;align-items:center;justify-content:flex-end;box-sizing:border-box;border-bottom:.0625rem solid var(--sapGroup_ContentBorderColor);padding:0 var(--_ui5-v2-8-0-toolbar-padding-left) 0 var(--_ui5-v2-8-0-toolbar-padding-right);background-color:var(--sapList_HeaderBackground)}:host([align-content="Start"]){justify-content:flex-start}.ui5-tb-items{width:100%;height:100%;display:inherit;align-items:inherit;justify-content:inherit}.ui5-tb-items-full-width{width:100%}.ui5-tb-item{flex-shrink:0}.ui5-tb-item{margin-inline-end:var(--_ui5-v2-8-0-toolbar-item-margin-right);margin-inline-start:var(--_ui5-v2-8-0-toolbar-item-margin-left)}.ui5-tb-overflow-btn,.ui5-tb-items:has(.ui5-tb-overflow-btn-hidden) .ui5-tb-item:nth-last-child(2){margin-inline-end:0;margin-inline-start:0}.ui5-tb-separator{height:var(--_ui5-v2-8-0-toolbar-separator-height);width:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}.ui5-tb-overflow-btn-hidden{visibility:hidden;position:absolute}:host([design="Transparent"]){background-color:transparent}
`;u("@ui5/webcomponents-theming","sap_horizon",async()=>y);u("@ui5/webcomponents","sap_horizon",async()=>I);const U=`.ui5-overflow-popover::part(content){padding:var(--_ui5-v2-8-0_toolbar_overflow_padding)}.ui5-overflow-list{display:flex;flex-direction:column;justify-content:center;align-items:center}.ui5-tb-popover-item{width:100%}.ui5-tb-popover-item:not(:last-child){margin-bottom:.25rem}.ui5-tb-separator-in-overflow{display:none;height:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}.ui5-tb-separator-in-overflow[visible]{display:block}
`,g=j("ToolbarItem.registry",new Map),G=i=>{g.set(i.getMetadata().getPureTag(),i)},K=i=>{if(!g.has(i))throw new Error(`No template found for ${i}`);return g.get(i)},J=()=>[...g.values()].map(i=>i.styles);var f=function(i,e,t,o){var s=arguments.length,r=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(l=i[c])&&(r=(s<3?l(r):s>3?l(e,t,r):l(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},p;function B(i,e){return Number(i.getPropertyValue(e).replace("rem",""))*parseInt(getComputedStyle(document.body).getPropertyValue("font-size"))}function C(i,e){return Number(i.getPropertyValue(e).replace("px",""))}let h=p=class extends W{static get styles(){const e=J();return[H,U,...e]}constructor(){super(),this.alignContent="End",this.reverseOverflow=!1,this.design="Solid",this.itemsToOverflow=[],this.itemsWidth=0,this.minContentWidth=0,this.popoverOpen=!1,this.itemsWidthMeasured=!1,this.ITEMS_WIDTH_MAP=new Map,this._onResize=this.onResize.bind(this),this._onCloseOverflow=this.closeOverflow.bind(this)}get overflowButtonSize(){var e;return((e=this.overflowButtonDOM)==null?void 0:e.getBoundingClientRect().width)||0}get padding(){const e=getComputedStyle(this.getDomRef());return B(e,x("--_ui5-toolbar-padding-left"))+B(e,x("--_ui5-toolbar-padding-right"))}get alwaysOverflowItems(){return this.items.filter(e=>e.overflowPriority===b.AlwaysOverflow)}get movableItems(){return this.items.filter(e=>e.overflowPriority!==b.AlwaysOverflow&&e.overflowPriority!==b.NeverOverflow)}get overflowItems(){const e=this.getItemsInfo(this.itemsToOverflow.filter(t=>!t.ignoreSpace));return this.reverseOverflow?e.reverse():e}get standardItems(){return this.getItemsInfo(this.items.filter(e=>this.itemsToOverflow.indexOf(e)===-1))}get hideOverflowButton(){return this.itemsToOverflow.filter(e=>!(e.ignoreSpace||e.isSeparator)).length===0}get interactiveItemsCount(){return this.items.filter(e=>e.isInteractive).length}get hasAriaSemantics(){return this.interactiveItemsCount>1}get accessibleRole(){return this.hasAriaSemantics?"toolbar":void 0}get ariaLabelText(){return this.hasAriaSemantics?L(this):void 0}get accInfo(){var e;return{root:{role:this.accessibleRole,accessibleName:this.ariaLabelText},overflowButton:{accessibleName:p.i18nBundle.getText(R),tooltip:p.i18nBundle.getText(R),accessibilityAttributes:{expanded:(e=this.overflowButtonDOM)==null?void 0:e.accessibilityAttributes.expanded,hasPopup:"menu"}},popover:{accessibleName:p.i18nBundle.getText($)}}}get overflowButtonDOM(){return this.shadowRoot.querySelector(".ui5-tb-overflow-btn")}get itemsDOM(){return this.shadowRoot.querySelector(".ui5-tb-items")}get hasItemWithText(){return this.itemsToOverflow.some(e=>e.containsText)}get hasFlexibleSpacers(){return this.items.some(e=>e.hasFlexibleWidth)}onEnterDOM(){P.register(this,this._onResize)}onExitDOM(){P.deregister(this,this._onResize)}onInvalidation(e){e.reason==="childchange"&&e.child===this.itemsToOverflow[0]&&this.onToolbarItemChange()}onBeforeRendering(){this.detachListeners(),this.attachListeners(),this.preprocessItems()}async onAfterRendering(){await E(),this.storeItemsWidth(),this.processOverflowLayout()}isOverflowOpen(){return this.getOverflowPopover().open}openOverflow(){const e=this.getOverflowPopover();e.opener=this.overflowButtonDOM,e.open=!0,this.reverseOverflow=e.actualPlacement==="Top"}closeOverflow(){const e=this.getOverflowPopover();e.open=!1}toggleOverflow(){this.popoverOpen?this.closeOverflow():this.openOverflow()}getOverflowPopover(){return this.shadowRoot.querySelector(".ui5-overflow-popover")}processOverflowLayout(){if(this.offsetWidth===0)return;const e=this.offsetWidth-this.padding,t=this.itemsWidth;let o=t-e+this.overflowButtonSize;t<=e&&(o=0),!(this.width===e&&this.contentWidth===t)&&(this.distributeItems(o),this.width=e,this.contentWidth=t)}storeItemsWidth(){let e=0,t=0;if(this.items.forEach(o=>{const s=this.getItemWidth(o);e+=s,o.overflowPriority===b.NeverOverflow&&(t+=s),this.ITEMS_WIDTH_MAP.set(o._id,s)}),t!==this.minContentWidth){const o=this.offsetWidth-this.getDomRef().offsetWidth;this.fireDecoratorEvent("_min-content-width-change",{minWidth:t+o+this.overflowButtonSize})}this.itemsWidth=e,this.minContentWidth=t}distributeItems(e=0){const t=this.movableItems.reverse();let o=0,s=t[o];for(this.itemsToOverflow=[],this.distributeItemsThatAlwaysOverflow();e>0&&s;)this.itemsToOverflow.unshift(s),e-=this.getCachedItemWidth(s==null?void 0:s._id)||0,o++,s=t[o];if(o<t.length){let r=t[o];for(;o<=t.length-1&&r.isSeparator;)this.itemsToOverflow.unshift(r),o++,r=t[o]}this.setSeperatorsVisibilityInOverflow()}distributeItemsThatAlwaysOverflow(){this.alwaysOverflowItems.forEach(e=>{this.itemsToOverflow.push(e)})}setSeperatorsVisibilityInOverflow(){this.itemsToOverflow.forEach((e,t,o)=>{e.isSeparator&&(e.visible=this.shouldShowSeparatorInOverflow(t,o))})}shouldShowSeparatorInOverflow(e,t){let o=!1,s=!1;return t.forEach((r,l)=>{l<e&&!r.isSeparator&&(o=!0),l>e&&!r.isSeparator&&(s=!0)}),o&&s}onOverflowPopoverClosed(){this.popoverOpen=!1,this.overflowButtonDOM&&(this.overflowButtonDOM.accessibilityAttributes.expanded=!1)}onBeforeClose(e){e.preventDefault()}onOverflowPopoverOpened(){this.popoverOpen=!0,this.overflowButtonDOM&&(this.overflowButtonDOM.accessibilityAttributes.expanded=!0)}onResize(){this.itemsWidth&&(this.closeOverflow(),this.processOverflowLayout())}attachListeners(){this.addEventListener("close-overflow",this._onCloseOverflow)}detachListeners(){this.removeEventListener("close-overflow",this._onCloseOverflow)}onToolbarItemChange(){this.itemsToOverflow=[],this.contentWidth=0}getItemsInfo(e){return e.map(t=>{const o=t.constructor,s=K(o.getMetadata().getPureTag());return s?{toolbarTemplate:s.toolbarTemplate,toolbarPopoverTemplate:s.toolbarPopoverTemplate,context:t}:null}).filter(t=>!!t)}getItemWidth(e){if(e.ignoreSpace||e.isSeparator)return 0;const t=e._id,o=this.getRegisteredToolbarItemByID(t);let s=0;if(o){const r=getComputedStyle(o);s=o.offsetWidth+C(r,"margin-inline-end")+C(r,"margin-inline-start")}else s=this.getCachedItemWidth(t)||0;return Math.ceil(s)}getCachedItemWidth(e){return this.ITEMS_WIDTH_MAP.get(e)}getItemByID(e){return this.items.find(t=>t._id===e)}getRegisteredToolbarItemByID(e){return this.itemsDOM.querySelector(`[data-ui5-external-action-item-id="${e}"]`)}preprocessItems(){this.items.forEach(e=>{e._getRealDomRef=()=>this.getDomRef().querySelector(`[data-ui5-stable*=${e.stableDomRef}]`)??this.getOverflowPopover().querySelector(`[data-ui5-stable*=${e.stableDomRef}]`)})}};f([n()],h.prototype,"alignContent",void 0);f([n({type:Number})],h.prototype,"width",void 0);f([n({type:Number})],h.prototype,"contentWidth",void 0);f([n({type:Boolean})],h.prototype,"reverseOverflow",void 0);f([n()],h.prototype,"accessibleName",void 0);f([n()],h.prototype,"accessibleNameRef",void 0);f([n()],h.prototype,"design",void 0);f([M({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],h.prototype,"items",void 0);f([z("@ui5/webcomponents")],h,"i18nBundle",void 0);h=p=f([A({tag:"ui5-toolbar",languageAware:!0,renderer:N,template:k}),O("_min-content-width-change",{bubbles:!0})],h);h.define();const pe=h;var _=function(i,e,t,o){var s=arguments.length,r=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(l=i[c])&&(r=(s<3?l(r):s>3?l(e,t,r):l(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let m=class extends W{constructor(){super(...arguments),this.overflowPriority="Default",this.preventOverflowClosing=!1}get ignoreSpace(){return!1}get containsText(){return!1}get hasFlexibleWidth(){return!1}get isInteractive(){return!0}get isSeparator(){return!1}static get toolbarTemplate(){throw new Error("Template must be defined")}static get toolbarPopoverTemplate(){throw new Error("Popover template must be defined")}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}};_([n()],m.prototype,"overflowPriority",void 0);_([n({type:Boolean})],m.prototype,"preventOverflowClosing",void 0);m=_([O("close-overflow",{bubbles:!0})],m);const Q=m;function X(){return v(T,{class:"ui5-tb-button ui5-tb-item",id:this.id,style:{width:this.width,display:this.hidden?"none":"inline-block"},icon:this.icon,endIcon:this.endIcon,tooltip:this.tooltip,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,accessibilityAttributes:this.accessibilityAttributes,design:this.design,disabled:this.disabled,hidden:this.hidden,"data-ui5-external-action-item-id":this._id,"data-ui5-stable":this.stableDomRef,onClick:(...i)=>this.onClick(...i),children:this.text})}function Y(){return v(T,{icon:this.icon,endIcon:this.endIcon,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,accessibilityAttributes:this.accessibilityAttributes,tooltip:this.tooltip,design:this.design,disabled:this.disabled,hidden:this.hidden,class:"ui5-tb-popover-button ui5-tb-popover-item","data-ui5-external-action-item-id":this._id,"data-ui5-stable":this.stableDomRef,onClick:(...i)=>this.onClick(...i),children:this.text})}u("@ui5/webcomponents-theming","sap_horizon",async()=>y);u("@ui5/webcomponents","sap_horizon",async()=>I);const Z=`:not([icon-only]).ui5-tb-popover-button::part(button){justify-content:start}
`;var d=function(i,e,t,o){var s=arguments.length,r=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(l=i[c])&&(r=(s<3?l(r):s>3?l(e,t,r):l(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let a=class extends Q{constructor(){super(...arguments),this.disabled=!1,this.design="Default",this.accessibilityAttributes={}}get styles(){return{width:this.width,display:this.hidden?"none":"inline-block"}}get containsText(){return!0}static get toolbarTemplate(){return X}static get toolbarPopoverTemplate(){return Y}onClick(e){e.stopImmediatePropagation(),!!this.fireDecoratorEvent("click",{targetRef:e.target})&&!this.preventOverflowClosing&&this.fireDecoratorEvent("close-overflow")}};d([n({type:Boolean})],a.prototype,"disabled",void 0);d([n()],a.prototype,"design",void 0);d([n()],a.prototype,"icon",void 0);d([n()],a.prototype,"endIcon",void 0);d([n()],a.prototype,"tooltip",void 0);d([n()],a.prototype,"accessibleName",void 0);d([n()],a.prototype,"accessibleNameRef",void 0);d([n({type:Object})],a.prototype,"accessibilityAttributes",void 0);d([n()],a.prototype,"text",void 0);d([n()],a.prototype,"width",void 0);a=d([A({tag:"ui5-toolbar-button",styles:Z}),O("click",{bubbles:!0,cancelable:!0})],a);G(a);a.define();const be=a;export{b as T,Q as a,be as b,pe as c,G as r};
