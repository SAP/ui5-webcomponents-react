import{_ as V}from"./iframe-bb104014.js";import{b as r,l as n,d as c,o as _,s as P,a as R,p as v,c as H,f as E,w as O}from"./withWebComponent-40b4b429.js";import{s as L}from"./slot-76e48863.js";import{c as A,a as U,e as g}from"./Icon-4b8e6c3e.js";import{r as N,f as W,b as F,L as B,T as j,B as K,c as G,g as X}from"./Icons-1d0bcfc0.js";import"./utils-64df43e3.js";import{av as Y}from"./i18n-defaults-d5195a49.js";import{a as m,I as J}from"./Input-ac62fefa.js";import{s as b}from"./style-map-26bcc635.js";import{r as C,o as Q}from"./UI5Element-fe43d284.js";import Z from"./Token-c6a017b3.js";import{T as ee,C as w}from"./Tokenizer-069dd295.js";import{a as te}from"./CustomElementsScopeUtils-7e643eaa.js";import{V as ne}from"./ValueState-ab6838cc.js";function ie(i,e,t){return t?r`<div class="ui5-input-root ui5-input-focusable-element" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}"><div class="ui5-input-content"><span id="${n(this._id)}-hiddenText-nMore" class="ui5-hidden-text">${n(this._tokensCountText)}</span><${c("ui5-tokenizer",e,t)} class="ui5-multi-input-tokenizer" .morePopoverOpener=${n(this.morePopoverOpener)} .popoverMinWidth=${n(this._inputWidth)} .valueState=${n(this.valueState)} ?expanded="${this.expandedTokenizer}" show-more @keydown="${this._onTokenizerKeydown}" @ui5-show-more-items-press=${n(this.showMorePress)} @ui5-token-delete=${n(this.tokenDelete)} @focusout="${this._tokenizerFocusOut}"><slot name="tokens"></slot><div slot="valueStateMessage">${this.shouldDisplayDefaultValueStateMessage?y.call(this,i,e,t):k.call(this,i,e,t)}</div></${c("ui5-tokenizer",e,t)}><input id="${n(this._id)}-inner" class="ui5-input-inner" style="${b(this.styles.innerInput)}" type="${n(this.inputType)}" inner-input ?inner-input-with-icon="${this.icon.length}" ?disabled="${this.disabled}" ?readonly="${this._readonly}" .value="${n(this._innerValue)}" placeholder="${n(this._placeholder)}" maxlength="${n(this.maxlength)}" role="${n(this.accInfo.input.role)}" aria-controls="${n(this.accInfo.input.ariaControls)}" aria-invalid="${n(this.accInfo.input.ariaInvalid)}" aria-haspopup="${n(this.accInfo.input.ariaHasPopup)}" aria-describedby="${n(this.accInfo.input.ariaDescribedBy)}" aria-roledescription="${n(this.accInfo.input.ariaRoledescription)}" aria-autocomplete="${n(this.accInfo.input.ariaAutoComplete)}" aria-expanded="${n(this.accInfo.input.ariaExpanded)}" aria-label="${n(this.accInfo.input.ariaLabel)}" aria-required="${n(this.required)}" @input="${this._handleInput}" @change="${this._handleChange}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click=${this._click} @focusin=${this.innerFocusIn} data-sap-focus-ref step="${n(this.nativeInputAttributes.step)}" min="${n(this.nativeInputAttributes.min)}" max="${n(this.nativeInputAttributes.max)}" />${this.effectiveShowClearIcon?I.call(this,i,e,t):void 0}${this.icon.length?$.call(this,i,e,t):void 0}<div class="ui5-input-value-state-icon">${_(this._valueStateInputIcon)}</div>${this.showValueHelpIcon?T.call(this,i,e,t):void 0}${this.showSuggestions?S.call(this,i,e,t):void 0}${this.accInfo.input.ariaDescription?D.call(this,i,e,t):void 0}${this.hasValueState?M.call(this,i,e,t):void 0}</div><slot name="formSupport"></slot></div> `:r`<div class="ui5-input-root ui5-input-focusable-element" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}"><div class="ui5-input-content"><span id="${n(this._id)}-hiddenText-nMore" class="ui5-hidden-text">${n(this._tokensCountText)}</span><ui5-tokenizer class="ui5-multi-input-tokenizer" .morePopoverOpener=${n(this.morePopoverOpener)} .popoverMinWidth=${n(this._inputWidth)} .valueState=${n(this.valueState)} ?expanded="${this.expandedTokenizer}" show-more @keydown="${this._onTokenizerKeydown}" @ui5-show-more-items-press=${n(this.showMorePress)} @ui5-token-delete=${n(this.tokenDelete)} @focusout="${this._tokenizerFocusOut}"><slot name="tokens"></slot><div slot="valueStateMessage">${this.shouldDisplayDefaultValueStateMessage?y.call(this,i,e,t):k.call(this,i,e,t)}</div></ui5-tokenizer><input id="${n(this._id)}-inner" class="ui5-input-inner" style="${b(this.styles.innerInput)}" type="${n(this.inputType)}" inner-input ?inner-input-with-icon="${this.icon.length}" ?disabled="${this.disabled}" ?readonly="${this._readonly}" .value="${n(this._innerValue)}" placeholder="${n(this._placeholder)}" maxlength="${n(this.maxlength)}" role="${n(this.accInfo.input.role)}" aria-controls="${n(this.accInfo.input.ariaControls)}" aria-invalid="${n(this.accInfo.input.ariaInvalid)}" aria-haspopup="${n(this.accInfo.input.ariaHasPopup)}" aria-describedby="${n(this.accInfo.input.ariaDescribedBy)}" aria-roledescription="${n(this.accInfo.input.ariaRoledescription)}" aria-autocomplete="${n(this.accInfo.input.ariaAutoComplete)}" aria-expanded="${n(this.accInfo.input.ariaExpanded)}" aria-label="${n(this.accInfo.input.ariaLabel)}" aria-required="${n(this.required)}" @input="${this._handleInput}" @change="${this._handleChange}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click=${this._click} @focusin=${this.innerFocusIn} data-sap-focus-ref step="${n(this.nativeInputAttributes.step)}" min="${n(this.nativeInputAttributes.min)}" max="${n(this.nativeInputAttributes.max)}" />${this.effectiveShowClearIcon?I.call(this,i,e,t):void 0}${this.icon.length?$.call(this,i,e,t):void 0}<div class="ui5-input-value-state-icon">${_(this._valueStateInputIcon)}</div>${this.showValueHelpIcon?T.call(this,i,e,t):void 0}${this.showSuggestions?S.call(this,i,e,t):void 0}${this.accInfo.input.ariaDescription?D.call(this,i,e,t):void 0}${this.hasValueState?M.call(this,i,e,t):void 0}</div><slot name="formSupport"></slot></div> `}function y(i,e,t){return r`${n(this.valueStateText)}`}function k(i,e,t){return r`${A(this.valueStateMessageText,(o,s)=>o._id||s,(o,s)=>oe.call(this,i,e,t,o,s))}`}function oe(i,e,t,o,s){return r`${n(o)}`}function I(i,e,t){return t?r`<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper" input-icon tabindex="-1"><${c("ui5-icon",e,t)} tabindex="-1" class="ui5-input-clear-icon" name="decline"></${c("ui5-icon",e,t)}></div>`:r`<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper" input-icon tabindex="-1"><ui5-icon tabindex="-1" class="ui5-input-clear-icon" name="decline"></ui5-icon></div>`}function $(i,e,t){return r`<div class="ui5-input-icon-root"><slot name="icon"></slot></div>`}function T(i,e,t){return t?r`<${c("ui5-icon",e,t)} @click=${this.valueHelpPress} @mousedown=${this.valueHelpMouseDown} @mouseup=${this.valueHelpMouseUp} input-icon name="value-help"></${c("ui5-icon",e,t)}>`:r`<ui5-icon @click=${this.valueHelpPress} @mousedown=${this.valueHelpMouseDown} @mouseup=${this.valueHelpMouseUp} input-icon name="value-help"></ui5-icon>`}function S(i,e,t){return r`<span id="${n(this._id)}-suggestionsText" class="ui5-hidden-text">${n(this.suggestionsText)}</span><span id="${n(this._id)}-selectionText" class="ui5-hidden-text" aria-live="polite" role="status"></span><span id="${n(this._id)}-suggestionsCount" class="ui5-hidden-text" aria-live="polite">${n(this.availableSuggestionsCount)}</span>`}function D(i,e,t){return r`<span id="${n(this._id)}-descr" class="ui5-hidden-text">${n(this.accInfo.input.ariaDescription)}</span>`}function M(i,e,t){return r`<span id="${n(this._id)}-valueStateDesc" class="ui5-hidden-text">${n(this.ariaValueStateHiddenText)}</span>`}C("@ui5/webcomponents-theming","sap_fiori_3",async()=>P);C("@ui5/webcomponents","sap_fiori_3",async()=>R);const se={packageName:"@ui5/webcomponents",fileName:"themes/MultiInput.css",content:"[input-icon]{border-inline-start:var(--_ui5-v1-17-2_input_icon_border);border-radius:var(--_ui5-v1-17-2_input_icon_border_radius);color:var(--_ui5-v1-17-2_input_icon_color);cursor:pointer;min-height:1rem;min-width:1rem;outline:none;padding:var(--_ui5-v1-17-2_input_icon_padding)}[input-icon][pressed]{background:var(--_ui5-v1-17-2_input_icon_pressed_bg);border-inline-start:var(--_ui5-v1-17-2_select_hover_icon_left_border);box-shadow:var(--_ui5-v1-17-2_input_icon_box_shadow);color:var(--_ui5-v1-17-2_input_icon_pressed_color)}[input-icon]:active{background-color:var(--sapButton_Active_Background);border-inline-start:var(--_ui5-v1-17-2_select_hover_icon_left_border);box-shadow:var(--_ui5-v1-17-2_input_icon_box_shadow);color:var(--_ui5-v1-17-2_input_icon_pressed_color)}[input-icon]:not([pressed]):not(:active):hover{background:var(--_ui5-v1-17-2_input_icon_hover_bg);box-shadow:var(--_ui5-v1-17-2_input_icon_box_shadow)}[input-icon]:hover{border-inline-start:var(--_ui5-v1-17-2_select_hover_icon_left_border);box-shadow:var(--_ui5-v1-17-2_input_icon_box_shadow)}:host{min-width:calc(var(--_ui5-v1-17-2_input_min_width) + var(--_ui5-v1-17-2-input-icons-count)*var(--_ui5-v1-17-2_input_icon_width))}:host([tokenizer-available]){min-width:calc(var(--_ui5-v1-17-2_input_min_width) + var(--_ui5-v1-17-2-input-icons-count)*var(--_ui5-v1-17-2_input_icon_width) + var(--_ui5-v1-17-2_input_tokenizer_min_width))}.ui5-multi-input-tokenizer{border:none;height:100%;max-width:calc(100% - 3rem - var(--_ui5-v1-17-2-input-icons-count)*var(--_ui5-v1-17-2_input_icon_min_width));min-width:var(--_ui5-v1-17-2_input_tokenizer_min_width);width:auto}:host([readonly]) .ui5-multi-input-tokenizer::part(n-more-text){color:var(--sapLinkColor)}.ui5-multi-input-tokenizer::part(n-more-text){padding-inline-end:var(--_ui5-v1-17-2_input_inner_space_to_n_more_text)}[inner-input][inner-input-with-icon]{padding:var(--_ui5-v1-17-2_input_inner_padding_with_icon)}:host([tokenizer-available]) [inner-input]{padding-inline-start:var(--_ui5-v1-17-2_input_inner_space_to_tokenizer)}:host(:not([tokenizer-available])) .ui5-multi-input-tokenizer{--_ui5-v1-17-2_input_tokenizer_min_width:0px;width:var(--_ui5-v1-17-2_input_tokenizer_min_width)}"},ae="value-help",q="M470 41q10 9 10 23v192q0 12-10 22t-22 10H256q-14 0-23-10-9-9-9-22V64q0-14 9-23t23-9h192q13 0 22 9zm-22 23H256v192h192V64zm-96 256h32v128q0 14-9 23t-23 9H64q-12 0-23-9-9-9-9-23V160q0-14 9-23t23-9h128v32H64v288h288V320z",re=!1,le="SAP-icons-v4",ue="@ui5/webcomponents-icons";N(ae,{pathData:q,ltr:re,collection:le,packageName:ue});const pe="value-help",x="M422 32q24 0 41 17t17 41v204q0 24-17 41t-41 17h-12q-11 0-18.5-7.5T384 326t7.5-18 18.5-7h12q7 0 7-7V90q0-7-7-7H218q-7 0-7 7v12q0 11-7 18.5t-18 7.5-18.5-7.5T160 102V90q0-24 17-41t41-17h204zM294 160q24 0 41 17t17 41v204q0 24-17 41t-41 17H90q-24 0-41-17t-17-41V218q0-24 17-41t41-17h204zm7 58q0-7-7-7H90q-7 0-7 7v204q0 7 7 7h204q7 0 7-7V218z",ce=!1,he="SAP-icons-v5",de="@ui5/webcomponents-icons";N(pe,{pathData:x,ltr:ce,collection:he,packageName:de});Q();var h=globalThis&&globalThis.__decorate||function(i,e,t,o){var s=arguments.length,a=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,o);else for(var p=i.length-1;p>=0;p--)(l=i[p])&&(a=(s<3?l(a):s>3?l(e,t,a):l(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a},f;let u=f=class extends m{constructor(){super(),this._skipOpenSuggestions=!1,this._valueHelpIconPressed=!1}valueHelpPress(){this.closePopover(),this.fireEvent("value-help-trigger")}showMorePress(){this.expandedTokenizer=!1,this.focus()}tokenDelete(e){const t=e.detail.ref,o=this.tokens.filter(a=>a.selected),s=this.tokens.length-1===0||this.tokens.length===o.length;if(!this._readonly){if(t){this.fireEvent("token-delete",{token:t}),s&&this.focus();return}o.indexOf(t)===-1&&o.push(t),o.forEach(a=>{this.fireEvent("token-delete",{token:a})})}}valueHelpMouseDown(e){const t=e.target;this.closePopover(),this.tokenizer.closeMorePopover(),this._valueHelpIconPressed=!0,t.focus()}_tokenizerFocusOut(e){const t=e.relatedTarget===this.tokenizer.staticAreaItem;!this.contains(e.relatedTarget)&&!t&&(this.tokenizer._tokens.forEach(o=>{o.selected=!1}),this.tokenizer.scrollToStart()),e.relatedTarget===this.nativeInput&&this.tokenizer.closeMorePopover()}valueHelpMouseUp(){setTimeout(()=>{this._valueHelpIconPressed=!1},0)}innerFocusIn(){this.expandedTokenizer=!0,this.focused=!0,this.tokenizer.scrollToEnd(),this.tokenizer._getTokens().forEach(e=>{e.selected=!1})}_onkeydown(e){super._onkeydown(e);const t=e.target,o=W(e)&&t.selectionStart===0,s=e.metaKey||e.ctrlKey,a=this.tokens;if(o)return this._skipOpenSuggestions=!0,this._focusFirstToken(e);if(F(e)||B(e))return this._skipOpenSuggestions=!0,this._handleLeft(e);this._skipOpenSuggestions=!1,j(e)&&this.valueHelpPress(),s&&e.key.toLowerCase()==="i"&&a.length>0&&(e.preventDefault(),this.tokenizer.openMorePopover())}_onTokenizerKeydown(e){const t=K(e),o=!!(e.metaKey||e.ctrlKey),s=this.tokens;if(G(e)||X(e)||t){e.preventDefault();const a=this.tokens.length-1;if(e.target===this.tokens[a]&&this.tokens[a]===document.activeElement)setTimeout(()=>{this.focus()},0);else if(t)return e.preventDefault(),this.tokenizer._handleArrowCtrl(e,e.target,this.tokens,!0)}if(o&&["c","x"].includes(e.key.toLowerCase())){e.preventDefault();const a=e.key.toLowerCase()==="x",l=s.filter(p=>p.selected);if(a){const p=this.tokenizer._fillClipboard(w.cut,l);return l.forEach(z=>{this.fireEvent("token-delete",{token:z})}),this.focus(),p}return this.tokenizer._fillClipboard(w.copy,l)}o&&e.key.toLowerCase()==="i"&&s.length>0&&(e.preventDefault(),this.tokenizer.openMorePopover())}_handleLeft(e){const t=this.getDomRef().querySelector("input").selectionStart,o=this.tokens,s=o.length&&o[o.length-1];t===0&&s&&(e.preventDefault(),s.focus(),this.tokenizer._itemNav.setCurrentItem(s))}_focusFirstToken(e){const t=this.tokens,o=t.length&&t[0];o&&(e.preventDefault(),o.focus(),this.tokenizer._itemNav.setCurrentItem(o))}_onfocusout(e){super._onfocusout(e);const t=e.relatedTarget,o=this.contains(t),s=this.shadowRoot.contains(t);!o&&!s&&(this.expandedTokenizer=!1,this.tokenizer._itemNav._currentIndex=-1)}async _onfocusin(e){const t=await this.getInputDOMRef();e.target===t&&await super._onfocusin(e)}lastItemDeleted(){setTimeout(()=>{this.focus()},0)}onBeforeRendering(){super.onBeforeRendering(),this.style.setProperty(te("--_ui5-input-icons-count"),`${this.iconsCount}`),this.tokenizerAvailable=this.tokens&&this.tokens.length>0}get iconsCount(){return super.iconsCount+(this.showValueHelpIcon?1:0)}get tokenizer(){return this.shadowRoot.querySelector("[ui5-tokenizer]")}get _tokensCountText(){if(this.tokenizer)return this.tokenizer._tokensCountText()}get _tokensCountTextId(){return`${this._id}-hiddenText-nMore`}get _placeholder(){return this.tokenizer&&this.tokenizer._tokens.length?"":this.placeholder}get accInfo(){const e=`${this._tokensCountTextId} ${this.suggestionsTextId} ${this.valueStateTextId}`.trim();return{input:{...super.accInfo.input,ariaRoledescription:this.ariaRoleDescription,ariaDescribedBy:e}}}get ariaRoleDescription(){return f.i18nBundle.getText(Y)}get morePopoverOpener(){return this.tokens.length===1&&this.tokens[0].isTruncatable?this.tokens[0]:this}};h([v({type:Boolean})],u.prototype,"showValueHelpIcon",void 0);h([v({type:Boolean})],u.prototype,"expandedTokenizer",void 0);h([v({type:Boolean})],u.prototype,"tokenizerAvailable",void 0);h([L()],u.prototype,"tokens",void 0);u=f=h([H({tag:"ui5-multi-input",renderer:E,template:ie,styles:[m.styles,se],dependencies:[...m.dependencies,ee,Z,U]}),g("value-help-trigger"),g("token-delete",{detail:{token:{type:HTMLElement}}})],u);u.define();const me=u,fe=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"})),d=O("ui5-multi-input",["accessibleName","accessibleNameRef","maxlength","name","placeholder","type","value","valueState"],["showValueHelpIcon","disabled","noTypeahead","readonly","required","showClearIcon","showSuggestions"],["tokens","icon","valueStateMessage"],["token-delete","value-help-trigger","change","input","suggestion-item-preview","suggestion-item-select"],()=>V(()=>Promise.resolve().then(()=>fe),void 0,import.meta.url));d.displayName="MultiInput";d.defaultProps={type:J.Text,valueState:ne.None};try{d.displayName="MultiInput",d.__docgenInfo={description:`### Overview

A \`MultiInput\` field allows the user to enter multiple values, which are displayed as \`Token\`. User can choose interaction for creating tokens. Fiori Guidelines say that user should create tokens when:

*   Type a value in the input and press enter or focus out the input field (\`onChange\` event is fired)
*   Select a value from the suggestion list (\`onSuggestionItemSelect\` event is fired)

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-MultiInput)`,displayName:"MultiInput",props:{tokens:{defaultValue:null,description:`Defines the component tokens.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="tokens"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"tokens",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},children:{defaultValue:null,description:`Defines the suggestion items.

Example:

<pre>
  <code>
   &lt;MultiInput showSuggestions><br />
   &nbsp;&nbsp;&lt;SuggestionItem text="Item #1" /><br />
   &nbsp;&nbsp;&lt;SuggestionItem text="Item #2" /><br />
   &lt;/MultiInput>
 </code>
</pre>


**Note:** The suggestions would be displayed only if the \`showSuggestions\` property is set to \`true\`.

**Note:** The \`<SuggestionItem>\` and \`<SuggestionGroupItem>\` are recommended to be used as suggestion items.

**Note:** Importing the Input Suggestions Support feature:
\`import "@ui5/webcomponents/dist/features/InputSuggestions.js";\`
automatically imports the \`<SuggestionItem>\` and \`<SuggestionGroupItem>\` for your convenience.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the component.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.\n\n**Note:** If the component has `suggestionItems`, the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onTokenDelete:{defaultValue:null,description:"Fired when a token is about to be deleted.",name:"onTokenDelete",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, MultiInputTokenDeleteEventDetail>) => void"}},onValueHelpTrigger:{defaultValue:null,description:"Fired when the value help icon is pressed and F4 or ALT/OPTION + ARROW\\_UP/ARROW\\_DOWN keyboard keys are used.",name:"onValueHelpTrigger",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.\n\n__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the component changes at each keystroke, and when a suggestion item has been selected.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onSuggestionItemPreview:{defaultValue:null,description:"Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection.",name:"onSuggestionItemPreview",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, InputSuggestionItemPreviewEventDetail>) => void"}},onSuggestionItemSelect:{defaultValue:null,description:"Fired when a suggestion item, that is displayed in the suggestion popup, is selected.",name:"onSuggestionItemSelect",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, InputSuggestionItemSelectEventDetail>) => void"}},showValueHelpIcon:{defaultValue:null,description:"Determines whether a value help icon will be visualized in the end of the input. Pressing the icon will fire `onValueHelpTrigger` event.",name:"showValueHelpIcon",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},maxlength:{defaultValue:null,description:`Sets the maximum number of characters available in the input field.

**Note:** This property is not compatible with the Input type InputType.Number. If the Input type is set to Number, the maxlength value is ignored.`,name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},noTypeahead:{defaultValue:null,description:"Defines whether the value will be autcompleted to match an item",name:"noTypeahead",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},showClearIcon:{defaultValue:null,description:"Defines whether the clear icon of the input will be shown.",name:"showClearIcon",required:!1,type:{name:"boolean"}},showSuggestions:{defaultValue:null,description:'Defines whether the component should show suggestions, if such are present.\n\n**Note:** You need to import the `InputSuggestions` module from `"@ui5/webcomponents/dist/features/InputSuggestions.js"` to enable this functionality.',name:"showSuggestions",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"InputType.Text"},description:"Defines the HTML type of the component. Available options are: `Text`, `Email`, `Number`, `Password`, `Tel`, and `URL`.\n\n**Notes:**\n\n*   The particular effect of this property differs depending on the browser and the current language settings, especially for type `Number`.\n*   The property is mostly intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'}]}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{d as M};
//# sourceMappingURL=index-791fbae6.js.map
