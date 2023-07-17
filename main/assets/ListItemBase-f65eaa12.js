import{r as y,U as $,l as P,p as z,o as N}from"./UI5Element-11982a12.js";import{b as h,l as n,d as E,s as k,a as A,p as l,c as R,f as D}from"./withWebComponent-03662f7f.js";import{R as F}from"./ResizeHandler-9ebe913c.js";import{I as O,N as q}from"./ItemNavigation-a882fb90.js";import{e as c}from"./Icon-3498e12d.js";import{s as M}from"./slot-76e48863.js";import{m as w,k as L,l as V,n as C}from"./Icons-234bf59e.js";import{I as H}from"./Integer-f7f172c9.js";import{g as j}from"./AriaLabelHelper-43a261ec.js";import{i as G,g as B,a as W}from"./TabbableElements-8e49b367.js";import{g as U}from"./decline-c1cc2557.js";import{d as K}from"./debounce-9c2fb7dd.js";import{a as X}from"./BusyIndicator-0bd7794e.js";import{o as Z}from"./class-map-341004db.js";import{s as T}from"./style-map-9183c00a.js";import{s as J}from"./BrowserScrollbar.css-bcc05298.js";import{ay as Q,az as Y,aA as ee,aB as te}from"./i18n-defaults-1a83921e.js";var I;(function(i){i.Button="Button",i.Scroll="Scroll",i.None="None"})(I||(I={}));const v=I;var x;(function(i){i.None="None",i.SingleSelect="SingleSelect",i.SingleSelectBegin="SingleSelectBegin",i.SingleSelectEnd="SingleSelectEnd",i.SingleSelectAuto="SingleSelectAuto",i.MultiSelect="MultiSelect",i.Delete="Delete"})(x||(x={}));const u=x;var S;(function(i){i.All="All",i.Inner="Inner",i.None="None"})(S||(S={}));const _=S;function ie(i,e,t){return h`<div class="${Z(this.classes.root)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @ui5-_press=${n(this.onItemPress)} @ui5-close=${n(this.onItemClose)} @ui5-toggle=${n(this.onItemToggle)} @ui5-_focused=${n(this.onItemFocused)} @ui5-_forward-after=${n(this.onForwardAfter)} @ui5-_forward-before=${n(this.onForwardBefore)} @ui5-_selection-requested=${n(this.onSelectionRequested)} @ui5-_focus-requested=${n(this.onFocusRequested)}><div class="ui5-list-scroll-container">${this.header.length?oe.call(this,i,e,t):void 0}${this.shouldRenderH1?ne.call(this,i,e,t):void 0}${this.hasData?se.call(this,i,e,t):void 0}<span id="${n(this._id)}-modeLabel" class="ui5-hidden-text">${n(this.ariaLabelModeText)}</span><ul id="${n(this._id)}-listUl" class="ui5-list-ul" role="${n(this.accessibleRole)}" aria-label="${n(this.ariaLabelTxt)}" aria-labelledby="${n(this.ariaLabelledBy)}" aria-roledescription="${n(this.accessibleRoleDescription)}"><slot></slot>${this.showNoDataText?re.call(this,i,e,t):void 0}</ul>${this.growsWithButton?ae.call(this,i,e,t):void 0}${this.footerText?le.call(this,i,e,t):void 0}${this.hasData?de.call(this,i,e,t):void 0}<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div>${this.busy?ue.call(this,i,e,t):void 0}</div> `}function oe(i,e,t){return h`<slot name="header" />`}function ne(i,e,t){return h`<header id="${n(this.headerID)}" class="ui5-list-header">${n(this.headerText)}</header>`}function se(i,e,t){return h`<div id="${n(this._id)}-before" tabindex="0" role="none" class="ui5-list-focusarea"></div>`}function re(i,e,t){return h`<li id="${n(this._id)}-nodata" class="ui5-list-nodata"><div id="${n(this._id)}-nodata-text" class="ui5-list-nodata-text">${n(this.noDataText)}</div></li>`}function ae(i,e,t){return h`<div growing-button><div tabindex="0" role="button" id="${n(this._id)}-growing-btn" aria-labelledby="${n(this._id)}-growingButton-text" ?active="${this._loadMoreActive}" @click="${this._onLoadMoreClick}" @keydown="${this._onLoadMoreKeydown}" @keyup="${this._onLoadMoreKeyup}" @mousedown="${this._onLoadMoreMousedown}" @mouseup="${this._onLoadMoreMouseup}" growing-button-inner><span id="${n(this._id)}-growingButton-text" growing-button-text>${n(this._growingButtonText)}</span></div></div>`}function le(i,e,t){return h`<footer id="${n(this._id)}-footer" class="ui5-list-footer">${n(this.footerText)}</footer>`}function de(i,e,t){return h`<div id="${n(this._id)}-after" tabindex="0" role="none" class="ui5-list-focusarea"></div>`}function ue(i,e,t){return t?h`<div class="ui5-list-busy-row"><${E("ui5-busy-indicator",e,t)} delay="${n(this.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${T(this.styles.busyInd)}" data-sap-focus-ref></${E("ui5-busy-indicator",e,t)}></div>`:h`<div class="ui5-list-busy-row"><ui5-busy-indicator delay="${n(this.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${T(this.styles.busyInd)}" data-sap-focus-ref></ui5-busy-indicator></div>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>k);y("@ui5/webcomponents","sap_fiori_3",async()=>A);const ce={packageName:"@ui5/webcomponents",fileName:"themes/List.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
[growing-button] {
	display: flex;
	align-items: center;
	padding: var(--_ui5_load_more_padding);
	border-top: 1px solid var(--sapList_BorderColor);
	border-bottom: var(--_ui5_load_more_border-bottom);
	box-sizing: border-box;
	cursor: pointer;
	outline: none;
}
[growing-button-inner] {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: var(--_ui5_load_more_text_height);
	width: 100%;
	color: var(--sapButton_TextColor);
	background-color: var(--sapList_Background);
	border: var(--_ui5_load_more_border);
	border-radius: var(--_ui5_load_more_border_radius);
	box-sizing: border-box;
}
[growing-button-inner]:focus {
	outline: var(--_ui5_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	outline-offset: -0.125rem;
	border-color: transparent;
}
[growing-button-inner]:hover {
	background-color: var(--sapList_Hover_Background);
}
[growing-button-inner]:active,
[growing-button-inner][active] {
	background-color: var(--sapList_Active_Background);
	border-color: var(--sapList_Active_Background);
}
[growing-button-inner]:active > *,
[growing-button-inner][active] > * {
	color: var(--sapList_Active_TextColor);
}
[growing-button-text],
[growing-button-subtext] {
	width: 100%;
	text-align: center;
	font-family: "72override", var(--sapFontFamily);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	box-sizing: border-box;
}
[growing-button-text] {
	height: var(--_ui5_load_more_text_height);
	padding: 0.875rem 1rem 0 1rem;
	font-size: var(--_ui5_load_more_text_font_size);
	font-weight: bold;
}
[growing-button-subtext] {
	font-size: var(--sapFontSize);
	padding: var(--_ui5_load_more_desc_padding);
}
:host(:not([hidden])) {
	display: block;
	max-width: 100%;
	width: 100%;
	-webkit-tap-highlight-color: transparent;
}
:host([indent]) .ui5-list-root {
	padding: 2rem;
}
:host([separators="None"]) .ui5-list-nodata {
	border-bottom: 0;
}
:host([busy]) {
	opacity: 0.72;
}
:host([busy]) .ui5-list-busy-row {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	outline: none;
}
:host([busy]) .ui5-list-busy-ind {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
}
.ui5-list-root {
	width: 100%;
	height: 100%;
	position: relative;
	box-sizing: border-box;
}
.ui5-list-scroll-container {
	overflow: auto;
	height: 100%;
}
.ui5-list-ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}
.ui5-list-ul:focus {
	outline: none;
}
.ui5-list-focusarea {
	position: fixed; /* keep it in the visible viewport, so that IE does not scroll on focus */
}
.ui5-list-header {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	box-sizing: border-box;
	font-size: var(--sapFontHeader4Size); 
	font-family: "72override", var(--sapFontFamily);
	color: var(--sapGroup_TitleTextColor);
	height: 3rem;
	line-height: 3rem;
	padding: 0 1rem;
	background-color: var(--sapGroup_TitleBackground);
	border-bottom: 1px solid var(--sapGroup_TitleBorderColor);
}
.ui5-list-footer {
	height: 2rem;
	box-sizing: border-box;
	-webkit-text-size-adjust: none;	/* To improve readability Mobile Safari automatically increases the size of small text so let's disable this */
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	line-height: 2rem;
	background-color: var(--sapList_FooterBackground);
	color: var(--ui5_list_footer_text_color);
	padding: 0 1rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.ui5-list-nodata {
	list-style-type: none;
	display: -webkit-box;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	color: var(--sapTextColor);
	background-color: var(--sapList_Background);
	border-bottom: 1px solid var(--sapList_BorderColor);
	padding: 0 1rem !important;
	height: var(--_ui5_list_no_data_height);
	font-size: var(--_ui5_list_no_data_font_size);
	font-family: "72override", var(--sapFontFamily);
}
.ui5-list-nodata-text {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}`};var d=globalThis&&globalThis.__decorate||function(i,e,t,o){var a=arguments.length,s=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,o);else for(var m=i.length-1;m>=0;m--)(f=i[m])&&(s=(a<3?f(s):a>3?f(e,t,s):f(e,t))||s);return a>3&&s&&Object.defineProperty(e,t,s),s},p;const he=250,fe=10;let r=p=class extends ${static async onDefine(){p.i18nBundle=await P("@ui5/webcomponents")}constructor(){super(),this._previouslyFocusedItem=null,this._forwardingFocus=!1,this.resizeListenerAttached=!1,this.listEndObserved=!1,this._itemNavigation=new O(this,{skipItemsSize:fe,navigationMode:q.Vertical,getItemsCallback:()=>this.getEnabledItems()}),this._handleResize=this.checkListInViewport.bind(this),this._handleResize=this.checkListInViewport.bind(this),this.initialIntersection=!0}onExitDOM(){this.unobserveListEnd(),this.resizeListenerAttached=!1,F.deregister(this.getDomRef(),this._handleResize)}onBeforeRendering(){this.prepareListItems()}onAfterRendering(){this.growsOnScroll?this.observeListEnd():this.listEndObserved&&this.unobserveListEnd(),this.grows&&(this.checkListInViewport(),this.attachForResize())}attachForResize(){this.resizeListenerAttached||(this.resizeListenerAttached=!0,F.register(this.getDomRef(),this._handleResize))}get shouldRenderH1(){return!this.header.length&&this.headerText}get headerID(){return`${this._id}-header`}get modeLabelID(){return`${this._id}-modeLabel`}get listEndDOM(){return this.shadowRoot.querySelector(".ui5-list-end-marker")}get hasData(){return this.getItems().length!==0}get showNoDataText(){return!this.hasData&&this.noDataText}get isDelete(){return this.mode===u.Delete}get isSingleSelect(){return[u.SingleSelect,u.SingleSelectBegin,u.SingleSelectEnd,u.SingleSelectAuto].includes(this.mode)}get isMultiSelect(){return this.mode===u.MultiSelect}get ariaLabelledBy(){if(this.accessibleNameRef||this.accessibleName)return;const e=[];return(this.isMultiSelect||this.isSingleSelect||this.isDelete)&&e.push(this.modeLabelID),this.shouldRenderH1&&e.push(this.headerID),e.length?e.join(" "):void 0}get ariaLabelTxt(){return j(this)}get ariaLabelModeText(){return this.isMultiSelect?p.i18nBundle.getText(Q):this.isSingleSelect?p.i18nBundle.getText(Y):this.isDelete?p.i18nBundle.getText(ee):""}get grows(){return this.growing!==v.None}get growsOnScroll(){return this.growing===v.Scroll}get growsWithButton(){return this.growing===v.Button}get _growingButtonText(){return p.i18nBundle.getText(te)}get busyIndPosition(){return this.grows?this._inViewport?"absolute":"sticky":"absolute"}get styles(){return{busyInd:{position:this.busyIndPosition}}}get classes(){return{root:{"ui5-list-root":!0,"ui5-content-native-scrollbars":U()}}}prepareListItems(){const e=this.getItemsForProcessing();e.forEach((t,o)=>{const a=o===e.length-1,s=this.separators===_.All||this.separators===_.Inner&&!a;t.hasConfigurableMode&&(t._mode=this.mode),t.hasBorder=s})}async observeListEnd(){this.listEndObserved||(await z(),this.getIntersectionObserver().observe(this.listEndDOM),this.listEndObserved=!0)}unobserveListEnd(){this.growingIntersectionObserver&&(this.growingIntersectionObserver.disconnect(),this.growingIntersectionObserver=null,this.listEndObserved=!1)}onInteresection(e){if(this.initialIntersection){this.initialIntersection=!1;return}e.forEach(t=>{t.isIntersecting&&K(this.loadMore.bind(this),he)})}onSelectionRequested(e){const t=this.getSelectedItems();let o=!1;this._selectionRequested=!0,this.mode!==u.None&&this[`handle${this.mode}`]&&(o=this[`handle${this.mode}`](e.detail.item,!!e.detail.selected)),o&&!this.fireEvent("selection-change",{selectedItems:this.getSelectedItems(),previouslySelectedItems:t,selectionComponentPressed:e.detail.selectionComponentPressed,targetItem:e.detail.item,key:e.detail.key},!0)&&this._revertSelection(t)}handleSingleSelect(e){return e.selected?!1:(this.deselectSelectedItems(),e.selected=!0,!0)}handleSingleSelectBegin(e){return this.handleSingleSelect(e)}handleSingleSelectEnd(e){return this.handleSingleSelect(e)}handleSingleSelectAuto(e){return this.handleSingleSelect(e)}handleMultiSelect(e,t){return e.selected=t,!0}handleDelete(e){return this.fireEvent("item-delete",{item:e}),!0}deselectSelectedItems(){this.getSelectedItems().forEach(e=>{e.selected=!1})}getSelectedItems(){return this.getItems().filter(e=>e.selected)}getEnabledItems(){return this.getItems().filter(e=>!e.disabled)}getItems(){return this.getSlottedNodes("items")}getItemsForProcessing(){return this.getItems()}_revertSelection(e){this.getItems().forEach(t=>{const o=e.indexOf(t)!==-1,a=t.shadowRoot.querySelector(".ui5-li-multisel-cb"),s=t.shadowRoot.querySelector(".ui5-li-singlesel-radiobtn");t.selected=o,a?a.checked=o:s&&(s.checked=o)})}_onkeydown(e){w(e)&&this._handleTabNext(e)}_onLoadMoreKeydown(e){L(e)&&(e.preventDefault(),this._loadMoreActive=!0),V(e)&&(this._onLoadMoreClick(),this._loadMoreActive=!0),w(e)&&this.focusAfterElement(),C(e)&&(this.getPreviouslyFocusedItem()?this.focusPreviouslyFocusedItem():this.focusFirstItem(),e.preventDefault())}_onLoadMoreKeyup(e){L(e)&&this._onLoadMoreClick(),this._loadMoreActive=!1}_onLoadMoreMousedown(){this._loadMoreActive=!0}_onLoadMoreMouseup(){this._loadMoreActive=!1}_onLoadMoreClick(){this.loadMore()}checkListInViewport(){this._inViewport=G(this.getDomRef())}loadMore(){this.fireEvent("load-more")}_handleTabNext(e){B(e.target)}_onfocusin(e){const t=B(e.target);if(!this.isForwardElement(t)){e.stopImmediatePropagation();return}if(!this.getPreviouslyFocusedItem()){this.growsWithButton&&this.isForwardAfterElement(t)?this.focusGrowingButton():this.focusFirstItem(),e.stopImmediatePropagation();return}if(!this.getForwardingFocus()){if(this.growsWithButton&&this.isForwardAfterElement(t)){this.focusGrowingButton(),e.stopImmediatePropagation();return}this.focusPreviouslyFocusedItem(),e.stopImmediatePropagation()}this.setForwardingFocus(!1)}isForwardElement(e){const t=e.id,o=this.getBeforeElement();return this._id===t||o&&o.id===t?!0:this.isForwardAfterElement(e)}isForwardAfterElement(e){const t=e.id,o=this.getAfterElement();return o&&o.id===t}onItemFocused(e){const t=e.target;if(e.stopPropagation(),this._itemNavigation.setCurrentItem(t),this.fireEvent("item-focused",{item:t}),this.mode===u.SingleSelectAuto){const o={item:t,selectionComponentPressed:!1,selected:!0,key:e.detail.key};this.onSelectionRequested({detail:o})}}onItemPress(e){const t=e.detail.item;if(this.fireEvent("item-click",{item:t},!0)){if(!this._selectionRequested&&this.mode!==u.Delete){this._selectionRequested=!0;const o={item:t,selectionComponentPressed:!1,selected:!t.selected,key:e.detail.key};this.onSelectionRequested({detail:o})}this._selectionRequested=!1}}onItemClose(e){this.fireEvent("item-close",{item:e.detail.item})}onItemToggle(e){this.fireEvent("item-toggle",{item:e.detail.item})}onForwardBefore(e){this.setPreviouslyFocusedItem(e.target),this.focusBeforeElement(),e.stopPropagation()}onForwardAfter(e){this.setPreviouslyFocusedItem(e.target),this.growsWithButton?(this.focusGrowingButton(),e.preventDefault()):this.focusAfterElement(),e.stopPropagation()}focusBeforeElement(){this.setForwardingFocus(!0),this.getBeforeElement().focus()}focusAfterElement(){this.setForwardingFocus(!0),this.getAfterElement().focus()}focusGrowingButton(){const e=this.getGrowingButton();e&&e.focus()}getGrowingButton(){return this.shadowRoot.querySelector(`#${this._id}-growing-btn`)}focusFirstItem(){const e=this.getFirstItem(t=>!t.disabled);e&&e.focus()}focusPreviouslyFocusedItem(){const e=this.getPreviouslyFocusedItem();e&&e.focus()}focusFirstSelectedItem(){const e=this.getFirstItem(t=>t.selected&&!t.disabled);e&&e.focus()}focusItem(e){this._itemNavigation.setCurrentItem(e),e.focus()}onFocusRequested(e){setTimeout(()=>{this.setPreviouslyFocusedItem(e.target),this.focusPreviouslyFocusedItem()},0)}setForwardingFocus(e){this._forwardingFocus=e}getForwardingFocus(){return this._forwardingFocus}setPreviouslyFocusedItem(e){this._previouslyFocusedItem=e}getPreviouslyFocusedItem(){return this._previouslyFocusedItem}getFirstItem(e){const t=this.getItems();let o=null;if(!e)return t.length?t[0]:null;for(let a=0;a<t.length;a++)if(e(t[a])){o=t[a];break}return o}getAfterElement(){return this._afterElement||(this._afterElement=this.shadowRoot.querySelector(`#${this._id}-after`)),this._afterElement}getBeforeElement(){return this._beforeElement||(this._beforeElement=this.shadowRoot.querySelector(`#${this._id}-before`)),this._beforeElement}getIntersectionObserver(){return this.growingIntersectionObserver||(this.growingIntersectionObserver=new IntersectionObserver(this.onInteresection.bind(this),{root:null,rootMargin:"0px",threshold:1})),this.growingIntersectionObserver}};d([l()],r.prototype,"headerText",void 0);d([l()],r.prototype,"footerText",void 0);d([l({type:Boolean})],r.prototype,"indent",void 0);d([l({type:u,defaultValue:u.None})],r.prototype,"mode",void 0);d([l()],r.prototype,"noDataText",void 0);d([l({type:_,defaultValue:_.All})],r.prototype,"separators",void 0);d([l({type:v,defaultValue:v.None})],r.prototype,"growing",void 0);d([l({type:Boolean})],r.prototype,"busy",void 0);d([l({validator:H,defaultValue:1e3})],r.prototype,"busyDelay",void 0);d([l()],r.prototype,"accessibleName",void 0);d([l({defaultValue:""})],r.prototype,"accessibleNameRef",void 0);d([l({defaultValue:"list"})],r.prototype,"accessibleRole",void 0);d([l({defaultValue:void 0,noAttribute:!0})],r.prototype,"accessibleRoleDescription",void 0);d([l({type:Boolean})],r.prototype,"_inViewport",void 0);d([l({type:Boolean})],r.prototype,"_loadMoreActive",void 0);d([M({type:HTMLElement,default:!0})],r.prototype,"items",void 0);d([M()],r.prototype,"header",void 0);r=p=d([R({tag:"ui5-list",fastNavigation:!0,renderer:D,template:ie,styles:[J,ce],dependencies:[X]}),c("item-click",{detail:{item:{type:HTMLElement}}}),c("item-close",{detail:{item:{type:HTMLElement}}}),c("item-toggle",{detail:{item:{type:HTMLElement}}}),c("item-delete",{detail:{item:{type:HTMLElement}}}),c("selection-change",{detail:{selectedItems:{type:Array},previouslySelectedItems:{type:Array},targetItem:{type:HTMLElement},selectionComponentPressed:{type:Boolean}}}),c("load-more"),c("item-focused",{detail:{item:{type:HTMLElement}}})],r);r.define();const ge=r,De=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"}));y("@ui5/webcomponents-theming","sap_fiori_3",async()=>k);y("@ui5/webcomponents","sap_fiori_3",async()=>A);const me={packageName:"@ui5/webcomponents",fileName:"themes/ListItemBase.css",content:`:host(:not([hidden])) {
	display: block;
}

:host {
	height: var(--_ui5_list_item_base_height);
	background: var(--ui5-listitem-background-color);
	box-sizing: border-box;
	border-bottom: 1px solid transparent;
}

/* selected */

:host([selected]) {
	background: var(--sapList_SelectionBackgroundColor);
}

:host([has-border]) {
	border-bottom: var(--ui5-listitem-border-bottom);
}

:host([selected]) {
	border-bottom: var(--ui5-listitem-selected-border-bottom);
}

:host(:not([focused])[selected][has-border]) {
	border-bottom: var(--ui5-listitem-selected-border-bottom);
}

/* focused & selected */

:host([focused][selected]) {
	border-bottom: var(--ui5-listitem-focused-selected-border-bottom);
}

.ui5-li-root {
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: var(--ui5-listitem-padding);
	box-sizing: border-box;
}

/* focused */

:host([focused]) .ui5-li-root.ui5-li--focusable {
	outline: none;
}

:host([focused]) .ui5-li-root.ui5-li--focusable:after {
	content: "";
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	position: absolute;
	border-radius: var(--ui5-listitem-focus-border-radius);
	top: var(--ui5-listitem-focus-offset);
	right: var(--ui5-listitem-focus-offset);
	bottom: var(--ui5-listitem-focus-offset);
	left: var(--ui5-listitem-focus-offset);
	pointer-events: none;
}

:host([focused]) .ui5-li-content:focus:after {
	content: "";
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
}

:host([active][focused]) .ui5-li-root.ui5-li--focusable:after {
	border-color: var(--ui5-listitem-active-border-color);
}

:host([disabled]) {
    opacity: var(--_ui5-listitembase_disabled_opacity);
    pointer-events: none;
}

.ui5-li-content {
	max-width: 100%;
	font-family: "72override", var(--sapFontFamily);
	color: var(--sapList_TextColor);
}
`};var b=globalThis&&globalThis.__decorate||function(i,e,t,o){var a=arguments.length,s=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,o);else for(var m=i.length-1;m>=0;m--)(f=i[m])&&(s=(a<3?f(s):a>3?f(e,t,s):f(e,t))||s);return a>3&&s&&Object.defineProperty(e,t,s),s};let g=class extends ${_onfocusin(e){e.target===this.getFocusDomRef()&&(this.focused=!0,this.fireEvent("_focused",e))}_onfocusout(){this.focused=!1}_onkeydown(e){if(w(e))return this._handleTabNext(e);if(C(e))return this._handleTabPrevious(e)}_onkeyup(e){}_handleTabNext(e){this.shouldForwardTabAfter()&&(this.fireEvent("_forward-after",{},!0)||e.preventDefault())}_handleTabPrevious(e){const t=e.target;this.shouldForwardTabBefore(t)&&this.fireEvent("_forward-before")}shouldForwardTabAfter(){const e=W(this.getFocusDomRef());return e.length===0||e[e.length-1]===N()}shouldForwardTabBefore(e){return this.getFocusDomRef()===e}get classes(){return{main:{"ui5-li-root":!0,"ui5-li--focusable":!this.disabled}}}get _ariaDisabled(){return this.disabled?!0:void 0}get hasConfigurableMode(){return!1}get _effectiveTabIndex(){return this.disabled?-1:this.selected?0:this._tabIndex}};b([l({type:Boolean})],g.prototype,"selected",void 0);b([l({type:Boolean})],g.prototype,"hasBorder",void 0);b([l({defaultValue:"-1",noAttribute:!0})],g.prototype,"_tabIndex",void 0);b([l({type:Boolean})],g.prototype,"disabled",void 0);b([l({type:Boolean})],g.prototype,"focused",void 0);g=b([R({renderer:D,styles:me}),c("_focused"),c("_forward-after"),c("_forward-before")],g);const Ce=g;export{v as L,u as a,_ as b,Ce as c,ge as d,De as e};
//# sourceMappingURL=ListItemBase-f65eaa12.js.map
