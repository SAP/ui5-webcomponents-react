import{r as T,U as W,l as F}from"./UI5Element-a4bd3d38.js";import{b as d,l as r,d as h,s as L,a as H,p as m,c as U,f as j}from"./withWebComponent-7d7e5133.js";import{s as V}from"./slot-76e48863.js";import{c as g,e as b}from"./Icon-42236945.js";import{R as S}from"./ResizeHandler-0af4416f.js";import{I as Z}from"./ItemNavigation-0734b7c0.js";import{S as q}from"./ScrollEnablement-dd3a6392.js";import{I as x}from"./Integer-f7f172c9.js";import{a as G,k as J,x as Q,y as X,z as Y,A as ee,B as y,u as w,t as te,C as ne,D as $,v as oe,w as E,E as ie,F as C,f as se,g as I,G as re,H as z,b as le,c as D,d as ae,e as M}from"./Icons-74c917eb.js";import{i as _}from"./Device-6afa24d0.js";import{V as f}from"./ValueState-2c5e5904.js";import he from"./ResponsivePopover-1151e741.js";import{d as de}from"./ListItemBase-472e3755.js";import{a as ce}from"./Title-f7b3e876.js";import{b as pe}from"./Button-02dfef34.js";import ue from"./StandardListItem-afe74127.js";import{o as k}from"./class-map-0ab40ab9.js";import{s as v}from"./style-map-132a30d8.js";import{I as fe,T as me,J as ve,K as ge,N as _e,O as ke,P as Te}from"./i18n-defaults-d5d083dd.js";import{s as be}from"./ResponsivePopoverCommon.css-870f7136.js";import{s as xe}from"./ValueStateMessage.css-044f6113.js";import{s as Se}from"./Suggestions.css-8d6efd26.js";function ye(s,e,t){return d`<div class="${k(this.classes.wrapper)}"><span id="${r(this._id)}-hiddenText" class="ui5-hidden-text">${r(this.tokenizerLabel)}</span><div class="${k(this.classes.content)}" @ui5-delete="${r(this._delete)}" @click="${this._click}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @ui5-select="${r(this.onTokenSelect)}" role="listbox" aria-labelledby="${r(this._id)}-hiddenText">${g(this.tokens,(n,o)=>n._id||o,(n,o)=>we.call(this,s,e,t,n,o))}</div>${this.showNMore?$e.call(this,s,e,t):void 0}</div>`}function we(s,e,t,n,o){return d`<slot name="${r(n._individualSlot)}"></slot>`}function $e(s,e,t){return d`<span @click="${this._openMorePopoverAndFireEvent}" class="ui5-tokenizer-more-text" part="n-more-text">${r(this._nMoreText)}</span>`}function Ee(s,e,t){return t?d`<${h("ui5-responsive-popover",e,t)} tokenizer-popover="true" style=${v(this.styles.popover)} ?content-only-on-desktop="${this.hasValueState}" hide-arrow placement-type="Bottom" horizontal-align="Left" @before-close=${this.handleBeforeClose} @before-open="${this.handleBeforeOpen}"><div slot="header" class="ui5-responsive-popover-header" style="${v(this.styles.popoverHeader)}">${this._isPhone?N.call(this,s,e,t):void 0}${this.hasValueState?void 0:R.call(this,s,e,t)}</div><${h("ui5-list",e,t)} class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${r(this.itemDelete)}>${g(this._tokens,(n,o)=>n._id||o,(n,o)=>P.call(this,s,e,t,n,o))}</${h("ui5-list",e,t)}>${this._isPhone?A.call(this,s,e,t):void 0}</${h("ui5-responsive-popover",e,t)}>`:d`<ui5-responsive-popover tokenizer-popover="true" style=${v(this.styles.popover)} ?content-only-on-desktop="${this.hasValueState}" hide-arrow placement-type="Bottom" horizontal-align="Left" @before-close=${this.handleBeforeClose} @before-open="${this.handleBeforeOpen}"><div slot="header" class="ui5-responsive-popover-header" style="${v(this.styles.popoverHeader)}">${this._isPhone?N.call(this,s,e,t):void 0}${this.hasValueState?void 0:R.call(this,s,e,t)}</div><ui5-list class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${r(this.itemDelete)}>${g(this._tokens,(n,o)=>n._id||o,(n,o)=>P.call(this,s,e,t,n,o))}</ui5-list>${this._isPhone?A.call(this,s,e,t):void 0}</ui5-responsive-popover>`}function N(s,e,t){return t?d`<div class="row" style="${v(this.styles.popoverHeaderTitle)}"><${h("ui5-title",e,t)} level="H5" class="ui5-responsive-popover-header-text">${r(this.morePopoverTitle)}</${h("ui5-title",e,t)}><${h("ui5-button",e,t)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closeMorePopover}"></${h("ui5-button",e,t)}></div>`:d`<div class="row" style="${v(this.styles.popoverHeaderTitle)}"><ui5-title level="H5" class="ui5-responsive-popover-header-text">${r(this.morePopoverTitle)}</ui5-title><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closeMorePopover}"></ui5-button></div>`}function R(s,e,t){return t?d`<div class="${k(this.classes.popoverValueState)}" style="${v(this.styles.popoverValueStateMessage)}"><${h("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${r(this._valueStateMessageIcon)}"></${h("ui5-icon",e,t)}>${g(this.valueStateMessageText,(n,o)=>n._id||o,(n,o)=>O.call(this,s,e,t,n,o))}</div>`:d`<div class="${k(this.classes.popoverValueState)}" style="${v(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${r(this._valueStateMessageIcon)}"></ui5-icon>${g(this.valueStateMessageText,(n,o)=>n._id||o,(n,o)=>O.call(this,s,e,t,n,o))}</div>`}function O(s,e,t,n,o){return d`${r(n)}`}function P(s,e,t,n,o){return t?d`<${h("ui5-li",e,t)} .tokenRef=${r(n)}>${r(n.text)}</${h("ui5-li",e,t)}>`:d`<ui5-li .tokenRef=${r(n)}>${r(n.text)}</ui5-li>`}function A(s,e,t){return t?d`<div slot="footer" class="ui5-responsive-popover-footer"><${h("ui5-button",e,t)} id="ui5-tokenizer-dialog-confirm-btn" design="Emphasized" @click="${this.closeMorePopover}">OK</${h("ui5-button",e,t)}></div>`:d`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button id="ui5-tokenizer-dialog-confirm-btn" design="Emphasized" @click="${this.closeMorePopover}">OK</ui5-button></div>`}T("@ui5/webcomponents-theming","sap_fiori_3",async()=>L);T("@ui5/webcomponents","sap_fiori_3",async()=>H);const Ce={packageName:"@ui5/webcomponents",fileName:"themes/Tokenizer.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host {
	display: inline-block;
	box-sizing: border-box;
	border: 1px solid black;
	height: 2.25rem;
}

.ui5-tokenizer-root {
	height: 100%;
	display: flex;
	align-items: center;
	overflow-x: scroll;
	box-sizing: border-box;
	font-family: "72override", var(--sapFontFamily);
}

.ui5-tokenizer-no-padding {
	padding: 0;
}

.ui5-tokenizer-root.ui5-tokenizer-nmore--wrapper {
	overflow: hidden;
}

.ui5-tokenizer--token--wrapper {
	display: inline-flex;
	align-items: center;
	box-sizing: border-box;
	height: 100%;
}

:host([expanded]) .ui5-tokenizer--content {
	display: inline-flex;
	white-space: nowrap;
	overflow: hidden;
}

.ui5-tokenizer--content {
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	overflow: hidden;
	padding-inline-start: var(--_ui5_tokenizer_padding);
	height: 100%;
	box-sizing: border-box;
}

:host([_tokens-count="1"]) .ui5-tokenizer--content {
	padding-inline-end: 4px;
	box-sizing: border-box;
	max-width: 100%;
	flex: 1;
}

.ui5-tokenizer-more-text {
	display: inline-block;
	margin-inline-start: .25rem;
	cursor: pointer;
	white-space: nowrap;
	font-size: var(--sapFontSize);
	font-weight: normal;
	color: var(--_ui5_tokenizer_n_more_text_color);
}
`};T("@ui5/webcomponents-theming","sap_fiori_3",async()=>L);T("@ui5/webcomponents","sap_fiori_3",async()=>H);const Ie={packageName:"@ui5/webcomponents",fileName:"themes/TokenizerPopover.css",content:`[ui5-responsive-popover]::part(header),
[ui5-responsive-popover]::part(content) {
	padding: 0;
}

#ui5-tokenizer-dialog-confirm-btn {
	height: 100%;
	min-width: 4rem;
}

[ui5-responsive-popover] {
	margin-top: var(--_ui5_tokenizer-popover_offset);
	margin-inline-start: calc(-1 * var(--_ui5_tokenizer_padding));
}`};var p=globalThis&&globalThis.__decorate||function(s,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,n);else for(var c=s.length-1;c>=0;c--)(l=s[c])&&(i=(o<3?l(i):o>3?l(e,t,i):l(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},u,B;(function(s){s.cut="cut",s.copy="copy"})(B||(B={}));let a=u=class extends W{_handleResize(){this._nMoreCount=this.overflownTokens.length}constructor(){super(),this._resizeHandler=this._handleResize.bind(this),this._itemNav=new Z(this,{currentIndex:-1,getItemsCallback:this._getVisibleTokens.bind(this)}),this._scrollEnablement=new q(this)}onBeforeRendering(){this._nMoreCount=this.overflownTokens.length,this._tokensCount=this._getTokens().length,this._tokens.forEach(e=>{e.singleToken=this._tokens.length===1}),this._tokens.length||this.closeMorePopover()}onEnterDOM(){S.register(this.contentDom,this._resizeHandler)}onExitDOM(){S.deregister(this.contentDom,this._resizeHandler)}async _openMorePopoverAndFireEvent(){this.preventPopoverOpen||await this.openMorePopover(),this.fireEvent("show-more-items-press")}async openMorePopover(){(await this.getPopover()).showAt(this.morePopoverOpener||this)}_getTokens(){return this.getSlottedNodes("tokens")}get _tokens(){return this.getSlottedNodes("tokens")}_onmousedown(e){if(e.target.hasAttribute("ui5-token")){const t=e.target;t.toBeDeleted||this._itemNav.setCurrentItem(t)}}onTokenSelect(){const e=this._getTokens();e.length===1&&e[0].isTruncatable&&(e[0].selected?this.openMorePopover():this.closeMorePopover())}_getVisibleTokens(){return this.disabled?[]:this._tokens.filter((e,t)=>t<this._tokens.length-this._nMoreCount)}async onAfterRendering(){this._getTokens().length||(await this.getPopover()).close(),this._scrollEnablement.scrollContainer=this.expanded||!this.narrowContentDom?this.expandedContentDom:this.narrowContentDom,this.expanded&&(this._expandedScrollWidth=this.expandedContentDom.scrollWidth,this.scrollToEnd()),this.expanded||this.scrollToStart()}_delete(e){const t=e.target;if(!e.detail){this._tokenClickDelete(e,t),this._getTokens().length&&this.closeMorePopover();return}this._selectedTokens.length?this._selectedTokens.forEach(n=>this.deleteToken(n,e.detail.backSpace)):this.deleteToken(t,e.detail.backSpace)}_tokenClickDelete(e,t){const n=this._getVisibleTokens(),o=e.target,i=t?n.indexOf(t):n.indexOf(o),l=i===n.length-1?i-1:i+1,c=n[l];this._handleCurrentItemAfterDeletion(c),this.fireEvent("token-delete",{ref:t||o})}_handleCurrentItemAfterDeletion(e){e&&!_()&&(this._itemNav.setCurrentItem(e),setTimeout(()=>{e.focus()},0))}deleteToken(e,t){const n=this._getVisibleTokens(),o=n.indexOf(e);let i=o===n.length-1?o-1:o+1;const l=n.filter(K=>!K.selected);t?i=o===0?o+1:o-1:i=o===n.length-1?o-1:o+1;let c=n[i];if(l.length>1)for(;c&&c.selected;)c=t?n[--i]:n[++i];else c=l[0];this._handleCurrentItemAfterDeletion(c),this.fireEvent("token-delete",{ref:e})}async itemDelete(e){const t=e.detail.item.tokenRef;if(this._getTokens().length===1&&this._getTokens()[0].isTruncatable){const n=await this.getPopover();n.addEventListener("ui5-after-close",()=>{this.fireEvent("token-delete",{ref:t})},{once:!0}),n.close()}else this.fireEvent("token-delete",{ref:t})}handleBeforeClose(){_()&&this._getTokens().forEach(e=>{e.selected=!1})}handleBeforeOpen(){this.fireEvent("before-more-popover-open")}_onkeydown(e){if(G(e)&&e.preventDefault(),J(e)||Q(e))return e.preventDefault(),this._handleTokenSelection(e,!1);X(e)&&this._handleHomeShift(e),Y(e)&&this._handleEndShift(e),this._handleItemNavigation(e,this._tokens)}_handleItemNavigation(e,t){const n=!!(e.metaKey||e.ctrlKey),o=e.target;if(ee(e)||y(e)||w(e)||te(e))return this._handleArrowCtrl(e,o,t,y(e)||w(e));if(ne(e)||$(e)||oe(e)||E(e)||ie(e)||C(e))return e.preventDefault(),this._handleArrowShift(o,t,$(e)||C(e)||E(e));if(se(e)||I(e)||re(e)||z(e))return e.preventDefault(),this._handleHome(t,I(e)||z(e));if(n&&e.key.toLowerCase()==="a")return e.preventDefault(),this._toggleTokenSelection(t);if(le(e)||D(e)||ae(e)||M(e)){const i=this._calcNextTokenIndex(this._tokens.find(l=>l.focused),t,D(e)||M(e));this._scrollToToken(t[i])}}_handleHome(e,t){if(!e||!e.length)return-1;const n=t?e.length-1:0;e[n].focus(),this._itemNav.setCurrentItem(e[n])}_handleHomeShift(e){const t=this.tokens,n=e.target,o=t.indexOf(n);t.filter((i,l)=>l<=o).forEach(i=>{i.selected=!0}),t[0].focus(),this._itemNav.setCurrentItem(t[0])}_handleEndShift(e){const t=this.tokens,n=e.target,o=t.indexOf(n);t.filter((i,l)=>l>=o).forEach(i=>{i.selected=!0}),t[t.length-1].focus(),this._itemNav.setCurrentItem(t[t.length-1])}_calcNextTokenIndex(e,t,n){if(!t.length)return-1;const o=t.indexOf(e);let i=n?o+1:o-1;return i>=t.length&&(i=t.length-1),i<0&&(i=0),i}_handleArrowCtrl(e,t,n,o){const i=this._calcNextTokenIndex(t,n,o);e.preventDefault(),i!==-1&&(setTimeout(()=>{n[i].focus()},0),this._scrollToToken(n[i]),this._itemNav.setCurrentItem(n[i]))}_handleArrowShift(e,t,n){const o=t.indexOf(e),i=n?o+1:o-1;i===-1||i===t.length||(e.selected=!0,t[i].selected=!0,setTimeout(()=>{t[i].focus()},0),this._scrollToToken(t[i]),this._itemNav.setCurrentItem(t[i]))}_click(e){this._handleTokenSelection(e)}_toggleTokenSelection(e){if(!e||!e.length)return;const t=e.every(n=>n.selected);e.forEach(n=>{n.selected=!t})}_handleTokenSelection(e,t=!0){const n=e.target;n.hasAttribute("ui5-token")&&(t?this._tokens:[]).forEach(i=>{i!==n&&(i.selected=!1)})}_fillClipboard(e,t){const n=t.filter(i=>i.selected).map(i=>i.text).join(`\r
`),o=i=>{i.clipboardData&&i.clipboardData.setData("text/plain",n),i.preventDefault()};document.addEventListener(e,o),document.execCommand(e),document.removeEventListener(e,o)}scrollToStart(){this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(0,0)}scrollToEnd(){const e=this.expandedContentDom&&(this.effectiveDir!=="rtl"?this.expandedContentDom.scrollWidth:-this.expandedContentDom.scrollWidth);this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(e,0,5,10)}_scrollToToken(e){if(!this.expandedContentDom)return;const t=e.getBoundingClientRect(),n=this.expandedContentDom.getBoundingClientRect();t.left<n.left?this._scrollEnablement.scrollTo(this.expandedContentDom.scrollLeft-(n.left-t.left+5),0):t.right>n.right&&this._scrollEnablement.scrollTo(this.expandedContentDom.scrollLeft+(t.right-n.right+5),0)}async closeMorePopover(){(await this.getPopover()).close(!1,!1,!0)}get _nMoreText(){return this._getVisibleTokens().length?u.i18nBundle.getText(fe,this._nMoreCount):u.i18nBundle.getText(me,this._nMoreCount)}get showNMore(){return!this.expanded&&this.showMore&&!!this.overflownTokens.length}get contentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer--content")}get expandedContentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer-expanded--content")}get narrowContentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer-nmore--content")}get tokenizerLabel(){return u.i18nBundle.getText(ve)}get morePopoverTitle(){return u.i18nBundle.getText(ge)}get overflownTokens(){return this.contentDom?(this._getTokens().forEach(e=>{e.overflows=!1}),this._getTokens().filter(e=>{const t=this.contentDom.getBoundingClientRect(),n=e.getBoundingClientRect(),o=Number(n.right.toFixed(2)),i=Number(t.right.toFixed(2)),l=Number(n.left.toFixed(2)),c=Number(t.left.toFixed(2));return e.overflows=!this.expanded&&(l<c||o>i),e.overflows})):[]}get hasValueState(){return this.valueState===f.None||this.valueState===f.Success}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get _valueStateMessageIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==f.None?e[this.valueState]:""}get _isPhone(){return _()}get _selectedTokens(){return this._getTokens().filter(e=>e.selected)}get classes(){return{wrapper:{"ui5-tokenizer-root":!0,"ui5-tokenizer-nmore--wrapper":this.showMore,"ui5-tokenizer-no-padding":!this._getTokens().length},content:{"ui5-tokenizer--content":!0,"ui5-tokenizer-expanded--content":!this.showNMore,"ui5-tokenizer-nmore--content":this.showNMore},popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-responsive-popover-header":!0,"ui5-valuestatemessage--success":this.valueState===f.Success,"ui5-valuestatemessage--error":this.valueState===f.Error,"ui5-valuestatemessage--warning":this.valueState===f.Warning,"ui5-valuestatemessage--information":this.valueState===f.Information}}}get styles(){return{popover:{"min-width":this.popoverMinWidth?`${this.popoverMinWidth}px`:""},popoverValueStateMessage:{width:this.popoverMinWidth&&!_()?`${this.popoverMinWidth}px`:"100%","min-height":"2rem"},popoverHeader:{"min-height":"2rem"},popoverHeaderTitle:{"justify-content":"left"}}}_tokensCountText(){const e=this._getTokens().length;return e===0?u.i18nBundle.getText(_e):e===1?u.i18nBundle.getText(ke):u.i18nBundle.getText(Te,e)}_focusLastToken(){if(this.tokens.length===0)return;const e=this.tokens[this.tokens.length-1];e.focus(),this._itemNav.setCurrentItem(e)}static async onDefine(){u.i18nBundle=await F("@ui5/webcomponents")}async getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}};p([m({type:Boolean})],a.prototype,"showMore",void 0);p([m({type:Boolean})],a.prototype,"disabled",void 0);p([m({type:Boolean})],a.prototype,"preventPopoverOpen",void 0);p([m({type:Boolean})],a.prototype,"expanded",void 0);p([m({type:Object})],a.prototype,"morePopoverOpener",void 0);p([m({validator:x})],a.prototype,"popoverMinWidth",void 0);p([m({type:f,defaultValue:f.None})],a.prototype,"valueState",void 0);p([m({validator:x})],a.prototype,"_nMoreCount",void 0);p([m({validator:x})],a.prototype,"_tokensCount",void 0);p([V({type:HTMLElement,default:!0,individualSlots:!0})],a.prototype,"tokens",void 0);p([V()],a.prototype,"valueStateMessage",void 0);a=u=p([U({tag:"ui5-tokenizer",languageAware:!0,renderer:j,template:ye,styles:Ce,staticAreaStyles:[be,xe,Se,Ie],staticAreaTemplate:Ee,dependencies:[he,de,ue,ce,pe]}),b("token-delete",{detail:{ref:{type:HTMLElement}}}),b("show-more-items-press",{detail:{ref:{type:HTMLElement}}}),b("before-more-popover-open",{detail:{}})],a);a.define();const Ye=a;export{B as C,Ye as T};
//# sourceMappingURL=Tokenizer-ee572d4f.js.map
