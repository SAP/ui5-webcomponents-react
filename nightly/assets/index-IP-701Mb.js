import{j as r,F as f,h as _,p as v,d as y,s as d,m as w,y as k,w as T}from"./jsx-runtime-xa789Fx-.js";import{d as I}from"./slot-_4yKMUwC.js";import{l as m}from"./event-strict-DgQLNDEV.js";import{F as S,K as N,x as D,e as q,_ as V,c as C,P as M,W as R}from"./Keys-CLf_QmYW.js";import{d as A}from"./CustomElementsScope-CraI7z9b.js";import{aW as x,aX as z,aY as H}from"./i18n-defaults-Wx6G1HAa.js";import{c as P,I as g}from"./Input-7niQxXb3.js";import{f as b,I as U}from"./Icon-BC8KE6RK.js";import{T as E,g as L}from"./Token-5JdCRqlX.js";import{d as W}from"./parameters-bundle.css-D0uTR4GL.js";const O="value-help",F="M470 41q10 9 10 23v192q0 12-10 22t-22 10H256q-14 0-23-10-9-9-9-22V64q0-14 9-23t23-9h192q13 0 22 9zm-22 23H256v192h192V64zm-96 256h32v128q0 14-9 23t-23 9H64q-12 0-23-9-9-9-9-23V160q0-14 9-23t23-9h128v32H64v288h288V320z",B=!1,$="SAP-icons-v4",G="@ui5/webcomponents-icons";b(O,{pathData:F,ltr:B,collection:$,packageName:G});const j="value-help",K="M422 32q24 0 41 17t17 41v204q0 24-17 41t-41 17h-12q-11 0-18.5-7.5T384 326t7.5-18 18.5-7h12q7 0 7-7V90q0-7-7-7H218q-7 0-7 7v12q0 11-7 18.5t-18 7.5-18.5-7.5T160 102V90q0-24 17-41t41-17h204zM294 160q24 0 41 17t17 41v204q0 24-17 41t-41 17H90q-24 0-41-17t-17-41V218q0-24 17-41t41-17h204zm7 58q0-7-7-7H90q-7 0-7 7v204q0 7 7 7h204q7 0 7-7V218z",X=!1,Y="SAP-icons-v5",J="@ui5/webcomponents-icons";b(j,{pathData:K,ltr:X,collection:Y,packageName:J});const Q="value-help";function Z(){return[P.call(this,{preContent:ee,postContent:te})]}function ee(){return _(f,{children:[r("span",{id:"hiddenText-nMore",class:"ui5-hidden-text",children:this._tokensCountText}),this.showValueHelpIcon&&r("span",{id:"hiddenText-value-help",class:"ui5-hidden-text",children:this._valueHelpText}),r(E,{class:"ui5-multi-input-tokenizer",opener:this.morePopoverOpener,popoverMinWidth:this._inputWidth,hidePopoverArrow:!0,expanded:this.tokenizerExpanded,onKeyDown:this._onTokenizerKeydown,onTokenDelete:this.tokenDelete,onFocusOut:this._tokenizerFocusOut,children:this.tokens.map(s=>r("slot",{name:s._individualSlot}))})]})}function te(){return r(f,{children:this.showValueHelpIcon&&r(U,{class:"inputIcon",name:Q,accessibleName:this.valueHelpLabel,onMouseUp:this.valueHelpMouseUp,onMouseDown:this.valueHelpMouseDown,onClick:this.valueHelpPress})})}v("@ui5/webcomponents-theming","sap_horizon",async()=>y);v("@ui5/webcomponents","sap_horizon",async()=>W);const ne=`.inputIcon{color:var(--_ui5-v2-12-0_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-12-0_input_icon_padding);border-inline-start:var(--_ui5-v2-12-0_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-12-0_input_icon_border_radius)}.inputIcon.inputIcon--pressed{background:var(--_ui5-v2-12-0_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-12-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-12-0_select_hover_icon_left_border);color:var(--_ui5-v2-12-0_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-12-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-12-0_select_hover_icon_left_border);color:var(--_ui5-v2-12-0_input_icon_pressed_color)}.inputIcon:not(.inputIcon--pressed):not(:active):hover{background:var(--_ui5-v2-12-0_input_icon_hover_bg);box-shadow:var(--_ui5-v2-12-0_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-12-0_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-12-0_input_icon_box_shadow)}:host{min-width:calc(var(--_ui5-v2-12-0_input_min_width) + (var(--_ui5-v2-12-0-input-icons-count)*var(--_ui5-v2-12-0_input_icon_width)))}:host([tokenizer-available]){min-width:calc(var(--_ui5-v2-12-0_input_min_width) + (var(--_ui5-v2-12-0-input-icons-count)*var(--_ui5-v2-12-0_input_icon_width)) + var(--_ui5-v2-12-0_input_tokenizer_min_width))}.ui5-multi-input-tokenizer{min-width:var(--_ui5-v2-12-0_input_tokenizer_min_width);max-width:calc(100% - 3rem - var(--_ui5-v2-12-0-input-icons-count) * var(--_ui5-v2-12-0_input_icon_min_width));border:none;width:auto;height:100%}:host([readonly]) .ui5-multi-input-tokenizer::part(n-more-text){color:var(--sapLinkColor)}.ui5-multi-input-tokenizer::part(n-more-text){padding-inline-end:var(--_ui5-v2-12-0_input_inner_space_to_n_more_text)}[inner-input][inner-input-with-icon]{padding:var(--_ui5-v2-12-0_input_inner_padding_with_icon)}:host([tokenizer-available]) [inner-input]{padding-inline-start:var(--_ui5-v2-12-0_input_inner_space_to_tokenizer)}:host(:not([tokenizer-available])) .ui5-multi-input-tokenizer{--_ui5-v2-12-0_input_tokenizer_min_width: 0px;width:var(--_ui5-v2-12-0_input_tokenizer_min_width)}
`;var c=function(s,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,n);else for(var h=s.length-1;h>=0;h--)(a=s[h])&&(i=(o<3?a(i):o>3?a(e,t,i):a(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},u;let l=u=class extends g{get formValidity(){const e=this.tokens||[];return{valueMissing:this.required&&!this.value&&!e.length}}get formFormattedValue(){const e=this.tokens||[];if(e.length&&this.name){const t=new FormData;t.append(this.name,this.value);for(let n=0;n<e.length;n++)t.append(this.name,e[n].text||"");return t}return this.value}constructor(){super(),this.showValueHelpIcon=!1,this.tokenizerAvailable=!1,this._skipOpenSuggestions=!1,this._valueHelpIconPressed=!1}valueHelpPress(){this.closeValueStatePopover(),this.fireDecoratorEvent("value-help-trigger")}tokenDelete(e){const t=e.detail.tokens,n=this.tokens.filter(i=>i.selected),o=this.tokens.length-1===0||this.tokens.length===n.length;this._readonly||t&&(this.fireDecoratorEvent("token-delete",{tokens:t}),o&&this.focus())}valueHelpMouseDown(e){const t=e.target;this.closeValueStatePopover(),this.tokenizer.open=!1,this._valueHelpIconPressed=!0,t.focus()}_tokenizerFocusOut(e){!this.contains(e.relatedTarget)&&!this.shadowRoot.contains(e.relatedTarget)&&(this.tokenizer._tokens.forEach(t=>{t.selected=!1}),this.tokenizer.scrollToStart())}valueHelpMouseUp(){setTimeout(()=>{this._valueHelpIconPressed=!1},0)}innerFocusIn(){this.tokenizer.expanded=!0,this.focused=!0,this.tokenizer.scrollToEnd(),this.tokens.forEach(e=>{e.selected=!1})}_onkeydown(e){super._onkeydown(e);const t=e.target;if(S(e)&&t.selectionStart===0)return this._skipOpenSuggestions=!0,this._focusFirstToken(e);if(N(e))return this._skipOpenSuggestions=!0,this._handleLeft(e);if(D(e))return this._skipOpenSuggestions=!0,this._handleBackspace(e);this._skipOpenSuggestions=!1,q(e)&&this.valueHelpPress()}_onTokenizerKeydown(e){const t=V(e);if(C(e)||M(e)||R(e)||t){e.preventDefault();const n=this.tokens.length-1;e.target===this.tokens[n]&&this.tokens[n]===document.activeElement&&setTimeout(()=>{this.focus()},0)}}_handleLeft(e){const t=this.getDomRef().querySelector("input").selectionStart,n=this.tokens,o=n.length&&n[n.length-1];(t===null&&!this.value||t===0)&&o&&(e.preventDefault(),o.focus(),this.tokenizer._itemNav.setCurrentItem(o))}_handleBackspace(e){const t=this.getDomRef().querySelector("input").selectionStart,n=this.getDomRef().querySelector("input").selectionEnd,o=t===0&&n===this.value.length,i=this.tokens,a=i.length&&i[i.length-1];(!this.value||this.value&&t===0&&!o)&&a&&(e.preventDefault(),a.focus(),this.tokenizer._itemNav.setCurrentItem(a))}_focusFirstToken(e){const t=this.tokens,n=t.length&&t[0];n&&(e.preventDefault(),n.focus(),this.tokenizer._itemNav.setCurrentItem(n))}_onfocusout(e){super._onfocusout(e);const t=e.relatedTarget,n=this.contains(t),o=this.shadowRoot.contains(t);!n&&!o&&(this.tokenizer.expanded=!1),this.contains(t)&&t.hasAttribute("ui5-token")&&(this.focused=!1)}_onfocusin(e){const t=this.getInputDOMRef();e.target===t&&super._onfocusin(e)}onBeforeRendering(){super.onBeforeRendering(),this.style.setProperty(A("--_ui5-input-icons-count"),`${this.iconsCount}`),this.tokenizerAvailable=this.tokens&&this.tokens.length>0,this.tokenizer&&(this.tokenizer.readonly=this.readonly)}onAfterRendering(){super.onAfterRendering(),this.tokenizer.preventInitialFocus=!0,this.tokenizer.expanded?this.tokenizer.scrollToEnd():this.tokenizer.scrollToStart()}get iconsCount(){return super.iconsCount+(this.showValueHelpIcon?1:0)}get tokenizer(){return this.shadowRoot.querySelector("[ui5-tokenizer]")}get tokenizerExpanded(){return this.tokenizer&&this.tokenizer.expanded}get _tokensCountText(){return L(this.tokens.length)}get _valueHelpText(){return u.i18nBundle.getText(x)}get _tokensCountTextId(){return"hiddenText-nMore"}get _valueHelpTextId(){return this.showValueHelpIcon?"hiddenText-value-help":""}get _placeholder(){return this.tokens.length?"":this.placeholder}get accInfo(){const e=`${this._tokensCountTextId} ${this.suggestionsTextId} ${this.valueStateTextId} ${this._valueHelpTextId}`.trim();return{...super.accInfo,ariaRoledescription:this.ariaRoleDescription,ariaDescribedBy:e}}get valueHelpLabel(){return u.i18nBundle.getText(z)}get ariaRoleDescription(){return u.i18nBundle.getText(H)}get morePopoverOpener(){return this.tokens.length===1&&this.tokens[0].isTruncatable?this.tokens[0]:this}get shouldDisplayOnlyValueStateMessage(){return this.hasValueStateMessage&&!this.readonly&&!this.open&&this.focused&&!this.tokenizer.open}};c([d({type:Boolean})],l.prototype,"showValueHelpIcon",void 0);c([d({type:Boolean})],l.prototype,"tokenizerAvailable",void 0);c([d()],l.prototype,"name",void 0);c([I({type:HTMLElement,individualSlots:!0})],l.prototype,"tokens",void 0);l=u=c([w({tag:"ui5-multi-input",renderer:k,formAssociated:!0,template:Z,styles:[g.styles,ne]}),m("value-help-trigger",{bubbles:!0}),m("token-delete",{bubbles:!0})],l);l.define();const p=T("ui5-multi-input",["accessibleDescription","accessibleDescriptionRef","accessibleName","accessibleNameRef","maxlength","name","placeholder","type","value","valueState"],["disabled","noTypeahead","open","readonly","required","showClearIcon","showSuggestions","showValueHelpIcon"],["icon","tokens","valueStateMessage"],["change","close","input","open","select","selection-change","token-delete","value-help-trigger"]);p.displayName="MultiInput";try{p.displayName="MultiInput",p.__docgenInfo={description:"A `MultiInput` field allows the user to enter multiple values, which are displayed as `Token`.\n\nUser can choose interaction for creating tokens.\nFiori Guidelines say that user should create tokens when:\n\n- Type a value in the input and press enter or focus out the input field (`change` event is fired)\n- Move between suggestion items (`selection-change` event is fired)\n- Clicking on a suggestion item (`selection-change` event is fired if the clicked item is different than the current value. Also `change` event is fired )\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MultiInput",props:{children:{defaultValue:null,description:"Defines the suggestion items.\n\n**Note:** The suggestions would be displayed only if the `showSuggestions`\nproperty is set to `true`.\n\n**Note:** The `<SuggestionItem>`, `<SuggestionItemGroup>` and `SuggestionItemCustom` are recommended to be used as suggestion items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},tokens:{defaultValue:null,description:`Defines the component tokens.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="tokens"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"tokens",required:!1,type:{name:"UI5WCSlotsNode"}},valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

**Note:** If the component has \`suggestionItems\`,
the \`valueStateMessage\` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the input operation has finished by pressing Enter or on focusout.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onClose:{defaultValue:null,description:`Fired when the suggestions picker is closed.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired when the suggestions picker is open.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onSelect:{defaultValue:null,description:`Fired when some text has been selected.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelect",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:`Fired when the user navigates to a suggestion item via the ARROW keys,
as a preview, before the final selection.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, InputSelectionChangeEventDetail>) => void"}},onTokenDelete:{defaultValue:null,description:`Fired when tokens are being deleted.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onTokenDelete",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, MultiInputTokenDeleteEventDetail>) => void"}},onValueHelpTrigger:{defaultValue:null,description:`Fired when the value help icon is pressed
and F4 or ALT/OPTION + ARROW_UP/ARROW_DOWN keyboard keys are used.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onValueHelpTrigger",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the input.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},maxlength:{defaultValue:{value:"undefined"},description:`Sets the maximum number of characters available in the input field.

**Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.`,name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.
**Note:** When the component is used inside a form element,
the value is sent as the first element in the form data, even if it's empty.`,name:"name",required:!1,type:{name:"string"}},noTypeahead:{defaultValue:{value:"false"},description:`Defines whether the value will be autcompleted to match an item

**Note:** Available since [v1.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents**.`,name:"noTypeahead",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:"Defines whether the suggestions picker is open.\nThe picker will not open if the `showSuggestions` property is set to `false`, the input is disabled or the input is readonly.\nThe picker will close automatically and `close` event will be fired if the input is not in the viewport.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},showClearIcon:{defaultValue:{value:"false"},description:`Defines whether the clear icon of the input will be shown.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"showClearIcon",required:!1,type:{name:"boolean"}},showSuggestions:{defaultValue:{value:"false"},description:"Defines whether the component should show suggestions, if such are present.",name:"showSuggestions",required:!1,type:{name:"boolean"}},showValueHelpIcon:{defaultValue:{value:"false"},description:"Determines whether a value help icon will be visualized in the end of the input.\nPressing the icon will fire `value-help-trigger` event.",name:"showValueHelpIcon",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:'"Text"'},description:`Defines the HTML type of the component.

**Notes:**

- The particular effect of this property differs depending on the browser
and the current language settings, especially for type \`Number\`.
- The property is mostly intended to be used with touch devices
that use different soft keyboard layouts depending on the given input type.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Search"'},{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Search"'}]}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="MultiInput",p.__docgenInfo={description:"A `MultiInput` field allows the user to enter multiple values, which are displayed as `Token`.\n\nUser can choose interaction for creating tokens.\nFiori Guidelines say that user should create tokens when:\n\n- Type a value in the input and press enter or focus out the input field (`change` event is fired)\n- Move between suggestion items (`selection-change` event is fired)\n- Clicking on a suggestion item (`selection-change` event is fired if the clicked item is different than the current value. Also `change` event is fired )\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MultiInput",props:{children:{defaultValue:null,description:"Defines the suggestion items.\n\n**Note:** The suggestions would be displayed only if the `showSuggestions`\nproperty is set to `true`.\n\n**Note:** The `<SuggestionItem>`, `<SuggestionItemGroup>` and `SuggestionItemCustom` are recommended to be used as suggestion items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},tokens:{defaultValue:null,description:`Defines the component tokens.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="tokens"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"tokens",required:!1,type:{name:"UI5WCSlotsNode"}},valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

**Note:** If the component has \`suggestionItems\`,
the \`valueStateMessage\` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the input operation has finished by pressing Enter or on focusout.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onClose:{defaultValue:null,description:`Fired when the suggestions picker is closed.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired when the suggestions picker is open.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onSelect:{defaultValue:null,description:`Fired when some text has been selected.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelect",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:`Fired when the user navigates to a suggestion item via the ARROW keys,
as a preview, before the final selection.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, InputSelectionChangeEventDetail>) => void"}},onTokenDelete:{defaultValue:null,description:`Fired when tokens are being deleted.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onTokenDelete",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, MultiInputTokenDeleteEventDetail>) => void"}},onValueHelpTrigger:{defaultValue:null,description:`Fired when the value help icon is pressed
and F4 or ALT/OPTION + ARROW_UP/ARROW_DOWN keyboard keys are used.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onValueHelpTrigger",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the input.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},maxlength:{defaultValue:{value:"undefined"},description:`Sets the maximum number of characters available in the input field.

**Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.`,name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.
**Note:** When the component is used inside a form element,
the value is sent as the first element in the form data, even if it's empty.`,name:"name",required:!1,type:{name:"string"}},noTypeahead:{defaultValue:{value:"false"},description:`Defines whether the value will be autcompleted to match an item

**Note:** Available since [v1.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents**.`,name:"noTypeahead",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:"Defines whether the suggestions picker is open.\nThe picker will not open if the `showSuggestions` property is set to `false`, the input is disabled or the input is readonly.\nThe picker will close automatically and `close` event will be fired if the input is not in the viewport.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},showClearIcon:{defaultValue:{value:"false"},description:`Defines whether the clear icon of the input will be shown.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"showClearIcon",required:!1,type:{name:"boolean"}},showSuggestions:{defaultValue:{value:"false"},description:"Defines whether the component should show suggestions, if such are present.",name:"showSuggestions",required:!1,type:{name:"boolean"}},showValueHelpIcon:{defaultValue:{value:"false"},description:"Determines whether a value help icon will be visualized in the end of the input.\nPressing the icon will fire `value-help-trigger` event.",name:"showValueHelpIcon",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:'"Text"'},description:`Defines the HTML type of the component.

**Notes:**

- The particular effect of this property differs depending on the browser
and the current language settings, especially for type \`Number\`.
- The property is mostly intended to be used with touch devices
that use different soft keyboard layouts depending on the given input type.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Search"'},{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Search"'}]}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{p as M};
