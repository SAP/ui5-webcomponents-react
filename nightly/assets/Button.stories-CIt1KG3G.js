import{j as n}from"./jsx-runtime-CLpGMVip.js";import{B as D,c as g}from"./Button-C6xPwCPp.js";import{e as T}from"./employee-6Ll6dvTX.js";import{j as A,p as x,d as S,s as w,m as N,e as C,S as j,w as I}from"./withWebComponent-LqdGbSZi.js";import{T as O}from"./Tag-C_HjJuC-.js";import{d as P}from"./parameters-bundle.css-BQD_Xb6z.js";import{B as m}from"./index-CW6ZaKsz.js";function q(){return A(O,{design:"Critical","hide-state-icon":!0,children:this.text})}x("@ui5/webcomponents-theming","sap_horizon",async()=>S);x("@ui5/webcomponents","sap_horizon",async()=>P);const V=`[ui5-tag]::part(root){border:.0625rem solid var(--sapContent_BadgeBorderColor);background-color:var(--sapContent_BadgeBackground);color:var(--sapContent_BadgeTextColor);height:1rem;border-radius:.5rem}:host([design="AttentionDot"]) [ui5-tag]::part(root){min-width:var(--_ui5-v2-7-0-button-badge-diameter);min-height:var(--_ui5-v2-7-0-button-badge-diameter);height:var(--_ui5-v2-7-0-button-badge-diameter);width:var(--_ui5-v2-7-0-button-badge-diameter);border-radius:100%}
`;var h=function(e,a,s,u){var l=arguments.length,t=l<3?a:u===null?u=Object.getOwnPropertyDescriptor(a,s):u,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,a,s,u);else for(var c=e.length-1;c>=0;c--)(p=e[c])&&(t=(l<3?p(t):l>3?p(a,s,t):p(a,s))||t);return l>3&&t&&Object.defineProperty(a,s,t),t};let d=class extends j{constructor(){super(...arguments),this.design="AttentionDot",this.text=""}};h([w()],d.prototype,"design",void 0);h([w()],d.prototype,"text",void 0);d=h([N({tag:"ui5-button-badge",renderer:C,template:q,styles:V})],d);d.define();const o=I("ui5-button-badge",["design","text"],[],[],[]);o.displayName="ButtonBadge";try{o.displayName="ButtonBadge",o.__docgenInfo={description:"The `ButtonBadge` component defines a badge that appears in the `Button`.\n\n *\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ButtonBadge",props:{design:{defaultValue:{value:'"AttentionDot"'},description:`Determines where the badge should be placed and how it should be styled.

**Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"InlineText"'},{value:'"OverlayText"'},{value:'"AttentionDot"'},{value:'"InlineText"'},{value:'"OverlayText"'},{value:'"AttentionDot"'}]}},text:{defaultValue:null,description:"Defines the text of the component.\n\n**Note:** Text is not needed when the `design` property is set to `AttentionDot`.\n\n**Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="ButtonBadge",o.__docgenInfo={description:"The `ButtonBadge` component defines a badge that appears in the `Button`.\n\n *\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ButtonBadge",props:{design:{defaultValue:{value:'"AttentionDot"'},description:`Determines where the badge should be placed and how it should be styled.

**Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"InlineText"'},{value:'"OverlayText"'},{value:'"AttentionDot"'},{value:'"InlineText"'},{value:'"OverlayText"'},{value:'"AttentionDot"'}]}},text:{defaultValue:null,description:"Defines the text of the component.\n\n**Note:** Text is not needed when the `design` property is set to `AttentionDot`.\n\n**Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const R={title:"Inputs / Button",component:m,argTypes:{children:{control:"text"},badge:{control:{disable:!0}}},args:{design:D.Default,icon:T,children:"Button Text"},tags:["package:@ui5/webcomponents"]},i={},r={render(e){return n.jsxs(n.Fragment,{children:[n.jsx(m,{...e,badge:n.jsx(o,{design:g.AttentionDot}),children:"ButtonBadgeDesign.AttentionDot"}),n.jsx(m,{...e,badge:n.jsx(o,{design:g.InlineText,text:"badge"}),children:"ButtonBadgeDesign.InlineText"}),n.jsx(m,{...e,badge:n.jsx(o,{design:g.OverlayText,text:"badge"}),children:"ButtonBadgeDesign.OverlayText"})]})}};var f,b,B;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(B=(b=i.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var y,v,_;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(_=(v=r.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const U=["Default","WithBadge"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithBadge:r,__namedExportsOrder:U,default:R},Symbol.toStringTag,{value:"Module"}));export{o as B,H as C,i as D,r as W};
