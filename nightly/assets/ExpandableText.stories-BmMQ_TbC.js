import{j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as u}from"./index-BQ1WsyJB.js";import{u as P,S as q,C as L,b as W,c as j}from"./i18n-defaults-Cq32WUv5.js";import{R as V}from"./index-Dtl4gcMG.js";import{T as v}from"./index-DjQHiRhY.js";import{L as D}from"./index-8zshkhgA.js";import{u as R}from"./useStylesheet-BB85D3ff.js";import{u as F}from"./useIsomorphicId-8WwglsiH.js";var h;(function(o){o.Link="Link",o.Button="Button"})(h||(h={}));const B=h,U={packageName:"@ui5/webcomponents-react",fileName:"ExpandableText.module.css",content:".ExpandableText_expandableText_4vuo0_1{box-sizing:border-box;color:var(--sapTextColor);display:inline-block;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;white-space:pre-line;word-wrap:break-word;max-width:100%}.ExpandableText_text_4vuo0_13{display:inline}.ExpandableText_renderWhitespace_4vuo0_17{white-space:pre-wrap}.ExpandableText_ellipsis_4vuo0_21{word-spacing:.125rem}.ExpandableText_popover_4vuo0_25{max-width:30rem}.ExpandableText_popover_4vuo0_25::part(content){padding:1rem}"},t={expandableText:"ExpandableText_expandableText_4vuo0_1",text:"ExpandableText_text_4vuo0_13",renderWhitespace:"ExpandableText_renderWhitespace_4vuo0_17",ellipsis:"ExpandableText_ellipsis_4vuo0_21",popover:"ExpandableText_popover_4vuo0_25"},a=u.forwardRef((o,S)=>{const{children:s,showOverflowInPopover:r,maxCharacters:x=100,renderWhitespace:d,className:E,...I}=o;R(U,a.displayName);const[l,f]=u.useState(!0),[N,b]=u.useState(!1),w=F(),p=P("@ui5/webcomponents-react"),n=d?s:s==null?void 0:s.replace(/\s+/g," ").trim(),y=(n==null?void 0:n.length)>=x,O=y&&(l||r)?n==null?void 0:n.slice(0,x):s,k=()=>{r&&b(c=>!c),f(c=>!c)},C=()=>{f(!0),b(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:m(t.expandableText,E),...I,ref:S,children:[e.jsx(v,{className:m(t.text,d&&t.renderWhitespace),children:O}),y&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:t.ellipsis,children:r||l?"… ":" "}),e.jsx(D,{accessibleName:r?l?p.getText(q):p.getText(L):void 0,accessibleRole:B.Button,accessibilityAttributes:r?{hasPopup:"dialog"}:{expanded:!l},onClick:k,id:`${w}-link`,children:l?p.getText(W):p.getText(j)})]})]}),r&&N&&e.jsx(V,{opener:`${w}-link`,open:!0,onClose:C,className:t.popover,children:e.jsx(v,{className:m(t.text,d&&t.renderWhitespace),children:s})})]})});a.displayName="ExpandableText";try{a.displayName="ExpandableText",a.__docgenInfo={description:'The `ExpandableText` component can be used to display long texts inside a table, list or form.\n\nInitially, only the first characters from the text are shown with a "Show More" link which allows the full text to be displayed. The `showOverflowInPopover` property determines if the full text will be displayed expanded in place (default) or in a popover (`showOverflowInPopover: true`). If the text is expanded a "Show Less" link is displayed, which allows collapsing the text field.',displayName:"ExpandableText",props:{children:{defaultValue:null,description:"Determines the text to be displayed.",name:"children",required:!1,type:{name:"string"}},maxCharacters:{defaultValue:{value:"100"},description:"Specifies the maximum number of characters from the beginning of the text field that are shown initially.",name:"maxCharacters",required:!1,type:{name:"number"}},showOverflowInPopover:{defaultValue:null,description:"Determines if the full text should be displayed inside a `ResponsivePopover` or in-place.",name:"showOverflowInPopover",required:!1,type:{name:"boolean"}},renderWhitespace:{defaultValue:null,description:"Defines how white-space inside <code>Text</code> is handled. If set to true, sequences of white space are preserved.",name:"renderWhitespace",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{a.displayName="ExpandableText",a.__docgenInfo={description:'The `ExpandableText` component can be used to display long texts inside a table, list or form.\n\nInitially, only the first characters from the text are shown with a "Show More" link which allows the full text to be displayed. The `showOverflowInPopover` property determines if the full text will be displayed expanded in place (default) or in a popover (`showOverflowInPopover: true`). If the text is expanded a "Show Less" link is displayed, which allows collapsing the text field.',displayName:"ExpandableText",props:{children:{defaultValue:null,description:"Determines the text to be displayed.",name:"children",required:!1,type:{name:"string"}},maxCharacters:{defaultValue:{value:"100"},description:"Specifies the maximum number of characters from the beginning of the text field that are shown initially.",name:"maxCharacters",required:!1,type:{name:"number"}},showOverflowInPopover:{defaultValue:null,description:"Determines if the full text should be displayed inside a `ResponsivePopover` or in-place.",name:"showOverflowInPopover",required:!1,type:{name:"boolean"}},renderWhitespace:{defaultValue:null,description:"Defines how white-space inside <code>Text</code> is handled. If set to true, sequences of white space are preserved.",name:"renderWhitespace",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const z={title:"Data Display / ExpandableText",component:a,argTypes:{children:{control:"text"}},args:{children:'             If "renderWhitespace" is set to true, there will be thirteen white spaces in front and after this sentence.             Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',maxCharacters:100}},i={};var _,g,T;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(T=(g=i.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const M=["Default"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:M,default:z},Symbol.toStringTag,{value:"Module"}));export{Z as C,i as D};
