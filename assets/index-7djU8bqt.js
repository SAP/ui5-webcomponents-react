import{_ as n}from"./iframe-WacV7gDs.js";import"./IllustratedMessage-Eojhei9a.js";import{w as o}from"./withWebComponent-LTFbYRvs.js";const e=o("ui5-illustrated-message",["accessibleNameRef","name","size","subtitleText","titleLevel","titleText"],[],["subtitle","title"],[],()=>n(()=>import("./IllustratedMessage-Eojhei9a.js").then(t=>t.e),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url));e.displayName="IllustratedMessage";try{e.displayName="IllustratedMessage",e.__docgenInfo={description:`An IllustratedMessage is a recommended combination of a solution-oriented message, an engaging
illustration, and conversational tone to better communicate an empty or a success state than just show
a message alone.

Each illustration has default internationalised title and subtitle texts. Also they can be managed with
\`titleText\` and \`subtitleText\` properties.

To display the desired illustration, use the \`name\` property, where you can find the list of all available illustrations.

**Note:** By default the “BeforeSearch” illustration is loaded. To use other illustrations, make sure you import them in addition, for example:

\`import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js"\`

**Note:** Illustrations starting with the “Tnt” prefix are part of another illustration set. For example to use the “TntSuccess” illustration, add the following import::

\`import "@ui5/webcomponents-fiori/dist/illustrations/tnt/Success.js"\`

### Structure
The IllustratedMessage consists of the following elements, which are displayed below each other in the following order:

- Illustration
- Title
- Subtitle
- Actions

### Usage
\`IllustratedMessage\` is meant to be used inside container component, for example a \`ui5-card\`,
a \`ui5-dialog\` or a \`Page\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"IllustratedMessage",props:{children:{defaultValue:null,description:"Defines the component actions.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},subtitle:{defaultValue:null,description:`Defines the subtitle of the component.

**Note:** Using this slot, the default subtitle text of illustration and the value of \`subtitleText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="subtitle"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"subtitle",required:!1,type:{name:"UI5WCSlotsNode"}},title:{defaultValue:null,description:`Defines the title of the component.

**Note:** Using this slot, the default title text of illustration and the value of \`title\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="title"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"title",required:!1,type:{name:"UI5WCSlotsNode"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},name:{defaultValue:{value:'"BeforeSearch"'},description:`Defines the illustration name that will be displayed in the component.

Example:

\`name='BeforeSearch'\`, \`name='UnableToUpload'\`, etc..

**Note:** To use the TNT illustrations,
you need to set the \`tnt\` or \`Tnt\` prefix in front of the icon's name.

Example:

\`name='tnt/Avatar'\` or \`name='TntAvatar'\`.

**Note:** By default the \`BeforeSearch\` illustration is loaded.
When using an illustration type, other than the default, it should be loaded in addition:

\`import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";\`

For TNT illustrations:

\`import "@ui5/webcomponents-fiori/dist/illustrations/tnt/SessionExpired.js";\``,name:"name",required:!1,type:{name:"string"}},size:{defaultValue:{value:'"Auto"'},description:"Determines which illustration breakpoint variant is used.\n\nAs `IllustratedMessage` adapts itself around the `Illustration`, the other\nelements of the component are displayed differently on the different breakpoints/illustration sizes.",name:"size",required:!1,type:{name:"enum",value:[{value:'"Dialog"'},{value:'"Auto"'},{value:'"Auto"'},{value:'"Base"'},{value:'"Dot"'},{value:'"Spot"'},{value:'"Dialog"'},{value:'"Scene"'},{value:'"Base"'},{value:'"Dot"'},{value:'"Spot"'},{value:'"Scene"'}]}},subtitleText:{defaultValue:null,description:`Defines the subtitle of the component.

**Note:** Using this property, the default subtitle text of illustration will be overwritten.

**Note:** Using \`subtitle\` slot, the default of this property will be overwritten.`,name:"subtitleText",required:!1,type:{name:"string"}},titleLevel:{defaultValue:{value:'"H2"'},description:`Defines the semantic level of the title.

**Note:** Used for accessibility purposes only.

**Note:** Doesn't take effect when \`title\` slot is being used.`,name:"titleLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},titleText:{defaultValue:null,description:`Defines the title of the component.

**Note:** Using this property, the default title text of illustration will be overwritten.`,name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as I};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./IllustratedMessage-Eojhei9a.js","./UI5Element-9EXj3atz.js","./Boot-vTaFuwdG.js","./VersionInfo-ldzxTIVv.js","./CustomElementsScopeUtils-orabJqjR.js","./withWebComponent-LTFbYRvs.js","./utils-d3BcYjeO.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./slot-HSrR9XJ-.js","./ResizeHandler-_qRzLmqT.js","./AriaLabelHelper-RbKlVwzD.js","./i18nBundle-j8vDD4VY.js","./Title-yLgJni0m.js","./WrappingType-avPrqc94.js","./parameters-bundle.css-EKzfhWK3.js","./i18n-defaults-MpaKYGWX.js","./parameters-bundle.css--8JKw2Pt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
