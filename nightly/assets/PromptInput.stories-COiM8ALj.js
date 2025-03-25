import{o as A}from"./ValueState-Bg0UWejw.js";import{b as h,j as r,p as S,d as P,s as o,m as x,l as I,A as C,w as T}from"./jsx-runtime-ByLklLy6.js";import{l as f}from"./event-strict-DgQLNDEV.js";import{d as _}from"./slot-_4yKMUwC.js";import{i as D}from"./i18n-CjR4HGlq.js";import{b as q}from"./Keys-B3oBAe0t.js";import{L as g}from"./Label-42unHoL8.js";import{a as E}from"./Input-Ci9ipMKV.js";import{a as V}from"./Button-CVhFbCad.js";import{f as N}from"./Icon-CGby3L9v.js";import{d as M}from"./parameters-bundle.css-CrrhGu77.js";const R={key:"PROMPT_INPUT_CHARACTERS_LEFT",defaultText:"{0} characters remaining"},k={key:"PROMPT_INPUT_CHARACTERS_EXCEEDED",defaultText:"{0} characters over limit"},U="paper-plane",L="M494.98 31.928q7.982 0 13.47 7.483t2.494 15.465L361.28 471.936q-2.993 10.976-15.964 10.976-6.984 0-10.975-3.991l-115.74-105.762-69.842 61.86q-8.98 7.982-18.957 2.495t-8.98-16.463l10.975-126.714L6.082 180.593Q-1.9 173.609.594 164.13t13.47-12.472L490.989 32.926q.997-.998 3.99-.998zm-358.193 221.5L461.056 74.832 51.978 176.601zm70.84 110.751l-40.908-36.917-28.934 90.796zM467.043 75.83l-284.36 219.505 155.65 141.681z",z=!1,B="SAP-icons-v4",O="@ui5/webcomponents-icons";N(U,{pathData:L,ltr:z,collection:B,packageName:O});const F="paper-plane",W="M455 32q10 0 17.5 7.5T480 58q0 6-2 9L323 464q-7 16-24 16-8 0-14.5-4t-9.5-12l-64-164-163-65q-16-6-16-24 0-17 16-24L445 34q6-2 10-2zM127 212l97 39 126-125zm259-50L260 287l39 98z",H=!1,j="SAP-icons-v5",$="@ui5/webcomponents-icons";N(F,{pathData:W,ltr:H,collection:j,packageName:$});const G="paper-plane";function X(){return h("div",{class:"ai-prompt-input-wrapper",children:[this.label&&r(g,{for:"input",children:this.label}),h("div",{class:"ai-prompt-input-form-wrapper",children:[h("div",{class:"ai-prompt-inner-input-wrapper",children:[h(E,{id:"input",value:this.value,placeholder:this.placeholder,valueState:this.valueState,showClearIcon:this.showClearIcon,disabled:this.disabled,readonly:this.readonly,showSuggestions:this.showSuggestions,onKeyDown:this._onkeydown,onInput:this._onInnerInput,onChange:this._onInnerChange,onTypeAhead:this._onTypeAhead,children:[r("slot",{}),this.valueStateMessage.length>0&&r("slot",{name:"valueStateMessage",slot:"valueStateMessage"})]}),this.showExceededText&&r(g,{class:"ai-prompt-input-counter",children:this._exceededText})]}),r(V,{icon:G,disabled:this._submitButtonDisabled,class:"ai-prompt-input-button",design:"Emphasized",onClick:this._onButtonClick})]})]})}S("@ui5/webcomponents-theming","sap_horizon",async()=>P);S("@ui5/webcomponents-ai","sap_horizon",async()=>M);const K=`.ai-prompt-input-button{margin-left:.5rem;margin-top:3px}.ai-prompt-input-wrapper{display:flex;flex-direction:column;width:270px}.ai-prompt-input-form-wrapper{display:flex;flex:1}.ai-prompt-input-counter{font-size:.75rem;align-self:flex-end}#input{width:100%}.ai-prompt-inner-input-wrapper{display:flex;flex-direction:column;flex:1}
`;var n=function(i,e,a,p){var c=arguments.length,s=c<3?e:p===null?p=Object.getOwnPropertyDescriptor(e,a):p,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,a,p);else for(var b=i.length-1;b>=0;b--)(m=i[b])&&(s=(c<3?m(s):c>3?m(e,a,s):m(e,a))||s);return c>3&&s&&Object.defineProperty(e,a,s),s},d;let t=d=class extends C{constructor(){super(...arguments),this.value="",this.showClearIcon=!1,this.showExceededText=!1,this.disabled=!1,this.readonly=!1,this.valueState="None",this.showSuggestions=!1}_onkeydown(e){q(e)&&this.fireDecoratorEvent("submit")}_onInnerInput(e){this.value=e.currentTarget.value,this.fireDecoratorEvent("input")}_onInnerChange(){this.fireDecoratorEvent("change")}_onButtonClick(){this.fireDecoratorEvent("submit")}_onTypeAhead(e){this.value=e.currentTarget.value}get _exceededText(){if(this.showExceededText){let e;const a=this.maxlength;if(a!==void 0)return e=a-this.value.length,e>=0?d.i18nBundle.getText(R,e):d.i18nBundle.getText(k,Math.abs(e))}}get _maxLenght(){return this.maxlength||void 0}get _submitButtonDisabled(){return this.value.length<=0||this.disabled||this.readonly}};n([o()],t.prototype,"value",void 0);n([o()],t.prototype,"placeholder",void 0);n([o()],t.prototype,"label",void 0);n([o({type:Boolean})],t.prototype,"showClearIcon",void 0);n([o({type:Boolean})],t.prototype,"showExceededText",void 0);n([o({type:Boolean})],t.prototype,"disabled",void 0);n([o({type:Boolean})],t.prototype,"readonly",void 0);n([o({type:Number})],t.prototype,"maxlength",void 0);n([o()],t.prototype,"valueState",void 0);n([o({type:Boolean})],t.prototype,"showSuggestions",void 0);n([_({type:HTMLElement,default:!0})],t.prototype,"suggestionItems",void 0);n([_({type:HTMLElement,invalidateOnChildChange:!0})],t.prototype,"valueStateMessage",void 0);n([D("@ui5/webcomponents-ai")],t,"i18nBundle",void 0);t=d=n([x({tag:"ui5-ai-prompt-input",renderer:I,styles:K,template:X}),f("submit",{bubbles:!0}),f("input",{bubbles:!0}),f("change",{bubbles:!0})],t);t.define();const l=T("ui5-ai-prompt-input",["label","maxlength","placeholder","value","valueState"],["disabled","readonly","showClearIcon","showExceededText","showSuggestions"],["valueStateMessage"],["change","input","submit"]);l.displayName="PromptInput";try{l.displayName="PromptInput",l.__docgenInfo={description:`The \`PromptInput\` component allows the user to write custom instructions in natural language, so that AI is guided to generate content tailored to user needs.

**Note:** The web component is in an experimental state



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"PromptInput",props:{children:{defaultValue:null,description:"Defines the suggestion items.\n\n**Note:** The suggestions would be displayed only if the `showSuggestions`\nproperty is set to `true`.\n\n**Note:** The `<ui5-suggestion-item>`, `<ui5-suggestion-item-group>` and `ui5-suggestion-item-custom` are recommended to be used as suggestion items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the input operation has finished by pressing Enter
or on focusout.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<PromptInputDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<PromptInputDomRef, never>) => void"}},onSubmit:{defaultValue:null,description:`Fired when the input operation has finished by pressing Enter
or AI button is clicked.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSubmit",required:!1,type:{name:"(event: Ui5CustomEvent<PromptInputDomRef, never>) => void"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"undefined"},description:`Defines the label of the input field.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"label",required:!1,type:{name:"string"}},maxlength:{defaultValue:{value:"undefined"},description:`Sets the maximum number of characters available in the input field.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"maxlength",required:!1,type:{name:"number"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"readonly",required:!1,type:{name:"boolean"}},showClearIcon:{defaultValue:{value:"false"},description:`Defines whether the clear icon of the input will be shown.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"showClearIcon",required:!1,type:{name:"boolean"}},showExceededText:{defaultValue:{value:"false"},description:"Determines whether the characters exceeding the maximum allowed character count are visible\nin the component.\n\nIf set to `false`, the user is not allowed to enter more characters than what is set in the\n`maxlength` property.\nIf set to `true` the characters exceeding the `maxlength` value are selected on\npaste and the counter below the component displays their number.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.",name:"showExceededText",required:!1,type:{name:"boolean"}},showSuggestions:{defaultValue:{value:"false"},description:"Defines whether the component should show suggestions, if such are present.",name:"showSuggestions",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:`Defines the value state of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{l.displayName="PromptInput",l.__docgenInfo={description:`The \`PromptInput\` component allows the user to write custom instructions in natural language, so that AI is guided to generate content tailored to user needs.

**Note:** The web component is in an experimental state



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"PromptInput",props:{children:{defaultValue:null,description:"Defines the suggestion items.\n\n**Note:** The suggestions would be displayed only if the `showSuggestions`\nproperty is set to `true`.\n\n**Note:** The `<ui5-suggestion-item>`, `<ui5-suggestion-item-group>` and `ui5-suggestion-item-custom` are recommended to be used as suggestion items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the input operation has finished by pressing Enter
or on focusout.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<PromptInputDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<PromptInputDomRef, never>) => void"}},onSubmit:{defaultValue:null,description:`Fired when the input operation has finished by pressing Enter
or AI button is clicked.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSubmit",required:!1,type:{name:"(event: Ui5CustomEvent<PromptInputDomRef, never>) => void"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"undefined"},description:`Defines the label of the input field.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"label",required:!1,type:{name:"string"}},maxlength:{defaultValue:{value:"undefined"},description:`Sets the maximum number of characters available in the input field.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"maxlength",required:!1,type:{name:"number"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"readonly",required:!1,type:{name:"boolean"}},showClearIcon:{defaultValue:{value:"false"},description:`Defines whether the clear icon of the input will be shown.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"showClearIcon",required:!1,type:{name:"boolean"}},showExceededText:{defaultValue:{value:"false"},description:"Determines whether the characters exceeding the maximum allowed character count are visible\nin the component.\n\nIf set to `false`, the user is not allowed to enter more characters than what is set in the\n`maxlength` property.\nIf set to `true` the characters exceeding the `maxlength` value are selected on\npaste and the counter below the component displays their number.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.",name:"showExceededText",required:!1,type:{name:"boolean"}},showSuggestions:{defaultValue:{value:"false"},description:"Defines whether the component should show suggestions, if such are present.",name:"showSuggestions",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:`Defines the value state of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Q={title:"PromptInput",component:l,argTypes:{children:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:A.None},tags:["package:@ui5/webcomponents-ai"]},u={};var v,w,y;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(y=(w=u.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const J=["Default"],pe=Object.freeze(Object.defineProperty({__proto__:null,Default:u,__namedExportsOrder:J,default:Q},Symbol.toStringTag,{value:"Module"}));export{pe as C,u as D};
