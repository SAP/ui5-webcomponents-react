import{_ as P}from"./iframe-9526b02b.js";import{U as R,r as g,l as q}from"./UI5Element-a4bd3d38.js";import{p as m,c as C,b as u,l as r,d as l,s as x,a as O,f as M,w as W}from"./withWebComponent-7d7e5133.js";import{s as E}from"./slot-76e48863.js";import{c as f,a as U,e as H}from"./Icon-42236945.js";import{I as T,N as L}from"./ItemNavigation-0734b7c0.js";import{T as j,k as y,l as G}from"./Icons-74c917eb.js";import{I as K}from"./Integer-f7f172c9.js";import{R as N}from"./ResizeHandler-0af4416f.js";import{aS as Y,aT as J,aU as Q,aV as X}from"./i18n-defaults-d675a36d.js";import{a as Z}from"./Link-307a9e73.js";import ee from"./Label-34e3bd87.js";import te from"./ResponsivePopover-5c74b7f5.js";import{d as ne}from"./ListItemBase-e006c78e.js";import ie from"./StandardListItem-e017edb3.js";import{b as re}from"./Button-7043cfcf.js";import"./slim-arrow-down-9459236f.js";var k;(function(s){s.Standard="Standard",s.NoCurrentPage="NoCurrentPage"})(k||(k={}));const v=k;var $;(function(s){s.Slash="Slash",s.BackSlash="BackSlash",s.DoubleBackSlash="DoubleBackSlash",s.DoubleGreaterThan="DoubleGreaterThan",s.DoubleSlash="DoubleSlash",s.GreaterThan="GreaterThan"})($||($={}));const I=$;var b=globalThis&&globalThis.__decorate||function(s,e,t,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,n);else for(var c=s.length-1;c>=0;c--)(a=s[c])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o};let d=class extends R{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}};b([m()],d.prototype,"href",void 0);b([m({defaultValue:void 0})],d.prototype,"target",void 0);b([m()],d.prototype,"accessibleName",void 0);b([E({type:Node,default:!0})],d.prototype,"text",void 0);d=b([C("ui5-breadcrumbs-item")],d);d.define();const V=d,oe=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));function se(s,e,t){return t?u`<nav class="ui5-breadcrumbs-root" aria-label="${r(this._accessibleNameText)}"><ol @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${this._isOverflowEmpty}"><${l("ui5-link",e,t)} @ui5-click="${r(this._openRespPopover)}" accessible-role="button" aria-label="${r(this._dropdownArrowAccessibleNameText)}" aria-haspopup="${r(this._ariaHasPopup)}"><${l("ui5-icon",e,t)} name="slim-arrow-down" title="${r(this._dropdownArrowAccessibleNameText)}"></${l("ui5-icon",e,t)}></${l("ui5-link",e,t)}></li>${f(this._linksData,(n,i)=>n._id||i,(n,i)=>D.call(this,s,e,t,n,i))}${this._endsWithCurrentLocationLabel?B.call(this,s,e,t):void 0}</ol></nav>`:u`<nav class="ui5-breadcrumbs-root" aria-label="${r(this._accessibleNameText)}"><ol @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${this._isOverflowEmpty}"><ui5-link @ui5-click="${r(this._openRespPopover)}" accessible-role="button" aria-label="${r(this._dropdownArrowAccessibleNameText)}" aria-haspopup="${r(this._ariaHasPopup)}"><ui5-icon name="slim-arrow-down" title="${r(this._dropdownArrowAccessibleNameText)}"></ui5-icon></ui5-link></li>${f(this._linksData,(n,i)=>n._id||i,(n,i)=>D.call(this,s,e,t,n,i))}${this._endsWithCurrentLocationLabel?B.call(this,s,e,t):void 0}</ol></nav>`}function D(s,e,t,n,i){return t?u`<li class="ui5-breadcrumbs-link-wrapper" id="${r(n._id)}-link-wrapper"><${l("ui5-link",e,t)} @ui5-click="${r(this._onLinkPress)}" href="${r(n.href)}" target="${r(n.target)}" id="${r(n._id)}-link" accessible-name="${r(n._accessibleNameText)}" data-ui5-stable="${r(n.stableDomRef)}">${r(n.innerText)}</${l("ui5-link",e,t)}></li>`:u`<li class="ui5-breadcrumbs-link-wrapper" id="${r(n._id)}-link-wrapper"><ui5-link @ui5-click="${r(this._onLinkPress)}" href="${r(n.href)}" target="${r(n.target)}" id="${r(n._id)}-link" accessible-name="${r(n._accessibleNameText)}" data-ui5-stable="${r(n.stableDomRef)}">${r(n.innerText)}</ui5-link></li>`}function B(s,e,t){return t?u`<li class="ui5-breadcrumbs-current-location" @click="${this._onLabelPress}"><span aria-current="page" aria-label="${r(this._currentLocationAccName)}" role="link" id="${r(this._id)}-labelWrapper"><${l("ui5-label",e,t)}>${r(this._currentLocationText)}</${l("ui5-label",e,t)}></span></li>`:u`<li class="ui5-breadcrumbs-current-location" @click="${this._onLabelPress}"><span aria-current="page" aria-label="${r(this._currentLocationAccName)}" role="link" id="${r(this._id)}-labelWrapper"><ui5-label>${r(this._currentLocationText)}</ui5-label></span></li>`}function ae(s,e,t){return t?u`<${l("ui5-responsive-popover",e,t)} class="ui5-breadcrumbs-popover" hide-arrow content-only-on-desktop placement-type="Bottom" horizontal-align="Left" _hide-header @keydown="${this._onkeydown}"><${l("ui5-list",e,t)} mode="SingleSelect" separators="None" @ui5-selection-change="${r(this._onOverflowListItemSelect)}">${f(this._overflowItemsData,(n,i)=>n._id||i,(n,i)=>A.call(this,s,e,t,n,i))}</${l("ui5-list",e,t)}><div slot="footer" class="ui5-breadcrumbs-popover-footer"><${l("ui5-button",e,t)} design="Transparent" @click="${this._closeRespPopover}">${r(this._cancelButtonText)}</${l("ui5-button",e,t)}></div></${l("ui5-responsive-popover",e,t)}>`:u`<ui5-responsive-popover class="ui5-breadcrumbs-popover" hide-arrow content-only-on-desktop placement-type="Bottom" horizontal-align="Left" _hide-header @keydown="${this._onkeydown}"><ui5-list mode="SingleSelect" separators="None" @ui5-selection-change="${r(this._onOverflowListItemSelect)}">${f(this._overflowItemsData,(n,i)=>n._id||i,(n,i)=>A.call(this,s,e,t,n,i))}</ui5-list><div slot="footer" class="ui5-breadcrumbs-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">${r(this._cancelButtonText)}</ui5-button></div></ui5-responsive-popover>`}function A(s,e,t,n,i){return t?u`<${l("ui5-li",e,t)} id="${r(n._id)}-li" accessible-name="${r(n.accessibleName)}" data-ui5-stable="${r(n.stableDomRef)}">${r(n.textContent)}</${l("ui5-li",e,t)}>`:u`<ui5-li id="${r(n._id)}-li" accessible-name="${r(n.accessibleName)}" data-ui5-stable="${r(n.stableDomRef)}">${r(n.textContent)}</ui5-li>`}g("@ui5/webcomponents-theming","sap_fiori_3",async()=>x);g("@ui5/webcomponents","sap_fiori_3",async()=>O);const le={packageName:"@ui5/webcomponents",fileName:"themes/Breadcrumbs.css",content:`:host(:not([hidden])) {
	display: block;
	width: 100%;
}

.ui5-breadcrumbs-root {
    white-space: nowrap;
    outline: none;
    margin: 0 0 0.5rem 0;
}

.ui5-breadcrumbs-root > ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}

.ui5-breadcrumbs-root > ol > li {
    display: inline;
}

.ui5-breadcrumbs-current-location {
    min-width: 1%;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    /* Fix extra height in ul -> li element */
    font-size: 0;
    align-self: center;
}

.ui5-breadcrumbs-current-location > span:focus {
    outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
    border-radius: var(--_ui5_breadcrumbs_current_location_focus_border_radius);
}

.ui5-breadcrumbs-dropdown-arrow-link-wrapper[hidden] {
    display: none
}

.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-icon] {
    width: var(--sapFontSize);
    height: var(--sapFontSize);
    padding-left: .675rem;
    vertical-align: text-top;
    color: var(--sapLinkColor);
}

.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link][focused] [ui5-icon] {
    color: var(--_ui5_link_focus_color);
}

.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-icon]::before {
    content: "...";
    vertical-align: middle;
    position: absolute;
    left: 0;
    bottom: 0;
}

/* underline icon on hover */

.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link][focused] [ui5-icon]::after,
.ui5-breadcrumbs-dropdown-arrow-link-wrapper:hover [ui5-icon]::after {
    content: "";
    position: absolute;
    border-bottom: 0.0625rem solid;
    top: 0;
    left: 0;
    bottom: 1px;
    right: 0;
}

/* links separator */

li:not(.ui5-breadcrumbs-current-location)::after {
    content: "/"; /* default separator is "Slash" */
    padding: 0 .25rem;
    cursor: auto;
    color: var(--sapContent_LabelColor);
    display: inline-block;
    font-family: "72override",var(--sapFontFamily);
    font-size: var(--sapFontSize);
}

.ui5-breadcrumbs-popover-footer {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

/* separator styles */

:host([separator-style="BackSlash"]) li:not(.ui5-breadcrumbs-current-location)::after {
    content: "\\\\";
}

:host([separator-style="DoubleBackSlash"]) li:not(.ui5-breadcrumbs-current-location)::after {
    content: "\\\\\\\\";
}

:host([separator-style="DoubleGreaterThan"]) li:not(.ui5-breadcrumbs-current-location)::after {
    content: ">>";
}

:host([separator-style="DoubleSlash"]) li:not(.ui5-breadcrumbs-current-location)::after {
    content: "//";
}

:host([separator-style="GreaterThan"]) li:not(.ui5-breadcrumbs-current-location)::after {
    content: ">";
}
`};g("@ui5/webcomponents-theming","sap_fiori_3",async()=>x);g("@ui5/webcomponents","sap_fiori_3",async()=>O);const ce={packageName:"@ui5/webcomponents",fileName:"themes/BreadcrumbsPopover.css",content:`.ui5-breadcrumbs-popover::part(content) {\r
    padding: 0;\r
}\r
\r
.ui5-breadcrumbs-popover-footer {\r
    display: flex;\r
    justify-content: flex-end;\r
    width: 100%;\r
    padding-right: 0.5rem;\r
	align-items: center;\r
}\r
`};var _=globalThis&&globalThis.__decorate||function(s,e,t,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,n);else for(var c=s.length-1;c>=0;c--)(a=s[c])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},h;let p=h=class extends R{constructor(){super(),this._breadcrumbItemWidths=new WeakMap,this._dropdownArrowLinkWidth=0,this._itemNavigation=new T(this,{navigationMode:L.Horizontal,getItemsCallback:()=>this._getFocusableItems()}),this._onResizeHandler=this._updateOverflow.bind(this),this._labelFocusAdaptor={id:`${this._id}-labelWrapper`,getlabelWrapper:this.getCurrentLocationLabelWrapper.bind(this),set _tabIndex(e){const t=this.getlabelWrapper();t&&t.setAttribute("tabindex",e)},get _tabIndex(){const e=this.getlabelWrapper();return(e==null?void 0:e.getAttribute("tabindex"))||""}}}onInvalidation(e){if(e.reason==="childchange"){const t=this._getItems().indexOf(e.child);t<this._overflowSize&&(this._overflowSize=t)}}_getItems(){return this.getSlottedNodes("items")}onBeforeRendering(){this._preprocessItems()}onAfterRendering(){this._cacheWidths(),this._updateOverflow()}onEnterDOM(){N.register(this,this._onResizeHandler)}onExitDOM(){N.deregister(this,this._onResizeHandler)}_initItemNavigation(){this._itemNavigation||(this._itemNavigation=new T(this,{navigationMode:L.Horizontal,getItemsCallback:()=>this._getFocusableItems()}))}_getFocusableItems(){const e=this._links;return this._isOverflowEmpty||e.unshift(this._dropdownArrowLink),this._endsWithCurrentLocationLabel&&e.push(this._labelFocusAdaptor),e}_onfocusin(e){const t=e.target,n=this.getCurrentLocationLabelWrapper(),i=t===n?this._labelFocusAdaptor:t;this._itemNavigation.setCurrentItem(i)}_onkeydown(e){const t=this._isDropdownArrowFocused;if(j(e)&&t&&!this._isOverflowEmpty){e.preventDefault(),this._toggleRespPopover();return}if(y(e)&&t&&!this._isOverflowEmpty&&!this._isPickerOpen){e.preventDefault();return}(G(e)||y(e))&&this._isCurrentLocationLabelFocused&&this._onLabelPress(e)}_onkeyup(e){this._isDropdownArrowFocused&&y(e)&&!this._isOverflowEmpty&&!this._isPickerOpen&&this._openRespPopover()}_cacheWidths(){const e=this._breadcrumbItemWidths,t=this._getItems(),n=this._currentLocationLabel;for(let i=this._overflowSize;i<t.length;i++){const o=t[i],a=this.shadowRoot.querySelector(`#${o._id}-link-wrapper`);e.set(o,this._getElementWidth(a))}if(t.length&&this._endsWithCurrentLocationLabel&&n){const i=t[t.length-1];e.set(i,this._getElementWidth(n))}if(!this._isOverflowEmpty){const i=this.shadowRoot.querySelector(".ui5-breadcrumbs-dropdown-arrow-link-wrapper");this._dropdownArrowLinkWidth=this._getElementWidth(i)}}_updateOverflow(){const e=this._getItems(),t=this.shadowRoot.querySelector(".ui5-breadcrumbs-root").offsetWidth;let n=this._getTotalContentWidth(),i=0;for(n>t&&(n+=this._dropdownArrowLinkWidth);n>t&&i<this._maxAllowedOverflowSize;){const a=e[i];let c=0;this._isItemVisible(a)&&(c=this._breadcrumbItemWidths.get(a)||0),n-=c,i++}this._overflowSize=i,this._isOverflowEmpty&&this._isPickerOpen&&this.responsivePopover.close();const o=this._getFocusableItems();o.some(a=>a._tabIndex==="0")||this._itemNavigation.setCurrentItem(o[0])}_getElementWidth(e){return e?Math.ceil(e.getBoundingClientRect().width):0}_getTotalContentWidth(){const e=this._getItems(),t=this._breadcrumbItemWidths;return e.reduce((i,o)=>i+t.get(o),0)}_onLinkPress(e){const t=e.target,n=this._getItems(),i=n.find(z=>`${z._id}-link`===t.id),{altKey:o,ctrlKey:a,metaKey:c,shiftKey:F}=e.detail;this.fireEvent("item-click",{item:i,altKey:o,ctrlKey:a,metaKey:c,shiftKey:F},!0)||e.preventDefault()}_onLabelPress(e){const t=this._getItems(),n=t[t.length-1],{altKey:i,ctrlKey:o,metaKey:a,shiftKey:c}=e;this.fireEvent("item-click",{item:n,altKey:i,ctrlKey:o,metaKey:a,shiftKey:c})}_onOverflowListItemSelect(e){const t=e.detail.selectedItems[0],n=this._getItems(),i=n.find(o=>`${o._id}-li`===t.id);this.fireEvent("item-click",{item:i},!0)&&(window.open(i.href,i.target||"_self","noopener,noreferrer"),this.responsivePopover.close())}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}async _toggleRespPopover(){this.responsivePopover=await this._respPopover(),this._isPickerOpen?this._closeRespPopover():this._openRespPopover()}_closeRespPopover(){this.responsivePopover&&this.responsivePopover.close()}async _openRespPopover(){this.responsivePopover=await this._respPopover(),this.responsivePopover.showAt(this._dropdownArrowLink)}_isItemVisible(e){return!e.hidden&&this._hasVisibleContent(e)}_hasVisibleContent(e){return e.innerText||Array.from(e.children).some(t=>!t.hidden)}_preprocessItems(){this.items.forEach(e=>{e._getRealDomRef=()=>this.getDomRef().querySelector(`[data-ui5-stable*=${e.stableDomRef}]`)})}_getItemPositionText(e,t){return h.i18nBundle.getText(Y,e,t)}_getItemAccessibleName(e,t,n){const i=this._getItemPositionText(t,n),o=e.textContent||"";let a="";return e.accessibleName?a=`${o.trim()} ${e.accessibleName} ${i}`:a=`${o.trim()} ${i}`,a}getCurrentLocationLabelWrapper(){return this.shadowRoot.querySelector(".ui5-breadcrumbs-current-location > span")}get _visibleItems(){return this._getItems().slice(this._overflowSize).filter(e=>this._isItemVisible(e))}get _endsWithCurrentLocationLabel(){return this.design===v.Standard}get _currentLocationText(){const e=this._getItems();if(this._endsWithCurrentLocationLabel&&e.length){const t=e[e.length-1];if(this._isItemVisible(t))return t.innerText}return""}get _currentLocationLabel(){return this.shadowRoot.querySelector(".ui5-breadcrumbs-current-location [ui5-label]")}get _isDropdownArrowFocused(){return this._dropdownArrowLink._tabIndex==="0"}get _isCurrentLocationLabelFocused(){const e=this.getCurrentLocationLabelWrapper();return e&&e.tabIndex===0}get _maxAllowedOverflowSize(){return this._getItems().filter(t=>this._isItemVisible(t)).length-1}get _dropdownArrowLink(){return this.shadowRoot.querySelector(".ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link]")}get _overflowItemsData(){return this._getItems().slice(0,this._overflowSize).filter(e=>this._isItemVisible(e)).reverse()}get _linksData(){const e=this._visibleItems,t=e.length;return this._endsWithCurrentLocationLabel&&e.pop(),e.map((n,i)=>(n._accessibleNameText=this._getItemAccessibleName(n,i+1,t),n))}get _currentLocationAccName(){const e=this._visibleItems,t=this._getItemPositionText(e.length,e.length),n=e[e.length-1];if(!n)return t;const i=n.textContent||"";return n.accessibleName?`${i.trim()} ${n.accessibleName} ${t}`:`${i.trim()} ${t}`}get _links(){return Array.from(this.shadowRoot.querySelectorAll(".ui5-breadcrumbs-link-wrapper [ui5-link]"))}get _isOverflowEmpty(){return this._overflowItemsData.length===0}get _ariaHasPopup(){if(!this._isOverflowEmpty)return"listbox"}get _isPickerOpen(){return!!this.responsivePopover&&this.responsivePopover.opened}get _accessibleNameText(){return h.i18nBundle.getText(J)}get _dropdownArrowAccessibleNameText(){return h.i18nBundle.getText(Q)}get _cancelButtonText(){return h.i18nBundle.getText(X)}static async onDefine(){h.i18nBundle=await q("@ui5/webcomponents")}};_([m({type:v,defaultValue:v.Standard})],p.prototype,"design",void 0);_([m({type:I,defaultValue:I.Slash})],p.prototype,"separatorStyle",void 0);_([m({validator:K,noAttribute:!0,defaultValue:0})],p.prototype,"_overflowSize",void 0);_([E({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],p.prototype,"items",void 0);p=h=_([C({tag:"ui5-breadcrumbs",languageAware:!0,renderer:M,template:se,staticAreaTemplate:ae,styles:le,staticAreaStyles:ce,dependencies:[V,Z,ee,te,ne,ie,U,re]}),H("item-click",{detail:{item:{type:HTMLElement},altKey:{type:Boolean},ctrlKey:{type:Boolean},metaKey:{type:Boolean},shiftKey:{type:Boolean}}})],p);p.define();const ue=p,de=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"})),w=W("ui5-breadcrumbs",["design","separatorStyle"],[],[],["item-click"],()=>P(()=>Promise.resolve().then(()=>de),void 0,import.meta.url));w.displayName="Breadcrumbs";w.defaultProps={design:v.Standard,separatorStyle:I.Slash};try{w.displayName="Breadcrumbs",w.__docgenInfo={description:`Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path. It helps the user to be aware of their location within the application and allows faster navigation.

The last three steps can be accessed as links directly, while the remaining links prior to them are available in a drop-down menu.

You can choose the type of separator to be used from a number of predefined options.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Breadcrumbs)`,displayName:"Breadcrumbs",props:{children:{defaultValue:null,description:"Defines the component items.\n\n**Note:** Use the `BreadcrumbsItem` component to define the desired items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fires when a `BreadcrumbsItem` is clicked. **Note:** You can prevent browser location change by calling `event.preventDefault()`.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<BreadcrumbsDomRef, BreadcrumbsItemClickEventDetail>) => void"}},design:{defaultValue:{value:"BreadcrumbsDesign.Standard"},description:"Defines the visual indication and behavior of the breadcrumbs. Available options are `Standard` (by default) and `NoCurrentPage`.\n\n**Note:** The `Standard` breadcrumbs show the current page as the last item in the trail. The last item contains only plain text and is not a link.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Standard"'},{value:'"Standard"'},{value:'"NoCurrentPage"'},{value:'"NoCurrentPage"'}]}},separatorStyle:{defaultValue:{value:"BreadcrumbsSeparatorStyle.Slash"},description:"Determines the visual style of the separator between the breadcrumb items.\n\nAvailable options are:\n\n*   `Slash`\n*   `BackSlash`\n*   `DoubleBackSlash`\n*   `DoubleGreaterThan`\n*   `DoubleSlash`\n*   `GreaterThan`",name:"separatorStyle",required:!1,type:{name:"enum",value:[{value:'"Slash"'},{value:'"BackSlash"'},{value:'"DoubleBackSlash"'},{value:'"DoubleGreaterThan"'},{value:'"DoubleSlash"'},{value:'"GreaterThan"'},{value:'"Slash"'},{value:'"BackSlash"'},{value:'"DoubleBackSlash"'},{value:'"DoubleGreaterThan"'},{value:'"DoubleSlash"'},{value:'"GreaterThan"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const S=W("ui5-breadcrumbs-item",["accessibleName","href","target"],[],[],[],()=>P(()=>Promise.resolve().then(()=>oe),void 0,import.meta.url));S.displayName="BreadcrumbsItem";try{S.displayName="BreadcrumbsItem",S.__docgenInfo={description:"The `BreadcrumbsItem` component defines the content of an item in `Breadcrumbs`",displayName:"BreadcrumbsItem",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the item.",name:"accessibleName",required:!1,type:{name:"string"}},href:{defaultValue:null,description:`Defines the link href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Defines the link target.\n\nAvailable options are:\n\n*   `_self`\n*   `_top`\n*   `_blank`\n*   `_parent`\n*   `_search`\n\n\n\n**Note: **This property must only be used when the `href` property is set.****",name:"target",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{w as B,v as a,I as b,S as c};
//# sourceMappingURL=index-75b75a55.js.map
