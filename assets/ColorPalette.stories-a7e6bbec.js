import{j as e}from"./jsx-runtime-6b79a019.js";import{r as m}from"./CustomElementsScopeUtils-137da8c8.js";import{l as u}from"./UI5Element-11982a12.js";import c from"./Dialog-b040586c.js";import{b as p}from"./Button-3da2aede.js";import d from"./ColorPicker-167d431f.js";import{C as f,c as h,d as C}from"./i18n-defaults-1a83921e.js";import{C as t}from"./index-b6841519.js";import{_ as g}from"./iframe-37ac82f0.js";import{w as _}from"./withWebComponent-03662f7f.js";const a=_("ui5-color-palette",[],[],[],["item-click"],()=>g(()=>import("./index-b6841519.js").then(r=>r.b),["./index-b6841519.js","./UI5Element-11982a12.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-03662f7f.js","./utils-f515de3e.js","./index-ccf6a75d.js","./jsx-runtime-6b79a019.js","./useIsomorphicLayoutEffect-0a189966.js","./slot-76e48863.js","./Icon-3498e12d.js","./Icons-234bf59e.js","./ItemNavigation-a882fb90.js","./CSSColor-f91c8158.js","./Integer-f7f172c9.js","./Device-6afa24d0.js","./class-map-341004db.js","./Button-3da2aede.js","./AriaLabelHelper-43a261ec.js","./MarkedEvents-b83081e9.js","./i18n-defaults-1a83921e.js","./iframe-37ac82f0.js","./style-map-9183c00a.js"],import.meta.url));a.displayName="ColorPalette";try{a.displayName="ColorPalette",a.__docgenInfo={description:`The \`ColorPalette\` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ColorPalette)`,displayName:"ColorPalette",props:{children:{defaultValue:null,description:"Defines the `ColorPaletteItem` elements.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPaletteDomRef, ColorPaletteItemClickEventDetail>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}class o{static get dependencies(){return[c,p,d]}static async init(){o.i18nBundle=await u("@ui5/webcomponents")}get colorPaletteDialogTitle(){return o.i18nBundle.getText(f)}get colorPaletteDialogOKButton(){return o.i18nBundle.getText(h)}get colorPaletteCancelButton(){return o.i18nBundle.getText(C)}}m("ColorPaletteMoreColors",o);const v={title:"Data Display / ColorPalette",component:a,argTypes:{children:{control:{disable:!0}}},args:{}},l={render:r=>e.jsxs(a,{...r,children:[e.jsx(t,{value:"darkblue"}),e.jsx(t,{value:"pink"}),e.jsx(t,{value:"#444444"}),e.jsx(t,{value:"rgb(0,200,0)"}),e.jsx(t,{value:"green"}),e.jsx(t,{value:"darkred"}),e.jsx(t,{value:"yellow"}),e.jsx(t,{value:"blue"}),e.jsx(t,{value:"cyan"}),e.jsx(t,{value:"orange"}),e.jsx(t,{value:"#5480e7"}),e.jsx(t,{value:"#ff6699"})]})};var n,s,i;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    return <ColorPalette {...args}>
        <ColorPaletteItem value="darkblue" />
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="#444444" />
        <ColorPaletteItem value="rgb(0,200,0)" />
        <ColorPaletteItem value="green" />
        <ColorPaletteItem value="darkred" />
        <ColorPaletteItem value="yellow" />
        <ColorPaletteItem value="blue" />
        <ColorPaletteItem value="cyan" />
        <ColorPaletteItem value="orange" />
        <ColorPaletteItem value="#5480e7" />
        <ColorPaletteItem value="#ff6699" />
      </ColorPalette>;
  }
}`,...(i=(s=l.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const P=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:P,default:v},Symbol.toStringTag,{value:"Module"}));export{k as C,l as D};
//# sourceMappingURL=ColorPalette.stories-a7e6bbec.js.map
