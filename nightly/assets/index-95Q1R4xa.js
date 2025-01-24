import{j as s}from"./jsx-runtime-CLpGMVip.js";import{B as I}from"./Button-Bn6Q5CAy.js";import{a as F}from"./Icon-DVzRT9Bg.js";import{P as k}from"./PopupsCommon.css-BjjP0aIP.js";import{T as L}from"./Title-D0oe8JHs.js";import{o as u}from"./ValueState-Bg0UWejw.js";import"./withWebComponent-DfVDXLfc.js";import"./sys-help-2-vfGQ4D_d.js";import{c as W}from"./clsx-B-dksMZM.js";import{r as h}from"./index-D23YZj_x.js";import{u as H,d as U,C as P,e as j,D as $,f as K,N as Y,O as G,R as J,Y as Q,g as X,h as Z,i as ee,j as te,k as ne}from"./i18n-defaults-CoZOvFer.js";import{D as oe}from"./index-l-vXilRY.js";import{T as ae}from"./index-DrIkGkgV.js";import{T as se}from"./index-PgvbZRQ5.js";import{u as ie}from"./useStylesheet-DNyxTWaC.js";import{B as re}from"./index-CnQKew8G.js";import{I as le}from"./index-B0ytwBgs.js";var n=(e=>(e.Abort="Abort",e.Cancel="Cancel",e.Close="Close",e.Delete="Delete",e.Ignore="Ignore",e.No="No",e.OK="OK",e.Retry="Retry",e.Yes="Yes",e))(n||{}),a=(e=>(e.Confirm="Confirm",e.Error="Error",e.Information="Information",e.Success="Success",e.Warning="Warning",e))(a||{});const de="sys-help-2",ce="@layer ui5-webcomponents-react{._messageBox_13pdm_1[data-type=Confirm]::part(header){box-shadow:inset 0 -.0625rem var(--sapNeutralBorderColor),var(--sapContent_HeaderShadow)}._messageBox_13pdm_1[data-type=Confirm] ._header_13pdm_8{--sapContent_NonInteractiveIconColor:var(--sapNeutralElementColor)}._header_13pdm_8{align-items:center;border-bottom:1px solid var(--messageBoxBorderColor);box-sizing:border-box;color:var(--sapContent_LabelColor);display:flex;font-size:1rem;height:var(--_ui5wcr-BarHeight);text-align:center;width:100%}._header_13pdm_8 [ui5-icon]:first-child{height:1rem;width:1rem}._header_13pdm_8 [ui5-title]{font-size:1rem}._spacer_13pdm_34{width:.5rem}._confirmIcon_13pdm_38{color:var(--sapNeutralColor)}._footer_13pdm_42{align-items:center;display:flex;height:var(--_ui5wcr-BarHeight);justify-content:flex-end;width:100%}._footer_13pdm_42>*{margin:0 .25rem}._footer_13pdm_42>[ui5-button]{display:flex;min-width:4rem}}",p={messageBox:"_messageBox_13pdm_1",header:"_header_13pdm_8",spacer:"_spacer_13pdm_34",confirmIcon:"_confirmIcon_13pdm_38",footer:"_footer_13pdm_42"},ue=(e,i,f)=>{if(h.isValidElement(e))return e;switch(i){case a.Confirm:return s.jsx(le,{name:de,mode:F.Decorative,className:f.confirmIcon});default:return null}},pe=e=>{switch(e){case a.Information:return u.Information;case a.Success:return u.Positive;case a.Warning:return u.Critical;case a.Error:return u.Negative;default:return u.None}},he=(e,i)=>e&&e.length>0?e:i===a.Confirm?[n.OK,n.Cancel]:i===a.Error?[n.Close]:[n.OK],d=h.forwardRef((e,i)=>{const{open:f,type:c=a.Confirm,children:B,className:R,titleText:v,icon:E,actions:V=[],emphasizedAction:q=n.OK,onClose:m,initialFocus:y,...S}=e;ie(ce,d.displayName);const o=H("@ui5/webcomponents-react"),M={[n.Abort]:o.getText(U),[n.Cancel]:o.getText(P),[n.Close]:o.getText(j),[n.Delete]:o.getText($),[n.Ignore]:o.getText(K),[n.No]:o.getText(Y),[n.OK]:o.getText(G),[n.Retry]:o.getText(J),[n.Yes]:o.getText(Q)},w=()=>{if(v)return v;switch(c){case a.Confirm:return o.getText(ne);case a.Error:return o.getText(te);case a.Information:return o.getText(ee);case a.Success:return o.getText(Z);case a.Warning:return o.getText(X);default:return null}},A=t=>{typeof e.onBeforeClose=="function"&&e.onBeforeClose(t),t.detail.escPressed&&typeof m=="function"&&m(void 0,t.detail.escPressed)},g=t=>{const{action:l}=t.currentTarget.dataset;typeof m=="function"&&m(l)},r=h.useId(),_=he(V,c),O=()=>{const t=_.find(l=>l===y);return typeof t=="string"?`${r}-action-${t}`:y},{footer:me,headerText:fe,onClose:ge,onBeforeClose:be,...z}=S,b=ue(E,c,p),C=!e.header&&!!b;return s.jsxs(oe,{open:f,ref:i,className:W(p.messageBox,R),onBeforeClose:A,accessibleNameRef:C?`${r}-title ${r}-text`:void 0,accessibleRole:k.AlertDialog,...z,headerText:w(),state:pe(c),initialFocus:O(),"data-type":c,children:[C&&s.jsxs("div",{slot:"header",className:p.header,children:[b,b&&s.jsx("span",{className:p.spacer}),s.jsx(ae,{id:`${r}-title`,level:L.H1,children:w()})]}),s.jsx(se,{id:`${r}-text`,children:B}),s.jsx("div",{slot:"footer",className:p.footer,children:_.map((t,l)=>{var N,x;return typeof t!="string"&&h.isValidElement(t)?h.cloneElement(t,{onClick:(N=t==null?void 0:t.props)!=null&&N.onClick?D=>{var T;(T=t==null?void 0:t.props)==null||T.onClick(D),g(D)}:g,"data-action":((x=t==null?void 0:t.props)==null?void 0:x["data-action"])??`${l}: custom action`}):typeof t=="string"?s.jsx(re,{id:`${r}-action-${t}`,design:q===t?I.Emphasized:I.Transparent,onClick:g,"data-action":t,children:M[t]??t},`${t}-${l}`):null})})]})});d.displayName="MessageBox";try{d.displayName="MessageBox",d.__docgenInfo={description:"The `MessageBox` component provides easier methods to create a `Dialog`, such as standard alerts, confirmation dialogs, or arbitrary message dialogs.",displayName:"MessageBox",props:{accessibleNameRef:{defaultValue:null,description:`Defines the IDs of the elements that label the component.

__Note:__ Per default the prop receives the IDs of the header and the content.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Flag whether the Message Box should be opened or closed",name:"open",required:!1,type:{name:"boolean"}},titleText:{defaultValue:null,description:"A custom title for the MessageBox. If not present, it will be derived from the `MessageBox` type.",name:"titleText",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `MessageBox`.\n\n**Note:** Although this prop accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design and accessibility capabilities.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},actions:{defaultValue:null,description:"Array of actions of the MessageBox. Those actions will be transformed into buttons in the `MessageBox` footer.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `MessageBoxAction`s (text) or the `Button` component in order to preserve the intended.",name:"actions",required:!1,type:{name:"ReactNode[]"}},emphasizedAction:{defaultValue:{value:'`"OK"`'},description:`Specifies which action of the created dialog will be emphasized.
@since 0.16.3`,name:"emphasizedAction",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"A custom icon. If not present, it will be derived from the `MessageBox` type.",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:'`"Confirm"`'},description:"Defines the type of the `MessageBox` with predefined title, icon, actions and a visual highlight color.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Confirm"'},{value:'"Error"'},{value:'"Information"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Confirm"'},{value:'"Error"'},{value:'"Success"'},{value:'"Warning"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element or the `MessageBoxAction`, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback to be executed when the `MessageBox` is closed (either by pressing on one of the `actions` or by pressing the Escape key).\n`action` is the pressed action button, it's `undefined` when closed via ESC.",name:"onClose",required:!1,type:{name:"(action: string, escPressed?: true) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:{value:"false"},description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},header:{defaultValue:null,description:`Defines the header HTML Element.

**Note:** When a \`Bar\` is used in the header, you should remove the default dialog's paddings.

**Note:** If \`header\` slot is provided, the labelling of the dialog is a responsibility of the application developer.
\`accessibleName\` should be used.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:"preventFocusRestore",required:!1,type:{name:"boolean"}},preventInitialFocus:{defaultValue:{value:"false"},description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"preventInitialFocus",required:!1,type:{name:"boolean"}},resizable:{defaultValue:{value:"false"},description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.

**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:{value:"false"},description:`Determines if the dialog will be stretched to full screen on mobile. On desktop,
the dialog will be stretched to approximately 90% of the viewport.

**Note:** For better usability of the component it is recommended to set this property to "true" when the dialog is opened on phone.`,name:"stretch",required:!1,type:{name:"boolean"}},onBeforeClose:{defaultValue:null,description:`Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:`Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}}}}}catch{}try{d.displayName="MessageBox",d.__docgenInfo={description:"The `MessageBox` component provides easier methods to create a `Dialog`, such as standard alerts, confirmation dialogs, or arbitrary message dialogs.",displayName:"MessageBox",props:{accessibleNameRef:{defaultValue:null,description:`Defines the IDs of the elements that label the component.

__Note:__ Per default the prop receives the IDs of the header and the content.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Flag whether the Message Box should be opened or closed",name:"open",required:!1,type:{name:"boolean"}},titleText:{defaultValue:null,description:"A custom title for the MessageBox. If not present, it will be derived from the `MessageBox` type.",name:"titleText",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `MessageBox`.\n\n**Note:** Although this prop accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design and accessibility capabilities.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},actions:{defaultValue:null,description:"Array of actions of the MessageBox. Those actions will be transformed into buttons in the `MessageBox` footer.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `MessageBoxAction`s (text) or the `Button` component in order to preserve the intended.",name:"actions",required:!1,type:{name:"ReactNode[]"}},emphasizedAction:{defaultValue:{value:'`"OK"`'},description:`Specifies which action of the created dialog will be emphasized.
@since 0.16.3`,name:"emphasizedAction",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"A custom icon. If not present, it will be derived from the `MessageBox` type.",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:'`"Confirm"`'},description:"Defines the type of the `MessageBox` with predefined title, icon, actions and a visual highlight color.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Confirm"'},{value:'"Error"'},{value:'"Information"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Confirm"'},{value:'"Error"'},{value:'"Success"'},{value:'"Warning"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element or the `MessageBoxAction`, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback to be executed when the `MessageBox` is closed (either by pressing on one of the `actions` or by pressing the Escape key).\n`action` is the pressed action button, it's `undefined` when closed via ESC.",name:"onClose",required:!1,type:{name:"(action: string, escPressed?: true) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:{value:"false"},description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},header:{defaultValue:null,description:`Defines the header HTML Element.

**Note:** When a \`Bar\` is used in the header, you should remove the default dialog's paddings.

**Note:** If \`header\` slot is provided, the labelling of the dialog is a responsibility of the application developer.
\`accessibleName\` should be used.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:"preventFocusRestore",required:!1,type:{name:"boolean"}},preventInitialFocus:{defaultValue:{value:"false"},description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"preventInitialFocus",required:!1,type:{name:"boolean"}},resizable:{defaultValue:{value:"false"},description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.

**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:{value:"false"},description:`Determines if the dialog will be stretched to full screen on mobile. On desktop,
the dialog will be stretched to approximately 90% of the viewport.

**Note:** For better usability of the component it is recommended to set this property to "true" when the dialog is opened on phone.`,name:"stretch",required:!1,type:{name:"boolean"}},onBeforeClose:{defaultValue:null,description:`Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:`Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}}}}}catch{}export{d as M,a,n as b};
