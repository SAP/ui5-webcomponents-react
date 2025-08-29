import{l as D,c,p as B,d as A,s as r,A as I,m as S,b7 as V,ah as E,b5 as C,ba as q,b9 as W,w as N,a1 as L,_ as M,af as k,f as _,ad as T}from"./iframe-BwRZ6zH2.js";import{d as P}from"./parameters-bundle.css-34zgZIqy.js";import{S as z,a as U,b as O}from"./Search-cvbMomQ1.js";import{b1 as F,aj as H,b2 as $}from"./i18n-defaults-Cjp7arcT.js";function j(){return D("a",{class:"ui5-shellbar-branding-root",href:this.parsedRef,target:this.target,role:this._role,tabIndex:0,"aria-label":this.accessibleNameText,onClick:this._onclick,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,children:[c("span",{class:"ui5-shellbar-logo",children:c("slot",{name:"logo"})}),!this._isSBreakPoint&&c("bdi",{class:"ui5-shellbar-title",children:c("slot",{})})]})}B("@ui5/webcomponents-theming","sap_horizon",async()=>A);B("@ui5/webcomponents-fiori","sap_horizon",async()=>P);const G=`:host(:not([hidden])) .ui5-shellbar-branding-root{text-decoration:none}:host(:not([hidden])){display:inline}.ui5-shellbar-branding-root{overflow:hidden;display:flex;align-items:center;padding-block:.25rem;padding-inline:.25rem .5rem;box-sizing:border-box;cursor:pointer;background:var(--sapButton_Lite_Background);border:1px solid var(--sapButton_Lite_BorderColor);color:var(--sapShell_TextColor);margin-inline-start:.125rem;margin-inline-end:.5rem}.ui5-shellbar-branding-root:focus{outline:var(--_ui5-v2-13-3_shellbar_logo_outline);border-radius:var(--_ui5-v2-13-3_shellbar_logo_border_radius)}.ui5-shellbar-branding-root:hover{box-shadow:var(--_ui5-v2-13-3_shellbar_button_box_shadow);border-radius:var(--_ui5-v2-13-3_shellbar_logo_border_radius)}.ui5-shellbar-branding-root:active:focus{background:var(--sapShell_Active_Background);border:1px solid var(--sapButton_Lite_Active_BorderColor);color:var(--sapShell_Active_TextColor)}.ui5-shellbar-title{display:inline-block;font-family:var(--sapFontSemiboldDuplexFamily);margin:0;font-size:var(--_ui5-v2-13-3_shellbar_menu_button_title_font_size);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--sapShell_SubBrand_TextColor);margin-inline-start:.25rem}.ui5-shellbar-logo-area{overflow:hidden;display:flex;align-items:center;padding:.25rem .5rem .25rem .25rem;box-sizing:border-box;cursor:pointer;background:var(--sapButton_Lite_Background);border:1px solid var(--sapButton_Lite_BorderColor);color:var(--sapShell_TextColor);margin-inline-start:.125rem}::slotted([slot="logo"]){max-height:2rem;max-width:3.75rem;pointer-events:none;padding-inline:.25rem}
`;var u=function(n,e,o,a){var i=arguments.length,t=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,o):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,o,a);else for(var s=n.length-1;s>=0;s--)(l=n[s])&&(t=(i<3?l(t):i>3?l(e,o,t):l(e,o))||t);return i>3&&t&&Object.defineProperty(e,o,t),t};let p=class extends C{constructor(){super(...arguments),this._isSBreakPoint=!1}get parsedRef(){return this.href&&this.href.length>0?this.href:void 0}get _role(){return this.href&&this.href.length>0?"link":"button"}get accessibleNameText(){return this.accessibleName?this.accessibleName:this.shadowRoot?.querySelector("slot:not([name])")?.assignedNodes({flatten:!0}).find(o=>o.nodeType===Node.TEXT_NODE&&o.textContent?.trim())?.textContent.trim()}_fireClick(){this.fireDecoratorEvent("click")}_onclick(e){e.stopPropagation(),this._fireClick()}_onkeyup(e){q(e)&&this._fireClick()}_onkeydown(e){if(q(e)){e.preventDefault();return}W(e)&&this._fireClick()}};u([r()],p.prototype,"href",void 0);u([r()],p.prototype,"target",void 0);u([r()],p.prototype,"accessibleName",void 0);u([r({type:Boolean})],p.prototype,"_isSBreakPoint",void 0);u([I({type:HTMLElement,default:!0})],p.prototype,"content",void 0);u([I({type:HTMLElement})],p.prototype,"logo",void 0);p=u([S({tag:"ui5-shellbar-branding",languageAware:!0,renderer:E,template:j,styles:G}),V("click",{bubbles:!0})],p);p.define();const m=N("ui5-shellbar-branding",["accessibleName","href","target"],[],["logo"],["click"]);m.displayName="ShellBarBranding";try{m.displayName="ShellBarBranding",m.__docgenInfo={description:"The `ShellBarBranding` component is intended to be placed inside the branding slot of the\n`ShellBar` component. Its content has higher priority than the `primaryTitle` property\nand the `logo` slot of `ShellBar`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ShellBarBranding",props:{children:{defaultValue:null,description:`Defines the title for the ui5-shellbar-branding component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},logo:{defaultValue:null,description:"Defines the logo of the `ShellBar`.\nFor example, you can use `ui5-avatar` or `img` elements as logo.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"logo\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).",name:"logo",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:`Fired, when the logo is activated.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarBrandingDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},href:{defaultValue:{value:"undefined"},description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:{value:"undefined"},description:"Defines the component target.\n\n**Notes:**\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="ShellBarBranding",m.__docgenInfo={description:"The `ShellBarBranding` component is intended to be placed inside the branding slot of the\n`ShellBar` component. Its content has higher priority than the `primaryTitle` property\nand the `logo` slot of `ShellBar`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ShellBarBranding",props:{children:{defaultValue:null,description:`Defines the title for the ui5-shellbar-branding component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},logo:{defaultValue:null,description:"Defines the logo of the `ShellBar`.\nFor example, you can use `ui5-avatar` or `img` elements as logo.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"logo\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).",name:"logo",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:`Fired, when the logo is activated.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarBrandingDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},href:{defaultValue:{value:"undefined"},description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:{value:"undefined"},description:"Defines the component target.\n\n**Notes:**\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var y=function(n,e,o,a){var i=arguments.length,t=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,o):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,o,a);else for(var s=n.length-1;s>=0;s--)(l=n[s])&&(t=(i<3?l(t):i>3?l(e,o,t):l(e,o))||t);return i>3&&t&&Object.defineProperty(e,o,t),t};let h=class extends C{constructor(){super(...arguments),this.accessibilityAttributes={}}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}fireClickEvent(e){return this.fireDecoratorEvent("click",{targetRef:e.target})}};y([r()],h.prototype,"icon",void 0);y([r()],h.prototype,"text",void 0);y([r()],h.prototype,"count",void 0);y([r({type:Object})],h.prototype,"accessibilityAttributes",void 0);h=y([S("ui5-shellbar-item"),V("click",{bubbles:!0,cancelable:!0})],h);h.define();const f=N("ui5-shellbar-item",["accessibilityAttributes","count","icon","text"],[],[],["click"]);f.displayName="ShellBarItem";try{f.displayName="ShellBarItem",f.__docgenInfo={description:`The \`ShellBarItem\` represents a custom item, that
might be added to the \`ShellBar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ShellBarItem",props:{onClick:{defaultValue:null,description:`Fired, when the item is pressed.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarItemDomRef, ShellBarItemClickEventDetail>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines additional accessibility attributes on Shellbar Items.

The accessibility attributes support the following values:

- **expanded**: Indicates whether the button, or another grouping element it controls,
is currently expanded or collapsed.
Accepts the following string values: \`true\` or \`false\`.

- **hasPopup**: Indicates the availability and type of interactive popup element,
such as menu or dialog, that can be triggered by the button.

- **controls**: Identifies the element (or elements) whose contents
or presence are controlled by the component.
Accepts a lowercase string value, referencing the ID of the element it controls.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-fiori**.`,name:"accessibilityAttributes",required:!1,type:{name:"ShellBarItemAccessibilityAttributes"}},count:{defaultValue:{value:"undefined"},description:"Defines the count displayed in the top-right corner.",name:"count",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:"Defines the name of the item's icon.",name:"icon",required:!1,type:{name:"string"}},text:{defaultValue:{value:"undefined"},description:`Defines the item text.

**Note:** The text is only displayed inside the overflow popover list view.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="ShellBarItem",f.__docgenInfo={description:`The \`ShellBarItem\` represents a custom item, that
might be added to the \`ShellBar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ShellBarItem",props:{onClick:{defaultValue:null,description:`Fired, when the item is pressed.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarItemDomRef, ShellBarItemClickEventDetail>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines additional accessibility attributes on Shellbar Items.

The accessibility attributes support the following values:

- **expanded**: Indicates whether the button, or another grouping element it controls,
is currently expanded or collapsed.
Accepts the following string values: \`true\` or \`false\`.

- **hasPopup**: Indicates the availability and type of interactive popup element,
such as menu or dialog, that can be triggered by the button.

- **controls**: Identifies the element (or elements) whose contents
or presence are controlled by the component.
Accepts a lowercase string value, referencing the ID of the element it controls.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-fiori**.`,name:"accessibilityAttributes",required:!1,type:{name:"ShellBarItemAccessibilityAttributes"}},count:{defaultValue:{value:"undefined"},description:"Defines the count displayed in the top-right corner.",name:"count",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:"Defines the name of the item's icon.",name:"icon",required:!1,type:{name:"string"}},text:{defaultValue:{value:"undefined"},description:`Defines the item text.

**Note:** The text is only displayed inside the overflow popover list view.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function K(){return z.call(this,X)}function X(){return c(k,{children:D("header",{slot:"header",class:"ui5-search-popup-searching-header",children:[c("div",{class:"ui5-shellbar-search-field-wrapper",children:U.call(this,{forceExpanded:!0})}),c(L,{design:M.Transparent,onClick:this._handleCancel,children:this.cancelButtonText})]})})}function J(){return D(k,{children:[U.call(this),K.call(this)]})}var x=function(n,e,o,a){var i=arguments.length,t=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,o):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,o,a);else for(var s=n.length-1;s>=0;s--)(l=n[s])&&(t=(i<3?l(t):i>3?l(e,o,t):l(e,o))||t);return i>3&&t&&Object.defineProperty(e,o,t),t},d;let v=d=class extends O{constructor(){super(...arguments),this.autoOpen=!1}_handleSearchIconPress(){super._handleSearchIconPress(),this.collapsed?this.collapsed=!1:this.value||(this.collapsed=!0)}_onFocusOutSearch(e){_()||super._onFocusOutSearch(e)}_handleInput(e){super._handleInput(e),_()&&(this._performItemSelectionOnMobile=this._shouldPerformSelectionOnMobile(e.inputType))}get _effectiveIconTooltip(){return this.collapsed?d.i18nBundle.getText(F):this.value?d.i18nBundle.getText(H):d.i18nBundle.getText($)}get nativeInput(){const e=this.shadowRoot;return _()?e?.querySelector("[ui5-responsive-popover] input"):super.nativeInput}_onfocusin(){super._onfocusin(),this.autoOpen&&(this.open=!0,this.fireDecoratorEvent("open"))}onBeforeRendering(){super.onBeforeRendering(),_()&&(this.collapsed=!0)}};x([r({type:Boolean})],v.prototype,"autoOpen",void 0);v=d=x([S({tag:"ui5-shellbar-search",template:J})],v);v.define();const b=N("ui5-shellbar-search",["accessibleDescription","accessibleName","placeholder","value"],["autoOpen","loading","noTypeahead","open","showClearIcon"],["action","filterButton","illustration","messageArea","scopes"],["close","input","open","scope-change","search"]);b.displayName="ShellBarSearch";try{b.displayName="ShellBarSearch",b.__docgenInfo={description:`Search field for the ShellBar component.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ShellBarSearch",props:{action:{defaultValue:null,description:`Defines the popup footer action button.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="action"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"action",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the Search suggestion items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},filterButton:{defaultValue:null,description:`Defines the filter button slot, used to display an additional filtering button.
This slot is intended for passing a \`ui5-button\` with a filter icon to provide extended filtering options.

**Note:** Scope button and Filter button are mutually exclusive.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="filterButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents-fiori**.`,name:"filterButton",required:!1,type:{name:"UI5WCSlotsNode"}},illustration:{defaultValue:null,description:`Defines the illustrated message to be shown in the popup.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="illustration"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"illustration",required:!1,type:{name:"UI5WCSlotsNode"}},messageArea:{defaultValue:null,description:`Defines the illustrated message to be shown in the popup.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="messageArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"messageArea",required:!1,type:{name:"UI5WCSlotsNode"}},scopes:{defaultValue:null,description:`Defines the component scope options.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="scopes"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"scopes",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:`Fired when the popup is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarSearchDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when typing in input or clear icon is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarSearchDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired when the popup is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarSearchDomRef, never>) => void"}},onScopeChange:{defaultValue:null,description:`Fired when the scope has changed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onScopeChange",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarSearchDomRef, SearchFieldScopeSelectionChangeDetails>) => void"}},onSearch:{defaultValue:null,description:`Fired when the user has triggered search with Enter key or Search Button press.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onSearch",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarSearchDomRef, never>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA description of the field.",name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},autoOpen:{defaultValue:{value:"false"},description:"Indicates whether the suggestions popover should be opened on focus.",name:"autoOpen",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Indicates whether a loading indicator should be shown in the popup.",name:"loading",required:!1,type:{name:"boolean"}},noTypeahead:{defaultValue:{value:"false"},description:"Defines whether the value will be autcompleted to match an item.",name:"noTypeahead",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:"Indicates whether the items picker is open.",name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,name:"placeholder",required:!1,type:{name:"string"}},showClearIcon:{defaultValue:{value:"false"},description:"Defines whether the clear icon of the search will be shown.",name:"showClearIcon",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{b.displayName="ShellBarSearch",b.__docgenInfo={description:`Search field for the ShellBar component.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ShellBarSearch",props:{action:{defaultValue:null,description:`Defines the popup footer action button.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="action"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"action",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the Search suggestion items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},filterButton:{defaultValue:null,description:`Defines the filter button slot, used to display an additional filtering button.
This slot is intended for passing a \`ui5-button\` with a filter icon to provide extended filtering options.

**Note:** Scope button and Filter button are mutually exclusive.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="filterButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents-fiori**.`,name:"filterButton",required:!1,type:{name:"UI5WCSlotsNode"}},illustration:{defaultValue:null,description:`Defines the illustrated message to be shown in the popup.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="illustration"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"illustration",required:!1,type:{name:"UI5WCSlotsNode"}},messageArea:{defaultValue:null,description:`Defines the illustrated message to be shown in the popup.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="messageArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"messageArea",required:!1,type:{name:"UI5WCSlotsNode"}},scopes:{defaultValue:null,description:`Defines the component scope options.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="scopes"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"scopes",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:`Fired when the popup is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarSearchDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when typing in input or clear icon is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarSearchDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired when the popup is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarSearchDomRef, never>) => void"}},onScopeChange:{defaultValue:null,description:`Fired when the scope has changed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onScopeChange",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarSearchDomRef, SearchFieldScopeSelectionChangeDetails>) => void"}},onSearch:{defaultValue:null,description:`Fired when the user has triggered search with Enter key or Search Button press.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onSearch",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarSearchDomRef, never>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA description of the field.",name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},autoOpen:{defaultValue:{value:"false"},description:"Indicates whether the suggestions popover should be opened on focus.",name:"autoOpen",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Indicates whether a loading indicator should be shown in the popup.",name:"loading",required:!1,type:{name:"boolean"}},noTypeahead:{defaultValue:{value:"false"},description:"Defines whether the value will be autcompleted to match an item.",name:"noTypeahead",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:"Indicates whether the items picker is open.",name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,name:"placeholder",required:!1,type:{name:"string"}},showClearIcon:{defaultValue:{value:"false"},description:"Defines whether the clear icon of the search will be shown.",name:"showClearIcon",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var R=function(n,e,o,a){var i=arguments.length,t=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,o):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,o,a);else for(var s=n.length-1;s>=0;s--)(l=n[s])&&(t=(i<3?l(t):i>3?l(e,o,t):l(e,o))||t);return i>3&&t&&Object.defineProperty(e,o,t),t};let w=class extends C{constructor(){super(...arguments),this.visible=!1}};R([r({type:Boolean})],w.prototype,"visible",void 0);w=R([S({tag:"ui5-shellbar-spacer"})],w);w.define();const g=N("ui5-shellbar-spacer",[],[],[],[]);g.displayName="ShellBarSpacer";try{g.displayName="ShellBarSpacer",g.__docgenInfo={description:"The `ShellBarSpacer` is an element, used for visual separation between the two content parts of the `ShellBar`.\n**Note:** The `ShellBarSpacer` component is in an experimental state and is a subject to change.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ShellBarSpacer",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="ShellBarSpacer",g.__docgenInfo={description:"The `ShellBarSpacer` is an element, used for visual separation between the two content parts of the `ShellBar`.\n**Note:** The `ShellBarSpacer` component is in an experimental state and is a subject to change.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ShellBarSpacer",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Q="menu2",Y="M32 129q-13 0-22.5-9.5T0 97q0-14 9.5-23T32 65h448q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H32zm0 159q-13 0-22.5-9.5T0 256q0-14 9.5-23t22.5-9h448q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H32zm0 159q-13 0-22.5-9.5T0 415q0-14 9.5-23t22.5-9h448q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H32z",Z=!1,ee="SAP-icons-v4",te="@ui5/webcomponents-icons";T(Q,{pathData:Y,ltr:Z,collection:ee,packageName:te});const ne="menu2",oe="M486 115H26q-11 0-18.5-7T0 90t7.5-18.5T26 64h460q11 0 18.5 7.5T512 90t-7.5 18-18.5 7zm0 167H26q-11 0-18.5-7.5T0 256t7.5-18.5T26 230h460q11 0 18.5 7.5T512 256t-7.5 18.5T486 282zm0 166H26q-11 0-18.5-7.5T0 422t7.5-18 18.5-7h460q11 0 18.5 7t7.5 18-7.5 18.5T486 448z",ae=!1,ie="SAP-icons-v5",le="@ui5/webcomponents-icons";T(ne,{pathData:oe,ltr:ae,collection:ie,packageName:le});const De="menu2",se="sys-help",re="M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 99.5-54.5 81.5-81.5 55-100 20-99.5-20T75 437t-55-81.5T0 256t20-100 55-81.5T156.5 20 256 0zm0 480q46 0 87-17.5t71.5-48 48-71.5 17.5-87-17.5-87-48-71.5-71.5-48T256 32t-87 17.5-71.5 48-48 71.5T32 256t17.5 87 48 71.5 71.5 48 87 17.5zm-3-376q43 0 68.5 21.5T347 181q0 22-13 36.5T309 246q-8 9-15 15t-11.5 13.5-6.5 18 0 27.5h-49q0-16 .5-27.5t4.5-21 12-18.5 22-21l21-17q7-5 14-16t7-21q0-15-14.5-29T256 135t-38 14.5-19 37.5h-49q0-14 7.5-29t21-27 32.5-19.5 42-7.5zm3 248q14 0 23 9t9 23q0 13-9 22.5t-23 9.5q-13 0-22.5-9.5T224 384q0-14 9.5-23t22.5-9z",pe=!0,ce="SAP-icons-v4",he="@ui5/webcomponents-icons";T(se,{pathData:re,ltr:pe,collection:ce,packageName:he});const ue="sys-help",de="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm0 461q42 0 79.5-16.5t65-44 44-65T461 256t-16.5-79.5-44-65-65-44T256 51t-79 16-65 44-44.5 65.5T51 256t16 79 44 65 65.5 44.5T256 461zm0-365q40 0 68 28t28 68q0 33-20 58.5T282 284v10q0 11-7.5 18.5T256 320t-18.5-7.5T230 294v-32q0-11 8-18t21-7q17 0 29.5-13t12.5-32-13-32-32-13-32 12.5-13 29.5q0 13-7 21t-18 8-18.5-9-7.5-26 7.5-32.5T188 123t30.5-19.5T256 96zm0 256q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9z",me=!0,fe="SAP-icons-v5",be="@ui5/webcomponents-icons";T(ue,{pathData:de,ltr:me,collection:fe,packageName:be});const Ce="sys-help";export{f as S,b as a,g as b,m as c,De as m,Ce as s};
