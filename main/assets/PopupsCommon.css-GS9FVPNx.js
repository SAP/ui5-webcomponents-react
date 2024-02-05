import{b as E,l as f,s as g,a as b,p as n,d as M,g as S}from"./withWebComponent-UxvJwa3A.js";import{r as $}from"./i18nBundle-YDapVb1x.js";import{e as d}from"./Icon-qyLuyi2a.js";import{s as B}from"./slot-HSrR9XJ-.js";import{r as l,x as O,y as T,U as D,k as w,z as N}from"./UI5Element-_cJDeK03.js";import{g as k,a as I}from"./FocusableElements-YRGIpHeQ.js";import{g as A}from"./AriaLabelHelper-RbKlVwzD.js";import{g as H}from"./decline-1i68oG_p.js";import{i as C,l as j,m as G}from"./Icons-1V9ErOOl.js";import{b as V,g as W,c as X}from"./PopupUtils-WqNPYdCF.js";import{R}from"./ResizeHandler-xTi6PJ7P.js";import{M as P}from"./MediaRange-sEMt71Ve.js";import{s as v}from"./style-map-21pwAbrQ.js";import{o as F}from"./class-map--zj6Ctao.js";var x;(function(o){o.None="None",o.Dialog="Dialog",o.AlertDialog="AlertDialog"})(x||(x={}));const m=x,ge=(o,e,t)=>Math.min(Math.max(o,e),t);function q(o,e,t){return E`<section style="${v(this.styles.root)}" class="${F(this.classes.root)}" role="${f(this._role)}" aria-modal="${f(this._ariaModal)}" aria-label="${f(this._ariaLabel)}" aria-labelledby="${f(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><div style="${v(this.styles.content)}" class="${F(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div><span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function U(o,e,t){return E`<div class="ui5-block-layer" ?hidden=${this._blockLayerHidden} tabindex="0" style="${v(this.styles.blockLayer)}" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div>`}let r=[];const Z=(o,e=[])=>{r.some(t=>t.instance===o)||r.push({instance:o,parentPopovers:e}),z(),r.length===1&&K()},J=o=>{r=r.filter(e=>e.instance!==o),z(),r.length||Q()},be=()=>[...r],L=o=>{r.length&&C(o)&&r[r.length-1].instance.close(!0)},K=()=>{document.addEventListener("keydown",L)},Q=()=>{document.removeEventListener("keydown",L)},z=()=>{let o,e=!1;for(let t=r.length-1;t>=0;t--)o=r[t].instance,!e&&o.isModal?(o.isTopModalPopup=!0,e=!0):o.isTopModalPopup=!1};l("@ui5/webcomponents-theming","sap_horizon",async()=>g);l("@ui5/webcomponents","sap_horizon",async()=>b);const Y={packageName:"@ui5/webcomponents",fileName:"themes/Popup.css.ts",content:`:host{min-width:1px;display:none;position:fixed}
`};l("@ui5/webcomponents-theming","sap_horizon",async()=>g);l("@ui5/webcomponents","sap_horizon",async()=>b);const ee={packageName:"@ui5/webcomponents",fileName:"themes/PopupStaticAreaStyles.css.ts",content:`.ui5-block-layer{display:none;position:fixed;background-color:var(--_ui5-v1-22-0-rc-3_popup_block_layer_background);inset:-500px;outline:none;pointer-events:all;z-index:-1}.ui5-block-layer:not([hidden]){display:inline-block}
`};l("@ui5/webcomponents-theming","sap_horizon",async()=>g);l("@ui5/webcomponents","sap_horizon",async()=>b);const oe={packageName:"@ui5/webcomponents",fileName:"themes/PopupGlobal.css.ts",content:`.ui5-popup-scroll-blocker{overflow:hidden}
`};var s=function(o,e,t,a){var u=arguments.length,p=u<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(o,e,t,a);else for(var y=o.length-1;y>=0;y--)(h=o[y])&&(p=(u<3?h(p):u>3?h(e,t,p):h(e,t))||p);return u>3&&p&&Object.defineProperty(e,t,p),p},c;const te=()=>{O("data-ui5-popup-scroll-blocker")||T(oe,"data-ui5-popup-scroll-blocker")};te();const _=new Set;let i=c=class extends D{constructor(){super(),this._resizeHandler=this._resize.bind(this)}onBeforeRendering(){this._blockLayerHidden=!this.isOpen()||!this.isTopModalPopup}onAfterRendering(){this._updateMediaRange()}onEnterDOM(){R.register(this,this._resizeHandler)}onExitDOM(){this.isOpen()&&(c.unblockPageScrolling(this),this._removeOpenedPopup()),R.deregister(this,this._resizeHandler)}get _displayProp(){return"block"}_resize(){this._updateMediaRange()}_preventBlockLayerFocus(e){e.preventDefault()}static blockPageScrolling(e){_.add(e),_.size===1&&document.documentElement.classList.add("ui5-popup-scroll-blocker")}static unblockPageScrolling(e){_.delete(e),_.size===0&&document.documentElement.classList.remove("ui5-popup-scroll-blocker")}_scroll(e){this.fireEvent("scroll",{scrollTop:e.target.scrollTop,targetRef:e.target})}_onkeydown(e){const t=e.target===this._root&&j(e),a=G(e)&&!this.isOpen();(t||a)&&e.preventDefault()}_onfocusout(e){e.relatedTarget||(this._shouldFocusRoot=!0)}_onmousedown(e){w()||this._root.removeAttribute("tabindex"),this.shadowRoot.contains(e.target)?this._shouldFocusRoot=!0:this._shouldFocusRoot=!1}_onmouseup(){w()||(this._root.tabIndex=-1),this._shouldFocusRoot&&(N()&&this._root.focus(),this._shouldFocusRoot=!1)}async forwardToFirst(){const e=await k(this);e?e.focus():this._root.focus()}async forwardToLast(){const e=await I(this);e?e.focus():this._root.focus()}async applyInitialFocus(){await this.applyFocus()}async applyFocus(){if(await this._waitForDomRef(),this.getRootNode()===this)return;let e;this.initialFocus&&(e=this.getRootNode().getElementById(this.initialFocus)||document.getElementById(this.initialFocus)),e=e||await k(this)||this._root,e&&(e===this._root&&(e.tabIndex=-1),e.focus())}isOpen(){return this.opened}isFocusWithin(){return V(this._root)}async _open(e){var a;this.fireEvent("before-open",{},!0,!1)&&(this.isModal&&!this.shouldHideBackdrop&&(this.getStaticAreaItemDomRef(),this._blockLayerHidden=!1,c.blockPageScrolling(this)),this._zIndex=W(),this.style.zIndex=((a=this._zIndex)==null?void 0:a.toString())||"",this._focusedElementBeforeOpen=X(),this._show(),this.getDomRef()&&this._updateMediaRange(),this._addOpenedPopup(),this.opened=!0,this.open=!0,await $(),!this._disableInitialFocus&&!e&&await this.applyInitialFocus(),this.fireEvent("after-open",{},!1,!1))}_updateMediaRange(){this.mediaRange=P.getCurrentRange(P.RANGESETS.RANGE_4STEPS,this.getDomRef().offsetWidth)}_addOpenedPopup(){Z(this)}close(e=!1,t=!1,a=!1){!this.opened||!this.fireEvent("before-close",{escPressed:e},!0,!1)||(this.isModal&&(this._blockLayerHidden=!0,c.unblockPageScrolling(this)),this.hide(),this.opened=!1,this.open=!1,t||this._removeOpenedPopup(),!this.preventFocusRestore&&!a&&this.resetFocus(),this.fireEvent("after-close",{},!1,!1))}_removeOpenedPopup(){J(this)}resetFocus(){this._focusedElementBeforeOpen&&(this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null)}_show(){this.style.display=this._displayProp}hide(){this.style.display="none"}get _ariaLabel(){return A(this)}get _root(){return this.shadowRoot.querySelector(".ui5-popup-root")}get _role(){return this.accessibleRole===m.None?void 0:this.accessibleRole.toLowerCase()}get _ariaModal(){return this.accessibleRole===m.None?void 0:"true"}get contentDOM(){return this.shadowRoot.querySelector(".ui5-popup-content")}get styles(){return{root:{},content:{},blockLayer:{zIndex:this._zIndex?this._zIndex-1:""}}}get classes(){return{root:{"ui5-popup-root":!0,"ui5-content-native-scrollbars":H()},content:{"ui5-popup-content":!0}}}};s([n()],i.prototype,"initialFocus",void 0);s([n({type:Boolean})],i.prototype,"preventFocusRestore",void 0);s([n({type:Boolean})],i.prototype,"open",void 0);s([n({type:Boolean,noAttribute:!0})],i.prototype,"opened",void 0);s([n({defaultValue:void 0})],i.prototype,"accessibleName",void 0);s([n({defaultValue:""})],i.prototype,"accessibleNameRef",void 0);s([n({type:m,defaultValue:m.Dialog})],i.prototype,"accessibleRole",void 0);s([n()],i.prototype,"mediaRange",void 0);s([n({type:Boolean})],i.prototype,"_disableInitialFocus",void 0);s([n({type:Boolean})],i.prototype,"_blockLayerHidden",void 0);s([n({type:Boolean,noAttribute:!0})],i.prototype,"isTopModalPopup",void 0);s([B({type:HTMLElement,default:!0})],i.prototype,"content",void 0);i=c=s([M({renderer:S,styles:Y,template:q,staticAreaTemplate:U,staticAreaStyles:ee}),d("before-open"),d("after-open"),d("before-close",{detail:{escPressed:{type:Boolean}}}),d("after-close"),d("scroll")],i);const ve=i;l("@ui5/webcomponents-theming","sap_horizon",async()=>g);l("@ui5/webcomponents","sap_horizon",async()=>b);const xe={packageName:"@ui5/webcomponents",fileName:"themes/PopupsCommon.css.ts",content:`:host{display:none;position:fixed;background:var(--sapGroup_ContentBackground);border-radius:var(--_ui5-v1-22-0-rc-3_popup_border_radius);min-height:2rem;box-sizing:border-box}.ui5-popup-root{background:inherit;border-radius:inherit;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;outline:none;justify-content:space-between}.ui5-popup-root .ui5-popup-header-root{color:var(--sapPageHeader_TextColor);box-shadow:var(--_ui5-v1-22-0-rc-3_popup_header_shadow);border-bottom:var(--_ui5-v1-22-0-rc-3_popup_header_border)}.ui5-popup-content{color:var(--sapTextColor);flex:auto}.ui5-popup-footer-root{background:var(--sapPageFooter_Background);border-top:1px solid var(--sapPageFooter_BorderColor);color:var(--sapPageFooter_TextColor)}.ui5-popup-header-root,.ui5-popup-footer-root,:host([header-text]) .ui5-popup-header-text{margin:0;font-size:1rem;font-family:"72override",var(--_ui5-v1-22-0-rc-3_popup_header_font_family);display:flex;justify-content:center;align-items:center}.ui5-popup-header-root .ui5-popup-header-text{font-weight:var(--_ui5-v1-22-0-rc-3_popup_header_font_weight)}.ui5-popup-content{overflow:auto;box-sizing:border-box}:host([header-text]) .ui5-popup-header-text{text-align:center;min-height:var(--_ui5-v1-22-0-rc-3_popup_default_header_height);max-height:var(--_ui5-v1-22-0-rc-3_popup_default_header_height);line-height:var(--_ui5-v1-22-0-rc-3_popup_default_header_height);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:inline-block}:host([header-text]) .ui5-popup-header-root{justify-content:var(--_ui5-v1-22-0-rc-3_popup_header_prop_header_text_alignment)}:host(:not([header-text])) .ui5-popup-header-text{display:none}:host([disable-scrolling]) .ui5-popup-content{overflow:hidden}:host([media-range="S"]) .ui5-popup-content{padding:1rem var(--_ui5-v1-22-0-rc-3_popup_content_padding_s)}:host([media-range="M"]) .ui5-popup-content,:host([media-range="L"]) .ui5-popup-content{padding:1rem var(--_ui5-v1-22-0-rc-3_popup_content_padding_m_l)}:host([media-range="XL"]) .ui5-popup-content{padding:1rem var(--_ui5-v1-22-0-rc-3_popup_content_padding_xl)}.ui5-popup-header-root{background:var(--_ui5-v1-22-0-rc-3_popup_header_background)}:host([media-range="S"]) .ui5-popup-header-root,:host([media-range="S"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v1-22-0-rc-3_popup_header_footer_padding_s);padding-right:var(--_ui5-v1-22-0-rc-3_popup_header_footer_padding_s)}:host([media-range="M"]) .ui5-popup-header-root,:host([media-range="L"]) .ui5-popup-header-root,:host([media-range="M"]) .ui5-popup-footer-root,:host([media-range="L"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v1-22-0-rc-3_popup_header_footer_padding_m_l);padding-right:var(--_ui5-v1-22-0-rc-3_popup_header_footer_padding_m_l)}:host([media-range="XL"]) .ui5-popup-header-root,:host([media-range="XL"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v1-22-0-rc-3_popup_header_footer_padding_xl);padding-right:var(--_ui5-v1-22-0-rc-3_popup_header_footer_padding_xl)}
`};export{m as P,ve as a,Z as b,ge as c,be as g,J as r,xe as s};
