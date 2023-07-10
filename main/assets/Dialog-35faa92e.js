import{i as O,d as k}from"./Device-99b8bbf4.js";import{e as d,l as r,s as v,a as W,b as C,p as f,c as N}from"./withWebComponent-d4224c1c.js";import{s as S}from"./slot-76e48863.js";import{b as P,P as w,c as g,s as F}from"./PopupsCommon.css-1eb36bcf.js";import{j as B,o as D,p as x,q as z,s as y,v as R,w as H,x as $,y as M}from"./Icons-26e87c01.js";import{V as _}from"./ValueState-2c5e5904.js";import{k as q,a as A,d as U}from"./UI5Element-78be0f3d.js";import{I as j}from"./Icon-70a9e5b9.js";import"./information-872f55da.js";import{D as X,C as Y,E as G,F as V}from"./i18n-defaults-f002f496.js";import{s as E}from"./style-map-54298215.js";import{o as L}from"./class-map-18f572ce.js";import{s as Z}from"./BrowserScrollbar.css-119d6915.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-ebeaab24.js";import"./jsx-runtime-5926aa06.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./FocusableElements-53839075.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./decline-09ce3004.js";import"./i18n-defaults-80781f7e.js";import"./ResizeHandler-15c77712.js";import"./MediaRange-25b98f31.js";const K="resize-corner",T="M384 224v32q0 12-10 22L182 470q-10 10-22 10h-32zM224 480l160-160v32q0 12-10 22l-96 96q-10 10-22 10h-32zm160-64v32q0 12-10 22t-22 10h-32z",J=!1,Q="SAP-icons-v4",ee="@ui5/webcomponents-icons";B(K,{pathData:T,ltr:J,collection:Q,packageName:ee});const te="resize-corner",I="M386.5 305q10-8 19-8 11 0 19 8 8 10 8 19t-8 19l-161 161q-10 8-19 8t-19-8q-8-8-8-18t8-20zm38-134q8 8 8 19 0 10-8 18l-296 296q-8 8-18 8-11 0-19-8-8-7-8-19 0-11 8-19l295-295q8-8 19-8 12 0 19 8z",ie=!1,se="SAP-icons-v5",oe="@ui5/webcomponents-icons";B(te,{pathData:I,ltr:ie,collection:se,packageName:oe});q();function ne(i,e,t){return d`<section style="${E(this.styles.root)}" class="${L(this.classes.root)}" role="${r(this._role)}" aria-modal="${r(this._ariaModal)}" aria-label="${r(this._ariaLabel)}" aria-labelledby="${r(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span>${this._displayHeader?ae.call(this,i,e,t):void 0}<div style="${E(this.styles.content)}" class="${L(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this.footer.length?ge.call(this,i,e,t):void 0}${this._showResizeHandle?fe.call(this,i,e,t):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function ae(i,e,t){return d`<header><div class="ui5-popup-header-root" id="ui5-popup-header" role="group" aria-describedby=${r(this.effectiveAriaDescribedBy)} aria-roledescription=${r(this.ariaRoleDescriptionHeaderText)} tabindex="${r(this._headerTabIndex)}" @keydown="${this._onDragOrResizeKeyDown}" @mousedown="${this._onDragMouseDown}" part="header" state="${r(this.state)}">${this.hasValueState?re.call(this,i,e,t):void 0}${this.header.length?he.call(this,i,e,t):de.call(this,i,e,t)}${this.resizable?le.call(this,i,e,t):_e.call(this,i,e,t)}</div></header>`}function re(i,e,t){return t?d`<${v("ui5-icon",e,t)} class="ui5-dialog-value-state-icon" name="${r(this._dialogStateIcon)}"></${v("ui5-icon",e,t)}>`:d`<ui5-icon class="ui5-dialog-value-state-icon" name="${r(this._dialogStateIcon)}"></ui5-icon>`}function he(i,e,t){return d`<slot name="header"></slot>`}function de(i,e,t){return d`<h1 id="ui5-popup-header-text" class="ui5-popup-header-text">${r(this.headerText)}</h1>`}function le(i,e,t){return d`${this.draggable?ce.call(this,i,e,t):ue.call(this,i,e,t)}`}function ce(i,e,t){return d`<span id="${r(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${r(this.ariaDescribedByHeaderTextDraggableAndResizable)}</span>`}function ue(i,e,t){return d`<span id="${r(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${r(this.ariaDescribedByHeaderTextResizable)}</span>`}function _e(i,e,t){return d`${this.draggable?pe.call(this,i,e,t):void 0}`}function pe(i,e,t){return d`<span id="${r(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${r(this.ariaDescribedByHeaderTextDraggable)}</span>`}function ge(i,e,t){return d`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}function fe(i,e,t){return t?d`<${v("ui5-icon",e,t)} name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></${v("ui5-icon",e,t)}>`:d`<ui5-icon name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></ui5-icon>`}A("@ui5/webcomponents-theming","sap_fiori_3",async()=>W);A("@ui5/webcomponents","sap_fiori_3",async()=>C);const me={packageName:"@ui5/webcomponents",fileName:"themes/Dialog.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host {
	min-width: 20rem;
	min-height: 6rem;
	max-height: 94%;
	max-width: 90%;
	flex-direction: column;
	box-shadow: var(--sapContent_Shadow3);
	border-radius: var(--sapElement_BorderCornerRadius);
}

:host([stretch]) {
	width: 90%;
	height: 94%;
}

:host([stretch][on-phone]) {
	width: 100%;
	height: 100%;
	max-height: 100%;
	max-width: 100%;
	border-radius: 0;
}

:host([draggable]) .ui5-popup-header-root,
:host([draggable]) ::slotted([slot="header"]) {
	cursor: move;
}

:host([draggable]) .ui5-popup-header-root * {
	cursor: auto;
}

:host([draggable]) .ui5-popup-root {
	user-select: text;
}

.ui5-popup-root {
	display: flex;
	flex-direction: column;
	max-width: 100vw;
}

.ui5-popup-header-root {
	position: relative;
}

:host([state="Error"]) .ui5-popup-header-root {
	box-shadow: var(--_ui5_dialog_header_error_state_box_shadow);
}

:host([state="Information"]) .ui5-popup-header-root {
	box-shadow: var(--_ui5_dialog_header_information_state_box_shadow);
}

:host([state="Success"]) .ui5-popup-header-root {
	box-shadow: var(--_ui5_dialog_header_success_state_box_shadow);
}

:host([state="Warning"]) .ui5-popup-header-root {
	box-shadow: var(--_ui5_dialog_header_warning_state_box_shadow);
}

.ui5-dialog-value-state-icon {
	margin-inline-end: 0.5rem;
}

:host([state="Error"]) .ui5-dialog-value-state-icon {
	color: var(--_ui5_dialog_header_error_state_icon_color);
}

:host([state="Information"]) .ui5-dialog-value-state-icon {
	color: var(--_ui5_dialog_header_information_state_icon_color);
}

:host([state="Success"]) .ui5-dialog-value-state-icon {
	color: var(--_ui5_dialog_header_success_state_icon_color);
}

:host([state="Warning"]) .ui5-dialog-value-state-icon {
	color: var(--_ui5_dialog_header_warning_state_icon_color);
}

.ui5-popup-header-root {
	outline: none;
}

.ui5-popup-header-root:focus-visible:after {
	content: '';
	position: absolute;
	left: var(--_ui5_dialog_header_focus_left_offset);
	bottom: var(--_ui5_dialog_header_focus_bottom_offset);
	right: var(--_ui5_dialog_header_focus_right_offset);
	top: var(--_ui5_dialog_header_focus_top_offset);
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	border-radius: var(--_ui5_dialog_header_border_radius) var(--_ui5_dialog_header_border_radius) 0 0;
	pointer-events: none;
}

:host([stretch]) .ui5-popup-content {
	width: 100%;
	height: 100%;
}

.ui5-popup-content {
	min-height: var(--_ui5_dialog_content_min_height);
	flex: 1 1 auto;
}

.ui5-popup-resize-handle {
	position: absolute;
	bottom: var(--_ui5_dialog_resize_handle_bottom);
	inset-inline-end: var(--_ui5_dialog_resize_handle_right);
	cursor: var(--_ui5_dialog_resize_cursor);
	color: var(--_ui5_dialog_resize_handle_color);
}

:host ::slotted([slot="footer"]) {
	height: var(--_ui5_dialog_footer_height);
}

:host ::slotted([slot="footer"][ui5-bar][design="Footer"]) {
	border-top: none;
}`};var c=globalThis&&globalThis.__decorate||function(i,e,t,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var h=i.length-1;h>=0;h--)(a=i[h])&&(o=(n<3?a(o):n>3?a(e,t,o):a(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o},u;const p=16,be={[_.Error]:"error",[_.Warning]:"alert",[_.Success]:"sys-enter-2",[_.Information]:"information"};let l=u=class extends P{constructor(){super(),this._draggedOrResized=!1,this._revertSize=()=>{Object.assign(this.style,{top:"",left:"",width:"",height:""})},this._screenResizeHandler=this._screenResize.bind(this),this._dragMouseMoveHandler=this._onDragMouseMove.bind(this),this._dragMouseUpHandler=this._onDragMouseUp.bind(this),this._resizeMouseMoveHandler=this._onResizeMouseMove.bind(this),this._resizeMouseUpHandler=this._onResizeMouseUp.bind(this),this._dragStartHandler=this._handleDragStart.bind(this)}static async onDefine(){u.i18nBundle=await U("@ui5/webcomponents")}static _isHeader(e){return e.classList.contains("ui5-popup-header-root")||e.getAttribute("slot")==="header"}async show(e=!1){await super._open(e)}get isModal(){return!0}get shouldHideBackdrop(){return!1}get _ariaLabelledBy(){let e;return this.headerText!==""&&!this._ariaLabel&&(e="ui5-popup-header-text"),e}get ariaRoleDescriptionHeaderText(){return this.resizable||this.draggable?u.i18nBundle.getText(X):void 0}get effectiveAriaDescribedBy(){return this.resizable||this.draggable?`${this._id}-descr`:void 0}get ariaDescribedByHeaderTextResizable(){return u.i18nBundle.getText(Y)}get ariaDescribedByHeaderTextDraggable(){return u.i18nBundle.getText(G)}get ariaDescribedByHeaderTextDraggableAndResizable(){return u.i18nBundle.getText(V)}get _displayProp(){return"flex"}get _displayHeader(){return this.header.length||this.headerText||this.draggable||this.resizable}get _movable(){return!this.stretch&&this.onDesktop&&(this.draggable||this.resizable)}get _headerTabIndex(){return this._movable?"0":void 0}get _showResizeHandle(){return this.resizable&&this.onDesktop}get _minHeight(){let e=Number.parseInt(window.getComputedStyle(this.contentDOM).minHeight);const t=this._root.querySelector(".ui5-popup-header-root");t&&(e+=t.offsetHeight);const s=this._root.querySelector(".ui5-popup-footer-root");return s&&(e+=s.offsetHeight),e}get hasValueState(){return this.state!==_.None}get _dialogStateIcon(){return be[this.state]}get _role(){if(this.accessibleRole!==w.None)return this.state===_.Error||this.state===_.Warning?w.AlertDialog.toLowerCase():this.accessibleRole.toLowerCase()}_show(){super._show(),this._center()}onBeforeRendering(){super.onBeforeRendering(),this._isRTL=this.effectiveDir==="rtl",this.onPhone=O(),this.onDesktop=k()}onAfterRendering(){!this.isOpen()&&this.open?this.show():this.isOpen()&&!this.open&&this.close()}onEnterDOM(){super.onEnterDOM(),this._attachScreenResizeHandler(),this.addEventListener("dragstart",this._dragStartHandler)}onExitDOM(){super.onExitDOM(),this._detachScreenResizeHandler(),this.removeEventListener("dragstart",this._dragStartHandler)}_resize(){super._resize(),this._draggedOrResized||this._center()}_screenResize(){this._center()}_attachScreenResizeHandler(){this._screenResizeHandlerAttached||(window.addEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!0)}_detachScreenResizeHandler(){this._screenResizeHandlerAttached&&(window.removeEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!1)}_center(){const e=window.innerHeight-this.offsetHeight,t=window.innerWidth-this.offsetWidth;Object.assign(this.style,{top:`${Math.round(e/2)}px`,left:`${Math.round(t/2)}px`})}_onDragMouseDown(e){if(!this._movable||!this.draggable||!u._isHeader(e.target))return;e.preventDefault();const{top:t,left:s}=this.getBoundingClientRect(),{width:n,height:o}=window.getComputedStyle(this);Object.assign(this.style,{top:`${t}px`,left:`${s}px`,width:`${Math.round(Number.parseFloat(n)*100)/100}px`,height:`${Math.round(Number.parseFloat(o)*100)/100}px`}),this._x=e.clientX,this._y=e.clientY,this._draggedOrResized=!0,this._attachMouseDragHandlers()}_onDragMouseMove(e){e.preventDefault();const{clientX:t,clientY:s}=e,n=this._x-t,o=this._y-s,{left:a,top:h}=this.getBoundingClientRect();Object.assign(this.style,{left:`${Math.floor(a-n)}px`,top:`${Math.floor(h-o)}px`}),this._x=t,this._y=s}_onDragMouseUp(){delete this._x,delete this._y,this._detachMouseDragHandlers()}_onDragOrResizeKeyDown(e){if(!(!this._movable||!u._isHeader(e.target))){if(this.draggable&&[D,x,z,y].some(t=>t(e))){this._dragWithEvent(e);return}this.resizable&&[R,H,$,M].some(t=>t(e))&&this._resizeWithEvent(e)}}_dragWithEvent(e){const{top:t,left:s,width:n,height:o}=this.getBoundingClientRect();let a=0,h="top";switch(!0){case D(e):a=t-p,h="top";break;case x(e):a=t+p,h="top";break;case z(e):a=s-p,h="left";break;case y(e):a=s+p,h="left";break}a=g(a,0,h==="left"?window.innerWidth-n:window.innerHeight-o),this.style[h]=`${a}px`}_resizeWithEvent(e){this._draggedOrResized=!0,this.addEventListener("ui5-before-close",this._revertSize,{once:!0});const{top:t,left:s}=this.getBoundingClientRect(),n=window.getComputedStyle(this),o=Number.parseFloat(n.minWidth),a=window.innerWidth-s,h=window.innerHeight-t;let m=Number.parseFloat(n.width),b=Number.parseFloat(n.height);switch(!0){case R(e):b-=p;break;case H(e):b+=p;break;case $(e):m-=p;break;case M(e):m+=p;break}m=g(m,o,a),b=g(b,this._minHeight,h),Object.assign(this.style,{width:`${m}px`,height:`${b}px`})}_attachMouseDragHandlers(){window.addEventListener("mousemove",this._dragMouseMoveHandler),window.addEventListener("mouseup",this._dragMouseUpHandler)}_detachMouseDragHandlers(){window.removeEventListener("mousemove",this._dragMouseMoveHandler),window.removeEventListener("mouseup",this._dragMouseUpHandler)}_onResizeMouseDown(e){if(!this._movable||!this.resizable)return;e.preventDefault();const{top:t,left:s}=this.getBoundingClientRect(),{width:n,height:o,minWidth:a}=window.getComputedStyle(this);this._initialX=e.clientX,this._initialY=e.clientY,this._initialWidth=Number.parseFloat(n),this._initialHeight=Number.parseFloat(o),this._initialTop=t,this._initialLeft=s,this._minWidth=Number.parseFloat(a),this._cachedMinHeight=this._minHeight,Object.assign(this.style,{top:`${t}px`,left:`${s}px`}),this._draggedOrResized=!0,this._attachMouseResizeHandlers()}_onResizeMouseMove(e){const{clientX:t,clientY:s}=e;let n,o;this._isRTL?(n=g(this._initialWidth-(t-this._initialX),this._minWidth,this._initialLeft+this._initialWidth),o=g(this._initialLeft+(t-this._initialX),0,this._initialX+this._initialWidth-this._minWidth)):n=g(this._initialWidth+(t-this._initialX),this._minWidth,window.innerWidth-this._initialLeft);const a=g(this._initialHeight+(s-this._initialY),this._cachedMinHeight,window.innerHeight-this._initialTop);Object.assign(this.style,{height:`${a}px`,width:`${n}px`,left:o?`${o}px`:void 0})}_onResizeMouseUp(){delete this._initialX,delete this._initialY,delete this._initialWidth,delete this._initialHeight,delete this._initialTop,delete this._initialLeft,delete this._minWidth,delete this._cachedMinHeight,this._detachMouseResizeHandlers()}_handleDragStart(e){this.draggable&&e.preventDefault()}_attachMouseResizeHandlers(){window.addEventListener("mousemove",this._resizeMouseMoveHandler),window.addEventListener("mouseup",this._resizeMouseUpHandler),this.addEventListener("ui5-before-close",this._revertSize,{once:!0})}_detachMouseResizeHandlers(){window.removeEventListener("mousemove",this._resizeMouseMoveHandler),window.removeEventListener("mouseup",this._resizeMouseUpHandler)}};c([f()],l.prototype,"headerText",void 0);c([f({type:Boolean})],l.prototype,"stretch",void 0);c([f({type:Boolean})],l.prototype,"draggable",void 0);c([f({type:Boolean})],l.prototype,"resizable",void 0);c([f({type:_,defaultValue:_.None})],l.prototype,"state",void 0);c([f({type:Boolean})],l.prototype,"onPhone",void 0);c([f({type:Boolean})],l.prototype,"onDesktop",void 0);c([S()],l.prototype,"header",void 0);c([S()],l.prototype,"footer",void 0);l=u=c([N({tag:"ui5-dialog",template:ne,styles:[Z,F,me],dependencies:[j]})],l);l.define();const je=l;export{je as default};
//# sourceMappingURL=Dialog-35faa92e.js.map
