import{_ as o}from"./iframe-qRJ842Ja.js";import{B as n}from"./Bar-xgXfOR76.js";import{w as a}from"./withWebComponent-y_2h_qsG.js";const e=a("ui5-bar",["design"],[],["endContent","startContent"],[],()=>o(()=>import("./Bar-xgXfOR76.js").then(t=>t.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url));e.displayName="Bar";e.defaultProps={design:n.Header};try{e.displayName="Bar",e.__docgenInfo={description:`The Bar is a container which is primarily used to hold titles, buttons and input elements and its design and functionality is the basis for page headers and footers. The component consists of three areas to hold its content - startContent slot, default slot and endContent slot. It has the capability to center content, such as a title, while having other components on the left and right side.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-Bar)`,displayName:"Bar",props:{children:{defaultValue:null,description:"Defines the content in the middle of the bar.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},endContent:{defaultValue:null,description:`Defines the content at the end of the bar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="endContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"endContent",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},startContent:{defaultValue:null,description:`Defines the content at the start of the bar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="startContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"startContent",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},design:{defaultValue:{value:"BarDesign.Header"},description:"Defines the component's design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Header"'},{value:'"Subheader"'},{value:'"Footer"'},{value:'"FloatingFooter"'},{value:'"Header"'},{value:'"Subheader"'},{value:'"Footer"'},{value:'"FloatingFooter"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as B};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Bar-xgXfOR76.js","./UI5Element-4kitL615.js","./i18nBundle-h5yKZf-0.js","./VersionInfo-yX_RFFR1.js","./CustomElementsScopeUtils-icazltFf.js","./withWebComponent-y_2h_qsG.js","./utils-jDGQm03y.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./slot-HSrR9XJ-.js","./ResizeHandler-_S6lmbp5.js","./class-map-aNJl42Aw.js","./parameters-bundle.css-u0t_c0h4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}