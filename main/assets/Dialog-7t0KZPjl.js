import{h as O,r as L,j as I,l as W}from"./UI5Element-66_7Xn_3.js";import{b as d,l as n,d as v,s as C,a as N,p as f,c as P}from"./withWebComponent-2sjwM42G.js";import{s as S}from"./slot-HSrR9XJ-.js";import{a as q,P as w,c as g,s as F}from"./PopupsCommon.css-dDtjLgUi.js";import{r as A,d as D,e as z,b as R,c as y,v as H,w as $,C as x,D as M}from"./Icons-nm0Q71Sx.js";import{V as p}from"./ValueState-zUcANXoY.js";import{d as j}from"./i18nBundle-Q0g0h3jg.js";import{a as U}from"./Icon-Pjew2RCR.js";import"./information-ME8CmmmC.js";import"./alert-Ymv9FYbl.js";import{ab as X,ac as Y,ad as G,ae as V}from"./i18n-defaults-RBzcmDt8.js";import{s as E}from"./style-map-Pb14hoiG.js";import{o as B}from"./class-map--IQ_mtyb.js";import{s as Z}from"./BrowserScrollbar.css-F0Fjr-0B.js";import"./VersionInfo-pP_ltRZs.js";import"./CustomElementsScopeUtils-EW5YHFd4.js";import"./utils-QJOW-WwB.js";import"./index-OjgoNOWw.js";import"./jsx-runtime-DtaoT6pD.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./FocusableElements-yzAVBk6R.js";import"./isElementHidden-d3-Fo4V6.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./decline-qJ6wR11R.js";import"./i18n-defaults-n2A5pq_J.js";import"./PopupUtils-yApLm5YW.js";import"./getActiveElement-IIKAy3xo.js";import"./ResizeHandler-hw9R1O21.js";import"./MediaRange-sEMt71Ve.js";const K="resize-corner",k="M384 224v32q0 12-10 22L182 470q-10 10-22 10h-32zM224 480l160-160v32q0 12-10 22l-96 96q-10 10-22 10h-32zm160-64v32q0 12-10 22t-22 10h-32z",J=!1,Q="SAP-icons-v4",ee="@ui5/webcomponents-icons";A(K,{pathData:k,ltr:J,collection:Q,packageName:ee});const te="resize-corner",T="M202 512q-11 0-18.5-7.5T176 486q0-10 8-18l204-205q7-7 18-7t18.5 7.5T432 282t-7 18L220 505q-7 7-18 7zm128 0q-11 0-18.5-7.5T304 486q0-10 8-18l76-77q7-7 18-7t18.5 7.5T432 410t-7 18l-77 77q-7 7-18 7z",ie=!1,se="SAP-icons-v5",oe="@ui5/webcomponents-icons";A(te,{pathData:T,ltr:ie,collection:se,packageName:oe});O();function re(i,e,t){return d`<section style="${E(this.styles.root)}" class="${B(this.classes.root)}" role="${n(this._role)}" aria-modal="${n(this._ariaModal)}" aria-label="${n(this._ariaLabel)}" aria-labelledby="${n(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span>${this._displayHeader?ae.call(this,i,e,t):void 0}<div style="${E(this.styles.content)}" class="${B(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this.footer.length?ge.call(this,i,e,t):void 0}${this._showResizeHandle?fe.call(this,i,e,t):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function ae(i,e,t){return d`<header><div class="ui5-popup-header-root" id="ui5-popup-header" role="group" aria-describedby=${n(this.effectiveAriaDescribedBy)} aria-roledescription=${n(this.ariaRoleDescriptionHeaderText)} tabindex="${n(this._headerTabIndex)}" @keydown="${this._onDragOrResizeKeyDown}" @mousedown="${this._onDragMouseDown}" part="header" state="${n(this.state)}">${this.hasValueState?ne.call(this,i,e,t):void 0}${this.header.length?he.call(this,i,e,t):de.call(this,i,e,t)}${this.resizable?le.call(this,i,e,t):pe.call(this,i,e,t)}</div></header>`}function ne(i,e,t){return t?d`<${v("ui5-icon",e,t)} class="ui5-dialog-value-state-icon" name="${n(this._dialogStateIcon)}"></${v("ui5-icon",e,t)}>`:d`<ui5-icon class="ui5-dialog-value-state-icon" name="${n(this._dialogStateIcon)}"></ui5-icon>`}function he(i,e,t){return d`<slot name="header"></slot>`}function de(i,e,t){return d`<h1 id="ui5-popup-header-text" class="ui5-popup-header-text">${n(this.headerText)}</h1>`}function le(i,e,t){return d`${this.draggable?ce.call(this,i,e,t):ue.call(this,i,e,t)}`}function ce(i,e,t){return d`<span id="${n(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${n(this.ariaDescribedByHeaderTextDraggableAndResizable)}</span>`}function ue(i,e,t){return d`<span id="${n(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${n(this.ariaDescribedByHeaderTextResizable)}</span>`}function pe(i,e,t){return d`${this.draggable?_e.call(this,i,e,t):void 0}`}function _e(i,e,t){return d`<span id="${n(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${n(this.ariaDescribedByHeaderTextDraggable)}</span>`}function ge(i,e,t){return d`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}function fe(i,e,t){return t?d`<${v("ui5-icon",e,t)} name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></${v("ui5-icon",e,t)}>`:d`<ui5-icon name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></ui5-icon>`}L("@ui5/webcomponents-theming","sap_horizon",async()=>C);L("@ui5/webcomponents","sap_horizon",async()=>N);const me={packageName:"@ui5/webcomponents",fileName:"themes/Dialog.css",content:'.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host{border-radius:var(--sapElement_BorderCornerRadius);box-shadow:var(--sapContent_Shadow3);flex-direction:column;max-height:94%;max-width:90%;min-height:6rem;min-width:20rem}:host([stretch]){height:94%;width:90%}:host([stretch][on-phone]){border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}:host([draggable]) .ui5-popup-header-root,:host([draggable]) ::slotted([slot=header]){cursor:move}:host([draggable]) .ui5-popup-header-root *{cursor:auto}:host([draggable]) .ui5-popup-root{user-select:text}.ui5-popup-root{display:flex;flex-direction:column;max-width:100vw}.ui5-popup-header-root{position:relative}.ui5-popup-header-root:before{background:var(--sapObjectHeader_BorderColor);content:"";height:var(--_ui5-v1-19-0_dialog_header_state_line_height);inset-block-end:0;inset-block-start:auto;inset-inline-end:0;inset-inline-start:0;position:absolute}:host([state=Error]) .ui5-popup-header-root:before{background:var(--sapErrorBorderColor)}:host([state=Information]) .ui5-popup-header-root:before{background:var(--sapInformationBorderColor)}:host([state=Success]) .ui5-popup-header-root:before{background:var(--sapSuccessBorderColor)}:host([state=Warning]) .ui5-popup-header-root:before{background:var(--sapWarningBorderColor)}.ui5-dialog-value-state-icon{margin-inline-end:.5rem}:host([state=Error]) .ui5-dialog-value-state-icon{color:var(--_ui5-v1-19-0_dialog_header_error_state_icon_color)}:host([state=Information]) .ui5-dialog-value-state-icon{color:var(--_ui5-v1-19-0_dialog_header_information_state_icon_color)}:host([state=Success]) .ui5-dialog-value-state-icon{color:var(--_ui5-v1-19-0_dialog_header_success_state_icon_color)}:host([state=Warning]) .ui5-dialog-value-state-icon{color:var(--_ui5-v1-19-0_dialog_header_warning_state_icon_color)}.ui5-popup-header-root{outline:none}.ui5-popup-header-root:focus:after{border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v1-19-0_dialog_header_border_radius) var(--_ui5-v1-19-0_dialog_header_border_radius) 0 0;bottom:var(--_ui5-v1-19-0_dialog_header_focus_bottom_offset);content:"";left:var(--_ui5-v1-19-0_dialog_header_focus_left_offset);pointer-events:none;position:absolute;right:var(--_ui5-v1-19-0_dialog_header_focus_right_offset);top:var(--_ui5-v1-19-0_dialog_header_focus_top_offset)}:host([stretch]) .ui5-popup-content{height:100%;width:100%}.ui5-popup-content{flex:1 1 auto;min-height:var(--_ui5-v1-19-0_dialog_content_min_height)}.ui5-popup-resize-handle{bottom:var(--_ui5-v1-19-0_dialog_resize_handle_bottom);color:var(--_ui5-v1-19-0_dialog_resize_handle_color);cursor:var(--_ui5-v1-19-0_dialog_resize_cursor);inset-inline-end:var(--_ui5-v1-19-0_dialog_resize_handle_right);position:absolute}::slotted([slot=footer]){height:var(--_ui5-v1-19-0_dialog_footer_height)}::slotted([slot=footer][ui5-bar][design=Footer]){border-top:none}::slotted([slot=header][ui5-bar]){box-shadow:none}'};var c=function(i,e,t,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var h=i.length-1;h>=0;h--)(a=i[h])&&(o=(r<3?a(o):r>3?a(e,t,o):a(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o},u;const _=16,be={[p.Error]:"error",[p.Warning]:"alert",[p.Success]:"sys-enter-2",[p.Information]:"information"};let l=u=class extends q{constructor(){super(),this._draggedOrResized=!1,this._revertSize=()=>{Object.assign(this.style,{top:"",left:"",width:"",height:""})},this._screenResizeHandler=this._screenResize.bind(this),this._dragMouseMoveHandler=this._onDragMouseMove.bind(this),this._dragMouseUpHandler=this._onDragMouseUp.bind(this),this._resizeMouseMoveHandler=this._onResizeMouseMove.bind(this),this._resizeMouseUpHandler=this._onResizeMouseUp.bind(this),this._dragStartHandler=this._handleDragStart.bind(this)}static async onDefine(){u.i18nBundle=await j("@ui5/webcomponents")}static _isHeader(e){return e.classList.contains("ui5-popup-header-root")||e.getAttribute("slot")==="header"}async show(e=!1){await super._open(e)}get isModal(){return!0}get shouldHideBackdrop(){return!1}get _ariaLabelledBy(){let e;return this.headerText!==""&&!this._ariaLabel&&(e="ui5-popup-header-text"),e}get ariaRoleDescriptionHeaderText(){return this.resizable||this.draggable?u.i18nBundle.getText(X):void 0}get effectiveAriaDescribedBy(){return this.resizable||this.draggable?`${this._id}-descr`:void 0}get ariaDescribedByHeaderTextResizable(){return u.i18nBundle.getText(Y)}get ariaDescribedByHeaderTextDraggable(){return u.i18nBundle.getText(G)}get ariaDescribedByHeaderTextDraggableAndResizable(){return u.i18nBundle.getText(V)}get _displayProp(){return"flex"}get _displayHeader(){return this.header.length||this.headerText||this.draggable||this.resizable}get _movable(){return!this.stretch&&this.onDesktop&&(this.draggable||this.resizable)}get _headerTabIndex(){return this._movable?"0":void 0}get _showResizeHandle(){return this.resizable&&this.onDesktop}get _minHeight(){let e=Number.parseInt(window.getComputedStyle(this.contentDOM).minHeight);const t=this._root.querySelector(".ui5-popup-header-root");t&&(e+=t.offsetHeight);const s=this._root.querySelector(".ui5-popup-footer-root");return s&&(e+=s.offsetHeight),e}get hasValueState(){return this.state!==p.None}get _dialogStateIcon(){return be[this.state]}get _role(){if(this.accessibleRole!==w.None)return this.state===p.Error||this.state===p.Warning?w.AlertDialog.toLowerCase():this.accessibleRole.toLowerCase()}_show(){super._show(),this._center()}onBeforeRendering(){super.onBeforeRendering(),this._isRTL=this.effectiveDir==="rtl",this.onPhone=I(),this.onDesktop=W()}onAfterRendering(){super.onAfterRendering(),!this.isOpen()&&this.open?this.show():this.isOpen()&&!this.open&&this.close()}onEnterDOM(){super.onEnterDOM(),this._attachScreenResizeHandler(),this.addEventListener("dragstart",this._dragStartHandler)}onExitDOM(){super.onExitDOM(),this._detachScreenResizeHandler(),this.removeEventListener("dragstart",this._dragStartHandler)}_resize(){super._resize(),this._draggedOrResized||this._center()}_screenResize(){this._center()}_attachScreenResizeHandler(){this._screenResizeHandlerAttached||(window.addEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!0)}_detachScreenResizeHandler(){this._screenResizeHandlerAttached&&(window.removeEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!1)}_center(){const e=window.innerHeight-this.offsetHeight,t=window.innerWidth-this.offsetWidth;Object.assign(this.style,{top:`${Math.round(e/2)}px`,left:`${Math.round(t/2)}px`})}_onDragMouseDown(e){if(!this._movable||!this.draggable||!u._isHeader(e.target))return;e.preventDefault();const{top:t,left:s}=this.getBoundingClientRect(),{width:r,height:o}=window.getComputedStyle(this);Object.assign(this.style,{top:`${t}px`,left:`${s}px`,width:`${Math.round(Number.parseFloat(r)*100)/100}px`,height:`${Math.round(Number.parseFloat(o)*100)/100}px`}),this._x=e.clientX,this._y=e.clientY,this._draggedOrResized=!0,this._attachMouseDragHandlers()}_onDragMouseMove(e){e.preventDefault();const{clientX:t,clientY:s}=e,r=this._x-t,o=this._y-s,{left:a,top:h}=this.getBoundingClientRect();Object.assign(this.style,{left:`${Math.floor(a-r)}px`,top:`${Math.floor(h-o)}px`}),this._x=t,this._y=s}_onDragMouseUp(){delete this._x,delete this._y,this._detachMouseDragHandlers()}_onDragOrResizeKeyDown(e){if(!(!this._movable||!u._isHeader(e.target))){if(this.draggable&&[D,z,R,y].some(t=>t(e))){this._dragWithEvent(e);return}this.resizable&&[H,$,x,M].some(t=>t(e))&&this._resizeWithEvent(e)}}_dragWithEvent(e){const{top:t,left:s,width:r,height:o}=this.getBoundingClientRect();let a=0,h="top";switch(!0){case D(e):a=t-_,h="top";break;case z(e):a=t+_,h="top";break;case R(e):a=s-_,h="left";break;case y(e):a=s+_,h="left";break}a=g(a,0,h==="left"?window.innerWidth-r:window.innerHeight-o),this.style[h]=`${a}px`}_resizeWithEvent(e){this._draggedOrResized=!0,this.addEventListener("ui5-before-close",this._revertSize,{once:!0});const{top:t,left:s}=this.getBoundingClientRect(),r=window.getComputedStyle(this),o=Number.parseFloat(r.minWidth),a=window.innerWidth-s,h=window.innerHeight-t;let m=Number.parseFloat(r.width),b=Number.parseFloat(r.height);switch(!0){case H(e):b-=_;break;case $(e):b+=_;break;case x(e):m-=_;break;case M(e):m+=_;break}m=g(m,o,a),b=g(b,this._minHeight,h),Object.assign(this.style,{width:`${m}px`,height:`${b}px`})}_attachMouseDragHandlers(){window.addEventListener("mousemove",this._dragMouseMoveHandler),window.addEventListener("mouseup",this._dragMouseUpHandler)}_detachMouseDragHandlers(){window.removeEventListener("mousemove",this._dragMouseMoveHandler),window.removeEventListener("mouseup",this._dragMouseUpHandler)}_onResizeMouseDown(e){if(!this._movable||!this.resizable)return;e.preventDefault();const{top:t,left:s}=this.getBoundingClientRect(),{width:r,height:o,minWidth:a}=window.getComputedStyle(this);this._initialX=e.clientX,this._initialY=e.clientY,this._initialWidth=Number.parseFloat(r),this._initialHeight=Number.parseFloat(o),this._initialTop=t,this._initialLeft=s,this._minWidth=Number.parseFloat(a),this._cachedMinHeight=this._minHeight,Object.assign(this.style,{top:`${t}px`,left:`${s}px`}),this._draggedOrResized=!0,this._attachMouseResizeHandlers()}_onResizeMouseMove(e){const{clientX:t,clientY:s}=e;let r,o;this._isRTL?(r=g(this._initialWidth-(t-this._initialX),this._minWidth,this._initialLeft+this._initialWidth),o=g(this._initialLeft+(t-this._initialX),0,this._initialX+this._initialWidth-this._minWidth)):r=g(this._initialWidth+(t-this._initialX),this._minWidth,window.innerWidth-this._initialLeft);const a=g(this._initialHeight+(s-this._initialY),this._cachedMinHeight,window.innerHeight-this._initialTop);Object.assign(this.style,{height:`${a}px`,width:`${r}px`,left:o?`${o}px`:void 0})}_onResizeMouseUp(){delete this._initialX,delete this._initialY,delete this._initialWidth,delete this._initialHeight,delete this._initialTop,delete this._initialLeft,delete this._minWidth,delete this._cachedMinHeight,this._detachMouseResizeHandlers()}_handleDragStart(e){this.draggable&&e.preventDefault()}_attachMouseResizeHandlers(){window.addEventListener("mousemove",this._resizeMouseMoveHandler),window.addEventListener("mouseup",this._resizeMouseUpHandler),this.addEventListener("ui5-before-close",this._revertSize,{once:!0})}_detachMouseResizeHandlers(){window.removeEventListener("mousemove",this._resizeMouseMoveHandler),window.removeEventListener("mouseup",this._resizeMouseUpHandler)}};c([f()],l.prototype,"headerText",void 0);c([f({type:Boolean})],l.prototype,"stretch",void 0);c([f({type:Boolean})],l.prototype,"draggable",void 0);c([f({type:Boolean})],l.prototype,"resizable",void 0);c([f({type:p,defaultValue:p.None})],l.prototype,"state",void 0);c([f({type:Boolean})],l.prototype,"onPhone",void 0);c([f({type:Boolean})],l.prototype,"onDesktop",void 0);c([S()],l.prototype,"header",void 0);c([S()],l.prototype,"footer",void 0);l=u=c([P({tag:"ui5-dialog",template:re,styles:[Z,F,me],dependencies:[U]})],l);l.define();const Ve=l;export{Ve as default};
//# sourceMappingURL=Dialog-7t0KZPjl.js.map
