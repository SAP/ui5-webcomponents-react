import{r as T,U as W,j as _}from"./UI5Element-Y0uzLFOr.js";import{b as d,l as r,d as h,s as L,a as H,p as v,c as F,g as j}from"./withWebComponent-l-jCeTa1.js";import{s as V}from"./slot-HSrR9XJ-.js";import{c as g,e as b}from"./Icon-bdsWWJur.js";import{R as y}from"./ResizeHandler-YlQCt_sN.js";import{I as U}from"./ItemNavigation-KSoe0GH9.js";import{S as Z}from"./ScrollEnablement-Zd_Qg15H.js";import{I as x}from"./Integer-kog98579.js";import{d as q}from"./i18nBundle-Crssojm_.js";import{a as G,k as J,x as Q,y as X,z as Y,A as ee,B as S,u as w,t as te,C as oe,D as $,v as ne,w as E,E as ie,F as C,f as se,g as z,G as re,H as I,b as le,c as D,d as ae,e as M}from"./Icons-WRZ8WMWs.js";import{V as m}from"./ValueState-zUcANXoY.js";import he from"./ResponsivePopover-7YN-L6kM.js";import{d as de}from"./ListItemBase-bpRWPkiV.js";import{a as ce}from"./Title-QMeEqdxD.js";import{b as pe}from"./Button-2q6zbrjb.js";import ue from"./StandardListItem-yowcTzq2.js";import{o as k}from"./class-map-kmjzTHDs.js";import{s as f}from"./style-map-IagzN5gT.js";import{J as me,T as ve,K as fe,N as ge,O as _e,P as ke,Q as Te}from"./i18n-defaults-RBzcmDt8.js";import{s as be}from"./ResponsivePopoverCommon.css-qnvKwXX1.js";import{s as xe}from"./ValueStateMessage.css-AHMe5yzO.js";import{s as ye}from"./Suggestions.css-gWk1MJ99.js";function Se(s,e,t){return d`<div class="${k(this.classes.wrapper)}"><span id="${r(this._id)}-hiddenText" class="ui5-hidden-text">${r(this.tokenizerLabel)}</span><div class="${k(this.classes.content)}" @ui5-delete="${r(this._delete)}" @click="${this._click}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @ui5-select="${r(this.onTokenSelect)}" role="listbox" aria-labelledby="${r(this._id)}-hiddenText">${g(this.tokens,(o,n)=>o._id||n,(o,n)=>we.call(this,s,e,t,o,n))}</div>${this.showNMore?$e.call(this,s,e,t):void 0}</div>`}function we(s,e,t,o,n){return d`<slot name="${r(o._individualSlot)}"></slot>`}function $e(s,e,t){return d`<span @click="${this._openMorePopoverAndFireEvent}" class="ui5-tokenizer-more-text" part="n-more-text">${r(this._nMoreText)}</span>`}function Ee(s,e,t){return t?d`<${h("ui5-responsive-popover",e,t)} tokenizer-popover="true" style=${f(this.styles.popover)} ?content-only-on-desktop="${this.hasValueState}" hide-arrow placement-type="Bottom" horizontal-align="Left" @before-close=${this.handleBeforeClose} @before-open="${this.handleBeforeOpen}"><div slot="header" class="ui5-responsive-popover-header" style="${f(this.styles.popoverHeader)}">${this._isPhone?N.call(this,s,e,t):void 0}${this.hasValueState?void 0:R.call(this,s,e,t)}</div><${h("ui5-list",e,t)} class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${r(this.itemDelete)}>${g(this._tokens,(o,n)=>o._id||n,(o,n)=>P.call(this,s,e,t,o,n))}</${h("ui5-list",e,t)}>${this._isPhone?A.call(this,s,e,t):void 0}</${h("ui5-responsive-popover",e,t)}>`:d`<ui5-responsive-popover tokenizer-popover="true" style=${f(this.styles.popover)} ?content-only-on-desktop="${this.hasValueState}" hide-arrow placement-type="Bottom" horizontal-align="Left" @before-close=${this.handleBeforeClose} @before-open="${this.handleBeforeOpen}"><div slot="header" class="ui5-responsive-popover-header" style="${f(this.styles.popoverHeader)}">${this._isPhone?N.call(this,s,e,t):void 0}${this.hasValueState?void 0:R.call(this,s,e,t)}</div><ui5-list class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${r(this.itemDelete)}>${g(this._tokens,(o,n)=>o._id||n,(o,n)=>P.call(this,s,e,t,o,n))}</ui5-list>${this._isPhone?A.call(this,s,e,t):void 0}</ui5-responsive-popover>`}function N(s,e,t){return t?d`<div class="row" style="${f(this.styles.popoverHeaderTitle)}"><${h("ui5-title",e,t)} level="H5" class="ui5-responsive-popover-header-text">${r(this.morePopoverTitle)}</${h("ui5-title",e,t)}><${h("ui5-button",e,t)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closeMorePopover}"></${h("ui5-button",e,t)}></div>`:d`<div class="row" style="${f(this.styles.popoverHeaderTitle)}"><ui5-title level="H5" class="ui5-responsive-popover-header-text">${r(this.morePopoverTitle)}</ui5-title><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closeMorePopover}"></ui5-button></div>`}function R(s,e,t){return t?d`<div class="${k(this.classes.popoverValueState)}" style="${f(this.styles.popoverValueStateMessage)}"><${h("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${r(this._valueStateMessageIcon)}"></${h("ui5-icon",e,t)}>${g(this.valueStateMessageText,(o,n)=>o._id||n,(o,n)=>O.call(this,s,e,t,o,n))}</div>`:d`<div class="${k(this.classes.popoverValueState)}" style="${f(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${r(this._valueStateMessageIcon)}"></ui5-icon>${g(this.valueStateMessageText,(o,n)=>o._id||n,(o,n)=>O.call(this,s,e,t,o,n))}</div>`}function O(s,e,t,o,n){return d`${r(o)}`}function P(s,e,t,o,n){return t?d`<${h("ui5-li",e,t)} .tokenRef=${r(o)} wrapping-type="Normal">${r(o.text)}</${h("ui5-li",e,t)}>`:d`<ui5-li .tokenRef=${r(o)} wrapping-type="Normal">${r(o.text)}</ui5-li>`}function A(s,e,t){return t?d`<div slot="footer" class="ui5-responsive-popover-footer"><${h("ui5-button",e,t)} id="ui5-tokenizer-dialog-confirm-btn" design="Emphasized" @click="${this.closeMorePopover}">OK</${h("ui5-button",e,t)}></div>`:d`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button id="ui5-tokenizer-dialog-confirm-btn" design="Emphasized" @click="${this.closeMorePopover}">OK</ui5-button></div>`}T("@ui5/webcomponents-theming","sap_horizon",async()=>L);T("@ui5/webcomponents","sap_horizon",async()=>H);const Ce={packageName:"@ui5/webcomponents",fileName:"themes/Tokenizer.css",content:'.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host{border:1px solid #000;box-sizing:border-box;display:inline-block;height:2.25rem}.ui5-tokenizer-root{align-items:center;box-sizing:border-box;display:flex;font-family:"72override",var(--sapFontFamily);height:100%;overflow-x:scroll}.ui5-tokenizer-no-padding{padding:0}.ui5-tokenizer-root.ui5-tokenizer-nmore--wrapper{overflow:hidden}.ui5-tokenizer--token--wrapper{align-items:center;box-sizing:border-box;display:inline-flex;height:100%}:host([expanded]) .ui5-tokenizer--content{display:inline-flex;overflow:hidden;white-space:nowrap}.ui5-tokenizer--content{align-items:center;box-sizing:border-box;display:flex;flex-wrap:nowrap;height:100%;overflow:hidden;padding-inline-start:var(--_ui5-v1-19-1_tokenizer_padding)}:host([_tokens-count="1"]) .ui5-tokenizer--content{box-sizing:border-box;flex:1;max-width:100%;padding-inline-end:4px}.ui5-tokenizer-more-text{color:var(--_ui5-v1-19-1_tokenizer_n_more_text_color);cursor:pointer;display:inline-block;font-size:var(--sapFontSize);font-weight:400;margin-inline-start:.25rem;white-space:nowrap}'};T("@ui5/webcomponents-theming","sap_horizon",async()=>L);T("@ui5/webcomponents","sap_horizon",async()=>H);const ze={packageName:"@ui5/webcomponents",fileName:"themes/TokenizerPopover.css",content:"[ui5-responsive-popover]::part(content),[ui5-responsive-popover]::part(header){padding:0}#ui5-tokenizer-dialog-confirm-btn{height:100%;min-width:4rem}[ui5-responsive-popover]{margin-top:var(--_ui5-v1-19-1_tokenizer-popover_offset);margin-inline-start:calc(var(--_ui5-v1-19-1_tokenizer_padding)*-1)}"};var p=function(s,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(l=s[c])&&(i=(n<3?l(i):n>3?l(e,t,i):l(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},u,B;(function(s){s.cut="cut",s.copy="copy"})(B||(B={}));let a=u=class extends W{_handleResize(){this._nMoreCount=this.overflownTokens.length}constructor(){super(),this._resizeHandler=this._handleResize.bind(this),this._itemNav=new U(this,{currentIndex:-1,getItemsCallback:this._getVisibleTokens.bind(this)}),this._scrollEnablement=new Z(this)}onBeforeRendering(){this._nMoreCount=this.overflownTokens.length,this._tokensCount=this._getTokens().length,this._tokens.forEach(e=>{e.singleToken=this._tokens.length===1}),this._tokens.length||this.closeMorePopover()}onEnterDOM(){y.register(this.contentDom,this._resizeHandler)}onExitDOM(){y.deregister(this.contentDom,this._resizeHandler)}async _openMorePopoverAndFireEvent(){this.preventPopoverOpen||await this.openMorePopover(),this.fireEvent("show-more-items-press")}async openMorePopover(){(await this.getPopover()).showAt(this.morePopoverOpener||this)}_getTokens(){return this.getSlottedNodes("tokens")}get _tokens(){return this.getSlottedNodes("tokens")}_onmousedown(e){if(e.target.hasAttribute("ui5-token")){const t=e.target;t.toBeDeleted||this._itemNav.setCurrentItem(t)}}onTokenSelect(){const e=this._getTokens();e.length===1&&e[0].isTruncatable&&(e[0].selected?this.openMorePopover():this.closeMorePopover())}_getVisibleTokens(){return this.disabled?[]:this._tokens.filter((e,t)=>t<this._tokens.length-this._nMoreCount)}async onAfterRendering(){this._getTokens().length||(await this.getPopover()).close(),this._scrollEnablement.scrollContainer=this.expanded||!this.narrowContentDom?this.expandedContentDom:this.narrowContentDom,this.expanded&&(this._expandedScrollWidth=this.expandedContentDom.scrollWidth,this.scrollToEnd()),this.expanded||this.scrollToStart()}_delete(e){const t=e.target;if(!e.detail){this._tokenClickDelete(e,t),this._getTokens().length&&this.closeMorePopover();return}this._selectedTokens.length?this._selectedTokens.forEach(o=>this.deleteToken(o,e.detail.backSpace)):this.deleteToken(t,e.detail.backSpace)}_tokenClickDelete(e,t){const o=this._getVisibleTokens(),n=e.target,i=t?o.indexOf(t):o.indexOf(n),l=i===o.length-1?i-1:i+1,c=o[l];this._handleCurrentItemAfterDeletion(c),this.fireEvent("token-delete",{ref:t||n})}_handleCurrentItemAfterDeletion(e){e&&!_()&&(this._itemNav.setCurrentItem(e),setTimeout(()=>{e.focus()},0))}deleteToken(e,t){const o=this._getVisibleTokens(),n=o.indexOf(e);let i=n===o.length-1?n-1:n+1;const l=o.filter(K=>!K.selected);t?i=n===0?n+1:n-1:i=n===o.length-1?n-1:n+1;let c=o[i];if(l.length>1)for(;c&&c.selected;)c=t?o[--i]:o[++i];else c=l[0];this._handleCurrentItemAfterDeletion(c),this.fireEvent("token-delete",{ref:e})}async itemDelete(e){const t=e.detail.item.tokenRef;if(this._getTokens().length===1&&this._getTokens()[0].isTruncatable){const o=await this.getPopover();o.addEventListener("ui5-after-close",()=>{this.fireEvent("token-delete",{ref:t})},{once:!0}),o.close()}else this.fireEvent("token-delete",{ref:t})}handleBeforeClose(){_()&&this._getTokens().forEach(e=>{e.selected=!1})}handleBeforeOpen(){this.fireEvent("before-more-popover-open")}_onkeydown(e){if(G(e)&&e.preventDefault(),J(e)||Q(e))return e.preventDefault(),this._handleTokenSelection(e,!1);X(e)&&this._handleHomeShift(e),Y(e)&&this._handleEndShift(e),this._handleItemNavigation(e,this._tokens)}_handleItemNavigation(e,t){const o=!!(e.metaKey||e.ctrlKey),n=e.target;if(ee(e)||S(e)||w(e)||te(e))return this._handleArrowCtrl(e,n,t,S(e)||w(e));if(oe(e)||$(e)||ne(e)||E(e)||ie(e)||C(e))return e.preventDefault(),this._handleArrowShift(n,t,$(e)||C(e)||E(e));if(se(e)||z(e)||re(e)||I(e))return e.preventDefault(),this._handleHome(t,z(e)||I(e));if(o&&e.key.toLowerCase()==="a")return e.preventDefault(),this._toggleTokenSelection(t);if(le(e)||D(e)||ae(e)||M(e)){const i=this._calcNextTokenIndex(this._tokens.find(l=>l.focused),t,D(e)||M(e));this._scrollToToken(t[i])}}_handleHome(e,t){if(!e||!e.length)return-1;const o=t?e.length-1:0;e[o].focus(),this._itemNav.setCurrentItem(e[o])}_handleHomeShift(e){const t=this.tokens,o=e.target,n=t.indexOf(o);t.filter((i,l)=>l<=n).forEach(i=>{i.selected=!0}),t[0].focus(),this._itemNav.setCurrentItem(t[0])}_handleEndShift(e){const t=this.tokens,o=e.target,n=t.indexOf(o);t.filter((i,l)=>l>=n).forEach(i=>{i.selected=!0}),t[t.length-1].focus(),this._itemNav.setCurrentItem(t[t.length-1])}_calcNextTokenIndex(e,t,o){if(!t.length)return-1;const n=t.indexOf(e);let i=o?n+1:n-1;return i>=t.length&&(i=t.length-1),i<0&&(i=0),i}_handleArrowCtrl(e,t,o,n){const i=this._calcNextTokenIndex(t,o,n);e.preventDefault(),i!==-1&&(setTimeout(()=>{o[i].focus()},0),this._scrollToToken(o[i]),this._itemNav.setCurrentItem(o[i]))}_handleArrowShift(e,t,o){const n=t.indexOf(e),i=o?n+1:n-1;i===-1||i===t.length||(e.selected=!0,t[i].selected=!0,setTimeout(()=>{t[i].focus()},0),this._scrollToToken(t[i]),this._itemNav.setCurrentItem(t[i]))}_click(e){this._handleTokenSelection(e)}_toggleTokenSelection(e){if(!e||!e.length)return;const t=e.every(o=>o.selected);e.forEach(o=>{o.selected=!t})}_handleTokenSelection(e,t=!0){const o=e.target;o.hasAttribute("ui5-token")&&(t?this._tokens:[]).forEach(i=>{i!==o&&(i.selected=!1)})}_fillClipboard(e,t){const o=t.filter(i=>i.selected).map(i=>i.text).join(`\r
`),n=i=>{i.clipboardData&&i.clipboardData.setData("text/plain",o),i.preventDefault()};document.addEventListener(e,n),document.execCommand(e),document.removeEventListener(e,n)}scrollToStart(){this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(0,0)}scrollToEnd(){const e=this.expandedContentDom&&(this.effectiveDir!=="rtl"?this.expandedContentDom.scrollWidth:-this.expandedContentDom.scrollWidth);this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(e,0,5,10)}_scrollToToken(e){if(!this.expandedContentDom)return;const t=e.getBoundingClientRect(),o=this.expandedContentDom.getBoundingClientRect();t.left<o.left?this._scrollEnablement.scrollTo(this.expandedContentDom.scrollLeft-(o.left-t.left+5),0):t.right>o.right&&this._scrollEnablement.scrollTo(this.expandedContentDom.scrollLeft+(t.right-o.right+5),0)}async closeMorePopover(){(await this.getPopover()).close(!1,!1,!0)}get _nMoreText(){return this._getVisibleTokens().length?u.i18nBundle.getText(me,this._nMoreCount):u.i18nBundle.getText(ve,this._nMoreCount)}get showNMore(){return!this.expanded&&this.showMore&&!!this.overflownTokens.length}get contentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer--content")}get expandedContentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer-expanded--content")}get narrowContentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer-nmore--content")}get tokenizerLabel(){return u.i18nBundle.getText(fe)}get morePopoverTitle(){return u.i18nBundle.getText(ge)}get overflownTokens(){return this.contentDom?(this._getTokens().forEach(e=>{e.overflows=!1}),this._getTokens().filter(e=>{const t=this.contentDom.getBoundingClientRect(),o=e.getBoundingClientRect(),n=Number(o.right.toFixed(2)),i=Number(t.right.toFixed(2)),l=Number(o.left.toFixed(2)),c=Number(t.left.toFixed(2));return e.overflows=!this.expanded&&(l<c||n>i),e.overflows})):[]}get hasValueState(){return this.valueState===m.None||this.valueState===m.Success}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get _valueStateMessageIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==m.None?e[this.valueState]:""}get _isPhone(){return _()}get _selectedTokens(){return this._getTokens().filter(e=>e.selected)}get classes(){return{wrapper:{"ui5-tokenizer-root":!0,"ui5-tokenizer-nmore--wrapper":this.showMore,"ui5-tokenizer-no-padding":!this._getTokens().length},content:{"ui5-tokenizer--content":!0,"ui5-tokenizer-expanded--content":!this.showNMore,"ui5-tokenizer-nmore--content":this.showNMore},popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-responsive-popover-header":!0,"ui5-valuestatemessage--success":this.valueState===m.Success,"ui5-valuestatemessage--error":this.valueState===m.Error,"ui5-valuestatemessage--warning":this.valueState===m.Warning,"ui5-valuestatemessage--information":this.valueState===m.Information}}}get styles(){return{popover:{"min-width":this.popoverMinWidth?`${this.popoverMinWidth}px`:""},popoverValueStateMessage:{width:this.popoverMinWidth&&!_()?`${this.popoverMinWidth}px`:"100%","min-height":"2rem"},popoverHeader:{"min-height":"2rem"},popoverHeaderTitle:{"justify-content":"left"}}}_tokensCountText(){const e=this._getTokens().length;return e===0?u.i18nBundle.getText(_e):e===1?u.i18nBundle.getText(ke):u.i18nBundle.getText(Te,e)}_focusLastToken(){if(this.tokens.length===0)return;const e=this.tokens[this.tokens.length-1];e.focus(),this._itemNav.setCurrentItem(e)}static async onDefine(){u.i18nBundle=await q("@ui5/webcomponents")}async getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}};p([v({type:Boolean})],a.prototype,"showMore",void 0);p([v({type:Boolean})],a.prototype,"disabled",void 0);p([v({type:Boolean})],a.prototype,"preventPopoverOpen",void 0);p([v({type:Boolean})],a.prototype,"expanded",void 0);p([v({type:Object})],a.prototype,"morePopoverOpener",void 0);p([v({validator:x})],a.prototype,"popoverMinWidth",void 0);p([v({type:m,defaultValue:m.None})],a.prototype,"valueState",void 0);p([v({validator:x})],a.prototype,"_nMoreCount",void 0);p([v({validator:x})],a.prototype,"_tokensCount",void 0);p([V({type:HTMLElement,default:!0,individualSlots:!0})],a.prototype,"tokens",void 0);p([V()],a.prototype,"valueStateMessage",void 0);a=u=p([F({tag:"ui5-tokenizer",languageAware:!0,renderer:j,template:Se,styles:Ce,staticAreaStyles:[be,xe,ye,ze],staticAreaTemplate:Ee,dependencies:[he,de,ue,ce,pe]}),b("token-delete",{detail:{ref:{type:HTMLElement}}}),b("show-more-items-press",{detail:{ref:{type:HTMLElement}}}),b("before-more-popover-open",{detail:{}})],a);a.define();const Ye=a;export{B as C,Ye as T};
//# sourceMappingURL=Tokenizer-AeUGvOLW.js.map
