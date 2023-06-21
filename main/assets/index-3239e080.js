import{_ as t}from"./iframe-d36f930a.js";import"./Avatar-a8f74fed.js";import{w as a}from"./withWebComponent-7b9bd1ee.js";const e=a("ui5-avatar",["accessibleName","colorScheme","icon","initials","shape","size"],["interactive"],["badge"],[],()=>t(()=>import("./Avatar-a8f74fed.js").then(n=>n.d),["./Avatar-a8f74fed.js","./UI5Element-b6f0d493.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-7b9bd1ee.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./Icon-bd7f152d.js","./Icons-bac066a4.js","./ResizeHandler-021ae412.js","./i18n-defaults-ac1c9dde.js","./employee-a1fe0822.js"],import.meta.url));e.displayName="Avatar";try{e.displayName="Avatar",e.__docgenInfo={description:`An image-like component that has different display options for representing images and icons in different shapes and sizes, depending on the use case. The shape can be circular or square. There are several predefined sizes, as well as an option to set a custom size.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Avatar" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Avatar",props:{badge:{defaultValue:null,description:`Defines the optional badge that will be used for visual affordance. **Note:** While the slot allows for custom badges, to achieve the Fiori design, please use \`Badge\` with \`Icon\` in the corresponding \`icon\` slot, without text nodes.

Example:

<Avatar>
    <Badge slot="badge">
        <Icon slot="icon" name="employee"></Icon>
    </Badge>
</Avatar>

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="badge"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"badge",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Receives the desired `<img>` tag **Note:** If you experience flickering of the provided image, you can hide the component until it is being defined with the following CSS:\n\n`[ui5-avatar]:not(:defined) {    visibility: hidden;   }   `",name:"children",required:!1,type:{name:"ReactNode"}},accessibleName:{defaultValue:null,description:"Defines the text alternative of the component. If not provided a default text alternative will be set, if present.",name:"accessibleName",required:!1,type:{name:"string"}},colorScheme:{defaultValue:null,description:"Defines the background color of the desired image.\n\nAvailable options are:\n\n*   `Accent1`\n*   `Accent2`\n*   `Accent3`\n*   `Accent4`\n*   `Accent5`\n*   `Accent6`\n*   `Accent7`\n*   `Accent8`\n*   `Accent9`\n*   `Accent10`\n*   `Placeholder`",name:"colorScheme",required:!1,type:{name:"enum",value:[{value:'"Accent1"'},{value:'"Accent2"'},{value:'"Accent3"'},{value:'"Accent4"'},{value:'"Accent5"'},{value:'"Accent6"'},{value:'"Accent7"'},{value:'"Accent8"'},{value:'"Accent9"'},{value:'"Accent10"'},{value:'"Placeholder"'},{value:'"Accent1"'},{value:'"Accent2"'},{value:'"Accent3"'},{value:'"Accent4"'},{value:'"Accent5"'},{value:'"Accent6"'},{value:'"Accent7"'},{value:'"Accent8"'},{value:'"Accent9"'},{value:'"Accent10"'},{value:'"Placeholder"'}]}},icon:{defaultValue:null,description:`Defines the name of the UI5 Icon, that will be displayed.
**Note:** If \`image\` slot is provided, the property will be ignored.
**Note:** You should import the desired icon first, then use its name as "icon".

import "@ui5/webcomponents-icons/dist/{icon\\_name}.js"

\`<Avatar icon="employee">\`


**Note:** If no icon or an empty one is provided, by default the "employee" icon should be displayed. See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,name:"icon",required:!1,type:{name:"string"}},initials:{defaultValue:null,description:`Defines the displayed initials.
Up to three Latin letters can be displayed as initials.`,name:"initials",required:!1,type:{name:"string"}},interactive:{defaultValue:null,description:"Defines if the avatar is interactive (focusable and pressable).",name:"interactive",required:!1,type:{name:"boolean"}},shape:{defaultValue:null,description:`Defines the shape of the component.

Available options are:

*   \`Circle\`
*   \`Square\``,name:"shape",required:!1,type:{name:"enum",value:[{value:'"Circle"'},{value:'"Square"'},{value:'"Circle"'},{value:'"Square"'}]}},size:{defaultValue:null,description:"Defines predefined size of the component.\n\nAvailable options are:\n\n*   `XS`\n*   `S`\n*   `M`\n*   `L`\n*   `XL`",name:"size",required:!1,type:{name:"enum",value:[{value:'"XS"'},{value:'"S"'},{value:'"M"'},{value:'"L"'},{value:'"XL"'},{value:'"XS"'},{value:'"S"'},{value:'"M"'},{value:'"L"'},{value:'"XL"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as A};
//# sourceMappingURL=index-3239e080.js.map
