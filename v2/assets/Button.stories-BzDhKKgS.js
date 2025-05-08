import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c,B as D}from"./Button-DcNvBpEn.js";import{e as T}from"./employee-rWykNOj7.js";import{j as A,p as _,d as N,s as w,m as S,y as C,E as j,w as I}from"./jsx-runtime-CkEx_Gfk.js";import{T as O}from"./Tag-DUc97KOd.js";import{d as P}from"./parameters-bundle.css-Dkq9X0yL.js";import{B as m}from"./index-dNG4P2z4.js";function q(){return A(O,{design:"Critical","hide-state-icon":!0,children:this.effectiveText})}_("@ui5/webcomponents-theming","sap_horizon",async()=>N);_("@ui5/webcomponents","sap_horizon",async()=>P);const V=`[ui5-tag]::part(root){border:.0625rem solid var(--sapContent_BadgeBorderColor);background-color:var(--sapContent_BadgeBackground);color:var(--sapContent_BadgeTextColor);height:1rem;border-radius:.5rem}:host([design="AttentionDot"]) [ui5-tag]::part(root){min-width:var(--_ui5-v2-10-0-button-badge-diameter);min-height:var(--_ui5-v2-10-0-button-badge-diameter);height:var(--_ui5-v2-10-0-button-badge-diameter);width:var(--_ui5-v2-10-0-button-badge-diameter);border-radius:100%}
`;var h=function(e,a,i,l){var u=arguments.length,t=u<3?a:l===null?l=Object.getOwnPropertyDescriptor(a,i):l,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,a,i,l);else for(var g=e.length-1;g>=0;g--)(p=e[g])&&(t=(u<3?p(t):u>3?p(a,i,t):p(a,i))||t);return u>3&&t&&Object.defineProperty(a,i,t),t};let d=class extends j{constructor(){super(...arguments),this.design="AttentionDot",this.text=""}get effectiveText(){return this.design===c.AttentionDot?"":this.text}};h([w()],d.prototype,"design",void 0);h([w()],d.prototype,"text",void 0);d=h([S({tag:"ui5-button-badge",renderer:C,template:q,styles:V})],d);d.define();const o=I("ui5-button-badge",["design","text"],[],[],[]);o.displayName="ButtonBadge";try{o.displayName="ButtonBadge",o.__docgenInfo={description:"The `ButtonBadge` component defines a badge that appears in the `Button`.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ButtonBadge",props:{design:{defaultValue:{value:'"AttentionDot"'},description:`Defines the badge placement and appearance.
- **InlineText** - displayed inside the button after its text, and recommended for **compact** density.
- **OverlayText** - displayed at the top-end corner of the button, and recommended for **cozy** density.
- **AttentionDot** - displayed at the top-end corner of the button as a dot, and suitable for both **cozy** and **compact** densities.

**Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"InlineText"'},{value:'"OverlayText"'},{value:'"AttentionDot"'},{value:'"InlineText"'},{value:'"OverlayText"'},{value:'"AttentionDot"'}]}},text:{defaultValue:null,description:`Defines the text of the component.

**Note:** Text is not applied when the \`design\` property is set to \`AttentionDot\`.

**Note:** The badge component only accepts numeric values and the "+" symbol. Using other characters or formats may result in unpredictable behavior, which is not guaranteed or supported.

**Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="ButtonBadge",o.__docgenInfo={description:"The `ButtonBadge` component defines a badge that appears in the `Button`.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ButtonBadge",props:{design:{defaultValue:{value:'"AttentionDot"'},description:`Defines the badge placement and appearance.
- **InlineText** - displayed inside the button after its text, and recommended for **compact** density.
- **OverlayText** - displayed at the top-end corner of the button, and recommended for **cozy** density.
- **AttentionDot** - displayed at the top-end corner of the button as a dot, and suitable for both **cozy** and **compact** densities.

**Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"InlineText"'},{value:'"OverlayText"'},{value:'"AttentionDot"'},{value:'"InlineText"'},{value:'"OverlayText"'},{value:'"AttentionDot"'}]}},text:{defaultValue:null,description:`Defines the text of the component.

**Note:** Text is not applied when the \`design\` property is set to \`AttentionDot\`.

**Note:** The badge component only accepts numeric values and the "+" symbol. Using other characters or formats may result in unpredictable behavior, which is not guaranteed or supported.

**Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const U={title:"Inputs / Button",component:m,argTypes:{children:{control:"text"},badge:{control:{disable:!0}}},args:{design:D.Default,icon:T,children:"Button Text"},tags:["package:@ui5/webcomponents"]},s={},r={render(e){return n.jsxs(n.Fragment,{children:[n.jsx(m,{...e,badge:n.jsx(o,{design:c.AttentionDot}),children:"ButtonBadgeDesign.AttentionDot"}),n.jsx(m,{...e,badge:n.jsx(o,{design:c.InlineText,text:"badge"}),children:"ButtonBadgeDesign.InlineText"}),n.jsx(m,{...e,badge:n.jsx(o,{design:c.OverlayText,text:"badge"}),children:"ButtonBadgeDesign.OverlayText"})]})}};var f,b,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,v,x;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const z=["Default","WithBadge"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithBadge:r,__namedExportsOrder:z,default:U},Symbol.toStringTag,{value:"Module"}));export{o as B,H as C,s as D,r as W};
