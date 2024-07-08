import{b as d,f as v,s as T,a as b,m as C}from"./withWebComponent-ZLYt6Z72.js";import{d as B}from"./slot-_4yKMUwC.js";import{P as L,s as O,a as w,m as _}from"./PopupsCommon.css-C9rG7FRw.js";import{c as D,D as z,C as $,K as y,S as H,O as R,w as x,t as M}from"./Keys-pFVWso__.js";import{o as g}from"./ValueState-Bg0UWejw.js";import{f as I}from"./i18nBundle-DTd686OT.js";import{I as W}from"./Icon-CzTkrOrA.js";import{f as S}from"./UI5Element-Cjk_cKug.js";import"./useIsomorphicLayoutEffect-BpDYIkAV.js";import{f as A}from"./Icons-bHVDH2o-.js";import"./information-Ds_NTOym.js";import"./alert-5g0GnjXW.js";import{a8 as N,a9 as q,aa as F,ab as P}from"./i18n-defaults-BPJU920w.js";import{s as E}from"./style-map-ZLasDAym.js";import{o as k}from"./class-map-Dho2ozJ6.js";import{l as n}from"./if-defined-9iVrMyiP.js";import{s as j}from"./BrowserScrollbar.css-DPWlQluy.js";import{s as X}from"./parameters-bundle.css-BFbT_feV.js";import"./utils-Cjkb-4uz.js";import"./CustomElementsScopeUtils-CJFx-0ms.js";import"./index-DEe9W-hO.js";import"./event-Dq0fpeHi.js";import"./Device-RcFucVeJ.js";import"./FocusableElements-Dst-wEMC.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./AriaLabelHelper-C5uDZewF.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BX_Vwu-f.js";import"./MediaRange-Bnzt26Xb.js";import"./i18n-defaults-eVMsPoDe.js";const Y="resize-corner",U="M384 224v32q0 12-10 22L182 470q-10 10-22 10h-32zM224 480l160-160v32q0 12-10 22l-96 96q-10 10-22 10h-32zm160-64v32q0 12-10 22t-22 10h-32z",G=!1,K="SAP-icons-v4",Z="@ui5/webcomponents-icons";A(Y,{pathData:U,ltr:G,collection:K,packageName:Z});const V="resize-corner",J="M202 512q-11 0-18.5-7.5T176 486q0-10 8-18l204-205q7-7 18-7t18.5 7.5T432 282t-7 18L220 505q-7 7-18 7zm128 0q-11 0-18.5-7.5T304 486q0-10 8-18l76-77q7-7 18-7t18.5 7.5T432 410t-7 18l-77 77q-7 7-18 7z",Q=!1,ee="SAP-icons-v5",te="@ui5/webcomponents-icons";A(V,{pathData:J,ltr:Q,collection:ee,packageName:te});function ie(i,e,t){return d`<div class="ui5-block-layer" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div><section root-element style="${E(this.styles.root)}" class="${k(this.classes.root)}" role="${n(this._role)}" tabindex="-1" aria-modal="${n(this._ariaModal)}" aria-label="${n(this._ariaLabel)}" aria-labelledby="${n(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span>${this._displayHeader?oe.call(this,i,e,t):void 0}<div style="${E(this.styles.content)}" class="${k(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this.footer.length?ue.call(this,i,e,t):void 0}${this._showResizeHandle?pe.call(this,i,e,t):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function oe(i,e,t){return d`<header><div class="ui5-popup-header-root" id="ui5-popup-header" role="group" aria-describedby=${n(this.effectiveAriaDescribedBy)} aria-roledescription=${n(this.ariaRoleDescriptionHeaderText)} tabindex="${n(this._headerTabIndex)}" @keydown="${this._onDragOrResizeKeyDown}" @mousedown="${this._onDragMouseDown}" part="header" state="${n(this.state)}">${this.hasValueState?se.call(this,i,e,t):void 0}${this.header.length?re.call(this,i,e,t):ae.call(this,i,e,t)}${this.resizable?ne.call(this,i,e,t):le.call(this,i,e,t)}</div></header>`}function se(i,e,t){return t?d`<${v("ui5-icon",e,t)} class="ui5-dialog-value-state-icon" name="${n(this._dialogStateIcon)}"></${v("ui5-icon",e,t)}>`:d`<ui5-icon class="ui5-dialog-value-state-icon" name="${n(this._dialogStateIcon)}"></ui5-icon>`}function re(i,e,t){return d`<slot name="header"></slot>`}function ae(i,e,t){return d`<h1 id="ui5-popup-header-text" class="ui5-popup-header-text">${n(this.headerText)}</h1>`}function ne(i,e,t){return d`${this.draggable?he.call(this,i,e,t):de.call(this,i,e,t)}`}function he(i,e,t){return d`<span id="${n(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${n(this.ariaDescribedByHeaderTextDraggableAndResizable)}</span>`}function de(i,e,t){return d`<span id="${n(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${n(this.ariaDescribedByHeaderTextResizable)}</span>`}function le(i,e,t){return d`${this.draggable?ce.call(this,i,e,t):void 0}`}function ce(i,e,t){return d`<span id="${n(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${n(this.ariaDescribedByHeaderTextDraggable)}</span>`}function ue(i,e,t){return d`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}function pe(i,e,t){return t?d`<${v("ui5-icon",e,t)} name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></${v("ui5-icon",e,t)}>`:d`<ui5-icon name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></ui5-icon>`}S("@ui5/webcomponents-theming","sap_horizon",async()=>T);S("@ui5/webcomponents","sap_horizon",async()=>X);const _e={packageName:"@ui5/webcomponents",fileName:"themes/Dialog.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{min-width:20rem;min-height:6rem;max-height:94%;max-width:90%;flex-direction:column;box-shadow:var(--sapContent_Shadow3);border-radius:var(--sapElement_BorderCornerRadius)}:host([stretch]){width:90%;height:94%}:host([stretch][on-phone]){width:100%;height:100%;max-height:100%;max-width:100%;border-radius:0}:host([draggable]) .ui5-popup-header-root,:host([draggable]) ::slotted([slot="header"]){cursor:move}:host([draggable]) .ui5-popup-header-root *{cursor:auto}:host([draggable]) .ui5-popup-root{user-select:text}::slotted([slot="header"]){max-width:100%}.ui5-popup-root{display:flex;flex-direction:column;max-width:100vw}.ui5-popup-header-root{position:relative}.ui5-popup-header-root:before{content:"";position:absolute;inset-block-start:auto;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;height:var(--_ui5-v2-0-1_dialog_header_state_line_height);background:var(--sapObjectHeader_BorderColor)}:host([state="Negative"]) .ui5-popup-header-root:before{background:var(--sapErrorBorderColor)}:host([state="Information"]) .ui5-popup-header-root:before{background:var(--sapInformationBorderColor)}:host([state="Positive"]) .ui5-popup-header-root:before{background:var(--sapSuccessBorderColor)}:host([state="Critical"]) .ui5-popup-header-root:before{background:var(--sapWarningBorderColor)}.ui5-dialog-value-state-icon{margin-inline-end:.5rem;flex-shrink:0}:host([state="Negative"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-0-1_dialog_header_error_state_icon_color)}:host([state="Information"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-0-1_dialog_header_information_state_icon_color)}:host([state="Positive"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-0-1_dialog_header_success_state_icon_color)}:host([state="Critical"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-0-1_dialog_header_warning_state_icon_color)}.ui5-popup-header-root{outline:none}:host([desktop]) .ui5-popup-header-root:focus:after,.ui5-popup-header-root:focus-visible:after{content:"";position:absolute;left:var(--_ui5-v2-0-1_dialog_header_focus_left_offset);bottom:var(--_ui5-v2-0-1_dialog_header_focus_bottom_offset);right:var(--_ui5-v2-0-1_dialog_header_focus_right_offset);top:var(--_ui5-v2-0-1_dialog_header_focus_top_offset);border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-0-1_dialog_header_border_radius) var(--_ui5-v2-0-1_dialog_header_border_radius) 0 0;pointer-events:none}:host([stretch]) .ui5-popup-content{width:100%;height:100%}.ui5-popup-content{min-height:var(--_ui5-v2-0-1_dialog_content_min_height);flex:1 1 auto}.ui5-popup-resize-handle{position:absolute;bottom:var(--_ui5-v2-0-1_dialog_resize_handle_bottom);inset-inline-end:var(--_ui5-v2-0-1_dialog_resize_handle_right);cursor:var(--_ui5-v2-0-1_dialog_resize_cursor);color:var(--_ui5-v2-0-1_dialog_resize_handle_color)}::slotted([slot="footer"]){height:var(--_ui5-v2-0-1_dialog_footer_height)}::slotted([slot="footer"][ui5-bar][design="Footer"]){border-top:none}::slotted([slot="header"][ui5-bar]){box-shadow:none}:host::backdrop{background-color:var(--_ui5-v2-0-1_popup_block_layer_background)}.ui5-block-layer{display:block}
`};var p=function(i,e,t,o){var r=arguments.length,s=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,o);else for(var h=i.length-1;h>=0;h--)(a=i[h])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},c;const u=16,ge={[g.Negative]:"error",[g.Critical]:"alert",[g.Positive]:"sys-enter-2",[g.Information]:"information"};let l=c=class extends L{constructor(){super(),this.stretch=!1,this.draggable=!1,this.resizable=!1,this.state="None",this._draggedOrResized=!1,this._revertSize=()=>{Object.assign(this.style,{top:"",left:"",width:"",height:""})},this._screenResizeHandler=this._screenResize.bind(this),this._dragMouseMoveHandler=this._onDragMouseMove.bind(this),this._dragMouseUpHandler=this._onDragMouseUp.bind(this),this._resizeMouseMoveHandler=this._onResizeMouseMove.bind(this),this._resizeMouseUpHandler=this._onResizeMouseUp.bind(this),this._dragStartHandler=this._handleDragStart.bind(this)}static async onDefine(){c.i18nBundle=await I("@ui5/webcomponents")}static _isHeader(e){return e.classList.contains("ui5-popup-header-root")||e.getAttribute("slot")==="header"}get isModal(){return!0}get _ariaLabelledBy(){let e;return this.headerText&&!this._ariaLabel&&(e="ui5-popup-header-text"),e}get ariaRoleDescriptionHeaderText(){return this.resizable||this.draggable?c.i18nBundle.getText(N):void 0}get effectiveAriaDescribedBy(){return this.resizable||this.draggable?`${this._id}-descr`:void 0}get ariaDescribedByHeaderTextResizable(){return c.i18nBundle.getText(q)}get ariaDescribedByHeaderTextDraggable(){return c.i18nBundle.getText(F)}get ariaDescribedByHeaderTextDraggableAndResizable(){return c.i18nBundle.getText(P)}get _displayHeader(){return this.header.length||this.headerText||this.draggable||this.resizable}get _movable(){return!this.stretch&&this.onDesktop&&(this.draggable||this.resizable)}get _headerTabIndex(){return this._movable?"0":void 0}get _showResizeHandle(){return this.resizable&&this.onDesktop}get _minHeight(){let e=Number.parseInt(window.getComputedStyle(this.contentDOM).minHeight);const t=this._root.querySelector(".ui5-popup-header-root");t&&(e+=t.offsetHeight);const o=this._root.querySelector(".ui5-popup-footer-root");return o&&(e+=o.offsetHeight),e}get hasValueState(){return this.state!==g.None}get _dialogStateIcon(){return ge[this.state]}get _role(){if(this.accessibleRole!==w.None)return this.state===g.Negative||this.state===g.Critical?w.AlertDialog.toLowerCase():this.accessibleRole.toLowerCase()}_show(){super._show(),this._center()}onBeforeRendering(){super.onBeforeRendering(),this._isRTL=this.effectiveDir==="rtl"}onEnterDOM(){super.onEnterDOM(),this._attachScreenResizeHandler(),this.addEventListener("dragstart",this._dragStartHandler)}onExitDOM(){super.onExitDOM(),this._detachScreenResizeHandler(),this.removeEventListener("dragstart",this._dragStartHandler)}_resize(){super._resize(),this._draggedOrResized||this._center()}_screenResize(){this._center()}_attachScreenResizeHandler(){this._screenResizeHandlerAttached||(window.addEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!0)}_detachScreenResizeHandler(){this._screenResizeHandlerAttached&&(window.removeEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!1)}_center(){const e=window.innerHeight-this.offsetHeight,t=window.innerWidth-this.offsetWidth;Object.assign(this.style,{top:`${Math.round(e/2)}px`,left:`${Math.round(t/2)}px`})}_onDragMouseDown(e){if(!this._movable||!this.draggable||!c._isHeader(e.target))return;e.preventDefault();const{top:t,left:o}=this.getBoundingClientRect(),{width:r,height:s}=window.getComputedStyle(this);Object.assign(this.style,{top:`${t}px`,left:`${o}px`,width:`${Math.round(Number.parseFloat(r)*100)/100}px`,height:`${Math.round(Number.parseFloat(s)*100)/100}px`}),this._x=e.clientX,this._y=e.clientY,this._draggedOrResized=!0,this._attachMouseDragHandlers()}_onDragMouseMove(e){e.preventDefault();const{clientX:t,clientY:o}=e,r=this._x-t,s=this._y-o,{left:a,top:h}=this.getBoundingClientRect();Object.assign(this.style,{left:`${Math.floor(a-r)}px`,top:`${Math.floor(h-s)}px`}),this._x=t,this._y=o}_onDragMouseUp(){delete this._x,delete this._y,this._detachMouseDragHandlers()}_onDragOrResizeKeyDown(e){if(!(!this._movable||!c._isHeader(e.target))){if(this.draggable&&[D,z,$,y].some(t=>t(e))){this._dragWithEvent(e);return}this.resizable&&[H,R,x,M].some(t=>t(e))&&this._resizeWithEvent(e)}}_dragWithEvent(e){const{top:t,left:o,width:r,height:s}=this.getBoundingClientRect();let a=0,h="top";switch(!0){case D(e):a=t-u,h="top";break;case z(e):a=t+u,h="top";break;case $(e):a=o-u,h="left";break;case y(e):a=o+u,h="left";break}a=_(a,0,h==="left"?window.innerWidth-r:window.innerHeight-s),this.style[h]=`${a}px`}_resizeWithEvent(e){this._draggedOrResized=!0,this.addEventListener("ui5-before-close",this._revertSize,{once:!0});const{top:t,left:o}=this.getBoundingClientRect(),r=window.getComputedStyle(this),s=Number.parseFloat(r.minWidth),a=window.innerWidth-o,h=window.innerHeight-t;let f=Number.parseFloat(r.width),m=Number.parseFloat(r.height);switch(!0){case H(e):m-=u;break;case R(e):m+=u;break;case x(e):f-=u;break;case M(e):f+=u;break}f=_(f,s,a),m=_(m,this._minHeight,h),Object.assign(this.style,{width:`${f}px`,height:`${m}px`})}_attachMouseDragHandlers(){window.addEventListener("mousemove",this._dragMouseMoveHandler),window.addEventListener("mouseup",this._dragMouseUpHandler)}_detachMouseDragHandlers(){window.removeEventListener("mousemove",this._dragMouseMoveHandler),window.removeEventListener("mouseup",this._dragMouseUpHandler)}_onResizeMouseDown(e){if(!this._movable||!this.resizable)return;e.preventDefault();const{top:t,left:o}=this.getBoundingClientRect(),{width:r,height:s,minWidth:a}=window.getComputedStyle(this);this._initialX=e.clientX,this._initialY=e.clientY,this._initialWidth=Number.parseFloat(r),this._initialHeight=Number.parseFloat(s),this._initialTop=t,this._initialLeft=o,this._minWidth=Number.parseFloat(a),this._cachedMinHeight=this._minHeight,Object.assign(this.style,{top:`${t}px`,left:`${o}px`}),this._draggedOrResized=!0,this._attachMouseResizeHandlers()}_onResizeMouseMove(e){const{clientX:t,clientY:o}=e;let r,s;this._isRTL?(r=_(this._initialWidth-(t-this._initialX),this._minWidth,this._initialLeft+this._initialWidth),s=_(this._initialLeft+(t-this._initialX),0,this._initialX+this._initialWidth-this._minWidth)):r=_(this._initialWidth+(t-this._initialX),this._minWidth,window.innerWidth-this._initialLeft);const a=_(this._initialHeight+(o-this._initialY),this._cachedMinHeight,window.innerHeight-this._initialTop);Object.assign(this.style,{height:`${a}px`,width:`${r}px`,left:s?`${s}px`:void 0})}_onResizeMouseUp(){delete this._initialX,delete this._initialY,delete this._initialWidth,delete this._initialHeight,delete this._initialTop,delete this._initialLeft,delete this._minWidth,delete this._cachedMinHeight,this._detachMouseResizeHandlers()}_handleDragStart(e){this.draggable&&e.preventDefault()}_attachMouseResizeHandlers(){window.addEventListener("mousemove",this._resizeMouseMoveHandler),window.addEventListener("mouseup",this._resizeMouseUpHandler),this.addEventListener("ui5-before-close",this._revertSize,{once:!0})}_detachMouseResizeHandlers(){window.removeEventListener("mousemove",this._resizeMouseMoveHandler),window.removeEventListener("mouseup",this._resizeMouseUpHandler)}};p([b()],l.prototype,"headerText",void 0);p([b({type:Boolean})],l.prototype,"stretch",void 0);p([b({type:Boolean})],l.prototype,"draggable",void 0);p([b({type:Boolean})],l.prototype,"resizable",void 0);p([b()],l.prototype,"state",void 0);p([B()],l.prototype,"header",void 0);p([B()],l.prototype,"footer",void 0);l=c=p([C({tag:"ui5-dialog",template:ie,styles:[L.styles,j,O,_e],dependencies:[W]})],l);l.define();const Ke=l;export{Ke as default};
