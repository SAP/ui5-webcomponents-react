import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{B as t,I as n,M as r,X as i,Y as a}from"./CustomElementsScopeUtils-G6VaTXHT.js";import{s as o,u as s}from"./Icon-xsFI9tdw.js";import{a as c,c as ee,d as l,f as u,i as d,l as f,m as te,n as p,o as m,p as ne,r as h,s as re,t as ie,u as g}from"./jsx-runtime-NHZLEOw0.js";import{I as ae,n as oe,q as se}from"./Keys-DqJfIghV.js";import{n as _,t as v}from"./withWebComponent-CQvqGaAL.js";import{n as ce,t as le}from"./event-strict-C4u0wMzB.js";import{n as ue,t as y}from"./slot-strict-BSUUcNBc.js";import{l as de,n as fe,t as pe,u as me}from"./Button-C69-ub8X.js";import{Vr as he,_n as ge,gn as _e,nn as ve}from"./i18n-defaults-Yid-Aku_.js";import{n as b,t as x}from"./parameters-bundle.css-sD0-XBn7.js";import{a as S,i as ye,n as be,o as C,r as xe,t as w}from"./Search-jevZ7riW.js";import{i as Se,r as Ce}from"./ShellBar-BxSxTd7u.js";function we(){return d(`a`,{class:`ui5-shellbar-branding-root`,href:this.parsedRef,target:this.target,role:this._role,tabIndex:0,"aria-label":this.accessibleNameText,onClick:this._onclick,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,children:[h(`span`,{class:`ui5-shellbar-logo`,children:h(`slot`,{name:`logo`})}),!this._isSBreakPoint&&h(`bdi`,{class:`ui5-shellbar-title`,children:h(`slot`,{})})]})}function T(){return(T=e((()=>{p()})))()}var E;function D(){return(D=e((()=>{i(),c(),x(),a(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>m),a(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>b,`host`),E=`:host(:not([hidden])) .ui5-shellbar-branding-root{text-decoration:none}:host(:not([hidden])){display:inline}.ui5-shellbar-branding-root{overflow:hidden;display:flex;align-items:center;height:2.25rem;padding-block:.125rem;padding-inline:.25rem .5rem;box-sizing:border-box;cursor:pointer;background:var(--sapButton_Lite_Background);border:1px solid var(--sapButton_Lite_BorderColor);color:var(--sapShell_TextColor);margin-inline-start:.125rem;margin-inline-end:.5rem}.ui5-shellbar-branding-root:focus{outline:var(--_ui5_shellbar_logo_outline);outline-offset:calc(-1 * var(--sapContent_FocusWidth));border-radius:var(--_ui5_shellbar_logo_border_radius)}.ui5-shellbar-branding-root:hover{box-shadow:var(--_ui5_shellbar_button_box_shadow);border-radius:var(--_ui5_shellbar_logo_border_radius)}.ui5-shellbar-branding-root:active:focus{background:var(--sapShell_Active_Background);border:1px solid var(--sapButton_Lite_Active_BorderColor);color:var(--sapShell_Active_TextColor)}.ui5-shellbar-title{display:inline-block;font-family:var(--sapFontSemiboldDuplexFamily);margin:0;font-size:var(--_ui5_shellbar_menu_button_title_font_size);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--sapShell_SubBrand_TextColor);margin-inline-start:.25rem}.ui5-shellbar-logo-area{overflow:hidden;display:flex;align-items:center;padding:.125rem .25rem;box-sizing:border-box;cursor:pointer;background:var(--sapButton_Lite_Background);border:1px solid var(--sapButton_Lite_BorderColor);color:var(--sapShell_TextColor);margin-inline-start:.125rem}::slotted([slot="logo"]){max-height:1.875rem;width:auto;padding-block:.0625rem;padding-inline:.25rem;vertical-align:middle}::slotted([slot="logo"]):active{pointer-events:none}
`})))()}var O,k;function A(){return(A=e((()=>{te(),f(),ue(),l(),re(),se(),le(),T(),D(),O=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},k=class extends ne{constructor(){super(...arguments),this._isSBreakPoint=!1}get parsedRef(){return this.href&&this.href.length>0?this.href:void 0}get _role(){return this.href&&this.href.length>0?`link`:`button`}get accessibleNameText(){return this.accessibleName?this.accessibleName:(this.shadowRoot?.querySelector(`slot:not([name])`))?.assignedNodes({flatten:!0}).find(e=>e.nodeType===Node.TEXT_NODE&&e.textContent?.trim())?.textContent.trim()}_fireClick(){this.fireDecoratorEvent(`click`)}_activate(e){e.stopPropagation(),this._fireClick()}_getAnchor(){return this.shadowRoot?.querySelector(`a`)}_onclick(e){this._activate(e)}_onkeydown(e){ae(e)&&!this.href?(e.preventDefault(),this._getAnchor()?.click()):oe(e)&&e.preventDefault()}_onkeyup(e){oe(e)&&this._getAnchor()?.click()}},O([g()],k.prototype,`href`,void 0),O([g()],k.prototype,`target`,void 0),O([g()],k.prototype,`accessibleName`,void 0),O([g({type:Boolean})],k.prototype,`_isSBreakPoint`,void 0),O([y({type:HTMLElement,default:!0})],k.prototype,`content`,void 0),O([y({type:HTMLElement})],k.prototype,`logo`,void 0),k=O([u({tag:`ui5-shellbar-branding`,languageAware:!0,renderer:ee,template:we,styles:E}),ce(`click`,{bubbles:!0})],k),k.define()})))()}var j;function M(){return(M=e((()=>{A(),v(),j=_(`ui5-shellbar-branding`,[`accessibleName`,`href`,`target`],[],[`logo`],[`click`]),j.displayName=`ShellBarBranding`;try{j.displayName=`ShellBarBranding`,j.__docgenInfo={description:"The `ShellBarBranding` component is intended to be placed inside the branding slot of the\n`ShellBar` component. Its content has higher priority than the `primaryTitle` property\nand the `logo` slot of `ShellBar`.\n\n__Note:__ This is a UI5 Web Component! [ShellBarBranding UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/ShellBarBranding) | [Repository](https://github.com/UI5/webcomponents)",displayName:`ShellBarBranding`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ShellBarBranding/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarBranding/index.d.ts`,name:`ShellBarBrandingPropTypes`}],description:`Defines the title for the ui5-shellbar-branding component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarBranding/index.d.ts`,name:`ShellBarBrandingPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},logo:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarBranding/index.d.ts`,name:`ShellBarBrandingPropTypes`}],description:"Defines the logo of the `ShellBar`.\nFor example, you can use `ui5-avatar` or `img` elements as logo.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"logo\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).\n\n__Supported Node Type/s:__ `Array<HTMLElement>`",name:`logo`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarBranding/index.d.ts`,name:`ShellBarBrandingPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarBranding/index.d.ts`,name:`ShellBarBrandingPropTypes`}],description:`Fired, when the logo is activated.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarBranding/index.d.ts`,name:`ShellBarBrandingPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ShellBarBrandingDomRef, never>) => void`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarBranding/index.d.ts`,name:`ShellBarBrandingAttributes`}],description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarBranding/index.d.ts`,name:`ShellBarBrandingAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},href:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarBranding/index.d.ts`,name:`ShellBarBrandingAttributes`}],description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:`href`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarBranding/index.d.ts`,name:`ShellBarBrandingAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},target:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarBranding/index.d.ts`,name:`ShellBarBrandingAttributes`}],description:"Defines the component target.\n\n**Notes:**\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**This property must only be used when the `href` property is set.**",name:`target`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarBranding/index.d.ts`,name:`ShellBarBrandingAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.12.0](https://github.com/UI5/webcomponents/releases/tag/v2.12.0) of __@ui5/webcomponents-fiori__.`,experimental:``}}}catch{}})))()}var N;function P(){return(P=e((()=>{Se(),v(),N=_(`ui5-shellbar-item`,[`accessibilityAttributes`,`count`,`icon`,`text`],[],[],[`click`]),N.displayName=`ShellBarItem`;try{N.displayName=`ShellBarItem`,N.__docgenInfo={description:`The \`ShellBarItem\` represents a custom item for \`ShellBar\`.



__Note:__ This is a UI5 Web Component! [ShellBarItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/ShellBarItem) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`ShellBarItem`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ShellBarItem/index.d.ts`,methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarItem/index.d.ts`,name:`ShellBarItemPropTypes`}],description:`Fired when the item is clicked.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarItem/index.d.ts`,name:`ShellBarItemPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ShellBarItemDomRef, ShellBarItemClickEventDetail>) => void`}},accessibilityAttributes:{defaultValue:{value:`{}`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarItem/index.d.ts`,name:`ShellBarItemAttributes`}],description:`Defines additional accessibility attributes on Shellbar Items.

The accessibility attributes support the following values:

- **expanded**: Indicates whether the button, or another grouping element it controls,
is currently expanded or collapsed.
Accepts the following string values: \`true\` or \`false\`.

- **hasPopup**: Indicates the availability and type of interactive popup element,
such as menu or dialog, that can be triggered by the button.

- **controls**: Identifies the element (or elements) whose contents
or presence are controlled by the component.
Accepts a lowercase string value, referencing the ID of the element it controls.

**Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-fiori**.`,name:`accessibilityAttributes`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarItem/index.d.ts`,name:`ShellBarItemAttributes`},required:!1,tags:{default:`{}`},type:{name:`ShellBarItemAccessibilityAttributes`}},count:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarItem/index.d.ts`,name:`ShellBarItemAttributes`}],description:`Defines the count displayed in badge.`,name:`count`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarItem/index.d.ts`,name:`ShellBarItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},icon:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarItem/index.d.ts`,name:`ShellBarItemAttributes`}],description:`Defines the item's icon.`,name:`icon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarItem/index.d.ts`,name:`ShellBarItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarItem/index.d.ts`,name:`ShellBarItemAttributes`}],description:`Defines the item text.

**Note:** The text is only displayed inside the overflow popover list view.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarItem/index.d.ts`,name:`ShellBarItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}function Te(){return xe.call(this,Ee)}function Ee(){return h(ie,{children:d(`header`,{slot:`header`,class:`ui5-search-popup-searching-header`,children:[h(`div`,{class:`ui5-shellbar-search-field-wrapper`,children:S.call(this,{forceExpanded:!0})}),h(pe,{design:de.Transparent,onClick:this._handleCancel,children:this.cancelButtonText})]})})}function F(){return(F=e((()=>{p(),fe(),me(),ye(),C()})))()}function De(){return d(ie,{children:[S.call(this),Te.call(this)]})}function I(){return(I=e((()=>{p(),C(),F()})))()}var L;function R(){return(R=e((()=>{i(),c(),x(),a(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>m),a(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>b,`host`),L=`:host(:not([collapsed])){min-width:13rem}
`})))()}var z,B,V;function H(){return(H=e((()=>{f(),l(),be(),n(),I(),R(),he(),z=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},V=B=class extends w{constructor(){super(...arguments),this.autoOpen=!1}_handleSearchIconPress(){r()&&this.open?(this._handleSearchEvent(),this._closePopupAndResetState()):(super._handleSearchIconPress(),this.collapsed?this.collapsed=!1:this.value||(this.collapsed=!0))}_handleEnter(){!this.value&&!this.collapsed?(this._handleSearchEvent(),this.collapsed=!0,setTimeout(()=>{this.focus()},0)):super._handleEnter()}_onFocusOutSearch(e){r()||super._onFocusOutSearch(e)}_handleInput(e){super._handleInput(e),r()&&(this._performItemSelectionOnMobile=this._shouldPerformSelectionOnMobile(e.inputType))}get _effectiveIconTooltip(){return this.collapsed?B.i18nBundle.getText(_e):this.value?B.i18nBundle.getText(ve):B.i18nBundle.getText(ge)}get nativeInput(){let e=this.shadowRoot;return r()?e?.querySelector(`[ui5-responsive-popover] input`):super.nativeInput}getSearchButtonDomRef(){return this.shadowRoot?.querySelector(`.ui5-shell-search-field-button`)??null}_onfocusin(){super._onfocusin(),this.autoOpen&&(this._setInternalOpen(!0),this.fireDecoratorEvent(`open`))}onBeforeRendering(){super.onBeforeRendering(),r()&&(this.collapsed=!0)}},z([g({type:Boolean})],V.prototype,`autoOpen`,void 0),V=B=z([u({tag:`ui5-shellbar-search`,template:De,styles:[w.styles,L]})],V),V.define()})))()}var U;function W(){return(W=e((()=>{H(),v(),U=_(`ui5-shellbar-search`,[`accessibleDescription`,`accessibleName`,`placeholder`,`scopeValue`,`value`],[`autoOpen`,`fieldLoading`,`loading`,`noTypeahead`,`open`,`showClearIcon`],[`action`,`filterButton`,`illustration`,`messageArea`,`scopes`],[`close`,`input`,`open`,`scope-change`,`search`]),U.displayName=`ShellBarSearch`;try{U.displayName=`ShellBarSearch`,U.__docgenInfo={description:`Search field for the ShellBar component.

__Note:__ This is a UI5 Web Component! [ShellBarSearch UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/ShellBarSearch) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`ShellBarSearch`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,methods:[],props:{action:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`}],description:`Defines the popup footer action button.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="action"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<Button>\``,name:`action`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`}],description:`Defines the Search suggestion items.

__Supported Node Type/s:__ \`Array<SearchItem | SearchItemGroup>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},filterButton:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`}],description:`Defines the filter button slot, used to display an additional filtering button.
This slot is intended for passing a \`ui5-button\` with a filter icon to provide extended filtering options.

**Note:** Scope button and Filter button are mutually exclusive.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="filterButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.11.0](https://github.com/UI5/webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents-fiori**.

__Supported Node Type/s:__ \`Array<Button>\``,name:`filterButton`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},illustration:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`}],description:`Defines the illustrated message to be shown in the popup.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="illustration"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<IllustratedMessage>\``,name:`illustration`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},messageArea:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`}],description:`Defines the illustrated message to be shown in the popup.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="messageArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<SearchMessageArea>\``,name:`messageArea`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},scopes:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`}],description:`Defines the component scope options.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="scopes"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<ISearchScope>\``,name:`scopes`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`}],description:`Fired when the popup is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ShellBarSearchDomRef, never>) => void`}},onInput:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`}],description:`Fired when typing in input or clear icon is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onInput`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ShellBarSearchDomRef, never>) => void`}},onOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`}],description:`Fired when the popup is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ShellBarSearchDomRef, never>) => void`}},onScopeChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`}],description:`Fired when the scope has changed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onScopeChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ShellBarSearchDomRef, SearchFieldScopeSelectionChangeDetails>) => void`}},onSearch:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`}],description:`Fired when the user has triggered search with Enter key or Search Button press.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onSearch`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ShellBarSearchDomRef, never>) => void`}},accessibleDescription:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`}],description:`Defines the accessible ARIA description of the field.`,name:`accessibleDescription`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`}],description:`Defines the accessible ARIA name of the component.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},autoOpen:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`}],description:`Indicates whether the suggestions popover should be opened on focus.`,name:`autoOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},fieldLoading:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`}],description:`Indicates whether a loading indicator should be shown in the input field.

**Note:** Available since [v2.19.0](https://github.com/UI5/webcomponents/releases/tag/v2.19.0) of **@ui5/webcomponents-fiori**.`,name:`fieldLoading`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`}],description:`Indicates whether a loading indicator should be shown in the popup.`,name:`loading`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},noTypeahead:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`}],description:`Defines whether the value will be autcompleted to match an item.`,name:`noTypeahead`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},open:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`}],description:`Indicates whether the items picker is open.`,name:`open`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},placeholder:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`}],description:`Defines a short hint intended to aid the user with data entry when the
component has no value.

**Note:** When \`scopes\` are defined and no custom placeholder is provided,
the placeholder automatically displays "Search in: \\{selected scope name\\}".
Setting a custom placeholder will override this automatic behavior.`,name:`placeholder`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},scopeValue:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`}],description:`Defines the value of the component:

Applications are responsible for setting the correct scope value.

**Note:** If the given value does not match any existing scopes,
no scope will be selected and the SearchField scope component will be displayed as empty.

**Note:** Available since [v2.18.0](https://github.com/UI5/webcomponents/releases/tag/v2.18.0) of **@ui5/webcomponents-fiori**.`,name:`scopeValue`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`},required:!1,tags:{},type:{name:`string`}},showClearIcon:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`}],description:`Defines whether the clear icon of the search will be shown.`,name:`showClearIcon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},value:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`}],description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ShellBarSearch/index.d.ts`,name:`ShellBarSearchAttributes`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of __@ui5/webcomponents-fiori__.`,experimental:``}}}catch{}})))()}var G;function K(){return(K=e((()=>{Ce(),v(),G=_(`ui5-shellbar-spacer`,[],[],[],[]),G.displayName=`ShellBarSpacer`;try{G.displayName=`ShellBarSpacer`,G.__docgenInfo={description:"The `ShellBarSpacer` is an element, used for visual separation between the two content parts of the `ShellBar`.\n**Note:** The `ShellBarSpacer` component is in an experimental state and is a subject to change.\n\n__Note:__ This is a UI5 Web Component! [ShellBarSpacer UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/ShellBarSpacer) | [Repository](https://github.com/UI5/webcomponents)",displayName:`ShellBarSpacer`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ShellBarSpacer/index.d.ts`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of __@ui5/webcomponents-fiori__.`,abstract:``}}}catch{}})))()}var q,J,Y;function X(){return(X=e((()=>{o(),q=`menu2`,J=`M1 4.01a.96.96 0 0 1-.703-.298A.969.969 0 0 1 0 3.005c0-.293.099-.534.297-.722A.985.985 0 0 1 1 2h14a.97.97 0 0 1 .719.283.981.981 0 0 1 .281.722.996.996 0 0 1-.281.707.944.944 0 0 1-.719.298H1Zm0 4.995c-.27 0-.505-.1-.703-.298A.969.969 0 0 1 0 8c0-.293.099-.534.297-.723A.985.985 0 0 1 1 6.995h14a.97.97 0 0 1 .719.282c.187.189.281.43.281.723a.996.996 0 0 1-.281.707.944.944 0 0 1-.719.298H1ZM1 14c-.27 0-.505-.1-.703-.298A.969.969 0 0 1 0 12.995c0-.293.099-.534.297-.723A.986.986 0 0 1 1 11.99h14c.292 0 .531.095.719.283.187.189.281.43.281.723a.996.996 0 0 1-.281.707A.945.945 0 0 1 15 14H1Z`,Y=`0 0 16 16`,s(q,{pathData:J,ltr:!1,viewBox:Y,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})))()}var Z,Q,$;function Oe(){return(Oe=e((()=>{o(),Z=`menu2`,Q=`M15.25 12.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5h14.5Zm0-5.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5h14.5Zm0-5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5h14.5Z`,$=`0 0 16 16`,s(Z,{pathData:Q,ltr:!1,viewBox:$,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})))()}var ke;function Ae(){return(Ae=e((()=>{t(),X(),Oe(),ke=`menu2`})))()}var je,Me,Ne;function Pe(){return(Pe=e((()=>{o(),je=`sys-help`,Me=`M8 0c1.104 0 2.146.208 3.125.625.98.417 1.828.984 2.547 1.703a7.979 7.979 0 0 1 1.703 2.547c.417.98.625 2.02.625 3.125 0 1.104-.208 2.14-.625 3.11a8.217 8.217 0 0 1-1.703 2.546 7.853 7.853 0 0 1-2.547 1.719c-.98.417-2.02.625-3.125.625a7.785 7.785 0 0 1-3.11-.625 8.081 8.081 0 0 1-2.546-1.719A8.08 8.08 0 0 1 .625 11.11 7.786 7.786 0 0 1 0 8c0-1.104.208-2.146.625-3.125.417-.98.99-1.828 1.719-2.547A8.214 8.214 0 0 1 4.89.625 7.785 7.785 0 0 1 8 0Zm0 15c.958 0 1.865-.182 2.719-.547a7.027 7.027 0 0 0 2.234-1.5 7.027 7.027 0 0 0 1.5-2.234C14.818 9.865 15 8.959 15 8c0-.958-.182-1.865-.547-2.719a7.026 7.026 0 0 0-1.5-2.234 7.026 7.026 0 0 0-2.234-1.5A6.853 6.853 0 0 0 8 1c-.958 0-1.865.182-2.719.547a7.026 7.026 0 0 0-2.234 1.5 7.026 7.026 0 0 0-1.5 2.234A6.853 6.853 0 0 0 1 8c0 .958.182 1.865.547 2.719a7.026 7.026 0 0 0 1.5 2.234 7.026 7.026 0 0 0 2.234 1.5C6.135 14.818 7.041 15 8 15ZM7.906 3.25c.896 0 1.61.224 2.14.672.532.448.798 1.026.798 1.734 0 .459-.136.839-.406 1.14-.271.303-.532.6-.782.891a4.958 4.958 0 0 1-.469.47 1.719 1.719 0 0 0-.359.421 1.706 1.706 0 0 0-.203.563c-.042.218-.042.505 0 .859H7.094c0-.333.005-.62.015-.86a1.89 1.89 0 0 1 .141-.656c.083-.198.208-.39.375-.578.167-.187.396-.406.688-.656l.656-.531c.146-.104.291-.271.437-.5.146-.23.219-.448.219-.657 0-.312-.151-.614-.453-.906C8.87 4.365 8.479 4.22 8 4.22c-.48 0-.875.15-1.188.453-.312.302-.51.693-.593 1.172H4.687c0-.292.079-.594.235-.907.156-.312.375-.593.656-.843s.62-.453 1.016-.61a3.546 3.546 0 0 1 1.312-.234ZM8 11c.292 0 .531.094.719.281A.974.974 0 0 1 9 12c0 .27-.094.505-.281.703A.947.947 0 0 1 8 13a.961.961 0 0 1-.703-.297A.961.961 0 0 1 7 12c0-.292.099-.531.297-.719A.988.988 0 0 1 8 11Z`,Ne=`0 0 16 16`,s(je,{pathData:Me,ltr:!0,viewBox:Ne,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})))()}var Fe,Ie,Le;function Re(){return(Re=e((()=>{o(),Fe=`sys-help`,Ie=`M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM8 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-8a2.99 2.99 0 0 1 .75 5.884v.366a.75.75 0 0 1-1.5 0V8.231c0-.547.407-.716.904-.757.498-.042 1.346-.54 1.346-1.483A1.49 1.49 0 0 0 8 4.5c-.883 0-1.414.582-1.504 1.567A.75.75 0 0 1 5 5.991 2.99 2.99 0 0 1 8 3Z`,Le=`0 0 16 16`,s(Fe,{pathData:Ie,ltr:!0,viewBox:Le,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})))()}var ze;function Be(){return(Be=e((()=>{t(),Pe(),Re(),ze=`sys-help`})))()}export{G as a,W as c,j as d,M as f,ke as i,N as l,ze as n,K as o,Ae as r,U as s,Be as t,P as u};