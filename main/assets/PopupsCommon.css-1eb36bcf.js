import{e as L,l as f,a as g,b,p as r,c as B,d as $}from"./withWebComponent-d4224c1c.js";import{a as l,t as T,u as O,U as M,v as D,w as N,x as z,y as I}from"./UI5Element-78be0f3d.js";import{e as d}from"./Icon-70a9e5b9.js";import{s as H}from"./slot-76e48863.js";import{c as w,g as A}from"./Device-99b8bbf4.js";import{g as k,a as C}from"./FocusableElements-53839075.js";import{g as V}from"./AriaLabelHelper-43a261ec.js";import{g as G}from"./decline-09ce3004.js";import{d as j,e as W,c as X}from"./Icons-26e87c01.js";import{R as P}from"./ResizeHandler-15c77712.js";import{M as F}from"./MediaRange-25b98f31.js";import{s as v}from"./style-map-54298215.js";import{o as R}from"./class-map-18f572ce.js";var x;(function(t){t.None="None",t.Dialog="Dialog",t.AlertDialog="AlertDialog"})(x||(x={}));const m=x,me=(t,e,o)=>Math.min(Math.max(t,e),o);function q(t,e,o){return L`<section style="${v(this.styles.root)}" class="${R(this.classes.root)}" role="${f(this._role)}" aria-modal="${f(this._ariaModal)}" aria-label="${f(this._ariaLabel)}" aria-labelledby="${f(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><div style="${v(this.styles.content)}" class="${R(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div><span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function U(t,e,o){return L`<div class="ui5-block-layer" ?hidden=${this._blockLayerHidden} tabindex="0" style="${v(this.styles.blockLayer)}" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div>`}let s=[];const Z=(t,e=[])=>{s.some(o=>o.instance===t)||s.push({instance:t,parentPopovers:e}),S(),s.length===1&&K()},J=t=>{s=s.filter(e=>e.instance!==t),S(),s.length||Q()},ge=()=>[...s],E=t=>{s.length&&j(t)&&s[s.length-1].instance.close(!0)},K=()=>{document.addEventListener("keydown",E)},Q=()=>{document.removeEventListener("keydown",E)},S=()=>{let t,e=!1;for(let o=s.length-1;o>=0;o--)t=s[o].instance,!e&&t.isModal?(t.isTopModalPopup=!0,e=!0):t.isTopModalPopup=!1};l("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);l("@ui5/webcomponents","sap_fiori_3",async()=>b);const Y={packageName:"@ui5/webcomponents",fileName:"themes/Popup.css",content:`:host {
    min-width: 1px; /** So that it can always get focus **/
    display: none;
    position: fixed;
}
`};l("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);l("@ui5/webcomponents","sap_fiori_3",async()=>b);const ee={packageName:"@ui5/webcomponents",fileName:"themes/PopupStaticAreaStyles.css",content:`.ui5-block-layer {
	display: none;
	position: fixed;
	background-color: var(--sapBlockLayer_Background);
	opacity: 0.6;
	top: -500px;
	left: -500px;
	right: -500px;
	bottom: -500px;
	outline: none;
	pointer-events: all;
	z-index: -1;
}

.ui5-block-layer:not([hidden]) {
	display: inline-block;
}`};l("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);l("@ui5/webcomponents","sap_fiori_3",async()=>b);const te={packageName:"@ui5/webcomponents",fileName:"themes/PopupGlobal.css",content:`.ui5-popup-scroll-blocker {
	overflow: hidden;
}
`};var i=globalThis&&globalThis.__decorate||function(t,e,o,a){var u=arguments.length,p=u<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,o):a,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(t,e,o,a);else for(var y=t.length-1;y>=0;y--)(h=t[y])&&(p=(u<3?h(p):u>3?h(e,o,p):h(e,o))||p);return u>3&&p&&Object.defineProperty(e,o,p),p},c;const oe=()=>{T("data-ui5-popup-scroll-blocker")||O(te,"data-ui5-popup-scroll-blocker")};oe();const _=new Set;let n=c=class extends M{constructor(){super(),this._resizeHandler=this._resize.bind(this)}onBeforeRendering(){this._blockLayerHidden=!this.isOpen()||!this.isTopModalPopup}onEnterDOM(){P.register(this,this._resizeHandler)}onExitDOM(){this.isOpen()&&(c.unblockPageScrolling(this),this._removeOpenedPopup()),P.deregister(this,this._resizeHandler)}get _displayProp(){return"block"}_resize(){this.mediaRange=F.getCurrentRange(F.RANGESETS.RANGE_4STEPS,this.getDomRef().offsetWidth)}_preventBlockLayerFocus(e){e.preventDefault()}static blockPageScrolling(e){_.add(e),_.size===1&&document.documentElement.classList.add("ui5-popup-scroll-blocker")}static unblockPageScrolling(e){_.delete(e),_.size===0&&document.documentElement.classList.remove("ui5-popup-scroll-blocker")}_scroll(e){this.fireEvent("scroll",{scrollTop:e.target.scrollTop,targetRef:e.target})}_onkeydown(e){const o=e.target===this._root&&W(e),a=X(e)&&!this.isOpen();(o||a)&&e.preventDefault()}_onfocusout(e){e.relatedTarget||(this._shouldFocusRoot=!0)}_onmousedown(e){w()||this._root.removeAttribute("tabindex"),this.shadowRoot.contains(e.target)?this._shouldFocusRoot=!0:this._shouldFocusRoot=!1}_onmouseup(){w()||(this._root.tabIndex=-1),this._shouldFocusRoot&&(A()&&this._root.focus(),this._shouldFocusRoot=!1)}async forwardToFirst(){const e=await k(this);e?e.focus({focusVisible:!0}):this._root.focus()}async forwardToLast(){const e=await C(this);e?e.focus({focusVisible:!0}):this._root.focus()}async applyInitialFocus(){await this.applyFocus()}async applyFocus(){if(await this._waitForDomRef(),this.getRootNode()===this)return;const e=this.getRootNode().getElementById(this.initialFocus)||document.getElementById(this.initialFocus)||await k(this)||this._root;e&&(e===this._root&&(e.tabIndex=-1),e.focus({focusVisible:!0}))}isOpen(){return this.opened}isFocusWithin(){return D(this._root)}async _open(e){var a;this.fireEvent("before-open",{},!0,!1)&&(this.isModal&&!this.shouldHideBackdrop&&(this.getStaticAreaItemDomRef(),this._blockLayerHidden=!1,c.blockPageScrolling(this)),this._zIndex=N(),this.style.zIndex=((a=this._zIndex)==null?void 0:a.toString())||"",this._focusedElementBeforeOpen=z(),this._show(),this._addOpenedPopup(),this.opened=!0,this.open=!0,await I(),!this._disableInitialFocus&&!e&&await this.applyInitialFocus(),this.fireEvent("after-open",{},!1,!1))}_addOpenedPopup(){Z(this)}close(e=!1,o=!1,a=!1){!this.opened||!this.fireEvent("before-close",{escPressed:e},!0,!1)||(this.isModal&&(this._blockLayerHidden=!0,c.unblockPageScrolling(this)),this.hide(),this.opened=!1,this.open=!1,o||this._removeOpenedPopup(),!this.preventFocusRestore&&!a&&this.resetFocus(),this.fireEvent("after-close",{},!1,!1))}_removeOpenedPopup(){J(this)}resetFocus(){this._focusedElementBeforeOpen&&(this._focusedElementBeforeOpen.focus({focusVisible:!0}),this._focusedElementBeforeOpen=null)}_show(){this.style.display=this._displayProp}hide(){this.style.display="none"}get _ariaLabel(){return V(this)}get _root(){return this.shadowRoot.querySelector(".ui5-popup-root")}get _role(){return this.accessibleRole===m.None?void 0:this.accessibleRole.toLowerCase()}get _ariaModal(){return this.accessibleRole===m.None?void 0:"true"}get contentDOM(){return this.shadowRoot.querySelector(".ui5-popup-content")}get styles(){return{root:{},content:{},blockLayer:{zIndex:this._zIndex?this._zIndex-1:""}}}get classes(){return{root:{"ui5-popup-root":!0,"ui5-content-native-scrollbars":G()},content:{"ui5-popup-content":!0}}}};i([r()],n.prototype,"initialFocus",void 0);i([r({type:Boolean})],n.prototype,"preventFocusRestore",void 0);i([r({type:Boolean})],n.prototype,"open",void 0);i([r({type:Boolean,noAttribute:!0})],n.prototype,"opened",void 0);i([r({defaultValue:void 0})],n.prototype,"accessibleName",void 0);i([r({defaultValue:""})],n.prototype,"accessibleNameRef",void 0);i([r({type:m,defaultValue:m.Dialog})],n.prototype,"accessibleRole",void 0);i([r()],n.prototype,"mediaRange",void 0);i([r({type:Boolean})],n.prototype,"_disableInitialFocus",void 0);i([r({type:Boolean})],n.prototype,"_blockLayerHidden",void 0);i([r({type:Boolean,noAttribute:!0})],n.prototype,"isTopModalPopup",void 0);i([H({type:HTMLElement,default:!0})],n.prototype,"content",void 0);n=c=i([B({renderer:$,styles:Y,template:q,staticAreaTemplate:U,staticAreaStyles:ee}),d("before-open"),d("after-open"),d("before-close",{escPressed:{type:Boolean}}),d("after-close"),d("scroll")],n);const ye=n;l("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);l("@ui5/webcomponents","sap_fiori_3",async()=>b);const ve={packageName:"@ui5/webcomponents",fileName:"themes/PopupsCommon.css",content:`:host {
    display: none;
    position: fixed;
    background: var(--sapGroup_ContentBackground);
    border-radius: var(--_ui5_popup_border_radius);
    min-height: 2rem;
    box-sizing: border-box;
}

.ui5-popup-root {
    background: inherit;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    outline: none;
}

.ui5-popup-root .ui5-popup-header-root {
    color: var(--sapPageHeader_TextColor);
    box-shadow: var(--sapContent_HeaderShadow);
    margin-bottom: 0.125rem;
}

.ui5-popup-content {
    color: var(--sapTextColor);
}

.ui5-popup-footer-root {
    background: var(--sapPageFooter_Background);
    border-top: 1px solid var(--sapPageFooter_BorderColor);
    color: var(--sapPageFooter_TextColor);
}

.ui5-popup-header-root,
.ui5-popup-footer-root,
:host([header-text]) .ui5-popup-header-text {
    margin: 0;
    font-size: 1rem;
    font-family: "72override", var(--_ui5_popup_header_font_family);
    display: flex;
    justify-content: center;
    align-items: center;
}

.ui5-popup-header-root .ui5-popup-header-text {
	font-weight: var(--_ui5_popup_header_font_weight);
}

.ui5-popup-content {
    overflow: auto;

    /* Consider how to make this top level */
    box-sizing: border-box;
}

:host([header-text]) .ui5-popup-header-text {
    text-align: center;
    min-height: var(--_ui5_popup_default_header_height);
    max-height: var(--_ui5_popup_default_header_height);
    line-height: var(--_ui5_popup_default_header_height);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    display: inline-block;
}

:host([header-text]) .ui5-popup-header-root {
	justify-content: var(--_ui5_popup_header_prop_header_text_alignment);
}

:host(:not([header-text])) .ui5-popup-header-text {
    display: none;
}

:host([disable-scrolling]) .ui5-popup-content {
    overflow: hidden;
}

/*** Responsive paddings for the content***/

:host([media-range="S"]) .ui5-popup-content {
	padding: 1rem var(--_ui5_popup_content_padding_s);
}

:host([media-range="M"]) .ui5-popup-content,
:host([media-range="L"]) .ui5-popup-content {
	padding: 1rem var(--_ui5_popup_content_padding_m_l);
}

:host([media-range="XL"]) .ui5-popup-content {
	padding: 1rem var(--_ui5_popup_content_padding_xl);
}

.ui5-popup-header-root {
	background: var(--sapPageHeader_Background);
}

/*** Responsive paddings for the Header and Footer ***/

:host([media-range="S"]) .ui5-popup-header-root,
:host([media-range="S"]) .ui5-popup-footer-root {
	padding-left: var(--_ui5_popup_header_footer_padding_s);
	padding-right: var(--_ui5_popup_header_footer_padding_s);
}

:host([media-range="M"]) .ui5-popup-header-root,
:host([media-range="L"]) .ui5-popup-header-root,
:host([media-range="M"]) .ui5-popup-footer-root,
:host([media-range="L"]) .ui5-popup-footer-root {
	padding-left: var(--_ui5_popup_header_footer_padding_m_l);
	padding-right: var(--_ui5_popup_header_footer_padding_m_l);
}

:host([media-range="XL"]) .ui5-popup-header-root,
:host([media-range="XL"]) .ui5-popup-footer-root {
	padding-left: var(--_ui5_popup_header_footer_padding_xl);
	padding-right: var(--_ui5_popup_header_footer_padding_xl);
}
`};export{m as P,Z as a,ye as b,me as c,ge as g,J as r,ve as s};
//# sourceMappingURL=PopupsCommon.css-1eb36bcf.js.map
