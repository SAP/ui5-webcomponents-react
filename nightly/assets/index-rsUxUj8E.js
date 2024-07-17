import{_ as S}from"./iframe-BKMnmR8u.js";import{h as a,j as _,f as C,s as y,a as g,m as w,k as I,I as k,w as N}from"./withWebComponent-DykTwaBJ.js";import{d as T}from"./slot-_4yKMUwC.js";import{s as B}from"./event-Dq0fpeHi.js";import{f as x}from"./i18nBundle-CEPDwMcb.js";import"./useIsomorphicLayoutEffect-Cwmfti2R.js";import"./decline-PQHY0vmQ.js";import"./information-s0rUc520.js";import"./alert-B5x9ZRdn.js";import{o as M}from"./class-map-BBkLNtsu.js";import{l as i}from"./if-defined-Pg2MF6OO.js";import{I as E}from"./Icon-C1aVUqaK.js";import{b as P}from"./Button-gEiq340s.js";import{a5 as A,a6 as $,a7 as D,a8 as R,a9 as U,aa as F,ab as f}from"./i18n-defaults-Ddp6Qu_n.js";import{s as O}from"./parameters-bundle.css-BFbT_feV.js";var b;(function(e){e.Information="Information",e.Positive="Positive",e.Negative="Negative",e.Critical="Critical",e.ColorSet1="ColorSet1",e.ColorSet2="ColorSet2"})(b||(b={}));const h=b;function V(e,o,t){return a`<div class="${M(this.classes.root)}" id="${i(this._id)}" role="note" aria-labelledby="${i(this._id)}">${this.shouldHideIcon?void 0:q.call(this,e,o,t)}<span class="ui5-hidden-text">${i(this.hiddenText)}</span><span class="ui5-message-strip-text"><slot></slot></span>${this.hideCloseButton?void 0:L.call(this,e,o,t)}</div>`}function q(e,o,t){return a`<div class="ui5-message-strip-icon-wrapper" aria-hidden="true">${this.iconProvided?z.call(this,e,o,t):W.call(this,e,o,t)}</div>`}function z(e,o,t){return a`<slot name="icon"></slot>`}function W(e,o,t){return t?a`<${_("ui5-icon",o,t)} name="${i(this.standardIconName)}" class="ui5-message-strip-icon"></${_("ui5-icon",o,t)}>`:a`<ui5-icon name="${i(this.standardIconName)}" class="ui5-message-strip-icon"></ui5-icon>`}function L(e,o,t){return t?a`<${_("ui5-button",o,t)} icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${i(this._closeButtonText)}" @click=${this._closeClick}></${_("ui5-button",o,t)}>`:a`<ui5-button icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${i(this._closeButtonText)}" @click=${this._closeClick}></ui5-button>`}C("@ui5/webcomponents-theming","sap_horizon",async()=>y);C("@ui5/webcomponents","sap_horizon",async()=>O);const H={packageName:"@ui5/webcomponents",fileName:"themes/MessageStrip.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;width:100%}.ui5-message-strip-root{width:100%;height:100%;display:flex;border-radius:var(--sapPopover_BorderCornerRadius);padding:var(--_ui5-v2-0-1_message_strip_padding);border-width:var(--_ui5-v2-0-1_message_strip_border_width);border-style:solid;box-sizing:border-box;position:relative}.ui5-message-strip-root-hide-icon{padding-inline:var(--_ui5-v2-0-1_message_strip_padding_inline_no_icon);padding-block:var(--_ui5-v2-0-1_message_strip_padding_block_no_icon)}.ui5-message-strip-root-hide-close-button{padding-inline-end:1rem}.ui5-message-strip-root--info{background-color:var(--sapInformationBackground);border-color:var(--sapMessage_InformationBorderColor);color:var(--sapTextColor)}.ui5-message-strip-root--info .ui5-message-strip-icon{color:var(--sapInformativeElementColor)}.ui5-message-strip-root--positive{background-color:var(--sapSuccessBackground);border-color:var(--sapMessage_SuccessBorderColor)}.ui5-message-strip-root--positive .ui5-message-strip-icon{color:var(--sapPositiveElementColor)}.ui5-message-strip-root--negative{background-color:var(--sapErrorBackground);border-color:var(--sapMessage_ErrorBorderColor)}.ui5-message-strip-root--negative .ui5-message-strip-icon{color:var(--sapNegativeElementColor)}.ui5-message-strip-root--critical{background-color:var(--sapWarningBackground);border-color:var(--sapMessage_WarningBorderColor)}.ui5-message-strip-root--critical .ui5-message-strip-icon{color:var(--sapCriticalElementColor)}.ui5-message-strip-icon-wrapper{position:absolute;top:var(--_ui5-v2-0-1_message_strip_icon_top);inset-inline-start:.75rem;box-sizing:border-box}.ui5-message-strip-text{width:100%;color:var(--sapTextColor);line-height:1.2;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize)}.ui5-message-strip-close-button{height:1.625rem;min-height:1.625rem;position:absolute;top:var(--_ui5-v2-0-1_message_strip_close_button_top);inset-inline-end:var(--_ui5-v2-0-1_message_strip_close_button_right)}:host([color-scheme="1"]) .ui5-message-strip-root--color-set-1,:host(:not([color-scheme])[design="ColorSet1"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_1_Background);border-color:var(--sapIndicationColor_1_BorderColor)}:host([color-scheme="2"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_2_Background);border-color:var(--sapIndicationColor_2_BorderColor)}:host([color-scheme="3"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_3_Background);border-color:var(--sapIndicationColor_3_BorderColor)}:host([color-scheme="4"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_4_Background);border-color:var(--sapIndicationColor_4_BorderColor)}:host([color-scheme="5"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_5_Background);border-color:var(--sapIndicationColor_5_BorderColor)}:host([color-scheme="6"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_6_Background);border-color:var(--sapIndicationColor_6_BorderColor)}:host([color-scheme="7"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_7_Background);border-color:var(--sapIndicationColor_7_BorderColor)}:host([color-scheme="8"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_8_Background);border-color:var(--sapIndicationColor_8_BorderColor)}:host([color-scheme="9"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_9_Background);border-color:var(--sapIndicationColor_9_BorderColor)}:host([color-scheme="10"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_10_Background);border-color:var(--sapIndicationColor_10_BorderColor)}:host([color-scheme="1"]) .ui5-message-strip-root--color-set-2,:host(:not([color-scheme])[design="ColorSet2"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_1_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_1_set_2_border_color)}:host([color-scheme="2"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_2_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_2_set_2_border_color)}:host([color-scheme="3"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_3_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_3_set_2_border_color)}:host([color-scheme="4"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_4_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_4_set_2_border_color)}:host([color-scheme="5"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_5_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_5_set_2_border_color)}:host([color-scheme="6"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_6_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_6_set_2_border_color)}:host([color-scheme="7"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_7_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_7_set_2_border_color)}:host([color-scheme="8"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_8_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_8_set_2_border_color)}:host([color-scheme="9"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_9_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_9_set_2_border_color)}:host([color-scheme="10"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_10_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_10_set_2_border_color)}:host([design="ColorSet1"]) .ui5-message-strip-root .ui5-message-strip-text{color:var(--sapContent_ContrastTextColor);text-shadow:var(--sapContent_ContrastTextShadow)}:host([design="ColorSet1"]) .ui5-message-strip-root ::slotted([slot="icon"]){color:var(--sapContent_ContrastIconColor);text-shadow:var(--sapContent_ContrastTextShadow)}:host([design="ColorSet2"]) .ui5-message-strip-root .ui5-message-strip-text{color:var(--sapTextColor)}:host([design="ColorSet1"]) .ui5-message-strip-close-button{color:var(--_ui5-v2-0-1_message_strip_close_button_color_set_1_color)}:host([design="ColorSet2"]) .ui5-message-strip-close-button,:host([design="ColorSet2"]) .ui5-message-strip-root ::slotted([slot="icon"]){color:var(--sapContent_IconColor)}:host([design="ColorSet1"]) .ui5-message-strip-close-button:hover{border-color:var(--sapContent_ContrastIconColor);background-color:var(--_ui5-v2-0-1_message_strip_close_button_color_set_1_background);color:var(--_ui5-v2-0-1_message_strip_close_button_color_set_1_hover_color);text-shadow:var(--sapContent_ContrastTextShadow)}:host([design="ColorSet2"]) .ui5-message-strip-close-button:hover{background-color:var(--_ui5-v2-0-1_message_strip_close_button_color_set_2_background);border-color:var(--sapContent_IconColor);color:var(--sapContent_IconColor)}:host([design="ColorSet1"]) .ui5-message-strip-close-button:active{background:none;border-color:var(--sapContent_ContrastIconColor)}:host([design="ColorSet2"]) .ui5-message-strip-close-button:active{background:none;border-color:var(--sapContent_IconColor)}:host([design="ColorSet1"]) .ui5-message-strip-close-button::part(button):after,:host([design="ColorSet1"]) .ui5-message-strip-close-button::part(button):before{border-color:var(--sapContent_ContrastFocusColor)}
`};var l=function(e,o,t,u){var p=arguments.length,r=p<3?o:u===null?u=Object.getOwnPropertyDescriptor(o,t):u,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,t,u);else for(var v=e.length-1;v>=0;v--)(m=e[v])&&(r=(p<3?m(r):p>3?m(o,t,r):m(o,t))||r);return p>3&&r&&Object.defineProperty(o,t,r),r},n,c;(function(e){e.Information="ui5-message-strip-root--info",e.Positive="ui5-message-strip-root--positive",e.Negative="ui5-message-strip-root--negative",e.Critical="ui5-message-strip-root--critical",e.ColorSet1="ui5-message-strip-root--color-set-1",e.ColorSet2="ui5-message-strip-root--color-set-2"})(c||(c={}));let s=n=class extends k{constructor(){super(...arguments),this.design="Information",this.colorScheme="1",this.hideIcon=!1,this.hideCloseButton=!1}_closeClick(){this.fireEvent("close")}static async onDefine(){n.i18nBundle=await x("@ui5/webcomponents")}static designAnnouncementMappings(){const o=t=>n.i18nBundle.getText(t);return{Information:o(D),Positive:o(R),Negative:o(U),Critical:o(F),ColorSet1:o(f),ColorSet2:o(f)}}get hiddenText(){return`${n.designAnnouncementMappings()[this.design]} ${this.hideCloseButton?"":this._closableText}`}get shouldHideIcon(){return this.designClasses===c.ColorSet1||this.designClasses===c.ColorSet2?this.hideIcon||this.icon.length===0:this.hideIcon}get _closeButtonText(){return n.i18nBundle.getText(A)}get _closableText(){return n.i18nBundle.getText($)}get classes(){return{root:{"ui5-message-strip-root":!0,"ui5-message-strip-root-hide-icon":this.shouldHideIcon,"ui5-message-strip-root-hide-close-button":this.hideCloseButton,[this.designClasses]:!0}}}get iconProvided(){return this.icon.length>0}get standardIconName(){switch(this.design){case h.Critical:return"alert";case h.Positive:return"sys-enter-2";case h.Negative:return"error";case h.Information:return"information";default:return null}}get designClasses(){return c[this.design]}};l([g()],s.prototype,"design",void 0);l([g()],s.prototype,"colorScheme",void 0);l([g({type:Boolean})],s.prototype,"hideIcon",void 0);l([g({type:Boolean})],s.prototype,"hideCloseButton",void 0);l([T()],s.prototype,"icon",void 0);s=n=l([w({tag:"ui5-message-strip",languageAware:!0,renderer:I,template:V,styles:H,dependencies:[E,P]}),B("close")],s);s.define();const G=s,j=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),d=N("ui5-message-strip",["colorScheme","design"],["hideCloseButton","hideIcon"],["icon"],["close"],()=>S(()=>Promise.resolve().then(()=>j),void 0,import.meta.url));d.displayName="MessageStrip";try{d.displayName="MessageStrip",d.__docgenInfo={description:`The ui5-message-strip component allows for the embedding of application-related messages.
It supports four semantic designs, each with its own color and icon: "Information", "Positive", "Critical", and "Negative".
Additionally, users can choose from two color sets ("ColorSet1" and "ColorSet2"), each containing 10 predefined color schemes.
Each message shows a "Close" button, so that it can be removed from the UI, if needed.

### Usage

For the \`MessageStrip\` component, you can define whether it displays
an icon in the beginning and a close button. Moreover, its size and background
can be controlled with CSS.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"MessageStrip",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the content to be displayed as graphical element within the component.

**Note:** If no icon is given, the default icon for the component type will be used.
The SAP-icons font provides numerous options.

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:`Fired when the close button is pressed either with a
click/tap or by using the Enter or Space key.`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<MessageStripDomRef, never>) => void"}},colorScheme:{defaultValue:{value:'"1"'},description:'Defines the color scheme of the component.\nThere are 10 predefined schemes.\nTo use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.',name:"colorScheme",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Information"'},description:"Defines the component type.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"ColorSet1"'},{value:'"ColorSet2"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"ColorSet1"'},{value:'"ColorSet2"'}]}},hideCloseButton:{defaultValue:{value:"false"},description:"Defines whether the MessageStrip renders close button.",name:"hideCloseButton",required:!1,type:{name:"boolean"}},hideIcon:{defaultValue:{value:"false"},description:`Defines whether the MessageStrip will show an icon in the beginning.
You can directly provide an icon with the \`icon\` slot. Otherwise, the default icon for the type will be used.

 * **Note:** If <code>MessageStripDesign.ColorSet1</code> or <code>MessageStripDesign.ColorSet2</code> value is set to the <code>design</code> property, default icon will not be presented.`,name:"hideIcon",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="MessageStrip",d.__docgenInfo={description:`The ui5-message-strip component allows for the embedding of application-related messages.
It supports four semantic designs, each with its own color and icon: "Information", "Positive", "Critical", and "Negative".
Additionally, users can choose from two color sets ("ColorSet1" and "ColorSet2"), each containing 10 predefined color schemes.
Each message shows a "Close" button, so that it can be removed from the UI, if needed.

### Usage

For the \`MessageStrip\` component, you can define whether it displays
an icon in the beginning and a close button. Moreover, its size and background
can be controlled with CSS.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"MessageStrip",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the content to be displayed as graphical element within the component.

**Note:** If no icon is given, the default icon for the component type will be used.
The SAP-icons font provides numerous options.

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:`Fired when the close button is pressed either with a
click/tap or by using the Enter or Space key.`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<MessageStripDomRef, never>) => void"}},colorScheme:{defaultValue:{value:'"1"'},description:'Defines the color scheme of the component.\nThere are 10 predefined schemes.\nTo use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.',name:"colorScheme",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Information"'},description:"Defines the component type.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"ColorSet1"'},{value:'"ColorSet2"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"ColorSet1"'},{value:'"ColorSet2"'}]}},hideCloseButton:{defaultValue:{value:"false"},description:"Defines whether the MessageStrip renders close button.",name:"hideCloseButton",required:!1,type:{name:"boolean"}},hideIcon:{defaultValue:{value:"false"},description:`Defines whether the MessageStrip will show an icon in the beginning.
You can directly provide an icon with the \`icon\` slot. Otherwise, the default icon for the type will be used.

 * **Note:** If <code>MessageStripDesign.ColorSet1</code> or <code>MessageStripDesign.ColorSet2</code> value is set to the <code>design</code> property, default icon will not be presented.`,name:"hideIcon",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{d as M,h as a};
