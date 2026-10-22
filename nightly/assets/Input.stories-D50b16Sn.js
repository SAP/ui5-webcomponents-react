import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{X as r,Y as i}from"./CustomElementsScopeUtils-Cw9cVXS8.js";import{n as a,t as o}from"./Icon-B54hMKwd.js";import{a as s,c,d as l,f as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./jsx-runtime-CMuXpgGv.js";import{Q as ee,Z as te,q as ne}from"./Keys-DqJfIghV.js";import{n as re,t as y}from"./withWebComponent-DhD1x6sB.js";import{t as b}from"./jsx-runtime-BdxMnOeJ.js";import{n as x,t as ie}from"./event-strict-C4u0wMzB.js";import{n as ae,t as oe}from"./slot-strict-BSUUcNBc.js";import{i as se,n as ce,r as le,t as ue}from"./Input-BDkyv1Wr.js";import{n as de,t as fe}from"./ResponsivePopoverCommon.css-BH1aHTwV.js";import{n as pe,t as me}from"./ValueStateMessage.css-CgbjQgs4.js";import{n as he,t as ge}from"./BusyIndicator-BPQ4DUax.js";import{n as _e,t as S}from"./Button-D_83k3d2.js";import{t as ve}from"./navigation-right-arrow-D5Em5Uth.js";import{f as ye,p as be,r as C,t as w}from"./MenuItem-DaHfyVYq.js";import{r as T,t as E}from"./Menu-BILIW1BH.js";import{n as D,t as O}from"./MenuItem-BhfeUVhl.js";import{a as k,i as A}from"./iframe-BhHnaz1V.js";import{a as j,h as M,i as N,n as P,o as xe,t as Se,y as Ce}from"./parameters-bundle.css-B8cWJJiV.js";import{t as we}from"./navigation-left-arrow-CzIfgou3.js";var F;function I(){return(I=e((()=>{r(),s(),Se(),i(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>m),i(`@ui5/webcomponents-ai`,`sap_horizon`,async()=>P,`host`),F=`.ui5-ai-input-root{width:100%;height:100%;border-right:none}:host([focused]:not([opened])[_is-menu-open]) .ui5-ai-input-root:hover{border-radius:var(--_ui5_input_border_radius);box-shadow:var(--sapField_Hover_Shadow)}:host([focused]:not([opened])[_is-menu-open]) .ui5-input-focusable-element:after{border:var(--_ui5-input-border)}.ui5-input-busy-indicator{flex:1;width:100%;height:100%;position:relative;box-sizing:border-box;display:block}.ui5-ai-input-busy .ui5-ai-input-button-wrapper{background-color:inherit;border:none}.ui5-ai-input-button-wrapper{display:flex;justify-content:center;align-items:center;width:var(--_ui5_input_icon_width);min-width:var(--_ui5_input_icon_width);height:var(--_ui5_input_icon_wrapper_height);padding:0;box-sizing:border-box;border-radius:var(--_ui5_input_border_radius);cursor:pointer;border:none}.ui5-input-ai-button[hidden]{display:none}.ui5-ai-input-button-wrapper.ui5-input-button-menu-open,.ui5-ai-input-button-wrapper:active{background-color:var(--sapButton_Selected_Background);box-shadow:var(--sapField_Hover_Shadow);color:var(--sapButton_Selected_TextColor)}.ui5-ai-input-button-wrapper:not(.ui5-input-button-menu-open):not(.ui5-ai-input-loading):not(:active):hover,.ui5-ai-input-button-wrapper.ui5-ai-input-loading:hover{background-color:var(--sapButton_Hover_Background);border:1px solid var(--sapButton_Hover_BorderColor);box-shadow:inset 0 0 0 .0625rem var(--sapContent_Neutral_Shadow)}.ui5-input-button-menu-open{background-color:var(--sapButton_Selected_Background);box-shadow:var(--sapField_Hover_Shadow)}[ui5-menu-item].ui5-ai-versioning-menu-footer:hover{background-color:inherit}.ui5-ai-versioning-menu-footer::part(native-li){padding-right:.25rem}#ai-menu-btn{--_ui5_button_focused_border: none}
`})))()}function Te(e){let t=e?.preContent||De,n=e?.postContent||Oe;return h(_,{children:h(`div`,{class:`ui5-ai-input-root ui5-input-focusable-element ${this.loading&&`ui5-ai-input-busy`}`,onFocusIn:this._onfocusin,onFocusOut:this._onfocusout,children:d(`div`,{class:`ui5-input-content`,children:[h(ge,{id:`${this._id}-busyIndicator`,active:this.loading,class:`ui5-input-busy-indicator`,children:h(`div`,{class:`ui5-input-root`,part:`root`,children:d(`div`,{class:`ui5-input-content`,children:[t.call(this),h(`input`,{id:`inner`,part:`input`,class:`ui5-input-inner`,style:this.styles.innerInput,type:this.inputNativeType,"inner-input":!0,"inner-input-with-icon":this.iconsCount>0,disabled:this.disabled,readonly:this._readonly||this.loading,value:this.value,placeholder:this._placeholder,maxlength:this.maxlength,role:this.accInfo.role,enterkeyhint:this.hint,"aria-controls":this.accInfo.ariaControls,"aria-invalid":this.accInfo.ariaInvalid,"aria-haspopup":this.accInfo.ariaHasPopup,"aria-describedby":this.accInfo.ariaDescribedBy,"aria-roledescription":this.accInfo.ariaRoledescription,"aria-autocomplete":this.accInfo.ariaAutoComplete,"aria-expanded":this.accInfo.ariaExpanded,"aria-label":this.ariaLabel,"aria-required":this.required,autocomplete:`off`,"data-sap-focus-ref":!0,step:this.nativeInputAttributes.step,min:this.nativeInputAttributes.min,max:this.nativeInputAttributes.max,onInput:this._handleNativeInput,onChange:this._handleChange,onSelect:this._handleSelect,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,onClick:this._click,onFocusIn:this.innerFocusIn}),this._effectiveShowClearIcon&&h(`div`,{tabindex:-1,part:`clear-icon-wrapper`,class:`ui5-input-clear-icon-wrapper inputIcon`,onClick:this._clear,onMouseDown:this._iconMouseDown,children:h(o,{part:`clear-icon`,class:`ui5-input-clear-icon`,name:`decline`,tabindex:-1,accessibleName:this.clearIconAccessibleName})}),this.icon.length>0&&h(`div`,{class:`ui5-input-icon-root`,tabindex:-1,children:h(`slot`,{name:`icon`})}),h(`div`,{class:`ui5-input-value-state-icon`,children:this._valueStateInputIcon}),n.call(this),this.accInfo.ariaDescription&&h(`span`,{id:`descr`,class:`ui5-hidden-text`,children:this.accInfo.ariaDescription}),this.accInfo.accessibleDescription&&h(`span`,{id:`accessibleDescription`,class:`ui5-hidden-text`,children:this.accInfo.accessibleDescription}),this.linksInAriaValueStateHiddenText.length>0&&h(`span`,{id:`hiddenText-value-state-link-shortcut`,class:`ui5-hidden-text`,children:this.valueStateLinksShortcutsTextAcc}),this.hasValueState&&h(`span`,{id:`valueStateDesc`,class:`ui5-hidden-text`,children:this.ariaValueStateHiddenText})]})})}),h(S,{id:`ai-menu-btn`,hidden:!this.isFocused&&!this.loading||!this.hasActions||this.readonly,tabIndex:-1,class:`ui5-input-ai-button ui5-ai-input-button-wrapper ${this._isMenuOpen&&`ui5-input-button-menu-open`} ${this.loading&&`ui5-ai-input-loading`}`,design:`Transparent`,icon:this.loading?`stop`:`ai`,onClick:this._handleAIButtonClick,onKeyDown:this._handleAIButtonKeydown,"aria-keyshortcuts":this.loading?`Esc`:`Shift + F4`,tooltip:this.loading?this.stopGeneratingTooltip:this.ariaLabel,accessibilityAttributes:{hasPopup:this.loading?`false`:`menu`}}),d(E,{onItemClick:this._onMenuIconClick,onBeforeOpen:()=>{this._isMenuOpen=!0},onBeforeClose:()=>{this._isMenuOpen=!1},onClose:()=>{this.loading||this.focus()},children:[h(`slot`,{name:`actions`}),this.totalVersions>1&&Ee.call(this)]})]})})})}function Ee(){return d(_,{children:[h(ye,{}),d(w,{type:`Inactive`,class:`ui5-ai-versioning-menu-footer`,text:`${this.currentVersion} / ${this.totalVersions}`,children:[h(S,{id:`arrow-left`,class:`versioning-button`,slot:`endContent`,design:`Transparent`,icon:`navigation-left-arrow`,tooltip:this.previousButtonAccessibleName,accessibleName:this.previousButtonAccessibleName,"aria-keyshortcut":`Shift+Ctrl+Z`,disabled:this.currentVersion<=1,onClick:this._handlePreviousButtonClick,"data-ui5-versioning-button":`previous`}),h(S,{id:`arrow-right`,class:`versioning-button`,slot:`endContent`,design:`Transparent`,icon:`navigation-right-arrow`,tooltip:this.nextButtonAccessibleName,accessibleName:this.nextButtonAccessibleName,"aria-keyshortcut":`Shift+Ctrl+Y`,disabled:this.currentVersion>=this.totalVersions,onClick:this._handleNextButtonClick,"data-ui5-versioning-button":`next`})]})]})}function De(){}function Oe(){}function L(){return(L=e((()=>{p(),a(),he(),C(),be(),_e(),T(),we(),ve()})))()}var R,z,B;function V(){return(V=e((()=>{l(),f(),ie(),ae(),g(),ne(),ce(),I(),se(),de(),pe(),L(),Ce(),R=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},B=z=class extends ue{constructor(){super(...arguments),this.currentVersion=0,this.totalVersions=0,this.loading=!1,this._isMenuOpen=!1,this._previousCurrentStep=0,this._previousTotalSteps=0,this.isFocused=!1,this._handleAIButtonKeydown=e=>{ee(e)&&this.loading&&this.fireDecoratorEvent(`stop-generation`)}}_onfocusin(e){super._onfocusin(e),this.isFocused=!0}_onfocusout(e){super._onfocusout(e),this.isFocused=!1}_manageVersionButtonsFocus(){let e=this.shadowRoot?.getElementById(`arrow-left`),t=this.shadowRoot?.getElementById(`arrow-right`),n=this.currentVersion<=1,r=this.currentVersion>=this.totalVersions;n&&e?setTimeout(()=>{t.focus()},0):r&&t&&setTimeout(()=>{e.focus()},0)}_handleAIButtonClick(e){if(e.target?.icon===`stop`)this.fireDecoratorEvent(`stop-generation`);else{let e=this.shadowRoot?.querySelector(`.ui5-input-ai-button`);this.fireDecoratorEvent(`button-click`),this.menu.opener=e,this.menu.open=!0,this.menu.horizontalAlign=`End`}}_handleVersionChange(e){this.fireDecoratorEvent(`version-change`,{backwards:e.detail.backwards}),this._manageVersionButtonsFocus()}_handlePreviousButtonClick(){this._handleVersionChange(new CustomEvent(`version-change`,{detail:{backwards:!0}}))}_handleNextButtonClick(){this._handleVersionChange(new CustomEvent(`version-change`,{detail:{backwards:!1}}))}_onMenuIconClick(e){this.fireDecoratorEvent(`item-click`,e.detail)}_onkeydown(e){super._onkeydown(e);let t=this.shadowRoot?.getElementById(`ai-menu-btn`);te(e)&&(t?.focus(),this.menu.opener=t,this.menu.open=!0,this.menu.horizontalAlign=`End`);let n=e.key===`Z`&&e.shiftKey&&e.ctrlKey,r=e.key===`Y`&&e.shiftKey&&e.ctrlKey;n?(e.preventDefault(),this._handlePreviousButtonClick()):r&&(e.preventDefault(),this._handleNextButtonClick())}get hasActions(){return!!this?.menu?.getSlottedNodes(`items`).length}get ariaLabel(){return this.accessibleName||!this.loading?z.i18nBundle.getText(xe):z.i18nBundle.getText(M)}get stopGeneratingTooltip(){return z.i18nBundle.getText(M)}get nextButtonAccessibleName(){return z.i18nBundle.getText(N)}get previousButtonAccessibleName(){return z.i18nBundle.getText(j)}get menu(){return this.shadowRoot?.querySelector(`[ui5-menu]`)}},R([v({type:Number})],B.prototype,`currentVersion`,void 0),R([v({type:Number})],B.prototype,`totalVersions`,void 0),R([v({type:Boolean})],B.prototype,`loading`,void 0),R([v({type:Boolean})],B.prototype,`_isMenuOpen`,void 0),R([oe({type:HTMLElement,invalidateOnChildChange:!0})],B.prototype,`actions`,void 0),B=z=R([u({tag:`ui5-ai-input`,languageAware:!0,renderer:c,template:Te,styles:[F,le,fe,me]}),x(`button-click`,{cancelable:!0}),x(`item-click`),x(`stop-generation`),x(`version-change`)],B),B.define()})))()}var H;function U(){return(U=e((()=>{V(),y(),H=re(`ui5-ai-input`,[`accessibleDescription`,`accessibleDescriptionRef`,`accessibleName`,`accessibleNameRef`,`currentVersion`,`filter`,`maxlength`,`name`,`placeholder`,`totalVersions`,`type`,`value`,`valueState`],[`disabled`,`loading`,`noTypeahead`,`open`,`readonly`,`required`,`showClearIcon`,`showSuggestions`],[`actions`,`icon`,`valueStateMessage`],[`button-click`,`change`,`close`,`input`,`item-click`,`open`,`select`,`selection-change`,`stop-generation`,`version-change`]),H.displayName=`Input`;try{H.displayName=`Input`,H.__docgenInfo={description:`The \`Input\` component extends the standard \`ui5-input\` with **AI Writing Assistant** capabilities.

### Structure

The \`Input\` consists of the following main parts:

- **Input Field** – Inherits all standard Input behaviors.
- **AI Action Button** – Appears when focused or loading, providing access to AI-related actions or stopping generation.

The component automatically determines which elements to render based on its internal state:
- The AI Button is only shown when there are available \`actions\`.
- The version navigation appears only when \`totalVersions > 1\`.

### Keyboard Support

- **Shift + F4** — Opens the AI menu.
- **Ctrl + Shift + Z / Y** — Navigates backward/forward between AI-generated versions.



__Note:__ This is a UI5 Web Component! [Input UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ai/Input) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Input`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,methods:[],props:{actions:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:`Defines the items of the menu for the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="actions"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`actions`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:"Defines the suggestion items.\n\n**Note:** The suggestions would be displayed only if the `showSuggestions`\nproperty is set to `true`.\n\n**Note:** The `<ui5-suggestion-item>`, `<ui5-suggestion-item-group>` and `ui5-suggestion-item-custom` are recommended to be used as suggestion items.\n\n**Note:** Input with type `Number` does not support suggestions.\n\n__Supported Node Type/s:__ `Array<IInputSuggestionItem>`",name:`children`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},icon:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:`Defines the icon to be displayed in the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<IIcon>\``,name:`icon`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},valueStateMessage:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:`Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

**Note:** If the component has \`suggestionItems\`,
the \`valueStateMessage\` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-ai**.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`valueStateMessage`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onButtonClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when the user selects the AI button.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:`onButtonClick`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, never>) => void`}},onChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when the input operation has finished by pressing Enter or on focusout.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onChange`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, never>) => void`}},onClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when the suggestions picker is closed.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onClose`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, never>) => void`}},onInput:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onInput`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, never>) => void`}},onItemClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when an item from the AI actions menu is clicked.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onItemClick`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, MenuItemClickEventDetail>) => void`}},onOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when the suggestions picker is open.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onOpen`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, never>) => void`}},onSelect:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when some text has been selected.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onSelect`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, never>) => void`}},onSelectionChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when the user navigates to a suggestion item via the ARROW keys,
as a preview, before the final selection.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onSelectionChange`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, InputSelectionChangeEventDetail>) => void`}},onStopGeneration:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when the user selects the "Stop" button to stop ongoing AI text generation.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onStopGeneration`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, never>) => void`}},onVersionChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when the user selects the version navigation buttons.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onVersionChange`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, InputVersionChangeEventDetail>) => void`}},accessibleDescription:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines the accessible description of the component.

**Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-ai**.`,name:`accessibleDescription`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleDescriptionRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Receives id(or many ids) of the elements that describe the input.

**Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-ai**.`,name:`accessibleDescriptionRef`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-ai**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Receives id(or many ids) of the elements that label the input.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-ai**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},currentVersion:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Indicates the index of the currently displayed version.`,name:`currentVersion`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},filter:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines the filter type of the component.

**Note:** Available since [v2.19.0](https://github.com/UI5/webcomponents/releases/tag/v2.19.0) of **@ui5/webcomponents-ai**.`,name:`filter`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | InputSuggestionsFilter | "StartsWithPerTerm" | "StartsWith" | "Contains"`,value:[{value:`"None"`},{value:`"StartsWithPerTerm"`,description:`Defines filtering by first symbol of each word of item's text.`,fullComment:`Defines filtering by first symbol of each word of item's text.
@public`,tags:{public:``}},{value:`"StartsWith"`,description:`Defines filtering by starting symbol of item's text.`,fullComment:`Defines filtering by starting symbol of item's text.
@public`,tags:{public:``}},{value:`"Contains"`,description:`Defines contains filtering.`,fullComment:`Defines contains filtering.
@public`,tags:{public:``}},{value:`"None"`,description:`Removes any filtering applied while typing`,fullComment:`Removes any filtering applied while typing
@public`,tags:{public:``}},{value:`"StartsWithPerTerm"`},{value:`"StartsWith"`},{value:`"Contains"`}]}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines whether the AI Writing Assistant is currently loading.

When \`true\`, indicates that an AI action is in progress.`,name:`loading`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},maxlength:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Sets the maximum number of characters available in the input field.

**Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-ai**.`,name:`maxlength`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`number`}},name:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:`name`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},noTypeahead:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines whether the value will be autcompleted to match an item

**Note:** Available since [v1.4.0](https://github.com/UI5/webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents-ai**.`,name:`noTypeahead`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},open:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:"Defines whether the suggestions picker is open.\nThe picker will not open if the `showSuggestions` property is set to `false`, the input is disabled or the input is readonly.\nThe picker will close automatically and `close` event will be fired if the input is not in the viewport.\n\n**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.",name:`open`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},placeholder:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,name:`placeholder`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},readonly:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:`readonly`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},required:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines whether the component is required.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-ai**.`,name:`required`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},showClearIcon:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines whether the clear icon of the input will be shown.

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents-ai**.`,name:`showClearIcon`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},showSuggestions:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines whether the component should show suggestions, if such are present.`,name:`showSuggestions`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},totalVersions:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Indicates the total number of result versions available.

When not set or set to 0, the versioning will be hidden.`,name:`totalVersions`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},type:{defaultValue:{value:`"Text"`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines the HTML type of the component.

**Notes:**

- The particular effect of this property differs depending on the browser
and the current language settings, especially for type \`Number\`.
- The property is mostly intended to be used with touch devices
that use different soft keyboard layouts depending on the given input type.
- Type \`Number\` does not support suggestions.`,name:`type`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`"Text"`},type:{name:`enum`,raw:`InputType | "Text" | "Email" | "Number" | "Password" | "Tel" | "URL" | "Search"`,value:[{value:`"Text"`,description:`Defines a one-line text input field:`,fullComment:`Defines a one-line text input field:
@public`,tags:{public:``}},{value:`"Email"`,description:`Used for input fields that must contain an e-mail address.`,fullComment:`Used for input fields that must contain an e-mail address.
@public`,tags:{public:``}},{value:`"Number"`,description:`Defines a numeric input field.`,fullComment:`Defines a numeric input field.
@public`,tags:{public:``}},{value:`"Password"`,description:`Defines a password field.`,fullComment:`Defines a password field.
@public`,tags:{public:``}},{value:`"Tel"`,description:`Used for input fields that should contain a telephone number.`,fullComment:`Used for input fields that should contain a telephone number.
@public`,tags:{public:``}},{value:`"URL"`,description:`Used for input fields that should contain a URL address.`,fullComment:`Used for input fields that should contain a URL address.
@public`,tags:{public:``}},{value:`"Search"`,description:`Used for input fields that should contain a search term.`,fullComment:`Used for input fields that should contain a search term.
@since 2.0.0
@public`,tags:{since:`2.0.0`,public:``}},{value:`"Text"`},{value:`"Email"`},{value:`"Number"`},{value:`"Password"`},{value:`"Tel"`},{value:`"URL"`},{value:`"Search"`}]}},value:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:`value`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{},type:{name:`string`}},valueState:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines the value state of the component.`,name:`valueState`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Critical" | ValueState | "Positive" | "Negative" | "Information"`,value:[{value:`"None"`},{value:`"Critical"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`},{value:`"Negative"`},{value:`"Information"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of __@ui5/webcomponents-ai__.`,experimental:`The **@ui5/webcomponents-ai** package is under active development and considered experimental. Component APIs are subject to change.
Furthermore, the package supports **Horizon** themes only.`}}}catch{}})))()}var ke=t({Default:()=>q,WithFakeStream:()=>Z,__namedExportsOrder:()=>Q,default:()=>K}),W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{D(),W=n(),A(),U(),G=b(),K={title:`Input`,component:H,argTypes:{actions:{control:{disable:!0}},children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},tags:[`package:@ui5/webcomponents-ai`,`experimental`]},q={render(e){return(0,G.jsx)(H,{...e,actions:(0,G.jsx)(O,{text:`Generate`,"data-action":`generate`},`generate`)})}},J={en:`Innovation managers lead with creativity.`,bg:`Мениджърите по иновации водят с креативност.`,de:`Innovationsmanager führen mit Kreativität.`,expanded:`They combine creative ideas with strategic action.`,simplified:`They lead using creativity.`,summarized:`Driving innovation creatively.`},Y=[{text:`Regenerate`,action:`regenerate`,processingLabel:`Regenerating text...`,completedLabel:`Regenerated text`,textKey:`en`,replaces:`generate`},{text:`Fix spelling and grammar`,action:`fixSpelling`,processingLabel:`Fixing spelling and grammar...`,completedLabel:`Fixed spelling and grammar`,textKey:`en`},{text:`Rewrite text`,isGroup:!0,children:[{text:`Simplify`,action:`simplify`,processingLabel:`Simplifying text...`,completedLabel:`Simplified text`,textKey:`simplified`,isChild:!0},{text:`Expand`,action:`expand`,processingLabel:`Expanding text...`,completedLabel:`Expanded text`,textKey:`expanded`,isChild:!0},{text:`Summarize`,action:`summarize`,processingLabel:`Summarizing text...`,completedLabel:`Summarized text`,textKey:`summarized`,isChild:!0}]},{text:`Translate`,isGroup:!0,children:[{text:`English`,action:`translateEN`,processingLabel:`Translating to English...`,completedLabel:`Translated to English`,textKey:`en`,isChild:!0},{text:`German`,action:`translateDE`,processingLabel:`Translating to German...`,completedLabel:`Translated to German`,textKey:`de`,isChild:!0},{text:`Bulgarian`,action:`translateBG`,processingLabel:`Translating to Bulgarian...`,completedLabel:`Translated to Bulgarian`,textKey:`bg`,isChild:!0}]}],X=`Write your title`,Z={name:`with Stream`,render:e=>{let[t,n]=(0,W.useState)([]),[r,i]=(0,W.useState)(-1),[a,o]=(0,W.useState)(X),s=t.length>0,c=(0,W.useRef)(``),{value:l,isTyping:u,isProcessing:d,setValue:f,startStream:p,stopStream:m}=k(),h=e=>{i(t=>e.detail.backwards?t-1:t+1)},g=e=>{let{action:t,processingLabel:r,textKey:a}=e.detail.item.dataset;if(d||!t)return;c.current=t;let s=J[a??`en`];switch(t){case`simplify`:s=J.simplified;break;case`expand`:s=J.expanded;break;case`summarize`:s=J.expanded;break;case`translateEN`:s=J.en;break;case`translateDE`:s=J.de;break;case`translateBG`:s=J.bg}o(r),p({text:s,onProcessingComplete:()=>{o(X)},onComplete:e=>{n(n=>[...n,{action:t,endAction:`completed`,timestamp:new Date().toISOString(),value:e}]),i(e=>e+1),f(``)}})},_=e=>{m(),n(t=>[...t,{action:c.current,endAction:`stopped`,timestamp:new Date().toISOString(),value:e.target.value}]),i(e=>e+1),f(``)},v=e=>{f(e.target.value)};return(0,G.jsx)(H,{...e,style:{width:`400px`},value:d?``:l||t[r]?.value||``,placeholder:a,currentVersion:r+1,totalVersions:t.length,loading:d||u,onVersionChange:h,onStopGeneration:_,onItemClick:g,onInput:v,actions:(0,G.jsx)(G.Fragment,{children:s?Y.map((e,t)=>e.replaces&&!s?null:e.isGroup&&Array.isArray(e.children)?(0,G.jsx)(O,{text:e.text,children:e.children.map(e=>(0,G.jsx)(O,{text:e.text,"data-action":e.action,"data-processing-label":e.processingLabel,"data-completed-label":e.completedLabel,"data-text-key":e.textKey},e.text))},t):(0,G.jsx)(O,{text:e.text,"data-action":e.action,"data-processing-label":e.processingLabel,"data-completed-label":e.completedLabel,"data-text-key":e.textKey},e.text)):(0,G.jsx)(O,{text:`Generate`,"data-action":`generate`,"data-processing-label":`Processing...`},`generate`)})})}},Q=[`Default`,`WithFakeStream`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Input {...args} actions={<MenuItem key="generate" text="Generate" data-action="generate" />} />;
  }
}`,...q.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'with Stream',
  render: args => {
    const [versionHistory, setVersionHistory] = useState<VersionHistoryItem[]>([]);
    const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1);
    const [placeholder, setPlaceholder] = useState(initialPlaceholder);
    const hasHistory = versionHistory.length > 0;
    const currentActionRef = useRef<string>('');
    const {
      value,
      isTyping,
      isProcessing,
      setValue,
      startStream,
      stopStream
    } = useFakeStream();
    const handleVersionChange: InputPropTypes['onVersionChange'] = e => {
      setCurrentHistoryIndex(prev => e.detail.backwards ? prev - 1 : prev + 1);
    };
    const handleItemClick: InputPropTypes['onItemClick'] = e => {
      const {
        action,
        processingLabel,
        textKey
      } = e.detail.item.dataset;
      if (isProcessing || !action) {
        return;
      }
      currentActionRef.current = action;
      let text = SAMPLE_TEXTS[textKey ?? 'en'];
      switch (action) {
        case 'simplify':
          {
            text = SAMPLE_TEXTS.simplified;
            break;
          }
        case 'expand':
          {
            text = SAMPLE_TEXTS.expanded;
            break;
          }
        case 'summarize':
          {
            text = SAMPLE_TEXTS.expanded;
            break;
          }
        case 'translateEN':
          {
            text = SAMPLE_TEXTS.en;
            break;
          }
        case 'translateDE':
          {
            text = SAMPLE_TEXTS.de;
            break;
          }
        case 'translateBG':
          {
            text = SAMPLE_TEXTS.bg;
            break;
          }
      }
      setPlaceholder(processingLabel);
      startStream({
        text,
        onProcessingComplete: () => {
          setPlaceholder(initialPlaceholder);
        },
        onComplete: fullText => {
          setVersionHistory(prev => [...prev, {
            action,
            endAction: 'completed',
            timestamp: new Date().toISOString(),
            value: fullText
          }]);
          setCurrentHistoryIndex(prev => prev + 1);
          setValue('');
        }
      });
    };
    const handleStopGeneration: InputPropTypes['onStopGeneration'] = e => {
      stopStream();
      setVersionHistory(prev => [...prev, {
        action: currentActionRef.current,
        endAction: 'stopped',
        timestamp: new Date().toISOString(),
        value: e.target.value
      }]);
      setCurrentHistoryIndex(prev => prev + 1);
      setValue('');
    };
    const handleInput: InputPropTypes['onInput'] = e => {
      setValue(e.target.value);
    };
    return <Input {...args} style={{
      width: '400px'
    }} value={isProcessing ? '' : value || versionHistory[currentHistoryIndex]?.value || ''} placeholder={placeholder} currentVersion={currentHistoryIndex + 1} totalVersions={versionHistory.length} loading={isProcessing || isTyping} onVersionChange={handleVersionChange} onStopGeneration={handleStopGeneration} onItemClick={handleItemClick} onInput={handleInput} actions={<>
            {hasHistory ? MENU_CONFIG.map((configItem, index) => {
        if (configItem.replaces && !hasHistory) {
          return null;
        }
        if (configItem.isGroup && Array.isArray(configItem.children)) {
          return <MenuItem key={index} text={configItem.text}>
                      {configItem.children.map(child => <MenuItem key={child.text} text={child.text} data-action={child.action} data-processing-label={child.processingLabel} data-completed-label={child.completedLabel} data-text-key={child.textKey} />)}
                    </MenuItem>;
        }
        return <MenuItem key={configItem.text} text={configItem.text} data-action={configItem.action} data-processing-label={configItem.processingLabel} data-completed-label={configItem.completedLabel} data-text-key={configItem.textKey} />;
      }) : <MenuItem key="generate" text="Generate" data-action="generate" data-processing-label="Processing..." />}
          </>} />;
  }
}`,...Z.parameters?.docs?.source}}}})))()}export{$ as i,ke as n,Z as r,q as t};