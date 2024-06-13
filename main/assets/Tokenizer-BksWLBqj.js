import{C as U}from"./UI5Element-BSD7m3Nn.js";import{b as h,l as r,f as p,s as $,a as c,m as G,c as X}from"./withWebComponent-DbBZwVV6.js";import{f as Q}from"./slot--DoKcWSY.js";import{s as g}from"./event-Dq0fpeHi.js";import{r as ie}from"./Popover-XR-C8_HJ.js";import{f as E}from"./ResizeHandler-BZa0Uicw.js";import{f as b,d as se}from"./Boot-Bi0-wsLc.js";import{f as re}from"./ItemNavigation-BaElEmlr.js";import{v as B}from"./AriaLabelHelper-LMIEtYQL.js";import{t as le}from"./getActiveElement-kltGt_DR.js";import{r as ae}from"./PopupsCommon.css-BweN9FxF.js";import{v as ce}from"./ScrollEnablement-CFDeWxNn.js";import{t as w}from"./Integer-WDQzHAdZ.js";import{f as Y}from"./i18nBundle-D-vhNEte.js";import{m as de,x as he,f as ee,A as te,V as z,X as ue,i as pe,M as _e,Z as fe,g as ke,q as ve,n as me,P as ge,R as I,U as S,_ as be,w as Te,t as O,S as ye,O as N,T as xe,h as A,p as $e,F as R,W as we,G as L,C as De,K as P,c as Ce,D as M}from"./Keys-B00bFMgT.js";import{d as T}from"./Device-RcFucVeJ.js";import Ee from"./ResponsivePopover-CZjvuiUJ.js";import{f as Be,S as ze,L as K}from"./List-DfApDFy_.js";import{a as Ie}from"./Title-CeWu_2Xz.js";import{b as Se}from"./Button-Do_F120z.js";import{I as oe,c as y}from"./Icon-CxSx41s_.js";import"./useIsomorphicLayoutEffect-CZEdMYkS.js";import"./decline-CbvxqJl_.js";import"./sys-cancel-BWYwUF0M.js";import{ay as V,az as Oe,aA as Ne,aB as Ae,aC as F,aD as Re,aE as Le,aF as Pe,aG as Me}from"./i18n-defaults-Dk6PQJ4F.js";import{s as D}from"./parameters-bundle.css-B_nLitlw.js";import{s as W}from"./style-map-D9IWnstk.js";import{s as Ke}from"./ResponsivePopoverCommon.css-D3msQLKR.js";import{s as Ve}from"./Input-CctFuguz.js";function Fe(s,e,t){return h`<div tabindex="${r(this.forcedTabIndex)}" @click="${this._handleSelect}" @focusin="${this._focusin}" @focusout="${this._focusout}" @keydown="${this._keydown}" class="ui5-token--wrapper" role="option" aria-description="${r(this.ariaDescription)}" aria-selected="${r(this.selected)}"><span class="ui5-token--text">${r(this.text)}</span>${this.readonly?void 0:We.call(this,s,e,t)}</div>`}function We(s,e,t){return h`<div class="ui5-token--icon">${this.closeIcon.length?He.call(this,s,e,t):je.call(this,s,e,t)}</div>`}function He(s,e,t){return h`<slot name="closeIcon" @click="${this._delete}"></slot>`}function je(s,e,t){return t?h`<${p("ui5-icon",e,t)} name="decline" mode="Decorative" accessible-name="${r(this.tokenDeletableText)}" show-tooltip @click="${this._delete}"></${p("ui5-icon",e,t)}>`:h`<ui5-icon name="decline" mode="Decorative" accessible-name="${r(this.tokenDeletableText)}" show-tooltip @click="${this._delete}"></ui5-icon>`}b("@ui5/webcomponents-theming","sap_horizon",async()=>$);b("@ui5/webcomponents","sap_horizon",async()=>D);const qe={packageName:"@ui5/webcomponents",fileName:"themes/Token.css.ts",content:`:host{display:inline-block;background:var(--_ui5-v2-0-0-rc-5_token_background);border:var(--sapButton_BorderWidth) solid var(--sapButton_TokenBorderColor);border-radius:var(--_ui5-v2-0-0-rc-5_token_border_radius);color:var(--_ui5-v2-0-0-rc-5_token_text_color);height:var(--_ui5-v2-0-0-rc-5_token_height);box-sizing:border-box}:host(:not([single-token])){margin-inline-end:var(--_ui5-v2-0-0-rc-5_token_right_margin)}:host([overflows]){display:none}:host(:not([readonly]):hover){background:var(--sapButton_Hover_Background)}:host([selected]){background:var(--sapButton_Selected_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([selected]) .ui5-token--wrapper{border-bottom:var(--_ui5-v2-0-0-rc-5_token_selected_internal_border_bottom);border-bottom-left-radius:var(--_ui5-v2-0-0-rc-5_token_selected_internal_border_bottom_radius);border-bottom-right-radius:var(--_ui5-v2-0-0-rc-5_token_selected_internal_border_bottom_radius)}:host([selected]:hover){background:var(--sapButton_Selected_Hover_Background)}:host([readonly]:not([selected])){background:var(--_ui5-v2-0-0-rc-5_token_readonly_background);border-color:var(--sapField_ReadOnly_BorderColor);color:var(--_ui5-v2-0-0-rc-5_token_readonly_color)}:host([readonly]) .ui5-token--wrapper{padding:var(--_ui5-v2-0-0-rc-5_token_readonly_padding)}:host([selected]) .ui5-token--wrapper:focus{outline:var(--_ui5-v2-0-0-rc-5_token_selected_focus_outline)}:host([selected]) .ui5-token--text,:host([selected]) .ui5-token--icon{top:var(--_ui5-v2-0-0-rc-5_token_text_icon_top);position:relative}:host([focused][selected]:not(:hover)){background:var(--sapButton_Selected_Background);color:var(--sapButton_Selected_TextColor);border:var(--_ui5-v2-0-0-rc-5_token_focused_selected_border)}.ui5-token--wrapper{display:flex;align-items:center;height:100%;width:100%;cursor:pointer;padding-inline-start:var(--_ui5-v2-0-0-rc-5_token_left_padding);box-sizing:border-box;font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);user-select:none}.ui5-token--wrapper{position:relative}:host([selected]) .ui5-token--wrapper{font-family:var(--_ui5-v2-0-0-rc-5_token_selected_text_font_family)}.ui5-token--wrapper:focus{outline-offset:var(--_ui5-v2-0-0-rc-5_token_outline_offset);outline:var(--_ui5-v2-0-0-rc-5_token_focus_outline)}.ui5-token--wrapper:focus:after{content:var(--ui5-v2-0-0-rc-5_token_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-0-0-rc-5_token_focus_outline_border_radius);top:var(--_ui5-v2-0-0-rc-5_token_focus_offset);bottom:var(--_ui5-v2-0-0-rc-5_token_focus_offset);left:var(--_ui5-v2-0-0-rc-5_token_focus_offset);right:var(--_ui5-v2-0-0-rc-5_token_focus_offset)}:host([focused][selected]) .ui5-token--wrapper:focus:after{bottom:var(--_ui5-v2-0-0-rc-5_token_selected_focused_offset_bottom)}.ui5-token--text{white-space:nowrap}.ui5-token--icon{display:flex}:host([selected]) .ui5-token--icon>[ui5-icon],:host([selected]) ::slotted([ui5-icon]){color:var(--sapButton_Selected_TextColor)}.ui5-token--icon>[ui5-icon],::slotted([ui5-icon]){color:inherit;cursor:pointer;width:var(--_ui5-v2-0-0-rc-5_token_icon_size);height:var(--_ui5-v2-0-0-rc-5_token_icon_size);padding:var(--_ui5-v2-0-0-rc-5_token_icon_padding);color:var(--sapContent_IconColor)}:host([single-token]){max-width:100%}:host([single-token]) .ui5-token--wrapper{max-width:100%}:host([single-token]) .ui5-token--text{overflow:hidden;text-overflow:ellipsis;max-width:100%}
`};var f=function(s,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var a=s.length-1;a>=0;a--)(l=s[a])&&(i=(n<3?l(i):n>3?l(e,t,i):l(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},m;let _=m=class extends U{_handleSelect(){this.toBeDeleted||(this.selected=!this.selected,this.fireEvent("select"))}_focusin(){this.focused=!0}_focusout(){this.focused=!this.focused}_delete(){this.toBeDeleted=!0,this.fireEvent("delete")}_keydown(e){const t=de(e),o=he(e);!this.readonly&&(t||o)&&(e.preventDefault(),this.fireEvent("delete",{backSpace:t,delete:o})),(ee(e)||te(e))&&(e.preventDefault(),this._handleSelect())}onBeforeRendering(){this.toBeDeleted=!1}get tokenDeletableText(){return m.i18nBundle.getText(V)}get textDom(){var e;return(e=this.getDomRef())==null?void 0:e.querySelector(".ui5-token--text")}get isTruncatable(){return this.textDom?Math.ceil(this.textDom.getBoundingClientRect().width)<Math.ceil(this.textDom.scrollWidth):!1}get ariaDescription(){let e=m.i18nBundle.getText(Oe);return this.readonly||(e+=` ${m.i18nBundle.getText(V)}`),e}static async onDefine(){m.i18nBundle=await Y("@ui5/webcomponents")}};f([c()],_.prototype,"text",void 0);f([c({type:Boolean})],_.prototype,"selected",void 0);f([c({type:Boolean})],_.prototype,"readonly",void 0);f([c({type:Boolean})],_.prototype,"overflows",void 0);f([c({type:Boolean})],_.prototype,"singleToken",void 0);f([c({type:Boolean})],_.prototype,"focused",void 0);f([c({type:Boolean})],_.prototype,"toBeDeleted",void 0);f([c({defaultValue:"-1",noAttribute:!0})],_.prototype,"forcedTabIndex",void 0);f([c({type:Boolean,noAttribute:!0})],_.prototype,"_isVisible",void 0);f([Q()],_.prototype,"closeIcon",void 0);_=m=f([G({tag:"ui5-token",languageAware:!0,renderer:X,template:Fe,styles:qe,dependencies:[oe]}),g("select"),g("delete",{detail:{backSpace:{type:Boolean},delete:{type:Boolean}}})],_);_.define();const Ze=_,Et=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"}));function Je(s,e,t){return t?h`<div class="ui5-tokenizer-root"><div class="ui5-tokenizer--content" @ui5-delete="${r(this._delete)}" @click="${this._click}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" @ui5-select="${r(this.onTokenSelect)}" role="listbox" aria-label="${r(this.tokenizerLabel)}" aria-description="${r(this.tokenizerAriaDescription)}" aria-disabled="${r(this._ariaDisabled)}" aria-readonly="${r(this._ariaReadonly)}">${y(this.tokens,(o,n)=>o._id||n,(o,n)=>H.call(this,s,e,t,o,n))}</div>${this.showNMore?j.call(this,s,e,t):void 0}</div><${p("ui5-responsive-popover",e,t)} tokenizer-popover="true" ?open="${this.open}" .opener="${r(this.morePopoverOpener)}" style=${W(this.styles.popover)} content-only-on-desktop prevent-focus-restore ?hide-arrow="${this.hidePopoverArrow}" placement="Bottom" horizontal-align="Start" @ui5-before-close="${r(this.handleBeforeClose)}" @ui5-close="${r(this.handleAfterClose)}" @ui5-before-open="${r(this.handleBeforeOpen)}">${this._isPhone?q.call(this,s,e,t):void 0}<${p("ui5-list",e,t)} class="ui5-tokenizer-list" selection-mode=${r(this._nMoreListMode)} separators="None" @keydown="${this._onPopoverListKeydown}" @ui5-item-delete=${r(this.itemDelete)}>${y(this._tokens,(o,n)=>o._id||n,(o,n)=>Z.call(this,s,e,t,o,n))}</${p("ui5-list",e,t)}>${this._isPhone?J.call(this,s,e,t):void 0}</${p("ui5-responsive-popover",e,t)}>`:h`<div class="ui5-tokenizer-root"><div class="ui5-tokenizer--content" @ui5-delete="${r(this._delete)}" @click="${this._click}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" @ui5-select="${r(this.onTokenSelect)}" role="listbox" aria-label="${r(this.tokenizerLabel)}" aria-description="${r(this.tokenizerAriaDescription)}" aria-disabled="${r(this._ariaDisabled)}" aria-readonly="${r(this._ariaReadonly)}">${y(this.tokens,(o,n)=>o._id||n,(o,n)=>H.call(this,s,e,t,o,n))}</div>${this.showNMore?j.call(this,s,e,t):void 0}</div><ui5-responsive-popover tokenizer-popover="true" ?open="${this.open}" .opener="${r(this.morePopoverOpener)}" style=${W(this.styles.popover)} content-only-on-desktop prevent-focus-restore ?hide-arrow="${this.hidePopoverArrow}" placement="Bottom" horizontal-align="Start" @ui5-before-close="${r(this.handleBeforeClose)}" @ui5-close="${r(this.handleAfterClose)}" @ui5-before-open="${r(this.handleBeforeOpen)}">${this._isPhone?q.call(this,s,e,t):void 0}<ui5-list class="ui5-tokenizer-list" selection-mode=${r(this._nMoreListMode)} separators="None" @keydown="${this._onPopoverListKeydown}" @ui5-item-delete=${r(this.itemDelete)}>${y(this._tokens,(o,n)=>o._id||n,(o,n)=>Z.call(this,s,e,t,o,n))}</ui5-list>${this._isPhone?J.call(this,s,e,t):void 0}</ui5-responsive-popover>`}function H(s,e,t,o,n){return h`<slot name="${r(o._individualSlot)}"></slot>`}function j(s,e,t){return h`<span role="button" aria-haspopup="dialog" @click="${this._handleNMoreClick}" class="ui5-tokenizer-more-text" part="n-more-text">${r(this._nMoreText)}</span>`}function q(s,e,t){return t?h`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><${p("ui5-title",e,t)} level="H5" wrapping-type="None" class="ui5-responsive-popover-header-text">${r(this.morePopoverTitle)}</${p("ui5-title",e,t)}></div></div>`:h`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><ui5-title level="H5" wrapping-type="None" class="ui5-responsive-popover-header-text">${r(this.morePopoverTitle)}</ui5-title></div></div>`}function Z(s,e,t,o,n){return h`${o._isVisible?Ue.call(this,s,e,t,o,n):void 0}`}function Ue(s,e,t,o,n){return t?h`<${p("ui5-li",e,t)} .tokenRef=${r(o)} wrapping-type="Normal">${r(o.text)}</${p("ui5-li",e,t)}>`:h`<ui5-li .tokenRef=${r(o)} wrapping-type="Normal">${r(o.text)}</ui5-li>`}function J(s,e,t){return t?h`<div slot="footer" class="ui5-responsive-popover-footer"><${p("ui5-button",e,t)} design="Emphasized" data-ui5-tokenizer-dialog-ok-button @click="${this.handleDialogButtonPress}">OK</${p("ui5-button",e,t)}><${p("ui5-button",e,t)} design="Transparent" @click="${this.handleDialogButtonPress}">Cancel</${p("ui5-button",e,t)}></div>`:h`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Emphasized" data-ui5-tokenizer-dialog-ok-button @click="${this.handleDialogButtonPress}">OK</ui5-button><ui5-button design="Transparent" @click="${this.handleDialogButtonPress}">Cancel</ui5-button></div>`}b("@ui5/webcomponents-theming","sap_horizon",async()=>$);b("@ui5/webcomponents","sap_horizon",async()=>D);const Ge={packageName:"@ui5/webcomponents",fileName:"themes/Tokenizer.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{display:inline-block;box-sizing:border-box;border:none;height:2.25rem}:host([disabled]){opacity:40%;pointer-events:none}:host(:not([expanded])) .ui5-tokenizer-root{overflow:hidden}:host([_tokens-count="0"]) .ui5-tokenizer-root{padding:0}.ui5-tokenizer-root{height:100%;display:flex;align-items:center;box-sizing:border-box;touch-action:none;font-family:"72override",var(--sapFontFamily)}.ui5-tokenizer--token--wrapper{display:inline-flex;align-items:center;box-sizing:border-box;height:100%}:host([expanded]) .ui5-tokenizer--content{display:inline-flex;white-space:nowrap;overflow:hidden}.ui5-tokenizer--content{display:flex;flex-wrap:nowrap;align-items:center;overflow:hidden;padding-inline-start:var(--_ui5-v2-0-0-rc-5_tokenizer_padding);height:100%;box-sizing:border-box}:host([_tokens-count="1"]) .ui5-tokenizer--content{padding-inline-end:4px;box-sizing:border-box;max-width:100%;flex:1}.ui5-tokenizer-more-text{display:inline-block;margin-inline-start:.25rem;cursor:pointer;white-space:nowrap;font-size:var(--sapFontSize);font-weight:400;color:var(--_ui5-v2-0-0-rc-5_tokenizer_n_more_text_color)}.ui5-tokenizer-more-text:hover{text-decoration:underline}.ui5-tokenizer-more-text:active{text-decoration:none}
`};b("@ui5/webcomponents-theming","sap_horizon",async()=>$);b("@ui5/webcomponents","sap_horizon",async()=>D);const Xe={packageName:"@ui5/webcomponents",fileName:"themes/TokenizerPopover.css.ts",content:`[ui5-responsive-popover]::part(header),[ui5-responsive-popover]::part(content){padding:0}[ui5-responsive-popover] .ui5-responsive-popover-header{min-height:2rem}[ui5-responsive-popover] .ui5-responsive-popover-header .row{justify-content:left}[ui5-responsive-popover] [ui5-button]{height:100%;min-width:4rem}[ui5-responsive-popover]{margin-top:var(--_ui5-v2-0-0-rc-5_tokenizer-popover_offset);margin-inline-start:calc(-1 * var(--_ui5-v2-0-0-rc-5_tokenizer_padding))}.ui5-responsive-popover-footer [ui5-button]:first-child{margin-right:1rem}
`};var u=function(s,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var a=s.length-1;a>=0;a--)(l=s[a])&&(i=(n<3?l(i):n>3?l(e,t,i):l(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},v,x;(function(s){s.cut="cut",s.copy="copy"})(x||(x={}));let d=v=class extends U{_handleResize(){this._nMoreCount=this.overflownTokens.length}constructor(){super(),this._resizeHandler=this._handleResize.bind(this),this._itemNav=new re(this,{currentIndex:-1,getItemsCallback:this._getVisibleTokens.bind(this)}),this._scrollEnablement=new ce(this),this._tokenDeleting=!1,this._deletedDialogItems=[]}onBeforeRendering(){const e=this._tokens.length;this._tokensCount=e,this._tokens.forEach(t=>{t.singleToken=e===1,t.readonly=this.readonly})}onEnterDOM(){E.register(this.contentDom,this._resizeHandler)}onExitDOM(){E.deregister(this.contentDom,this._resizeHandler)}_handleNMoreClick(){this.disabled||(this.expanded=!0,this.preventPopoverOpen||(this.open=!0,this.scrollToEnd()),this._tokens.forEach(e=>{e.forcedTabIndex="-1"}),this._skipTabIndex=!0,this.fireEvent("show-more-items-press"))}_onmousedown(e){if(e.target.hasAttribute("ui5-token")){const t=e.target;this.expanded=!0,this.open&&(this._preventCollapse=!0),t.toBeDeleted||(this._itemNav.setCurrentItem(t),this._scrollToToken(t))}}onTokenSelect(){const e=this._tokens,t=e[0];e.length===1&&t.isTruncatable&&(this.open=t.selected)}_getVisibleTokens(){return this.disabled?[]:this._tokens.filter((e,t)=>t<this._tokens.length-this._nMoreCount)}onAfterRendering(){const t=this._tokens[0];this._nMoreCount=this.overflownTokens.length,t&&!this.disabled&&!this.preventInitialFocus&&!this._skipTabIndex&&(t.forcedTabIndex="0"),this._scrollEnablement.scrollContainer=this.contentDom,this.expanded&&(this._expandedScrollWidth=this.contentDom.scrollWidth),this._tokenDeleting=!1}_delete(e){const t=e.target;if(!e.detail){this._tokenClickDelete(e,t),this.open=!1;return}this.deleteToken(t,e.detail.backSpace)}_tokenClickDelete(e,t){const o=this._getVisibleTokens(),n=e.target,i=t?o.indexOf(t):o.indexOf(n),l=i===o.length-1?i-1:i+1,a=o[l];this._handleCurrentItemAfterDeletion(a),this._tokenDeleting=!0,this.fireEvent("token-delete",{tokens:[t]})}_handleCurrentItemAfterDeletion(e){e&&!T()&&setTimeout(()=>{e.focus()},0)}deleteToken(e,t){const o=this._getVisibleTokens(),n=o.indexOf(e);let i=n===o.length-1?n-1:n+1;const l=o.filter(k=>!k.selected);t?i=n===0?n+1:n-1:i=n===o.length-1?n-1:n+1;let a=o[i];if(l.length>1)for(;a&&a.selected;)i=t?--i:++i,i<0&&(a=l[0]),i>l.length&&(a=l[l.length-1]);else a=l[0];this._handleCurrentItemAfterDeletion(a),this._tokenDeleting=!0,this._selectedTokens.length?this.fireEvent("token-delete",{tokens:this._selectedTokens}):this.fireEvent("token-delete",{tokens:[e]})}async itemDelete(e){const t=e.detail.item.tokenRef;if(this._tokens.length===1)this.getPopover().addEventListener("ui5-close",()=>{this.fireEvent("token-delete",{tokens:[t]})},{once:!0}),this.open=!1;else{T()?(t._isVisible=!1,this._deletedDialogItems.push(t)):this.fireEvent("token-delete",{tokens:[t]});const n=e.detail.item,i=n.nextElementSibling,l=n.previousElementSibling,a=i||l;a&&(await se(),a.focus())}}handleBeforeClose(){const e=this._tokens;T()&&e.forEach(t=>{t.selected=!1}),!this._tokenDeleting&&!this._preventCollapse&&(this._preventCollapse=!1,this.expanded=!1)}handleBeforeOpen(){this._tokens.forEach(o=>{o._isVisible=!0});const e=this._getList(),t=e.querySelectorAll("[ui5-li]")[0];e._itemNavigation.setCurrentItem(t),this.fireEvent("before-more-popover-open")}handleAfterClose(){this.open=!1,this._preventCollapse=!1,this._focusedElementBeforeOpen=null,this._tokens.forEach(e=>{e._isVisible=!0})}handleDialogButtonPress(e){!!e.target.hasAttribute("data-ui5-tokenizer-dialog-ok-button")&&this._deletedDialogItems.length&&this.fireEvent("token-delete",{tokens:this._deletedDialogItems}),this.open=!1}_onkeydown(e){const t=!!(e.metaKey||e.ctrlKey);if(t&&["c","x"].includes(e.key.toLowerCase())||z(e)||ue(e)){e.preventDefault();const o=e.key.toLowerCase()==="x"||z(e),n=this._tokens.filter(l=>l.selected),i=n.find(l=>l.focused);if(o){const l=this._fillClipboard(x.cut,n);return i&&this.deleteToken(i),l}return this._fillClipboard(x.copy,n)}if(t&&e.key.toLowerCase()==="i"&&this._tokens.length>0&&(e.preventDefault(),this._preventCollapse=!0,this._focusedElementBeforeOpen=ae(),this.open=!0),pe(e)&&e.preventDefault(),ee(e)||te(e))return e.preventDefault(),this._handleTokenSelection(e,!1);(_e(e)||fe(e))&&this._handleHomeShift(e),(ke(e)||ve(e))&&this._handleEndShift(e),this._handleItemNavigation(e,this._tokens)}_onPopoverListKeydown(e){if((!!(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="i"||me(e))&&(e.preventDefault(),this.open=!1,this._preventCollapse=!0,this._focusedElementBeforeOpen&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen||this._focusLastToken()),e.key.toLowerCase()==="f7"){e.preventDefault();const o=e.target,n=le();(n==null?void 0:n.part.value)==="native-li"?o.shadowRoot.querySelector("[part=delete-button]").focus():o.focus()}}_handleItemNavigation(e,t){const o=!!(e.metaKey||e.ctrlKey),n=e.target;if(ge(e)||I(e)||S(e)||be(e))return this._handleArrowCtrl(e,n,t,I(e)||S(e));if(Te(e)||O(e)||ye(e)||N(e)||xe(e)||A(e))return e.preventDefault(),this._handleArrowShift(n,t,O(e)||A(e)||N(e));if($e(e)||R(e)||we(e)||L(e))return e.preventDefault(),this._handleHome(t,R(e)||L(e));if(o&&e.key.toLowerCase()==="a")return e.preventDefault(),this._toggleTokenSelection(t);if(De(e)||P(e)||Ce(e)||M(e)){e.preventDefault();const i=this._calcNextTokenIndex(this._tokens.find(l=>l.focused),t,P(e)||M(e));this._scrollToToken(t[i])}}_handleHome(e,t){if(!e||!e.length)return-1;const o=t?e.length-1:0;e[o].focus()}_handleHomeShift(e){const t=this._tokens,o=e.target,n=t.indexOf(o),i=[...this._selectedTokens];t.filter((a,k)=>k<=n).forEach(a=>{a.selected=!0}),JSON.stringify(i)!==JSON.stringify(this._selectedTokens)&&this.fireEvent("selection-change",{tokens:this._selectedTokens}),t[0].focus()}_handleEndShift(e){const t=this._tokens,o=e.target,n=t.indexOf(o),i=[...this._selectedTokens];t.filter((a,k)=>k>=n).forEach(a=>{a.selected=!0}),JSON.stringify(i)!==JSON.stringify(this._selectedTokens)&&this.fireEvent("selection-change",{tokens:this._selectedTokens}),t[t.length-1].focus()}_calcNextTokenIndex(e,t,o){if(!t.length)return-1;const n=t.indexOf(e);let i=o?n+1:n-1;return i>=t.length&&(i=t.length-1),i<0&&(i=0),i}_handleArrowCtrl(e,t,o,n){const i=this._calcNextTokenIndex(t,o,n);e.preventDefault(),i!==-1&&(setTimeout(()=>{o[i].focus()},0),this._scrollToToken(o[i]))}_handleArrowShift(e,t,o){const n=t.indexOf(e),i=o?n+1:n-1,l=[...this._selectedTokens];if(i===-1||i===t.length)return;e.selected=!0,t[i].selected=!0,JSON.stringify(l)!==JSON.stringify(this._selectedTokens)&&this.fireEvent("selection-change",{tokens:this._selectedTokens}),t[i].focus(),this._scrollToToken(t[i])}_click(e){if(e.metaKey||e.ctrlKey){this.fireEvent("selection-change",{tokens:this._selectedTokens});return}const t=e.target;e.shiftKey||(this._previousToken=t);let o=t;if(this._previousToken?o=this._previousToken:this._previousToken=o,e.shiftKey){const n=this._tokens,i=n.indexOf(t),l=n.indexOf(o),a=Math.min(i,l),k=Math.max(i,l);i!==-1&&n.forEach((ne,C)=>{ne.selected=C>=a&&C<=k}),this.fireEvent("selection-change",{tokens:this._selectedTokens});return}this._handleTokenSelection(e)}_onfocusin(e){const t=e.target;this.open=!1,this._itemNav.setCurrentItem(t),this.expanded||(this.expanded=!0)}_onfocusout(e){const t=e.relatedTarget;this._tokens.forEach(o=>{o.forcedTabIndex="-1"}),this._itemNav._currentIndex=-1,this._skipTabIndex=!0,this.contains(t)||(this._tokens[0].forcedTabIndex="0",this._skipTabIndex=!1),!this._tokenDeleting&&!this._preventCollapse&&(this._preventCollapse=!1,this.expanded=!1)}_toggleTokenSelection(e){if(!e||!e.length)return;const t=e.every(o=>o.selected);e.forEach(o=>{o.selected=!t}),this.fireEvent("selection-change",{tokens:this._selectedTokens})}_handleTokenSelection(e,t=!0){const o=e.target;o.hasAttribute("ui5-token")&&((t?this._tokens:[]).forEach(i=>{i!==o&&(i.selected=!1)}),this.fireEvent("selection-change",{tokens:this._selectedTokens}))}_fillClipboard(e,t){const o=t.filter(i=>i.selected).map(i=>i.text).join(`\r
`),n=i=>{i.clipboardData&&i.clipboardData.setData("text/plain",o),i.preventDefault()};document.addEventListener(e,n),document.execCommand(e),document.removeEventListener(e,n)}scrollToStart(){this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(0,0)}scrollToEnd(){const e=this.contentDom&&(this.effectiveDir!=="rtl"?this.contentDom.scrollWidth:-this.contentDom.scrollWidth);this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(e,0,5,10)}_scrollToToken(e){if(!this.contentDom)return;const t=e.getBoundingClientRect(),o=this.contentDom.getBoundingClientRect();t.left<o.left?this._scrollEnablement.scrollTo(this.contentDom.scrollLeft-(o.left-t.left+5),0):t.right>o.right&&this._scrollEnablement.scrollTo(this.contentDom.scrollLeft+(t.right-o.right+5),0)}_getList(){return this.getPopover().querySelector("[ui5-list]")}get _tokens(){return this.getSlottedNodes("tokens")}get morePopoverOpener(){return Object.keys(this.opener).length===0?this:this.opener}get _nMoreText(){if(this._nMoreCount)return this._getVisibleTokens().length?v.i18nBundle.getText(Ne,this._nMoreCount):v.i18nBundle.getText(Ae,this._nMoreCount)}get showNMore(){return!this.expanded&&!!this.overflownTokens.length}get contentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer--content")}get moreLink(){return this.shadowRoot.querySelector(".ui5-tokenizer-more-text")}get tokenizerLabel(){return B(this)||v.i18nBundle.getText(F)}get tokenizerAriaDescription(){return B(this)?v.i18nBundle.getText(F):void 0}get _ariaDisabled(){return this.disabled||void 0}get _ariaReadonly(){return this.readonly||void 0}get morePopoverTitle(){return v.i18nBundle.getText(Re)}get overflownTokens(){if(!this.contentDom)return[];const e=this._tokens;return e.forEach(t=>{t.overflows=!1}),e.filter(t=>{const o=this.contentDom.getBoundingClientRect(),n=t.getBoundingClientRect(),i=Number(n.right.toFixed(2)),l=Number(o.right.toFixed(2)),a=Number(n.left.toFixed(2)),k=Number(o.left.toFixed(2));return t.overflows=!this.expanded&&(a<k||i>l),t.overflows})}get _isPhone(){return T()}get _selectedTokens(){return this._tokens.filter(e=>e.selected)}get _nMoreListMode(){return this.readonly||this.disabled?K.None:K.Delete}get styles(){return{popover:{"min-width":this.popoverMinWidth?`${this.popoverMinWidth}px`:`${this.getBoundingClientRect().width}px`}}}_focusLastToken(){const e=this._tokens;if(e.length===0)return;e[e.length-1].focus()}static async onDefine(){v.i18nBundle=await Y("@ui5/webcomponents")}getPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}};u([c({type:Boolean})],d.prototype,"readonly",void 0);u([c({type:Boolean})],d.prototype,"disabled",void 0);u([c({defaultValue:void 0})],d.prototype,"accessibleName",void 0);u([c({defaultValue:void 0})],d.prototype,"accessibleNameRef",void 0);u([c({type:Boolean})],d.prototype,"expanded",void 0);u([c({type:Boolean})],d.prototype,"open",void 0);u([c({validator:ie,defaultValue:""})],d.prototype,"opener",void 0);u([c({validator:w})],d.prototype,"popoverMinWidth",void 0);u([c({type:Boolean})],d.prototype,"preventInitialFocus",void 0);u([c({type:Boolean})],d.prototype,"preventPopoverOpen",void 0);u([c({type:Boolean})],d.prototype,"hidePopoverArrow",void 0);u([c({validator:w})],d.prototype,"_nMoreCount",void 0);u([c({validator:w})],d.prototype,"_tokensCount",void 0);u([Q({type:HTMLElement,default:!0,individualSlots:!0,invalidateOnChildChange:{properties:["_isVisible"],slots:!1}})],d.prototype,"tokens",void 0);d=v=u([G({tag:"ui5-tokenizer",languageAware:!0,renderer:X,template:Je,styles:[Ge,Ke,Ve,Xe],dependencies:[Ee,Be,ze,Ie,Se,oe]}),g("token-delete",{detail:{tokens:{type:Array}}}),g("selection-change",{detail:{tokens:{type:Array}}}),g("show-more-items-press"),g("before-more-popover-open")],d);const zt=s=>{const e={0:Pe,1:Me};return s in e?d.i18nBundle.getText(e[s]):d.i18nBundle.getText(Le,s)};d.define();const It=d;export{It as T,Ze as a,Et as b,zt as g};
