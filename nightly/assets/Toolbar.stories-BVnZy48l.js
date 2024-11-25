import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{B as n}from"./Button-CzXV-qq-.js";import"./withWebComponent-DpVKsRHi.js";import{f as Z}from"./Icon-CrKv37md.js";import{m as ee}from"./i18n-defaults-neJWcM66.js";import"./List-UhlU2M9F.js";import{f as h}from"./favorite-DypNvnRV.js";import{s as te}from"./settings-BDm-5ICY.js";import{B as o}from"./index-DP-u0XOf.js";import{D as re}from"./index-Bf5pBcfv.js";import{I as N}from"./index-BeZ5zrB_.js";import{I as ne}from"./index-D4UDDq86.js";import{M as le}from"./index-C9zyOc1D.js";import{M as A}from"./index-o9FjMx8Q.js";import{S as ce}from"./index-bzsyn4WF.js";import{S as ue}from"./index-CSTLv5zI.js";import{S as oe}from"./index-BmkZBp4V.js";import{T as u}from"./index-CA4smrai.js";import{T as S}from"./index-CaZbEQ-K.js";import{r as m}from"./index-DysCNOs_.js";import{u as ae,a as i,b as pe,c as de,T as I}from"./index-CiKnTLXK.js";import{c as me}from"./clsx-B-dksMZM.js";import{u as he}from"./useStylesheet-BAIsnduv.js";const b="edit",be="download",fe="M280 374q-10 10-21 10-1 0-7.5-.5T235 374L133 273q-6-6-6-12t6-11q6-6 11-6 6 0 11 6l85 85V16q0-16 16-16t16 16v321l87-87q6-6 11-6 6 0 12 6t6 12q0 5-6 11zm200 74q13 0 22.5 9.5T512 480q0 14-9.5 23t-22.5 9H32q-14 0-23-9t-9-23q0-13 9-22.5t23-9.5h448z",ve=!1,ge=ee,ye="SAP-icons-v4",we="@ui5/webcomponents-icons";Z(be,{pathData:fe,ltr:ve,accData:ge,collection:ye,packageName:we});const Te="download",xe="M123 261q-8-8-8-18 0-11 7.5-18t18.5-7 18 7l71 72V26q0-11 7.5-18.5T256 0t18.5 7.5T282 26v271l71-72q7-7 18-7t18.5 7 7.5 18q0 10-8 18L274 377q-9 7-18 7t-18-7zm363 200q11 0 18.5 7t7.5 18-7.5 18.5T486 512H26q-11 0-18.5-7.5T0 486t7.5-18 18.5-7h460z",Be=!1,Se=ee,Ne="SAP-icons-v5",De="@ui5/webcomponents-icons";Z(Te,{pathData:xe,ltr:Be,accData:Se,collection:Ne,packageName:De});const se="download",p=m.forwardRef((t,a)=>{const{children:s,...r}=t,{inPopover:l}=ae();return e.jsx(o,{...r,ref:a,children:l?s:""})});p.displayName="OverflowToolbarButton";try{p.displayName="OverflowToolbarButton",p.__docgenInfo={description:"The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.\n\n__Note:__ This component is only compatible with the `Toolbar` component from the `@ui5/webcomponents-react-compat` package.",displayName:"OverflowToolbarButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\`
property is set to \`true\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** This property is only applicable within the context of an HTML Form element.`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}}}}}catch{}try{p.displayName="OverflowToolbarButton",p.__docgenInfo={description:"The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.\n\n__Note:__ This component is only compatible with the `Toolbar` component from the `@ui5/webcomponents-react-compat` package.",displayName:"OverflowToolbarButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\`
property is set to \`true\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** This property is only applicable within the context of an HTML Form element.`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}}}}}catch{}const d=m.forwardRef((t,a)=>{const{children:s,...r}=t,{inPopover:l}=ae();return e.jsx(S,{...r,ref:a,children:l?s:""})});d.displayName="OverflowToolbarToggleButton";try{d.displayName="OverflowToolbarToggleButton",d.__docgenInfo={description:"The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.\n\n__Note:__ This component is only compatible with the `Toolbar` component from the `@ui5/webcomponents-react-compat` package.",displayName:"OverflowToolbarToggleButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\`
property is set to \`true\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** This property is only applicable within the context of an HTML Form element.`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}},pressed:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="OverflowToolbarToggleButton",d.__docgenInfo={description:"The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.\n\n__Note:__ This component is only compatible with the `Toolbar` component from the `@ui5/webcomponents-react-compat` package.",displayName:"OverflowToolbarToggleButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\`
property is set to \`true\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** This property is only applicable within the context of an HTML Form element.`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}},pressed:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}const Ie={packageName:"@ui5/webcomponents-react-compat",fileName:"ToolbarSeparator.module.css",content:"@layer ui5-webcomponents-react{._separator_1lvhp_1{background:var(--sapToolbar_SeparatorColor);height:var(--_ui5wcr-ToolbarSeparatorHeight);width:.0625rem}}"},Ae={separator:"_separator_1lvhp_1"},c=m.forwardRef((t,a)=>{const{style:s,className:r,...l}=t;he(Ie,c.displayName);const D=me(Ae.separator,r);return e.jsx("div",{ref:a,style:s,className:D,role:"separator",...l})});c.displayName="ToolbarSeparator";try{c.displayName="ToolbarSeparator",c.__docgenInfo={description:"Creates a visual separator between the preceding and succeeding `Toolbar` item.\n\n__Note:__ This component is only compatible with the `Toolbar` component from the `@ui5/webcomponents-react-compat` package.",displayName:"ToolbarSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{c.displayName="ToolbarSeparator",c.__docgenInfo={description:"Creates a visual separator between the preceding and succeeding `Toolbar` item.\n\n__Note:__ This component is only compatible with the `Toolbar` component from the `@ui5/webcomponents-react-compat` package.",displayName:"ToolbarSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const _e={title:"Toolbar",component:i,argTypes:{children:{control:{disable:!0}},as:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{design:pe.Auto,toolbarStyle:de.Standard},parameters:{chromatic:{delay:1e3}}},f={render(t){return e.jsxs(i,{...t,children:[e.jsx(u,{children:"Toolbar"}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Button One"}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Button Two"}),e.jsx(ne,{"data-accessible-name":!0}),e.jsx(re,{"data-accessible-name":!0}),e.jsx(oe,{"data-accessible-name":!0})]})}},v={name:"right aligned items",render(t){return e.jsxs(i,{...t,children:[e.jsx(I,{}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Button"}),e.jsx(N,{"data-accessible-name":!0,accessibleName:"Settings",name:te}),e.jsx(N,{"data-accessible-name":!0,accessibleName:"Download",name:se})]})}},g={name:"evenly aligned items",render(t){return e.jsxs(i,{...t,children:[e.jsx(u,{children:"Left"}),e.jsx(I,{}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Center"}),e.jsx(I,{}),e.jsx(u,{children:"Right"}),e.jsx(N,{"data-accessible-name":!0,accessibleName:"Settings",name:te}),e.jsx(N,{"data-accessible-name":!0,accessibleName:"Download",name:se})]})}},y={name:"with separator",render(t){return e.jsxs(i,{...t,children:[e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Item1"}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Item2"}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Item3"}),e.jsx(c,{}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Item4"}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Item5"}),e.jsx(c,{}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Item6"}),e.jsx(c,{}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Item7"})]})}},w={name:"Popover in Overflow Popover",render(t){const[a,s]=m.useState(!1),[r,l]=m.useState("openMenuBtn"),D=ie=>{l(ie.target.id),s(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs(i,{...t,style:{width:"400px"},children:[e.jsx(u,{children:"Toolbar"}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Button One"}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Button Two"}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,id:"openMenuBtn",onClick:D,children:"Open Popover (Menu)"})]}),e.jsxs(le,{opener:r,open:a,onClose:()=>{s(!1)},children:[e.jsx(A,{text:"New File"}),e.jsx(A,{text:"New Folder"})]})]})}},T={name:"with overflow button",render(t){const[a,s]=m.useState(100),r=l=>{s(l.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(ue,{onInput:r,value:a}),e.jsxs(i,{...t,style:{width:`calc(100% * ${a/100})`},children:[e.jsx(u,{children:"Toolbar"}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Button One"}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,icon:"accept"}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Button Two"}),e.jsx(ce,{"data-accessible-name":!0,style:{width:"auto"}}),e.jsx(oe,{"data-accessible-name":!0}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Button Three"}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,children:"Button Four"}),e.jsx(p,{"data-accessible-name":!0,icon:b,children:"Edit"}),e.jsx(d,{"data-accessible-name":!0,design:n.Transparent,icon:h,children:"Favorite"})]})]})}},x={name:"OverflowToolbarButton & OverflowToolbarToggleButton",render(t){return e.jsxs(i,{...t,style:{width:"500px",...t.style},children:[e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,icon:b,tooltip:"Text always visible",children:"Default Button"}),e.jsx(p,{"data-accessible-name":!0,design:n.Transparent,icon:b,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(S,{"data-accessible-name":!0,design:n.Transparent,icon:h,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(d,{"data-accessible-name":!0,design:n.Transparent,icon:h,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"}),e.jsx(o,{"data-accessible-name":!0,design:n.Transparent,icon:b,tooltip:"Text always visible",children:"Default Button"}),e.jsx(p,{"data-accessible-name":!0,design:n.Transparent,icon:b,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(S,{"data-accessible-name":!0,design:n.Transparent,icon:h,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(d,{"data-accessible-name":!0,design:n.Transparent,icon:h,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"})]})}},B={name:"with custom overflow button",render(t){return e.jsxs(e.Fragment,{children:[e.jsxs(i,{...t,style:{width:"300px",...t.style},overflowButton:e.jsx(S,{icon:"menu2",design:n.Transparent,onClick:()=>{alert("Custom action")}}),children:[e.jsx(ne,{}),e.jsx(u,{maxLines:1,children:"Overflow Content"})]}),e.jsxs(i,{...t,style:{width:"300px",...t.style},overflowButton:e.jsx(S,{icon:"menu2",design:n.Transparent,onClick:a=>{a.preventDefault(),alert("Custom action")}}),children:[e.jsx(u,{maxLines:1,children:"Opening the popover is prevented"}),e.jsx(u,{maxLines:1,children:"Overflow Content"})]})]})}};var _,k,O;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render(args) {
    return <Toolbar {...args}>
        <Text>Toolbar</Text>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Button One
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Button Two
        </Button>
        <Input data-accessible-name />
        <DatePicker data-accessible-name />
        <Switch data-accessible-name />
      </Toolbar>;
  }
}`,...(O=(k=f.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var q,j,P;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'right aligned items',
  render(args) {
    return <Toolbar {...args}>
        <ToolbarSpacer />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Button
        </Button>
        <Icon data-accessible-name accessibleName="Settings" name={settingsIcon} />
        <Icon data-accessible-name accessibleName="Download" name={downloadIcon} />
      </Toolbar>;
  }
}`,...(P=(j=v.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var V,C,E;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'evenly aligned items',
  render(args) {
    return <Toolbar {...args}>
        <Text>Left</Text>
        <ToolbarSpacer />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Center
        </Button>
        <ToolbarSpacer />
        <Text>Right</Text>
        <Icon data-accessible-name accessibleName="Settings" name={settingsIcon} />
        <Icon data-accessible-name accessibleName="Download" name={downloadIcon} />
      </Toolbar>;
  }
}`,...(E=(C=g.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var R,L,M;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'with separator',
  render(args) {
    return <Toolbar {...args}>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item1
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item2
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item3
        </Button>
        <ToolbarSeparator />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item4
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item5
        </Button>
        <ToolbarSeparator />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item6
        </Button>
        <ToolbarSeparator />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item7
        </Button>
      </Toolbar>;
  }
}`,...(M=(L=y.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var F,H,U;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Popover in Overflow Popover',
  render(args) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(false);
    const [opener, setOpener] = useState('openMenuBtn');
    const handlePopoverOpenerClick = e => {
      setOpener(e.target.id);
      setPopoverIsOpen(true);
    };
    return <>
        <Toolbar {...args} style={{
        width: '400px'
      }}>
          <Text>Toolbar</Text>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button One
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Two
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent} id="openMenuBtn" onClick={handlePopoverOpenerClick}>
            Open Popover (Menu)
          </Button>
        </Toolbar>
        <Menu opener={opener} open={popoverIsOpen} onClose={() => {
        setPopoverIsOpen(false);
      }}>
          <MenuItem text="New File" />
          <MenuItem text="New Folder" />
        </Menu>
      </>;
  }
}`,...(U=(H=w.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var z,W,$;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'with overflow button',
  render(args) {
    const [value, setValue] = useState(100);
    const handleInput = e => {
      setValue(e.target.value);
    };
    return <>
        <Slider onInput={handleInput} value={value} />
        <Toolbar {...args} style={{
        width: \`calc(100% * \${value / 100})\`
      }}>
          <Text>Toolbar</Text>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button One
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent} icon="accept" />
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Two
          </Button>
          <Select data-accessible-name style={{
          width: 'auto'
        }} />
          <Switch data-accessible-name />
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Three
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Four
          </Button>
          <OverflowToolbarButton data-accessible-name icon={editIcon}>
            Edit
          </OverflowToolbarButton>
          <OverflowToolbarToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon}>
            Favorite
          </OverflowToolbarToggleButton>
        </Toolbar>
      </>;
  }
}`,...($=(W=T.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var G,J,K;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'OverflowToolbarButton & OverflowToolbarToggleButton',
  render(args) {
    return <Toolbar {...args} style={{
      width: '500px',
      ...args.style
    }}>
        <Button data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text only visible in popover">
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
        <Button data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text only visible in popover">
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
      </Toolbar>;
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'with custom overflow button',
  render(args) {
    return <>
        <Toolbar {...args} style={{
        width: '300px',
        ...args.style
      }} overflowButton={<ToggleButton icon="menu2" design={ButtonDesign.Transparent} onClick={() => {
        alert('Custom action');
      }} />}>
          <Input />
          <Text maxLines={1}>Overflow Content</Text>
        </Toolbar>
        <Toolbar {...args} style={{
        width: '300px',
        ...args.style
      }} overflowButton={<ToggleButton icon="menu2" design={ButtonDesign.Transparent} onClick={e => {
        e.preventDefault();
        alert('Custom action');
      }} />}>
          <Text maxLines={1}>Opening the popover is prevented</Text>
          <Text maxLines={1}>Overflow Content</Text>
        </Toolbar>
      </>;
  }
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ke=["Default","RightAlignedItems","EvenlyAlignedItems","WithSeparator","PopoverInOverflowPopover","WithOverflowButton","OverflowBtns","CustomOverflowButton"],et=Object.freeze(Object.defineProperty({__proto__:null,CustomOverflowButton:B,Default:f,EvenlyAlignedItems:g,OverflowBtns:x,PopoverInOverflowPopover:w,RightAlignedItems:v,WithOverflowButton:T,WithSeparator:y,__namedExportsOrder:ke,default:_e},Symbol.toStringTag,{value:"Module"}));export{et as C,f as D,g as E,x as O,w as P,v as R,c as T,y as W,T as a,B as b,p as c,d};
