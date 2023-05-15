import{j as r}from"./jsx-runtime-5926aa06.js";import{k as j}from"./UI5Element-d19f28b4.js";import{h as S}from"./Icons-d3203353.js";import{e as H}from"./index-99d317a4.js";import{c as P}from"./clsx.m-1229b3e0.js";import{r as f}from"./index-ebeaab24.js";import{c as U}from"./react-jss.esm-022ab528.js";import{u as K,ap as Y,C as G,aq as J,ar as Q,as as X,at as Z,a4 as ee,au as te,av as oe,aw as ne,ax as ae,ay as re,az as se,aA as ie}from"./i18n-defaults-54a5f988.js";import{s as D}from"./stopPropagation-da74d54e.js";import{T as le}from"./index-562e1433.js";import{T as p}from"./ThemingParameters-7e2e4e30.js";import{b as R}from"./CssSizeVariables-bd372cde.js";import{u as ce}from"./useIsomorphicId-4be7c5e3.js";import{D as de}from"./index-fbbcf612.js";import{P as pe}from"./PopupsCommon.css-8109da93.js";import{T as me}from"./index-abc61306.js";import{T as ue}from"./Title-64b66bf0.js";import{B as he}from"./index-8e40db2c.js";import{a as E}from"./Button-b124cb06.js";import{I as fe}from"./index-5ec1ccf8.js";import{V as m}from"./ValueState-ab6838cc.js";var o=(e=>(e.Abort="Abort",e.Cancel="Cancel",e.Close="Close",e.Delete="Delete",e.Ignore="Ignore",e.No="No",e.OK="OK",e.Retry="Retry",e.Yes="Yes",e))(o||{}),a=(e=>(e.Confirm="Confirm",e.Error="Error",e.Information="Information",e.Success="Success",e.Warning="Warning",e))(a||{});const ge="sys-help-2",_="M256 0q53 0 99.5 20T437 74.5t55 81.5 20 100-20 99.5-55 81.5-81.5 55-99.5 20-100-20-81.5-55T20 355.5 0 256t20-100 54.5-81.5T156 20 256 0zm-5 425q15 0 26-11t11-26-11-25.5-26-10.5-25.5 10.5T215 388t10.5 26 25.5 11zm101-239q0-32-27-57t-77-25q-46 0-72.5 24T146 187h52q5-24 17.5-32.5T251 146t35 12.5 12 27.5q0 10-2.5 14T282 215l-20 17q-15 12-23 21t-11.5 18.5-4.5 21-1 27.5h50q0-12 .5-19t3-12.5T283 278t15-13l27-25 16-18 9-16z",be=!0,ye="SAP-icons-v4",ve="@ui5/webcomponents-icons";S(ge,{pathData:_,ltr:be,collection:ye,packageName:ve});const Te="sys-help-2",A="M256 0q53 0 99.5 20T437 74.5t55 81.5 20 100-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-100 55-81.5T156.5 20 256 0zm41 279q9-5 20.5-12t22-18 18-27 7.5-38q0-20-8.5-37.5T333 116t-34.5-20.5T256 88q-22 0-42 7.5T179 116t-23.5 30.5T147 184q0 14 9.5 23t22.5 9q14 0 23-9t9-23q0-13 13.5-22.5T256 152t31.5 9.5T301 184q0 14-8 21t-26 17q-14 8-28.5 19T224 274q0 13 9 22.5t23 9.5q23 0 30-22 3-1 11-5zm-41 130q16 0 27-11t11-27-11-27-27-11-27 11-11 27 11 27 27 11z",xe=!0,Ce="SAP-icons-v5",Ne="@ui5/webcomponents-icons";S(Te,{pathData:A,ltr:xe,collection:Ce,packageName:Ne});j();const we="sys-help-2",qe={messageBox:{'&[data-type="Confirm"]':{"&::part(header)":{boxShadow:`inset 0 -0.0625rem ${p.sapNeutralBorderColor}, ${p.sapContent_HeaderShadow}`},"& $header":{"--sapContent_NonInteractiveIconColor":p.sapNeutralElementColor}}},header:{display:"flex",height:R.sapWcrBarHeight,textAlign:"center",width:"100%",alignItems:"center",boxSizing:"border-box",borderBottom:"1px solid var(--messageBoxBorderColor)",color:p.sapContent_LabelColor,fontSize:"1rem","& ui5-icon:first-child":{width:"1rem",height:"1rem"},"& [ui5-title]":{fontSize:"1rem"}},spacer:{width:"0.5rem"},confirmIcon:{color:p.sapNeutralColor},footer:{height:R.sapWcrBarHeight,width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-end","& > *":{margin:"0 0.25rem"},"& > ui5-button":{display:"flex",minWidth:"4rem"}}},Ie=qe,De=U(Ie,{name:"MessageBox"}),Re=(e,s,u)=>{if(f.isValidElement(e))return e;switch(s){case a.Confirm:return r.jsx(fe,{name:we,"aria-hidden":"true",accessibleRole:"presentation",className:u.confirmIcon});default:return null}},Ee=e=>{switch(e){case a.Information:return m.Information;case a.Success:return m.Success;case a.Warning:return m.Warning;case a.Error:return m.Error;default:return m.None}},Se=(e,s)=>e&&e.length>0?e:s===a.Confirm?[o.OK,o.Cancel]:s===a.Error?[o.Close]:[o.OK],g=f.forwardRef((e,s)=>{const{open:u,type:c,children:B,className:V,titleText:y,icon:z,actions:O,emphasizedAction:M,onClose:$,initialFocus:v,...k}=e,d=De(),n=K("@ui5/webcomponents-react"),W={[o.Abort]:n.getText(Y),[o.Cancel]:n.getText(G),[o.Close]:n.getText(J),[o.Delete]:n.getText(Q),[o.Ignore]:n.getText(X),[o.No]:n.getText(Z),[o.OK]:n.getText(ee),[o.Retry]:n.getText(te),[o.Yes]:n.getText(oe)},T=()=>{if(y)return y;switch(c){case a.Confirm:return n.getText(ie);case a.Error:return n.getText(se);case a.Information:return n.getText(re);case a.Success:return n.getText(ae);case a.Warning:return n.getText(ne);default:return null}},h=t=>{const{action:l}=t.target.dataset;D(t),$(H(t,{action:l}))},i=ce(),x=Se(O,c),F=()=>{const t=x.find(l=>l===v);return typeof t=="string"?`${i}-action-${t}`:v},{footer:_e,headerText:Ae,onAfterClose:Be,...L}=k,b=Re(z,c,d),C=!e.header&&!!b;return r.jsxs(de,{open:u,ref:s,className:P(d.messageBox,V),onAfterClose:u?h:D,accessibleNameRef:C?`${i}-title ${i}-text`:void 0,accessibleRole:pe.AlertDialog,...L,headerText:T(),state:Ee(c),initialFocus:F(),"data-type":c,children:[C&&r.jsxs("header",{slot:"header",className:d.header,children:[b,b&&r.jsx("span",{className:d.spacer}),r.jsx(me,{id:`${i}-title`,level:ue.H1,children:T()})]}),r.jsx(le,{id:`${i}-text`,children:B}),r.jsx("footer",{slot:"footer",className:d.footer,children:x.map((t,l)=>{var N,w;return typeof t!="string"&&f.isValidElement(t)?f.cloneElement(t,{onClick:(N=t==null?void 0:t.props)!=null&&N.onClick?q=>{var I;(I=t==null?void 0:t.props)==null||I.onClick(q),h(q)}:h,"data-action":((w=t==null?void 0:t.props)==null?void 0:w["data-action"])??`${l}: custom action`}):typeof t=="string"?r.jsx(he,{id:`${i}-action-${t}`,design:M===t?E.Emphasized:E.Transparent,onClick:h,"data-action":t,children:W[t]??t},`${t}-${l}`):null})})]})});g.displayName="MessageBox";g.defaultProps={open:!1,type:a.Confirm,emphasizedAction:o.OK,actions:[]};try{g.displayName="MessageBox",g.__docgenInfo={description:"The `MessageBox` component provides easier methods to create a `Dialog`, such as standard alerts, confirmation dialogs, or arbitrary message dialogs.\nFor convenience, it also provides an `open` prop, so it is not necessary to attach a `ref` to open the `MessageBox`.",displayName:"MessageBox",props:{accessibleNameRef:{defaultValue:null,description:`Defines the IDs of the elements that label the component.

__Note:__ Per default the prop receives the IDs of the header and the content.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:"Flag whether the Message Box should be opened or closed",name:"open",required:!1,type:{name:"boolean"}},titleText:{defaultValue:null,description:"A custom title for the MessageBox. If not present, it will be derived from the `MessageBox` type.",name:"titleText",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the content of the `MessageBox`.\n\n**Note:** Although this prop accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design and a11y capabilities.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},actions:{defaultValue:{value:"[]"},description:"Array of actions of the MessageBox. Those actions will be transformed into buttons in the `MessageBox` footer.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `MessageBoxAction`s (text) or the `Button` component in order to preserve the intended.",name:"actions",required:!1,type:{name:"ReactNode[]"}},emphasizedAction:{defaultValue:{value:"MessageBoxActions.OK"},description:`Specifies which action of the created dialog will be emphasized.
@since 0.16.3`,name:"emphasizedAction",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"A custom icon. If not present, it will be derived from the `MessageBox` type.",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:"MessageBoxTypes.Confirm"},description:"Defines the type of the `MessageBox` with predefined title, icon, actions and a visual highlight color.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Confirm"'},{value:'"Error"'},{value:'"Information"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Confirm"'},{value:'"Success"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element or the `MessageBoxAction`, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback to be executed when the `MessageBox` is closed (either by pressing on one of the `actions` or by pressing the `ESC` key). `event.detail.action` contains the pressed action button.",name:"onClose",required:!1,type:{name:"(event: CustomEvent<{ action: string; }>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. This event does not bubble.",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. This event does not bubble.",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:`Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior. When "draggable" is set to true, the native browser "draggable" behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:`Defines the header HTML Element.

**Note:** If \`header\` slot is provided, the labelling of the dialog is a responsibility of the application developer. \`accessibleName\` should be used.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, { escPressed: boolean; }>) => void"}},resizable:{defaultValue:null,description:`Configures the component to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.
**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:null,description:`Determines whether the component should be stretched to fullscreen.

**Note:** The component will be stretched to approximately 90% of the viewport.`,name:"stretch",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role. Available options are:\n\n*   `Dialog`\n*   `None`\n*   `AlertDialog`",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}}}}}catch{}export{g as M,o as a,a as b};
//# sourceMappingURL=index-db2b2783.js.map
