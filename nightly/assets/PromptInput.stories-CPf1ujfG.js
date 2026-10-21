import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{X as n,Y as r}from"./CustomElementsScopeUtils-G6VaTXHT.js";import{a as i,c as a,d as o,f as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,u as g}from"./jsx-runtime-NHZLEOw0.js";import{I as ee,q as _}from"./Keys-DqJfIghV.js";import{n as v,t as te}from"./withWebComponent-CQvqGaAL.js";import{n as y,t as b}from"./event-strict-C4u0wMzB.js";import{n as x,t as S}from"./i18n-BNTZIxbt.js";import{n as C,t as w}from"./ValueState-Cz7u0abQ.js";import{n as ne,t as T}from"./Label-B86iX5H0.js";import{n as E,t as D}from"./slot-strict-BSUUcNBc.js";import{n as O,t as k}from"./Input-CDhBYT69.js";import{n as A,t as j}from"./Button-C69-ub8X.js";import{c as M,n as N,s as P,t as F,y as I}from"./parameters-bundle.css-wyLn3OCi.js";import{n as L,t as R}from"./paper-plane-BLVfdVRU.js";function z(){return c(`div`,{class:`ai-prompt-input-wrapper`,children:[this.label&&m(T,{for:`input`,children:this.label}),c(`div`,{class:`ai-prompt-input-form-wrapper`,children:[c(`div`,{class:`ai-prompt-inner-input-wrapper`,children:[c(k,{id:`input`,value:this.value,placeholder:this.placeholder,valueState:this.valueState,showClearIcon:this.showClearIcon,disabled:this.disabled,readonly:this.readonly,showSuggestions:this.showSuggestions,onKeyDown:this._onkeydown,onInput:this._onInnerInput,onChange:this._onInnerChange,onTypeAhead:this._onTypeAhead,"data-sap-focus-ref":!0,children:[m(`slot`,{}),this.valueStateMessage.length>0&&m(`slot`,{name:`valueStateMessage`,slot:`valueStateMessage`})]}),this.showExceededText&&m(T,{class:`ai-prompt-input-counter`,children:this._exceededText})]}),m(j,{icon:L,disabled:this._submitButtonDisabled,class:`ai-prompt-input-button`,design:`Emphasized`,onClick:this._onButtonClick})]})]})}function B(){return(B=e((()=>{d(),ne(),O(),A(),R()})))()}var V;function H(){return(H=e((()=>{n(),i(),F(),r(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>f),r(`@ui5/webcomponents-ai`,`sap_horizon`,async()=>N,`host`),V=`:host(:not([hidden])){display:inline-block}.ai-prompt-input-button{margin-left:.5rem;margin-top:3px}.ai-prompt-input-wrapper{display:flex;flex-direction:column;min-width:270px}.ai-prompt-input-form-wrapper{display:flex;flex:1}.ai-prompt-input-counter{font-size:.75rem;align-self:flex-end}#input{width:100%}.ai-prompt-inner-input-wrapper{display:flex;flex-direction:column;flex:1}
`})))()}var U,W,G;function K(){return(K=e((()=>{u(),o(),l(),b(),E(),x(),h(),_(),I(),B(),H(),U=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},G=W=class extends p{constructor(){super(...arguments),this.value=``,this.showClearIcon=!1,this.showExceededText=!1,this.disabled=!1,this.readonly=!1,this.valueState=`None`,this.showSuggestions=!1}_onkeydown(e){ee(e)&&this.fireDecoratorEvent(`submit`)}_onInnerInput(e){this.value=e.currentTarget.value,this.fireDecoratorEvent(`input`)}_onInnerChange(){this.fireDecoratorEvent(`change`)}_onButtonClick(){this.fireDecoratorEvent(`submit`)}_onTypeAhead(e){this.value=e.currentTarget.value}get _exceededText(){if(this.showExceededText){let e,t=this.maxlength;if(t!==void 0)return e=t-this.value.length,e>=0?W.i18nBundle.getText(M,e):W.i18nBundle.getText(P,Math.abs(e))}}get _maxLenght(){return this.maxlength||void 0}get _submitButtonDisabled(){return this.value.length<=0||this.disabled||this.readonly}},U([g()],G.prototype,`value`,void 0),U([g()],G.prototype,`placeholder`,void 0),U([g()],G.prototype,`label`,void 0),U([g({type:Boolean})],G.prototype,`showClearIcon`,void 0),U([g({type:Boolean})],G.prototype,`showExceededText`,void 0),U([g({type:Boolean})],G.prototype,`disabled`,void 0),U([g({type:Boolean})],G.prototype,`readonly`,void 0),U([g({type:Number})],G.prototype,`maxlength`,void 0),U([g()],G.prototype,`valueState`,void 0),U([g({type:Boolean})],G.prototype,`showSuggestions`,void 0),U([D({type:HTMLElement,default:!0})],G.prototype,`suggestionItems`,void 0),U([D({type:HTMLElement,invalidateOnChildChange:!0})],G.prototype,`valueStateMessage`,void 0),U([S(`@ui5/webcomponents-ai`)],G,`i18nBundle`,void 0),G=W=U([s({tag:`ui5-ai-prompt-input`,renderer:a,styles:V,template:z}),y(`submit`,{bubbles:!0}),y(`input`,{bubbles:!0}),y(`change`,{bubbles:!0})],G),G.define()})))()}var q;function J(){return(J=e((()=>{K(),te(),q=v(`ui5-ai-prompt-input`,[`label`,`maxlength`,`placeholder`,`value`,`valueState`],[`disabled`,`readonly`,`showClearIcon`,`showExceededText`,`showSuggestions`],[`valueStateMessage`],[`change`,`input`,`submit`]),q.displayName=`PromptInput`;try{q.displayName=`PromptInput`,q.__docgenInfo={description:`The \`PromptInput\` component allows the user to write custom instructions in natural language, so that AI is guided to generate content tailored to user needs.

**Note:** The web component is in an experimental state



__Note:__ This is a UI5 Web Component! [PromptInput UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ai/PromptInput) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`PromptInput`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputPropTypes`}],description:"Defines the suggestion items.\n\n**Note:** The suggestions would be displayed only if the `showSuggestions`\nproperty is set to `true`.\n\n**Note:** The `<ui5-suggestion-item>`, `<ui5-suggestion-item-group>` and `ui5-suggestion-item-custom` are recommended to be used as suggestion items.\n\n__Supported Node Type/s:__ `Array<IInputSuggestionItem>`",name:`children`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},valueStateMessage:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputPropTypes`}],description:`Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`valueStateMessage`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputPropTypes`}],description:`Fired when the input operation has finished by pressing Enter
or on focusout.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onChange`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<PromptInputDomRef, never>) => void`}},onInput:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputPropTypes`}],description:`Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onInput`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<PromptInputDomRef, never>) => void`}},onSubmit:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputPropTypes`}],description:`Fired when the input operation has finished by pressing Enter
or AI button is clicked.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onSubmit`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<PromptInputDomRef, never>) => void`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`}],description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},label:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`}],description:`Defines the label of the input field.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:`label`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},maxlength:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`}],description:`Sets the maximum number of characters available in the input field.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:`maxlength`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`number`}},placeholder:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`}],description:`Defines a short hint intended to aid the user with data entry when the
component has no value.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:`placeholder`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},readonly:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`}],description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:`readonly`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},showClearIcon:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`}],description:`Defines whether the clear icon of the input will be shown.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:`showClearIcon`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},showExceededText:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`}],description:`Determines whether the characters exceeding the maximum allowed character count are visible
in the component.

If set to \`false\`, the user is not allowed to enter more characters than what is set in the
\`maxlength\` property.
If set to \`true\` the characters exceeding the \`maxlength\` value are selected on
paste and the counter below the component displays their number.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:`showExceededText`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},showSuggestions:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`}],description:`Defines whether the component should show suggestions, if such are present.`,name:`showSuggestions`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},value:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`}],description:`Defines the value of the component.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:`value`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`},required:!1,tags:{},type:{name:`string`}},valueState:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`}],description:`Defines the value state of the component.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.`,name:`valueState`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/PromptInput/index.d.ts`,name:`PromptInputAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`ValueState | "None" | "Positive" | "Critical" | "Negative" | "Information"`,value:[{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"None"`},{value:`"Positive"`},{value:`"Critical"`},{value:`"Negative"`},{value:`"Information"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{experimental:`The **@ui5/webcomponents-ai** package is under development and considered experimental - components' APIs are subject to change.
Furthermore, the package supports **Horizon** themes only.`}}}catch{}})))()}var Y=t({Default:()=>Z,__namedExportsOrder:()=>Q,default:()=>X}),X,Z,Q;function $(){return($=e((()=>{w(),J(),X={title:`PromptInput`,component:q,argTypes:{children:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:C.None},tags:[`package:@ui5/webcomponents-ai`,`experimental`]},Z={},Q=[`Default`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{}`,...Z.parameters?.docs?.source}}}})))()}export{Y as n,$ as r,Z as t};