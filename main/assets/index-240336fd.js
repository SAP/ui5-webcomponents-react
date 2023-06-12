import{_ as P}from"./iframe-e4a895a3.js";import{a as w,U as H,d as oe}from"./UI5Element-b1843653.js";import{e as c,l,s as R,a as O,b as V,p as r,c as q,d as z,w as W}from"./withWebComponent-7b9bd1ee.js";import{c as I,e as _}from"./Icon-aac9cdc2.js";import{s as U}from"./slot-76e48863.js";import{R as ie}from"./ResizeHandler-8726336f.js";import{I as fe,N as be}from"./ItemNavigation-5f1efe0b.js";import{I as ce}from"./Integer-f7f172c9.js";import{k as Y,e as ue,K as ge,S as se,T as _e,v as K,w as J,I as ve,J as we,O as le,P as ae,c as x,b as D,U as ye}from"./Icons-9f549e0f.js";import{g as X,a as re,i as Te,b as he}from"./TabbableElements-8e49b367.js";import{g as pe}from"./getActiveElement-bcae01ed.js";import{g as Ce}from"./AriaLabelHelper-43a261ec.js";import{d as Se}from"./debounce-9c2fb7dd.js";import{B as xe}from"./BusyIndicator-50734768.js";import me from"./CheckBox-f1563b72.js";import{a8 as Ee,t as Re,a9 as ke,aa as Ie,ab as $e,y as Ne,z as Be,ac as De}from"./i18n-defaults-fca59c5d.js";import{s as de}from"./style-map-0c64293c.js";import{g as Le}from"./MarkedEvents-b83081e9.js";var Z;(function(i){i.Block="Block",i.Inline="Inline"})(Z||(Z={}));const $=Z;var Q;(function(i){i.Button="Button",i.Scroll="Scroll",i.None="None"})(Q||(Q={}));const N=Q;var ee;(function(i){i.None="None",i.SingleSelect="SingleSelect",i.MultiSelect="MultiSelect"})(ee||(ee={}));const g=ee;var te;(function(i){i.Inactive="Inactive",i.Active="Active"})(te||(te={}));const E=te;function Ae(i,e,t){return c`<div class="ui5-table-root" @ui5-selection-requested="${l(this._handleSelect)}" @ui5-_forward-after="${l(this._onForwardAfter)}" @ui5-_forward-before="${l(this._onForwardBefore)}" @focusin="${this._onfocusin}"><div id="${l(this._id)}-before" tabindex="0" class="ui5-table-focusarea"></div>${this.busy?Fe.call(this,i,e,t):void 0}<table border="0" cellspacing="0" cellpadding="0" @keydown="${this._onkeydown}" role="table" aria-label="${l(this.tableAriaLabelText)}"><thead><tr id="${l(this._columnHeader.id)}" class="ui5-table-header-row" aria-label="${l(this.ariaLabelText)}" tabindex="${l(this._columnHeader._tabIndex)}" @click="${this._onColumnHeaderClick}" @focusin="${this._onColumnHeaderFocused}" @keydown="${this._onColumnHeaderKeydown}">${this.isMultiSelect?Me.call(this,i,e,t):void 0}${I(this.visibleColumns,(n,o)=>n._id||o,(n,o)=>He.call(this,i,e,t,n,o))}<th class="ui5-table-header-row-navigated" aria-hidden="true"></th></tr></thead><tbody>${I(this.rows,(n,o)=>n._id||o,(n,o)=>Oe.call(this,i,e,t,n,o))}${this.rows.length?void 0:Ve.call(this,i,e,t)}${this.growsWithButton?ze.call(this,i,e,t):void 0}${this.growsOnScroll?Ue.call(this,i,e,t):void 0}</tbody></table><div id="${l(this._id)}-after" tabindex="0" class="ui5-table-focusarea"></div></div> `}function Fe(i,e,t){return t?c`<div tabindex="-1" class="ui5-table-busy-row"><${R("ui5-busy-indicator",e,t)} delay="${l(this.busyDelay)}" class="ui5-table-busy-ind" style="${de(this.styles.busy)}" active size="Medium" data-sap-focus-ref></${R("ui5-busy-indicator",e,t)}></div>`:c`<div tabindex="-1" class="ui5-table-busy-row"><ui5-busy-indicator delay="${l(this.busyDelay)}" class="ui5-table-busy-ind" style="${de(this.styles.busy)}" active size="Medium" data-sap-focus-ref></ui5-busy-indicator></div>`}function Me(i,e,t){return c`<th class="ui5-table-select-all-column" role="presentation" aria-hidden="true">${this.rows.length?Pe.call(this,i,e,t):void 0}</th>`}function Pe(i,e,t){return t?c`<${R("ui5-checkbox",e,t)} class="ui5-table-select-all-checkbox" ?checked="${this._allRowsSelected}" @ui5-change="${l(this._selectAll)}" aria-label="${l(this.ariaLabelSelectAllText)}" tabindex="-1"></${R("ui5-checkbox",e,t)}>`:c`<ui5-checkbox class="ui5-table-select-all-checkbox" ?checked="${this._allRowsSelected}" @ui5-change="${l(this._selectAll)}" aria-label="${l(this.ariaLabelSelectAllText)}" tabindex="-1"></ui5-checkbox>`}function He(i,e,t,n,o){return c`<slot name="${l(n._individualSlot)}"></slot>`}function Oe(i,e,t,n,o){return c`<slot name="${l(n._individualSlot)}"></slot>`}function Ve(i,e,t){return c`${this.hideNoData?void 0:qe.call(this,i,e,t)}`}function qe(i,e,t){return c`<tr class="ui5-table-no-data-row-root"><td colspan="${l(this.visibleColumnsCount)}" role="cell"><div class="ui5-table-no-data-row"><span>${l(this.noDataText)}</span></div></td></tr>`}function ze(i,e,t){return c`<tr><td colspan="${l(this.visibleColumnsCount)}"><div growing-button><div id="${l(this._id)}-growingButton" tabindex="0" role="button" aria-labelledby="${l(this.loadMoreAriaLabelledBy)}" ?active="${this._loadMoreActive}" @click="${this._onLoadMoreClick}" @keydown="${this._onLoadMoreKeydown}" @keyup="${this._onLoadMoreKeyup}" growing-button-inner><span id="${l(this._id)}-growingButton-text" growing-button-text>${l(this._growingButtonText)}</span>${this.growingButtonSubtext?We.call(this,i,e,t):void 0}</div></div></td></tr>`}function We(i,e,t){return c`<span id="${l(this._id)}-growingButton-subtext" growing-button-subtext>${l(this.growingButtonSubtext)}</span>`}function Ue(i,e,t){return c`<tr tabindex="-1" class="ui5-table-end-row"><td tabindex="-1"><span tabindex="-1" aria-hidden="true" class="ui5-table-end-marker"></span></td></tr>`}w("@ui5/webcomponents-theming","sap_fiori_3",async()=>O);w("@ui5/webcomponents","sap_fiori_3",async()=>V);const je={packageName:"@ui5/webcomponents",fileName:"themes/Table.css",content:`[growing-button] {
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
	display: inline-block;
	width: 100%;
}

.ui5-table-root {
	position: relative;
	border-bottom: var(--ui5_table_bottom_border);
}

table {
	width: 100%;
	border-spacing: 0;
	border-collapse: collapse;
}

.ui5-table-header-row-navigated {
    width: 0.1875rem;
    background: var(--sapList_HeaderBackground);
    vertical-align: middle;
}

.ui5-table-header-row {
	color: var(--sapList_HeaderTextColor);
	height: var(--ui5_table_header_row_height);
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	font-weight: var(--ui5_table_header_row_font_weight);
	border-bottom: var(--ui5_table_header_row_border_width) solid var(--ui5_table_header_row_border_bottom_color);
}

.ui5-table-header-row:focus {
	outline: var(--ui5_table_header_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	outline-offset: var(--ui5_table_focus_outline_offset);
}

tr {
	height: 3rem;
}

.ui5-table-no-data-row {
	display: flex;
	align-items: center;
	width: 100%;
	height: auto;
	justify-content: center;
	text-align: center;
	padding: 0.5rem 1rem;
	font-family: "72override", var(--sapFontFamily);
	font-size: 0.875rem;
	box-sizing: border-box;
	color: var(--sapTextColor);
	min-height: 3rem;
	background-color: var(--sapList_Background);
}

.ui5-table-end-row {
	height: 0px;
}

:host([busy]) .ui5-table-busy-row {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	outline: none;
}

:host([busy]) .ui5-table-busy-ind {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
}

:host([busy]) [growing-button] {
	opacity: 0.72;
}

:host [growing-button] {
	border-bottom: var(--_ui5_table_load_more_border-bottom);
}

.ui5-table-select-all-column {
	width: var(--ui5_table_multiselect_column_width);
	text-align: center;
}

:host([sticky-column-header]) .ui5-table-header-row {
	position: sticky;
	top: 0;
	z-index: 99;
}

th {
	background: var(--sapList_HeaderBackground);
}

.ui5-table-focusarea {
	position: fixed;
}
`};var h=globalThis&&globalThis.__decorate||function(i,e,t,n){var o=arguments.length,s=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var d=i.length-1;d>=0;d--)(a=i[d])&&(s=(o<3?a(s):o>3?a(e,t,s):a(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s},y;const Ge=250,Ke=20;var p;(function(i){i.Row="tableRow",i.GroupRow="tableGroupRow",i.ColumnHeader="columnHeader",i.MoreButton="moreButton"})(p||(p={}));let u=y=class extends H{static async onDefine(){y.i18nBundle=await oe("@ui5/webcomponents")}constructor(){super(),this.visibleColumns=[],this._columnHeader={id:`${this._id}-columnHeader`,_tabIndex:"0"},this._itemNavigation=new fe(this,{navigationMode:be.Vertical,affectedPropertiesNames:["_columnHeader"],getItemsCallback:()=>[this._columnHeader,...this.rows],skipItemsSize:Ke}),this._handleResize=this.popinContent.bind(this),this.fnOnRowFocused=this.onRowFocused.bind(this),this.fnHandleF7=this._handleF7.bind(this),this.tableEndObserved=!1,this.lastFocusedElement=null,this._forwardingFocus=!1,this._prevNestedElementIndex=0}onBeforeRendering(){const e=this.getColumnPropagationSettings(),t=JSON.stringify(e),n=this.rows.length+1,o=this.selectedRows;this.rows.forEach((s,a)=>{s._columnsInfoString!==t&&(s._columnsInfo=e,s._columnsInfoString=JSON.stringify(s._columnsInfo)),s._ariaPosition=y.i18nBundle.getText(Ee,a+2,n),s._busy=this.busy,s.removeEventListener("ui5-_focused",this.fnOnRowFocused),s.addEventListener("ui5-_focused",this.fnOnRowFocused),s.removeEventListener("ui5-f7-pressed",this.fnHandleF7),s.addEventListener("ui5-f7-pressed",this.fnHandleF7),s.mode=this.mode}),this.visibleColumns=this.columns.filter((s,a)=>!this._hiddenColumns[a]),this._noDataDisplayed=!this.rows.length&&!this.hideNoData,this.visibleColumnsCount=this.visibleColumns.length,this.isMultiSelect&&(this.visibleColumnsCount+=1),this._allRowsSelected=o.length===this.rows.length,this._prevFocusedRow=this._prevFocusedRow||this.rows[0]}onAfterRendering(){this.growsOnScroll&&this.observeTableEnd(),this.checkTableInViewport()}onEnterDOM(){this.growingIntersectionObserver=this.getIntersectionObserver(),ie.register(this.getDomRef(),this._handleResize),this._itemNavigation.setCurrentItem(this.rows.length?this.rows[0]:this._columnHeader)}onExitDOM(){ie.deregister(this.getDomRef(),this._handleResize),this.growingIntersectionObserver.disconnect(),this.growingIntersectionObserver=null,this.tableEndObserved=!1}_onkeydown(e){(Y(e)||ue(e))&&this._handleTab(e),ge(e)&&(e.preventDefault(),this.isMultiSelect&&this._selectAll()),(se(e)||_e(e))&&this._handleArrowAlt(e),(K(e)||J(e))&&this.isMultiSelect&&this._handleArrowNav(e),ve(e)&&(e.preventDefault(),this._itemNavigation._handleHome(),this._itemNavigation._applyTabIndex(),this._itemNavigation._focusCurrentItem()),we(e)&&(e.preventDefault(),this._itemNavigation._handleEnd(),this._itemNavigation._applyTabIndex(),this._itemNavigation._focusCurrentItem()),(le(e)||ae(e))&&this.isMultiSelect&&this._handleHomeEndSelection(e)}_handleTab(e){var s;const t=Y(e),n=X(e.target),o=this.getFocusedElementType(e.target);if(this.columnHeaderTabbables.includes(n))return t&&this.columnHeaderLastElement===n?this._focusNextElement():void 0;if(t&&o===p.ColumnHeader&&!this.columnHeaderTabbables.length)return this._focusNextElement();if(!(o===p.Row||!o))switch(o){case p.GroupRow:return t?this._focusNextElement():this._focusForwardElement(!1);case p.ColumnHeader:return!t&&this._focusForwardElement(!1);case p.MoreButton:t?this._focusForwardElement(!0):(e.preventDefault(),(s=this.currentElement)==null||s.focus())}}_focusNextElement(){this.growsWithButton?this.morеBtn.focus():this._focusForwardElement(!0)}_handleArrowNav(e){if(!(this.currentElement.localName==="tr"))return;const n=this.selectedRows,o=this.currentItem,s=this.currentItemIdx,a=s-1,d=s+1,C=this.rows[a],k=this.rows[d],j=!!o.selected;if(K(e)&&!C||J(e)&&!k)return;K(e)&&(o.selected=o.selected&&!C.selected,C.selected=o.selected||j&&!o.selected,C.focus()),J(e)&&(o.selected=o.selected&&!k.selected,k.selected=o.selected||j&&!o.selected,k.focus());const G=this.selectedRows;this.fireEvent("selection-change",{selectedRows:G,previouslySelectedRows:n})}_handleHomeEndSelection(e){if(!(this.currentElement.localName==="tr"))return;const n=this.rows,o=this.selectedRows,s=this.currentItemIdx;le(e)&&(n.slice(0,s+1).forEach(d=>{d.selected=!0}),n[0].focus()),ae(e)&&(n.slice(s).forEach(d=>{d.selected=!0}),n[n.length-1].focus());const a=this.selectedRows;this.fireEvent("selection-change",{selectedRows:a,previouslySelectedRows:o})}_handleArrowAlt(e){var s;const t=se(e),n=e.target,o=this.getFocusedElementType(n);if(t)switch(o){case p.Row:case p.GroupRow:return this._prevFocusedRow=n,this._onColumnHeaderClick(e);case p.ColumnHeader:return this.morеBtn?this.morеBtn.focus():(s=this._prevFocusedRow)==null?void 0:s.focus();case p.MoreButton:return this._prevFocusedRow?this._prevFocusedRow.focus():this._onColumnHeaderClick(e)}else switch(o){case p.Row:case p.GroupRow:return this._prevFocusedRow=n,this.morеBtn?this.morеBtn.focus():this._onColumnHeaderClick(e);case p.ColumnHeader:this._prevFocusedRow?this._prevFocusedRow.focus():this.morеBtn&&this.morеBtn.focus();return;case p.MoreButton:return this._onColumnHeaderClick(e)}}getFocusedElementType(e){if(e===this.columnHeader)return p.ColumnHeader;if(e===this.morеBtn)return p.MoreButton;if(this.rows.includes(e))return e.hasAttribute("ui5-table-group-row")?p.GroupRow:p.Row}_handleF7(e){const t=e.detail.row;t._tabbables=re(t);const n=pe(),o=t._tabbables[this._prevNestedElementIndex]||t._tabbables[0],s=t._tabbables.indexOf(n);t._tabbables.length&&(n===t.root?o.focus():s>-1&&(this._prevNestedElementIndex=s,t.root.focus()))}_onfocusin(e){const t=X(e.target);if(!this._isForwardElement(t)){this.lastFocusedElement=t;return}this._forwardingFocus||(this.lastFocusedElement?this.lastFocusedElement.focus():this.currentElement.focus(),e.stopImmediatePropagation()),this._forwardingFocus=!1}_onForwardBefore(e){this.lastFocusedElement=e.detail.target,this._focusForwardElement(!1),e.stopImmediatePropagation()}_onForwardAfter(e){this.lastFocusedElement=e.detail.target,this.growsWithButton?this.morеBtn.focus():this._focusForwardElement(!0)}_focusForwardElement(e){this._forwardingFocus=!0,this.shadowRoot.querySelector(`#${this._id}-${e?"after":"before"}`).focus()}_isForwardElement(e){const t=e.id,n=this._getForwardElement(!0),o=this._getForwardElement(!1);return this._id===t||o&&o.id===t?!0:!!(n&&n.id===t)}_getForwardElement(e){return e?this._getAfterForwardElement():this._getBeforeForwardElement()}_getAfterForwardElement(){return this._afterElement||(this._afterElement=this.shadowRoot.querySelector(`#${this._id}-after`)),this._afterElement}_getBeforeForwardElement(){return this._beforeElement||(this._beforeElement=this.shadowRoot.querySelector(`#${this._id}-before`)),this._beforeElement}onRowFocused(e){this._itemNavigation.setCurrentItem(e.target)}_onColumnHeaderFocused(){this._itemNavigation.setCurrentItem(this._columnHeader)}_onColumnHeaderClick(e){e.target||this.columnHeader.focus();const t=X(e.target);this.columnHeaderTabbables.includes(t)||this.columnHeader.focus()}_onColumnHeaderKeydown(e){x(e)&&(e.preventDefault(),this.isMultiSelect&&this._selectAll())}_onLoadMoreKeydown(e){x(e)&&(e.preventDefault(),this._loadMoreActive=!0),D(e)&&(this._onLoadMoreClick(),this._loadMoreActive=!0)}_onLoadMoreKeyup(e){x(e)&&this._onLoadMoreClick(),this._loadMoreActive=!1}_onLoadMoreClick(){this.fireEvent("load-more")}observeTableEnd(){this.tableEndObserved||(this.getIntersectionObserver().observe(this.tableEndDOM),this.tableEndObserved=!0)}onInteresection(e){e.some(t=>t.isIntersecting)&&Se(this.loadMore.bind(this),Ge)}loadMore(){this.fireEvent("load-more")}_handleSingleSelect(e){const t=this.getRowParent(e.target);if(t&&!t.selected){const n=this.selectedRows;this.rows.forEach(o=>{o.selected&&(o.selected=!1)}),t.selected=!0,this.fireEvent("selection-change",{selectedRows:[t],previouslySelectedRows:n})}}_handleMultiSelect(e){const t=this.getRowParent(e.target),n=this.selectedRows;if(!t)return;t.selected=!t.selected;const o=this.selectedRows;o.length===this.rows.length?this._allRowsSelected=!0:this._allRowsSelected=!1,this.fireEvent("selection-change",{selectedRows:o,previouslySelectedRows:n})}_handleSelect(e){if(this.isSingleSelect){this._handleSingleSelect(e);return}this.isMultiSelect&&this._handleMultiSelect(e)}_selectAll(){const e=!this._allRowsSelected,t=this.rows.filter(o=>o.selected);this._allRowsSelected=e,this.rows.forEach(o=>{o.selected=e});const n=e?this.rows:[];this.fireEvent("selection-change",{selectedRows:n,previouslySelectedRows:t})}getRowParent(e){if(e.hasAttribute("ui5-table-row"))return e;const t=e.parentElement;if(t)return t.hasAttribute("ui5-table-row")?t:this.getRowParent(t)}get columnHeader(){const e=this.getDomRef();return e?e.querySelector(`#${this._id}-columnHeader`):null}get morеBtn(){const e=this.getDomRef();return this.growsWithButton&&e?e.querySelector(`#${this._id}-growingButton`):null}handleResize(){this.checkTableInViewport(),this.popinContent()}checkTableInViewport(){this._inViewport=Te(this.getDomRef())}popinContent(){const t=this.getDomRef().getBoundingClientRect().width,n=[],o=[];this.columns.forEach((a,d)=>{t<a.minWidth&&a.minWidth!==1/0?n[d]={index:d,popinText:a.popinText,demandPopin:a.demandPopin}:o.push(d)}),o.length&&(this.isMultiSelect||(this.columns[o[0]].first=!0),this.columns[o[o.length-1]].last=!0),(this._hiddenColumns.length!==n.length||this._hiddenColumns.some((a,d)=>a!==n[d]))&&(this._hiddenColumns=n,n.length&&this.fireEvent("popin-change",{poppedColumns:this._hiddenColumns}))}getColumnPropagationSettings(){return this.columns.map((e,t)=>({index:t,minWidth:e.minWidth,demandPopin:e.demandPopin,text:e.textContent,popinText:e.popinText,popinDisplay:e.popinDisplay,visible:!this._hiddenColumns[t]}),this)}getIntersectionObserver(){return this.growingIntersectionObserver||(this.growingIntersectionObserver=new IntersectionObserver(this.onInteresection.bind(this),{root:document,rootMargin:"0px",threshold:1})),this.growingIntersectionObserver}get styles(){return{busy:{position:this.busyIndPosition}}}get growsWithButton(){return this.growing===N.Button}get growsOnScroll(){return this.growing===N.Scroll}get _growingButtonText(){return this.growingButtonText||y.i18nBundle.getText(Re)}get ariaLabelText(){const e=this.rows.length+1,t=y.i18nBundle.getText(ke,e),n=this.columns.map(o=>o.textContent.trim()).join(" ");return`${t} ${n}`}get tableAriaLabelText(){return Ce(this)}get ariaLabelSelectAllText(){return y.i18nBundle.getText(Ie)}get loadMoreAriaLabelledBy(){return this.moreDataText?`${this._id}-growingButton-text ${this._id}-growingButton-subtext`:`${this._id}-growingButton-text`}get tableEndDOM(){return this.shadowRoot.querySelector(".ui5-table-end-marker")}get busyIndPosition(){return this._inViewport?"absolute":"sticky"}get isMultiSelect(){return this.mode===g.MultiSelect}get isSingleSelect(){return this.mode===g.SingleSelect}get selectedRows(){return this.rows.filter(e=>e.selected)}get currentItemIdx(){return this.rows.indexOf(this.currentItem)}get currentItem(){return this.getRootNode().activeElement}get currentElement(){return this._itemNavigation._getCurrentItem()}get columnHeaderTabbables(){return this.columnHeader?re(this.columnHeader):[]}get columnHeaderLastElement(){return this.columnHeader&&he(this.columnHeader)}};h([r()],u.prototype,"noDataText",void 0);h([r()],u.prototype,"growingButtonText",void 0);h([r()],u.prototype,"growingButtonSubtext",void 0);h([r({type:Boolean})],u.prototype,"hideNoData",void 0);h([r({type:N,defaultValue:N.None})],u.prototype,"growing",void 0);h([r({type:Boolean})],u.prototype,"busy",void 0);h([r({validator:ce,defaultValue:1e3})],u.prototype,"busyDelay",void 0);h([r({type:Boolean})],u.prototype,"stickyColumnHeader",void 0);h([r({type:g,defaultValue:g.None})],u.prototype,"mode",void 0);h([r({defaultValue:void 0})],u.prototype,"accessibleName",void 0);h([r({defaultValue:""})],u.prototype,"accessibleNameRef",void 0);h([r({type:Object,multiple:!0})],u.prototype,"_hiddenColumns",void 0);h([r({type:Boolean})],u.prototype,"_noDataDisplayed",void 0);h([r({type:Boolean})],u.prototype,"_loadMoreActive",void 0);h([r({type:Object})],u.prototype,"_columnHeader",void 0);h([r({type:Boolean})],u.prototype,"_inViewport",void 0);h([r({type:Boolean})],u.prototype,"_allRowsSelected",void 0);h([U({type:HTMLElement,default:!0,individualSlots:!0,invalidateOnChildChange:!0})],u.prototype,"rows",void 0);h([U({type:HTMLElement,individualSlots:!0,invalidateOnChildChange:{properties:!0,slots:!1}})],u.prototype,"columns",void 0);u=y=h([q({tag:"ui5-table",fastNavigation:!0,styles:je,renderer:z,template:Ae,dependencies:[xe,me]}),_("row-click",{detail:{row:{type:HTMLElement}}}),_("popin-change",{detail:{poppedColumns:{type:Array}}}),_("load-more"),_("selection-change",{detail:{selectedRows:{type:Array},previouslySelectedRows:{type:Array}}})],u);u.define();const Je=u,Xe=Object.freeze(Object.defineProperty({__proto__:null,default:Je},Symbol.toStringTag,{value:"Module"})),A=W("ui5-table",["accessibleName","accessibleNameRef","busyDelay","growing","growingButtonSubtext","growingButtonText","mode","noDataText"],["busy","hideNoData","stickyColumnHeader"],["columns"],["load-more","popin-change","row-click","selection-change"],()=>P(()=>Promise.resolve().then(()=>Xe),void 0,import.meta.url));A.displayName="Table";A.defaultProps={busyDelay:1e3,growing:N.None,mode:g.None};try{A.displayName="Table",A.__docgenInfo={description:'The `Table` component provides a set of sophisticated and convenient functions for responsive table design. It provides a comprehensive set of features for displaying and dealing with vast amounts of data.\n\nTo render the `Table` properly, the order of the `columns` should match with the order of the item `cells` in the `rows`.\n\nDesktop and tablet devices are supported. On tablets, special consideration should be given to the number of visible columns and rows due to the limited performance of some devices.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Table" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"Table",props:{columns:{defaultValue:null,description:`Defines the configuration for the columns of the component.

**Note:** Use \`TableColumn\` for the intended design.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="columns"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"columns",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},children:{defaultValue:null,description:"Defines the component rows.\n\n**Note:** Use `TableRow` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onLoadMore:{defaultValue:null,description:"Fired when the user presses the `More` button or scrolls to the table's end.\n\n**Note:** The event will be fired if `growing` is set to `Button` or `Scroll`.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, never>) => void"}},onPopinChange:{defaultValue:null,description:"Fired when `TableColumn` is shown as a pop-in instead of hiding it.",name:"onPopinChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, TablePopinChangeEventDetail>) => void"}},onRowClick:{defaultValue:null,description:"Fired when a row in `Active` mode is clicked or `Enter` key is pressed.",name:"onRowClick",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, TableRowClickEventDetail>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction in `SingleSelect` and `MultiSelect` modes.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, TableSelectionChangeEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},busy:{defaultValue:null,description:"Defines if the table is in busy state. **In this state the component's opacity is reduced and busy indicator is displayed at the bottom of the table.**",name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"busyDelay",required:!1,type:{name:"number"}},growing:{defaultValue:{value:"TableGrowingMode.None"},description:'Defines whether the table will have growing capability either by pressing a `More` button, or via user scroll. In both cases `onLoadMore` event is fired.\n\nAvailable options:\n\n`Button` - Shows a `More` button at the bottom of the table, pressing of which triggers the `onLoadMore` event.\n`Scroll` - The `onLoadMore` event is triggered when the user scrolls to the bottom of the table;\n`None` (default) - The growing is off.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer, and the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'}]}},growingButtonSubtext:{defaultValue:null,description:"Defines the subtext that will be displayed under the `growingButtonText`.\n\n**Note:** This property takes effect if `growing` is set to `Button`.",name:"growingButtonSubtext",required:!1,type:{name:"string"}},growingButtonText:{defaultValue:null,description:"Defines the text that will be displayed inside the growing button at the bottom of the table, meant for loading more rows upon press.\n\n**Note:** If not specified a built-in text will be displayed.\n**Note:** This property takes effect if `growing` is set to `Button`.",name:"growingButtonText",required:!1,type:{name:"string"}},hideNoData:{defaultValue:null,description:"Defines if the value of `noDataText` will be diplayed when there is no rows present in the table.",name:"hideNoData",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"TableMode.None"},description:"Defines the mode of the component.\n\nAvailable options are:\n\n*   `MultiSelect`\n*   `SingleSelect`\n*   `None`",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"SingleSelect"'},{value:'"MultiSelect"'},{value:'"None"'},{value:'"SingleSelect"'},{value:'"MultiSelect"'}]}},noDataText:{defaultValue:null,description:"Defines the text that will be displayed when there is no data and `hideNoData` is not present.",name:"noDataText",required:!1,type:{name:"string"}},stickyColumnHeader:{defaultValue:null,description:`Determines whether the column headers remain fixed at the top of the page during vertical scrolling as long as the Web Component is in the viewport.

**Restrictions:**

*   Browsers that do not support this feature:
    *   Internet Explorer
    *   Microsoft Edge lower than version 41 (EdgeHTML 16)
    *   Mozilla Firefox lower than version 59
*   Scrolling behavior:
    *   If the Web Component is placed in layout containers that have the \`overflow: hidden\` or \`overflow: auto\` style definition, this can prevent the sticky elements of the Web Component from becoming fixed at the top of the viewport.`,name:"stickyColumnHeader",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function Ye(i,e,t){return c`<td tabindex="-1" part="cell" role="cell"><slot></slot></td>`}w("@ui5/webcomponents-theming","sap_fiori_3",async()=>O);w("@ui5/webcomponents","sap_fiori_3",async()=>V);const Ze={packageName:"@ui5/webcomponents",fileName:"themes/TableCell.css",content:`:host {
	display: table-cell;
	font-family: "72override", var(--sapFontFamily);
	font-size: 0.875rem;
	height: var(--ui5_table_row_height);
	box-sizing: border-box;
	color: var(--sapContent_LabelColor);
	word-break: break-word;
	vertical-align: middle;
}

td {
	display: contents;
}

:host([popined]) {
	padding-left: 0;
	padding-top: .25rem;
}

:host([_popined-inline]) {
	padding-top: 0;
}

::slotted([ui5-label]) {
	color: inherit;
}`};var B=globalThis&&globalThis.__decorate||function(i,e,t,n){var o=arguments.length,s=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var d=i.length-1;d>=0;d--)(a=i[d])&&(s=(o<3?a(s):o>3?a(e,t,s):a(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s},L;let v=L=class extends H{static async onDefine(){L.i18nBundle=await oe("@ui5/webcomponents")}get cellContent(){return this.getSlottedNodes("content")}get ariaLabelEmptyCellText(){return L.i18nBundle.getText($e)}};B([r({type:Boolean})],v.prototype,"lastInRow",void 0);B([r({type:Boolean})],v.prototype,"popined",void 0);B([r({type:Boolean})],v.prototype,"_popinedInline",void 0);B([U({type:HTMLElement,default:!0})],v.prototype,"content",void 0);v=L=B([q({tag:"ui5-table-cell",renderer:z,template:Ye,styles:Ze})],v);v.define();const Qe=v,et=Object.freeze(Object.defineProperty({__proto__:null,default:Qe},Symbol.toStringTag,{value:"Module"})),ne=W("ui5-table-cell",[],[],[],[],()=>P(()=>Promise.resolve().then(()=>et),void 0,import.meta.url));ne.displayName="TableCell";try{ne.displayName="TableCell",ne.__docgenInfo={description:'The `TableCell` component defines the structure of the data in a single `Table` cell.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Table" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TableCell",props:{children:{defaultValue:null,description:"Specifies the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function tt(i,e,t){return c`<th scope="col" part="column" role="columnheader"><slot></slot></th>`}w("@ui5/webcomponents-theming","sap_fiori_3",async()=>O);w("@ui5/webcomponents","sap_fiori_3",async()=>V);const nt={packageName:"@ui5/webcomponents",fileName:"themes/TableColumn.css",content:`:host {
	display: contents;
}

th {
	background: var(--sapList_HeaderBackground);
	width: inherit;
	font-weight: var(--ui5_table_header_row_font_weight);
	font-size: var(--sapFontMediumSize);
	padding: 0.5rem;
	box-sizing: border-box;
	text-align: start;
	vertical-align: middle;
}

:host([first]) th {
	padding-inline-start: 1rem;
}

th ::slotted([ui5-label]) {
	font-weight: var(--ui5_table_header_row_font_weight);
	font-size: var(--sapFontMediumSize);
}`};var T=globalThis&&globalThis.__decorate||function(i,e,t,n){var o=arguments.length,s=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var d=i.length-1;d>=0;d--)(a=i[d])&&(s=(o<3?a(s):o>3?a(e,t,s):a(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let b=class extends H{};T([r({validator:ce,defaultValue:1/0})],b.prototype,"minWidth",void 0);T([r()],b.prototype,"popinText",void 0);T([r({type:Boolean})],b.prototype,"demandPopin",void 0);T([r({type:$,defaultValue:$.Block})],b.prototype,"popinDisplay",void 0);T([r({type:Boolean})],b.prototype,"first",void 0);T([r({type:Boolean})],b.prototype,"last",void 0);b=T([q({tag:"ui5-table-column",styles:nt,renderer:z,template:tt})],b);b.define();const ot=b,it=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"})),F=W("ui5-table-column",["minWidth","popinDisplay","popinText"],["demandPopin"],[],[],()=>P(()=>Promise.resolve().then(()=>it),void 0,import.meta.url));F.displayName="TableColumn";F.defaultProps={minWidth:1/0,popinDisplay:$.Block};try{F.displayName="TableColumn",F.__docgenInfo={description:'The `TableColumn` component allows to define column specific properties that are applied when rendering the `Table` component.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Table" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TableColumn",props:{children:{defaultValue:null,description:"Defines the content of the column header.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},demandPopin:{defaultValue:null,description:"According to your `minWidth` settings, the component can be hidden in different screen sizes.\n\nSetting this property to `true`, shows this column as pop-in instead of hiding it.",name:"demandPopin",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"Defines the minimum table width required to display this column. By default it is always displayed.\n\nThe responsive behavior of the `Table` is determined by this property. As an example, by setting `minWidth` property to `400` sets the minimum width to 400 pixels, and shows this column on tablet (and desktop) but hides it on mobile.\nFor further responsive design options, see `demandPopin` property.",name:"minWidth",required:!1,type:{name:"number"}},popinDisplay:{defaultValue:{value:"TableColumnPopinDisplay.Block"},description:`Defines how the popin row is displayed.

**The available values are:**

*   \`Block\`
*   \`Inline\``,name:"popinDisplay",required:!1,type:{name:"enum",value:[{value:'"Block"'},{value:'"Inline"'},{value:'"Block"'},{value:'"Inline"'}]}},popinText:{defaultValue:null,description:"The text for the column when it pops in.",name:"popinText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function st(i,e,t){return c`<tr class="ui5-table-row-root" tabindex="${l(this._tabIndex)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @click="${this._onrowclick}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @mouseup="${this._onmouseup}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" aria-label="${l(this.ariaLabelText)}" aria-selected="${l(this.selected)}" aria-current="${l(this._ariaCurrent)}" data-sap-focus-ref part="row" data-ui5-dir="${l(this.effectiveDir)}">${this.isMultiSelect?lt.call(this,i,e,t):void 0}${this.shouldPopin?at.call(this,i,e,t):dt.call(this,i,e,t)}<td class="ui5-table-row-navigated" aria-hidden="true"><div class="ui5-table-div-navigated"></div></td></tr>${this.shouldPopin?ut.call(this,i,e,t):void 0} `}function lt(i,e,t){return t?c`<td class="ui5-table-multi-select-cell" aria-hidden="true" role="presentation"><${R("ui5-checkbox",e,t)} class="ui5-multi-select-checkbox" ?checked="${this.selected}" aria-label="${l(this.ariaLabelRowSelection)}" @ui5-change="${l(this._handleSelection)}" tabindex="-1"></${R("ui5-checkbox",e,t)}></td>`:c`<td class="ui5-table-multi-select-cell" aria-hidden="true" role="presentation"><ui5-checkbox class="ui5-multi-select-checkbox" ?checked="${this.selected}" aria-label="${l(this.ariaLabelRowSelection)}" @ui5-change="${l(this._handleSelection)}" tabindex="-1"></ui5-checkbox></td>`}function at(i,e,t){return c`${I(this.visibleCells,(n,o)=>n._id||o,(n,o)=>rt.call(this,i,e,t,n,o))}`}function rt(i,e,t,n,o){return c`<slot name="${l(n._individualSlot)}"></slot>`}function dt(i,e,t){return c`${I(this.cells,(n,o)=>n._id||o,(n,o)=>ct.call(this,i,e,t,n,o))}`}function ct(i,e,t,n,o){return c`<slot name="${l(n._individualSlot)}"></slot>`}function ut(i,e,t){return c`${I(this.popinCells,(n,o)=>n._id||o,(n,o)=>ht.call(this,i,e,t,n,o))}`}function ht(i,e,t,n,o){return c`<tr part="popin-row" class="${l(n.classes)}" @click="${this._onrowclick}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}"><td colspan="${l(this.visibleCellsCount)}" role="cell">${n.popinDisplayInline?pt.call(this,i,e,t,n,o):ft.call(this,i,e,t,n,o)}</td><td class="ui5-table-row-navigated" aria-hidden="true"><div class="ui5-table-div-navigated"></div></td></tr>`}function pt(i,e,t,n,o){return c`<div class="ui5-table-display-inline-container">${n.popinText?mt.call(this,i,e,t,n,o):void 0}<span class="ui5-table-cell-display-inline"><slot name="${l(n.cell._individualSlot)}"></slot></span></div>`}function mt(i,e,t,n,o){return c`<span class="ui5-table-row-popin-title">${l(n.popinText)}:</span>`}function ft(i,e,t,n,o){return c`${n.popinText?bt.call(this,i,e,t,n,o):void 0}<div><slot name="${l(n.cell._individualSlot)}"></slot></div>`}function bt(i,e,t,n,o){return c`<span class="ui5-table-row-popin-title">${l(n.popinText)}:</span>`}w("@ui5/webcomponents-theming","sap_fiori_3",async()=>O);w("@ui5/webcomponents","sap_fiori_3",async()=>V);const gt={packageName:"@ui5/webcomponents",fileName:"themes/TableRow.css",content:`:host {
	display: contents;
}

:host([_busy]) .ui5-table-row-root {
	opacity: 0.72;
	pointer-events: none;
}

.ui5-table-row-root {
	background-color: var(--sapList_Background);
	color: var(--sapList_TextColor);
	border-top: 1px solid var(--sapList_BorderColor);
}

.ui5-table-row-root:focus {
	outline: var(--ui5_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	outline-offset: var(--ui5_table_focus_outline_offset);
}

.ui5-table-popin-row {
	background-color: var(--sapList_Background);
}

.ui5-table-popin-row.all-columns-popped-in.popin-header {
	border-top: 1px solid var(--sapList_BorderColor);
}

.ui5-table-popin-row td:not(.ui5-table-row-navigated) {
	padding-top: .5rem;
	padding-inline-start: 1rem;
}

.ui5-table-popin-row:last-child td {
	padding-bottom: .5rem;
}

.ui5-table-row-popin-title {
	color: var(--sapContent_LabelColor);
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
}

.ui5-table-cell-display-inline {
	margin-inline-start: 0.5rem;
}

.ui5-table-display-inline-container {
	display: flex;
	align-items: center;
}

.ui5-table-multi-select-cell {
	padding: .25rem 0;
	box-sizing: border-box;
	text-align: center;
	vertical-align: middle;
}

:host([mode="SingleSelect"]) .ui5-table-row-root {
	cursor: pointer;
}

:host([mode="MultiSelect"]) .ui5-table-row-root .ui5-table-multi-select-cell {
	cursor: pointer;
}

:host ::slotted([ui5-table-cell]:not([popined])) {
	padding: .25rem .5rem;
}

:host(:not([mode="MultiSelect"])) ::slotted([ui5-table-cell]:not([popined]):first-child) {
	padding-inline-start: 1rem;
}

/** Hover **/

:host([type="Active"]) .ui5-table-row-root:hover,
:host([mode="SingleSelect"]) .ui5-table-row-root:hover:not(:active) {
	background-color: var(--sapList_Hover_Background);
}

/** Down/Active **/

:host([type="Active"]) .ui5-table-row-root:active,
:host([selected][type="Active"]) .ui5-table-row-root:active {
	background-color: var(--sapList_Active_Background);
}

:host([type="Active"]) .ui5-table-row-root:active ::slotted([ui5-table-cell]) {
	color: var(--sapList_Active_TextColor);
}

/** Selected **/

:host([selected]) .ui5-table-row-root:not(:active) {
	background-color: var(--sapList_SelectionBackgroundColor);
	border-bottom: 1px solid var(--sapList_SelectionBorderColor);
}

/** Hover on Selected **/

:host([selected][type="Active"]) .ui5-table-row-root:hover:not(:active),
:host([selected][mode="SingleSelect"]) .ui5-table-row-root:hover:not(:active) {
	background-color: var(--sapList_Hover_SelectionBackground);
}

/** Navigated **/

:host([navigated]) .ui5-table-row-root:focus .ui5-table-div-navigated {
    width: 0.09375rem;
	top: 2px;
	inset-inline-end: 2px;
	bottom: 1px;
}

:host([navigated]) .ui5-table-row-navigated {
    vertical-align: middle;
    padding: 0;
    position: relative;
}

:host([navigated]) .ui5-table-div-navigated {
	width: 0.1875rem;
    position: absolute;
	inset: 0;
    background-color: var(--sapList_SelectionBorderColor);
}
`};var f=globalThis&&globalThis.__decorate||function(i,e,t,n){var o=arguments.length,s=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var d=i.length-1;d>=0;d--)(a=i[d])&&(s=(o<3?a(s):o>3?a(e,t,s):a(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s},S;let m=S=class extends H{constructor(){super(),this.visibleCells=[],this.popinCells=[],this._tabbables=[],this._columnsInfoString="";const e=()=>{this.activate()};this._ontouchstart={handleEvent:e,passive:!0}}_onmouseup(){this.deactivate()}_onkeydown(e){const t=pe(),n=this.type===E.Active,o=this.isSingleSelect,s=o||this.isMultiSelect,a=this._activeElementHasAttribute("ui5-table-row"),d=e.target,C=d.classList.contains("ui5-multi-select-checkbox"),G=Array.from(this.shadowRoot.querySelectorAll("tr")||[]).map(he).pop();Y(e)&&t===(G||this.root)&&this.fireEvent("_forward-after",{target:t}),ue(e)&&t===this.root&&this.fireEvent("_forward-before",{target:t}),x(e)&&d.tagName.toLowerCase()==="tr"&&e.preventDefault(),a&&!C&&((x(e)&&s||D(e)&&o)&&this.fireEvent("selection-requested",{row:this}),D(e)&&n&&(this.fireEvent("row-click",{row:this}),o||this.activate())),ye(e)&&(e.preventDefault(),this.fireEvent("f7-pressed",{row:this}))}_onkeyup(e){(x(e)||D(e))&&this.deactivate()}_ontouchend(){this.deactivate()}_onfocusout(){this.deactivate()}_onfocusin(e,t=!1){(t||this._activeElementHasAttribute("ui5-table-cell"))&&(this.root.focus(),this.activate()),this.fireEvent("_focused")}_onrowclick(e){const t=e.target.classList.contains("ui5-multi-select-checkbox");if(Le(e)==="button")return;const n=this.getRootNode().activeElement;this.contains(n)||(this._onfocusin(e,!0),this.deactivate()),this._activeElementHasAttribute("ui5-table-row")&&(this.isSingleSelect&&this._handleSelection(),this.type===E.Active&&!t&&this.fireEvent("row-click",{row:this}))}_handleSelection(){this.fireEvent("selection-requested",{row:this})}_activeElementHasAttribute(e){return this.getRootNode().activeElement.hasAttribute(e)}get _ariaCurrent(){return this.navigated?!0:void 0}activate(){this.type===E.Active&&(this.active=!0)}deactivate(){this.active&&(this.active=!1)}get shouldPopin(){return this._columnsInfo.filter(e=>e.demandPopin||!e.visible).length}get allColumnsPoppedIn(){return this._columnsInfo.every(e=>e.demandPopin&&!e.visible)}onBeforeRendering(){if(!this.shouldPopin||(this.visibleCells=[],this.popinCells=[],this.cells.length===0))return;const e=this.allColumnsPoppedIn?"all-columns-popped-in":"";this._columnsInfo.forEach((n,o)=>{const s=this.cells[o],a=n.popinDisplay===$.Inline;if(s)if(n.visible)this.visibleCells.push(s),s.popined=!1,s._popinedInline=!1;else if(n.demandPopin){const d=this.popinCells.length===0?"popin-header":"";this.popinCells.push({cell:s,popinText:n.popinText,classes:`ui5-table-popin-row ${e} ${d}`,popinDisplayInline:a}),s.popined=!0,n.popinDisplay===$.Inline&&(s._popinedInline=!0)}else s.popined=!1,s._popinedInline=!1});const t=this.visibleCells[this.visibleCells.length-1];t&&(t.lastInRow=!0)}get visibleCellsCount(){let e=this.visibleCells.length;return this.isMultiSelect&&(e+=1),e}get ariaLabelText(){const e=this.selected?S.i18nBundle.getText(Ne):S.i18nBundle.getText(Be),t=this.isSingleSelect||this.isMultiSelect,n=this.cells.map((o,s)=>{const a=this.getColumnTextByIdx(s),d=o.cellContent.length?this.getCellText(o):o.ariaLabelEmptyCellText;return`${a} ${d}`}).join(" ");return t?`${n}. ${this._ariaPosition}. ${e}`:`${n}. ${this._ariaPosition}`}get ariaLabelRowSelection(){return S.i18nBundle.getText(De)}get isSingleSelect(){return this.mode===g.SingleSelect}get isMultiSelect(){return this.mode===g.MultiSelect}get root(){return this.shadowRoot.querySelector(".ui5-table-row-root")}getCellText(e){const t=e.textContent;return t?this.getNormilzedTextContent(t):""}getColumnTextByIdx(e){const t=this._columnsInfo[e];return t&&t.text?this.getNormilzedTextContent(t.text):""}getNormilzedTextContent(e){return e.replace(/[\n\r\t]/g,"").trim()}static async onDefine(){S.i18nBundle=await oe("@ui5/webcomponents")}};f([r({type:E,defaultValue:E.Inactive})],m.prototype,"type",void 0);f([r({type:Boolean})],m.prototype,"selected",void 0);f([r({type:Boolean})],m.prototype,"navigated",void 0);f([r({type:g,defaultValue:g.None})],m.prototype,"mode",void 0);f([r({type:Boolean})],m.prototype,"active",void 0);f([r({type:Object,multiple:!0})],m.prototype,"_columnsInfo",void 0);f([r({defaultValue:"-1"})],m.prototype,"_tabIndex",void 0);f([r({type:Boolean})],m.prototype,"_busy",void 0);f([r({defaultValue:"",noAttribute:!0})],m.prototype,"_ariaPosition",void 0);f([U({type:HTMLElement,default:!0,individualSlots:!0})],m.prototype,"cells",void 0);m=S=f([q({tag:"ui5-table-row",styles:gt,renderer:z,template:st,dependencies:[me]}),_("row-click"),_("_focused"),_("selection-requested"),_("f7-pressed")],m);m.define();const _t=m,vt=Object.freeze(Object.defineProperty({__proto__:null,default:_t},Symbol.toStringTag,{value:"Module"})),M=W("ui5-table-row",["type"],["navigated","selected"],[],[],()=>P(()=>Promise.resolve().then(()=>vt),void 0,import.meta.url));M.displayName="TableRow";M.defaultProps={type:E.Inactive};try{M.displayName="TableRow",M.__docgenInfo={description:'The `TableRow` component represents a row in the `Table`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Table" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TableRow",props:{children:{defaultValue:null,description:"Defines the cells of the component.\n\n**Note:** Use `TableCell` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},navigated:{defaultValue:null,description:"Indicates if the table row is navigated.",name:"navigated",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"Defines the row's selected state.",name:"selected",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"TableRowType.Inactive"},description:`Defines the visual indication and behavior of the component.

Available options are:

*   \`Active\`
*   \`Inactive\`



**Note:** When set to \`Active\`, the item will provide visual response upon press, while with type \`Inactive\` - will not.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Inactive"'},{value:'"Active"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{A as T,F as a,M as b,ne as c,g as d,N as e};
//# sourceMappingURL=index-240336fd.js.map
