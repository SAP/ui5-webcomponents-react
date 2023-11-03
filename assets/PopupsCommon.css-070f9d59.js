import{b as L,l as f,s as m,a as b,p as n,c as M,f as S}from"./withWebComponent-f146e44d.js";import{r as l,H as $,J as B,U as T,q as w,K as O,u as D}from"./UI5Element-d089e658.js";import{e as d}from"./Icon-dc979b51.js";import{s as N}from"./slot-76e48863.js";import{g as k,a as I}from"./FocusableElements-320054f2.js";import{g as A}from"./AriaLabelHelper-43a261ec.js";import{g as H}from"./decline-a017ea5c.js";import{i as C,n as G,l as j}from"./Icons-d115de21.js";import{b as q,g as V,c as W}from"./PopupUtils-caf3caee.js";import{R}from"./ResizeHandler-36d5a74c.js";import{M as P}from"./MediaRange-25b98f31.js";import{s as v}from"./style-map-2f7624b7.js";import{o as F}from"./class-map-5b190712.js";var x;(function(o){o.None="None",o.Dialog="Dialog",o.AlertDialog="AlertDialog"})(x||(x={}));const g=x,ge=(o,e,t)=>Math.min(Math.max(o,e),t);function X(o,e,t){return L`<section style="${v(this.styles.root)}" class="${F(this.classes.root)}" role="${f(this._role)}" aria-modal="${f(this._ariaModal)}" aria-label="${f(this._ariaLabel)}" aria-labelledby="${f(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><div style="${v(this.styles.content)}" class="${F(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div><span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function U(o,e,t){return L`<div class="ui5-block-layer" ?hidden=${this._blockLayerHidden} tabindex="0" style="${v(this.styles.blockLayer)}" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div>`}let a=[];const J=(o,e=[])=>{a.some(t=>t.instance===o)||a.push({instance:o,parentPopovers:e}),z(),a.length===1&&Z()},K=o=>{a=a.filter(e=>e.instance!==o),z(),a.length||Q()},me=()=>[...a],E=o=>{a.length&&C(o)&&a[a.length-1].instance.close(!0)},Z=()=>{document.addEventListener("keydown",E)},Q=()=>{document.removeEventListener("keydown",E)},z=()=>{let o,e=!1;for(let t=a.length-1;t>=0;t--)o=a[t].instance,!e&&o.isModal?(o.isTopModalPopup=!0,e=!0):o.isTopModalPopup=!1};l("@ui5/webcomponents-theming","sap_horizon",async()=>m);l("@ui5/webcomponents","sap_horizon",async()=>b);const Y={packageName:"@ui5/webcomponents",fileName:"themes/Popup.css",content:":host{display:none;min-width:1px;position:fixed}"};l("@ui5/webcomponents-theming","sap_horizon",async()=>m);l("@ui5/webcomponents","sap_horizon",async()=>b);const ee={packageName:"@ui5/webcomponents",fileName:"themes/PopupStaticAreaStyles.css",content:".ui5-block-layer{background-color:var(--sapBlockLayer_Background);bottom:-500px;display:none;left:-500px;opacity:.6;outline:none;pointer-events:all;position:fixed;right:-500px;top:-500px;z-index:-1}.ui5-block-layer:not([hidden]){display:inline-block}"};l("@ui5/webcomponents-theming","sap_horizon",async()=>m);l("@ui5/webcomponents","sap_horizon",async()=>b);const oe={packageName:"@ui5/webcomponents",fileName:"themes/PopupGlobal.css",content:".ui5-popup-scroll-blocker{overflow:hidden}"};var s=globalThis&&globalThis.__decorate||function(o,e,t,r){var u=arguments.length,p=u<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(o,e,t,r);else for(var y=o.length-1;y>=0;y--)(h=o[y])&&(p=(u<3?h(p):u>3?h(e,t,p):h(e,t))||p);return u>3&&p&&Object.defineProperty(e,t,p),p},c;const te=()=>{$("data-ui5-popup-scroll-blocker")||B(oe,"data-ui5-popup-scroll-blocker")};te();const _=new Set;let i=c=class extends T{constructor(){super(),this._resizeHandler=this._resize.bind(this)}onBeforeRendering(){this._blockLayerHidden=!this.isOpen()||!this.isTopModalPopup}onAfterRendering(){this._updateMediaRange()}onEnterDOM(){R.register(this,this._resizeHandler)}onExitDOM(){this.isOpen()&&(c.unblockPageScrolling(this),this._removeOpenedPopup()),R.deregister(this,this._resizeHandler)}get _displayProp(){return"block"}_resize(){this._updateMediaRange()}_preventBlockLayerFocus(e){e.preventDefault()}static blockPageScrolling(e){_.add(e),_.size===1&&document.documentElement.classList.add("ui5-popup-scroll-blocker")}static unblockPageScrolling(e){_.delete(e),_.size===0&&document.documentElement.classList.remove("ui5-popup-scroll-blocker")}_scroll(e){this.fireEvent("scroll",{scrollTop:e.target.scrollTop,targetRef:e.target})}_onkeydown(e){const t=e.target===this._root&&G(e),r=j(e)&&!this.isOpen();(t||r)&&e.preventDefault()}_onfocusout(e){e.relatedTarget||(this._shouldFocusRoot=!0)}_onmousedown(e){w()||this._root.removeAttribute("tabindex"),this.shadowRoot.contains(e.target)?this._shouldFocusRoot=!0:this._shouldFocusRoot=!1}_onmouseup(){w()||(this._root.tabIndex=-1),this._shouldFocusRoot&&(O()&&this._root.focus(),this._shouldFocusRoot=!1)}async forwardToFirst(){const e=await k(this);e?e.focus():this._root.focus()}async forwardToLast(){const e=await I(this);e?e.focus():this._root.focus()}async applyInitialFocus(){await this.applyFocus()}async applyFocus(){if(await this._waitForDomRef(),this.getRootNode()===this)return;let e;this.initialFocus&&(e=this.getRootNode().getElementById(this.initialFocus)||document.getElementById(this.initialFocus)),e=e||await k(this)||this._root,e&&(e===this._root&&(e.tabIndex=-1),e.focus())}isOpen(){return this.opened}isFocusWithin(){return q(this._root)}async _open(e){var r;this.fireEvent("before-open",{},!0,!1)&&(this.isModal&&!this.shouldHideBackdrop&&(this.getStaticAreaItemDomRef(),this._blockLayerHidden=!1,c.blockPageScrolling(this)),this._zIndex=V(),this.style.zIndex=((r=this._zIndex)==null?void 0:r.toString())||"",this._focusedElementBeforeOpen=W(),this._show(),this.getDomRef()&&this._updateMediaRange(),this._addOpenedPopup(),this.opened=!0,this.open=!0,await D(),!this._disableInitialFocus&&!e&&await this.applyInitialFocus(),this.fireEvent("after-open",{},!1,!1))}_updateMediaRange(){this.mediaRange=P.getCurrentRange(P.RANGESETS.RANGE_4STEPS,this.getDomRef().offsetWidth)}_addOpenedPopup(){J(this)}close(e=!1,t=!1,r=!1){!this.opened||!this.fireEvent("before-close",{escPressed:e},!0,!1)||(this.isModal&&(this._blockLayerHidden=!0,c.unblockPageScrolling(this)),this.hide(),this.opened=!1,this.open=!1,t||this._removeOpenedPopup(),!this.preventFocusRestore&&!r&&this.resetFocus(),this.fireEvent("after-close",{},!1,!1))}_removeOpenedPopup(){K(this)}resetFocus(){this._focusedElementBeforeOpen&&(this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null)}_show(){this.style.display=this._displayProp}hide(){this.style.display="none"}get _ariaLabel(){return A(this)}get _root(){return this.shadowRoot.querySelector(".ui5-popup-root")}get _role(){return this.accessibleRole===g.None?void 0:this.accessibleRole.toLowerCase()}get _ariaModal(){return this.accessibleRole===g.None?void 0:"true"}get contentDOM(){return this.shadowRoot.querySelector(".ui5-popup-content")}get styles(){return{root:{},content:{},blockLayer:{zIndex:this._zIndex?this._zIndex-1:""}}}get classes(){return{root:{"ui5-popup-root":!0,"ui5-content-native-scrollbars":H()},content:{"ui5-popup-content":!0}}}};s([n()],i.prototype,"initialFocus",void 0);s([n({type:Boolean})],i.prototype,"preventFocusRestore",void 0);s([n({type:Boolean})],i.prototype,"open",void 0);s([n({type:Boolean,noAttribute:!0})],i.prototype,"opened",void 0);s([n({defaultValue:void 0})],i.prototype,"accessibleName",void 0);s([n({defaultValue:""})],i.prototype,"accessibleNameRef",void 0);s([n({type:g,defaultValue:g.Dialog})],i.prototype,"accessibleRole",void 0);s([n()],i.prototype,"mediaRange",void 0);s([n({type:Boolean})],i.prototype,"_disableInitialFocus",void 0);s([n({type:Boolean})],i.prototype,"_blockLayerHidden",void 0);s([n({type:Boolean,noAttribute:!0})],i.prototype,"isTopModalPopup",void 0);s([N({type:HTMLElement,default:!0})],i.prototype,"content",void 0);i=c=s([M({renderer:S,styles:Y,template:X,staticAreaTemplate:U,staticAreaStyles:ee}),d("before-open"),d("after-open"),d("before-close",{escPressed:{type:Boolean}}),d("after-close"),d("scroll")],i);const ye=i;l("@ui5/webcomponents-theming","sap_horizon",async()=>m);l("@ui5/webcomponents","sap_horizon",async()=>b);const ve={packageName:"@ui5/webcomponents",fileName:"themes/PopupsCommon.css",content:':host{background:var(--sapGroup_ContentBackground);border-radius:var(--_ui5-v1-19-0_popup_border_radius);box-sizing:border-box;display:none;min-height:2rem;position:fixed}.ui5-popup-root{background:inherit;border-radius:inherit;box-sizing:border-box;display:flex;flex-direction:column;height:100%;outline:none;overflow:hidden;width:100%}.ui5-popup-root .ui5-popup-header-root{border-bottom:var(--_ui5-v1-19-0_popup_header_border);box-shadow:var(--_ui5-v1-19-0_popup_header_shadow);color:var(--sapPageHeader_TextColor)}.ui5-popup-content{color:var(--sapTextColor)}.ui5-popup-footer-root{background:var(--sapPageFooter_Background);border-top:1px solid var(--sapPageFooter_BorderColor);color:var(--sapPageFooter_TextColor)}.ui5-popup-footer-root,.ui5-popup-header-root,:host([header-text]) .ui5-popup-header-text{align-items:center;display:flex;font-family:"72override",var(--_ui5-v1-19-0_popup_header_font_family);font-size:1rem;justify-content:center;margin:0}.ui5-popup-header-root .ui5-popup-header-text{font-weight:var(--_ui5-v1-19-0_popup_header_font_weight)}.ui5-popup-content{box-sizing:border-box;overflow:auto}:host([header-text]) .ui5-popup-header-text{display:inline-block;line-height:var(--_ui5-v1-19-0_popup_default_header_height);max-height:var(--_ui5-v1-19-0_popup_default_header_height);max-width:100%;min-height:var(--_ui5-v1-19-0_popup_default_header_height);overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}:host([header-text]) .ui5-popup-header-root{justify-content:var(--_ui5-v1-19-0_popup_header_prop_header_text_alignment)}:host(:not([header-text])) .ui5-popup-header-text{display:none}:host([disable-scrolling]) .ui5-popup-content{overflow:hidden}:host([media-range=S]) .ui5-popup-content{padding:1rem var(--_ui5-v1-19-0_popup_content_padding_s)}:host([media-range=L]) .ui5-popup-content,:host([media-range=M]) .ui5-popup-content{padding:1rem var(--_ui5-v1-19-0_popup_content_padding_m_l)}:host([media-range=XL]) .ui5-popup-content{padding:1rem var(--_ui5-v1-19-0_popup_content_padding_xl)}.ui5-popup-header-root{background:var(--_ui5-v1-19-0_popup_header_background)}:host([media-range=S]) .ui5-popup-footer-root,:host([media-range=S]) .ui5-popup-header-root{padding-left:var(--_ui5-v1-19-0_popup_header_footer_padding_s);padding-right:var(--_ui5-v1-19-0_popup_header_footer_padding_s)}:host([media-range=L]) .ui5-popup-footer-root,:host([media-range=L]) .ui5-popup-header-root,:host([media-range=M]) .ui5-popup-footer-root,:host([media-range=M]) .ui5-popup-header-root{padding-left:var(--_ui5-v1-19-0_popup_header_footer_padding_m_l);padding-right:var(--_ui5-v1-19-0_popup_header_footer_padding_m_l)}:host([media-range=XL]) .ui5-popup-footer-root,:host([media-range=XL]) .ui5-popup-header-root{padding-left:var(--_ui5-v1-19-0_popup_header_footer_padding_xl);padding-right:var(--_ui5-v1-19-0_popup_header_footer_padding_xl)}'};export{g as P,ye as a,J as b,ge as c,me as g,K as r,ve as s};
//# sourceMappingURL=PopupsCommon.css-070f9d59.js.map
