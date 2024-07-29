import{_ as P}from"./iframe-ocS5gnjC.js";import{a as h,m as C,I as A,h as m,j as l,f as g,s as R,k as z,p as W,w as E}from"./withWebComponent-Bw_l6Ewh.js";import{d as O}from"./slot-_4yKMUwC.js";import{s as F}from"./event-Dq0fpeHi.js";import{f as k,r as I}from"./ItemNavigation-J0QfqElW.js";import{k as U,a as N}from"./Keys-F_3Gvx0K.js";import{f as M}from"./i18nBundle-CyjtwURt.js";import{f as S}from"./ResizeHandler-CV6FH9MC.js";import{aO as j,aP as H,aQ as G,aR as K}from"./i18n-defaults-BuF9xM0k.js";import{L as $,a as Y}from"./Link-DaxkRKad.js";import Q from"./ResponsivePopover-BPe6UEFQ.js";import{f as J,g as X}from"./List-B4HlHID8.js";import{c as w,I as Z}from"./Icon-Bjam5y2n.js";import{b as ee}from"./Button-Bn9nox5u.js";import"./useIsomorphicLayoutEffect-DCJrFAVs.js";import"./slim-arrow-down-BXJfL7eA.js";import{l as i}from"./if-defined-mCyQq_6q.js";import{s as x}from"./parameters-bundle.css-BFbT_feV.js";var y;(function(s){s.Standard="Standard",s.NoCurrentPage="NoCurrentPage"})(y||(y={}));const te=y;var _=function(s,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,o,t);else for(var d=s.length-1;d>=0;d--)(a=s[d])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let c=class extends A{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}get _linkDesign(){return this._isCurrentPageItem?$.Emphasized:$.Default}};_([h()],c.prototype,"href",void 0);_([h()],c.prototype,"target",void 0);_([h()],c.prototype,"accessibleName",void 0);_([O({type:Node,default:!0})],c.prototype,"text",void 0);c=_([C("ui5-breadcrumbs-item")],c);c.define();const V=c,oe=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));function ne(s,e,o){return o?m`<nav class="ui5-breadcrumbs-root" aria-label="${i(this._accessibleNameText)}"><ol @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${this._isOverflowEmpty}"><${l("ui5-link",e,o)} @ui5-click="${i(this._openRespPopover)}" accessible-role="button" accessible-name="${i(this._dropdownArrowAccessibleNameText)}" .accessibilityAttributes="${i(this.linkAccessibilityAttributes)}" wrapping-type="None"><${l("ui5-icon",e,o)} name="slim-arrow-down" title="${i(this._dropdownArrowAccessibleNameText)}"></${l("ui5-icon",e,o)}></${l("ui5-link",e,o)}></li>${w(this._linksData,(t,n)=>t._id||n,(t,n)=>D.call(this,s,e,o,t,n))}</ol></nav><${l("ui5-responsive-popover",e,o)} class="ui5-breadcrumbs-popover" hide-arrow content-only-on-desktop placement="Bottom" horizontal-align="Start" _hide-header @keydown="${this._onkeydown}"><${l("ui5-list",e,o)} selection-mode="Single" separators="None" @ui5-selection-change="${i(this._onOverflowListItemSelect)}">${w(this._overflowItemsData,(t,n)=>t._id||n,(t,n)=>T.call(this,s,e,o,t,n))}</${l("ui5-list",e,o)}><div slot="footer" class="ui5-breadcrumbs-popover-footer"><${l("ui5-button",e,o)} design="Transparent" @click="${this._closeRespPopover}">${i(this._cancelButtonText)}</${l("ui5-button",e,o)}></div></${l("ui5-responsive-popover",e,o)}>`:m`<nav class="ui5-breadcrumbs-root" aria-label="${i(this._accessibleNameText)}"><ol @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${this._isOverflowEmpty}"><ui5-link @ui5-click="${i(this._openRespPopover)}" accessible-role="button" accessible-name="${i(this._dropdownArrowAccessibleNameText)}" .accessibilityAttributes="${i(this.linkAccessibilityAttributes)}" wrapping-type="None"><ui5-icon name="slim-arrow-down" title="${i(this._dropdownArrowAccessibleNameText)}"></ui5-icon></ui5-link></li>${w(this._linksData,(t,n)=>t._id||n,(t,n)=>D.call(this,s,e,o,t,n))}</ol></nav><ui5-responsive-popover class="ui5-breadcrumbs-popover" hide-arrow content-only-on-desktop placement="Bottom" horizontal-align="Start" _hide-header @keydown="${this._onkeydown}"><ui5-list selection-mode="Single" separators="None" @ui5-selection-change="${i(this._onOverflowListItemSelect)}">${w(this._overflowItemsData,(t,n)=>t._id||n,(t,n)=>T.call(this,s,e,o,t,n))}</ui5-list><div slot="footer" class="ui5-breadcrumbs-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">${i(this._cancelButtonText)}</ui5-button></div></ui5-responsive-popover>`}function D(s,e,o,t,n){return o?m`<li class="ui5-breadcrumbs-link-wrapper" id="${i(t._id)}-link-wrapper"><${l("ui5-link",e,o)} @ui5-click="${i(this._onLinkPress)}" href="${i(t.href)}" target="${i(t.target)}" id="${i(t._id)}-link" design="${i(t._linkDesign)}" accessible-name="${i(t._accessibleNameText)}" data-ui5-stable="${i(t.stableDomRef)}" wrapping-type="None">${i(t.innerText)}</${l("ui5-link",e,o)}>${t._isCurrentPageItem?void 0:B.call(this,s,e,o,t,n)}</li>`:m`<li class="ui5-breadcrumbs-link-wrapper" id="${i(t._id)}-link-wrapper"><ui5-link @ui5-click="${i(this._onLinkPress)}" href="${i(t.href)}" target="${i(t.target)}" id="${i(t._id)}-link" design="${i(t._linkDesign)}" accessible-name="${i(t._accessibleNameText)}" data-ui5-stable="${i(t.stableDomRef)}" wrapping-type="None">${i(t.innerText)}</ui5-link>${t._isCurrentPageItem?void 0:B.call(this,s,e,o,t,n)}</li>`}function B(s,e,o,t,n){return m`<span class="ui5-breadcrumbs-separator" aria-hidden="true"></span>`}function T(s,e,o,t,n){return o?m`<${l("ui5-li",e,o)} id="${i(t._id)}-li" accessible-name="${i(t.accessibleName)}" data-ui5-stable="${i(t.stableDomRef)}">${i(t.textContent)}</${l("ui5-li",e,o)}>`:m`<ui5-li id="${i(t._id)}-li" accessible-name="${i(t.accessibleName)}" data-ui5-stable="${i(t.stableDomRef)}">${i(t.textContent)}</ui5-li>`}g("@ui5/webcomponents-theming","sap_horizon",async()=>R);g("@ui5/webcomponents","sap_horizon",async()=>x);const ie={packageName:"@ui5/webcomponents",fileName:"themes/Breadcrumbs.css.ts",content:`:host(:not([hidden])){display:block;width:100%}.ui5-breadcrumbs-root{white-space:nowrap;outline:none;margin:var(--_ui5-v2-0-1_breadcrumbs_margin)}.ui5-breadcrumbs-root>ol{margin:0;padding:0;list-style-type:none;display:-webkit-box;display:-webkit-flex;display:flex}.ui5-breadcrumbs-root>ol>li{display:inline}.ui5-breadcrumbs-dropdown-arrow-link-wrapper[hidden]{display:none}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-icon]{width:var(--sapFontSize);height:var(--sapFontSize);padding-left:.675rem;vertical-align:text-top;color:var(--sapLinkColor)}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link][focused] [ui5-icon]{color:var(--_ui5-v2-0-1_link_focus_color)}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-icon]:before{content:"...";vertical-align:middle;position:absolute;left:0;bottom:0}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link][focused] [ui5-icon]:after,.ui5-breadcrumbs-dropdown-arrow-link-wrapper:hover [ui5-icon]:after{content:"";position:absolute;border-bottom:.0625rem solid;inset:0 0 1px}.ui5-breadcrumbs-popover-footer{display:flex;justify-content:flex-end;width:100%}.ui5-breadcrumbs-separator:after{content:"/";padding:0 .25rem;cursor:auto;color:var(--sapContent_LabelColor);display:inline-block;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize)}:host([separators="DoubleSlash"]) .ui5-breadcrumbs-separator:after{content:"//"}:host([separators="BackSlash"]) .ui5-breadcrumbs-separator:after{content:"\\\\"}:host([separators="DoubleBackSlash"]) .ui5-breadcrumbs-separator:after{content:"\\\\\\\\"}:host([separators="GreaterThan"]) .ui5-breadcrumbs-separator:after{content:">"}:host([separators="DoubleGreaterThan"]) .ui5-breadcrumbs-separator:after{content:">>"}
`};g("@ui5/webcomponents-theming","sap_horizon",async()=>R);g("@ui5/webcomponents","sap_horizon",async()=>x);const re={packageName:"@ui5/webcomponents",fileName:"themes/BreadcrumbsPopover.css.ts",content:`.ui5-breadcrumbs-popover::part(content){padding:0}.ui5-breadcrumbs-popover-footer{display:flex;justify-content:flex-end;width:100%;padding-right:.5rem;align-items:center}
`};var v=function(s,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,o,t);else for(var d=s.length-1;d>=0;d--)(a=s[d])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},u;let p=u=class extends A{constructor(){super(),this.design="Standard",this.separators="Slash",this._overflowSize=0,this._breadcrumbItemWidths=new WeakMap,this._dropdownArrowLinkWidth=0,this._itemNavigation=new k(this,{navigationMode:I.Horizontal,getItemsCallback:()=>this._getFocusableItems()}),this._onResizeHandler=this._updateOverflow.bind(this)}onInvalidation(e){if(e.reason==="childchange"){const o=this._getItems().indexOf(e.child);o<this._overflowSize&&(this._overflowSize=o)}}_getItems(){return this.getSlottedNodes("items")}onBeforeRendering(){this._preprocessItems()}async onAfterRendering(){await W(),this._cacheWidths(),this._updateOverflow()}onEnterDOM(){S.register(this,this._onResizeHandler)}onExitDOM(){S.deregister(this,this._onResizeHandler)}_initItemNavigation(){this._itemNavigation||(this._itemNavigation=new k(this,{navigationMode:I.Horizontal,getItemsCallback:()=>this._getFocusableItems()}))}_getFocusableItems(){const e=this._links;return this._isOverflowEmpty||e.unshift(this._dropdownArrowLink),e}_onfocusin(e){const o=e.target;this._itemNavigation.setCurrentItem(o)}_onkeydown(e){const o=this._isDropdownArrowFocused;if(U(e)&&o&&!this._isOverflowEmpty){e.preventDefault(),this._toggleRespPopover();return}N(e)&&o&&!this._isOverflowEmpty&&!this._isPickerOpen&&e.preventDefault()}_onkeyup(e){this._isDropdownArrowFocused&&N(e)&&!this._isOverflowEmpty&&!this._isPickerOpen&&this._openRespPopover()}_cacheWidths(){const e=this._breadcrumbItemWidths,o=this._getItems();for(let t=this._overflowSize;t<o.length;t++){const n=o[t],r=this.shadowRoot.querySelector(`#${n._id}-link-wrapper`);e.set(n,this._getElementWidth(r))}if(!this._isOverflowEmpty){const t=this.shadowRoot.querySelector(".ui5-breadcrumbs-dropdown-arrow-link-wrapper");this._dropdownArrowLinkWidth=this._getElementWidth(t)}}_updateOverflow(){const e=this._getItems(),o=this.shadowRoot.querySelector(".ui5-breadcrumbs-root").offsetWidth;let t=this._getTotalContentWidth(),n=0;for(t>o&&(t+=this._dropdownArrowLinkWidth);t>=o&&n<this._maxAllowedOverflowSize;){const a=e[n];let d=0;this._isItemVisible(a)&&(d=this._breadcrumbItemWidths.get(a)||0),t-=d,n++}this._overflowSize=n,this._isOverflowEmpty&&this._isPickerOpen&&(this.responsivePopover.open=!1);const r=this._getFocusableItems();r.some(a=>a.forcedTabIndex==="0")||this._itemNavigation.setCurrentItem(r[0])}_getElementWidth(e){return e?Math.ceil(e.getBoundingClientRect().width):0}_getTotalContentWidth(){const e=this._getItems(),o=this._breadcrumbItemWidths;return e.reduce((n,r)=>n+o.get(r),0)}_onLinkPress(e){const o=e.target,t=this._getItems(),n=t.find(L=>`${L._id}-link`===o.id),{altKey:r,ctrlKey:a,metaKey:d,shiftKey:q}=e.detail;if(!this.fireEvent("item-click",{item:n,altKey:r,ctrlKey:a,metaKey:d,shiftKey:q},!0)){e.preventDefault();return}n._isCurrentPageItem&&window.location.reload()}_onOverflowListItemSelect(e){const o=e.detail.selectedItems[0],t=this._getItems(),n=t.find(r=>`${r._id}-li`===o.id);this.fireEvent("item-click",{item:n},!0)&&(window.open(n.href,n.target||"_self","noopener,noreferrer"),this.responsivePopover.open=!1)}_respPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}_toggleRespPopover(){this.responsivePopover=this._respPopover(),this._isPickerOpen?this._closeRespPopover():this._openRespPopover()}_closeRespPopover(){this.responsivePopover&&(this.responsivePopover.open=!1)}_openRespPopover(){this.responsivePopover=this._respPopover(),this.responsivePopover.opener=this._dropdownArrowLink,this.responsivePopover.open=!0}_isItemVisible(e){return!e.hidden&&this._hasVisibleContent(e)}_hasVisibleContent(e){return e.innerText||Array.from(e.children).some(o=>!o.hidden)}_preprocessItems(){this.items.forEach(e=>{e._getRealDomRef=()=>this.getDomRef().querySelector(`[data-ui5-stable*=${e.stableDomRef}]`)})}_getItemPositionText(e,o){return u.i18nBundle.getText(j,e,o)}_getItemAccessibleName(e,o,t){const n=this._getItemPositionText(o,t),r=e.textContent||"";let a="";return e.accessibleName?a=`${r.trim()} ${e.accessibleName} ${n}`:a=`${r.trim()} ${n}`,a}get _visibleItems(){return this._getItems().slice(this._overflowSize).filter(e=>this._isItemVisible(e))}get _endsWithCurrentPageItem(){return this.design===te.Standard}get _isDropdownArrowFocused(){return this._dropdownArrowLink.forcedTabIndex==="0"}get _maxAllowedOverflowSize(){return this._getItems().filter(o=>this._isItemVisible(o)).length-1}get _dropdownArrowLink(){return this.shadowRoot.querySelector(".ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link]")}get _overflowItemsData(){return this._getItems().slice(0,this._overflowSize).filter(e=>this._isItemVisible(e)).reverse()}get _linksData(){const e=this._visibleItems,o=e.length;return e.map((t,n)=>(t._accessibleNameText=this._getItemAccessibleName(t,n+1,o),t._isCurrentPageItem=n===o-1&&this._endsWithCurrentPageItem,t))}get _links(){return Array.from(this.shadowRoot.querySelectorAll(".ui5-breadcrumbs-link-wrapper [ui5-link]"))}get _isOverflowEmpty(){return this._overflowItemsData.length===0}get linkAccessibilityAttributes(){return{hasPopup:this._isOverflowEmpty?void 0:"listbox"}}get _isPickerOpen(){return!!this.responsivePopover&&this.responsivePopover.open}get _accessibleNameText(){return u.i18nBundle.getText(H)}get _dropdownArrowAccessibleNameText(){return u.i18nBundle.getText(G)}get _cancelButtonText(){return u.i18nBundle.getText(K)}static async onDefine(){u.i18nBundle=await M("@ui5/webcomponents")}};v([h()],p.prototype,"design",void 0);v([h()],p.prototype,"separators",void 0);v([h({type:Number,noAttribute:!0})],p.prototype,"_overflowSize",void 0);v([O({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],p.prototype,"items",void 0);p=u=v([C({tag:"ui5-breadcrumbs",languageAware:!0,renderer:z,template:ne,styles:[ie,re],dependencies:[V,Y,Q,J,X,Z,ee]}),F("item-click",{detail:{item:{type:HTMLElement},altKey:{type:Boolean},ctrlKey:{type:Boolean},metaKey:{type:Boolean},shiftKey:{type:Boolean}}})],p);p.define();const se=p,ae=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"})),f=E("ui5-breadcrumbs",["design","separators"],[],[],["item-click"],()=>P(()=>Promise.resolve().then(()=>ae),void 0,import.meta.url));f.displayName="Breadcrumbs";try{f.displayName="Breadcrumbs",f.__docgenInfo={description:`Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path.
It helps the user to be aware of their location within the application and allows faster navigation.

The last three steps can be accessed as links directly, while the remaining links prior to them are available
in a drop-down menu.

You can choose the type of separator to be used from a number of predefined options.

### Keyboard Handling
The \`Breadcrumbs\` provides advanced keyboard handling.

- [F4], [Alt] + [Up], [Alt] + [Down], [Space], or [Enter] - If the dropdown arrow is focused - opens/closes the drop-down.
- [Space],[Enter] - Activates the focused item and triggers the \`item-click\` event.
- [Escape] - Closes the drop-down.
- [Left] - If the drop-down is closed - navigates one item to the left.
- [Right] - If the drop-down is closed - navigates one item to the right.
- [Up] - If the drop-down is open - moves focus to the next item.
- [Down] - If the drop-down is open - moves focus to the previous item.
- [Home] - Navigates to the first item.
- [End] - Navigates to the last item.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Breadcrumbs",props:{children:{defaultValue:null,description:"Defines the component items.\n\n**Note:** Use the `BreadcrumbsItem` component to define the desired items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fires when a `BreadcrumbsItem` is clicked.\n\n**Note:** You can prevent browser location change by calling `event.preventDefault()`.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<BreadcrumbsDomRef, BreadcrumbsItemClickEventDetail>) => void"}},design:{defaultValue:{value:'"Standard"'},description:`Defines the visual appearance of the last BreadcrumbsItem.

The Breadcrumbs supports two visual appearances for the last BreadcrumbsItem:
- "Standard" - displaying the last item as "current page" (bold and without separator)
- "NoCurrentPage" - displaying the last item as a regular BreadcrumbsItem, followed by separator`,name:"design",required:!1,type:{name:"enum",value:[{value:'"Standard"'},{value:'"NoCurrentPage"'},{value:'"Standard"'},{value:'"NoCurrentPage"'}]}},separators:{defaultValue:{value:'"Slash"'},description:"Determines the visual style of the separator between the breadcrumb items.",name:"separators",required:!1,type:{name:"enum",value:[{value:'"Slash"'},{value:'"BackSlash"'},{value:'"DoubleBackSlash"'},{value:'"DoubleGreaterThan"'},{value:'"DoubleSlash"'},{value:'"GreaterThan"'},{value:'"Slash"'},{value:'"BackSlash"'},{value:'"DoubleBackSlash"'},{value:'"DoubleGreaterThan"'},{value:'"DoubleSlash"'},{value:'"GreaterThan"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="Breadcrumbs",f.__docgenInfo={description:`Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path.
It helps the user to be aware of their location within the application and allows faster navigation.

The last three steps can be accessed as links directly, while the remaining links prior to them are available
in a drop-down menu.

You can choose the type of separator to be used from a number of predefined options.

### Keyboard Handling
The \`Breadcrumbs\` provides advanced keyboard handling.

- [F4], [Alt] + [Up], [Alt] + [Down], [Space], or [Enter] - If the dropdown arrow is focused - opens/closes the drop-down.
- [Space],[Enter] - Activates the focused item and triggers the \`item-click\` event.
- [Escape] - Closes the drop-down.
- [Left] - If the drop-down is closed - navigates one item to the left.
- [Right] - If the drop-down is closed - navigates one item to the right.
- [Up] - If the drop-down is open - moves focus to the next item.
- [Down] - If the drop-down is open - moves focus to the previous item.
- [Home] - Navigates to the first item.
- [End] - Navigates to the last item.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Breadcrumbs",props:{children:{defaultValue:null,description:"Defines the component items.\n\n**Note:** Use the `BreadcrumbsItem` component to define the desired items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fires when a `BreadcrumbsItem` is clicked.\n\n**Note:** You can prevent browser location change by calling `event.preventDefault()`.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<BreadcrumbsDomRef, BreadcrumbsItemClickEventDetail>) => void"}},design:{defaultValue:{value:'"Standard"'},description:`Defines the visual appearance of the last BreadcrumbsItem.

The Breadcrumbs supports two visual appearances for the last BreadcrumbsItem:
- "Standard" - displaying the last item as "current page" (bold and without separator)
- "NoCurrentPage" - displaying the last item as a regular BreadcrumbsItem, followed by separator`,name:"design",required:!1,type:{name:"enum",value:[{value:'"Standard"'},{value:'"NoCurrentPage"'},{value:'"Standard"'},{value:'"NoCurrentPage"'}]}},separators:{defaultValue:{value:'"Slash"'},description:"Determines the visual style of the separator between the breadcrumb items.",name:"separators",required:!1,type:{name:"enum",value:[{value:'"Slash"'},{value:'"BackSlash"'},{value:'"DoubleBackSlash"'},{value:'"DoubleGreaterThan"'},{value:'"DoubleSlash"'},{value:'"GreaterThan"'},{value:'"Slash"'},{value:'"BackSlash"'},{value:'"DoubleBackSlash"'},{value:'"DoubleGreaterThan"'},{value:'"DoubleSlash"'},{value:'"GreaterThan"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const b=E("ui5-breadcrumbs-item",["accessibleName","href","target"],[],[],[],()=>P(()=>Promise.resolve().then(()=>oe),void 0,import.meta.url));b.displayName="BreadcrumbsItem";try{b.displayName="BreadcrumbsItem",b.__docgenInfo={description:"The `BreadcrumbsItem` component defines the content of an item in `Breadcrumbs`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"BreadcrumbsItem",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the item.",name:"accessibleName",required:!1,type:{name:"string"}},href:{defaultValue:{value:"undefined"},description:`Defines the link href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:{value:"undefined"},description:"Defines the link target.\n\nAvailable options are:\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**Note:** This property must only be used when the `href` property is set.",name:"target",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{b.displayName="BreadcrumbsItem",b.__docgenInfo={description:"The `BreadcrumbsItem` component defines the content of an item in `Breadcrumbs`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"BreadcrumbsItem",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the item.",name:"accessibleName",required:!1,type:{name:"string"}},href:{defaultValue:{value:"undefined"},description:`Defines the link href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:{value:"undefined"},description:"Defines the link target.\n\nAvailable options are:\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**Note:** This property must only be used when the `href` property is set.",name:"target",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{b as B,f as a,te as b};
