import{_ as A}from"./iframe-83b4d09c.js";import{U as C,a as g,d as q}from"./UI5Element-a8445a25.js";import{p as m,c as R,e as u,l as o,s as l,a as x,b as W,d as M,w as O}from"./withWebComponent-884f99a7.js";import{s as E}from"./slot-76e48863.js";import{c as f,I as U,e as H}from"./Icon-3e9cb840.js";import{I as T,N as L}from"./ItemNavigation-cb92b87f.js";import{l as j,c as y,b as G}from"./Icons-c55d12a5.js";import{I as K}from"./Integer-f7f172c9.js";import{R as N}from"./ResizeHandler-cea672cf.js";import{a4 as Y,a5 as J,a6 as Q,a7 as X}from"./i18n-defaults-fca59c5d.js";import{a as Z}from"./Link-8b80096c.js";import ee from"./Label-6cefa2d2.js";import te from"./ResponsivePopover-1eb02d4a.js";import{L as ie}from"./ListItemBase-124add92.js";import re from"./StandardListItem-8dc8c287.js";import{B as oe}from"./Button-f1768a08.js";import"./slim-arrow-down-91425847.js";var k;(function(s){s.Standard="Standard",s.NoCurrentPage="NoCurrentPage"})(k||(k={}));const v=k;var $;(function(s){s.Slash="Slash",s.BackSlash="BackSlash",s.DoubleBackSlash="DoubleBackSlash",s.DoubleGreaterThan="DoubleGreaterThan",s.DoubleSlash="DoubleSlash",s.GreaterThan="GreaterThan"})($||($={}));const I=$;var b=globalThis&&globalThis.__decorate||function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var c=s.length-1;c>=0;c--)(a=s[c])&&(n=(r<3?a(n):r>3?a(e,t,n):a(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n};let d=class extends C{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}};b([m()],d.prototype,"href",void 0);b([m({defaultValue:void 0})],d.prototype,"target",void 0);b([m()],d.prototype,"accessibleName",void 0);b([E({type:Node,default:!0})],d.prototype,"text",void 0);d=b([R("ui5-breadcrumbs-item")],d);d.define();const V=d,ne=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));function se(s,e,t){return t?u`<nav class="ui5-breadcrumbs-root" aria-label="${o(this._accessibleNameText)}"><ol @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${this._isOverflowEmpty}"><${l("ui5-link",e,t)} @ui5-click="${o(this._openRespPopover)}" accessible-role="button" aria-label="${o(this._dropdownArrowAccessibleNameText)}" aria-haspopup="${o(this._ariaHasPopup)}"><${l("ui5-icon",e,t)} name="slim-arrow-down" title="${o(this._dropdownArrowAccessibleNameText)}"></${l("ui5-icon",e,t)}></${l("ui5-link",e,t)}></li>${f(this._linksData,(i,r)=>i._id||r,(i,r)=>D.call(this,s,e,t,i,r))}${this._endsWithCurrentLocationLabel?B.call(this,s,e,t):void 0}</ol></nav>`:u`<nav class="ui5-breadcrumbs-root" aria-label="${o(this._accessibleNameText)}"><ol @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${this._isOverflowEmpty}"><ui5-link @ui5-click="${o(this._openRespPopover)}" accessible-role="button" aria-label="${o(this._dropdownArrowAccessibleNameText)}" aria-haspopup="${o(this._ariaHasPopup)}"><ui5-icon name="slim-arrow-down" title="${o(this._dropdownArrowAccessibleNameText)}"></ui5-icon></ui5-link></li>${f(this._linksData,(i,r)=>i._id||r,(i,r)=>D.call(this,s,e,t,i,r))}${this._endsWithCurrentLocationLabel?B.call(this,s,e,t):void 0}</ol></nav>`}function D(s,e,t,i,r){return t?u`<li class="ui5-breadcrumbs-link-wrapper" id="${o(i._id)}-link-wrapper"><${l("ui5-link",e,t)} @ui5-click="${o(this._onLinkPress)}" href="${o(i.href)}" target="${o(i.target)}" id="${o(i._id)}-link" accessible-name="${o(i._accessibleNameText)}" data-ui5-stable="${o(i.stableDomRef)}">${o(i.innerText)}</${l("ui5-link",e,t)}></li>`:u`<li class="ui5-breadcrumbs-link-wrapper" id="${o(i._id)}-link-wrapper"><ui5-link @ui5-click="${o(this._onLinkPress)}" href="${o(i.href)}" target="${o(i.target)}" id="${o(i._id)}-link" accessible-name="${o(i._accessibleNameText)}" data-ui5-stable="${o(i.stableDomRef)}">${o(i.innerText)}</ui5-link></li>`}function B(s,e,t){return t?u`<li class="ui5-breadcrumbs-current-location" @click="${this._onLabelPress}"><span aria-current="page" aria-label="${o(this._currentLocationAccName)}" role="link" id="${o(this._id)}-labelWrapper"><${l("ui5-label",e,t)}>${o(this._currentLocationText)}</${l("ui5-label",e,t)}></span></li>`:u`<li class="ui5-breadcrumbs-current-location" @click="${this._onLabelPress}"><span aria-current="page" aria-label="${o(this._currentLocationAccName)}" role="link" id="${o(this._id)}-labelWrapper"><ui5-label>${o(this._currentLocationText)}</ui5-label></span></li>`}function ae(s,e,t){return t?u`<${l("ui5-responsive-popover",e,t)} class="ui5-breadcrumbs-popover" hide-arrow content-only-on-desktop placement-type="Bottom" horizontal-align="Left" _hide-header @keydown="${this._onkeydown}"><${l("ui5-list",e,t)} mode="SingleSelect" separators="None" @ui5-selection-change="${o(this._onOverflowListItemSelect)}">${f(this._overflowItemsData,(i,r)=>i._id||r,(i,r)=>P.call(this,s,e,t,i,r))}</${l("ui5-list",e,t)}><div slot="footer" class="ui5-breadcrumbs-popover-footer"><${l("ui5-button",e,t)} design="Transparent" @click="${this._closeRespPopover}">${o(this._cancelButtonText)}</${l("ui5-button",e,t)}></div></${l("ui5-responsive-popover",e,t)}>`:u`<ui5-responsive-popover class="ui5-breadcrumbs-popover" hide-arrow content-only-on-desktop placement-type="Bottom" horizontal-align="Left" _hide-header @keydown="${this._onkeydown}"><ui5-list mode="SingleSelect" separators="None" @ui5-selection-change="${o(this._onOverflowListItemSelect)}">${f(this._overflowItemsData,(i,r)=>i._id||r,(i,r)=>P.call(this,s,e,t,i,r))}</ui5-list><div slot="footer" class="ui5-breadcrumbs-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">${o(this._cancelButtonText)}</ui5-button></div></ui5-responsive-popover>`}function P(s,e,t,i,r){return t?u`<${l("ui5-li",e,t)} id="${o(i._id)}-li" accessible-name="${o(i.accessibleName)}" data-ui5-stable="${o(i.stableDomRef)}">${o(i.textContent)}</${l("ui5-li",e,t)}>`:u`<ui5-li id="${o(i._id)}-li" accessible-name="${o(i.accessibleName)}" data-ui5-stable="${o(i.stableDomRef)}">${o(i.textContent)}</ui5-li>`}g("@ui5/webcomponents-theming","sap_fiori_3",async()=>x);g("@ui5/webcomponents","sap_fiori_3",async()=>W);const le={packageName:"@ui5/webcomponents",fileName:"themes/Breadcrumbs.css",content:':host(:not([hidden])){display:block;width:100%}.ui5-breadcrumbs-root{white-space:nowrap;outline:none;margin:0 0 .5rem 0}.ui5-breadcrumbs-root>ol{margin:0;padding:0;list-style-type:none;display:-webkit-box;display:-webkit-flex;display:flex}.ui5-breadcrumbs-root>ol>li{display:inline}.ui5-breadcrumbs-current-location{min-width:1%;-webkit-flex:1;-webkit-box-flex:1;flex:1 1 auto;font-size:0;align-self:center}.ui5-breadcrumbs-current-location>span:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5_breadcrumbs_current_location_focus_border_radius)}.ui5-breadcrumbs-dropdown-arrow-link-wrapper[hidden]{display:none}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-icon]{width:var(--sapFontSize);height:var(--sapFontSize);padding-left:.675rem;vertical-align:text-top;color:var(--sapLinkColor)}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link][focused] [ui5-icon]{color:var(--_ui5_link_focus_color)}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-icon]:before{content:"...";vertical-align:middle;position:absolute;left:0;bottom:0}.ui5-breadcrumbs-dropdown-arrow-link-wrapper:hover [ui5-icon]:after,.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link][focused] [ui5-icon]:after{content:"";position:absolute;border-bottom:.0625rem solid;top:0;left:0;bottom:1px;right:0}li:not(.ui5-breadcrumbs-current-location):after{content:"/";padding:0 .25rem;cursor:auto;color:var(--sapContent_LabelColor);display:inline-block;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize)}.ui5-breadcrumbs-popover-footer{display:flex;justify-content:flex-end;width:100%}:host([separator-style=BackSlash]) li:not(.ui5-breadcrumbs-current-location):after{content:"\\\\"}:host([separator-style=DoubleBackSlash]) li:not(.ui5-breadcrumbs-current-location):after{content:"\\\\\\\\"}:host([separator-style=DoubleGreaterThan]) li:not(.ui5-breadcrumbs-current-location):after{content:">>"}:host([separator-style=DoubleSlash]) li:not(.ui5-breadcrumbs-current-location):after{content:"//"}:host([separator-style=GreaterThan]) li:not(.ui5-breadcrumbs-current-location):after{content:">"}'};g("@ui5/webcomponents-theming","sap_fiori_3",async()=>x);g("@ui5/webcomponents","sap_fiori_3",async()=>W);const ce={packageName:"@ui5/webcomponents",fileName:"themes/BreadcrumbsPopover.css",content:".ui5-breadcrumbs-popover::part(content){padding:0}.ui5-breadcrumbs-popover-footer{display:flex;justify-content:flex-end;width:100%;padding-right:.5rem;align-items:center}"};var _=globalThis&&globalThis.__decorate||function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var c=s.length-1;c>=0;c--)(a=s[c])&&(n=(r<3?a(n):r>3?a(e,t,n):a(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},h;let p=h=class extends C{constructor(){super(),this._breadcrumbItemWidths=new WeakMap,this._dropdownArrowLinkWidth=0,this._itemNavigation=new T(this,{navigationMode:L.Horizontal,getItemsCallback:()=>this._getFocusableItems()}),this._onResizeHandler=this._updateOverflow.bind(this),this._labelFocusAdaptor={id:`${this._id}-labelWrapper`,getlabelWrapper:this.getCurrentLocationLabelWrapper.bind(this),set _tabIndex(e){const t=this.getlabelWrapper();t&&t.setAttribute("tabindex",e)},get _tabIndex(){const e=this.getlabelWrapper();return(e==null?void 0:e.getAttribute("tabindex"))||""}}}onInvalidation(e){if(e.reason==="childchange"){const t=this._getItems().indexOf(e.child);t<this._overflowSize&&(this._overflowSize=t)}}_getItems(){return this.getSlottedNodes("items")}onBeforeRendering(){this._preprocessItems()}onAfterRendering(){this._cacheWidths(),this._updateOverflow()}onEnterDOM(){N.register(this,this._onResizeHandler)}onExitDOM(){N.deregister(this,this._onResizeHandler)}_initItemNavigation(){this._itemNavigation||(this._itemNavigation=new T(this,{navigationMode:L.Horizontal,getItemsCallback:()=>this._getFocusableItems()}))}_getFocusableItems(){const e=this._links;return this._isOverflowEmpty||e.unshift(this._dropdownArrowLink),this._endsWithCurrentLocationLabel&&e.push(this._labelFocusAdaptor),e}_onfocusin(e){const t=e.target,i=this.getCurrentLocationLabelWrapper(),r=t===i?this._labelFocusAdaptor:t;this._itemNavigation.setCurrentItem(r)}_onkeydown(e){const t=this._isDropdownArrowFocused;if(j(e)&&t&&!this._isOverflowEmpty){e.preventDefault(),this._toggleRespPopover();return}if(y(e)&&t&&!this._isOverflowEmpty&&!this._isPickerOpen){e.preventDefault();return}(G(e)||y(e))&&this._isCurrentLocationLabelFocused&&this._onLabelPress(e)}_onkeyup(e){this._isDropdownArrowFocused&&y(e)&&!this._isOverflowEmpty&&!this._isPickerOpen&&this._openRespPopover()}_cacheWidths(){const e=this._breadcrumbItemWidths,t=this._getItems(),i=this._currentLocationLabel;for(let r=this._overflowSize;r<t.length;r++){const n=t[r],a=this.shadowRoot.querySelector(`#${n._id}-link-wrapper`);e.set(n,this._getElementWidth(a))}if(t.length&&this._endsWithCurrentLocationLabel&&i){const r=t[t.length-1];e.set(r,this._getElementWidth(i))}if(!this._isOverflowEmpty){const r=this.shadowRoot.querySelector(".ui5-breadcrumbs-dropdown-arrow-link-wrapper");this._dropdownArrowLinkWidth=this._getElementWidth(r)}}_updateOverflow(){const e=this._getItems(),t=this.shadowRoot.querySelector(".ui5-breadcrumbs-root").offsetWidth;let i=this._getTotalContentWidth(),r=0;for(i>t&&(i+=this._dropdownArrowLinkWidth);i>t&&r<this._maxAllowedOverflowSize;){const a=e[r];let c=0;this._isItemVisible(a)&&(c=this._breadcrumbItemWidths.get(a)||0),i-=c,r++}this._overflowSize=r,this._isOverflowEmpty&&this._isPickerOpen&&this.responsivePopover.close();const n=this._getFocusableItems();n.some(a=>a._tabIndex==="0")||this._itemNavigation.setCurrentItem(n[0])}_getElementWidth(e){return e?Math.ceil(e.getBoundingClientRect().width):0}_getTotalContentWidth(){const e=this._getItems(),t=this._breadcrumbItemWidths;return e.reduce((r,n)=>r+t.get(n),0)}_onLinkPress(e){const t=e.target,i=this._getItems(),r=i.find(z=>`${z._id}-link`===t.id),{altKey:n,ctrlKey:a,metaKey:c,shiftKey:F}=e.detail;this.fireEvent("item-click",{item:r,altKey:n,ctrlKey:a,metaKey:c,shiftKey:F},!0)||e.preventDefault()}_onLabelPress(e){const t=this._getItems(),i=t[t.length-1],{altKey:r,ctrlKey:n,metaKey:a,shiftKey:c}=e;this.fireEvent("item-click",{item:i,altKey:r,ctrlKey:n,metaKey:a,shiftKey:c})}_onOverflowListItemSelect(e){const t=e.detail.selectedItems[0],i=this._getItems(),r=i.find(n=>`${n._id}-li`===t.id);this.fireEvent("item-click",{item:r},!0)&&(window.open(r.href,r.target||"_self","noopener,noreferrer"),this.responsivePopover.close())}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}async _toggleRespPopover(){this.responsivePopover=await this._respPopover(),this._isPickerOpen?this._closeRespPopover():this._openRespPopover()}_closeRespPopover(){this.responsivePopover&&this.responsivePopover.close()}async _openRespPopover(){this.responsivePopover=await this._respPopover(),this.responsivePopover.showAt(this._dropdownArrowLink)}_isItemVisible(e){return!e.hidden&&this._hasVisibleContent(e)}_hasVisibleContent(e){return e.innerText||Array.from(e.children).some(t=>!t.hidden)}_preprocessItems(){this.items.forEach(e=>{e._getRealDomRef=()=>this.getDomRef().querySelector(`[data-ui5-stable*=${e.stableDomRef}]`)})}_getItemPositionText(e,t){return h.i18nBundle.getText(Y,e,t)}_getItemAccessibleName(e,t,i){const r=this._getItemPositionText(t,i),n=e.textContent||"";let a="";return e.accessibleName?a=`${n.trim()} ${e.accessibleName} ${r}`:a=`${n.trim()} ${r}`,a}getCurrentLocationLabelWrapper(){return this.shadowRoot.querySelector(".ui5-breadcrumbs-current-location > span")}get _visibleItems(){return this._getItems().slice(this._overflowSize).filter(e=>this._isItemVisible(e))}get _endsWithCurrentLocationLabel(){return this.design===v.Standard}get _currentLocationText(){const e=this._getItems();if(this._endsWithCurrentLocationLabel&&e.length){const t=e[e.length-1];if(this._isItemVisible(t))return t.innerText}return""}get _currentLocationLabel(){return this.shadowRoot.querySelector(".ui5-breadcrumbs-current-location [ui5-label]")}get _isDropdownArrowFocused(){return this._dropdownArrowLink._tabIndex==="0"}get _isCurrentLocationLabelFocused(){const e=this.getCurrentLocationLabelWrapper();return e&&e.tabIndex===0}get _maxAllowedOverflowSize(){return this._getItems().filter(t=>this._isItemVisible(t)).length-1}get _dropdownArrowLink(){return this.shadowRoot.querySelector(".ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link]")}get _overflowItemsData(){return this._getItems().slice(0,this._overflowSize).filter(e=>this._isItemVisible(e)).reverse()}get _linksData(){const e=this._visibleItems,t=e.length;return this._endsWithCurrentLocationLabel&&e.pop(),e.map((i,r)=>(i._accessibleNameText=this._getItemAccessibleName(i,r+1,t),i))}get _currentLocationAccName(){const e=this._visibleItems,t=this._getItemPositionText(e.length,e.length),i=e[e.length-1];if(!i)return t;const r=i.textContent||"";return i.accessibleName?`${r.trim()} ${i.accessibleName} ${t}`:`${r.trim()} ${t}`}get _links(){return Array.from(this.shadowRoot.querySelectorAll(".ui5-breadcrumbs-link-wrapper [ui5-link]"))}get _isOverflowEmpty(){return this._overflowItemsData.length===0}get _ariaHasPopup(){if(!this._isOverflowEmpty)return"listbox"}get _isPickerOpen(){return!!this.responsivePopover&&this.responsivePopover.opened}get _accessibleNameText(){return h.i18nBundle.getText(J)}get _dropdownArrowAccessibleNameText(){return h.i18nBundle.getText(Q)}get _cancelButtonText(){return h.i18nBundle.getText(X)}static async onDefine(){h.i18nBundle=await q("@ui5/webcomponents")}};_([m({type:v,defaultValue:v.Standard})],p.prototype,"design",void 0);_([m({type:I,defaultValue:I.Slash})],p.prototype,"separatorStyle",void 0);_([m({validator:K,noAttribute:!0,defaultValue:0})],p.prototype,"_overflowSize",void 0);_([E({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],p.prototype,"items",void 0);p=h=_([R({tag:"ui5-breadcrumbs",languageAware:!0,renderer:M,template:se,staticAreaTemplate:ae,styles:le,staticAreaStyles:ce,dependencies:[V,Z,ee,te,ie,re,U,oe]}),H("item-click",{detail:{item:{type:HTMLElement},altKey:{type:Boolean},ctrlKey:{type:Boolean},metaKey:{type:Boolean},shiftKey:{type:Boolean}}})],p);p.define();const ue=p,de=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"})),w=O("ui5-breadcrumbs",["design","separatorStyle"],[],[],["item-click"],()=>A(()=>Promise.resolve().then(()=>de),void 0,import.meta.url));w.displayName="Breadcrumbs";w.defaultProps={design:v.Standard,separatorStyle:I.Slash};try{w.displayName="Breadcrumbs",w.__docgenInfo={description:`Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path. It helps the user to be aware of their location within the application and allows faster navigation.

The last three steps can be accessed as links directly, while the remaining links prior to them are available in a drop-down menu.

You can choose the type of separator to be used from a number of predefined options.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Breadcrumbs" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Breadcrumbs",props:{children:{defaultValue:null,description:"Defines the component items.\n\n**Note:** Use the `BreadcrumbsItem` component to define the desired items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fires when a `BreadcrumbsItem` is clicked. **Note:** You can prevent browser location change by calling `event.preventDefault()`.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<BreadcrumbsDomRef, BreadcrumbsItemClickEventDetail>) => void"}},design:{defaultValue:{value:"BreadcrumbsDesign.Standard"},description:"Defines the visual indication and behavior of the breadcrumbs. Available options are `Standard` (by default) and `NoCurrentPage`.\n\n**Note:** The `Standard` breadcrumbs show the current page as the last item in the trail. The last item contains only plain text and is not a link.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Standard"'},{value:'"Standard"'},{value:'"NoCurrentPage"'},{value:'"NoCurrentPage"'}]}},separatorStyle:{defaultValue:{value:"BreadcrumbsSeparatorStyle.Slash"},description:"Determines the visual style of the separator between the breadcrumb items.\n\nAvailable options are:\n\n*   `Slash`\n*   `BackSlash`\n*   `DoubleBackSlash`\n*   `DoubleGreaterThan`\n*   `DoubleSlash`\n*   `GreaterThan`",name:"separatorStyle",required:!1,type:{name:"enum",value:[{value:'"Slash"'},{value:'"BackSlash"'},{value:'"DoubleBackSlash"'},{value:'"DoubleGreaterThan"'},{value:'"DoubleSlash"'},{value:'"GreaterThan"'},{value:'"Slash"'},{value:'"BackSlash"'},{value:'"DoubleBackSlash"'},{value:'"DoubleGreaterThan"'},{value:'"DoubleSlash"'},{value:'"GreaterThan"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const S=O("ui5-breadcrumbs-item",["accessibleName","href","target"],[],[],[],()=>A(()=>Promise.resolve().then(()=>ne),void 0,import.meta.url));S.displayName="BreadcrumbsItem";try{S.displayName="BreadcrumbsItem",S.__docgenInfo={description:'The `BreadcrumbsItem` component defines the content of an item in `Breadcrumbs`\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Breadcrumbs" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"BreadcrumbsItem",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the item.",name:"accessibleName",required:!1,type:{name:"string"}},href:{defaultValue:null,description:`Defines the link href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Defines the link target.\n\nAvailable options are:\n\n*   `_self`\n*   `_top`\n*   `_blank`\n*   `_parent`\n*   `_search`\n\n\n\n**Note: **This property must only be used when the `href` property is set.****",name:"target",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{w as B,S as a,v as b,I as c};
//# sourceMappingURL=index-284dff4d.js.map
