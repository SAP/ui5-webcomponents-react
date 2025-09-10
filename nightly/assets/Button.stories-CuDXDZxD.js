import{w as r,_ as d,Q as s,j as e,aR as i}from"./iframe-113A6qfG.js";import{e as l}from"./employee-DGRBVhuT.js";import"./ButtonBadge-CwRg5F3h.js";const t=r("ui5-button-badge",["design","text"],[],[],[]);t.displayName="ButtonBadge";try{t.displayName="ButtonBadge",t.__docgenInfo={description:"The `ButtonBadge` component defines a badge that appears in the `Button`.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ButtonBadge",props:{design:{defaultValue:{value:'"AttentionDot"'},description:`Defines the badge placement and appearance.
- **InlineText** - displayed inside the button after its text, and recommended for **compact** density.
- **OverlayText** - displayed at the top-end corner of the button, and recommended for **cozy** density.
- **AttentionDot** - displayed at the top-end corner of the button as a dot, and suitable for both **cozy** and **compact** densities.

**Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"InlineText"'},{value:'"OverlayText"'},{value:'"AttentionDot"'},{value:'"InlineText"'},{value:'"OverlayText"'},{value:'"AttentionDot"'}]}},text:{defaultValue:null,description:`Defines the text of the component.

**Note:** Text is not applied when the \`design\` property is set to \`AttentionDot\`.

**Note:** The badge component only accepts numeric values and the "+" symbol. Using other characters or formats may result in unpredictable behavior, which is not guaranteed or supported.

**Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="ButtonBadge",t.__docgenInfo={description:"The `ButtonBadge` component defines a badge that appears in the `Button`.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ButtonBadge",props:{design:{defaultValue:{value:'"AttentionDot"'},description:`Defines the badge placement and appearance.
- **InlineText** - displayed inside the button after its text, and recommended for **compact** density.
- **OverlayText** - displayed at the top-end corner of the button, and recommended for **cozy** density.
- **AttentionDot** - displayed at the top-end corner of the button as a dot, and suitable for both **cozy** and **compact** densities.

**Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"InlineText"'},{value:'"OverlayText"'},{value:'"AttentionDot"'},{value:'"InlineText"'},{value:'"OverlayText"'},{value:'"AttentionDot"'}]}},text:{defaultValue:null,description:`Defines the text of the component.

**Note:** Text is not applied when the \`design\` property is set to \`AttentionDot\`.

**Note:** The badge component only accepts numeric values and the "+" symbol. Using other characters or formats may result in unpredictable behavior, which is not guaranteed or supported.

**Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const u={title:"Inputs / Button",component:s,argTypes:{children:{control:"text"},badge:{control:{disable:!0}}},args:{design:d.Default,icon:l,children:"Button Text"},tags:["package:@ui5/webcomponents"]},o={},a={render(n){return e.jsxs(e.Fragment,{children:[e.jsx(s,{...n,badge:e.jsx(t,{design:i.AttentionDot}),children:"ButtonBadgeDesign.AttentionDot"}),e.jsx(s,{...n,badge:e.jsx(t,{design:i.InlineText,text:"badge"}),children:"ButtonBadgeDesign.InlineText"}),e.jsx(s,{...n,badge:e.jsx(t,{design:i.OverlayText,text:"badge"}),children:"ButtonBadgeDesign.OverlayText"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <>
        <Button {...args} badge={<ButtonBadge design={ButtonBadgeDesign.AttentionDot} />}>
          ButtonBadgeDesign.AttentionDot
        </Button>
        <Button {...args} badge={<ButtonBadge design={ButtonBadgeDesign.InlineText} text="badge" />}>
          ButtonBadgeDesign.InlineText
        </Button>
        <Button {...args} badge={<ButtonBadge design={ButtonBadgeDesign.OverlayText} text="badge" />}>
          ButtonBadgeDesign.OverlayText
        </Button>
      </>;
  }
}`,...a.parameters?.docs?.source}}};const p=["Default","WithBadge"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithBadge:a,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{t as B,g as C,o as D,a as W};
