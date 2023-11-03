import{j as r}from"./jsx-runtime-d079401a.js";import{o as H}from"./UI5Element-d089e658.js";import{r as R}from"./Icons-d115de21.js";import{e as U}from"./index-99d317a4.js";import{c as j}from"./clsx-1229b3e0.js";import{r as f}from"./index-f1f2c4b1.js";import{c as P}from"./react-jss.esm-2e5f50f2.js";import{u as K,F as Y,C as G,G as J,H as Q,J as X,N as Z,O as ee,K as te,Y as oe,W as ne,Q as ae,T as re,X as se,Z as ie}from"./i18n-defaults-3e7d7856.js";import{s as D}from"./stopPropagation-da74d54e.js";import{T as le}from"./index-743fc8f1.js";import{T as p}from"./ThemingParameters-7e2e4e30.js";import{C as E}from"./CssSizeVariables-596b7aba.js";import{u as ce}from"./useIsomorphicId-ed1d334d.js";import{D as de}from"./index-8befd509.js";import{P as pe}from"./PopupsCommon.css-070f9d59.js";import{T as ue}from"./index-f8534d78.js";import{T as me}from"./Title-53f5d1e4.js";import{B as he}from"./index-5fb601ca.js";import{B as S}from"./Button-f20bbbdf.js";import{I as fe}from"./index-c0aa9757.js";import{V as u}from"./ValueState-ab6838cc.js";var o=(e=>(e.Abort="Abort",e.Cancel="Cancel",e.Close="Close",e.Delete="Delete",e.Ignore="Ignore",e.No="No",e.OK="OK",e.Retry="Retry",e.Yes="Yes",e))(o||{}),a=(e=>(e.Confirm="Confirm",e.Error="Error",e.Information="Information",e.Success="Success",e.Warning="Warning",e))(a||{});const ge="sys-help-2",B="M256 0q53 0 99.5 20T437 74.5t55 81.5 20 100-20 99.5-55 81.5-81.5 55-99.5 20-100-20-81.5-55T20 355.5 0 256t20-100 54.5-81.5T156 20 256 0zm-5 425q15 0 26-11t11-26-11-25.5-26-10.5-25.5 10.5T215 388t10.5 26 25.5 11zm101-239q0-32-27-57t-77-25q-46 0-72.5 24T146 187h52q5-24 17.5-32.5T251 146t35 12.5 12 27.5q0 10-2.5 14T282 215l-20 17q-15 12-23 21t-11.5 18.5-4.5 21-1 27.5h50q0-12 .5-19t3-12.5T283 278t15-13l27-25 16-18 9-16z",be=!0,ye="SAP-icons-v4",ve="@ui5/webcomponents-icons";R(ge,{pathData:B,ltr:be,collection:ye,packageName:ve});const Te="sys-help-2",_="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm32 289q31-10 50.5-36.5T358 192q0-43-29.5-72.5T256 90q-21 0-39.5 8T184 118.5 162 148t-8 35q0 20 9 30.5t23 10.5q13 0 22.5-9t9.5-23q0-16 11-27t27-11 27 11 11 27-11 27-27 11q-14 0-23 9.5t-9 22.5v26q0 14 9 23t23 9q13 0 22-9t10-22zm-32 127q14 0 23-9t9-23-9-23-23-9-23 9-9 23 9 23 23 9z",Ce=!0,xe="SAP-icons-v5",Ne="@ui5/webcomponents-icons";R(Te,{pathData:_,ltr:Ce,collection:xe,packageName:Ne});H();const we="sys-help-2",Ie={messageBox:{'&[data-type="Confirm"]':{"&::part(header)":{boxShadow:`inset 0 -0.0625rem ${p.sapNeutralBorderColor}, ${p.sapContent_HeaderShadow}`},"& $header":{"--sapContent_NonInteractiveIconColor":p.sapNeutralElementColor}}},header:{display:"flex",height:E.ui5WcrBarHeight,textAlign:"center",width:"100%",alignItems:"center",boxSizing:"border-box",borderBottom:"1px solid var(--messageBoxBorderColor)",color:p.sapContent_LabelColor,fontSize:"1rem","& ui5-icon:first-child":{width:"1rem",height:"1rem"},"& [ui5-title]":{fontSize:"1rem"}},spacer:{width:"0.5rem"},confirmIcon:{color:p.sapNeutralColor},footer:{height:E.ui5WcrBarHeight,width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-end","& > *":{margin:"0 0.25rem"},"& > ui5-button":{display:"flex",minWidth:"4rem"}}},qe=Ie,De=P(qe,{name:"MessageBox"}),Ee=(e,s,m)=>{if(f.isValidElement(e))return e;switch(s){case a.Confirm:return r.jsx(fe,{name:we,"aria-hidden":"true",accessibleRole:"presentation",className:m.confirmIcon});default:return null}},Se=e=>{switch(e){case a.Information:return u.Information;case a.Success:return u.Success;case a.Warning:return u.Warning;case a.Error:return u.Error;default:return u.None}},Re=(e,s)=>e&&e.length>0?e:s===a.Confirm?[o.OK,o.Cancel]:s===a.Error?[o.Close]:[o.OK],g=f.forwardRef((e,s)=>{const{open:m,type:c,children:V,className:A,titleText:y,icon:z,actions:O,emphasizedAction:M,onClose:W,initialFocus:v,...$}=e,d=De(),n=K("@ui5/webcomponents-react"),F={[o.Abort]:n.getText(Y),[o.Cancel]:n.getText(G),[o.Close]:n.getText(J),[o.Delete]:n.getText(Q),[o.Ignore]:n.getText(X),[o.No]:n.getText(Z),[o.OK]:n.getText(ee),[o.Retry]:n.getText(te),[o.Yes]:n.getText(oe)},T=()=>{if(y)return y;switch(c){case a.Confirm:return n.getText(ie);case a.Error:return n.getText(se);case a.Information:return n.getText(re);case a.Success:return n.getText(ae);case a.Warning:return n.getText(ne);default:return null}},h=t=>{const{action:l}=t.target.dataset;D(t),W(U(t,{action:l}))},i=ce(),C=Re(O,c),k=()=>{const t=C.find(l=>l===v);return typeof t=="string"?`${i}-action-${t}`:v},{footer:Be,headerText:_e,onAfterClose:Ve,...L}=$,b=Ee(z,c,d),x=!e.header&&!!b;return r.jsxs(de,{open:m,ref:s,className:j(d.messageBox,A),onAfterClose:m?h:D,accessibleNameRef:x?`${i}-title ${i}-text`:void 0,accessibleRole:pe.AlertDialog,...L,headerText:T(),state:Se(c),initialFocus:k(),"data-type":c,children:[x&&r.jsxs("header",{slot:"header",className:d.header,children:[b,b&&r.jsx("span",{className:d.spacer}),r.jsx(ue,{id:`${i}-title`,level:me.H1,children:T()})]}),r.jsx(le,{id:`${i}-text`,children:V}),r.jsx("footer",{slot:"footer",className:d.footer,children:C.map((t,l)=>{var N,w;return typeof t!="string"&&f.isValidElement(t)?f.cloneElement(t,{onClick:(N=t==null?void 0:t.props)!=null&&N.onClick?I=>{var q;(q=t==null?void 0:t.props)==null||q.onClick(I),h(I)}:h,"data-action":((w=t==null?void 0:t.props)==null?void 0:w["data-action"])??`${l}: custom action`}):typeof t=="string"?r.jsx(he,{id:`${i}-action-${t}`,design:M===t?S.Emphasized:S.Transparent,onClick:h,"data-action":t,children:F[t]??t},`${t}-${l}`):null})})]})});g.displayName="MessageBox";g.defaultProps={open:!1,type:a.Confirm,emphasizedAction:o.OK,actions:[]};try{g.displayName="MessageBox",g.__docgenInfo={description:"The `MessageBox` component provides easier methods to create a `Dialog`, such as standard alerts, confirmation dialogs, or arbitrary message dialogs.\nFor convenience, it also provides an `open` prop, so it is not necessary to attach a `ref` to open the `MessageBox`.",displayName:"MessageBox",props:{accessibleNameRef:{defaultValue:null,description:`Defines the IDs of the elements that label the component.

__Note:__ Per default the prop receives the IDs of the header and the content.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:"Flag whether the Message Box should be opened or closed",name:"open",required:!1,type:{name:"boolean"}},titleText:{defaultValue:null,description:"A custom title for the MessageBox. If not present, it will be derived from the `MessageBox` type.",name:"titleText",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `MessageBox`.\n\n**Note:** Although this prop accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design and a11y capabilities.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},actions:{defaultValue:{value:"[]"},description:"Array of actions of the MessageBox. Those actions will be transformed into buttons in the `MessageBox` footer.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `MessageBoxAction`s (text) or the `Button` component in order to preserve the intended.",name:"actions",required:!1,type:{name:"ReactNode[]"}},emphasizedAction:{defaultValue:{value:"MessageBoxActions.OK"},description:`Specifies which action of the created dialog will be emphasized.
@since 0.16.3`,name:"emphasizedAction",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"A custom icon. If not present, it will be derived from the `MessageBox` type.",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:"MessageBoxTypes.Confirm"},description:"Defines the type of the `MessageBox` with predefined title, icon, actions and a visual highlight color.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Confirm"'},{value:'"Error"'},{value:'"Information"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Confirm"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element or the `MessageBoxAction`, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback to be executed when the `MessageBox` is closed (either by pressing on one of the `actions` or by pressing the `ESC` key). `event.detail.action` contains the pressed action button.",name:"onClose",required:!1,type:{name:"(event: CustomEvent<{ action: string; }>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:`Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior. When "draggable" is set to true, the native browser "draggable" behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},header:{defaultValue:null,description:`Defines the header HTML Element.

**Note:** When a \`Bar\` is used in the header, you should remove the default dialog's paddings.

**Note:** If \`header\` slot is provided, the labelling of the dialog is a responsibility of the application developer. \`accessibleName\` should be used.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},resizable:{defaultValue:null,description:`Configures the component to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.
**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:null,description:`Determines whether the component should be stretched to fullscreen.

**Note:** The component will be stretched to approximately 90% of the viewport.`,name:"stretch",required:!1,type:{name:"boolean"}}}}}catch{}export{g as M,o as a,a as b};
//# sourceMappingURL=index-507c663e.js.map
