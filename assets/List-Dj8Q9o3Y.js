import{U as j}from"./UI5Element-BfPpwo_k.js";import{s as T,p as l,c as G,d as W,a as g,l as s,b as B}from"./withWebComponent-DdLYI_QY.js";import{R as X}from"./ResizeHandler-BxP3RYN1.js";import{I as _e,N as ye}from"./ItemNavigation-B1rM-mPj.js";import{e as b}from"./event-CegLCnR0.js";import{s as de}from"./slot-Df15G--e.js";import{r as w,e as we}from"./Boot-BtdVcW0c.js";import{k as C,l as ce,n as Z,m as Ie}from"./Keys-BgUkNma0.js";import{I as $e}from"./Integer-Dh6YzFpK.js";import{g as Ee}from"./AriaLabelHelper-CzOXVcye.js";import{g as Se,i as xe,a as J}from"./TabbableElements-Ds_LZU0v.js";import{g as De}from"./getEffectiveScrollbarStyle-DWzHjL-d.js";import{b as Be}from"./i18nBundle-Dx46P1iz.js";import{d as Le}from"./debounce-jW346lN3.js";import{g as Te}from"./getActiveElement-BL9Yqj8a.js";import{s as F}from"./parameters-bundle.css-DjgCrOcY.js";import{o as O}from"./class-map-DwUNpVO-.js";import{a as Fe}from"./BusyIndicator-Bh506WVf.js";import{s as Q}from"./style-map-BhswnH6I.js";import{s as Ae}from"./BrowserScrollbar.css-BmT0sFnr.js";import{bh as Re,bi as ke,bj as Me,bk as Ce}from"./i18n-defaults-BFrvdQTW.js";import"./CheckBox-76mbRj2v.js";import"./RadioButton-DO7IWeaB.js";var P;(function(o){o.Button="Button",o.Scroll="Scroll",o.None="None"})(P||(P={}));const E=P;var z;(function(o){o.None="None",o.SingleSelect="SingleSelect",o.SingleSelectBegin="SingleSelectBegin",o.SingleSelectEnd="SingleSelectEnd",o.SingleSelectAuto="SingleSelectAuto",o.MultiSelect="MultiSelect",o.Delete="Delete"})(z||(z={}));const m=z;var N;(function(o){o.All="All",o.Inner="Inner",o.None="None"})(N||(N={}));const L=N;let S=null,A=!1;const V=new Set,U=new Set,ue=o=>{!o.dataTransfer||!(o.target instanceof HTMLElement)||(o.dataTransfer.dropEffect="move",o.dataTransfer.effectAllowed="move",U.has(o.target)||(S=o.target))},he=()=>{S=null},fe=()=>{S=null},Oe=o=>{S=o},Pe=()=>S,ze=()=>{A||(document.body.addEventListener("dragstart",ue),document.body.addEventListener("dragend",he),document.body.addEventListener("drop",fe))},Ne=()=>{document.body.removeEventListener("dragstart",ue),document.body.removeEventListener("dragend",he),document.body.removeEventListener("drop",fe),A=!1},Ve=o=>{V.add(o),A||ze()},qe=o=>{V.delete(o),V.size===0&&A&&Ne()},He=o=>(U.add(o),Oe),je=o=>{U.delete(o)},D={subscribe:Ve,unsubscribe:qe,addSelfManagedArea:He,removeSelfManagedArea:je,getDraggedElement:Pe};var q;(function(o){o.On="On",o.Before="Before",o.After="After"})(q||(q={}));const h=q;var H;(function(o){o.Vertical="Vertical",o.Horizontal="Horizontal"})(H||(H={}));const _=H,ee=(o,e,t,i)=>{const r=Math.abs(o-e),n=Math.abs(o-t),a=Math.abs(o-i),c=Math.min(r,n,a);let f=[];switch(c){case r:f=[h.Before];break;case n:f=[h.On,r<a?h.Before:h.After];break;case a:f=[h.After];break}return f},Ge=(o,e,t)=>{let i=Number.POSITIVE_INFINITY,r=null;for(let k=0;k<o.length;k++){const K=o[k],{left:pe,width:me,top:be,height:ve}=K.getBoundingClientRect();let M;t===_.Vertical?M=be+ve/2:M=pe+me/2;const Y=Math.abs(e-M);Y<i&&(i=Y,r=K)}if(!r)return null;const{width:n,height:a,left:c,right:f,top:p,bottom:ge}=r.getBoundingClientRect();let R;return t===_.Vertical?R=ee(e,p,p+a/2,ge):R=ee(e,c,c+n/2,f),{element:r,placements:R}};w("@ui5/webcomponents-theming","sap_horizon",async()=>T);w("@ui5/webcomponents","sap_horizon",async()=>F);const We={packageName:"@ui5/webcomponents",fileName:"themes/ListItemBase.css.ts",content:`:host(:not([hidden])){display:block}:host{height:var(--_ui5-v1-24-0_list_item_base_height);background:var(--ui5-v1-24-0-listitem-background-color);box-sizing:border-box;border-bottom:1px solid transparent}:host([selected]){background:var(--sapList_SelectionBackgroundColor)}:host([has-border]){border-bottom:var(--ui5-v1-24-0-listitem-border-bottom)}:host([selected]){border-bottom:var(--ui5-v1-24-0-listitem-selected-border-bottom)}:host(:not([focused])[selected][has-border]){border-bottom:var(--ui5-v1-24-0-listitem-selected-border-bottom)}:host([focused][selected]){border-bottom:var(--ui5-v1-24-0-listitem-focused-selected-border-bottom)}.ui5-li-root{position:relative;display:flex;align-items:center;width:100%;height:100%;padding:0 1rem;box-sizing:border-box;background:inherit}:host([focused]) .ui5-li-root.ui5-li--focusable{outline:none}:host([focused]:not([data-moving])) .ui5-li-root.ui5-li--focusable:after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;border-radius:0;inset:.125rem;pointer-events:none}:host([focused]:not(data-moving)) .ui5-li-root .ui5-li-content:focus:after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}:host([active][focused]) .ui5-li-root.ui5-li--focusable:after{border-color:var(--ui5-v1-24-0-listitem-active-border-color)}:host([disabled]){opacity:var(--_ui5-v1-24-0-listitembase_disabled_opacity);pointer-events:none}.ui5-li-content{max-width:100%;font-family:"72override",var(--sapFontFamily);color:var(--sapList_TextColor)}
`};w("@ui5/webcomponents-theming","sap_horizon",async()=>T);w("@ui5/webcomponents","sap_horizon",async()=>F);const Ue={packageName:"@ui5/webcomponents",fileName:"themes/DraggableElement.css.ts",content:`[draggable=true]{cursor:grab!important}[draggable=true][data-moving]{cursor:grabbing!important;opacity:var(--sapContent_DisabledOpacity)}
`};var $=function(o,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var c=o.length-1;c>=0;c--)(a=o[c])&&(n=(r<3?a(n):r>3?a(e,t,n):a(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n};let v=class extends j{_onfocusin(e){this.fireEvent("_request-tabindex-change",e),e.target===this.getFocusDomRef()&&(this.focused=!0,this.fireEvent("_focused",e))}_onfocusout(){this.focused=!1}_onkeydown(e){if(C(e))return this._handleTabNext(e);if(ce(e))return this._handleTabPrevious(e)}_onkeyup(e){}_handleTabNext(e){this.shouldForwardTabAfter()&&(this.fireEvent("_forward-after",{},!0)||e.preventDefault())}_handleTabPrevious(e){const t=e.target;this.shouldForwardTabBefore(t)&&this.fireEvent("_forward-before")}shouldForwardTabAfter(){const e=Se(this.getFocusDomRef());return e.length===0||e[e.length-1]===Te()}shouldForwardTabBefore(e){return this.getFocusDomRef()===e}get classes(){return{main:{"ui5-li-root":!0,"ui5-li--focusable":this._focusable}}}get _ariaDisabled(){return this.disabled?!0:void 0}get _focusable(){return!this.disabled}get hasConfigurableMode(){return!1}get _effectiveTabIndex(){return this._focusable?this.selected?0:this.forcedTabIndex:-1}};$([l({type:Boolean})],v.prototype,"selected",void 0);$([l({type:Boolean})],v.prototype,"movable",void 0);$([l({type:Boolean})],v.prototype,"hasBorder",void 0);$([l({defaultValue:"-1",noAttribute:!0})],v.prototype,"forcedTabIndex",void 0);$([l({type:Boolean})],v.prototype,"disabled",void 0);$([l({type:Boolean})],v.prototype,"focused",void 0);v=$([G({renderer:W,styles:[We,Ue]}),b("_request-tabindex-change"),b("_focused"),b("_forward-after"),b("_forward-before")],v);const xt=v;function Ke(o,e,t){return g`<div class="${O(this.classes.root)}"></div>`}w("@ui5/webcomponents-theming","sap_horizon",async()=>T);w("@ui5/webcomponents","sap_horizon",async()=>F);const Ye={packageName:"@ui5/webcomponents",fileName:"themes/DropIndicator.css.ts",content:`:host{position:absolute;pointer-events:none;z-index:99}:host([orientation="Vertical"]) .ui5-di-needle{width:.125rem;height:100%;inset-block:0;background:var(--sapContent_DragAndDropActiveColor)}:host([orientation="Horizontal"]) .ui5-di-needle{height:.125rem;width:100%;inset-inline:0;background:var(--sapContent_DragAndDropActiveColor)}:host([orientation="Vertical"]) .ui5-di-needle:before{left:-.1875rem;content:"";position:absolute;width:.25rem;height:.25rem;border-radius:.25rem;border:.125rem solid var(--sapContent_DragAndDropActiveColor);background-color:#fff;pointer-events:none}:host([orientation="Horizontal"]) .ui5-di-needle:before{top:-.1875rem;content:"";position:absolute;width:.25rem;height:.25rem;border-radius:.25rem;border:.125rem solid var(--sapContent_DragAndDropActiveColor);background-color:#fff;pointer-events:none}:host .ui5-di-rect{border:.125rem solid var(--sapContent_DragAndDropActiveColor);position:absolute;inset:0}:host .ui5-di-rect:before{content:" ";position:absolute;inset:0;background:var(--sapContent_DragAndDropActiveColor);opacity:.05}
`};var x=function(o,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var c=o.length-1;c>=0;c--)(a=o[c])&&(n=(r<3?a(n):r>3?a(e,t,n):a(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n};let y=class extends j{get _positionProperty(){return this.orientation===_.Vertical?"left":"top"}constructor(){super()}onAfterRendering(){if(!this.targetReference||!this.ownerReference){Object.assign(this.style,{display:"none"});return}const{left:e,width:t,right:i,top:r,bottom:n,height:a}=this.targetReference.getBoundingClientRect(),{top:c}=this.ownerReference.getBoundingClientRect(),f={display:"",[this._positionProperty]:"",width:"",height:""};let p=0;if(this.orientation===_.Vertical){switch(this.placement){case h.Before:p=e-this._needle.offsetWidth/2;break;case h.On:f.width=`${t}px`,p=e;break;case h.After:p=i-this._needle.offsetWidth/2;break}f.height=`${a}px`}if(this.orientation===_.Horizontal){switch(this.placement){case h.Before:p=r;break;case h.On:f.height=`${a}px`,p=r;break;case h.After:p=n;break}f.width=`${t}px`,p-=c}f[this._positionProperty]=`${p}px`,Object.assign(this.style,f)}get classes(){return{root:{"ui5-di-rect":this.placement===h.On,"ui5-di-needle":this.placement!==h.On}}}get _needle(){return this.shadowRoot.querySelector(".ui5-di-needle")}};x([l({type:Object,defaultValue:null})],y.prototype,"targetReference",void 0);x([l({type:Object,defaultValue:null})],y.prototype,"ownerReference",void 0);x([l({type:h,defaultValue:h.Before})],y.prototype,"placement",void 0);x([l({type:_,defaultValue:_.Vertical})],y.prototype,"orientation",void 0);y=x([G({tag:"ui5-drop-indicator",renderer:W,styles:Ye,template:Ke,dependencies:[]})],y);y.define();const Xe=y;function Ze(o,e,t){return t?g`<div class="${O(this.classes.root)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @dragenter="${this._ondragenter}" @dragover="${this._ondragover}" @drop="${this._ondrop}" @dragleave="${this._ondragleave}" @ui5-_press=${s(this.onItemPress)} @ui5-close=${s(this.onItemClose)} @ui5-toggle=${s(this.onItemToggle)} @ui5-_request-tabindex-change=${s(this.onItemTabIndexChange)} @ui5-_focused=${s(this.onItemFocused)} @ui5-_forward-after=${s(this.onForwardAfter)} @ui5-_forward-before=${s(this.onForwardBefore)} @ui5-_selection-requested=${s(this.onSelectionRequested)} @ui5-_focus-requested=${s(this.onFocusRequested)}><div class="ui5-list-scroll-container">${this.header.length?te.call(this,o,e,t):void 0}${this.shouldRenderH1?oe.call(this,o,e,t):void 0}${this.hasData?ie.call(this,o,e,t):void 0}<span id="${s(this._id)}-modeLabel" class="ui5-hidden-text">${s(this.ariaLabelModeText)}</span><ul id="${s(this._id)}-listUl" class="ui5-list-ul" role="${s(this.accessibleRole)}" aria-label="${s(this.ariaLabelTxt)}" aria-labelledby="${s(this.ariaLabelledBy)}" aria-roledescription="${s(this.accessibleRoleDescription)}"><slot></slot>${this.showNoDataText?se.call(this,o,e,t):void 0}</ul>${this.growsWithButton?re.call(this,o,e,t):void 0}${this.footerText?ne.call(this,o,e,t):void 0}${this.hasData?ae.call(this,o,e,t):void 0}<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div>${this.busy?le.call(this,o,e,t):void 0}<${B("ui5-drop-indicator",e,t)} orientation="Horizontal" .ownerReference="${s(this)}"></${B("ui5-drop-indicator",e,t)}></div> `:g`<div class="${O(this.classes.root)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @dragenter="${this._ondragenter}" @dragover="${this._ondragover}" @drop="${this._ondrop}" @dragleave="${this._ondragleave}" @ui5-_press=${s(this.onItemPress)} @ui5-close=${s(this.onItemClose)} @ui5-toggle=${s(this.onItemToggle)} @ui5-_request-tabindex-change=${s(this.onItemTabIndexChange)} @ui5-_focused=${s(this.onItemFocused)} @ui5-_forward-after=${s(this.onForwardAfter)} @ui5-_forward-before=${s(this.onForwardBefore)} @ui5-_selection-requested=${s(this.onSelectionRequested)} @ui5-_focus-requested=${s(this.onFocusRequested)}><div class="ui5-list-scroll-container">${this.header.length?te.call(this,o,e,t):void 0}${this.shouldRenderH1?oe.call(this,o,e,t):void 0}${this.hasData?ie.call(this,o,e,t):void 0}<span id="${s(this._id)}-modeLabel" class="ui5-hidden-text">${s(this.ariaLabelModeText)}</span><ul id="${s(this._id)}-listUl" class="ui5-list-ul" role="${s(this.accessibleRole)}" aria-label="${s(this.ariaLabelTxt)}" aria-labelledby="${s(this.ariaLabelledBy)}" aria-roledescription="${s(this.accessibleRoleDescription)}"><slot></slot>${this.showNoDataText?se.call(this,o,e,t):void 0}</ul>${this.growsWithButton?re.call(this,o,e,t):void 0}${this.footerText?ne.call(this,o,e,t):void 0}${this.hasData?ae.call(this,o,e,t):void 0}<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div>${this.busy?le.call(this,o,e,t):void 0}<ui5-drop-indicator orientation="Horizontal" .ownerReference="${s(this)}"></ui5-drop-indicator></div> `}function te(o,e,t){return g`<slot name="header" />`}function oe(o,e,t){return g`<header id="${s(this.headerID)}" class="ui5-list-header">${s(this.headerText)}</header>`}function ie(o,e,t){return g`<div id="${s(this._id)}-before" tabindex="0" role="none" class="ui5-list-focusarea"></div>`}function se(o,e,t){return g`<li id="${s(this._id)}-nodata" class="ui5-list-nodata"><div id="${s(this._id)}-nodata-text" class="ui5-list-nodata-text">${s(this.noDataText)}</div></li>`}function re(o,e,t){return g`<div growing-button><div tabindex="0" role="button" id="${s(this._id)}-growing-btn" aria-labelledby="${s(this._id)}-growingButton-text" ?active="${this._loadMoreActive}" @click="${this._onLoadMoreClick}" @keydown="${this._onLoadMoreKeydown}" @keyup="${this._onLoadMoreKeyup}" @mousedown="${this._onLoadMoreMousedown}" @mouseup="${this._onLoadMoreMouseup}" growing-button-inner><span id="${s(this._id)}-growingButton-text" growing-button-text>${s(this._growingButtonText)}</span></div></div>`}function ne(o,e,t){return g`<footer id="${s(this._id)}-footer" class="ui5-list-footer">${s(this.footerText)}</footer>`}function ae(o,e,t){return g`<div id="${s(this._id)}-after" tabindex="0" role="none" class="ui5-list-focusarea"></div>`}function le(o,e,t){return t?g`<div class="ui5-list-busy-row"><${B("ui5-busy-indicator",e,t)} delay="${s(this.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${Q(this.styles.busyInd)}" data-sap-focus-ref></${B("ui5-busy-indicator",e,t)}></div>`:g`<div class="ui5-list-busy-row"><ui5-busy-indicator delay="${s(this.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${Q(this.styles.busyInd)}" data-sap-focus-ref></ui5-busy-indicator></div>`}w("@ui5/webcomponents-theming","sap_horizon",async()=>T);w("@ui5/webcomponents","sap_horizon",async()=>F);const Je={packageName:"@ui5/webcomponents",fileName:"themes/List.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}[growing-button]{display:flex;align-items:center;padding:var(--_ui5-v1-24-0_load_more_padding);border-top:1px solid var(--sapList_BorderColor);border-bottom:var(--_ui5-v1-24-0_load_more_border-bottom);box-sizing:border-box;cursor:pointer;outline:none}[growing-button-inner]{display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:var(--_ui5-v1-24-0_load_more_text_height);width:100%;color:var(--sapButton_TextColor);background-color:var(--sapList_Background);border:var(--_ui5-v1-24-0_load_more_border);border-radius:var(--_ui5-v1-24-0_load_more_border_radius);box-sizing:border-box}[growing-button-inner]:focus{outline:var(--_ui5-v1-24-0_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:-.125rem;border-color:transparent}[growing-button-inner]:hover{background-color:var(--sapList_Hover_Background)}[growing-button-inner]:active,[growing-button-inner][active]{background-color:var(--sapList_Active_Background);border-color:var(--sapList_Active_Background)}[growing-button-inner]:active>*,[growing-button-inner][active]>*{color:var(--sapList_Active_TextColor)}[growing-button-text],[growing-button-subtext]{width:100%;text-align:center;font-family:"72override",var(--sapFontFamily);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box}[growing-button-text]{height:var(--_ui5-v1-24-0_load_more_text_height);padding:.875rem 1rem 0;font-size:var(--_ui5-v1-24-0_load_more_text_font_size);font-weight:700}[growing-button-subtext]{font-size:var(--sapFontSize);padding:var(--_ui5-v1-24-0_load_more_desc_padding)}:host(:not([hidden])){display:block;max-width:100%;width:100%;-webkit-tap-highlight-color:transparent}:host([indent]) .ui5-list-root{padding:2rem}:host([separators="None"]) .ui5-list-nodata{border-bottom:0}:host([busy]){opacity:.72}:host([busy]) .ui5-list-busy-row{position:absolute;inset:0;outline:none}:host([busy]) .ui5-list-busy-ind{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.ui5-list-root{width:100%;height:100%;position:relative;box-sizing:border-box}.ui5-list-scroll-container{overflow:auto;height:100%}.ui5-list-ul{list-style-type:none;padding:0;margin:0}.ui5-list-ul:focus{outline:none}.ui5-list-focusarea{position:fixed}.ui5-list-header{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;font-size:var(--sapFontHeader4Size);font-family:"72override",var(--sapFontFamily);color:var(--sapGroup_TitleTextColor);height:3rem;line-height:3rem;padding:0 1rem;background-color:var(--sapGroup_TitleBackground);border-bottom:1px solid var(--sapGroup_TitleBorderColor)}.ui5-list-footer{height:2rem;box-sizing:border-box;-webkit-text-size-adjust:none;font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);line-height:2rem;background-color:var(--sapList_FooterBackground);color:var(--ui5-v1-24-0_list_footer_text_color);padding:0 1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-list-nodata{list-style-type:none;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:var(--sapTextColor);background-color:var(--sapList_Background);border-bottom:1px solid var(--sapList_BorderColor);padding:0 1rem!important;height:var(--_ui5-v1-24-0_list_no_data_height);font-size:var(--_ui5-v1-24-0_list_no_data_font_size);font-family:"72override",var(--sapFontFamily)}.ui5-list-nodata-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([growing="Scroll"]) .ui5-list-end-marker{display:inline-block}
`};var u=function(o,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var c=o.length-1;c>=0;c--)(a=o[c])&&(n=(r<3?a(n):r>3?a(e,t,n):a(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},I;const Qe=250,et=10;let d=I=class extends j{static async onDefine(){I.i18nBundle=await Be("@ui5/webcomponents")}constructor(){super(),this._previouslyFocusedItem=null,this._forwardingFocus=!1,this.resizeListenerAttached=!1,this.listEndObserved=!1,this._itemNavigation=new _e(this,{skipItemsSize:et,navigationMode:ye.Vertical,getItemsCallback:()=>this.getEnabledItems()}),this._handleResize=this.checkListInViewport.bind(this),this._handleResize=this.checkListInViewport.bind(this),this.initialIntersection=!0}onEnterDOM(){D.subscribe(this)}onExitDOM(){this.unobserveListEnd(),this.resizeListenerAttached=!1,X.deregister(this.getDomRef(),this._handleResize),D.unsubscribe(this)}onBeforeRendering(){this.prepareListItems()}onAfterRendering(){this.growsOnScroll?this.observeListEnd():this.listEndObserved&&this.unobserveListEnd(),this.grows&&(this.checkListInViewport(),this.attachForResize())}attachForResize(){this.resizeListenerAttached||(this.resizeListenerAttached=!0,X.register(this.getDomRef(),this._handleResize))}get shouldRenderH1(){return!this.header.length&&this.headerText}get headerID(){return`${this._id}-header`}get modeLabelID(){return`${this._id}-modeLabel`}get listEndDOM(){return this.shadowRoot.querySelector(".ui5-list-end-marker")}get dropIndicatorDOM(){return this.shadowRoot.querySelector("[ui5-drop-indicator]")}get hasData(){return this.getItems().length!==0}get showNoDataText(){return!this.hasData&&this.noDataText}get isDelete(){return this.mode===m.Delete}get isSingleSelect(){return[m.SingleSelect,m.SingleSelectBegin,m.SingleSelectEnd,m.SingleSelectAuto].includes(this.mode)}get isMultiSelect(){return this.mode===m.MultiSelect}get ariaLabelledBy(){if(this.accessibleNameRef||this.accessibleName)return;const e=[];return(this.isMultiSelect||this.isSingleSelect||this.isDelete)&&e.push(this.modeLabelID),this.shouldRenderH1&&e.push(this.headerID),e.length?e.join(" "):void 0}get ariaLabelTxt(){return Ee(this)}get ariaLabelModeText(){if(this.hasData){if(this.isMultiSelect)return I.i18nBundle.getText(Re);if(this.isSingleSelect)return I.i18nBundle.getText(ke);if(this.isDelete)return I.i18nBundle.getText(Me)}return""}get grows(){return this.growing!==E.None}get growsOnScroll(){return this.growing===E.Scroll}get growsWithButton(){return this.growing===E.Button}get _growingButtonText(){return this.growingButtonText||I.i18nBundle.getText(Ce)}get busyIndPosition(){return this.grows?this._inViewport?"absolute":"sticky":"absolute"}get styles(){return{busyInd:{position:this.busyIndPosition}}}get classes(){return{root:{"ui5-list-root":!0,"ui5-content-native-scrollbars":De()}}}prepareListItems(){const e=this.getItemsForProcessing();e.forEach((t,i)=>{const r=i===e.length-1,n=this.separators===L.All||this.separators===L.Inner&&!r;t.hasConfigurableMode&&(t._mode=this.mode),t.hasBorder=n})}async observeListEnd(){this.listEndObserved||(await we(),this.getIntersectionObserver().observe(this.listEndDOM),this.listEndObserved=!0)}unobserveListEnd(){this.growingIntersectionObserver&&(this.growingIntersectionObserver.disconnect(),this.growingIntersectionObserver=null,this.listEndObserved=!1)}onInteresection(e){if(this.initialIntersection){this.initialIntersection=!1;return}e.forEach(t=>{t.isIntersecting&&Le(this.loadMore.bind(this),Qe)})}onSelectionRequested(e){const t=this.getSelectedItems();let i=!1;this._selectionRequested=!0,this.mode!==m.None&&this[`handle${this.mode}`]&&(i=this[`handle${this.mode}`](e.detail.item,!!e.detail.selected)),i&&!this.fireEvent("selection-change",{selectedItems:this.getSelectedItems(),previouslySelectedItems:t,selectionComponentPressed:e.detail.selectionComponentPressed,targetItem:e.detail.item,key:e.detail.key},!0)&&this._revertSelection(t)}handleSingleSelect(e){return e.selected?!1:(this.deselectSelectedItems(),e.selected=!0,!0)}handleSingleSelectBegin(e){return this.handleSingleSelect(e)}handleSingleSelectEnd(e){return this.handleSingleSelect(e)}handleSingleSelectAuto(e){return this.handleSingleSelect(e)}handleMultiSelect(e,t){return e.selected=t,!0}handleDelete(e){return this.fireEvent("item-delete",{item:e}),!0}deselectSelectedItems(){this.getSelectedItems().forEach(e=>{e.selected=!1})}getSelectedItems(){return this.getItems().filter(e=>e.selected)}getEnabledItems(){return this.getItems().filter(e=>e._focusable)}getItems(){return this.getSlottedNodes("items")}getItemsForProcessing(){return this.getItems()}_revertSelection(e){this.getItems().forEach(t=>{const i=e.indexOf(t)!==-1,r=t.shadowRoot.querySelector(".ui5-li-multisel-cb"),n=t.shadowRoot.querySelector(".ui5-li-singlesel-radiobtn");t.selected=i,r?r.checked=i:n&&(n.checked=i)})}_onkeydown(e){C(e)&&this._handleTabNext(e)}_onLoadMoreKeydown(e){Z(e)&&(e.preventDefault(),this._loadMoreActive=!0),Ie(e)&&(this._onLoadMoreClick(),this._loadMoreActive=!0),C(e)&&this.focusAfterElement(),ce(e)&&(this.getPreviouslyFocusedItem()?this.focusPreviouslyFocusedItem():this.focusFirstItem(),e.preventDefault())}_onLoadMoreKeyup(e){Z(e)&&this._onLoadMoreClick(),this._loadMoreActive=!1}_onLoadMoreMousedown(){this._loadMoreActive=!0}_onLoadMoreMouseup(){this._loadMoreActive=!1}_onLoadMoreClick(){this.loadMore()}checkListInViewport(){this._inViewport=xe(this.getDomRef())}loadMore(){this.fireEvent("load-more")}_handleTabNext(e){J(e.target)}_onfocusin(e){const t=J(e.target);if(!this.isForwardElement(t)){e.stopImmediatePropagation();return}if(!this.getPreviouslyFocusedItem()){this.growsWithButton&&this.isForwardAfterElement(t)?this.focusGrowingButton():this.focusFirstItem(),e.stopImmediatePropagation();return}if(!this.getForwardingFocus()){if(this.growsWithButton&&this.isForwardAfterElement(t)){this.focusGrowingButton(),e.stopImmediatePropagation();return}this.focusPreviouslyFocusedItem(),e.stopImmediatePropagation()}this.setForwardingFocus(!1)}_ondragenter(e){e.preventDefault()}_ondragleave(e){e.relatedTarget instanceof Node&&this.shadowRoot.contains(e.relatedTarget)||(this.dropIndicatorDOM.targetReference=null)}_ondragover(e){const t=D.getDraggedElement();if(!(e.target instanceof HTMLElement)||!t)return;const i=Ge(this.items,e.clientY,_.Vertical);if(!i){this.dropIndicatorDOM.targetReference=null;return}let r=i.placements;i.element===t&&(r=r.filter(a=>a!==h.On)),r.some(a=>this.fireEvent("move-over",{source:{element:t},destination:{element:i.element,placement:a}},!0)?!1:(e.preventDefault(),this.dropIndicatorDOM.targetReference=i.element,this.dropIndicatorDOM.placement=a,!0))||(this.dropIndicatorDOM.targetReference=null)}_ondrop(e){e.preventDefault();const t=D.getDraggedElement();this.fireEvent("move",{source:{element:t},destination:{element:this.dropIndicatorDOM.targetReference,placement:this.dropIndicatorDOM.placement}}),this.dropIndicatorDOM.targetReference=null,t.focus()}isForwardElement(e){const t=e.id,i=this.getBeforeElement();return this._id===t||i&&i.id===t?!0:this.isForwardAfterElement(e)}isForwardAfterElement(e){const t=e.id,i=this.getAfterElement();return i&&i.id===t}onItemTabIndexChange(e){const t=e.target;this._itemNavigation.setCurrentItem(t)}onItemFocused(e){const t=e.target;if(e.stopPropagation(),this._itemNavigation.setCurrentItem(t),this.fireEvent("item-focused",{item:t}),this.mode===m.SingleSelectAuto){const i={item:t,selectionComponentPressed:!1,selected:!0,key:e.detail.key};this.onSelectionRequested({detail:i})}}onItemPress(e){const t=e.detail.item;if(this.fireEvent("item-click",{item:t},!0)){if(!this._selectionRequested&&this.mode!==m.Delete){this._selectionRequested=!0;const i={item:t,selectionComponentPressed:!1,selected:!t.selected,key:e.detail.key};this.onSelectionRequested({detail:i})}this._selectionRequested=!1}}onItemClose(e){var r;const t=e.target;((t==null?void 0:t.hasAttribute("ui5-li-notification"))||(t==null?void 0:t.hasAttribute("ui5-li-notification-group")))&&this.fireEvent("item-close",{item:(r=e.detail)==null?void 0:r.item})}onItemToggle(e){this.fireEvent("item-toggle",{item:e.detail.item})}onForwardBefore(e){this.setPreviouslyFocusedItem(e.target),this.focusBeforeElement(),e.stopPropagation()}onForwardAfter(e){this.setPreviouslyFocusedItem(e.target),this.growsWithButton?(this.focusGrowingButton(),e.preventDefault()):this.focusAfterElement(),e.stopPropagation()}focusBeforeElement(){this.setForwardingFocus(!0),this.getBeforeElement().focus()}focusAfterElement(){this.setForwardingFocus(!0),this.getAfterElement().focus()}focusGrowingButton(){const e=this.getGrowingButton();e&&e.focus()}getGrowingButton(){return this.shadowRoot.querySelector(`[id="${this._id}-growing-btn"]`)}focusFirstItem(){const e=this.getFirstItem(t=>t._focusable);e&&e.focus()}focusPreviouslyFocusedItem(){const e=this.getPreviouslyFocusedItem();e&&e.focus()}focusFirstSelectedItem(){const e=this.getFirstItem(t=>t.selected&&t._focusable);e&&e.focus()}focusItem(e){this._itemNavigation.setCurrentItem(e),e.focus()}onFocusRequested(e){setTimeout(()=>{this.setPreviouslyFocusedItem(e.target),this.focusPreviouslyFocusedItem()},0)}setForwardingFocus(e){this._forwardingFocus=e}getForwardingFocus(){return this._forwardingFocus}setPreviouslyFocusedItem(e){this._previouslyFocusedItem=e}getPreviouslyFocusedItem(){return this._previouslyFocusedItem}getFirstItem(e){const t=this.getItems();let i=null;if(!e)return t.length?t[0]:null;for(let r=0;r<t.length;r++)if(e(t[r])){i=t[r];break}return i}getAfterElement(){return this._afterElement||(this._afterElement=this.shadowRoot.querySelector(`[id="${this._id}-after"]`)),this._afterElement}getBeforeElement(){return this._beforeElement||(this._beforeElement=this.shadowRoot.querySelector(`[id="${this._id}-before"]`)),this._beforeElement}getIntersectionObserver(){return this.growingIntersectionObserver||(this.growingIntersectionObserver=new IntersectionObserver(this.onInteresection.bind(this),{root:null,rootMargin:"0px",threshold:1})),this.growingIntersectionObserver}};u([l()],d.prototype,"headerText",void 0);u([l()],d.prototype,"footerText",void 0);u([l({type:Boolean})],d.prototype,"indent",void 0);u([l({type:m,defaultValue:m.None})],d.prototype,"mode",void 0);u([l()],d.prototype,"noDataText",void 0);u([l({type:L,defaultValue:L.All})],d.prototype,"separators",void 0);u([l({type:E,defaultValue:E.None})],d.prototype,"growing",void 0);u([l()],d.prototype,"growingButtonText",void 0);u([l({type:Boolean})],d.prototype,"busy",void 0);u([l({validator:$e,defaultValue:1e3})],d.prototype,"busyDelay",void 0);u([l()],d.prototype,"accessibleName",void 0);u([l({defaultValue:""})],d.prototype,"accessibleNameRef",void 0);u([l({defaultValue:"list"})],d.prototype,"accessibleRole",void 0);u([l({defaultValue:void 0,noAttribute:!0})],d.prototype,"accessibleRoleDescription",void 0);u([l({type:Boolean})],d.prototype,"_inViewport",void 0);u([l({type:Boolean})],d.prototype,"_loadMoreActive",void 0);u([de({type:HTMLElement,default:!0})],d.prototype,"items",void 0);u([de()],d.prototype,"header",void 0);d=I=u([G({tag:"ui5-list",fastNavigation:!0,renderer:W,template:Ze,styles:[Ae,Je],dependencies:[Fe,Xe]}),b("item-click",{detail:{item:{type:HTMLElement}}}),b("item-close",{detail:{item:{type:HTMLElement}}}),b("item-toggle",{detail:{item:{type:HTMLElement}}}),b("item-delete",{detail:{item:{type:HTMLElement}}}),b("selection-change",{detail:{selectedItems:{type:Array},previouslySelectedItems:{type:Array},targetItem:{type:HTMLElement},selectionComponentPressed:{type:Boolean},key:{type:String}}}),b("load-more"),b("item-focused",{detail:{item:{type:HTMLElement}}})],d);d.define();const tt=d,Lt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));export{Xe as D,m as L,h as M,_ as O,L as a,E as b,xt as c,tt as d,D as e,Ge as f,Lt as g,Ue as s};
