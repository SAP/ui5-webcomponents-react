import{j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{B as t}from"./Button-B86xSW8p.js";import"./withWebComponent-BbH_5MIb.js";import{f as Y}from"./Icon-DgpDEY-g.js";import{k as Z}from"./i18n-defaults-eVMsPoDe.js";import"./List-BtEOO51k.js";import{f as d}from"./favorite-Lw11ZIa-.js";import{s as ee}from"./settings-DnSvnO6E.js";import{r as x}from"./index-BQ1WsyJB.js";import{B as o}from"./index-D1nu7uR-.js";import{D as re}from"./index-Cr_BOrng.js";import{I as S}from"./index-BPonGG3q.js";import{I as te}from"./index-WPB-qdJQ.js";import{M as le}from"./index-fmVQHphz.js";import{M as N}from"./index-CV-1Yv2W.js";import{S as ue}from"./index-BEg4jLEd.js";import{S as pe}from"./index-iqT5T-lp.js";import{S as ne}from"./index-BYeoEnMV.js";import{T as r}from"./index-C4m8BtnC.js";import{T as B}from"./index-_LQn2ZSS.js";import{u as oe,T as i,a as ce,b as de}from"./index-C1aOQTpj.js";import{T as A}from"./index-5n9-dtvi.js";import{T as I}from"./index-CUngaHoB.js";const m="edit",l=x.forwardRef((n,a)=>{const{children:s,...p}=n,{inPopover:c}=oe();return e.jsx(o,{...p,ref:a,children:c?s:""})});l.displayName="OverflowToolbarButton";try{l.displayName="OverflowToolbarButton",l.__docgenInfo={description:"The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.\n\n__Note:__ This component is only compatible with the `Toolbar` component and __not__ with `ToolbarV2`.",displayName:"OverflowToolbarButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a\nmouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled`\nproperty is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** This property is only applicable within the context of an HTML Form element.`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="OverflowToolbarButton",l.__docgenInfo={description:"The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.\n\n__Note:__ This component is only compatible with the `Toolbar` component and __not__ with `ToolbarV2`.",displayName:"OverflowToolbarButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a\nmouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled`\nproperty is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** This property is only applicable within the context of an HTML Form element.`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}}}}}catch{}const u=x.forwardRef((n,a)=>{const{children:s,...p}=n,{inPopover:c}=oe();return e.jsx(B,{...p,ref:a,children:c?s:""})});u.displayName="OverflowToolbarToggleButton";try{u.displayName="OverflowToolbarToggleButton",u.__docgenInfo={description:"The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.\n\n__Note:__ This component is only compatible with the `Toolbar` component and __not__ with `ToolbarV2`.",displayName:"OverflowToolbarToggleButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a\nmouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled`\nproperty is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** This property is only applicable within the context of an HTML Form element.`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}},pressed:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}try{u.displayName="OverflowToolbarToggleButton",u.__docgenInfo={description:"The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.\n\n__Note:__ This component is only compatible with the `Toolbar` component and __not__ with `ToolbarV2`.",displayName:"OverflowToolbarToggleButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a\nmouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled`\nproperty is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** This property is only applicable within the context of an HTML Form element.`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}},pressed:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}const me="download",he="M480 448q13 0 22.5 9.5T512 480q0 14-9.5 23t-22.5 9H32q-14 0-23-9t-9-23q0-13 9-22.5t23-9.5h448zm-200-74q-10 10-22.5 9.5T235 374L133 273q-12-12 0-23 11-11 22 0l85 85V16q0-16 16-16t16 16v321l87-87q11-11 23 0 12 12 0 23z",fe=!1,be=Z,ve="SAP-icons-v4",ge="@ui5/webcomponents-icons";Y(me,{pathData:he,ltr:fe,accData:be,collection:ve,packageName:ge});const ye="download",Te="M123 261q-8-8-8-18 0-11 7.5-18t18.5-7 18 7l71 72V26q0-11 7.5-18.5T256 0t18.5 7.5T282 26v271l71-72q7-7 18-7t18.5 7 7.5 18q0 10-8 18L274 376q-8 8-18 8t-18-8zm363 200q11 0 18.5 7t7.5 18-7.5 18.5T486 512H26q-11 0-18.5-7.5T0 486t7.5-18 18.5-7h460z",we=!1,xe=Z,Be="SAP-icons-v5",Se="@ui5/webcomponents-icons";Y(ye,{pathData:Te,ltr:we,accData:xe,collection:Be,packageName:Se});const ae="download",Ae={title:"Layouts & Floorplans / Toolbar",component:i,argTypes:{children:{control:{disable:!0}},as:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{design:ce.Auto,toolbarStyle:de.Standard},parameters:{chromatic:{delay:1e3}}},h={render(n){return e.jsxs(i,{...n,children:[e.jsx(r,{children:"Toolbar"}),e.jsx(o,{design:t.Transparent,children:"Button One"}),e.jsx(o,{design:t.Transparent,children:"Button Two"}),e.jsx(te,{}),e.jsx(re,{}),e.jsx(ne,{})]})}},f={name:"right aligned items",render(n){return e.jsxs(i,{...n,children:[e.jsx(I,{}),e.jsx(o,{design:t.Transparent,children:"Button"}),e.jsx(S,{name:ee}),e.jsx(S,{name:ae})]})}},b={name:"evenly aligned items",render(n){return e.jsxs(i,{...n,children:[e.jsx(r,{children:"Left"}),e.jsx(I,{}),e.jsx(o,{design:t.Transparent,children:"Center"}),e.jsx(I,{}),e.jsx(r,{children:"Right"}),e.jsx(S,{name:ee}),e.jsx(S,{name:ae})]})}},v={name:"with separator",render(n){return e.jsxs(i,{...n,children:[e.jsx(o,{design:t.Transparent,children:"Item1"}),e.jsx(o,{design:t.Transparent,children:"Item2"}),e.jsx(o,{design:t.Transparent,children:"Item3"}),e.jsx(A,{}),e.jsx(o,{design:t.Transparent,children:"Item4"}),e.jsx(o,{design:t.Transparent,children:"Item5"}),e.jsx(A,{}),e.jsx(o,{design:t.Transparent,children:"Item6"}),e.jsx(A,{}),e.jsx(o,{design:t.Transparent,children:"Item7"})]})}},g={name:"Popover in Overflow Popover",render(n){const[a,s]=x.useState(!1),[p,c]=x.useState("openMenuBtn"),ie=se=>{c(se.target.id),s(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs(i,{...n,style:{width:"400px"},children:[e.jsx(r,{children:"Toolbar"}),e.jsx(o,{design:t.Transparent,children:"Button One"}),e.jsx(o,{design:t.Transparent,children:"Button Two"}),e.jsx(o,{design:t.Transparent,id:"openMenuBtn",onClick:ie,children:"Open Popover (Menu)"})]}),e.jsxs(le,{opener:p,open:a,onClose:()=>{s(!1)},children:[e.jsx(N,{text:"New File"}),e.jsx(N,{text:"New Folder"})]})]})}},y={name:"with overflow button",render(n){const[a,s]=x.useState(100),p=c=>{s(c.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(pe,{onInput:p,value:a}),e.jsxs(i,{...n,style:{width:`calc(100% * ${a/100})`},children:[e.jsx(r,{children:"Toolbar"}),e.jsx(o,{design:t.Transparent,children:"Button One"}),e.jsx(o,{design:t.Transparent,icon:"accept"}),e.jsx(o,{design:t.Transparent,children:"Button Two"}),e.jsx(ue,{style:{width:"auto"}}),e.jsx(ne,{}),e.jsx(o,{design:t.Transparent,children:"Button Three"}),e.jsx(o,{design:t.Transparent,children:"Button Four"}),e.jsx(l,{icon:m,children:"Edit"}),e.jsx(u,{design:t.Transparent,icon:d,children:"Favorite"})]})]})}},T={name:"OverflowToolbarButton & OverflowToolbarToggleButton",render(n){return e.jsxs(i,{...n,style:{width:"500px",...n.style},children:[e.jsx(o,{design:t.Transparent,icon:m,tooltip:"Text always visible",children:"Default Button"}),e.jsx(l,{design:t.Transparent,icon:m,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(B,{design:t.Transparent,icon:d,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(u,{design:t.Transparent,icon:d,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"}),e.jsx(o,{design:t.Transparent,icon:m,tooltip:"Text always visible",children:"Default Button"}),e.jsx(l,{design:t.Transparent,icon:m,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(B,{design:t.Transparent,icon:d,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(u,{design:t.Transparent,icon:d,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"})]})}},w={name:"with custom overflow button",render(n){return e.jsxs(e.Fragment,{children:[e.jsxs(i,{...n,style:{width:"300px",...n.style},overflowButton:e.jsx(B,{icon:"menu2",design:t.Transparent,onClick:()=>{alert("Custom action")}}),children:[e.jsx(te,{}),e.jsx(r,{maxLines:1,children:"Overflow Content"})]}),e.jsxs(i,{...n,style:{width:"300px",...n.style},overflowButton:e.jsx(B,{icon:"menu2",design:t.Transparent,onClick:a=>{a.preventDefault(),alert("Custom action")}}),children:[e.jsx(r,{maxLines:1,children:"Opening the popover is prevented"}),e.jsx(r,{maxLines:1,children:"Overflow Content"})]})]})}};var D,O,j;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render(args) {
    return <Toolbar {...args}>
        <Text>Toolbar</Text>
        <Button design={ButtonDesign.Transparent}>Button One</Button>
        <Button design={ButtonDesign.Transparent}>Button Two</Button>
        <Input />
        <DatePicker />
        <Switch />
      </Toolbar>;
  }
}`,...(j=(O=h.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,k,_;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'right aligned items',
  render(args) {
    return <Toolbar {...args}>
        <ToolbarSpacer />
        <Button design={ButtonDesign.Transparent}>Button</Button>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>;
  }
}`,...(_=(k=f.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var V,P,E;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'evenly aligned items',
  render(args) {
    return <Toolbar {...args}>
        <Text>Left</Text>
        <ToolbarSpacer />
        <Button design={ButtonDesign.Transparent}>Center</Button>
        <ToolbarSpacer />
        <Text>Right</Text>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>;
  }
}`,...(E=(P=b.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var R,C,L;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'with separator',
  render(args) {
    return <Toolbar {...args}>
        <Button design={ButtonDesign.Transparent}>Item1</Button>
        <Button design={ButtonDesign.Transparent}>Item2</Button>
        <Button design={ButtonDesign.Transparent}>Item3</Button>
        <ToolbarSeparator />
        <Button design={ButtonDesign.Transparent}>Item4</Button>
        <Button design={ButtonDesign.Transparent}>Item5</Button>
        <ToolbarSeparator />
        <Button design={ButtonDesign.Transparent}>Item6</Button>
        <ToolbarSeparator />
        <Button design={ButtonDesign.Transparent}>Item7</Button>
      </Toolbar>;
  }
}`,...(L=(C=v.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var M,F,H;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
          <Button design={ButtonDesign.Transparent}>Button One</Button>
          <Button design={ButtonDesign.Transparent}>Button Two</Button>
          <Button design={ButtonDesign.Transparent} id="openMenuBtn" onClick={handlePopoverOpenerClick}>
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
}`,...(H=(F=g.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var U,z,W;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
          <Button design={ButtonDesign.Transparent}>Button One</Button>
          <Button design={ButtonDesign.Transparent} icon="accept" />
          <Button design={ButtonDesign.Transparent}>Button Two</Button>
          <Select style={{
          width: 'auto'
        }} />
          <Switch />
          <Button design={ButtonDesign.Transparent}>Button Three</Button>
          <Button design={ButtonDesign.Transparent}>Button Four</Button>
          <OverflowToolbarButton icon={editIcon}>Edit</OverflowToolbarButton>
          <OverflowToolbarToggleButton design={ButtonDesign.Transparent} icon={favoriteIcon}>
            Favorite
          </OverflowToolbarToggleButton>
        </Toolbar>
      </>;
  }
}`,...(W=(z=y.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var $,G,J;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'OverflowToolbarButton & OverflowToolbarToggleButton',
  render(args) {
    return <Toolbar {...args} style={{
      width: '500px',
      ...args.style
    }}>
        <Button design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text only visible in popover">
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
        <Button design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text only visible in popover">
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
      </Toolbar>;
  }
}`,...(J=(G=T.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ie=["Default","RightAlignedItems","EvenlyAlignedItems","WithSeparator","PopoverInOverflowPopover","WithOverflowButton","OverflowBtns","CustomOverflowButton"],Qe=Object.freeze(Object.defineProperty({__proto__:null,CustomOverflowButton:w,Default:h,EvenlyAlignedItems:b,OverflowBtns:T,PopoverInOverflowPopover:g,RightAlignedItems:f,WithOverflowButton:y,WithSeparator:v,__namedExportsOrder:Ie,default:Ae},Symbol.toStringTag,{value:"Module"}));export{Qe as C,h as D,b as E,T as O,g as P,f as R,v as W,y as a,w as b,l as c,u as d};
