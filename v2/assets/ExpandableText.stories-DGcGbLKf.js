import{a as r}from"./ExpandableText-RZwQ28dY.js";import{T as s}from"./Text-CNWDrMdn.js";import{w as l}from"./jsx-runtime-CkEx_Gfk.js";import{a as d}from"./addCustomCSSWithScoping-B73Gg2hE.js";d("ui5-expandable-text",`
:host([data-_render-whitespace]) [ui5-text]{
white-space: pre-wrap;
}`);const e=l("ui5-expandable-text",["emptyIndicatorMode","maxCharacters","overflowMode","text"],[],[],[]);e.displayName="ExpandableText";try{e.displayName="ExpandableText",e.__docgenInfo={description:`The \`ExpandableText\` component allows displaying a large body of text in a small space. It provides an "expand/collapse" functionality, which shows/hides potentially truncated text.

### Usage

#### When to use:
- To accommodate long texts in limited space, for example in list items, table cell texts, or forms

#### When not to use:
- The content is critical for the user. In this case use short descriptions that can fit in
- Strive to provide short and meaningful texts to avoid excessive number of "Show More" links on the page

### Responsive Behavior

On phones, if the component is configured to display the full text in a popover, the popover will appear in full screen.

__Note:__ For compatibility reasons, \`children\`, \`showOverflowInPopover\`, and \`renderWhitespace\` are added by the UI5 Web Components for React wrapper and are not part of the underlying web component (\`ui5-expandable-text\`).
These props will be removed in the next major release (not yet planned); see their deprecation notices for alternatives.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ExpandableText",props:{emptyIndicatorMode:{defaultValue:{value:'"Off"'},description:"Specifies if an empty indicator should be displayed when there is no text.",name:"emptyIndicatorMode",required:!1,type:{name:"enum",value:[{value:'"Off"'},{value:'"On"'},{value:'"Off"'},{value:'"On"'}]}},maxCharacters:{defaultValue:{value:"100"},description:'Maximum number of characters to be displayed initially. If the text length exceeds this limit, the text will be truncated with an ellipsis, and the "More" link will be displayed.',name:"maxCharacters",required:!1,type:{name:"number"}},overflowMode:{defaultValue:{value:'"InPlace"'},description:"Determines how the full text will be displayed.",name:"overflowMode",required:!1,type:{name:"enum",value:[{value:'"InPlace"'},{value:'"Popover"'},{value:'"InPlace"'},{value:'"Popover"'}]}},text:{defaultValue:{value:"undefined"},description:"Text of the component.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"Text of the component.\n@deprecated : Please use `text` instead.",name:"children",required:!1,type:{name:"string"}},showOverflowInPopover:{defaultValue:null,description:"Determines if the full text should be displayed inside a `ResponsivePopover` or in-place.\n@deprecated : Please use `overflowMode` instead.",name:"showOverflowInPopover",required:!1,type:{name:"boolean"}},renderWhitespace:{defaultValue:null,description:"Defines how white-space inside <code>Text</code> is handled. If set to true, sequences of white space are preserved.",name:"renderWhitespace",required:!1,type:{name:"boolean"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="ExpandableText",e.__docgenInfo={description:`The \`ExpandableText\` component allows displaying a large body of text in a small space. It provides an "expand/collapse" functionality, which shows/hides potentially truncated text.

### Usage

#### When to use:
- To accommodate long texts in limited space, for example in list items, table cell texts, or forms

#### When not to use:
- The content is critical for the user. In this case use short descriptions that can fit in
- Strive to provide short and meaningful texts to avoid excessive number of "Show More" links on the page

### Responsive Behavior

On phones, if the component is configured to display the full text in a popover, the popover will appear in full screen.

__Note:__ For compatibility reasons, \`children\`, \`showOverflowInPopover\`, and \`renderWhitespace\` are added by the UI5 Web Components for React wrapper and are not part of the underlying web component (\`ui5-expandable-text\`).
These props will be removed in the next major release (not yet planned); see their deprecation notices for alternatives.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ExpandableText",props:{emptyIndicatorMode:{defaultValue:{value:'"Off"'},description:"Specifies if an empty indicator should be displayed when there is no text.",name:"emptyIndicatorMode",required:!1,type:{name:"enum",value:[{value:'"Off"'},{value:'"On"'},{value:'"Off"'},{value:'"On"'}]}},maxCharacters:{defaultValue:{value:"100"},description:'Maximum number of characters to be displayed initially. If the text length exceeds this limit, the text will be truncated with an ellipsis, and the "More" link will be displayed.',name:"maxCharacters",required:!1,type:{name:"number"}},overflowMode:{defaultValue:{value:'"InPlace"'},description:"Determines how the full text will be displayed.",name:"overflowMode",required:!1,type:{name:"enum",value:[{value:'"InPlace"'},{value:'"Popover"'},{value:'"InPlace"'},{value:'"Popover"'}]}},text:{defaultValue:{value:"undefined"},description:"Text of the component.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"Text of the component.\n@deprecated : Please use `text` instead.",name:"children",required:!1,type:{name:"string"}},showOverflowInPopover:{defaultValue:null,description:"Determines if the full text should be displayed inside a `ResponsivePopover` or in-place.\n@deprecated : Please use `overflowMode` instead.",name:"showOverflowInPopover",required:!1,type:{name:"boolean"}},renderWhitespace:{defaultValue:null,description:"Defines how white-space inside <code>Text</code> is handled. If set to true, sequences of white space are preserved.",name:"renderWhitespace",required:!1,type:{name:"boolean"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const p={title:"Data Display / ExpandableText",component:e,argTypes:{text:{control:"text"},maxCharacters:{control:"number"},children:{control:{disable:!0}},showOverflowInPopover:{control:{disable:!0}}},args:{emptyIndicatorMode:s.Off,overflowMode:r.InPlace,text:'             If "renderWhitespace" is set to true, there will be thirteen white spaces in front and after this sentence.             Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',maxCharacters:100},tags:["package:@ui5/webcomponents"]},t={};var n,a,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const u=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{y as C,t as D};
