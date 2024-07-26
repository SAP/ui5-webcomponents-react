import{U as Z}from"./UI5Element-DH5oRWb7.js";import{a as l,l as r,b as d,s as w,p as h,c as q,d as G}from"./withWebComponent-CFCcsgaR.js";import{s as S}from"./slot-Df15G--e.js";import{e as y}from"./event-CegLCnR0.js";import{R as I}from"./ResizeHandler-SVe57yR2.js";import{I as te}from"./ItemNavigation-O39MJWnD.js";import{S as oe}from"./ScrollEnablement-Cca1gPL8.js";import{I as C}from"./Integer-Dh6YzFpK.js";import{b as J}from"./i18nBundle-VKnKJfRd.js";import{a as ne,n as Q,K as X,L as ie,M as se,w as re,x as D,t as z,s as le,E as ae,F as B,u as de,v as M,N as ce,O as P,f as he,g as N,P as ue,Q as R,b as pe,c as O,d as _e,e as A,I as ve,H as fe}from"./Keys-BgUkNma0.js";import{i as x}from"./useIsomorphicLayoutEffect-BZqdrUgG.js";import{V as k}from"./ValueState-Bn-H2OaL.js";import me from"./ResponsivePopover-DNtrR931.js";import{d as ke}from"./List-CfEgwv2J.js";import{a as ge}from"./Title-CZ4mgGsM.js";import{b as be}from"./Button-C7MkX4Mc.js";import{c as b,I as Y}from"./Icon-5sSxuG1B.js";import Te from"./StandardListItem-D1lS_vtI.js";import{o as g}from"./class-map-BVs8Mnz-.js";import{s as v}from"./style-map-4J279J6B.js";import{aD as ye,aE as xe,aF as $e,aG as we,aH as Se,aI as Ce,aJ as Ee,aK as Ie}from"./i18n-defaults-B3SMwW1O.js";import{r as T,b as De}from"./Boot-DdVREbXE.js";import{s as E}from"./parameters-bundle.css-BZWwXjHP.js";import{s as ze}from"./ResponsivePopoverCommon.css-ydlfhhBW.js";import{s as Be}from"./ValueStateMessage.css-BvpysoMu.js";import{s as Me}from"./Input-CJRKgCvZ.js";import"./decline-BKu2yS0R.js";import"./sys-cancel-CZeEKTUO.js";function Pe(s,e,t){return l`<div class="${g(this.classes.wrapper)}"><span id="${r(this._id)}-hiddenText" class="ui5-hidden-text">${r(this.tokenizerLabel)}</span><div class="${g(this.classes.content)}" @ui5-delete="${r(this._delete)}" @click="${this._click}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @ui5-select="${r(this.onTokenSelect)}" role="listbox" aria-labelledby="${r(this._id)}-hiddenText">${b(this.tokens,(o,n)=>o._id||n,(o,n)=>Ne.call(this,s,e,t,o,n))}</div>${this.showNMore?Re.call(this,s,e,t):void 0}</div>`}function Ne(s,e,t,o,n){return l`<slot name="${r(o._individualSlot)}"></slot>`}function Re(s,e,t){return l`<span @click="${this._openMorePopoverAndFireEvent}" class="ui5-tokenizer-more-text" part="n-more-text">${r(this._nMoreText)}</span>`}function Oe(s,e,t){return t?l`<${d("ui5-responsive-popover",e,t)} tokenizer-popover="true" style=${v(this.styles.popover)} class=${g(this.classes.popover)} ?content-only-on-desktop="${this.noValueStatePopover}" hide-arrow placement-type="Bottom" horizontal-align="Left" @before-close=${this.handleBeforeClose} @before-open="${this.handleBeforeOpen}">${this._isPhone?void 0:V.call(this,s,e,t)}${this._isPhone?L.call(this,s,e,t):void 0}<${d("ui5-list",e,t)} class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${r(this.itemDelete)}>${b(this._tokens,(o,n)=>o._id||n,(o,n)=>K.call(this,s,e,t,o,n))}</${d("ui5-list",e,t)}>${this._isPhone?j.call(this,s,e,t):void 0}</${d("ui5-responsive-popover",e,t)}>`:l`<ui5-responsive-popover tokenizer-popover="true" style=${v(this.styles.popover)} class=${g(this.classes.popover)} ?content-only-on-desktop="${this.noValueStatePopover}" hide-arrow placement-type="Bottom" horizontal-align="Left" @before-close=${this.handleBeforeClose} @before-open="${this.handleBeforeOpen}">${this._isPhone?void 0:V.call(this,s,e,t)}${this._isPhone?L.call(this,s,e,t):void 0}<ui5-list class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${r(this.itemDelete)}>${b(this._tokens,(o,n)=>o._id||n,(o,n)=>K.call(this,s,e,t,o,n))}</ui5-list>${this._isPhone?j.call(this,s,e,t):void 0}</ui5-responsive-popover>`}function V(s,e,t){return l`<div slot="header" class="ui5-responsive-popover-header" style="${v(this.styles.popoverHeader)}">${this.noValueStatePopover?void 0:Ae.call(this,s,e,t)}</div>`}function Ae(s,e,t){return t?l`<div class="${g(this.classes.popoverValueState)}" style="${v(this.styles.popoverValueStateMessage)}"><${d("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${r(this._valueStateMessageIcon)}"></${d("ui5-icon",e,t)}>${b(this.valueStateMessageText,(o,n)=>o._id||n,(o,n)=>H.call(this,s,e,t,o,n))}</div>`:l`<div class="${g(this.classes.popoverValueState)}" style="${v(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${r(this._valueStateMessageIcon)}"></ui5-icon>${b(this.valueStateMessageText,(o,n)=>o._id||n,(o,n)=>H.call(this,s,e,t,o,n))}</div>`}function H(s,e,t,o,n){return l`${r(o)}`}function L(s,e,t){return t?l`<div slot="header" class="ui5-responsive-popover-header" style="${v(this.styles.popoverHeader)}"><div class="row" style="${v(this.styles.popoverHeaderTitle)}"><${d("ui5-title",e,t)} level="H5" class="ui5-responsive-popover-header-text">${r(this.morePopoverTitle)}</${d("ui5-title",e,t)}><${d("ui5-button",e,t)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closeMorePopover}"></${d("ui5-button",e,t)}></div></div>${this.noValueStatePopover?void 0:W.call(this,s,e,t)}`:l`<div slot="header" class="ui5-responsive-popover-header" style="${v(this.styles.popoverHeader)}"><div class="row" style="${v(this.styles.popoverHeaderTitle)}"><ui5-title level="H5" class="ui5-responsive-popover-header-text">${r(this.morePopoverTitle)}</ui5-title><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closeMorePopover}"></ui5-button></div></div>${this.noValueStatePopover?void 0:W.call(this,s,e,t)}`}function W(s,e,t){return t?l`<div class="${g(this.classes.popoverValueState)}" style="${v(this.styles.popoverValueStateMessage)}"><${d("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${r(this._valueStateMessageIcon)}"></${d("ui5-icon",e,t)}>${b(this.valueStateMessageText,(o,n)=>o._id||n,(o,n)=>F.call(this,s,e,t,o,n))}</div>`:l`<div class="${g(this.classes.popoverValueState)}" style="${v(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${r(this._valueStateMessageIcon)}"></ui5-icon>${b(this.valueStateMessageText,(o,n)=>o._id||n,(o,n)=>F.call(this,s,e,t,o,n))}</div>`}function F(s,e,t,o,n){return l`${r(o)}`}function K(s,e,t,o,n){return t?l`<${d("ui5-li",e,t)} .tokenRef=${r(o)} wrapping-type="Normal">${r(o.text)}</${d("ui5-li",e,t)}>`:l`<ui5-li .tokenRef=${r(o)} wrapping-type="Normal">${r(o.text)}</ui5-li>`}function j(s,e,t){return t?l`<div slot="footer" class="ui5-responsive-popover-footer"><${d("ui5-button",e,t)} id="ui5-tokenizer-dialog-confirm-btn" design="Emphasized" @click="${this.closeMorePopover}">OK</${d("ui5-button",e,t)}></div>`:l`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button id="ui5-tokenizer-dialog-confirm-btn" design="Emphasized" @click="${this.closeMorePopover}">OK</ui5-button></div>`}T("@ui5/webcomponents-theming","sap_horizon",async()=>w);T("@ui5/webcomponents","sap_horizon",async()=>E);const Ve={packageName:"@ui5/webcomponents",fileName:"themes/Tokenizer.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{display:inline-block;box-sizing:border-box;border:1px solid black;height:2.25rem}.ui5-tokenizer-root{height:100%;display:flex;align-items:center;overflow-x:scroll;box-sizing:border-box;font-family:"72override",var(--sapFontFamily)}.ui5-tokenizer-no-padding{padding:0}.ui5-tokenizer-root.ui5-tokenizer-nmore--wrapper{overflow:hidden}.ui5-tokenizer--token--wrapper{display:inline-flex;align-items:center;box-sizing:border-box;height:100%}:host([expanded]) .ui5-tokenizer--content{display:inline-flex;white-space:nowrap;overflow:hidden}.ui5-tokenizer--content{display:flex;flex-wrap:nowrap;align-items:center;overflow:hidden;padding-inline-start:var(--_ui5-v1-24-7_tokenizer_padding);height:100%;box-sizing:border-box}:host([_tokens-count="1"]) .ui5-tokenizer--content{padding-inline-end:4px;box-sizing:border-box;max-width:100%;flex:1}.ui5-tokenizer-more-text{display:inline-block;margin-inline-start:.25rem;cursor:pointer;white-space:nowrap;font-size:var(--sapFontSize);font-weight:400;color:var(--_ui5-v1-24-7_tokenizer_n_more_text_color)}
`};T("@ui5/webcomponents-theming","sap_horizon",async()=>w);T("@ui5/webcomponents","sap_horizon",async()=>E);const He={packageName:"@ui5/webcomponents",fileName:"themes/TokenizerPopover.css.ts",content:`[ui5-responsive-popover]::part(header),[ui5-responsive-popover]::part(content){padding:0}#ui5-tokenizer-dialog-confirm-btn{height:100%;min-width:4rem}[ui5-responsive-popover]{margin-top:var(--_ui5-v1-24-7_tokenizer-popover_offset);margin-inline-start:calc(-1 * var(--_ui5-v1-24-7_tokenizer_padding))}
`};var _=function(s,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(a=s[c])&&(i=(n<3?a(i):n>3?a(e,t,i):a(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},f,U;(function(s){s.cut="cut",s.copy="copy"})(U||(U={}));let u=f=class extends Z{_handleResize(){this._nMoreCount=this.overflownTokens.length}constructor(){super(),this._resizeHandler=this._handleResize.bind(this),this._itemNav=new te(this,{currentIndex:-1,getItemsCallback:this._getVisibleTokens.bind(this)}),this._scrollEnablement=new oe(this),this._isOpen=!1}onBeforeRendering(){this._tokensCount=this._getTokens().length,this._tokens.forEach(e=>{e.singleToken=this._tokens.length===1}),this._tokens.length||this.closeMorePopover()}onEnterDOM(){I.register(this.contentDom,this._resizeHandler)}onExitDOM(){I.deregister(this.contentDom,this._resizeHandler)}async _openMorePopoverAndFireEvent(){this.preventPopoverOpen||await this.openMorePopover(),this.fireEvent("show-more-items-press")}async openMorePopover(){(await this.getPopover()).showAt(this.morePopoverOpener||this),this._isOpen=!0}_getTokens(){return this.getSlottedNodes("tokens")}get _tokens(){return this.getSlottedNodes("tokens")}_onmousedown(e){if(e.target.hasAttribute("ui5-token")){const t=e.target;t.toBeDeleted||this._itemNav.setCurrentItem(t)}}onTokenSelect(){const e=this._getTokens();e.length===1&&e[0].isTruncatable&&(e[0].selected?this.openMorePopover():this.closeMorePopover())}_getVisibleTokens(){return this.disabled?[]:this._tokens.filter((e,t)=>t<this._tokens.length-this._nMoreCount)}async onAfterRendering(){this._nMoreCount=this.overflownTokens.length,this._getTokens().length||(await this.getPopover()).close(),this._scrollEnablement.scrollContainer=this.expanded||!this.narrowContentDom?this.expandedContentDom:this.narrowContentDom,this.expanded&&(this._expandedScrollWidth=this.expandedContentDom.scrollWidth,this.scrollToEnd()),this.expanded||this.scrollToStart()}_delete(e){const t=e.target;if(!e.detail){this._tokenClickDelete(e,t),this._getTokens().length&&this.closeMorePopover();return}this._selectedTokens.length?this._selectedTokens.forEach(o=>this.deleteToken(o,e.detail.backSpace)):this.deleteToken(t,e.detail.backSpace)}_tokenClickDelete(e,t){const o=this._getVisibleTokens(),n=e.target,i=t?o.indexOf(t):o.indexOf(n),a=i===o.length-1?i-1:i+1,c=o[a];this._handleCurrentItemAfterDeletion(c),this.fireEvent("token-delete",{ref:t||n})}_handleCurrentItemAfterDeletion(e){e&&!x()&&(this._itemNav.setCurrentItem(e),setTimeout(()=>{e.focus()},0))}deleteToken(e,t){const o=this._getVisibleTokens(),n=o.indexOf(e);let i=n===o.length-1?n-1:n+1;const a=o.filter(ee=>!ee.selected);t?i=n===0?n+1:n-1:i=n===o.length-1?n-1:n+1;let c=o[i];if(a.length>1)for(;c&&c.selected;)c=t?o[--i]:o[++i];else c=a[0];this._handleCurrentItemAfterDeletion(c),this.fireEvent("token-delete",{ref:e})}async itemDelete(e){const t=e.detail.item.tokenRef;if(this._getTokens().length===1&&this._getTokens()[0].isTruncatable){const o=await this.getPopover();o.addEventListener("ui5-after-close",()=>{this.fireEvent("token-delete",{ref:t})},{once:!0}),o.close()}else this.fireEvent("token-delete",{ref:t})}handleBeforeClose(){x()&&this._getTokens().forEach(e=>{e.selected=!1})}handleBeforeOpen(){this.fireEvent("before-more-popover-open")}_onkeydown(e){if(ne(e)&&e.preventDefault(),Q(e)||X(e))return e.preventDefault(),this._handleTokenSelection(e,!1);ie(e)&&this._handleHomeShift(e),se(e)&&this._handleEndShift(e),this._handleItemNavigation(e,this._tokens)}_handleItemNavigation(e,t){const o=!!(e.metaKey||e.ctrlKey),n=e.target;if(re(e)||D(e)||z(e)||le(e))return this._handleArrowCtrl(e,n,t,D(e)||z(e));if(ae(e)||B(e)||de(e)||M(e)||ce(e)||P(e))return e.preventDefault(),this._handleArrowShift(n,t,B(e)||P(e)||M(e));if(he(e)||N(e)||ue(e)||R(e))return e.preventDefault(),this._handleHome(t,N(e)||R(e));if(o&&e.key.toLowerCase()==="a")return e.preventDefault(),this._toggleTokenSelection(t);if(pe(e)||O(e)||_e(e)||A(e)){const i=this._calcNextTokenIndex(this._tokens.find(a=>a.focused),t,O(e)||A(e));this._scrollToToken(t[i])}}_handleHome(e,t){if(!e||!e.length)return-1;const o=t?e.length-1:0;e[o].focus(),this._itemNav.setCurrentItem(e[o])}_handleHomeShift(e){const t=this.tokens,o=e.target,n=t.indexOf(o);t.filter((i,a)=>a<=n).forEach(i=>{i.selected=!0}),t[0].focus(),this._itemNav.setCurrentItem(t[0])}_handleEndShift(e){const t=this.tokens,o=e.target,n=t.indexOf(o);t.filter((i,a)=>a>=n).forEach(i=>{i.selected=!0}),t[t.length-1].focus(),this._itemNav.setCurrentItem(t[t.length-1])}_calcNextTokenIndex(e,t,o){if(!t.length)return-1;const n=t.indexOf(e);let i=o?n+1:n-1;return i>=t.length&&(i=t.length-1),i<0&&(i=0),i}_handleArrowCtrl(e,t,o,n){const i=this._calcNextTokenIndex(t,o,n);e.preventDefault(),i!==-1&&(setTimeout(()=>{o[i].focus()},0),this._scrollToToken(o[i]),this._itemNav.setCurrentItem(o[i]))}_handleArrowShift(e,t,o){const n=t.indexOf(e),i=o?n+1:n-1;i===-1||i===t.length||(e.selected=!0,t[i].selected=!0,setTimeout(()=>{t[i].focus()},0),this._scrollToToken(t[i]),this._itemNav.setCurrentItem(t[i]))}_click(e){this._handleTokenSelection(e)}_toggleTokenSelection(e){if(!e||!e.length)return;const t=e.every(o=>o.selected);e.forEach(o=>{o.selected=!t})}_handleTokenSelection(e,t=!0){const o=e.target;o.hasAttribute("ui5-token")&&(t?this._tokens:[]).forEach(i=>{i!==o&&(i.selected=!1)})}_fillClipboard(e,t){const o=t.filter(i=>i.selected).map(i=>i.text).join(`\r
`),n=i=>{i.clipboardData&&i.clipboardData.setData("text/plain",o),i.preventDefault()};document.addEventListener(e,n),document.execCommand(e),document.removeEventListener(e,n)}scrollToStart(){this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(0,0)}scrollToEnd(){const e=this.expandedContentDom&&(this.effectiveDir!=="rtl"?this.expandedContentDom.scrollWidth:-this.expandedContentDom.scrollWidth);this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(e,0,5,10)}_scrollToToken(e){if(!this.expandedContentDom)return;const t=e.getBoundingClientRect(),o=this.expandedContentDom.getBoundingClientRect();t.left<o.left?this._scrollEnablement.scrollTo(this.expandedContentDom.scrollLeft-(o.left-t.left+5),0):t.right>o.right&&this._scrollEnablement.scrollTo(this.expandedContentDom.scrollLeft+(t.right-o.right+5),0)}async closeMorePopover(){(await this.getPopover()).close(!1,!1,!0),this._isOpen=!1}get _nMoreText(){if(this._nMoreCount)return this._getVisibleTokens().length?f.i18nBundle.getText(ye,this._nMoreCount):f.i18nBundle.getText(xe,this._nMoreCount)}get showNMore(){return!this.expanded&&this.showMore&&!!this.overflownTokens.length}get contentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer--content")}get expandedContentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer-expanded--content")}get narrowContentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer-nmore--content")}get tokenizerLabel(){return f.i18nBundle.getText($e)}get morePopoverTitle(){return f.i18nBundle.getText(we)}get overflownTokens(){return this.contentDom?(this._getTokens().forEach(e=>{e.overflows=!1}),this._getTokens().filter(e=>{const t=this.contentDom.getBoundingClientRect(),o=e.getBoundingClientRect(),n=Number(o.right.toFixed(2)),i=Number(t.right.toFixed(2)),a=Number(o.left.toFixed(2)),c=Number(t.left.toFixed(2));return e.overflows=!this.expanded&&(a<c||n>i),e.overflows})):[]}get noValueStatePopover(){return this.valueState===k.None||this.valueState===k.Success}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get _valueStateMessageIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==k.None?e[this.valueState]:""}get _isPhone(){return x()}get _selectedTokens(){return this._getTokens().filter(e=>e.selected)}get classes(){return{wrapper:{"ui5-tokenizer-root":!0,"ui5-tokenizer-nmore--wrapper":this.showMore,"ui5-tokenizer-no-padding":!this._getTokens().length},content:{"ui5-tokenizer--content":!0,"ui5-tokenizer-expanded--content":!this.showNMore,"ui5-tokenizer-nmore--content":this.showNMore},popover:{"ui5-popover-with-value-state-header-phone":this._isPhone&&!this.noValueStatePopover,"ui5-popover-with-value-state-header":!this._isPhone&&!this.noValueStatePopover},popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage-header":!0,"ui5-valuestatemessage--success":this.valueState===k.Success,"ui5-valuestatemessage--error":this.valueState===k.Error,"ui5-valuestatemessage--warning":this.valueState===k.Warning,"ui5-valuestatemessage--information":this.valueState===k.Information}}}get styles(){return{popover:{"min-width":this.popoverMinWidth?`${this.popoverMinWidth}px`:""},popoverValueStateMessage:{width:this.popoverMinWidth&&!x()?`${this.popoverMinWidth}px`:"100%","min-height":"2rem"},popoverHeader:{"min-height":"2rem"},popoverHeaderTitle:{"justify-content":"left"}}}_tokensCountText(){const e=this._getTokens().length;return e===0?f.i18nBundle.getText(Se):e===1?f.i18nBundle.getText(Ce):f.i18nBundle.getText(Ee,e)}_focusLastToken(){if(this.tokens.length===0)return;const e=this.tokens[this.tokens.length-1];e.focus(),this._itemNav.setCurrentItem(e)}static async onDefine(){f.i18nBundle=await J("@ui5/webcomponents")}async getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}};_([h({type:Boolean})],u.prototype,"showMore",void 0);_([h({type:Boolean})],u.prototype,"disabled",void 0);_([h({type:Boolean})],u.prototype,"preventPopoverOpen",void 0);_([h({type:Boolean})],u.prototype,"expanded",void 0);_([h({type:Object})],u.prototype,"morePopoverOpener",void 0);_([h({validator:C})],u.prototype,"popoverMinWidth",void 0);_([h({type:k,defaultValue:k.None})],u.prototype,"valueState",void 0);_([h({validator:C})],u.prototype,"_nMoreCount",void 0);_([h({validator:C})],u.prototype,"_tokensCount",void 0);_([S({type:HTMLElement,default:!0,individualSlots:!0})],u.prototype,"tokens",void 0);_([S()],u.prototype,"valueStateMessage",void 0);u=f=_([q({tag:"ui5-tokenizer",languageAware:!0,renderer:G,template:Pe,styles:Ve,staticAreaStyles:[ze,Be,Me,He],staticAreaTemplate:Oe,dependencies:[me,ke,Te,ge,be,Y]}),y("token-delete",{detail:{ref:{type:HTMLElement}}}),y("show-more-items-press",{detail:{ref:{type:HTMLElement}}}),y("before-more-popover-open")],u);u.define();const yt=u;function Le(s,e,t){return l`<div tabindex="${r(this.forcedTabIndex)}" @click="${this._handleSelect}" @focusin="${this._focusin}" @focusout="${this._focusout}" @keydown="${this._keydown}" class="ui5-token--wrapper" role="option" aria-selected="${r(this.selected)}"><span class="ui5-token--text">${r(this.text)}</span>${this.readonly?void 0:We.call(this,s,e,t)}</div>`}function We(s,e,t){return l`<div class="ui5-token--icon">${this.closeIcon.length?Fe.call(this,s,e,t):Ke.call(this,s,e,t)}</div>`}function Fe(s,e,t){return l`<slot name="closeIcon" @click="${this._delete}"></slot>`}function Ke(s,e,t){return t?l`<${d("ui5-icon",e,t)} name="${r(this.iconURI)}" accessible-name="${r(this.tokenDeletableText)}" show-tooltip @click="${this._delete}"></${d("ui5-icon",e,t)}>`:l`<ui5-icon name="${r(this.iconURI)}" accessible-name="${r(this.tokenDeletableText)}" show-tooltip @click="${this._delete}"></ui5-icon>`}T("@ui5/webcomponents-theming","sap_horizon",async()=>w);T("@ui5/webcomponents","sap_horizon",async()=>E);const je={packageName:"@ui5/webcomponents",fileName:"themes/Token.css.ts",content:`:host{display:inline-block;background:var(--_ui5-v1-24-7_token_background);border:var(--sapButton_BorderWidth) solid var(--sapButton_TokenBorderColor);border-radius:var(--_ui5-v1-24-7_token_border_radius);color:var(--_ui5-v1-24-7_token_text_color);height:var(--_ui5-v1-24-7_token_height);box-sizing:border-box}:host(:not([single-token])){margin-inline-end:var(--_ui5-v1-24-7_token_right_margin)}:host([overflows]){display:none}:host(:not([readonly]):hover){background:var(--sapButton_Hover_Background);border-color:var(--_ui5-v1-24-7_token_hover_border_color)}:host([selected]:not([readonly])){color:var(--sapButton_Selected_TextColor)}:host([selected]:not([readonly])){background:var(--sapButton_Selected_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_Selected_BorderColor)}:host([selected]:not([readonly])) .ui5-token--wrapper{border-bottom:var(--_ui5-v1-24-7_token_selected_internal_border_bottom);border-bottom-left-radius:var(--_ui5-v1-24-7_token_selected_internal_border_bottom_radius);border-bottom-right-radius:var(--_ui5-v1-24-7_token_selected_internal_border_bottom_radius)}:host([selected]:not([readonly]):hover){background:var(--sapButton_Selected_Hover_Background);border-color:var(--_ui5-v1-24-7_token_selected_hover_border_color)}:host([readonly]){background:var(--_ui5-v1-24-7_token_readonly_background);border-color:var(--sapField_ReadOnly_BorderColor);color:var(--_ui5-v1-24-7_token_readonly_color)}:host([readonly]) .ui5-token--wrapper{padding:var(--_ui5-v1-24-7_token_readonly_padding)}:host([selected]) .ui5-token--wrapper:focus{outline:var(--_ui5-v1-24-7_token_selected_focus_outline)}:host([selected]:not([readonly])) .ui5-token--text,:host([selected]:not([readonly])) .ui5-token--icon{top:var(--_ui5-v1-24-7_token_text_icon_top);position:relative}:host([focused][selected]:not([readonly]):not(:hover)){background:var(--sapButton_Selected_Background);color:var(--sapButton_Selected_TextColor);border:var(--_ui5-v1-24-7_token_focused_selected_border)}.ui5-token--wrapper{display:flex;align-items:center;height:100%;width:100%;cursor:default;padding-inline-start:var(--_ui5-v1-24-7_token_left_padding);box-sizing:border-box;font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);user-select:none}.ui5-token--wrapper{position:relative}:host([selected]) .ui5-token--wrapper{font-family:var(--_ui5-v1-24-7_token_selected_text_font_family)}.ui5-token--wrapper:focus{outline-offset:var(--_ui5-v1-24-7_token_outline_offset);outline:var(--_ui5-v1-24-7_token_focus_outline)}.ui5-token--wrapper:focus:after{content:var(--ui5-v1-24-7_token_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v1-24-7_token_focus_outline_border_radius);top:var(--_ui5-v1-24-7_token_focus_offset);bottom:var(--_ui5-v1-24-7_token_focus_offset);left:var(--_ui5-v1-24-7_token_focus_offset);right:var(--_ui5-v1-24-7_token_focus_offset)}:host([focused][selected]:not([readonly])) .ui5-token--wrapper:focus:after{bottom:var(--_ui5-v1-24-7_token_selected_focused_offset_bottom)}.ui5-token--text{white-space:nowrap}.ui5-token--icon{display:flex}:host([selected]) .ui5-token--icon>[ui5-icon],:host([selected]) ::slotted([ui5-icon]){color:var(--sapButton_Selected_TextColor)}.ui5-token--icon>[ui5-icon],::slotted([ui5-icon]){color:inherit;cursor:pointer;width:var(--_ui5-v1-24-7_token_icon_size);height:var(--_ui5-v1-24-7_token_icon_size);padding:var(--_ui5-v1-24-7_token_icon_padding);color:var(--sapContent_IconColor)}:host([single-token]){max-width:100%}:host([single-token]) .ui5-token--wrapper{max-width:100%}:host([single-token]) .ui5-token--text{overflow:hidden;text-overflow:ellipsis;max-width:100%}
`};var m=function(s,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var c=s.length-1;c>=0;c--)(a=s[c])&&(i=(n<3?a(i):n>3?a(e,t,i):a(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},$;let p=$=class extends Z{_handleSelect(){this.toBeDeleted||(this.selected=!this.selected,this.fireEvent("select"))}_focusin(){this.focused=!0}_focusout(){this.focused=!this.focused}_delete(){this.toBeDeleted=!0,this.fireEvent("delete")}_keydown(e){const t=ve(e),o=fe(e);!this.readonly&&(t||o)&&(e.preventDefault(),this.fireEvent("delete",{backSpace:t,delete:o})),(Q(e)||X(e))&&(e.preventDefault(),this._handleSelect())}onBeforeRendering(){this.toBeDeleted=!1}get tokenDeletableText(){return $.i18nBundle.getText(Ie)}get iconURI(){return De().includes("sap_belize")?"sys-cancel":"decline"}get textDom(){var e;return(e=this.getDomRef())==null?void 0:e.querySelector(".ui5-token--text")}get isTruncatable(){return this.textDom?Math.ceil(this.textDom.getBoundingClientRect().width)<Math.ceil(this.textDom.scrollWidth):!1}static async onDefine(){$.i18nBundle=await J("@ui5/webcomponents")}};m([h()],p.prototype,"text",void 0);m([h({type:Boolean})],p.prototype,"readonly",void 0);m([h({type:Boolean})],p.prototype,"selected",void 0);m([h({type:Boolean})],p.prototype,"overflows",void 0);m([h({type:Boolean})],p.prototype,"singleToken",void 0);m([h({type:Boolean})],p.prototype,"focused",void 0);m([h({type:Boolean})],p.prototype,"toBeDeleted",void 0);m([h({defaultValue:"-1",noAttribute:!0})],p.prototype,"forcedTabIndex",void 0);m([S()],p.prototype,"closeIcon",void 0);p=$=m([q({tag:"ui5-token",languageAware:!0,renderer:G,template:Le,styles:je,dependencies:[Y]}),y("select"),y("delete",{detail:{backSpace:{type:Boolean},delete:{type:Boolean}}})],p);p.define();const Ue=p,$t=Object.freeze(Object.defineProperty({__proto__:null,default:Ue},Symbol.toStringTag,{value:"Module"}));export{U as C,yt as T,Ue as a,$t as b};
