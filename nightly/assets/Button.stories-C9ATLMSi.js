import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{n,t as r}from"./withWebComponent-DhD1x6sB.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{c as a,l as o,s,u as c}from"./Button-D_83k3d2.js";import{n as l,t as u}from"./Button-BMYo3Xf9.js";import{n as d,t as f}from"./employee-DnTXlWDs.js";import{n as p}from"./ButtonBadge-2o_axjHu.js";var m;function h(){return(h=e((()=>{p(),r(),m=n(`ui5-button-badge`,[`design`,`text`],[],[],[]),m.displayName=`ButtonBadge`;try{m.displayName=`ButtonBadge`,m.__docgenInfo={description:`The \`ButtonBadge\` component defines a badge that appears in the \`Button\`.



__Note:__ This is a UI5 Web Component! [ButtonBadge UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ButtonBadge) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`ButtonBadge`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ButtonBadge/index.d.ts`,methods:[],props:{design:{defaultValue:{value:`"AttentionDot"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ButtonBadge/index.d.ts`,name:`ButtonBadgeAttributes`}],description:`Defines the badge placement and appearance.
- **InlineText** - displayed inside the button after its text, and recommended for **compact** density.
- **OverlayText** - displayed at the top-end corner of the button, and recommended for **cozy** density.
- **AttentionDot** - displayed at the top-end corner of the button as a dot, and suitable for both **cozy** and **compact** densities.

**Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.`,name:`design`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ButtonBadge/index.d.ts`,name:`ButtonBadgeAttributes`},required:!1,tags:{default:`"AttentionDot"`},type:{name:`enum`,raw:`ButtonBadgeDesign | "InlineText" | "OverlayText" | "AttentionDot"`,value:[{value:`"InlineText"`,description:`The badge is displayed after the text, inside the button.`,fullComment:`The badge is displayed after the text, inside the button.
@public`,tags:{public:``}},{value:`"OverlayText"`,description:`The badge is displayed at the top-end corner of the button.

**Note:** According to design guidance, the OverlayText design mode is best used in cozy density to avoid potential visual issues in compact.`,fullComment:`The badge is displayed at the top-end corner of the button.

**Note:** According to design guidance, the OverlayText design mode is best used in cozy density to avoid potential visual issues in compact.
@public`,tags:{public:``}},{value:`"AttentionDot"`,description:`The badge is displayed as an attention dot.`,fullComment:`The badge is displayed as an attention dot.
@public`,tags:{public:``}},{value:`"InlineText"`},{value:`"OverlayText"`},{value:`"AttentionDot"`}]}},text:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ButtonBadge/index.d.ts`,name:`ButtonBadgeAttributes`}],description:`Defines the text of the component.

**Note:** Text is not applied when the \`design\` property is set to \`AttentionDot\`.

**Note:** The badge component only accepts numeric values and the "+" symbol. Using other characters or formats may result in unpredictable behavior, which is not guaranteed or supported.

**Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ButtonBadge/index.d.ts`,name:`ButtonBadgeAttributes`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var g=t({Default:()=>y,WithBadge:()=>b,__namedExportsOrder:()=>x,default:()=>v}),_,v,y,b,x;function S(){return(S=e((()=>{a(),c(),d(),h(),l(),_=i(),v={title:`Inputs / Button`,component:u,argTypes:{children:{control:`text`},badge:{control:{disable:!0}}},args:{design:o.Default,icon:f,children:`Button Text`},tags:[`package:@ui5/webcomponents`]},y={},b={render(e){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(u,{...e,badge:(0,_.jsx)(m,{design:s.AttentionDot}),children:`ButtonBadgeDesign.AttentionDot`}),(0,_.jsx)(u,{...e,badge:(0,_.jsx)(m,{design:s.InlineText,text:`badge`}),children:`ButtonBadgeDesign.InlineText`}),(0,_.jsx)(u,{...e,badge:(0,_.jsx)(m,{design:s.OverlayText,text:`badge`}),children:`ButtonBadgeDesign.OverlayText`})]})}},x=[`Default`,`WithBadge`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}})))()}export{m as a,S as i,y as n,h as o,b as r,g as t};