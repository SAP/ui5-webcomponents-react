import{a as k,U as W,d as j}from"./UI5Element-a8445a25.js";import{e as h,l,s as a,a as L,b as H,p as f,c as U,d as Z}from"./withWebComponent-884f99a7.js";import{s as B}from"./slot-76e48863.js";import{c as g,e as x}from"./Icon-3e9cb840.js";import{R as y}from"./ResizeHandler-cea672cf.js";import{I as q}from"./ItemNavigation-cb92b87f.js";import{S as F}from"./ScrollEnablement-4353003c.js";import{I as V}from"./Integer-f7f172c9.js";import{G,c as J,N as Q,O as X,P as Y,C as ee,D as S,A as w,B as te,x as oe,y as b,v as ne,w as $,Q as ie,R as C,m as se,n as E,I as re,J as I,q as le,s as D,o as ae,p as z}from"./Icons-c55d12a5.js";import{c as T}from"./Device-208919c6.js";import{V as m}from"./ValueState-2c5e5904.js";import he from"./ResponsivePopover-1eb02d4a.js";import{L as ce}from"./ListItemBase-124add92.js";import{a as de}from"./Title-a5ea80a2.js";import{B as pe}from"./Button-f1768a08.js";import ue from"./StandardListItem-8dc8c287.js";import{o as _}from"./class-map-323a92fb.js";import{s as v}from"./style-map-34e6b8f4.js";import{Z as me,_ as ve,$ as fe,a0 as ge,a1 as _e,a2 as ke}from"./i18n-defaults-fca59c5d.js";import{s as Te}from"./ResponsivePopoverCommon.css-04f065a8.js";import{s as xe}from"./ValueStateMessage.css-111bf458.js";import{s as ye}from"./Suggestions.css-2ef2fda5.js";function Se(s,e,t){return h`<div class="${_(this.classes.wrapper)}"><span id="${l(this._id)}-hiddenText" class="ui5-hidden-text">${l(this.tokenizerLabel)}</span><div class="${_(this.classes.content)}" @ui5-delete="${l(this._delete)}" @click="${this._click}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" role="listbox" aria-labelledby="${l(this._id)}-hiddenText">${g(this.tokens,(o,n)=>o._id||n,(o,n)=>we.call(this,s,e,t,o,n))}</div>${this.showNMore?be.call(this,s,e,t):void 0}</div>`}function we(s,e,t,o,n){return h`<slot name="${l(o._individualSlot)}"></slot>`}function be(s,e,t){return h`<span @click="${this._openOverflowPopover}" class="ui5-tokenizer-more-text" part="n-more-text">${l(this._nMoreText)}</span>`}function $e(s,e,t){return t?h`<${a("ui5-responsive-popover",e,t)} tokenizer-popover="true" style=${v(this.styles.popover)} ?content-only-on-desktop="${this.hasValueState}" hide-arrow placement-type="Bottom" horizontal-align="Left"><div slot="header" class="ui5-responsive-popover-header" style="${v(this.styles.popoverHeader)}">${this._isPhone?N.call(this,s,e,t):void 0}${this.hasValueState?void 0:M.call(this,s,e,t)}</div><${a("ui5-list",e,t)} class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${l(this.itemDelete)}>${g(this._tokens,(o,n)=>o._id||n,(o,n)=>O.call(this,s,e,t,o,n))}</${a("ui5-list",e,t)}>${this._isPhone?P.call(this,s,e,t):void 0}</${a("ui5-responsive-popover",e,t)}>`:h`<ui5-responsive-popover tokenizer-popover="true" style=${v(this.styles.popover)} ?content-only-on-desktop="${this.hasValueState}" hide-arrow placement-type="Bottom" horizontal-align="Left"><div slot="header" class="ui5-responsive-popover-header" style="${v(this.styles.popoverHeader)}">${this._isPhone?N.call(this,s,e,t):void 0}${this.hasValueState?void 0:M.call(this,s,e,t)}</div><ui5-list class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${l(this.itemDelete)}>${g(this._tokens,(o,n)=>o._id||n,(o,n)=>O.call(this,s,e,t,o,n))}</ui5-list>${this._isPhone?P.call(this,s,e,t):void 0}</ui5-responsive-popover>`}function N(s,e,t){return t?h`<div class="row" style="${v(this.styles.popoverHeaderTitle)}"><${a("ui5-title",e,t)} level="H5" class="ui5-responsive-popover-header-text">${l(this.morePopoverTitle)}</${a("ui5-title",e,t)}><${a("ui5-button",e,t)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closeMorePopover}"></${a("ui5-button",e,t)}></div>`:h`<div class="row" style="${v(this.styles.popoverHeaderTitle)}"><ui5-title level="H5" class="ui5-responsive-popover-header-text">${l(this.morePopoverTitle)}</ui5-title><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closeMorePopover}"></ui5-button></div>`}function M(s,e,t){return t?h`<div class="${_(this.classes.popoverValueState)}" style="${v(this.styles.popoverValueStateMessage)}"><${a("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageIcon)}"></${a("ui5-icon",e,t)}>${g(this.valueStateMessageText,(o,n)=>o._id||n,(o,n)=>R.call(this,s,e,t,o,n))}</div>`:h`<div class="${_(this.classes.popoverValueState)}" style="${v(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageIcon)}"></ui5-icon>${g(this.valueStateMessageText,(o,n)=>o._id||n,(o,n)=>R.call(this,s,e,t,o,n))}</div>`}function R(s,e,t,o,n){return h`${l(o)}`}function O(s,e,t,o,n){return t?h`<${a("ui5-li",e,t)} .tokenRef=${l(o)}>${l(o.text)}</${a("ui5-li",e,t)}>`:h`<ui5-li .tokenRef=${l(o)}>${l(o.text)}</ui5-li>`}function P(s,e,t){return t?h`<div slot="footer" class="ui5-responsive-popover-footer"><${a("ui5-button",e,t)} design="Transparent" @click="${this.closeMorePopover}">OK</${a("ui5-button",e,t)}></div>`:h`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this.closeMorePopover}">OK</ui5-button></div>`}k("@ui5/webcomponents-theming","sap_fiori_3",async()=>L);k("@ui5/webcomponents","sap_fiori_3",async()=>H);const Ce={packageName:"@ui5/webcomponents",fileName:"themes/Tokenizer.css",content:'.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{display:inline-block;box-sizing:border-box;border:1px solid #000;height:2.25rem}.ui5-tokenizer-root{height:100%;display:flex;align-items:center;overflow-x:scroll;box-sizing:border-box;font-family:"72override",var(--sapFontFamily)}.ui5-tokenizer-no-padding{padding:0}.ui5-tokenizer-root.ui5-tokenizer-nmore--wrapper{overflow:hidden}.ui5-tokenizer--token--wrapper{display:inline-flex;align-items:center;box-sizing:border-box;height:100%}:host([expanded]) .ui5-tokenizer--content{display:inline-block;white-space:nowrap}.ui5-tokenizer--content{display:flex;flex-wrap:nowrap;align-items:center;overflow:hidden;padding-inline-start:var(--_ui5_tokenizer_padding)}.ui5-tokenizer-more-text{display:inline-block;margin-inline-start:.25rem;cursor:pointer;white-space:nowrap;font-size:var(--sapFontSize);font-weight:400;color:var(--_ui5_tokenizer_n_more_text_color)}:host([expanded]) .ui5-tokenizer--content{overflow:hidden;justify-content:flex-end}'};k("@ui5/webcomponents-theming","sap_fiori_3",async()=>L);k("@ui5/webcomponents","sap_fiori_3",async()=>H);const Ee={packageName:"@ui5/webcomponents",fileName:"themes/TokenizerPopover.css",content:"[ui5-responsive-popover]::part(content),[ui5-responsive-popover]::part(header){padding:0}"};var p=globalThis&&globalThis.__decorate||function(s,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(r=s[c])&&(i=(n<3?r(i):n>3?r(e,t,i):r(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},u,A;(function(s){s.cut="cut",s.copy="copy"})(A||(A={}));let d=u=class extends W{_handleResize(){this._nMoreCount=this.overflownTokens.length}constructor(){super(),this._resizeHandler=this._handleResize.bind(this),this._itemNav=new q(this,{currentIndex:-1,getItemsCallback:this._getVisibleTokens.bind(this)}),this._scrollEnablement=new F(this)}onBeforeRendering(){this._nMoreCount=this.overflownTokens.length}onEnterDOM(){y.register(this.contentDom,this._resizeHandler)}onExitDOM(){y.deregister(this.contentDom,this._resizeHandler)}async _openOverflowPopover(){this.showPopover&&(await this.getPopover()).showAt(this.morePopoverOpener||this),this.fireEvent("show-more-items-press")}_getTokens(){return this.getSlottedNodes("tokens")}get _tokens(){return this.getSlottedNodes("tokens")}get showPopover(){return!!Object.keys(this.morePopoverOpener).length}_getVisibleTokens(){return this.disabled?[]:this._tokens.filter((e,t)=>t<this._tokens.length-this._nMoreCount)}async onAfterRendering(){this.showPopover&&!this._getTokens().length&&(await this.getPopover()).close(),this._scrollEnablement.scrollContainer=this.expanded||!this.narrowContentDom?this.expandedContentDom:this.narrowContentDom,this.expanded&&(this._expandedScrollWidth=this.expandedContentDom.scrollWidth,this.scrollToEnd()),this.expanded||this.scrollToStart()}_delete(e){const t=e.target;if(!e.detail){this._tokenClickDelete(e,t);return}this._selectedTokens.length?this._selectedTokens.forEach(o=>this.deleteToken(o,e.detail.backSpace)):this.deleteToken(t,e.detail.backSpace)}_tokenClickDelete(e,t){const o=this._getVisibleTokens(),n=e.target,i=t?o.indexOf(t):o.indexOf(n),r=i===o.length-1?i-1:i+1,c=o[r];this._handleCurrentItemAfterDeletion(c),this.fireEvent("token-delete",{ref:t||n})}_handleCurrentItemAfterDeletion(e){e&&!T()&&(this._itemNav.setCurrentItem(e),setTimeout(()=>{e.focus()},0))}deleteToken(e,t){const o=this._getVisibleTokens(),n=o.indexOf(e);let i=n===o.length-1?n-1:n+1;const r=o.filter(K=>!K.selected);t?i=n===0?n+1:n-1:i=n===o.length-1?n-1:n+1;let c=o[i];if(r.length>1)for(;c&&c.selected;)c=t?o[--i]:o[++i];else c=r[0];this._handleCurrentItemAfterDeletion(c),this.fireEvent("token-delete",{ref:e})}itemDelete(e){const t=e.detail.item.tokenRef;this.fireEvent("token-delete",{ref:t})}_onkeydown(e){if(G(e)&&e.preventDefault(),J(e)||Q(e))return e.preventDefault(),this._handleTokenSelection(e,!1);X(e)&&this._handleHomeShift(e),Y(e)&&this._handleEndShift(e),this._handleItemNavigation(e,this._tokens)}_handleItemNavigation(e,t){const o=!!(e.metaKey||e.ctrlKey),n=e.target;if(ee(e)||S(e)||w(e)||te(e))return this._handleArrowCtrl(e,n,t,S(e)||w(e));if(oe(e)||b(e)||ne(e)||$(e)||ie(e)||C(e))return e.preventDefault(),this._handleArrowShift(n,t,b(e)||C(e)||$(e));if(se(e)||E(e)||re(e)||I(e))return e.preventDefault(),this._handleHome(t,E(e)||I(e));if(o&&e.key.toLowerCase()==="a")return e.preventDefault(),this._toggleTokenSelection(t);if(le(e)||D(e)||ae(e)||z(e)){const i=this._calcNextTokenIndex(this._tokens.find(r=>r.focused),t,D(e)||z(e));this._scrollToToken(t[i])}}_handleHome(e,t){if(!e||!e.length)return-1;const o=t?e.length-1:0;e[o].focus(),this._itemNav.setCurrentItem(e[o])}_handleHomeShift(e){const t=this.tokens,o=e.target,n=t.indexOf(o);t.filter((i,r)=>r<=n).forEach(i=>{i.selected=!0}),t[0].focus(),this._itemNav.setCurrentItem(t[0])}_handleEndShift(e){const t=this.tokens,o=e.target,n=t.indexOf(o);t.filter((i,r)=>r>=n).forEach(i=>{i.selected=!0}),t[t.length-1].focus(),this._itemNav.setCurrentItem(t[t.length-1])}_calcNextTokenIndex(e,t,o){if(!t.length)return-1;const n=t.indexOf(e);let i=o?n+1:n-1;return i>=t.length&&(i=t.length-1),i<0&&(i=0),i}_handleArrowCtrl(e,t,o,n){const i=this._calcNextTokenIndex(t,o,n);e.preventDefault(),i!==-1&&(setTimeout(()=>{o[i].focus()},0),this._scrollToToken(o[i]),this._itemNav.setCurrentItem(o[i]))}_handleArrowShift(e,t,o){const n=t.indexOf(e),i=o?n+1:n-1;i===-1||i===t.length||(e.selected=!0,t[i].selected=!0,setTimeout(()=>{t[i].focus()},0),this._scrollToToken(t[i]),this._itemNav.setCurrentItem(t[i]))}_click(e){this._handleTokenSelection(e)}_onmousedown(e){if(e.target.hasAttribute("ui5-token")){const t=e.target;t.toBeDeleted||(this._itemNav.setCurrentItem(t),this._scrollToToken(t))}}_toggleTokenSelection(e){if(!e||!e.length)return;const t=e.every(o=>o.selected);e.forEach(o=>{o.selected=!t})}_handleTokenSelection(e,t=!0){const o=e.target;o.hasAttribute("ui5-token")&&(t?this._tokens:[]).forEach(i=>{i!==o&&(i.selected=!1)})}_fillClipboard(e,t){const o=t.filter(i=>i.selected).map(i=>i.text).join(`\r
`),n=i=>{i.clipboardData&&i.clipboardData.setData("text/plain",o),i.preventDefault()};document.addEventListener(e,n),document.execCommand(e),document.removeEventListener(e,n)}scrollToStart(){this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(0,0)}scrollToEnd(){const e=this.expandedContentDom&&(this.effectiveDir!=="rtl"?this.expandedContentDom.scrollWidth:-this.expandedContentDom.scrollWidth);this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(e,0,5,10)}_scrollToToken(e){if(!this.expandedContentDom)return;const t=e.getBoundingClientRect(),o=this.expandedContentDom.getBoundingClientRect();t.left<o.left?this._scrollEnablement.scrollTo(this.expandedContentDom.scrollLeft-(o.left-t.left+5),0):t.right>o.right&&this._scrollEnablement.scrollTo(this.expandedContentDom.scrollLeft+(t.right-o.right+5),0)}async closeMorePopover(){(await this.getPopover()).close()}get _nMoreText(){return u.i18nBundle.getText(me,this._nMoreCount)}get showNMore(){return!this.expanded&&this.showMore&&!!this.overflownTokens.length}get contentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer--content")}get expandedContentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer-expanded--content")}get narrowContentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer-nmore--content")}get tokenizerLabel(){return u.i18nBundle.getText(ve)}get morePopoverTitle(){return u.i18nBundle.getText(fe)}get overflownTokens(){return this.contentDom?(this._getTokens().forEach(e=>{e.overflows=!1}),this._getTokens().filter(e=>{const t=this.contentDom.getBoundingClientRect(),o=e.getBoundingClientRect(),n=o.right,i=t.right,r=o.left,c=t.left;return e.overflows=!this.expanded&&(r<c||n>i),e.overflows})):[]}get hasValueState(){return this.valueState===m.None||this.valueState===m.Success}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get _valueStateMessageIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==m.None?e[this.valueState]:""}get _isPhone(){return T()}get _selectedTokens(){return this._getTokens().filter(e=>e.selected)}get classes(){return{wrapper:{"ui5-tokenizer-root":!0,"ui5-tokenizer-nmore--wrapper":this.showMore,"ui5-tokenizer-no-padding":!this._getTokens().length},content:{"ui5-tokenizer--content":!0,"ui5-tokenizer-expanded--content":!this.showNMore,"ui5-tokenizer-nmore--content":this.showNMore},popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-responsive-popover-header":this.showPopover,"ui5-valuestatemessage--success":this.valueState===m.Success,"ui5-valuestatemessage--error":this.valueState===m.Error,"ui5-valuestatemessage--warning":this.valueState===m.Warning,"ui5-valuestatemessage--information":this.valueState===m.Information}}}get styles(){return{popover:{"min-width":this.popoverMinWidth?`${this.popoverMinWidth}px`:""},popoverValueStateMessage:{width:this.popoverMinWidth&&!T()?`${this.popoverMinWidth}px`:"100%","min-height":"2rem"},popoverHeader:{"min-height":"2rem"},popoverHeaderTitle:{"justify-content":"left"}}}_tokensCountText(){const e=this._getTokens().length;return e===0?u.i18nBundle.getText(ge):e===1?u.i18nBundle.getText(_e):u.i18nBundle.getText(ke,e)}_focusLastToken(){if(this.tokens.length===0)return;const e=this.tokens[this.tokens.length-1];e.focus(),this._itemNav.setCurrentItem(e)}static async onDefine(){u.i18nBundle=await j("@ui5/webcomponents")}async getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}};p([f({type:Boolean})],d.prototype,"showMore",void 0);p([f({type:Boolean})],d.prototype,"disabled",void 0);p([f({type:Boolean})],d.prototype,"expanded",void 0);p([f({type:Object})],d.prototype,"morePopoverOpener",void 0);p([f({validator:V})],d.prototype,"popoverMinWidth",void 0);p([f({type:m,defaultValue:m.None})],d.prototype,"valueState",void 0);p([f({validator:V})],d.prototype,"_nMoreCount",void 0);p([B({type:HTMLElement,default:!0,individualSlots:!0})],d.prototype,"tokens",void 0);p([B()],d.prototype,"valueStateMessage",void 0);d=u=p([U({tag:"ui5-tokenizer",languageAware:!0,renderer:Z,template:Se,styles:Ce,staticAreaStyles:[Te,xe,ye,Ee],staticAreaTemplate:$e,dependencies:[he,ce,ue,de,pe]}),x("token-delete",{detail:{ref:{type:HTMLElement}}}),x("show-more-items-press",{detail:{ref:{type:HTMLElement}}})],d);d.define();const Xe=d;export{A as C,Xe as T};
//# sourceMappingURL=Tokenizer-26722e19.js.map
