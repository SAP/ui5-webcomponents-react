import{j as u}from"./useIsomorphicLayoutEffect-CikWMOA2.js";import{a as p}from"./alert-Bk-rwgUA.js";import{i as d,s as _,e as m}from"./information-BcSpE2Ne.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as b}from"./index-BP8_t0zE.js";import{V as o}from"./ValueState-gQDshf3o.js";import{u as h}from"./useStylesheet-BlsaS3Lf.js";import{B as f}from"./index-Tv5zRnb9.js";const g={packageName:"@ui5/webcomponents-react",fileName:"MessageViewButton.module.css",content:".MessageViewButton_btn_klssh_1{background:var(--sapButton_Information_Background);border-color:var(--sapButton_Information_BorderColor);color:var(--sapButton_Information_TextColor);text-shadow:var(--sapContent_TextShadow)}.MessageViewButton_btn_klssh_1::part(button):after{border-color:var(--sapContent_FocusColor)}.MessageViewButton_btn_klssh_1:hover{background:var(--sapButton_Information_Hover_Background);border-color:var(--sapButton_Information_Hover_BorderColor);color:var(--sapButton_Information_Hover_TextColor)}.MessageViewButton_btn_klssh_1:active{background:var(--sapButton_Information_Active_Background);border-color:var(--sapButton_Information_Active_BorderColor);color:var(--sapButton_Information_Active_TextColor)}.MessageViewButton_btn_klssh_1:active::part(button):after{border-color:var(--sapContent_FocusColor)}.MessageViewButton_btn_klssh_1[data-type=Error]{background:var(--sapButton_Negative_Background);border-color:var(--sapButton_Negative_BorderColor);color:var(--sapButton_Negative_TextColor);text-shadow:var(--sapContent_ContrastTextShadow)}.MessageViewButton_btn_klssh_1[data-type=Error]::part(button):after{border-color:var(--sapContent_ContrastFocusColor)}.MessageViewButton_btn_klssh_1[data-type=Error]:hover{background:var(--sapButton_Negative_Hover_Background);border-color:var(--sapButton_Negative_Hover_BorderColor);color:var(--sapButton_Negative_Hover_TextColor)}.MessageViewButton_btn_klssh_1[data-type=Error]:active{background:var(--sapButton_Negative_Active_Background);border-color:var(--sapButton_Negative_Active_BorderColor);color:var(--sapButton_Negative_Active_TextColor)}.MessageViewButton_btn_klssh_1[data-type=Error]:active::part(button):after{border-color:var(--sapContent_FocusColor)}.MessageViewButton_btn_klssh_1[data-type=Warning]{background:var(--sapButton_Critical_Background);border-color:var(--sapButton_Critical_BorderColor);color:var(--sapButton_Critical_TextColor);text-shadow:var(--sapContent_ContrastTextShadow)}.MessageViewButton_btn_klssh_1[data-type=Warning]::part(button):after{border-color:var(--sapContent_ContrastFocusColor)}.MessageViewButton_btn_klssh_1[data-type=Warning]:hover{background:var(--sapButton_Critical_Hover_Background);border-color:var(--sapButton_Critical_Hover_BorderColor);color:var(--sapButton_Critical_Hover_TextColor)}.MessageViewButton_btn_klssh_1[data-type=Warning]:active{background:var(--sapButton_Critical_Active_Background);border-color:var(--sapButton_Critical_Active_BorderColor);color:var(--sapButton_Critical_Active_TextColor)}.MessageViewButton_btn_klssh_1[data-type=Warning]:active::part(button):after{border-color:var(--sapContent_FocusColor)}.MessageViewButton_btn_klssh_1[data-type=Success]{background:var(--sapButton_Success_Background);border-color:var(--sapButton_Success_BorderColor);color:var(--sapButton_Success_TextColor);text-shadow:var(--sapContent_ContrastTextShadow)}.MessageViewButton_btn_klssh_1[data-type=Success]::part(button):after{border-color:var(--sapContent_ContrastFocusColor)}.MessageViewButton_btn_klssh_1[data-type=Success]:hover{background:var(--sapButton_Success_Hover_Background);border-color:var(--sapButton_Success_Hover_BorderColor);color:var(--sapButton_Success_Hover_TextColor)}.MessageViewButton_btn_klssh_1[data-type=Success]:active{background:var(--sapButton_Success_Active_Background);border-color:var(--sapButton_Success_Active_BorderColor);color:var(--sapButton_Success_Active_TextColor)}.MessageViewButton_btn_klssh_1[data-type=Success]:active::part(button):after{border-color:var(--sapContent_FocusColor)}"},B={btn:"MessageViewButton_btn_klssh_1"},y=t=>{switch(t){case o.Error:return m;case o.Success:return _;case o.Warning:return p;default:return d}},e=b.forwardRef((t,r)=>{const{type:a=o.Error,counter:n,className:s,...i}=t;h(g,e.displayName);const l=v(B.btn,s),c=y(a);return u.jsx(f,{ref:r,className:l,icon:c,...i,"data-type":a,children:n>1&&n})});e.displayName="MessageViewButton";try{e.displayName="MessageViewButton",e.__docgenInfo={description:"The `MessageViewButton` can be used for opening a `Popover` containing the `MessageView` component. It should always reflect the message `type` with the highest severity.",displayName:"MessageViewButton",props:{type:{defaultValue:null,description:'Specifies the type of the button.\n\n__Note:__ `"None"` is displayed as `"Information"`.',name:"type",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Success"'}]}},counter:{defaultValue:null,description:`Defines the number of messages for a given message type.

__Note:__ Numbers smaller than 2 are not displayed.`,name:"counter",required:!1,type:{name:"number"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a\nmouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled`\nproperty is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use link role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="MessageViewButton",e.__docgenInfo={description:"The `MessageViewButton` can be used for opening a `Popover` containing the `MessageView` component. It should always reflect the message `type` with the highest severity.",displayName:"MessageViewButton",props:{type:{defaultValue:null,description:'Specifies the type of the button.\n\n__Note:__ `"None"` is displayed as `"Information"`.',name:"type",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Success"'}]}},counter:{defaultValue:null,description:`Defines the number of messages for a given message type.

__Note:__ Numbers smaller than 2 are not displayed.`,name:"counter",required:!1,type:{name:"number"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a\nmouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled`\nproperty is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use link role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{e as M};
