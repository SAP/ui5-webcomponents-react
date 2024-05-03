import{U as $}from"./UI5Element-9EXj3atz.js";import{s as k,p as l,c as A,f as R,a as h,l as s,b as E}from"./withWebComponent-LTFbYRvs.js";import{R as F}from"./ResizeHandler-_qRzLmqT.js";import{I as P,N as z}from"./ItemNavigation-F0c19DRy.js";import{e as c}from"./event-lM5HanI-.js";import{s as D}from"./slot-HSrR9XJ-.js";import{r as y,n as N}from"./Boot-vTaFuwdG.js";import{k as w,l as M,n as L,m as O}from"./Keys-ZEuNsqmZ.js";import{I as q}from"./Integer-kog98579.js";import{g as V}from"./AriaLabelHelper-RbKlVwzD.js";import{g as H,i as j,a as B}from"./TabbableElements-L1VqloMt.js";import{g as G}from"./getEffectiveScrollbarStyle-Gz48PLeD.js";import{b as W}from"./i18nBundle-j8vDD4VY.js";import{d as U}from"./debounce-8VpZswfd.js";import{g as K}from"./getActiveElement-IIKAy3xo.js";import{s as C}from"./parameters-bundle.css-EKzfhWK3.js";import{a as X}from"./BusyIndicator-x3up_4gM.js";import{o as Z}from"./class-map-gjOVarQw.js";import{s as T}from"./style-map-tejh5TI3.js";import{s as J}from"./BrowserScrollbar.css-wlj1ktzG.js";import{aK as Q,aL as Y,aM as ee,aN as te}from"./i18n-defaults-X1FTyPSK.js";import"./CheckBox-W7r2Z5M4.js";import"./RadioButton-Rfuvm4gi.js";var I;(function(i){i.Button="Button",i.Scroll="Scroll",i.None="None"})(I||(I={}));const v=I;var x;(function(i){i.None="None",i.SingleSelect="SingleSelect",i.SingleSelectBegin="SingleSelectBegin",i.SingleSelectEnd="SingleSelectEnd",i.SingleSelectAuto="SingleSelectAuto",i.MultiSelect="MultiSelect",i.Delete="Delete"})(x||(x={}));const u=x;var S;(function(i){i.All="All",i.Inner="Inner",i.None="None"})(S||(S={}));const _=S;y("@ui5/webcomponents-theming","sap_horizon",async()=>k);y("@ui5/webcomponents","sap_horizon",async()=>C);const ie={packageName:"@ui5/webcomponents",fileName:"themes/ListItemBase.css.ts",content:`:host(:not([hidden])){display:block}:host{height:var(--_ui5-v1-23-1_list_item_base_height);background:var(--ui5-v1-23-1-listitem-background-color);box-sizing:border-box;border-bottom:1px solid transparent}:host([selected]){background:var(--sapList_SelectionBackgroundColor)}:host([has-border]){border-bottom:var(--ui5-v1-23-1-listitem-border-bottom)}:host([selected]){border-bottom:var(--ui5-v1-23-1-listitem-selected-border-bottom)}:host(:not([focused])[selected][has-border]){border-bottom:var(--ui5-v1-23-1-listitem-selected-border-bottom)}:host([focused][selected]){border-bottom:var(--ui5-v1-23-1-listitem-focused-selected-border-bottom)}.ui5-li-root{position:relative;display:flex;align-items:center;width:100%;height:100%;padding:0 1rem;box-sizing:border-box}:host([focused]) .ui5-li-root.ui5-li--focusable{outline:none}:host([focused]) .ui5-li-root.ui5-li--focusable:after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;border-radius:0;inset:.125rem;pointer-events:none}:host([focused]) .ui5-li-content:focus:after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}:host([active][focused]) .ui5-li-root.ui5-li--focusable:after{border-color:var(--ui5-v1-23-1-listitem-active-border-color)}:host([disabled]){opacity:var(--_ui5-v1-23-1-listitembase_disabled_opacity);pointer-events:none}.ui5-li-content{max-width:100%;font-family:"72override",var(--sapFontFamily);color:var(--sapList_TextColor)}
`};var b=function(i,e,t,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var m=i.length-1;m>=0;m--)(f=i[m])&&(n=(r<3?f(n):r>3?f(e,t,n):f(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n};let g=class extends ${_onfocusin(e){this.fireEvent("_request-tabindex-change",e),e.target===this.getFocusDomRef()&&(this.focused=!0,this.fireEvent("_focused",e))}_onfocusout(){this.focused=!1}_onkeydown(e){if(w(e))return this._handleTabNext(e);if(M(e))return this._handleTabPrevious(e)}_onkeyup(e){}_handleTabNext(e){this.shouldForwardTabAfter()&&(this.fireEvent("_forward-after",{},!0)||e.preventDefault())}_handleTabPrevious(e){const t=e.target;this.shouldForwardTabBefore(t)&&this.fireEvent("_forward-before")}shouldForwardTabAfter(){const e=H(this.getFocusDomRef());return e.length===0||e[e.length-1]===K()}shouldForwardTabBefore(e){return this.getFocusDomRef()===e}get classes(){return{main:{"ui5-li-root":!0,"ui5-li--focusable":this._focusable}}}get _ariaDisabled(){return this.disabled?!0:void 0}get _focusable(){return!this.disabled}get hasConfigurableMode(){return!1}get _effectiveTabIndex(){return this._focusable?this.selected?0:this.forcedTabIndex:-1}};b([l({type:Boolean})],g.prototype,"selected",void 0);b([l({type:Boolean})],g.prototype,"hasBorder",void 0);b([l({defaultValue:"-1",noAttribute:!0})],g.prototype,"forcedTabIndex",void 0);b([l({type:Boolean})],g.prototype,"disabled",void 0);b([l({type:Boolean})],g.prototype,"focused",void 0);g=b([A({renderer:R,styles:ie}),c("_request-tabindex-change"),c("_focused"),c("_forward-after"),c("_forward-before")],g);const Oe=g;function oe(i,e,t){return h`<div class="${Z(this.classes.root)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @ui5-_press=${s(this.onItemPress)} @ui5-close=${s(this.onItemClose)} @ui5-toggle=${s(this.onItemToggle)} @ui5-_request-tabindex-change=${s(this.onItemTabIndexChange)} @ui5-_focused=${s(this.onItemFocused)} @ui5-_forward-after=${s(this.onForwardAfter)} @ui5-_forward-before=${s(this.onForwardBefore)} @ui5-_selection-requested=${s(this.onSelectionRequested)} @ui5-_focus-requested=${s(this.onFocusRequested)}><div class="ui5-list-scroll-container">${this.header.length?se.call(this,i,e,t):void 0}${this.shouldRenderH1?re.call(this,i,e,t):void 0}${this.hasData?ne.call(this,i,e,t):void 0}<span id="${s(this._id)}-modeLabel" class="ui5-hidden-text">${s(this.ariaLabelModeText)}</span><ul id="${s(this._id)}-listUl" class="ui5-list-ul" role="${s(this.accessibleRole)}" aria-label="${s(this.ariaLabelTxt)}" aria-labelledby="${s(this.ariaLabelledBy)}" aria-roledescription="${s(this.accessibleRoleDescription)}"><slot></slot>${this.showNoDataText?ae.call(this,i,e,t):void 0}</ul>${this.growsWithButton?le.call(this,i,e,t):void 0}${this.footerText?de.call(this,i,e,t):void 0}${this.hasData?ue.call(this,i,e,t):void 0}<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div>${this.busy?ce.call(this,i,e,t):void 0}</div> `}function se(i,e,t){return h`<slot name="header" />`}function re(i,e,t){return h`<header id="${s(this.headerID)}" class="ui5-list-header">${s(this.headerText)}</header>`}function ne(i,e,t){return h`<div id="${s(this._id)}-before" tabindex="0" role="none" class="ui5-list-focusarea"></div>`}function ae(i,e,t){return h`<li id="${s(this._id)}-nodata" class="ui5-list-nodata"><div id="${s(this._id)}-nodata-text" class="ui5-list-nodata-text">${s(this.noDataText)}</div></li>`}function le(i,e,t){return h`<div growing-button><div tabindex="0" role="button" id="${s(this._id)}-growing-btn" aria-labelledby="${s(this._id)}-growingButton-text" ?active="${this._loadMoreActive}" @click="${this._onLoadMoreClick}" @keydown="${this._onLoadMoreKeydown}" @keyup="${this._onLoadMoreKeyup}" @mousedown="${this._onLoadMoreMousedown}" @mouseup="${this._onLoadMoreMouseup}" growing-button-inner><span id="${s(this._id)}-growingButton-text" growing-button-text>${s(this._growingButtonText)}</span></div></div>`}function de(i,e,t){return h`<footer id="${s(this._id)}-footer" class="ui5-list-footer">${s(this.footerText)}</footer>`}function ue(i,e,t){return h`<div id="${s(this._id)}-after" tabindex="0" role="none" class="ui5-list-focusarea"></div>`}function ce(i,e,t){return t?h`<div class="ui5-list-busy-row"><${E("ui5-busy-indicator",e,t)} delay="${s(this.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${T(this.styles.busyInd)}" data-sap-focus-ref></${E("ui5-busy-indicator",e,t)}></div>`:h`<div class="ui5-list-busy-row"><ui5-busy-indicator delay="${s(this.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${T(this.styles.busyInd)}" data-sap-focus-ref></ui5-busy-indicator></div>`}y("@ui5/webcomponents-theming","sap_horizon",async()=>k);y("@ui5/webcomponents","sap_horizon",async()=>C);const he={packageName:"@ui5/webcomponents",fileName:"themes/List.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}[growing-button]{display:flex;align-items:center;padding:var(--_ui5-v1-23-1_load_more_padding);border-top:1px solid var(--sapList_BorderColor);border-bottom:var(--_ui5-v1-23-1_load_more_border-bottom);box-sizing:border-box;cursor:pointer;outline:none}[growing-button-inner]{display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:var(--_ui5-v1-23-1_load_more_text_height);width:100%;color:var(--sapButton_TextColor);background-color:var(--sapList_Background);border:var(--_ui5-v1-23-1_load_more_border);border-radius:var(--_ui5-v1-23-1_load_more_border_radius);box-sizing:border-box}[growing-button-inner]:focus{outline:var(--_ui5-v1-23-1_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:-.125rem;border-color:transparent}[growing-button-inner]:hover{background-color:var(--sapList_Hover_Background)}[growing-button-inner]:active,[growing-button-inner][active]{background-color:var(--sapList_Active_Background);border-color:var(--sapList_Active_Background)}[growing-button-inner]:active>*,[growing-button-inner][active]>*{color:var(--sapList_Active_TextColor)}[growing-button-text],[growing-button-subtext]{width:100%;text-align:center;font-family:"72override",var(--sapFontFamily);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box}[growing-button-text]{height:var(--_ui5-v1-23-1_load_more_text_height);padding:.875rem 1rem 0;font-size:var(--_ui5-v1-23-1_load_more_text_font_size);font-weight:700}[growing-button-subtext]{font-size:var(--sapFontSize);padding:var(--_ui5-v1-23-1_load_more_desc_padding)}:host(:not([hidden])){display:block;max-width:100%;width:100%;-webkit-tap-highlight-color:transparent}:host([indent]) .ui5-list-root{padding:2rem}:host([separators="None"]) .ui5-list-nodata{border-bottom:0}:host([busy]){opacity:.72}:host([busy]) .ui5-list-busy-row{position:absolute;inset:0;outline:none}:host([busy]) .ui5-list-busy-ind{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.ui5-list-root{width:100%;height:100%;position:relative;box-sizing:border-box}.ui5-list-scroll-container{overflow:auto;height:100%}.ui5-list-ul{list-style-type:none;padding:0;margin:0}.ui5-list-ul:focus{outline:none}.ui5-list-focusarea{position:fixed}.ui5-list-header{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;font-size:var(--sapFontHeader4Size);font-family:"72override",var(--sapFontFamily);color:var(--sapGroup_TitleTextColor);height:3rem;line-height:3rem;padding:0 1rem;background-color:var(--sapGroup_TitleBackground);border-bottom:1px solid var(--sapGroup_TitleBorderColor)}.ui5-list-footer{height:2rem;box-sizing:border-box;-webkit-text-size-adjust:none;font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);line-height:2rem;background-color:var(--sapList_FooterBackground);color:var(--ui5-v1-23-1_list_footer_text_color);padding:0 1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-list-nodata{list-style-type:none;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:var(--sapTextColor);background-color:var(--sapList_Background);border-bottom:1px solid var(--sapList_BorderColor);padding:0 1rem!important;height:var(--_ui5-v1-23-1_list_no_data_height);font-size:var(--_ui5-v1-23-1_list_no_data_font_size);font-family:"72override",var(--sapFontFamily)}.ui5-list-nodata-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([growing="Scroll"]) .ui5-list-end-marker{display:inline-block}
`};var d=function(i,e,t,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var m=i.length-1;m>=0;m--)(f=i[m])&&(n=(r<3?f(n):r>3?f(e,t,n):f(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},p;const fe=250,ge=10;let a=p=class extends ${static async onDefine(){p.i18nBundle=await W("@ui5/webcomponents")}constructor(){super(),this._previouslyFocusedItem=null,this._forwardingFocus=!1,this.resizeListenerAttached=!1,this.listEndObserved=!1,this._itemNavigation=new P(this,{skipItemsSize:ge,navigationMode:z.Vertical,getItemsCallback:()=>this.getEnabledItems()}),this._handleResize=this.checkListInViewport.bind(this),this._handleResize=this.checkListInViewport.bind(this),this.initialIntersection=!0}onExitDOM(){this.unobserveListEnd(),this.resizeListenerAttached=!1,F.deregister(this.getDomRef(),this._handleResize)}onBeforeRendering(){this.prepareListItems()}onAfterRendering(){this.growsOnScroll?this.observeListEnd():this.listEndObserved&&this.unobserveListEnd(),this.grows&&(this.checkListInViewport(),this.attachForResize())}attachForResize(){this.resizeListenerAttached||(this.resizeListenerAttached=!0,F.register(this.getDomRef(),this._handleResize))}get shouldRenderH1(){return!this.header.length&&this.headerText}get headerID(){return`${this._id}-header`}get modeLabelID(){return`${this._id}-modeLabel`}get listEndDOM(){return this.shadowRoot.querySelector(".ui5-list-end-marker")}get hasData(){return this.getItems().length!==0}get showNoDataText(){return!this.hasData&&this.noDataText}get isDelete(){return this.mode===u.Delete}get isSingleSelect(){return[u.SingleSelect,u.SingleSelectBegin,u.SingleSelectEnd,u.SingleSelectAuto].includes(this.mode)}get isMultiSelect(){return this.mode===u.MultiSelect}get ariaLabelledBy(){if(this.accessibleNameRef||this.accessibleName)return;const e=[];return(this.isMultiSelect||this.isSingleSelect||this.isDelete)&&e.push(this.modeLabelID),this.shouldRenderH1&&e.push(this.headerID),e.length?e.join(" "):void 0}get ariaLabelTxt(){return V(this)}get ariaLabelModeText(){if(this.hasData){if(this.isMultiSelect)return p.i18nBundle.getText(Q);if(this.isSingleSelect)return p.i18nBundle.getText(Y);if(this.isDelete)return p.i18nBundle.getText(ee)}return""}get grows(){return this.growing!==v.None}get growsOnScroll(){return this.growing===v.Scroll}get growsWithButton(){return this.growing===v.Button}get _growingButtonText(){return p.i18nBundle.getText(te)}get busyIndPosition(){return this.grows?this._inViewport?"absolute":"sticky":"absolute"}get styles(){return{busyInd:{position:this.busyIndPosition}}}get classes(){return{root:{"ui5-list-root":!0,"ui5-content-native-scrollbars":G()}}}prepareListItems(){const e=this.getItemsForProcessing();e.forEach((t,o)=>{const r=o===e.length-1,n=this.separators===_.All||this.separators===_.Inner&&!r;t.hasConfigurableMode&&(t._mode=this.mode),t.hasBorder=n})}async observeListEnd(){this.listEndObserved||(await N(),this.getIntersectionObserver().observe(this.listEndDOM),this.listEndObserved=!0)}unobserveListEnd(){this.growingIntersectionObserver&&(this.growingIntersectionObserver.disconnect(),this.growingIntersectionObserver=null,this.listEndObserved=!1)}onInteresection(e){if(this.initialIntersection){this.initialIntersection=!1;return}e.forEach(t=>{t.isIntersecting&&U(this.loadMore.bind(this),fe)})}onSelectionRequested(e){const t=this.getSelectedItems();let o=!1;this._selectionRequested=!0,this.mode!==u.None&&this[`handle${this.mode}`]&&(o=this[`handle${this.mode}`](e.detail.item,!!e.detail.selected)),o&&!this.fireEvent("selection-change",{selectedItems:this.getSelectedItems(),previouslySelectedItems:t,selectionComponentPressed:e.detail.selectionComponentPressed,targetItem:e.detail.item,key:e.detail.key},!0)&&this._revertSelection(t)}handleSingleSelect(e){return e.selected?!1:(this.deselectSelectedItems(),e.selected=!0,!0)}handleSingleSelectBegin(e){return this.handleSingleSelect(e)}handleSingleSelectEnd(e){return this.handleSingleSelect(e)}handleSingleSelectAuto(e){return this.handleSingleSelect(e)}handleMultiSelect(e,t){return e.selected=t,!0}handleDelete(e){return this.fireEvent("item-delete",{item:e}),!0}deselectSelectedItems(){this.getSelectedItems().forEach(e=>{e.selected=!1})}getSelectedItems(){return this.getItems().filter(e=>e.selected)}getEnabledItems(){return this.getItems().filter(e=>e._focusable)}getItems(){return this.getSlottedNodes("items")}getItemsForProcessing(){return this.getItems()}_revertSelection(e){this.getItems().forEach(t=>{const o=e.indexOf(t)!==-1,r=t.shadowRoot.querySelector(".ui5-li-multisel-cb"),n=t.shadowRoot.querySelector(".ui5-li-singlesel-radiobtn");t.selected=o,r?r.checked=o:n&&(n.checked=o)})}_onkeydown(e){w(e)&&this._handleTabNext(e)}_onLoadMoreKeydown(e){L(e)&&(e.preventDefault(),this._loadMoreActive=!0),O(e)&&(this._onLoadMoreClick(),this._loadMoreActive=!0),w(e)&&this.focusAfterElement(),M(e)&&(this.getPreviouslyFocusedItem()?this.focusPreviouslyFocusedItem():this.focusFirstItem(),e.preventDefault())}_onLoadMoreKeyup(e){L(e)&&this._onLoadMoreClick(),this._loadMoreActive=!1}_onLoadMoreMousedown(){this._loadMoreActive=!0}_onLoadMoreMouseup(){this._loadMoreActive=!1}_onLoadMoreClick(){this.loadMore()}checkListInViewport(){this._inViewport=j(this.getDomRef())}loadMore(){this.fireEvent("load-more")}_handleTabNext(e){B(e.target)}_onfocusin(e){const t=B(e.target);if(!this.isForwardElement(t)){e.stopImmediatePropagation();return}if(!this.getPreviouslyFocusedItem()){this.growsWithButton&&this.isForwardAfterElement(t)?this.focusGrowingButton():this.focusFirstItem(),e.stopImmediatePropagation();return}if(!this.getForwardingFocus()){if(this.growsWithButton&&this.isForwardAfterElement(t)){this.focusGrowingButton(),e.stopImmediatePropagation();return}this.focusPreviouslyFocusedItem(),e.stopImmediatePropagation()}this.setForwardingFocus(!1)}isForwardElement(e){const t=e.id,o=this.getBeforeElement();return this._id===t||o&&o.id===t?!0:this.isForwardAfterElement(e)}isForwardAfterElement(e){const t=e.id,o=this.getAfterElement();return o&&o.id===t}onItemTabIndexChange(e){const t=e.target;this._itemNavigation.setCurrentItem(t)}onItemFocused(e){const t=e.target;if(e.stopPropagation(),this._itemNavigation.setCurrentItem(t),this.fireEvent("item-focused",{item:t}),this.mode===u.SingleSelectAuto){const o={item:t,selectionComponentPressed:!1,selected:!0,key:e.detail.key};this.onSelectionRequested({detail:o})}}onItemPress(e){const t=e.detail.item;if(this.fireEvent("item-click",{item:t},!0)){if(!this._selectionRequested&&this.mode!==u.Delete){this._selectionRequested=!0;const o={item:t,selectionComponentPressed:!1,selected:!t.selected,key:e.detail.key};this.onSelectionRequested({detail:o})}this._selectionRequested=!1}}onItemClose(e){var r;const t=e.target;((t==null?void 0:t.hasAttribute("ui5-li-notification"))||(t==null?void 0:t.hasAttribute("ui5-li-notification-group")))&&this.fireEvent("item-close",{item:(r=e.detail)==null?void 0:r.item})}onItemToggle(e){this.fireEvent("item-toggle",{item:e.detail.item})}onForwardBefore(e){this.setPreviouslyFocusedItem(e.target),this.focusBeforeElement(),e.stopPropagation()}onForwardAfter(e){this.setPreviouslyFocusedItem(e.target),this.growsWithButton?(this.focusGrowingButton(),e.preventDefault()):this.focusAfterElement(),e.stopPropagation()}focusBeforeElement(){this.setForwardingFocus(!0),this.getBeforeElement().focus()}focusAfterElement(){this.setForwardingFocus(!0),this.getAfterElement().focus()}focusGrowingButton(){const e=this.getGrowingButton();e&&e.focus()}getGrowingButton(){return this.shadowRoot.querySelector(`[id="${this._id}-growing-btn"]`)}focusFirstItem(){const e=this.getFirstItem(t=>t._focusable);e&&e.focus()}focusPreviouslyFocusedItem(){const e=this.getPreviouslyFocusedItem();e&&e.focus()}focusFirstSelectedItem(){const e=this.getFirstItem(t=>t.selected&&t._focusable);e&&e.focus()}focusItem(e){this._itemNavigation.setCurrentItem(e),e.focus()}onFocusRequested(e){setTimeout(()=>{this.setPreviouslyFocusedItem(e.target),this.focusPreviouslyFocusedItem()},0)}setForwardingFocus(e){this._forwardingFocus=e}getForwardingFocus(){return this._forwardingFocus}setPreviouslyFocusedItem(e){this._previouslyFocusedItem=e}getPreviouslyFocusedItem(){return this._previouslyFocusedItem}getFirstItem(e){const t=this.getItems();let o=null;if(!e)return t.length?t[0]:null;for(let r=0;r<t.length;r++)if(e(t[r])){o=t[r];break}return o}getAfterElement(){return this._afterElement||(this._afterElement=this.shadowRoot.querySelector(`[id="${this._id}-after"]`)),this._afterElement}getBeforeElement(){return this._beforeElement||(this._beforeElement=this.shadowRoot.querySelector(`[id="${this._id}-before"]`)),this._beforeElement}getIntersectionObserver(){return this.growingIntersectionObserver||(this.growingIntersectionObserver=new IntersectionObserver(this.onInteresection.bind(this),{root:null,rootMargin:"0px",threshold:1})),this.growingIntersectionObserver}};d([l()],a.prototype,"headerText",void 0);d([l()],a.prototype,"footerText",void 0);d([l({type:Boolean})],a.prototype,"indent",void 0);d([l({type:u,defaultValue:u.None})],a.prototype,"mode",void 0);d([l()],a.prototype,"noDataText",void 0);d([l({type:_,defaultValue:_.All})],a.prototype,"separators",void 0);d([l({type:v,defaultValue:v.None})],a.prototype,"growing",void 0);d([l({type:Boolean})],a.prototype,"busy",void 0);d([l({validator:q,defaultValue:1e3})],a.prototype,"busyDelay",void 0);d([l()],a.prototype,"accessibleName",void 0);d([l({defaultValue:""})],a.prototype,"accessibleNameRef",void 0);d([l({defaultValue:"list"})],a.prototype,"accessibleRole",void 0);d([l({defaultValue:void 0,noAttribute:!0})],a.prototype,"accessibleRoleDescription",void 0);d([l({type:Boolean})],a.prototype,"_inViewport",void 0);d([l({type:Boolean})],a.prototype,"_loadMoreActive",void 0);d([D({type:HTMLElement,default:!0})],a.prototype,"items",void 0);d([D()],a.prototype,"header",void 0);a=p=d([A({tag:"ui5-list",fastNavigation:!0,renderer:R,template:oe,styles:[J,he],dependencies:[X]}),c("item-click",{detail:{item:{type:HTMLElement}}}),c("item-close",{detail:{item:{type:HTMLElement}}}),c("item-toggle",{detail:{item:{type:HTMLElement}}}),c("item-delete",{detail:{item:{type:HTMLElement}}}),c("selection-change",{detail:{selectedItems:{type:Array},previouslySelectedItems:{type:Array},targetItem:{type:HTMLElement},selectionComponentPressed:{type:Boolean},key:{type:String}}}),c("load-more"),c("item-focused",{detail:{item:{type:HTMLElement}}})],a);a.define();const me=a,Ve=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"}));export{u as L,_ as a,v as b,Oe as c,me as d,Ve as e};
