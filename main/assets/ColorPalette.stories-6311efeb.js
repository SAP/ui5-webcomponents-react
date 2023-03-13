import{a as u,j as e}from"./jsx-runtime-670450c2.js";import{r as m}from"./CustomElementsScopeUtils-137da8c8.js";import{d as c}from"./UI5Element-427ec721.js";import p from"./Dialog-fb686138.js";import{B as d}from"./Button-8d5b0cb6.js";import f from"./ColorPicker-eaa18daa.js";import{aU as h,aV as g,aW as C}from"./i18n-defaults-da1c0a37.js";import{C as t}from"./index-b3b35762.js";import{_}from"./iframe-695c0ea3.js";import{w as P}from"./withWebComponent-e4481254.js";const l=P("ui5-color-palette",[],[],[],["item-click"],()=>_(()=>import("./index-b3b35762.js").then(r=>r.b),["./index-b3b35762.js","./UI5Element-427ec721.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-e4481254.js","./utils-ed90fb1b.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./AriaLabelHelper-c82262ef.js","./i18n-defaults-da1c0a37.js","./ItemNavigation-9e1aa83a.js","./Keys-3acbae73.js","./Integer-d9976c13.js","./CSSColor-bdda6dc0.js","./Device-208919c6.js","./class-map-5d8e4b2b.js","./Icon-a9b28f0c.js","./Icons-7b82f601.js","./Button-8d5b0cb6.js","./MarkedEvents-b83081e9.js","./iframe-695c0ea3.js","./style-map-77d201d2.js"],import.meta.url));l.displayName="ColorPalette";try{l.displayName="ColorPalette",l.__docgenInfo={description:`The \`ColorPalette\` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPalette" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"ColorPalette",props:{children:{defaultValue:null,description:"Defines the `ColorPaletteItem` elements.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPaletteDomRef, { color: string; }>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}class o{static get dependencies(){return[p,d,f]}static async init(){o.i18nBundle=await c("@ui5/webcomponents")}get colorPaletteDialogTitle(){return o.i18nBundle.getText(h)}get colorPaletteDialogOKButton(){return o.i18nBundle.getText(g)}get colorPaletteCancelButton(){return o.i18nBundle.getText(C)}}m("ColorPaletteMoreColors",o);const v={title:"Data Display / ColorPalette",component:l,argTypes:{children:{control:{disable:!0}}},args:{}},a={render:r=>u(l,{...r,children:[e(t,{value:"darkblue"}),e(t,{value:"pink"}),e(t,{value:"#444444"}),e(t,{value:"rgb(0,200,0)"}),e(t,{value:"green"}),e(t,{value:"darkred"}),e(t,{value:"yellow"}),e(t,{value:"blue"}),e(t,{value:"cyan"}),e(t,{value:"orange"}),e(t,{value:"#5480e7"}),e(t,{value:"#ff6699"})]})};var n,i,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const y=["Default"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{B as C,a as D};
//# sourceMappingURL=ColorPalette.stories-6311efeb.js.map
