import{_ as et}from"./iframe-caf643ac.js";import{r as y,U as it,p as _t,A as ht,l as nt,v as F}from"./UI5Element-a4bd3d38.js";import{b as l,l as a,d as u,s as N,a as B,p as c,c as ot,f as at,w as rt}from"./withWebComponent-7d7e5133.js";import{s as $}from"./slot-76e48863.js";import{b as st,w as pt}from"./Button-7043cfcf.js";import{a$ as bt,b0 as mt,b1 as ft,b2 as lt,b3 as vt,b4 as gt,b5 as wt,b6 as Tt,b7 as yt,b8 as It,b9 as xt}from"./i18n-defaults-d675a36d.js";import"./information-dbbb1c9a.js";import{L as W}from"./ListItem-657b9c84.js";import{c as T,a as dt,e as St}from"./Icon-42236945.js";import $t from"./CustomListItem-48883699.js";import{s as U}from"./style-map-132a30d8.js";import{R as j}from"./ResizeHandler-0af4416f.js";import{a as Ct,s as Ot}from"./slideUp-745debd3.js";import{I as At}from"./Integer-f7f172c9.js";import{g as kt}from"./AnimationMode-392b388d.js";import{I as Et}from"./ItemNavigation-0734b7c0.js";import{l as Nt,k as H,e as G,d as Bt,b as Dt,c as Pt}from"./Icons-74c917eb.js";import{M as K}from"./MediaRange-25b98f31.js";import"./slim-arrow-up-b350b898.js";import"./slim-arrow-down-9459236f.js";import{d as Mt}from"./ListItemBase-e006c78e.js";import Rt from"./ResponsivePopover-5c74b7f5.js";import{o as x}from"./class-map-0ab40ab9.js";import{s as Lt}from"./ResponsivePopoverCommon.css-870f7136.js";var D;(function(n){n.Default="Default",n.Positive="Positive",n.Negative="Negative",n.Critical="Critical",n.Neutral="Neutral"})(D||(D={}));const b=D;var P;(function(n){n.Solid="Solid",n.Transparent="Transparent",n.Translucent="Translucent"})(P||(P={}));const I=P;var M;(function(n){n.Top="Top",n.Bottom="Bottom"})(M||(M={}));const R=M;var L;(function(n){n.Inline="Inline",n.Standard="Standard"})(L||(L={}));const S=L;var V;(function(n){n.End="End",n.StartAndEnd="StartAndEnd"})(V||(V={}));const A=V;function Vt(n,t,e){return l`<div class="${x(this.classes.root)}">${this.tabsAtTheBottom?zt.call(this,n,t,e):void 0}<div class="${x(this.classes.header)}" id="${a(this._id)}-header" @focusin="${this._onHeaderFocusin}"><div class="ui5-tc__overflow ui5-tc__overflow--start" @click="${this._onOverflowClick}" @keydown="${this._onOverflowKeyDown}" hidden>${this.startOverflowButton.length?Ft.call(this,n,t,e):Wt.call(this,n,t,e)}</div><div id="${a(this._id)}-tabStrip" class="${x(this.classes.tabStrip)}" role="tablist" aria-describedby="${a(this.tablistAriaDescribedById)}" @click="${this._onTabStripClick}" @keydown="${this._onTabStripKeyDown}" @keyup="${this._onTabStripKeyUp}">${T(this.items,(i,o)=>i._id||o,(i,o)=>Ut.call(this,n,t,e,i,o))}</div><div class="ui5-tc__overflow ui5-tc__overflow--end" @click="${this._onOverflowClick}" @keydown="${this._onOverflowKeyDown}" hidden>${this.overflowButton.length?jt.call(this,n,t,e):Ht.call(this,n,t,e)}</div></div>${this.tabsAtTheBottom?void 0:Gt.call(this,n,t,e)}${this.hasSubTabs?Xt.call(this,n,t,e):void 0}</div> `}function zt(n,t,e){return l`<div class="${x(this.classes.content)}" part="content"><div class="ui5-tc__contentItem" id="ui5-tc-content" ?hidden="${this._selectedTab.effectiveHidden}" role="tabpanel" aria-labelledby="${a(this._selectedTab._id)}">${T(this.items,(i,o)=>i._id||o,(i,o)=>qt.call(this,n,t,e,i,o))}</div></div>`}function qt(n,t,e,i,o){return l`<slot name="${a(i._effectiveSlotName)}"></slot>`}function Ft(n,t,e){return l`<slot name="startOverflowButton"></slot>`}function Wt(n,t,e){return e?l`<${u("ui5-button",t,e)} icon="${a(this.overflowMenuIcon)}" data-ui5-stable="overflow-start" tabindex="-1" tooltip="${a(this.overflowMenuTitle)}" aria-haspopup="menu" icon-end>${a(this._startOverflowText)}</${u("ui5-button",t,e)}>`:l`<ui5-button icon="${a(this.overflowMenuIcon)}" data-ui5-stable="overflow-start" tabindex="-1" tooltip="${a(this.overflowMenuTitle)}" aria-haspopup="menu" icon-end>${a(this._startOverflowText)}</ui5-button>`}function Ut(n,t,e,i,o){return l`${a(i.stripPresentation)}`}function jt(n,t,e){return l`<slot name="overflowButton"></slot>`}function Ht(n,t,e){return e?l`<${u("ui5-button",t,e)} icon="${a(this.overflowMenuIcon)}" data-ui5-stable="overflow-end" tabindex="-1" tooltip="${a(this.overflowMenuTitle)}" aria-haspopup="menu" icon-end>${a(this._endOverflowText)}</${u("ui5-button",t,e)}>`:l`<ui5-button icon="${a(this.overflowMenuIcon)}" data-ui5-stable="overflow-end" tabindex="-1" tooltip="${a(this.overflowMenuTitle)}" aria-haspopup="menu" icon-end>${a(this._endOverflowText)}</ui5-button>`}function Gt(n,t,e){return l`<div class="${x(this.classes.content)}" part="content"><div class="ui5-tc__contentItem" id="ui5-tc-content" ?hidden="${this._selectedTab.effectiveHidden}" role="tabpanel" aria-labelledby="${a(this._selectedTab._id)}">${T(this.items,(i,o)=>i._id||o,(i,o)=>Kt.call(this,n,t,e,i,o))}</div></div>`}function Kt(n,t,e,i,o){return l`<slot name="${a(i._effectiveSlotName)}"></slot>`}function Xt(n,t,e){return l`<span id="${a(this._id)}-invisibleText" class="ui5-hidden-text">${a(this.accInvisibleText)}</span>`}function Zt(n,t,e){return e?l`<${u("ui5-responsive-popover",t,e)} id="${a(this._id)}-overflowMenu" horizontal-align="Right" placement-type="Bottom" content-only-on-desktop hide-arrow _hide-header class="ui5-tab-container-responsive-popover"><${u("ui5-list",t,e)} mode="SingleSelect" separators="None" @ui5-item-click="${a(this._onOverflowListItemClick)}">${T(this._overflowItems,(i,o)=>i._id||o,(i,o)=>X.call(this,n,t,e,i,o))}</${u("ui5-list",t,e)}><div slot="footer" class="ui5-responsive-popover-footer"><${u("ui5-button",t,e)} design="Transparent" @click="${this._closeRespPopover}">${a(this.popoverCancelButtonText)}</${u("ui5-button",t,e)}></div></${u("ui5-responsive-popover",t,e)}>`:l`<ui5-responsive-popover id="${a(this._id)}-overflowMenu" horizontal-align="Right" placement-type="Bottom" content-only-on-desktop hide-arrow _hide-header class="ui5-tab-container-responsive-popover"><ui5-list mode="SingleSelect" separators="None" @ui5-item-click="${a(this._onOverflowListItemClick)}">${T(this._overflowItems,(i,o)=>i._id||o,(i,o)=>X.call(this,n,t,e,i,o))}</ui5-list><div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">${a(this.popoverCancelButtonText)}</ui5-button></div></ui5-responsive-popover>`}function X(n,t,e,i,o){return l`${a(i.overflowPresentation)}`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>N);y("@ui5/webcomponents","sap_fiori_3",async()=>B);const Jt={packageName:"@ui5/webcomponents",fileName:"themes/TabContainer.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

/* ============================= */

/* Global Base parameters        */

/* ============================= */

:host(:not([hidden])) {
	display: inline-block;
	width: 100%;
}

.ui5-tc-root {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	font-family: "72override", var(--sapFontFamily);
	font-size: 1rem;
}

.ui5-tc__header {
	position: relative;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	background-color: var(--_ui5_tc_header_background);
	height: var(--_ui5_tc_header_height);
	box-shadow: var(--_ui5_tc_header_box_shadow);
	box-sizing: border-box;
}

:host([tabs-placement="Bottom"]) .ui5-tc__header {
	border-top: var(--_ui5_tc_header_border_bottom);
}

:host([header-background-design="Transparent"]) .ui5-tc__header {
	background-color: transparent;
}

:host([header-background-design="Translucent"]) .ui5-tc__header {
	background-color: var(--_ui5_tc_header_background_translucent);
}

.ui5-tc-root.ui5-tc--textOnly .ui5-tc__header {
	height: var(--_ui5_tc_header_height_text_only);
}

.ui5-tc-root.ui5-tc--textOnly.ui5-tc--withAdditionalText.ui5-tc--standardTabLayout .ui5-tc__header {
	height: var(--_ui5_tc_header_height_text_with_additional_text);
}

.ui5-tc__tabStrip {
	flex: 1;
	display: flex;
	overflow: hidden;
	box-sizing: border-box;
	position: relative;
	white-space: nowrap;
}

.ui5-tc__separator:focus {
	outline: none;
}

.ui5-tc__overflow {
	flex: 0 0 0;
}

.ui5-tc__overflow.ui5-tc__overflow--end {
	padding-inline-start: 0.188rem;
}

.ui5-tc__overflow[hidden] {
	display: none;
}

.ui5-tc__overflow > [ui5-button] {
	border-radius: 0.75rem;
	height: 1.5rem;
}

.ui5-tc__overflow > [ui5-button]:not([active]) {
	color: var(--_ui5_tc_overflow_text_color);
}

.ui5-tc__overflow > [ui5-button]:not([active]):hover {
	color: var(--_ui5_tc_overflow_text_color);
}

.ui5-tc__overflow > [ui5-button][focused] {
	outline-offset: 0.125rem;
	--_ui5_button_focused_border: none;
	outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
}

.ui5-tc-root.ui5-tc--textOnly .ui5-tc__content {
	height: calc(100% - var(--_ui5_tc_header_height_text_only)); /* the header height (text only tabs) */
}

.ui5-tc__content {
	position: relative;
	display: flex;
	height: calc(100% - var(--_ui5_tc_header_height)); /* the header height (tabs with icons and text) */
	padding: 1rem 2rem;
	background-color: var(--_ui5_tc_content_background);
	border-bottom: var(--_ui5_tc_content_border_bottom);
	box-sizing: border-box;
}

:host([tabs-placement="Bottom"]) .ui5-tc__content {
	border-top: var(--_ui5_tc_content_border_bottom);
}

:host([content-background-design="Transparent"]) .ui5-tc__content {
	background-color: transparent;
}

:host([content-background-design="Translucent"]) .ui5-tc__content {
	background-color: var(--_ui5_tc_content_background_translucent);
}

.ui5-tc__content--collapsed {
	display: none;
}

.ui5-tc--transparent .ui5-tc__content {
	background-color: transparent;
}

.ui5-tc__contentItem {
	max-height: 100%;
	display: flex;
	flex-grow: 1;
	overflow: auto;
}

.ui5-tc__contentItem[hidden] {
	display: none;
}

/*** Responsive paddings ***/

:host([media-range="S"]) .ui5-tc__header {
	padding: 0;
}

:host([media-range="S"]) .ui5-tc__content {
	padding: 1rem;
}

:host([media-range="XL"]) .ui5-tc__header {
	padding: 0 2rem;
}

:host([media-range="XL"]) .ui5-tc__content {
	padding: 1rem 3rem;
}
`};var h=globalThis&&globalThis.__decorate||function(n,t,e,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,t,e,i);else for(var d=n.length-1;d>=0;d--)(s=n[d])&&(r=(o<3?s(r):o>3?s(t,e,r):s(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r},g;const ct=[],ut=[],Qt=5;let _=g=class extends it{static registerTabStyles(t){ct.push(t)}static registerStaticAreaTabStyles(t){ut.push(t)}constructor(){super(),this._handleResizeBound=this._handleResize.bind(this),this._itemNavigation=new Et(this,{getItemsCallback:()=>this._getFocusableRefs(),skipItemsSize:Qt})}onBeforeRendering(){if(this._allItemsAndSubItems=this._getAllSubItems(this.items),!this._allItemsAndSubItems.length)return;const t=this._allItemsAndSubItems.filter(e=>e.selected);t.length?(this._selectedTab._selected=!1,this._selectedTab=t[0]):(this._selectedTab=this._allItemsAndSubItems[0],this._selectedTab._selected=!0),this._setItemsPrivateProperties(this.items),this._animationRunning||(this._contentCollapsed=this.collapsed),this.showOverflow&&console.warn('The "show-overflow" property is deprecated and will be removed in a future release.')}onAfterRendering(){if(this.items.length&&(this._setItemsForStrip(),!this.shadowRoot.contains(document.activeElement))){const t=this._getRootTab(this._selectedTab);this._itemNavigation.setCurrentItem(t)}}onEnterDOM(){j.register(this._getHeader(),this._handleResizeBound)}onExitDOM(){j.deregister(this._getHeader(),this._handleResizeBound)}_handleResize(){this.responsivePopover&&this.responsivePopover.opened&&this.responsivePopover.close(),this._width=this.offsetWidth,this._updateMediaRange(this._width)}_updateMediaRange(t){this.mediaRange=K.getCurrentRange(K.RANGESETS.RANGE_4STEPS,t)}_setItemsPrivateProperties(t){t.filter(i=>(i._getElementInStrip=()=>this.getDomRef().querySelector(`#${i._id}`),!i.isSeparator)).forEach((i,o,r)=>{i._isInline=this.tabLayout===S.Inline,i._mixedMode=this.mixedMode,i._posinset=o+1,i._setsize=r.length,i._realTab=this._selectedTab,i._isTopLevelTab=t.some(s=>s===i),z(t,s=>{s._realTab=i._realTab})})}_onHeaderFocusin(t){const e=O(t.target);e&&this._itemNavigation.setCurrentItem(e._realTab)}async _onTabStripClick(t){const e=O(t.target);if(!(!e||e._realTab.disabled)){if(t.stopPropagation(),t.preventDefault(),t.target.hasAttribute("ui5-button")){this._onTabExpandButtonClick(t);return}if(!e._realTab._hasOwnContent&&e._realTab.tabs.length){this._overflowItems=e._realTab.subTabs,this._addStyleIndent(this._overflowItems),this.responsivePopover=await this._respPopover(),this.responsivePopover.opened?this.responsivePopover.close():this._setPopoverInitialFocus(),this.responsivePopover.showAt(e._realTab.getTabInStripDomRef());return}this._onHeaderItemSelect(e)}}async _onTabExpandButtonClick(t){t.stopPropagation(),t.preventDefault();let e=t.target,i=e.tab;if(i&&i.focus(),t.type==="keydown"&&!t.target._realTab.isSingleClickArea&&(e=t.target.querySelectorAll(".ui5-tab-expand-button")[0],i=t.target._realTab),!i){this._onHeaderItemSelect(e.parentElement);return}this._overflowItems=i.subTabs,this._addStyleIndent(this._overflowItems),this.responsivePopover=await this._respPopover(),this.responsivePopover.isOpen()?this.responsivePopover.close():this._setPopoverInitialFocus(),this.responsivePopover.showAt(e)}_setPopoverInitialFocus(){const e=this._getSelectedTabInOverflow()||this._getFirstFocusableItemInOverflow();this.responsivePopover.initialFocus=`${e._realTab._id}-li`}_getSelectedTabInOverflow(){return this.responsivePopover.content[0].items.find(t=>t._realTab&&t._realTab.selected)}_getFirstFocusableItemInOverflow(){return this.responsivePopover.content[0].items.find(t=>t.classList.contains("ui5-tab-overflow-item"))}_onTabStripKeyDown(t){const e=O(t.target);!e||e._realTab.disabled||(Nt(t)&&(e._realTab.isSingleClickArea?this._onTabStripClick(t):this._onHeaderItemSelect(e)),H(t)&&t.preventDefault(),(G(t)||Bt(t))&&(e._realTab.requiresExpandButton&&this._onTabExpandButtonClick(t),e._realTab.isSingleClickArea&&this._onTabStripClick(t)))}_onTabStripKeyUp(t){const e=O(t.target);!e||e._realTab.disabled||H(t)&&(t.preventDefault(),e._realTab.isSingleClickArea?this._onTabStripClick(t):this._onHeaderItemSelect(e))}_onHeaderItemSelect(t){t.hasAttribute("disabled")||this._onItemSelect(t.id)}async _onOverflowListItemClick(t){t.preventDefault(),this._onItemSelect(t.detail.item.id.slice(0,-3)),this.responsivePopover.close(),await _t(),this._getRootTab(this._selectedTab).getTabInStripDomRef().focus()}get allItems(){return this._getAllSubItems(this.items)}_getAllSubItems(t,e=[],i=1){return t.forEach(o=>{(o.hasAttribute("ui5-tab")||o.hasAttribute("ui5-tab-separator"))&&(o._level=i,e.push(o),o.subTabs&&this._getAllSubItems(o.subTabs,e,i+1))}),e}_onItemSelect(t){const e=this._selectedTab,i=this._allItemsAndSubItems.findIndex(s=>s.__id===t),o=this._allItemsAndSubItems[i];this.selectTab(o,i)&&(this._allItemsAndSubItems.forEach((s,d)=>{const v=i===d;s.selected=v,s._selected&&(s._selected=!1)}),!this.fixed&&(this.shouldAnimate?this.toggleAnimated(o,e):this.toggle(o,e)))}async toggleAnimated(t,e){const i=this.shadowRoot.querySelector(".ui5-tc__content");let o=null;this._animationRunning=!0,t===e?(this.collapsed=!this.collapsed,o=this.collapsed?this.slideContentUp(i):this.slideContentDown(i)):(o=this.collapsed?this.slideContentDown(i):Promise.resolve(),this.collapsed=!1),await o,this._contentCollapsed=this.collapsed,this._animationRunning=!1}toggle(t,e){t===e?this.collapsed=!this.collapsed:this.collapsed=!1}selectTab(t,e){return this.fireEvent("tab-select",{tab:t,tabIndex:e},!0)?(this._selectedTab=t,!0):!1}slideContentDown(t){return Ct(t).promise()}slideContentUp(t){return Ot(t).promise()}async _onOverflowClick(t){if(t.target.classList.contains("ui5-tc__overflow"))return;const i=t.currentTarget.classList.contains("ui5-tc__overflow--end"),o=i?"end-overflow":"start-overflow";this._overflowItems=this.items.filter(s=>{const d=s.getTabInStripDomRef();return d&&d.hasAttribute(o)}),this._addStyleIndent(this._overflowItems);let r;i?r=this.overflowButton[0]||this._getEndOverflowBtnDOM():r=this.startOverflowButton[0]||this._getStartOverflowBtnDOM(),this.responsivePopover=await this._respPopover(),this.responsivePopover.opened?this.responsivePopover.close():(this._setPopoverInitialFocus(),this.responsivePopover.showAt(r))}_addStyleIndent(t){const e=this._getAllSubItems(t).filter(i=>!i.isSeparator).some(i=>i.design!==b.Default&&i.design!==b.Neutral);z(t,i=>{let o=i._level-1;i.isSeparator&&(o+=1),i._style={"--_ui5-tab-indentation-level":o,"--_ui5-tab-extra-indent":e?1:null}})}async _onOverflowKeyDown(t){const e=t.currentTarget,i=e.classList.contains("ui5-tc__overflow--end"),o=e.classList.contains("ui5-tc__overflow--start");(G(t)||o&&Dt(t)||i&&Pt(t))&&(t.stopPropagation(),t.preventDefault(),await this._onOverflowClick(t))}_setItemsForStrip(){const t=this._getTabStrip();let e=0;if(!this._selectedTab)return;const i=this.items.map(r=>r.getTabInStripDomRef());this._getStartOverflow().setAttribute("hidden",""),this._getEndOverflow().setAttribute("hidden","");for(let r=0;r<i.length;r++)i[r].removeAttribute("hidden"),i[r].removeAttribute("start-overflow"),i[r].removeAttribute("end-overflow");i.forEach(r=>{e+=this._getItemWidth(r)}),t.offsetWidth<e&&(this.isModeStartAndEnd?(this._updateStartAndEndOverflow(i),this._updateOverflowCounters()):this._updateEndOverflow(i))}_getRootTab(t){for(;t.hasAttribute("ui5-tab")&&!t.parentElement.hasAttribute("ui5-tabcontainer");)t=t.parentElement;return t}_updateEndOverflow(t){this._getEndOverflow().removeAttribute("hidden");const i=this._getRootTab(this._selectedTab).getTabInStripDomRef(),o=this._getTabStrip().offsetWidth,r=this._getSelectedItemIndexAndWidth(t,i),s=this._findLastVisibleItem(t,o,r.width);for(let d=s+1;d<t.length;d++)t[d].setAttribute("hidden",""),t[d].setAttribute("end-overflow","");this._endOverflowText=this.overflowButtonText}_updateStartAndEndOverflow(t){let e=this._getTabStrip().offsetWidth;const o=this._getRootTab(this._selectedTab).getTabInStripDomRef(),r=this._getSelectedItemIndexAndWidth(t,o),s=this._hasStartOverflow(e,t,r),d=this._hasEndOverflow(e,t,r);let v,C;if(!s){this._getEndOverflow().removeAttribute("hidden"),e=this._getTabStrip().offsetWidth,C=this._findLastVisibleItem(t,e,r.width);for(let p=C+1;p<t.length;p++)t[p].setAttribute("hidden",""),t[p].setAttribute("end-overflow","");return}if(!d){this._getStartOverflow().removeAttribute("hidden"),e=this._getTabStrip().offsetWidth,v=this._findFirstVisibleItem(t,e,r.width);for(let p=v-1;p>=0;p--)t[p].setAttribute("hidden",""),t[p].setAttribute("start-overflow","");return}this._getStartOverflow().removeAttribute("hidden"),this._getEndOverflow().removeAttribute("hidden"),e=this._getTabStrip().offsetWidth,v=this._findFirstVisibleItem(t,e,r.width,r.index-1),C=this._findLastVisibleItem(t,e,r.width,v);for(let p=v-1;p>=0;p--)t[p].setAttribute("hidden",""),t[p].setAttribute("start-overflow","");for(let p=C+1;p<t.length;p++)t[p].setAttribute("hidden",""),t[p].setAttribute("end-overflow","")}_hasStartOverflow(t,e,i){if(i.index===0)return!1;let o=0;for(let s=i.index-1;s>=0;s--)o+=this._getItemWidth(e[s]);let r=t<o+i.width;return r||(this._getEndOverflow().removeAttribute("hidden"),t=this._getTabStrip().offsetWidth,r=t<o+i.width,this._getEndOverflow().setAttribute("hidden","")),r}_hasEndOverflow(t,e,i){if(i.index>=e.length)return!1;let o=0;for(let s=i.index;s<e.length;s++)o+=this._getItemWidth(e[s]);let r=t<o+i.width;return r||(this._getStartOverflow().removeAttribute("hidden"),t=this._getTabStrip().offsetWidth,r=t<o+i.width,this._getStartOverflow().setAttribute("hidden","")),r}_getItemWidth(t){const e=window.getComputedStyle(t),i=Number.parseInt(e.marginLeft)+Number.parseInt(e.marginRight);return t.offsetWidth+i}_getSelectedItemIndexAndWidth(t,e){let i=t.indexOf(e),o=e.offsetWidth,r;return t[i-1]&&t[i-1].isSeparator&&(r=t[i-1],o+=this._getItemWidth(r)),t.splice(i,1),r&&(t.splice(i-1,1),i--),{index:i,width:o}}_findFirstVisibleItem(t,e,i,o){o===void 0&&(o=t.length-1);let r=o+1;for(let s=o;s>=0;s--){const d=this._getItemWidth(t[s]);if(e<i+d)break;i+=d,r=s}return r}_findLastVisibleItem(t,e,i,o=0){let r=o-1,s=o;for(;s<t.length;s++){const v=this._getItemWidth(t[s]);if(e<i+v)break;i+=v,r=s}const d=t[s-1];return d&&d.isSeparator&&(r-=1),r}get isModeStartAndEnd(){return this.tabsOverflowMode===A.StartAndEnd}_updateOverflowCounters(){let t=0,e=0;this._getTabs().map(i=>i.getTabInStripDomRef()).forEach(i=>{i.hasAttribute("start-overflow")&&t++,i.hasAttribute("end-overflow")&&e++}),this._startOverflowText=`+${t}`,this._endOverflowText=`+${e}`}_getFocusableRefs(){if(!this.getDomRef())return[];const t=[];return this._getStartOverflow().hasAttribute("hidden")||t.push(this.startOverflowButton[0]||this._getStartOverflowBtnDOM()),this._getTabs().forEach(e=>{const i=e.getTabInStripDomRef();i&&!i.hasAttribute("hidden")&&t.push(e)}),this._getEndOverflow().hasAttribute("hidden")||t.push(this.overflowButton[0]||this._getEndOverflowBtnDOM()),t}_getHeader(){return this.shadowRoot.querySelector(`#${this._id}-header`)}_getTabs(){return this.items.filter(t=>!t.isSeparator)}get hasSubTabs(){const t=this._getTabs();for(let e=0;e<t.length;e++)if(t[e].subTabs.length>0)return!0;return!1}_getTabStrip(){return this.shadowRoot.querySelector(`#${this._id}-tabStrip`)}_getStartOverflow(){return this.shadowRoot.querySelector(".ui5-tc__overflow--start")}_getEndOverflow(){return this.shadowRoot.querySelector(".ui5-tc__overflow--end")}_getStartOverflowBtnDOM(){return this._getStartOverflow().querySelector("[ui5-button]")}_getEndOverflowBtnDOM(){return this._getEndOverflow().querySelector("[ui5-button]")}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector(`#${this._id}-overflowMenu`)}async _closeRespPopover(){this.responsivePopover=await this._respPopover(),this.responsivePopover.close()}get classes(){return{root:{"ui5-tc-root":!0,"ui5-tc--textOnly":this.textOnly,"ui5-tc--withAdditionalText":this.withAdditionalText,"ui5-tc--standardTabLayout":this.standardTabLayout},header:{"ui5-tc__header":!0},tabStrip:{"ui5-tc__tabStrip":!0},separator:{"ui5-tc__separator":!0},content:{"ui5-tc__content":!0,"ui5-tc__content--collapsed":this._contentCollapsed}}}get mixedMode(){return this.items.some(t=>t.icon)&&this.items.some(t=>t.text)}get textOnly(){return this.items.every(t=>!t.icon)}get withAdditionalText(){return this.items.some(t=>!!t.additionalText)}get standardTabLayout(){return this.tabLayout===S.Standard}get previousIconACCName(){return g.i18nBundle.getText(bt)}get nextIconACCName(){return g.i18nBundle.getText(mt)}get overflowMenuTitle(){return g.i18nBundle.getText(ft)}get tabsAtTheBottom(){return this.tabsPlacement===R.Bottom}get overflowMenuIcon(){return this.tabsAtTheBottom?"slim-arrow-up":"slim-arrow-down"}get overflowButtonText(){return g.i18nBundle.getText(lt)}get popoverCancelButtonText(){return g.i18nBundle.getText(vt)}get accInvisibleText(){return g.i18nBundle.getText(gt)}get tablistAriaDescribedById(){return this.hasSubTabs?`${this._id}-invisibleText`:void 0}get shouldAnimate(){return kt()!==ht.None}static async onDefine(){g.i18nBundle=await nt("@ui5/webcomponents")}};h([c({type:Boolean})],_.prototype,"fixed",void 0);h([c({type:Boolean})],_.prototype,"collapsed",void 0);h([c({type:Boolean})],_.prototype,"showOverflow",void 0);h([c({type:S,defaultValue:S.Standard})],_.prototype,"tabLayout",void 0);h([c({type:A,defaultValue:A.End})],_.prototype,"tabsOverflowMode",void 0);h([c({type:I,defaultValue:I.Solid})],_.prototype,"headerBackgroundDesign",void 0);h([c({type:I,defaultValue:I.Solid})],_.prototype,"contentBackgroundDesign",void 0);h([c({type:R,defaultValue:R.Top})],_.prototype,"tabsPlacement",void 0);h([c()],_.prototype,"mediaRange",void 0);h([c({type:Object})],_.prototype,"_selectedTab",void 0);h([c({type:Boolean,noAttribute:!0})],_.prototype,"_animationRunning",void 0);h([c({type:Boolean,noAttribute:!0})],_.prototype,"_contentCollapsed",void 0);h([c({noAttribute:!0,defaultValue:"0"})],_.prototype,"_startOverflowText",void 0);h([c({noAttribute:!0,defaultValue:"More"})],_.prototype,"_endOverflowText",void 0);h([c({type:Object,multiple:!0})],_.prototype,"_overflowItems",void 0);h([c({validator:At,noAttribute:!0})],_.prototype,"_width",void 0);h([$({default:!0,type:HTMLElement,individualSlots:!0,invalidateOnChildChange:{properties:!0,slots:!1}})],_.prototype,"items",void 0);h([$()],_.prototype,"overflowButton",void 0);h([$()],_.prototype,"startOverflowButton",void 0);_=g=h([ot({tag:"ui5-tabcontainer",languageAware:!0,fastNavigation:!0,styles:[ct,Jt],staticAreaStyles:[Lt,ut],renderer:at,template:Vt,staticAreaTemplate:Zt,dependencies:[st,dt,Mt,Rt]}),St("tab-select",{detail:{tab:{type:HTMLElement},tabIndex:{type:Number}}})],_);const Yt=n=>n.localName==="div"&&n.getAttribute("role")==="tab",O=n=>{for(;n;){if(Yt(n))return n;n=n.parentElement}return!1},z=(n,t)=>{[...n].forEach(e=>{t(e),e.subTabs&&z(e.subTabs,t)})};_.define();const q=_,te=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));function ee(n,t,e){return l`<div id="${a(this._id)}" class="ui5-tab-root" data-ui5-stable="${a(this.stableDomRef)}"><slot name="${a(this._defaultSlotName)}"></slot>${T(this.tabs,(i,o)=>i._id||o,(i,o)=>ie.call(this,n,t,e,i,o))}</div>`}function ie(n,t,e,i,o){return l`<slot name="${a(i._effectiveSlotName)}"></slot>`}function ne(n,t,e){return l`<div id="${a(this._id)}" class="${a(this.stripClasses.itemClasses)}" tabindex="-1" role="tab" aria-roledescription="${a(this._roleDescription)}" aria-haspopup="${a(this._ariaHasPopup)}" aria-posinset="${a(this._posinset)}" aria-setsize="${a(this._setsize)}" aria-controls="ui5-tc-content" aria-selected="${a(this.effectiveSelected)}" aria-disabled="${a(this.effectiveDisabled)}" ?disabled="${this.effectiveDisabled}" aria-labelledby="${a(this.ariaLabelledBy)}" ._realTab="${a(this)}">${this.icon?oe.call(this,n,t,e):void 0}${this._designDescription?ae.call(this,n,t,e):void 0}<div class="ui5-tab-strip-itemContent">${this._isInline?void 0:re.call(this,n,t,e)}${this.text?se.call(this,n,t,e):void 0}</div>${this.requiresExpandButton?ce.call(this,n,t,e):void 0} `}function oe(n,t,e){return e?l`<div class="ui5-tab-strip-item-icon-outer"><${u("ui5-icon",t,e)} id="${a(this._id)}-icon" name="${a(this.icon)}" class="ui5-tab-strip-item-icon"></${u("ui5-icon",t,e)}></div>`:l`<div class="ui5-tab-strip-item-icon-outer"><ui5-icon id="${a(this._id)}-icon" name="${a(this.icon)}" class="ui5-tab-strip-item-icon"></ui5-icon></div>`}function ae(n,t,e){return l`<div id="${a(this._id)}-designDescription" class="ui5-tab-strip-design-description">${a(this._designDescription)}</div>`}function re(n,t,e){return l`<span class="${a(this.stripClasses.additionalTextClasses)}" id="${a(this._id)}-additionalText">${a(this.additionalText)}</span>`}function se(n,t,e){return l`<span class="ui5-tab-strip-itemText" id="${a(this._id)}-text">${this.semanticIconName?le.call(this,n,t,e):void 0}${a(this.displayText)}${this.isSingleClickArea?de.call(this,n,t,e):void 0}</span>`}function le(n,t,e){return e?l`<${u("ui5-icon",t,e)} class="${a(this.semanticIconClasses)}" name="${a(this.semanticIconName)}"></${u("ui5-icon",t,e)}>`:l`<ui5-icon class="${a(this.semanticIconClasses)}" name="${a(this.semanticIconName)}"></ui5-icon>`}function de(n,t,e){return e?l`<span class="ui5-tab-single-click-icon"><${u("ui5-icon",t,e)} name="slim-arrow-down"></${u("ui5-icon",t,e)}></span>`:l`<span class="ui5-tab-single-click-icon"><ui5-icon name="slim-arrow-down"></ui5-icon></span>`}function ce(n,t,e){return e?l`<div class="ui5-tab-expand-button-separator"></div><div class="ui5-tab-expand-button" @click="${this._onTabExpandButtonClick}"><${u("ui5-button",t,e)} .tab=${a(this)} icon="slim-arrow-down" design="Transparent" tabindex="-1" ?disabled="${this.disabled}" tooltip="${a(this.expandButtonTitle)}" aria-haspopup="Menu"></${u("ui5-button",t,e)}></div>`:l`<div class="ui5-tab-expand-button-separator"></div><div class="ui5-tab-expand-button" @click="${this._onTabExpandButtonClick}"><ui5-button .tab=${a(this)} icon="slim-arrow-down" design="Transparent" tabindex="-1" ?disabled="${this.disabled}" tooltip="${a(this.expandButtonTitle)}" aria-haspopup="Menu"></ui5-button></div>`}function ue(n,t,e){return e?l`<${u("ui5-li-custom",t,e)} id="${a(this._id)}-li" class="${a(this.overflowClasses)}" type="${a(this.overflowState)}" aria-disabled="${a(this.effectiveDisabled)}" aria-selected="${a(this.effectiveSelected)}" ._realTab="${a(this)}" style="${U(this._style)}"><div class="ui5-tab-overflow-itemContent-wrapper"><div class="ui5-tab-overflow-itemContent">${this.semanticIconName?Z.call(this,n,t,e):void 0}${this.icon?J.call(this,n,t,e):void 0}${a(this.text)}${this.additionalText?Q.call(this,n,t,e):void 0}${this._designDescription?Y.call(this,n,t,e):void 0}</div></div></${u("ui5-li-custom",t,e)}>${T(this.subTabs,(i,o)=>i._id||o,(i,o)=>tt.call(this,n,t,e,i,o))} `:l`<ui5-li-custom id="${a(this._id)}-li" class="${a(this.overflowClasses)}" type="${a(this.overflowState)}" aria-disabled="${a(this.effectiveDisabled)}" aria-selected="${a(this.effectiveSelected)}" ._realTab="${a(this)}" style="${U(this._style)}"><div class="ui5-tab-overflow-itemContent-wrapper"><div class="ui5-tab-overflow-itemContent">${this.semanticIconName?Z.call(this,n,t,e):void 0}${this.icon?J.call(this,n,t,e):void 0}${a(this.text)}${this.additionalText?Q.call(this,n,t,e):void 0}${this._designDescription?Y.call(this,n,t,e):void 0}</div></div></ui5-li-custom>${T(this.subTabs,(i,o)=>i._id||o,(i,o)=>tt.call(this,n,t,e,i,o))} `}function Z(n,t,e){return e?l`<${u("ui5-icon",t,e)} class="${a(this.semanticIconClasses)}" name="${a(this.semanticIconName)}"></${u("ui5-icon",t,e)}>`:l`<ui5-icon class="${a(this.semanticIconClasses)}" name="${a(this.semanticIconName)}"></ui5-icon>`}function J(n,t,e){return e?l`<${u("ui5-icon",t,e)} name="${a(this.icon)}"></${u("ui5-icon",t,e)}>`:l`<ui5-icon name="${a(this.icon)}"></ui5-icon>`}function Q(n,t,e){return l` (${a(this.additionalText)}) `}function Y(n,t,e){return l`<div id="${a(this._id)}-designDescription" class="ui5-hidden-text">${a(this._designDescription)}</div>`}function tt(n,t,e,i,o){return l`${a(i.overflowPresentation)}`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>N);y("@ui5/webcomponents","sap_fiori_3",async()=>B);const _e={packageName:"@ui5/webcomponents",fileName:"themes/Tab.css",content:`:host {
	display: inline-block;
	width: 100%;
}

.ui5-tab-root {
	width: 100%;
	height: 100%;
}`};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>N);y("@ui5/webcomponents","sap_fiori_3",async()=>B);const he={packageName:"@ui5/webcomponents",fileName:"themes/TabInStrip.css",content:`.ui5-tab-semantic-icon {
	display: var(--_ui5_tc_headerItemSemanticIcon_display);
	height: var(--_ui5_tc_headerItemSemanticIcon_size);
	width: var(--_ui5_tc_headerItemSemanticIcon_size);
	margin-inline-end: 0.5rem;
}

.ui5-tab-semantic-icon--positive {
	color: var(--sapPositiveElementColor);
}

.ui5-tab-semantic-icon--negative {
	color: var(--sapNegativeElementColor);
}

.ui5-tab-semantic-icon--critical {
	color: var(--sapCriticalElementColor);
}

.ui5-tab-strip-item {
	height: var(--_ui5_tc_header_height);
	color: var(--_ui5_tc_headerItem_color);
	cursor: pointer;
	padding: 0 var(--_ui5_tc_headeritem_padding);
	font-size: var(--sapFontSmallSize);
	font-weight: var(--_ui5_tc_headeritem_text_font_weight);
	text-shadow: var(--sapContent_TextShadow);
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	min-width: 2rem;
	max-width: 100%;
	box-sizing: border-box;
}

.ui5-tab-strip-itemText {
	position: relative;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.ui5-tc__separator[hidden],
.ui5-tab-strip-item[hidden],
.ui5-tab-strip-item--textOnly[hidden],
.ui5-tab-strip-item.ui5-tab-strip-item--textOnly.ui5-tab-strip-item--inline[hidden],
.ui5-tab-strip-design-description {
	display: none;
}

.ui5-tab-strip-itemContent {
	display: flex;
	height: 100%;
	min-width: 0;
	justify-content: center;
	flex-direction: column;
	border: var(--_ui5_tc_headerItemContent_default_focus_border);
	border-radius: var(--_ui5_tc_headerItemContent_focus_border_radius);
	transition: var(--_ui5_tc_headerItem_transition);
}

.ui5-tab-expand-button {
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 1;
	background-color: var(--_ui5_tc_header_background);
	padding-inline-end: 0.188rem;
}

.ui5-tab-expand-button > [ui5-button] {
	height: 1.5rem;
	min-width: 1.5rem;
	margin-inline-start: var(--_ui5_tc_headerItem_expand_button_margin_inline_start);
	--_ui5_button_border_radius: var(--_ui5_tc_headerItem_expand_button_border_radius);
	--_ui5_button_focused_border_radius: var(--_ui5_tc_headerItem_expand_button_border_radius);
}

.ui5-tab-expand-button > [ui5-button]:not([active]) {
	color: var(--_ui5_tc_headerItem_color);
}

.ui5-tab-strip-item--selected .ui5-tab-expand-button > [ui5-button]:not([active]) {
	color: var(--_ui5_tc_headerItem_text_selected_color);
}

.ui5-tab-expand-button > [ui5-button]:hover:not([active]) {
	color: var(--_ui5_tc_headerItem_text_selected_hover_color);
}

.ui5-tab-expand-button-separator {
	display: var(--_ui5_tc_headerItem_expand_button_separator_display);
	position: relative;
	width: 0.0625rem;
	right: -0.0625rem;
	height: 1rem;
	background: var(--sapTextColor);
	margin-inline-start: 0.0625rem;
	z-index: 2;
}

.ui5-tab-expand-button:hover {
	z-index: 2;
}

.ui5-tab-strip-item--selected .ui5-tab-expand-button-separator {
	background: var(--_ui5_tc_headerItem_text_selected_color);
}

.ui5-tab-single-click-icon {
	margin-inline-start:  var(--_ui5_tc_headerItem_single_click_expand_button_margin_inline_start);
}

.ui5-tab-strip-item--selected.ui5-tab-strip-item--textOnly {
	color: var(--_ui5_tc_headerItem_text_selected_color);
}

.ui5-tab-strip-item--selected.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText .ui5-tab-single-click-icon > [ui5-icon] {
	color: var(--_ui5_tc_headerItem_text_selected_color);
}

.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText {
	display: flex;
	align-items: center;
}

.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText .ui5-tab-single-click-icon {
	display: flex;
}

.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText .ui5-tab-single-click-icon > [ui5-icon] {
	color: var(--_ui5_tc_headerItem_color);
}

/* hover effects */

.ui5-tab-strip-item--textOnly:not(.ui5-tab-strip-item--twoClickArea):not(.ui5-tab-strip-item--selected):not(.ui5-tab-strip-item--negative):hover,
.ui5-tab-strip-item--twoClickArea:not(.ui5-tab-strip-item--selected):not(.ui5-tab-strip-item--negative) .ui5-tab-strip-itemContent:hover,
.ui5-tab-strip-item--singleClickArea:not(.ui5-tab-strip-item--selected):not(.ui5-tab-strip-item--disabled):hover .ui5-tab-single-click-icon > [ui5-icon] {
	color: var(--_ui5_tc_headerItem_text_hover_color);
}

/* selection indicator */

.ui5-tab-strip-item--selected.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemContent::after,
.ui5-tab-strip-item--selected.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemContent::after,
.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	border-bottom: var(--_ui5_tc_headerItemContent_border_bottom);
	border-radius: var(--_ui5_tc_headerItemContent_border_radius);
	background-color: var(--_ui5_tc_headerItemContent_border_bg);
	height: var(--_ui5_tc_headerItemContent_border_height);
}

/* selection indicator offset in text only and mixed modes */

.ui5-tab-strip-item--selected.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemContent::after,
.ui5-tab-strip-item--selected.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemContent::after {
	left: var(--_ui5_tc_headeritem_padding);
	right: var(--_ui5_tc_headeritem_padding);
}

.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer::after {
	bottom: -0.9375rem;
}

.ui5-tab-strip-item--disabled {
	cursor: default;
	opacity: var(--sapContent_DisabledOpacity);
}

.ui5-tab-strip-item {
	outline: none;
}

.ui5-tab-strip-item--textOnly:focus .ui5-tab-strip-itemText::before,
.ui5-tab-strip-item--inline.ui5-tab-strip-item--textOnly:focus .ui5-tab-strip-itemText::before {
	border-radius: var(--_ui5_tc_headerItem_focus_border_radius);
	content: "";
	pointer-events: none;
	position: absolute;
	border: var(--_ui5_tc_headerItem_focus_border);
	left: var(--_ui5_tc_headerItem_text_focus_border_offset_left);
	right: var(--_ui5_tc_headerItem_text_focus_border_offset_right);
	top: var(--_ui5_tc_headerItem_text_focus_border_offset_top);
	bottom: var(--_ui5_tc_headerItem_text_focus_border_offset_bottom);
}

.ui5-tab-strip-item--mixedMode:focus .ui5-tab-strip-itemContent::before {
	border-radius: var(--_ui5_tc_headerItem_focus_border_radius);
	content: "";
	pointer-events: none;
	position: absolute;
	border: var(--_ui5_tc_headerItem_focus_border);
	left: var(--_ui5_tc_headerItem_mixed_mode_focus_border_offset_left);
	right: var(--_ui5_tc_headerItem_mixed_mode_focus_border_offset_right);
	top: var(--_ui5_tc_headerItem_mixed_mode_focus_border_offset_top);
	bottom: var(--_ui5_tc_headerItem_mixed_mode_focus_border_offset_bottom);
}

.ui5-tab-strip-item--withIcon:focus .ui5-tab-strip-item-icon-outer::before {
	content: "";
	pointer-events: none;
	position: absolute;
	border: var(--_ui5_tc_headerItem_focus_border);
	left: var(--_ui5_tc_headerItem_focus_border_offset);
	right: var(--_ui5_tc_headerItem_focus_border_offset);
	top: var(--_ui5_tc_headerItem_focus_border_offset);
	bottom: var(--_ui5_tc_headerItem_focus_border_offset);
	border-radius: var(--_ui5_tc_headerItemIcon_focus_border_radius);
}

/*** Icon and text Tab styles ***/

.ui5-tab-strip-item-icon-outer {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	border: var(--_ui5_tc_headerItemIcon_border);
	border-radius: 50%;
	margin-inline-end: 0.25rem;
	height: var(--_ui5_tc_item_icon_circle_size);
	width: var(--_ui5_tc_item_icon_circle_size);
	pointer-events: none;
	background-color: var(--_ui5_tc_headerItemIcon_background_color);
}

.ui5-tab-strip-item-icon {
	width: var(--_ui5_tc_item_icon_size);
	height: var(--_ui5_tc_item_icon_size);
	color: var(--_ui5_tc_headerItemIcon_color);
	text-shadow: var(--sapContent_TextShadow);
	pointer-events: none;
}

.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer {
	background-color: var(--_ui5_tc_headerItemIcon_selected_background);
}

.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon {
	color: var(--_ui5_tc_headerItemIcon_selected_color);
	text-shadow: none;
}

.ui5-tab-strip-itemAdditionalText + .ui5-tab-strip-itemText {
	display: flex;
}

.ui5-tab-strip-itemAdditionalText-hidden {
	visibility: hidden;
	margin-top: 1.25rem;
}

.ui5-tab-strip-item--inline .ui5-tab-strip-itemAdditionalText + .ui5-tab-strip-itemText {
	display: inline;
}

.ui5-tab-strip-item--withIcon .ui5-tab-strip-itemAdditionalText + .ui5-tab-strip-itemText {
	margin-block-start: var(--_ui5_tc_item_add_text_margin_top);
}

/*** END Icon and text Tab styles ***/

/*** TextOnly Tab styles ***/

.ui5-tab-strip-item--textOnly,
.ui5-tab-strip-item.ui5-tab-strip-item--textOnly.ui5-tab-strip-item--inline {
	font-size: var(--sapFontSize);
	height: var(--_ui5_tc_item_text_only_height);
	display: flex;
	align-items: center;
	line-height: var(--_ui5_tc_item_text_line_height);
}

.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText {
	padding: 0 0.188rem;
}

.ui5-tab-strip-item--textOnly.ui5-tab-strip-item--withAdditionalText {
	justify-content: flex-start;
	height: var(--_ui5_tc_item_text_only_with_additional_text_height);
}

/*** END TextOnly Tab styles ***/

/*** Mixed Mode Tab styles ***/

.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemText,
.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemAdditionalText {
	display: inline-block;
	vertical-align: middle;
}

.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemContent {
	flex-direction: row;
	align-items: center;
}

.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemAdditionalText {
	font-size: 1.5rem;
	margin-inline-end: 0.5rem;
}

.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemText {
	color: var(--_ui5_tc_mixedMode_itemText_color);
	font-family: var(--_ui5_tc_mixedMode_itemText_font_family);
	font-size: var(--_ui5_tc_mixedMode_itemText_font_size);
	font-weight: var(--_ui5_tc_mixedMode_itemText_font_weight);
}

/*** Semantic states ***/

.ui5-tab-strip-item--positive.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText,
.ui5-tab-strip-item--positive .ui5-tab-strip-item-icon-outer {
	color: var(--_ui5_tc_headerItem_positive_color);
	border-color: var(--_ui5_tc_headerItem_positive_selected_border_color);
}

.ui5-tab-strip-item--positive .ui5-tab-strip-item-icon {
	color: var(--_ui5_tc_headerItem_positive_color);
}

.ui5-tab-strip-item--positive.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer {
	background-color: var(--_ui5_tc_headerItemIcon_positive_selected_background);
	color: var(--_ui5_tc_headerItemIcon_semantic_selected_color);
}

.ui5-tab-strip-item--positive.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon {
	color: var(--_ui5_tc_headerItemIcon_semantic_selected_color);
}

.ui5-tab-strip-item.ui5-tab-strip-item--neutral .ui5-tab-strip-itemContent::after,
.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon-outer::after {
	border-color: var(--_ui5_tc_headerItem_neutral_border_color);
	background-color: var(--_ui5_tc_headerItem_neutral_border_bg);
}

.ui5-tab-strip-item.ui5-tab-strip-item--positive .ui5-tab-strip-itemContent::after,
.ui5-tab-strip-item--positive .ui5-tab-strip-item-icon-outer::after {
	border-color: var(--_ui5_tc_headerItem_positive_border_color);
	background-color: var(--_ui5_tc_headerItem_positive_border_bg);
}

.ui5-tab-strip-item--negative.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText,
.ui5-tab-strip-item--negative .ui5-tab-strip-item-icon-outer {
	color: var(--_ui5_tc_headerItem_negative_color);
	border-color: var(--_ui5_tc_headerItem_negative_selected_border_color);
}

.ui5-tab-strip-item--negative .ui5-tab-strip-item-icon {
	color: var(--_ui5_tc_headerItem_negative_color);
}

.ui5-tab-strip-item--negative.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer {
	background-color: var(--_ui5_tc_headerItemIcon_negative_selected_background);
}

.ui5-tab-strip-item--negative.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon {
	color: var(--_ui5_tc_headerItemIcon_semantic_selected_color);
}

.ui5-tab-strip-item.ui5-tab-strip-item--negative .ui5-tab-strip-itemContent::after,
.ui5-tab-strip-item--negative .ui5-tab-strip-item-icon-outer::after {
	border-color: var(--_ui5_tc_headerItem_negative_border_color);
	background-color: var(--_ui5_tc_headerItem_negative_border_bg);
}

.ui5-tab-strip-item--critical.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText,
.ui5-tab-strip-item--critical .ui5-tab-strip-item-icon-outer {
	color: var(--_ui5_tc_headerItem_critical_color);
	border-color: var(--_ui5_tc_headerItem_critical_selected_border_color);
}

.ui5-tab-strip-item--critical .ui5-tab-strip-item-icon {
	color: var(--_ui5_tc_headerItem_critical_color);
}

.ui5-tab-strip-item--critical.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer {
	background-color: var(--_ui5_tc_headerItemIcon_critical_selected_background);
}

.ui5-tab-strip-item--critical.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon {
	color: var(--_ui5_tc_headerItemIcon_semantic_selected_color);
}

.ui5-tab-strip-item.ui5-tab-strip-item--critical .ui5-tab-strip-itemContent::after,
.ui5-tab-strip-item--critical .ui5-tab-strip-item-icon-outer::after {
	border-color: var(--_ui5_tc_headerItem_critical_border_color);
	background-color: var(--_ui5_tc_headerItem_critical_border_bg);
}

.ui5-tab-strip-item--neutral.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText,
.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon-outer {
	color: var(--_ui5_tc_headerItem_neutral_color);
	border-color: var(--_ui5_tc_headerItem_neutral_selected_border_color);
}

.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon {
	color: var(--_ui5_tc_headerItem_neutral_color);
}

.ui5-tab-strip-item--neutral.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer {
	background-color: var(--_ui5_tc_headerItemIcon_neutral_selected_background);
}

.ui5-tab-strip-item--neutral.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon {
	color: var(--_ui5_tc_headerItemIcon_semantic_selected_color);
}

.ui5-tab-strip-item.ui5-tab-strip-item--neutral .ui5-tab-strip-itemContent::after,
.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon::after {
	border-color: var(--_ui5_tc_headerItem_neutral_border_color);
	background-color: var(--_ui5_tc_headerItem_neutral_border_bg);
}

.ui5-tab-strip-item--withIcon .ui5-tab-strip-itemContent .ui5-tab-strip-itemAdditionalText {
	padding: 0;
}

.ui5-tab-strip-item .ui5-tab-strip-itemAdditionalText {
	padding: 0 0.188rem;
	color: var(--_ui5_tc_headerItem_additional_text_color);
	font-weight: var(--_ui5_tc_headerItem_additional_text_font_weight);
}`};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>N);y("@ui5/webcomponents","sap_fiori_3",async()=>B);const pe={packageName:"@ui5/webcomponents",fileName:"themes/TabInOverflow.css",content:`.ui5-tab-semantic-icon {
	display: var(--_ui5_tc_headerItemSemanticIcon_display);
	height: var(--_ui5_tc_headerItemSemanticIcon_size);
	width: var(--_ui5_tc_headerItemSemanticIcon_size);
	margin-inline-end: 0.5rem;
}

.ui5-tab-semantic-icon--positive {
	color: var(--sapPositiveElementColor);
}

.ui5-tab-semantic-icon--negative {
	color: var(--sapNegativeElementColor);
}

.ui5-tab-semantic-icon--critical {
	color: var(--sapCriticalElementColor);
}

.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

.ui5-tab-overflow-item {
	color: var(--_ui5_tc_overflowItem_default_color);
}

.ui5-tab-overflow-item--disabled {
	cursor: default;
	opacity: var(--sapContent_DisabledOpacity);
}

.ui5-tab-overflow-item[hidden] {
	display: none;
}

.ui5-tab-semantic-icon {
	position: absolute;
	inset-inline-start: -0.25rem;
}

.ui5-tab-overflow-item--positive:not(.ui5-tab-overflow-item--disabled) .ui5-tab-overflow-itemContent {
	color: var(--_ui5_tc_overflowItem_positive_color);
}

.ui5-tab-overflow-item--negative:not(.ui5-tab-overflow-item--disabled) .ui5-tab-overflow-itemContent {
	color: var(--_ui5_tc_overflowItem_negative_color);
}

.ui5-tab-overflow-item--critical:not(.ui5-tab-overflow-item--disabled) .ui5-tab-overflow-itemContent {
	color: var(--_ui5_tc_overflowItem_critical_color);
}

.ui5-tab-overflow-item[active] .ui5-tab-overflow-itemContent {
	color: var(--sapList_Active_TextColor);
}

.ui5-tab-overflow-itemContent {
	display: flex;
	align-items: center;
	position: relative;
	height: var(--_ui5_tc_item_text);
	pointer-events: none;
	font-size: 0.875rem;
}

.ui5-tab-overflow-itemContent-wrapper {
	padding-inline-start: calc(var(--_ui5-tab-indentation-level) * 0.5rem + var(--_ui5-tab-extra-indent, 0) * var(--_ui5_tc_overflowItem_extraIndent));
}

.ui5-tab-overflow-item--selectedSubTab {
	background-color: var(--sapList_SelectionBackgroundColor);
}

.ui5-tab-overflow-item [ui5-icon]:not(.ui5-tab-semantic-icon) {
	width: 1.375rem;
	height: 1.375rem;
	padding-inline-end: 0.75rem;
	color: var(--_ui5_tc_overflowItem_current_color);
}

.ui5-tab-container-responsive-popover [ui5-li-custom][focused]::part(native-li)::after {
	inset: var(--_ui5_tc_overflowItem_focus_offset);
}

.ui5-tab-container-responsive-popover::part(content) {
	padding: 0;
}`};var f=globalThis&&globalThis.__decorate||function(n,t,e,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,t,e,i);else for(var d=n.length-1;d>=0;d--)(s=n[d])&&(r=(o<3?s(r):o>3?s(t,e,r):s(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r},w;const be={[b.Positive]:wt,[b.Negative]:Tt,[b.Neutral]:yt,[b.Critical]:It};let m=w=class extends it{set _tabIndex(t){this.getTabInStripDomRef().setAttribute("tabindex",t)}get _tabIndex(){return this.getTabInStripDomRef().getAttribute("tabindex")}get displayText(){let t=this.text;return this._isInline&&this.additionalText&&(t+=` (${this.additionalText})`),t}get isSeparator(){return!1}get stripPresentation(){return F(w.stripTemplate,this)}get overflowPresentation(){return F(w.overflowTemplate,this)}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}get requiresExpandButton(){return this.subTabs.length>0&&this._isTopLevelTab&&this._hasOwnContent}get isSingleClickArea(){return this.subTabs.length>0&&this._isTopLevelTab&&!this._hasOwnContent}get isTwoClickArea(){return this.subTabs.length>0&&this._isTopLevelTab&&this._hasOwnContent}get isOnSelectedTabPath(){return this._realTab===this||this.tabs.some(t=>t.isOnSelectedTabPath)}get _effectiveSlotName(){return this.isOnSelectedTabPath?this._individualSlot:`disabled-${this._individualSlot}`}get _defaultSlotName(){return this._realTab===this?"":"disabled-slot"}get _hasOwnContent(){return pt(this.content)}getTabInStripDomRef(){return this._getElementInStrip?this._getElementInStrip():null}getFocusDomRef(){let t=super.getFocusDomRef();return this._getElementInStrip&&this._getElementInStrip()&&(t=this._getElementInStrip()),t}get isMixedModeTab(){return!this.icon&&this._mixedMode}get isTextOnlyTab(){return!this.icon&&!this._mixedMode}get isIconTab(){return!!this.icon}get effectiveDisabled(){return this.disabled||void 0}get effectiveSelected(){const t=this.tabs.some(e=>e.effectiveSelected);return this.selected||this._selected||t}get effectiveHidden(){return!this.effectiveSelected}get tabs(){return this.subTabs.filter(t=>!t.isSeparator)}get ariaLabelledBy(){const t=[];return this.text&&t.push(`${this._id}-text`),this.additionalText&&t.push(`${this._id}-additionalText`),this.icon&&t.push(`${this._id}-icon`),this._designDescription&&t.push(`${this._id}-designDescription`),t.join(" ")}get stripClasses(){const t=["ui5-tab-strip-item"];return this.effectiveSelected&&t.push("ui5-tab-strip-item--selected"),this.disabled&&t.push("ui5-tab-strip-item--disabled"),this._isInline&&t.push("ui5-tab-strip-item--inline"),this.additionalText&&t.push("ui5-tab-strip-item--withAdditionalText"),!this.icon&&!this._mixedMode&&t.push("ui5-tab-strip-item--textOnly"),this.icon&&t.push("ui5-tab-strip-item--withIcon"),!this.icon&&this._mixedMode&&t.push("ui5-tab-strip-item--mixedMode"),this.design!==b.Default&&t.push(`ui5-tab-strip-item--${this.design.toLowerCase()}`),this.isSingleClickArea&&t.push("ui5-tab-strip-item--singleClickArea"),this.isTwoClickArea&&t.push("ui5-tab-strip-item--twoClickArea"),{itemClasses:t.join(" "),additionalTextClasses:this.additionalTextClasses}}get additionalTextClasses(){const t=[];return this.additionalText&&t.push("ui5-tab-strip-itemAdditionalText"),this.icon&&!this.additionalText&&t.push("ui5-tab-strip-itemAdditionalText-hidden"),t.join(" ")}get expandButtonTitle(){return w.i18nBundle.getText(lt)}get _roleDescription(){return this.subTabs.length>0?w.i18nBundle.getText(xt):void 0}get _ariaHasPopup(){return this.isSingleClickArea?"menu":void 0}get semanticIconName(){switch(this.design){case b.Positive:return"sys-enter-2";case b.Negative:return"error";case b.Critical:return"alert";default:return null}}get _designDescription(){return this.design===b.Default?null:w.i18nBundle.getText(be[this.design])}get semanticIconClasses(){const t=["ui5-tab-semantic-icon"];return this.design!==b.Default&&this.design!==b.Neutral&&t.push(`ui5-tab-semantic-icon--${this.design.toLowerCase()}`),t.join(" ")}get overflowClasses(){const t=["ui5-tab-overflow-item"];return this.design!==b.Default&&this.design!==b.Neutral&&t.push(`ui5-tab-overflow-item--${this.design.toLowerCase()}`),this.effectiveDisabled&&t.push("ui5-tab-overflow-item--disabled"),this.selected&&t.push("ui5-tab-overflow-item--selectedSubTab"),t.join(" ")}get overflowState(){return this.disabled||this.isSingleClickArea?W.Inactive:W.Active}static get stripTemplate(){return ne}static get overflowTemplate(){return ue}static async onDefine(){w.i18nBundle=await nt("@ui5/webcomponents")}};f([c()],m.prototype,"text",void 0);f([c({type:Boolean})],m.prototype,"disabled",void 0);f([c()],m.prototype,"additionalText",void 0);f([c()],m.prototype,"icon",void 0);f([c({type:b,defaultValue:b.Default})],m.prototype,"design",void 0);f([c({type:Boolean})],m.prototype,"selected",void 0);f([c({type:Boolean})],m.prototype,"_selected",void 0);f([c({type:Object})],m.prototype,"_realTab",void 0);f([c({type:Boolean})],m.prototype,"_isTopLevelTab",void 0);f([$({type:Node,default:!0,invalidateOnChildChange:{properties:!0,slots:!1}})],m.prototype,"content",void 0);f([$({type:HTMLElement,individualSlots:!0,invalidateOnChildChange:{properties:!0,slots:!1}})],m.prototype,"subTabs",void 0);m=w=f([ot({tag:"ui5-tab",languageAware:!0,renderer:at,template:ee,styles:_e,dependencies:[dt,st,$t]})],m);m.define();q.registerTabStyles(he);q.registerStaticAreaTabStyles(pe);const me=m,fe=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"})),k=rt("ui5-tab",["additionalText","design","icon","text"],["disabled","selected"],["subTabs"],[],()=>et(()=>Promise.resolve().then(()=>fe),void 0,import.meta.url));k.displayName="Tab";k.defaultProps={design:b.Default};try{k.displayName="Tab",k.__docgenInfo={description:"The `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected",displayName:"Tab",props:{children:{defaultValue:null,description:"Holds the content associated with this tab.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},subTabs:{defaultValue:null,description:`Defines hierarchies with nested sub tabs.

**Note:** Use \`Tab\` and \`TabSeparator\` for the intended design.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="subTabs"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"subTabs",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},additionalText:{defaultValue:null,description:'Represents the "additionalText" text, which is displayed in the tab. In the cases when in the same time there are tabs with icons and tabs without icons, if a tab has no icon the "additionalText" is displayed larger.',name:"additionalText",required:!1,type:{name:"string"}},design:{defaultValue:{value:"SemanticColor.Default"},description:`Defines the component's design color.

The design is applied to:

*   the component icon
*   the \`text\` when the component overflows
*   the tab selection line



Available designs are: \`"Default"\`, \`"Neutral"\`, \`"Positive"\`, \`"Critical"\` and \`"Negative"\`.

**Note:** The design depends on the current theme.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"Neutral"'},{value:'"Critical"'},{value:'"Neutral"'}]}},disabled:{defaultValue:null,description:"Disabled tabs can't be selected.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:'Defines the icon source URI to be displayed as graphical element within the component. The SAP-icons font provides numerous built-in icons. See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.',name:"icon",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Specifies if the component is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"The text to be displayed for the item.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const E=rt("ui5-tabcontainer",["contentBackgroundDesign","headerBackgroundDesign","tabLayout","tabsOverflowMode"],["collapsed","fixed","showOverflow"],["overflowButton","startOverflowButton"],["tab-select"],()=>et(()=>Promise.resolve().then(()=>te),void 0,import.meta.url));E.displayName="TabContainer";E.defaultProps={contentBackgroundDesign:I.Solid,headerBackgroundDesign:I.Solid,tabLayout:S.Standard,tabsOverflowMode:A.End};try{E.displayName="TabContainer",E.__docgenInfo={description:`The \`TabContainer\` represents a collection of tabs with associated content. Navigation through the tabs changes the content display of the currently active content area. A tab can be labeled with text only, or icons with text.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-TabContainer)`,displayName:"TabContainer",props:{children:{defaultValue:null,description:"Defines the tabs.\n\n**Note:** Use `Tab` and `TabSeparator` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowButton:{defaultValue:null,description:`Defines the button which will open the overflow menu. If nothing is provided to this slot, the default button will be used.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="overflowButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"overflowButton",required:!1,type:{name:"UI5WCSlotsNode"}},startOverflowButton:{defaultValue:null,description:`Defines the button which will open the start overflow menu if available. If nothing is provided to this slot, the default button will be used.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="startOverflowButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"startOverflowButton",required:!1,type:{name:"UI5WCSlotsNode"}},onTabSelect:{defaultValue:null,description:"Fired when a tab is selected.",name:"onTabSelect",required:!1,type:{name:"(event: Ui5CustomEvent<TabContainerDomRef, TabContainerTabSelectEventDetail>) => void"}},collapsed:{defaultValue:null,description:"Defines whether the tab content is collapsed.",name:"collapsed",required:!1,type:{name:"boolean"}},contentBackgroundDesign:{defaultValue:{value:"TabContainerBackgroundDesign.Solid"},description:"Sets the background color of the Tab Container's content as `Solid`, `Transparent`, or `Translucent`.",name:"contentBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Translucent"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'}]}},fixed:{defaultValue:null,description:"Defines whether the tabs are in a fixed state that is not expandable/collapsible by user interaction.",name:"fixed",required:!1,type:{name:"boolean"}},headerBackgroundDesign:{defaultValue:{value:"TabContainerBackgroundDesign.Solid"},description:"Sets the background color of the Tab Container's header as `Solid`, `Transparent`, or `Translucent`.",name:"headerBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Translucent"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'}]}},showOverflow:{defaultValue:null,description:`Defines whether the overflow select list is displayed.

The overflow select list represents a list, where all tabs are displayed so that it's easier for the user to select a specific tab.
@deprecated Since the introduction of TabsOverflowMode, overflows will always be visible if there is not enough space for all tabs, all hidden tabs are moved to a select list in the respective overflows and are accessible via the <code>overflowButton</code> and / or <code>startOverflowButton</code> slots.`,name:"showOverflow",required:!1,type:{name:"boolean"}},tabLayout:{defaultValue:{value:"TabLayout.Standard"},description:"Defines the alignment of the content and the `additionalText` of a tab.\n\n**Note:** The content and the `additionalText` would be displayed vertically by default, but when set to `Inline`, they would be displayed horizontally.\n\nAvailable options are:\n\n*   `Standard`\n*   `Inline`",name:"tabLayout",required:!1,type:{name:"enum",value:[{value:'"Inline"'},{value:'"Standard"'},{value:'"Inline"'},{value:'"Standard"'}]}},tabsOverflowMode:{defaultValue:{value:"TabsOverflowMode.End"},description:`Defines the overflow mode of the header (the tab strip). If you have a large number of tabs, only the tabs that can fit on screen will be visible. All other tabs that can 't fit on the screen are available in an overflow tab "More".

**Note:** Only one overflow at the end would be displayed by default, but when set to \`StartAndEnd\`, there will be two overflows on both ends, and tab order will not change on tab selection.

Available options are:

*   \`End\`
*   \`StartAndEnd\``,name:"tabsOverflowMode",required:!1,type:{name:"enum",value:[{value:'"End"'},{value:'"End"'},{value:'"StartAndEnd"'},{value:'"StartAndEnd"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{k as T,E as a,q as b,S as c,I as d};
//# sourceMappingURL=index-c3f58af4.js.map
