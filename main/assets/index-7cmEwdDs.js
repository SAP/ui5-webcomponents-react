import{_ as t}from"./iframe-705wv2Ng.js";import"./Token-tARUtx_F.js";import{w as o}from"./withWebComponent-l-jCeTa1.js";const e=o("ui5-token",["text"],["readonly","selected"],["closeIcon"],["select"],()=>t(()=>import("./Token-tARUtx_F.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url));e.displayName="Token";try{e.displayName="Token",e.__docgenInfo={description:`Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-MultiInput)`,displayName:"Token",props:{closeIcon:{defaultValue:null,description:`Defines the close icon for the token. If nothing is provided to this slot, the default close icon will be used. Accepts \`Icon\`.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="closeIcon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"closeIcon",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onSelect:{defaultValue:null,description:"Fired when the the component is selected by user interaction with mouse or by clicking space.",name:"onSelect",required:!1,type:{name:"(event: Ui5CustomEvent<TokenDomRef, never>) => void"}},readonly:{defaultValue:null,description:`Defines whether the component is read-only.

**Note:** A read-only component can not be deleted or selected, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"Defines whether the component is selected or not.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the token.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as T};
//# sourceMappingURL=index-7cmEwdDs.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Token-tARUtx_F.js","./UI5Element-Y0uzLFOr.js","./i18nBundle-Crssojm_.js","./VersionInfo-hBCHoyLi.js","./CustomElementsScopeUtils-5j4ES8UU.js","./withWebComponent-l-jCeTa1.js","./utils-NoXYr8Q_.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./slot-HSrR9XJ-.js","./Icon-bdsWWJur.js","./Icons-WRZ8WMWs.js","./decline-tcMkvtbY.js","./i18n-defaults-n2A5pq_J.js","./i18n-defaults-RBzcmDt8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}