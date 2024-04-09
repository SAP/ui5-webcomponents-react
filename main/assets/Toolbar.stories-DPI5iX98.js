import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{k as ue}from"./Boot-DwA_pgKp.js";import{r as Y}from"./Icons-Dptlkq46.js";import{j as Z}from"./i18n-defaults-BdfZArTM.js";import{e as m}from"./ListItem-DzhBB08_.js";import{f as h}from"./favorite-CuDDTQbC.js";import{s as ee}from"./settings-B5rFU4gK.js";import{r as d}from"./index-Dl6G-zuu.js";import{B as o}from"./index-BmgaoTD5.js";import{D as pe}from"./index-CEwJAoWV.js";import{I as S}from"./index-BA1TFo1N.js";import{I as te}from"./index-COtfsAa8.js";import{M as ce,a as j}from"./index-INavmguq.js";import{S as de}from"./index-CYCESr-E.js";import{S as me}from"./index-BY-dzvM8.js";import{S as ne}from"./index-CH6l4kGh.js";import{T as x}from"./index-8XQZWjYj.js";import{O as oe,T as s,a as he,b as fe}from"./index-CvxM3s6b.js";import{T as i}from"./index-C3N6u2gC.js";import{T as D}from"./index-CyesMZGm.js";import{T as N}from"./index-DYxI1HDa.js";import{B as t}from"./Button-L0N45cMZ.js";const l=d.forwardRef((n,a)=>{const{children:r,...p}=n,{inPopover:c}=d.useContext(oe);return e.jsx(o,{...p,ref:a,children:c?r:""})});l.displayName="OverflowToolbarButton";try{l.displayName="OverflowToolbarButton",l.__docgenInfo={description:"The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Transparent"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a\nmouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled`\nproperty is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** For the \`type\` property to have effect, you must add the following import to your project:
\`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";\`

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},iconEnd:{defaultValue:{value:"false"},description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project:\n`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use link role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{l.displayName="OverflowToolbarButton",l.__docgenInfo={description:"The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Transparent"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a\nmouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled`\nproperty is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** For the \`type\` property to have effect, you must add the following import to your project:
\`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";\`

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},iconEnd:{defaultValue:{value:"false"},description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project:\n`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use link role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const u=d.forwardRef((n,a)=>{const{children:r,...p}=n,{inPopover:c}=d.useContext(oe);return e.jsx(x,{...p,ref:a,children:c?r:""})});u.displayName="OverflowToolbarToggleButton";try{u.displayName="OverflowToolbarToggleButton",u.__docgenInfo={description:"The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarToggleButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Transparent"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a\nmouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled`\nproperty is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** For the \`type\` property to have effect, you must add the following import to your project:
\`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";\`

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},iconEnd:{defaultValue:{value:"false"},description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project:\n`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use link role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},pressed:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}try{u.displayName="OverflowToolbarToggleButton",u.__docgenInfo={description:"The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarToggleButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Transparent"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a\nmouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled`\nproperty is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},type:{defaultValue:{value:'"Button"'},description:`Defines whether the button has special form-related functionality.

**Note:** For the \`type\` property to have effect, you must add the following import to your project:
\`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";\`

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},iconEnd:{defaultValue:{value:"false"},description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project:\n`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use link role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},pressed:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}const ve="download",ae="M480 448q13 0 22.5 9.5T512 480q0 14-9.5 23t-22.5 9H32q-14 0-23-9t-9-23q0-13 9-22.5t23-9.5h448zm-200-74q-10 10-22.5 9.5T235 374L133 273q-12-12 0-23 11-11 22 0l85 85V16q0-16 16-16t16 16v321l87-87q11-11 23 0 12 12 0 23z",be=!1,ge=Z,ye="SAP-icons-v4",Te="@ui5/webcomponents-icons";Y(ve,{pathData:ae,ltr:be,accData:ge,collection:ye,packageName:Te});const we="download",se="M123 261q-8-8-8-18 0-11 7.5-18t18.5-7 18 7l71 72V26q0-11 7.5-18.5T256 0t18.5 7.5T282 26v271l71-72q7-7 18-7t18.5 7 7.5 18q0 10-8 18L274 376q-8 8-18 8t-18-8zm363 200q11 0 18.5 7t7.5 18-7.5 18.5T486 512H26q-11 0-18.5-7.5T0 486t7.5-18 18.5-7h460z",Be=!1,xe=Z,Se="SAP-icons-v5",De="@ui5/webcomponents-icons";Y(we,{pathData:se,ltr:Be,accData:xe,collection:Se,packageName:De});ue();const re="download",Ne={title:"Layouts & Floorplans / Toolbar",component:s,argTypes:{children:{control:{disable:!0}},as:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{design:he.Auto,toolbarStyle:fe.Standard},parameters:{chromatic:{delay:1e3}}},f={render(n){return e.jsxs(s,{...n,children:[e.jsx(i,{children:"Toolbar"}),e.jsx(o,{design:t.Transparent,children:"Button One"}),e.jsx(o,{design:t.Transparent,children:"Button Two"}),e.jsx(te,{}),e.jsx(pe,{}),e.jsx(ne,{})]})}},v={name:"right aligned items",render(n){return e.jsxs(s,{...n,children:[e.jsx(N,{}),e.jsx(o,{design:t.Transparent,children:"Button"}),e.jsx(S,{name:ee}),e.jsx(S,{name:re})]})}},b={name:"evenly aligned items",render(n){return e.jsxs(s,{...n,children:[e.jsx(i,{children:"Left"}),e.jsx(N,{}),e.jsx(o,{design:t.Transparent,children:"Center"}),e.jsx(N,{}),e.jsx(i,{children:"Right"}),e.jsx(S,{name:ee}),e.jsx(S,{name:re})]})}},g={name:"with separator",render(n){return e.jsxs(s,{...n,children:[e.jsx(o,{design:t.Transparent,children:"Item1"}),e.jsx(o,{design:t.Transparent,children:"Item2"}),e.jsx(o,{design:t.Transparent,children:"Item3"}),e.jsx(D,{}),e.jsx(o,{design:t.Transparent,children:"Item4"}),e.jsx(o,{design:t.Transparent,children:"Item5"}),e.jsx(D,{}),e.jsx(o,{design:t.Transparent,children:"Item6"}),e.jsx(D,{}),e.jsx(o,{design:t.Transparent,children:"Item7"})]})}},y={name:"Popover in Overflow Popover",render(n){const[a,r]=d.useState(!1),[p,c]=d.useState("openMenuBtn"),ie=le=>{c(le.target.id),r(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs(s,{...n,style:{width:"400px"},children:[e.jsx(i,{children:"Toolbar"}),e.jsx(o,{design:t.Transparent,children:"Button One"}),e.jsx(o,{design:t.Transparent,children:"Button Two"}),e.jsx(o,{design:t.Transparent,id:"openMenuBtn",onClick:ie,children:"Open Popover (Menu)"})]}),e.jsxs(ce,{opener:p,open:a,onAfterClose:()=>{r(!1)},children:[e.jsx(j,{text:"New File"}),e.jsx(j,{text:"New Folder"})]})]})}},T={name:"with overflow button",render(n){const[a,r]=d.useState(100),p=c=>{r(c.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(me,{onInput:p,value:a}),e.jsxs(s,{...n,style:{width:`calc(100% * ${a/100})`},children:[e.jsx(i,{children:"Toolbar"}),e.jsx(o,{design:t.Transparent,children:"Button One"}),e.jsx(o,{design:t.Transparent,icon:"accept"}),e.jsx(o,{design:t.Transparent,children:"Button Two"}),e.jsx(de,{style:{width:"auto"}}),e.jsx(ne,{}),e.jsx(o,{design:t.Transparent,children:"Button Three"}),e.jsx(o,{design:t.Transparent,children:"Button Four"}),e.jsx(l,{icon:m,children:"Edit"}),e.jsx(u,{design:t.Transparent,icon:h,children:"Favorite"})]})]})}},w={name:"OverflowToolbarButton & OverflowToolbarToggleButton",render(n){return e.jsxs(s,{...n,style:{width:"500px",...n.style},children:[e.jsx(o,{design:t.Transparent,icon:m,tooltip:"Text always visible",children:"Default Button"}),e.jsx(l,{design:t.Transparent,icon:m,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(x,{design:t.Transparent,icon:h,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(u,{design:t.Transparent,icon:h,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"}),e.jsx(o,{design:t.Transparent,icon:m,tooltip:"Text always visible",children:"Default Button"}),e.jsx(l,{design:t.Transparent,icon:m,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(x,{design:t.Transparent,icon:h,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(u,{design:t.Transparent,icon:h,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"})]})}},B={name:"with custom overflow button",render(n){return e.jsxs(e.Fragment,{children:[e.jsxs(s,{...n,style:{width:"300px",...n.style},overflowButton:e.jsx(x,{icon:"menu2",design:t.Transparent,onClick:()=>{alert("Custom action")}}),children:[e.jsx(te,{}),e.jsx(i,{wrapping:!1,children:"Overflow Content"})]}),e.jsxs(s,{...n,style:{width:"300px",...n.style},overflowButton:e.jsx(x,{icon:"menu2",design:t.Transparent,onClick:a=>{a.preventDefault(),alert("Custom action")}}),children:[e.jsx(i,{wrapping:!1,children:"Opening the popover is prevented"}),e.jsx(i,{wrapping:!1,children:"Overflow Content"})]})]})}};var I,O,A;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(O=f.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var q,k,V;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'right aligned items',
  render(args) {
    return <Toolbar {...args}>
        <ToolbarSpacer />
        <Button design={ButtonDesign.Transparent}>Button</Button>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>;
  }
}`,...(V=(k=v.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var E,P,C;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(P=b.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var R,_,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(_=g.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var M,L,H;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        <Menu opener={opener} open={popoverIsOpen} onAfterClose={() => {
        setPopoverIsOpen(false);
      }}>
          <MenuItem text="New File" />
          <MenuItem text="New Folder" />
        </Menu>
      </>;
  }
}`,...(H=(L=y.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var z,U,W;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(U=T.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var $,G,J;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
          <Text wrapping={false}>Overflow Content</Text>
        </Toolbar>
        <Toolbar {...args} style={{
        width: '300px',
        ...args.style
      }} overflowButton={<ToggleButton icon="menu2" design={ButtonDesign.Transparent} onClick={e => {
        e.preventDefault();
        alert('Custom action');
      }} />}>
          <Text wrapping={false}>Opening the popover is prevented</Text>
          <Text wrapping={false}>Overflow Content</Text>
        </Toolbar>
      </>;
  }
}`,...(X=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const je=["Default","RightAlignedItems","EvenlyAlignedItems","WithSeparator","PopoverInOverflowPopover","WithOverflowButton","OverflowBtns","CustomOverflowButton"],Qe=Object.freeze(Object.defineProperty({__proto__:null,CustomOverflowButton:B,Default:f,EvenlyAlignedItems:b,OverflowBtns:w,PopoverInOverflowPopover:y,RightAlignedItems:v,WithOverflowButton:T,WithSeparator:g,__namedExportsOrder:je,default:Ne},Symbol.toStringTag,{value:"Module"}));export{Qe as C,f as D,b as E,w as O,y as P,v as R,g as W,T as a,B as b,l as c,u as d};
