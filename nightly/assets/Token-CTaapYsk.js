import{a as v,j as h,F as U,p as g,d as x,s as a,m as W,e as $,S as H,k as T,q as G}from"./withWebComponent-LqdGbSZi.js";import{d as j}from"./slot-_4yKMUwC.js";import{l as k}from"./event-strict-DgQLNDEV.js";import{a as Q}from"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import{f as C}from"./ResizeHandler-pNyAs-as.js";import{f as X}from"./ItemNavigation-ChQSAlqN.js";import{A as D}from"./AccessibilityTextsHelper-CSnJP9TL.js";import{t as Y}from"./getActiveElement-kltGt_DR.js";import{e as ee}from"./PopupsCommon.css-2ZmbiFFx.js";import{v as te}from"./ScrollEnablement-DcOVVRoT.js";import{i as V}from"./i18n-oG4QvOAt.js";import{e as oe}from"./Popover-BAiQOiUL.js";import{Q as E,J as ne,A as ie,i as q,C as J,G as se,j as re,n as le,z as ae,H as de,R as ce,_ as B,S as I,U as he,w as ue,T as z,O as pe,u as S,h as fe,I as A,F as _e,W as O,M as ke,k as R,K as ve,c as L,D as ge,P as N,x as me,V as Te}from"./Keys-Can65e7H.js";import{d as be,a as M}from"./List-BK1I8Ka1.js";import{a as P}from"./Button-C6xPwCPp.js";import{L as xe}from"./ListItemStandard-Dcfw7Ttg.js";import{R as ye}from"./ResponsivePopover-vhq84JNR.js";import{a as we}from"./Title-COB9QmMt.js";import{a_ as Ce,a$ as De,b0 as Ee,b1 as K,b2 as Be,b3 as Ie,b4 as ze,b5 as Se,b6 as F,b7 as Ae}from"./i18n-defaults-CjsTKlnu.js";import{d as y}from"./parameters-bundle.css-BQD_Xb6z.js";import{R as Oe}from"./ResponsivePopoverCommon.css-DRkcOJTn.js";import{S as Re}from"./Suggestions.css-CdpR-q3h.js";import{I as Le}from"./Icon-CA9P0PMV.js";import{d as Ne}from"./decline-g3O-RcN7.js";function Me(){return v(ye,{"tokenizer-popover":"true",open:this.open,opener:this.morePopoverOpener,style:{"min-width":this.popoverMinWidth?`${this.popoverMinWidth}px`:`${this.getBoundingClientRect().width}px`},contentOnlyOnDesktop:!0,preventFocusRestore:!0,hideArrow:this.hidePopoverArrow,placement:"Bottom",horizontalAlign:"Start",onClose:this.handleAfterClose,onBeforeClose:this.handleBeforeClose,onBeforeOpen:this.handleBeforeOpen,children:[this._isPhone&&h("div",{slot:"header",class:"ui5-responsive-popover-header",children:h("div",{class:"row",children:h(we,{level:"H1",wrappingType:"None",class:"ui5-responsive-popover-header-text",children:this.morePopoverTitle})})}),h(be,{class:"ui5-tokenizer-list",selectionMode:this._nMoreListMode,separators:"None",onKeyDown:this._onPopoverListKeydown,onItemDelete:this.itemDelete,children:this._tokens.map(d=>h(xe,{"data-ui5-token-ref-id":d._id,wrappingType:"Normal",children:d.text},String(d._id)))}),this._isPhone&&v("div",{slot:"footer",class:"ui5-responsive-popover-footer",children:[h(P,{design:"Emphasized","data-ui5-tokenizer-dialog-ok-button":!0,onClick:this.handleDialogButtonPress,children:"OK"}),h(P,{design:"Transparent",onClick:this.handleDialogButtonPress,children:"Cancel"})]})]})}function Pe(){return v(U,{children:[v("div",{class:"ui5-tokenizer-root",children:[v("div",{class:"ui5-tokenizer--content",onClick:this._click,onMouseDown:this._onmousedown,onKeyDown:this._onkeydown,onFocusOut:this._onfocusout,onFocusIn:this._onfocusin,"onui5-delete":this._delete,"onui5-select":this.onTokenSelect,children:[h("div",{class:"ui5-tokenizer--list",role:"listbox","aria-label":this.tokenizerLabel,"aria-description":this.tokenizerAriaDescription,"aria-disabled":this._ariaDisabled,"aria-readonly":this._ariaReadonly,children:this.tokens.map(d=>h("slot",{name:d._individualSlot}))}),this.showEffectiveClearAll&&h("span",{role:"button",class:"ui5-tokenizer--clear-all",onClick:this.handleClearAll,children:this._clearAllText})]}),this.showNMore&&h("span",{role:"button","aria-haspopup":"dialog",class:"ui5-tokenizer-more-text",part:"n-more-text",onClick:this._handleNMoreClick,children:this._nMoreText})]}),Me.call(this)]})}g("@ui5/webcomponents-theming","sap_horizon",async()=>x);g("@ui5/webcomponents","sap_horizon",async()=>y);const Ke=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{display:inline-block;box-sizing:border-box;border:none;height:2.25rem}:host([multi-line]){height:auto}:host([multi-line]) .ui5-tokenizer--content{display:flex;align-content:baseline;flex-wrap:wrap;padding:.25rem;box-sizing:border-box;gap:var(--_ui5-v2-7-0_tokenizer_gap);overflow-y:auto;overflow-x:hidden}:host([multi-line])::slotted([ui5-token]){margin:0;white-space:nowrap;text-overflow:ellipsis;max-width:100%}:host([disabled]){opacity:40%;pointer-events:none}:host(:not([expanded])) .ui5-tokenizer-root{overflow:hidden}:host([_tokens-count="0"]) .ui5-tokenizer-root{padding:0}.ui5-tokenizer-root{height:100%;display:flex;align-items:center;box-sizing:border-box;touch-action:none;font-family:"72override",var(--sapFontFamily)}.ui5-tokenizer--token--wrapper{display:inline-flex;align-items:center;box-sizing:border-box;height:100%}:host([expanded]) .ui5-tokenizer--content{display:inline-flex;white-space:nowrap;overflow:hidden}.ui5-tokenizer--content{display:flex;flex-wrap:nowrap;align-items:center;overflow:hidden;padding-inline-start:var(--_ui5-v2-7-0_tokenizer_padding);height:100%;box-sizing:border-box}.ui5-tokenizer--list{display:contents}:host([_tokens-count="1"]) .ui5-tokenizer--content{padding-inline-end:4px;box-sizing:border-box;max-width:100%;flex:1}.ui5-tokenizer-more-text{display:inline-block;margin-inline-start:.25rem;cursor:pointer;white-space:nowrap;font-size:var(--sapFontSize);font-weight:400;color:var(--_ui5-v2-7-0_tokenizer_n_more_text_color)}.ui5-tokenizer-more-text:hover{text-decoration:underline}.ui5-tokenizer-more-text:active{text-decoration:none}.ui5-tokenizer--clear-all{color:var(--sapLinkColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);cursor:pointer;outline:none}.ui5-tokenizer--clear-all:hover{color:var(--sapLink_Hover_Color);text-decoration:var(--_ui5-v2-7-0_link_hover_text_decoration)}.ui5-tokenizer--clear-all:active{color:var(--sapLink_Active_Color);text-decoration:var(--_ui5-v2-7-0_link_active_text_decoration)}
`;g("@ui5/webcomponents-theming","sap_horizon",async()=>x);g("@ui5/webcomponents","sap_horizon",async()=>y);const Fe=`[ui5-responsive-popover]::part(header),[ui5-responsive-popover]::part(content){padding:0}[ui5-responsive-popover] .ui5-responsive-popover-header{min-height:2rem}[ui5-responsive-popover] .ui5-responsive-popover-header .row{justify-content:left}[ui5-responsive-popover] [ui5-button]{height:100%;min-width:4rem}[ui5-responsive-popover]{margin-top:var(--_ui5-v2-7-0_tokenizer-popover_offset);margin-inline-start:calc(-1 * var(--_ui5-v2-7-0_tokenizer_padding))}.ui5-responsive-popover-footer [ui5-button]:first-child{margin-right:1rem}
`;var c=function(d,e,t,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(d,e,t,n);else for(var r=d.length-1;r>=0;r--)(s=d[r])&&(o=(i<3?s(o):i>3?s(e,t,o):s(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},_,b;(function(d){d.cut="cut",d.copy="copy"})(b||(b={}));let l=_=class extends H{_handleResize(){this._nMoreCount=this.overflownTokens.length}constructor(){super(),this.readonly=!1,this.multiLine=!1,this.showClearAll=!1,this.disabled=!1,this.expanded=!1,this.open=!1,this.preventInitialFocus=!1,this.preventPopoverOpen=!1,this.hidePopoverArrow=!1,this._nMoreCount=0,this._tokensCount=0,this._tokenDeleting=!1,this._preventCollapse=!1,this._skipTabIndex=!1,this._previousToken=null,this._resizeHandler=this._handleResize.bind(this),this._itemNav=new X(this,{currentIndex:-1,getItemsCallback:this._getVisibleTokens.bind(this)}),this._deletedDialogItems=[]}handleClearAll(){this.fireDecoratorEvent("token-delete",{tokens:this._tokens})}onBeforeRendering(){this.multiLine||(this._scrollEnablement=new te(this));const e=this._tokens.length;this._tokensCount=e,this._tokens.forEach(t=>{t.singleToken=e===1||this.multiLine,t.readonly=this.readonly})}onEnterDOM(){C.register(this.contentDom,this._resizeHandler)}onExitDOM(){C.deregister(this.contentDom,this._resizeHandler)}_handleNMoreClick(){this.disabled||(this.expanded=!0,this.preventPopoverOpen||(this.open=!0,this.scrollToEnd()),this._tokens.forEach(e=>{e.forcedTabIndex="-1"}),this._skipTabIndex=!0,this.fireDecoratorEvent("show-more-items-press"))}_onmousedown(e){if(e.target.hasAttribute("ui5-token")){const t=e.target;this.expanded=!0,this.open&&(this._preventCollapse=!0),t.toBeDeleted||(this._itemNav.setCurrentItem(t),this._scrollToToken(t))}}onTokenSelect(e){const t=this._tokens,n=t[0],i=e.target;t.length===1&&n.isTruncatable&&(this.open=n.selected),this.multiLine&&i.isTruncatable&&(this.opener=i,this.open=i.selected)}_getVisibleTokens(){return this.disabled?[]:this._tokens.filter((e,t)=>t<this._tokens.length-this._nMoreCount)}onAfterRendering(){const t=this._tokens[0];this._nMoreCount=this.overflownTokens.length,t&&!this.disabled&&!this.preventInitialFocus&&!this._skipTabIndex&&(t.forcedTabIndex="0"),this._scrollEnablement&&(this._scrollEnablement.scrollContainer=this.contentDom),this.expanded&&(this._expandedScrollWidth=this.contentDom.scrollWidth),this._tokenDeleting=!1}_delete(e){const t=e.target;if(!e.detail){this._tokenClickDelete(e,t),this.open=!1;return}this.deleteToken(t,e.detail.backSpace)}_tokenClickDelete(e,t){const n=this._getVisibleTokens(),i=e.target,o=t?n.indexOf(t):n.indexOf(i),s=o===n.length-1?o-1:o+1,r=n[s];this._handleCurrentItemAfterDeletion(r),this._tokenDeleting=!0,this.fireDecoratorEvent("token-delete",{tokens:[t]})}_handleCurrentItemAfterDeletion(e){e&&!T()&&setTimeout(()=>{e.focus()},0)}deleteToken(e,t){const n=this._getVisibleTokens(),i=n.indexOf(e);let o=i===n.length-1?i-1:i+1;const s=n.filter(f=>!f.selected);t?o=i===0?i+1:i-1:o=i===n.length-1?i-1:i+1;let r=n[o];if(s.length>1)for(;r&&r.selected;)o=t?--o:++o,o<0&&(r=s[0]),o>s.length&&(r=s[s.length-1]);else r=s[0];this._handleCurrentItemAfterDeletion(r),this._tokenDeleting=!0,this._selectedTokens.length?this.fireDecoratorEvent("token-delete",{tokens:this._selectedTokens}):this.fireDecoratorEvent("token-delete",{tokens:[e]})}async itemDelete(e){const t=this.getTokenByRefId(e.detail.item.getAttribute("data-ui5-token-ref-id"));if(this._tokens.length===1)this.getPopover().addEventListener("ui5-close",()=>{this.fireDecoratorEvent("token-delete",{tokens:[t]})},{once:!0}),this.open=!1;else{T()?this._deletedDialogItems.push(t):this.fireDecoratorEvent("token-delete",{tokens:[t]});const i=e.detail.item,o=i.nextElementSibling,s=i.previousElementSibling,r=o||s;r&&(await G(),r.focus())}}handleBeforeClose(){const e=this._tokens;T()&&e.forEach(t=>{t.selected=!1}),!this._tokenDeleting&&!this._preventCollapse&&(this._preventCollapse=!1,this.expanded=!1)}handleBeforeOpen(){const e=this._getList(),t=e.querySelectorAll("[ui5-li]")[0];e._itemNavigation.setCurrentItem(t),this.fireDecoratorEvent("before-more-popover-open")}handleAfterClose(){this.open=!1,this._preventCollapse=!1,this._focusedElementBeforeOpen=null}handleDialogButtonPress(e){!!e.target.hasAttribute("data-ui5-tokenizer-dialog-ok-button")&&this._deletedDialogItems.length&&this.fireDecoratorEvent("token-delete",{tokens:this._deletedDialogItems}),this.open=!1}_onkeydown(e){const t=!!(e.metaKey||e.ctrlKey);if(t&&["c","x"].includes(e.key.toLowerCase())||E(e)||ne(e)){e.preventDefault();const n=e.key.toLowerCase()==="x"||E(e),i=this._tokens.filter(s=>s.selected),o=i.find(s=>s.focused);if(n){const s=this._fillClipboard(b.cut,i);return o&&this.deleteToken(o),s}return this._fillClipboard(b.copy,i)}if(t&&e.key.toLowerCase()==="i"&&this._tokens.length>0&&(e.preventDefault(),this._preventCollapse=!0,this._focusedElementBeforeOpen=ee(),this.open=!0),ie(e)&&e.preventDefault(),q(e)||J(e))return e.preventDefault(),this._handleTokenSelection(e,!1);(se(e)||re(e))&&this._handleHomeShift(e),(le(e)||ae(e))&&this._handleEndShift(e),this._handleItemNavigation(e,this._tokens)}_onPopoverListKeydown(e){if((!!(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="i"||de(e))&&(e.preventDefault(),this.open=!1,this._preventCollapse=!0,this._focusedElementBeforeOpen&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen||this._focusLastToken()),e.key.toLowerCase()==="f7"){e.preventDefault();const n=e.target,i=Y();(i==null?void 0:i.part.value)==="native-li"?n.shadowRoot.querySelector("[part=delete-button]").focus():n.focus()}}_handleItemNavigation(e,t){const n=!!(e.metaKey||e.ctrlKey),i=e.target;if(ce(e)||B(e)||I(e)||he(e))return this._handleArrowCtrl(e,i,t,B(e)||I(e));if(ue(e)||z(e)||pe(e)||S(e)||fe(e)||A(e))return e.preventDefault(),this._handleArrowShift(i,t,z(e)||A(e)||S(e));if(_e(e)||O(e)||ke(e)||R(e))return e.preventDefault(),this._handleHome(t,O(e)||R(e));if(n&&e.key.toLowerCase()==="a")return e.preventDefault(),this._toggleTokenSelection(t);if(ve(e)||L(e)||ge(e)||N(e)){e.preventDefault();const o=this._calcNextTokenIndex(this._tokens.find(s=>s.focused),t,L(e)||N(e));this._scrollToToken(t[o])}}_handleHome(e,t){if(!e||!e.length)return-1;const n=t?e.length-1:0;e[n].focus()}_handleHomeShift(e){const t=this._tokens,n=e.target,i=t.indexOf(n),o=[...this._selectedTokens];t.filter((r,f)=>f<=i).forEach(r=>{r.selected=!0}),JSON.stringify(o)!==JSON.stringify(this._selectedTokens)&&this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens}),t[0].focus()}_handleEndShift(e){const t=this._tokens,n=e.target,i=t.indexOf(n),o=[...this._selectedTokens];t.filter((r,f)=>f>=i).forEach(r=>{r.selected=!0}),JSON.stringify(o)!==JSON.stringify(this._selectedTokens)&&this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens}),t[t.length-1].focus()}_calcNextTokenIndex(e,t,n){if(!t.length)return-1;const i=t.indexOf(e);let o=n?i+1:i-1;return o>=t.length&&(o=t.length-1),o<0&&(o=0),o}_handleArrowCtrl(e,t,n,i){const o=this._calcNextTokenIndex(t,n,i);e.preventDefault(),o!==-1&&(setTimeout(()=>{n[o].focus()},0),this._scrollToToken(n[o]))}_handleArrowShift(e,t,n){const i=t.indexOf(e),o=n?i+1:i-1,s=[...this._selectedTokens];if(o===-1||o===t.length)return;e.selected=!0,t[o].selected=!0,JSON.stringify(s)!==JSON.stringify(this._selectedTokens)&&this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens}),t[o].focus(),this._scrollToToken(t[o])}_click(e){if(e.metaKey||e.ctrlKey){this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens});return}const t=e.target;e.shiftKey||(this._previousToken=t);let n=t;if(this._previousToken?n=this._previousToken:this._previousToken=n,e.shiftKey){const i=this._tokens,o=i.indexOf(t),s=i.indexOf(n),r=Math.min(o,s),f=Math.max(o,s);o!==-1&&i.forEach((Z,w)=>{Z.selected=w>=r&&w<=f}),this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens});return}this._handleTokenSelection(e)}_onfocusin(e){const t=e.target;this.open=!1,this._itemNav.setCurrentItem(t),this.expanded||(this.expanded=!0)}_onfocusout(e){const t=e.relatedTarget;this._tokens.forEach(n=>{n.forcedTabIndex="-1"}),this._itemNav._currentIndex=-1,this._skipTabIndex=!0,this.contains(t)||(this._tokens[0].forcedTabIndex="0",this._skipTabIndex=!1),!this._tokenDeleting&&!this._preventCollapse&&(this._preventCollapse=!1,this.expanded=!1)}_toggleTokenSelection(e){if(!e||!e.length)return;const t=e.every(n=>n.selected);e.forEach(n=>{n.selected=!t}),this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens})}_handleTokenSelection(e,t=!0){const n=e.target;n.hasAttribute("ui5-token")&&((t?this._tokens:[]).forEach(o=>{o!==n&&(o.selected=!1)}),this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens}))}get hasTokens(){return this._tokens.length>0}get showEffectiveClearAll(){return this.showClearAll&&this.hasTokens&&this.multiLine&&!this.readonly}_fillClipboard(e,t){const n=t.filter(o=>o.selected).map(o=>o.text).join(`\r
`),i=o=>{o.clipboardData&&o.clipboardData.setData("text/plain",n),o.preventDefault()};document.addEventListener(e,i),document.execCommand(e),document.removeEventListener(e,i)}scrollToStart(){var e,t;(e=this._scrollEnablement)!=null&&e.scrollContainer&&((t=this._scrollEnablement)==null||t.scrollTo(0,0))}scrollToEnd(){var t,n;const e=this.contentDom&&(this.effectiveDir!=="rtl"?this.contentDom.scrollWidth:-this.contentDom.scrollWidth);(t=this._scrollEnablement)!=null&&t.scrollContainer&&((n=this._scrollEnablement)==null||n.scrollTo(e,0,5,10))}_scrollToToken(e){var i,o;if(!this.contentDom)return;const t=e.getBoundingClientRect(),n=this.contentDom.getBoundingClientRect();t.left<n.left?(i=this._scrollEnablement)==null||i.scrollTo(this.contentDom.scrollLeft-(n.left-t.left+5),0):t.right>n.right&&((o=this._scrollEnablement)==null||o.scrollTo(this.contentDom.scrollLeft+(t.right-n.right+5),0))}_getList(){return this.getPopover().querySelector("[ui5-list]")}get _tokens(){return this.getSlottedNodes("tokens")}get morePopoverOpener(){return this.opener?this.opener:this}get _nMoreText(){if(this._nMoreCount)return this._getVisibleTokens().length?_.i18nBundle.getText(Ce,this._nMoreCount):_.i18nBundle.getText(De,this._nMoreCount)}get _clearAllText(){return _.i18nBundle.getText(Ee)}get showNMore(){return!this.expanded&&!!this.overflownTokens.length}get contentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer--content")}get moreLink(){return this.shadowRoot.querySelector(".ui5-tokenizer-more-text")}get tokenizerLabel(){return D(this)||_.i18nBundle.getText(K)}get tokenizerAriaDescription(){return D(this)?_.i18nBundle.getText(K):void 0}get _ariaDisabled(){return this.disabled||void 0}get _ariaReadonly(){return this.readonly||void 0}get morePopoverTitle(){return _.i18nBundle.getText(Be)}get overflownTokens(){if(!this.contentDom)return[];const e=this._tokens;return e.forEach(t=>{t.overflows=!1}),e.filter(t=>{const n=this.contentDom.getBoundingClientRect(),i=t.getBoundingClientRect(),o=Number(i.right.toFixed(2)),s=Number(n.right.toFixed(2)),r=Number(i.left.toFixed(2)),f=Number(n.left.toFixed(2));return t.overflows=!this.expanded&&(r<f||o>s),t.overflows})}get _isPhone(){return T()}get _selectedTokens(){return this._tokens.filter(e=>e.selected)}get _nMoreListMode(){return this.readonly||this.disabled?M.None:M.Delete}get styles(){return{popover:{"min-width":this.popoverMinWidth?`${this.popoverMinWidth}px`:`${this.getBoundingClientRect().width}px`}}}_focusLastToken(){const e=this._tokens;if(e.length===0)return;e[e.length-1].focus()}getPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}getTokenByRefId(e){return this._tokens.find(t=>t._id===e)}};c([a({type:Boolean})],l.prototype,"readonly",void 0);c([a({type:Boolean})],l.prototype,"multiLine",void 0);c([a({type:Boolean})],l.prototype,"showClearAll",void 0);c([a({type:Boolean})],l.prototype,"disabled",void 0);c([a()],l.prototype,"accessibleName",void 0);c([a()],l.prototype,"accessibleNameRef",void 0);c([a({type:Boolean})],l.prototype,"expanded",void 0);c([a({type:Boolean})],l.prototype,"open",void 0);c([a({converter:oe})],l.prototype,"opener",void 0);c([a({type:Number})],l.prototype,"popoverMinWidth",void 0);c([a({type:Boolean})],l.prototype,"preventInitialFocus",void 0);c([a({type:Boolean})],l.prototype,"preventPopoverOpen",void 0);c([a({type:Boolean})],l.prototype,"hidePopoverArrow",void 0);c([a({type:Number})],l.prototype,"_nMoreCount",void 0);c([a({type:Number})],l.prototype,"_tokensCount",void 0);c([j({type:HTMLElement,default:!0,individualSlots:!0})],l.prototype,"tokens",void 0);c([V("@ui5/webcomponents")],l,"i18nBundle",void 0);l=_=c([W({tag:"ui5-tokenizer",languageAware:!0,renderer:$,template:Pe,styles:[Ke,Oe,Re,Fe,Q()]}),k("token-delete",{bubbles:!0}),k("selection-change",{bubbles:!0}),k("show-more-items-press",{bubbles:!0}),k("before-more-popover-open",{bubbles:!0})],l);const ft=d=>{const e={0:ze,1:Se};return d in e?l.i18nBundle.getText(e[d]):l.i18nBundle.getText(Ie,d)};l.define();const _t=l;function We(){return v("div",{role:"option",tabindex:this.forcedTabIndex?parseInt(this.forcedTabIndex):-1,class:"ui5-token--wrapper","aria-description":this.ariaDescription,"aria-selected":this.selected,onClick:this._handleSelect,onFocusIn:this._focusin,onFocusOut:this._focusout,onKeyDown:this._keydown,children:[h("span",{class:"ui5-token--text",children:this.text}),!this.readonly&&h("div",{class:"ui5-token--icon",children:this.closeIcon.length>0?h("slot",{name:"closeIcon",onClick:this._delete}):h(Le,{name:Ne,mode:"Decorative",accessibleName:this.tokenDeletableText,showTooltip:!0,onClick:this._delete})})]})}g("@ui5/webcomponents-theming","sap_horizon",async()=>x);g("@ui5/webcomponents","sap_horizon",async()=>y);const $e=`:host{display:inline-block;background:var(--_ui5-v2-7-0_token_background);border:var(--sapButton_BorderWidth) solid var(--sapButton_TokenBorderColor);border-radius:var(--_ui5-v2-7-0_token_border_radius);color:var(--_ui5-v2-7-0_token_text_color);height:var(--_ui5-v2-7-0_token_height);box-sizing:border-box}:host(:not([single-token])){margin-inline-end:var(--_ui5-v2-7-0_token_right_margin)}:host([overflows]){display:none}:host(:not([readonly]):hover){background:var(--sapButton_Hover_Background)}:host([selected]){background:var(--sapButton_Selected_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([selected]) .ui5-token--wrapper{border-bottom:var(--_ui5-v2-7-0_token_selected_internal_border_bottom);border-bottom-left-radius:var(--_ui5-v2-7-0_token_selected_internal_border_bottom_radius);border-bottom-right-radius:var(--_ui5-v2-7-0_token_selected_internal_border_bottom_radius)}:host([selected]:hover){background:var(--sapButton_Selected_Hover_Background)}:host([readonly]:not([selected])){background:var(--_ui5-v2-7-0_token_readonly_background);border-color:var(--sapField_ReadOnly_BorderColor);color:var(--_ui5-v2-7-0_token_readonly_color)}:host([readonly]) .ui5-token--wrapper{padding:var(--_ui5-v2-7-0_token_readonly_padding)}:host([selected]) .ui5-token--wrapper:focus{outline:var(--_ui5-v2-7-0_token_selected_focus_outline)}:host([selected]) .ui5-token--text,:host([selected]) .ui5-token--icon{top:var(--_ui5-v2-7-0_token_text_icon_top);position:relative}:host([focused][selected]:not(:hover)){background:var(--sapButton_Selected_Background);color:var(--sapButton_Selected_TextColor);border:var(--_ui5-v2-7-0_token_focused_selected_border)}.ui5-token--wrapper{display:flex;align-items:center;height:100%;width:100%;cursor:pointer;padding-inline-start:var(--_ui5-v2-7-0_token_left_padding);box-sizing:border-box;font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);user-select:none}.ui5-token--wrapper{position:relative}:host([selected]) .ui5-token--wrapper{font-family:var(--_ui5-v2-7-0_token_selected_text_font_family)}.ui5-token--wrapper:focus{outline-offset:var(--_ui5-v2-7-0_token_outline_offset);outline:var(--_ui5-v2-7-0_token_focus_outline)}.ui5-token--wrapper:focus:after{content:var(--ui5-v2-7-0_token_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-7-0_token_focus_outline_border_radius);top:var(--_ui5-v2-7-0_token_focus_offset);bottom:var(--_ui5-v2-7-0_token_focus_offset);left:var(--_ui5-v2-7-0_token_focus_offset);right:var(--_ui5-v2-7-0_token_focus_offset)}:host([focused][selected]) .ui5-token--wrapper:focus:after{bottom:var(--_ui5-v2-7-0_token_selected_focused_offset_bottom)}.ui5-token--text{white-space:nowrap}.ui5-token--icon{display:flex}:host([selected]) .ui5-token--icon>[ui5-icon],:host([selected]) ::slotted([ui5-icon]){color:var(--sapButton_Selected_TextColor)}.ui5-token--icon>[ui5-icon],::slotted([ui5-icon]){color:inherit;cursor:pointer;width:var(--_ui5-v2-7-0_token_icon_size);height:var(--_ui5-v2-7-0_token_icon_size);padding:var(--_ui5-v2-7-0_token_icon_padding);color:var(--sapContent_IconColor)}:host([single-token]){max-width:100%}:host([single-token]) .ui5-token--wrapper{max-width:100%}:host([single-token]) .ui5-token--text{overflow:hidden;text-overflow:ellipsis;max-width:100%}
`;var p=function(d,e,t,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(d,e,t,n);else for(var r=d.length-1;r>=0;r--)(s=d[r])&&(o=(i<3?s(o):i>3?s(e,t,o):s(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},m;let u=m=class extends H{constructor(){super(...arguments),this.selected=!1,this.readonly=!1,this.overflows=!1,this.singleToken=!1,this.focused=!1,this.toBeDeleted=!1,this.forcedTabIndex="-1"}_handleSelect(){this.toBeDeleted||(this.selected=!this.selected,this.fireDecoratorEvent("select"))}_focusin(){this.focused=!0}_focusout(){this.focused=!this.focused}_delete(){this.toBeDeleted=!0,this.fireDecoratorEvent("delete")}_keydown(e){const t=me(e),n=Te(e);!this.readonly&&(t||n)&&(e.preventDefault(),this.fireDecoratorEvent("delete",{backSpace:t,delete:n})),(q(e)||J(e))&&(e.preventDefault(),this._handleSelect())}onBeforeRendering(){this.toBeDeleted=!1}get tokenDeletableText(){return m.i18nBundle.getText(F)}get textDom(){var e;return(e=this.getDomRef())==null?void 0:e.querySelector(".ui5-token--text")}get isTruncatable(){return this.textDom?Math.ceil(this.textDom.getBoundingClientRect().width)<Math.ceil(this.textDom.scrollWidth):!1}get ariaDescription(){let e=m.i18nBundle.getText(Ae);return this.readonly||(e+=` ${m.i18nBundle.getText(F)}`),e}};p([a()],u.prototype,"text",void 0);p([a({type:Boolean})],u.prototype,"selected",void 0);p([a({type:Boolean})],u.prototype,"readonly",void 0);p([a({type:Boolean})],u.prototype,"overflows",void 0);p([a({type:Boolean})],u.prototype,"singleToken",void 0);p([a({type:Boolean})],u.prototype,"focused",void 0);p([a({type:Boolean})],u.prototype,"toBeDeleted",void 0);p([a({noAttribute:!0})],u.prototype,"forcedTabIndex",void 0);p([j()],u.prototype,"closeIcon",void 0);p([V("@ui5/webcomponents")],u,"i18nBundle",void 0);u=m=p([W({tag:"ui5-token",languageAware:!0,renderer:$,template:We,styles:$e}),k("select",{bubbles:!0}),k("delete",{bubbles:!0})],u);u.define();const vt=u;export{_t as T,vt as a,ft as g};
