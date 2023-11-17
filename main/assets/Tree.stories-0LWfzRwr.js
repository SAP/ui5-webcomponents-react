import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{o as d}from"./UI5Element-51XrG2PJ.js";import{r as o}from"./Icons-3pbvVZUr.js";import{s as h}from"./general-leave-request-Lliuf4ll.js";import{r as f}from"./index-OjgoNOWw.js";import{T as W}from"./index-S1zyQWjr.js";import{B as H}from"./index--RG6kV6A.js";import{B as U}from"./index-2S6zoQWg.js";import{I as y}from"./index-X4bIzM78.js";import{_ as c}from"./iframe-_OlRtZJR.js";import"./Tree-f3VLQ2T7.js";import{w as m}from"./withWebComponent-ceo0jn6D.js";import{V as x}from"./ValueState-I_-hGNIb.js";import{L as w}from"./ListItem-rKilMSpt.js";import{a as _}from"./ListItemBase-_j3gRdH2.js";const a=m("ui5-tree",["accessibleName","accessibleNameRef","footerText","headerText","mode","noDataText"],[],["header"],["item-click","item-delete","item-mouseout","item-mouseover","item-toggle","selection-change"],()=>c(()=>import("./Tree-f3VLQ2T7.js").then(n=>n.d),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]),import.meta.url));a.displayName="Tree";a.defaultProps={mode:_.None};try{a.displayName="Tree",a.__docgenInfo={description:`The \`Tree\` component provides a tree structure for displaying data in a hierarchy.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Tree)`,displayName:"Tree",props:{children:{defaultValue:null,description:"Defines the items of the component. Tree items may have other tree items as children.\n\n**Note:** Use `TreeItem` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header.

**Note:** When the \`header\` slot is set, the \`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onItemClick:{defaultValue:null,description:"Fired when a tree item is activated.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onItemDelete:{defaultValue:null,description:"Fired when the Delete button of any tree item is pressed.\n\n**Note:** A Delete button is displayed on each item, when the component `mode` property is set to `Delete`.",name:"onItemDelete",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onItemMouseout:{defaultValue:null,description:"Fired when the mouse cursor leaves the tree item borders.",name:"onItemMouseout",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onItemMouseover:{defaultValue:null,description:"Fired when the mouse cursor enters the tree item borders.",name:"onItemMouseover",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onItemToggle:{defaultValue:null,description:"Fired when a tree item is expanded or collapsed. _Note:_ You can call `preventDefault()` on the event object to suppress the event, if needed. This may be handy for example if you want to dynamically load tree items upon the user expanding a node. Even if you prevented the event's default behavior, you can always manually call `toggle()` on a tree item.",name:"onItemToggle",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction in `SingleSelect`, `SingleSelectBegin`, `SingleSelectEnd` and `MultiSelect` modes.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeSelectionChangeEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},footerText:{defaultValue:null,description:"Defines the component footer text.",name:"footerText",required:!1,type:{name:"string"}},headerText:{defaultValue:null,description:"Defines the component header text.\n\n**Note:** If the `header` slot is set, this property is ignored.",name:"headerText",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"ListMode.None"},description:"Defines the mode of the component. Since the tree uses a `List` to display its structure, the tree modes are exactly the same as the list modes, and are all applicable.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'},{value:'"Delete"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'},{value:'"Delete"'}]}},noDataText:{defaultValue:null,description:"Defines the text that is displayed when the component contains no items.",name:"noDataText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const t=m("ui5-tree-item",["additionalText","additionalTextState","text","accessibleName","icon","type"],["expanded","hasChildren","indeterminate","navigated","selected"],["deleteButton"],["detail-click"],()=>c(()=>import("./Tree-f3VLQ2T7.js").then(n=>n.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]),import.meta.url));t.displayName="TreeItem";t.defaultProps={additionalTextState:x.None,type:w.Active};try{t.displayName="TreeItem",t.__docgenInfo={description:"The `TreeItem` represents a node in a tree structure, shown as a `List`.\nThis is the item to use inside a `Tree`. You can represent an arbitrary tree structure by recursively nesting tree items.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Tree)",displayName:"TreeItem",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n**Note:** Use `TreeItem` or `TreeItemCustom`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode. **Note:** While the slot allows custom buttons, to match design guidelines, please use the \`Button\` component. **Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:"Fired when the user clicks on the detail button when type is `Detail`.",name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<TreeItemDomRef, never>) => void"}},additionalText:{defaultValue:null,description:"Defines the `additionalText`, displayed in the end of the tree item.",name:"additionalText",required:!1,type:{name:"string"}},additionalTextState:{defaultValue:{value:"ValueState.None"},description:'Defines the state of the `additionalText`.\nAvailable options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Error"`.',name:"additionalTextState",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},text:{defaultValue:null,description:"Defines the text of the tree item.",name:"text",required:!1,type:{name:"string"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},expanded:{defaultValue:null,description:"Defines whether the tree list item will show a collapse or expand icon inside its toggle button.",name:"expanded",required:!1,type:{name:"boolean"}},hasChildren:{defaultValue:null,description:"Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.\n_Note:_ This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons. Set this to `true` for nodes you intend to load lazily, when the user clicks the expand button. It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.",name:"hasChildren",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"If set, an icon will be displayed before the text of the tree list item.",name:"icon",required:!1,type:{name:"string"}},indeterminate:{defaultValue:null,description:"Defines whether the selection of a tree node is displayed as partially selected.\n\n**Note:** The indeterminate state can be set only programmatically and can’t be achieved by user interaction, meaning that the resulting visual state depends on the values of the `indeterminate` and `selected` properties:\n\n*   If a tree node has both `selected` and `indeterminate` set to `true`, it is displayed as partially selected.\n*   If a tree node has `selected` set to `true` and `indeterminate` set to `false`, it is displayed as selected.\n*   If a tree node has `selected` set to `false`, it is displayed as not selected regardless of the value of the `indeterminate` property.\n\n\n**Note:** This property takes effect only when the `Tree` is in `MultiSelect` mode.",name:"indeterminate",required:!1,type:{name:"boolean"}},navigated:{defaultValue:null,description:"The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item.",name:"navigated",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"ListItemType.Active"},description:"Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'}]}},selected:{defaultValue:null,description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const s=m("ui5-tree-item-custom",["accessibleName","additionalTextState","icon","type"],["hideSelectionElement","expanded","hasChildren","indeterminate","navigated","selected"],["content","deleteButton"],["detail-click"],()=>c(()=>import("./Tree-f3VLQ2T7.js").then(n=>n.c),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]),import.meta.url));s.displayName="TreeItemCustom";s.defaultProps={additionalTextState:x.None,type:w.Active};try{s.displayName="TreeItemCustom",s.__docgenInfo={description:"The `TreeItemCustom` represents a node in a tree structure, shown as a `List`.\nThis is the item to use inside a `Tree`. You can represent an arbitrary tree structure by recursively nesting tree items. You can use this item to put any custom content inside the tree item.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Tree)",displayName:"TreeItemCustom",props:{content:{defaultValue:null,description:`Defines the content of the \`TreeItem\`.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="content"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"content",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},children:{defaultValue:null,description:"Defines the items of the component.\n\n**Note:** Use `TreeItem` or `TreeItemCustom`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode. **Note:** While the slot allows custom buttons, to match design guidelines, please use the \`Button\` component. **Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:"Fired when the user clicks on the detail button when type is `Detail`.",name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<TreeItemCustomDomRef, never>) => void"}},hideSelectionElement:{defaultValue:null,description:"Defines whether the tree list item should display the selection element.",name:"hideSelectionElement",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},additionalTextState:{defaultValue:{value:"ValueState.None"},description:'Defines the state of the `additionalText`.\nAvailable options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Error"`.',name:"additionalTextState",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},expanded:{defaultValue:null,description:"Defines whether the tree list item will show a collapse or expand icon inside its toggle button.",name:"expanded",required:!1,type:{name:"boolean"}},hasChildren:{defaultValue:null,description:"Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.\n_Note:_ This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons. Set this to `true` for nodes you intend to load lazily, when the user clicks the expand button. It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.",name:"hasChildren",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"If set, an icon will be displayed before the text of the tree list item.",name:"icon",required:!1,type:{name:"string"}},indeterminate:{defaultValue:null,description:"Defines whether the selection of a tree node is displayed as partially selected.\n\n**Note:** The indeterminate state can be set only programmatically and can’t be achieved by user interaction, meaning that the resulting visual state depends on the values of the `indeterminate` and `selected` properties:\n\n*   If a tree node has both `selected` and `indeterminate` set to `true`, it is displayed as partially selected.\n*   If a tree node has `selected` set to `true` and `indeterminate` set to `false`, it is displayed as selected.\n*   If a tree node has `selected` set to `false`, it is displayed as not selected regardless of the value of the `indeterminate` property.\n\n\n**Note:** This property takes effect only when the `Tree` is in `MultiSelect` mode.",name:"indeterminate",required:!1,type:{name:"boolean"}},navigated:{defaultValue:null,description:"The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item.",name:"navigated",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"ListItemType.Active"},description:"Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'}]}},selected:{defaultValue:null,description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const j="copy",N="M32 192l96-96h224q13 0 22.5 9t9.5 23v352q0 14-9 23t-23 9H65q-14 0-23.5-9T32 480V192zm320 288V128H160v64q0 14-9.5 23t-23.5 9H65v256h287zM159 64l65-64h224q12 0 22 9t10 23v352q0 14-9 23t-23 9h-32v-32h32V32H256v32h-97zm-15 256h128q16 0 16 16 0 6-4.5 11t-11.5 5H144q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5zm-16 80q0-7 5-11.5t11-4.5h128q16 0 16 16 0 6-4.5 11t-11.5 5H144q-6 0-11-5t-5-11z",M=!1,A="SAP-icons-v4",R="@ui5/webcomponents-icons";o(j,{pathData:N,ltr:M,collection:A,packageName:R});const $="copy",S="M384 26q0 11-7.5 18T358 51H122q-17 0-28 11T83 90v268q0 11-7 18.5T58 384t-18.5-7.5T32 358V90q0-38 26-64t64-26h236q11 0 18.5 7.5T384 26zm6 70q38 0 64 26t26 64v236q0 38-26 64t-64 26H218q-38 0-64-26t-26-64V186q0-38 26-64t64-26h172zm39 90q0-17-11-28t-28-11H218q-17 0-28 11t-11 28v236q0 17 11 28t28 11h172q17 0 28-11t11-28V186zm-71 83q11 0 18.5 7.5T384 295t-7.5 18-18.5 7H250q-11 0-18.5-7t-7.5-18 7.5-18.5T250 269h108zm0 96q11 0 18.5 7t7.5 18-7.5 18.5T358 416H250q-11 0-18.5-7.5T224 390t7.5-18 18.5-7h108z",B=!1,P="SAP-icons-v5",F="@ui5/webcomponents-icons";o($,{pathData:S,ltr:B,collection:P,packageName:F});d();const O="copy",G="download-from-cloud",D="M493.037 211.587q17.965 22.955 17.965 55.89 0 17.965-6.986 30.94-2.995 7.985-7.985 14.97l-9.98 13.974q-5.989 6.986-10.48 9.98t-12.475 5.988q-18.963 7.985-33.934 7.985h-13.973v-31.938h13.973q6.986 0 21.957-4.99 4.99-1.996 6.487-2.994t4.491-3.992q3.993-4.99 6.987-9.98t4.99-9.981l1.996-3.993q2.994-5.988 2.994-15.968 0-23.954-10.978-35.93-8.983-11.977-29.942-17.965l-40.92-10.979 21.957-35.93q3.992-6.986 3.992-17.964 0-24.952-16.966-40.92-15.97-15.97-41.919-15.97-20.959 0-35.93 11.977l-32.935 28.944-16.967-39.922q-12.975-27.946-36.928-43.915-22.955-16.966-57.887-16.966-12.974 0-31.937 7.984-16.967 7.984-33.934 22.955-10.979 9.98-20.96 30.94-6.985 13.972-6.985 34.932 0 18.963 8.982 33.933l21.957 36.928-41.918 9.98q-21.957 5.989-32.936 19.962l-.998.998v.998q-12.974 14.97-12.974 35.93 0 8.982 4.99 18.963.998 1.996 4.99 7.984t16.967 16.967q1.996 1.996 12.975 4.99t39.922 2.994v31.938q-22.955 0-42.917-2.994t-30.94-12.975q-23.952-20.959-30.939-35.93T0 267.478q0-34.932 20.96-57.887 18.962-22.956 49.902-30.94-12.975-21.957-12.975-49.902 0-28.944 9.98-48.905 10.979-23.953 27.946-40.92 17.965-16.967 41.918-27.945T183.641 0q44.913 0 75.852 21.957 31.938 21.957 47.907 57.887 22.955-19.961 56.888-19.961 38.924 0 63.876 24.951 26.947 25.95 26.947 63.876 0 18.963-8.982 33.933 27.945 6.987 46.908 28.944zM279.454 502.019Q269.474 512 256.5 512t-21.957-9.98L132.74 401.215q-11.977-11.976 0-22.955 4.99-4.99 10.978-4.99t10.979 4.99l84.834 84.835V192.624q0-15.969 15.969-15.969t15.969 15.969v272.468l86.83-86.83q10.979-10.98 22.955 0 10.979 10.978 0 22.954z",Y=!1,Q="SAP-icons-v4",J="@ui5/webcomponents-icons";o(G,{pathData:D,ltr:Y,collection:Q,packageName:J});const K="download-from-cloud",V="M264 236q-8-8-8-18 0-11 7.5-18.5T282 192t18 7l33 34V90q0-11 7-18.5t18-7.5 18.5 7.5T384 90v143l33-34q7-7 18-7t18.5 7.5T461 218q0 10-8 18l-76 76q-8 8-19 8-10 0-18-8zm222 52q11 0 18.5 7.5T512 314q0 27-10 51.5t-27 43-41 29-52 10.5H109q-22 0-42-9t-35-24-23.5-35.5T0 336t8.5-43 23-35 34-24 41.5-9q4-25 16-47.5t29-40 39.5-28.5T239 96h4q10-1 17.5 6t8.5 17v2q1 10-7 17.5t-25 9.5q-16 1-30.5 10t-26 22-18 29-6.5 32q0 18-7.5 26.5T130 276h-21q-24 0-41 17.5T51 336q0 26 17 43.5t41 17.5h273q33 0 56-24.5t23-58.5q0-11 7-18.5t18-7.5z",X=!1,Z="SAP-icons-v5",ee="@ui5/webcomponents-icons";o(K,{pathData:V,ltr:X,collection:Z,packageName:ee});d();const te="download-from-cloud",ne="paste",C="M192 224q0-14 9-23t23-9h224q13 0 22.5 9t9.5 23v256q0 13-9.5 22.5T448 512H224q-14 0-23-9.5t-9-22.5V224zm32 256h224V224H224v256zM32 96q0-14 9.5-23T65 64h65q11-28 38-32 8-14 23-23t33-9q17 0 32 9t23 23q27 4 38 32h67q13 0 22 9t9 23v64h-31V96h-68q-5 12-12.5 22T281 128H166q-15 0-22.5-10T131 96H65v384h95v32H65q-14 0-23.5-9.5T32 480V96zm143 0h96q7 0 11.5-5t4.5-11q0-16-16-16h-15q0-14-9.5-23T224 32q-14 0-23 9t-9 23h-17q-6 0-11 4.5T159 80q0 6 5 11t11 5zm97 224h128q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5zm0 63h128q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5z",ae=!1,oe="SAP-icons-v4",ie="@ui5/webcomponents-icons";o(ne,{pathData:C,ltr:ae,collection:oe,packageName:ie});const le="paste",z="M319 115q-5 20-20.5 32.5T262 160h-76q-21 0-36.5-12.5T130 115H90q-7 0-7 7v332q0 7 7 7h12q11 0 18.5 7t7.5 18-7.5 18.5T102 512H90q-24 0-41-17t-17-41V122q0-24 17-41t41-17h38v-6q0-24 17-41t41-17h76q24 0 41 17t17 41v6h38q24 0 41 17t17 41v12q0 11-7.5 18.5T390 160t-18-7.5-7-18.5v-12q0-7-7-7h-39zm-140-13q0 7 7 7h76q7 0 7-7V58q0-7-7-7h-76q-7 0-7 7v44zm275 122q11 0 18.5 7.5T480 250v236q0 11-7.5 18.5T454 512H218q-11 0-18.5-7.5T192 486V250q0-11 7.5-18.5T218 224h236zm-25 51H243v186h186V275zm-115 81q-11 0-18.5-7.5T288 330t7.5-18 18.5-7h44q11 0 18.5 7t7.5 18-7.5 18.5T358 356h-44zm0 75q-11 0-18.5-7t-7.5-18 7.5-18.5T314 380h44q11 0 18.5 7.5T384 406t-7.5 18-18.5 7h-44z",se=!1,re="SAP-icons-v5",de="@ui5/webcomponents-icons";o(le,{pathData:z,ltr:se,collection:re,packageName:de});d();const ce="paste",me={title:"Data Display / Tree",component:a,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{mode:_.None}},i={render:n=>e.jsxs(a,{...n,children:[e.jsx(t,{expanded:!0,text:"Tree 1",icon:ce,selected:!0,children:e.jsxs(t,{expanded:!0,text:"Tree 1.1",selected:!0,children:[e.jsx(t,{text:"Tree 1.1.1"}),e.jsx(t,{text:"Tree 1.1.2"})]})}),e.jsxs(t,{text:"Tree 2",icon:O,children:[e.jsxs(t,{text:"Tree 2.1",children:[e.jsx(t,{text:"Tree 2.1.1"}),e.jsxs(t,{text:"Tree 2.1.2",children:[e.jsx(t,{text:"Tree 2.1.2.1"}),e.jsx(t,{text:"Tree 2.1.2.2"}),e.jsx(t,{text:"Tree 2.1.2.3"}),e.jsx(t,{text:"Tree 2.1.2.5"})]})]}),e.jsx(t,{text:"Tree 2.2"})]}),e.jsx(t,{text:"Tree 3 (no icon)"}),e.jsx(s,{content:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(y,{name:h,style:{marginInlineEnd:"2rem"}}),e.jsx(W,{children:"I'm a fully customizable TreeItemCustom!"}),e.jsx(U,{children:"Btn"}),e.jsx(y,{name:h,style:{marginInlineStart:"2rem"}})]})})]})},l={render:n=>{const[u,E]=f.useState(null),[k,p]=f.useState(!1),L=r=>{r.detail.item.dataset.id==="lazychildren"&&!u&&(r.preventDefault(),p(!0),setTimeout(()=>{p(!1),E(e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Tree 3.1"}),e.jsx(t,{text:"Tree 3.2"})]})),r.detail.item.toggle()},3e3))};return e.jsx(H,{active:k,style:{width:"100%"},children:e.jsxs(a,{...n,onItemToggle:L,children:[e.jsxs(t,{text:"Has pre-loaded children",children:[e.jsx(t,{text:"Tree 1.1"}),e.jsx(t,{text:"Tree 1.2"})]}),e.jsx(t,{text:"Has no children"}),e.jsx(t,{text:"Has children but not yet loaded",hasChildren:!0,icon:te,"data-id":"lazychildren",children:u})]})})}};var v,T,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <Tree {...args}>
        <TreeItem expanded text="Tree 1" icon={pasteIcon} selected>
          <TreeItem expanded text="Tree 1.1" selected>
            <TreeItem text="Tree 1.1.1" />
            <TreeItem text="Tree 1.1.2" />
          </TreeItem>
        </TreeItem>
        <TreeItem text="Tree 2" icon={copyIcon}>
          <TreeItem text="Tree 2.1">
            <TreeItem text="Tree 2.1.1" />
            <TreeItem text="Tree 2.1.2">
              <TreeItem text="Tree 2.1.2.1" />
              <TreeItem text="Tree 2.1.2.2" />
              <TreeItem text="Tree 2.1.2.3" />
              <TreeItem text="Tree 2.1.2.5" />
            </TreeItem>
          </TreeItem>
          <TreeItem text="Tree 2.2" />
        </TreeItem>
        <TreeItem text="Tree 3 (no icon)" />
        <TreeItemCustom content={<div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
              <Icon name={sunIcon} style={{
          marginInlineEnd: '2rem'
        }} />
              <Text>I'm a fully customizable TreeItemCustom!</Text>
              <Button>Btn</Button>
              <Icon name={sunIcon} style={{
          marginInlineStart: '2rem'
        }} />
            </div>} />
      </Tree>;
  }
}`,...(g=(T=i.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var b,q,I;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const [lazyChildren, setLazyChildren] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleItemToggle = e => {
      if (e.detail.item.dataset.id === 'lazychildren' && !lazyChildren) {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setLazyChildren(<>
              <TreeItem text="Tree 3.1" />
              <TreeItem text="Tree 3.2" />
            </>);
          e.detail.item.toggle();
        }, 3000);
      }
    };
    return <BusyIndicator active={loading} style={{
      width: '100%'
    }}>
        <Tree {...args} onItemToggle={handleItemToggle}>
          <TreeItem text="Has pre-loaded children">
            <TreeItem text="Tree 1.1" />
            <TreeItem text="Tree 1.2" />
          </TreeItem>
          <TreeItem text="Has no children" />
          <TreeItem text="Has children but not yet loaded" hasChildren icon={dlCloutIcon} data-id="lazychildren">
            {lazyChildren}
          </TreeItem>
        </Tree>
      </BusyIndicator>;
  }
}`,...(I=(q=l.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};const ue=["Default","LazyLoading"],De=Object.freeze(Object.defineProperty({__proto__:null,Default:i,LazyLoading:l,__namedExportsOrder:ue,default:me},Symbol.toStringTag,{value:"Module"}));export{De as C,i as D,l as L,t as T,s as a};
//# sourceMappingURL=Tree.stories-0LWfzRwr.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Tree-f3VLQ2T7.js","./UI5Element-51XrG2PJ.js","./CustomElementsScopeUtils-FvbtGFoH.js","./withWebComponent-ceo0jn6D.js","./utils-CrDMzPRG.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./slot-HSrR9XJ-.js","./Icon-HNXZSIOG.js","./Icons-3pbvVZUr.js","./AriaLabelHelper-RbKlVwzD.js","./ValueState-zUcANXoY.js","./Integer-kog98579.js","./ListItem-rKilMSpt.js","./MarkedEvents-aYv14vsS.js","./decline-Q45dXYUl.js","./i18n-defaults-n2A5pq_J.js","./ListItemBase-_j3gRdH2.js","./ResizeHandler-9pqGT1BJ.js","./ItemNavigation-ETHVU2CC.js","./getActiveElement-IIKAy3xo.js","./TabbableElements-aYIPY3zp.js","./isElementHidden-d3-Fo4V6.js","./debounce-8VpZswfd.js","./BusyIndicator-6K1dNXem.js","./Label-z__cPwIf.js","./WrappingType-avPrqc94.js","./i18n-defaults-RBzcmDt8.js","./class-map-JXa0-u4l.js","./style-map-uWW-8QIe.js","./BrowserScrollbar.css-HfEGARrw.js","./RadioButton-m4J4aih-.js","./CheckBox-0IljwRo-.js","./accept-vW9BdDVG.js","./Button-a5xMWTkk.js","./HasPopup-9BAMrqbD.js","./slim-arrow-right-v6ItARyR.js","./navigation-right-arrow-Fb0ISy1H.js","./navigation-down-arrow-FvDQT9ZW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}