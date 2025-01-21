import{j as e}from"./jsx-runtime-CLpGMVip.js";import{m as d,a as C}from"./utils-C9_9ShpY.js";import{w as p,c as n,j as a}from"./withWebComponent-DfVDXLfc.js";import{a as s}from"./Button-Bn6Q5CAy.js";import{D as g}from"./Dialog-BNz6iBJ1.js";import{C as P}from"./ColorPicker-Bp4T4G5j.js";import{K as v,N as x,O as T}from"./i18n-defaults-Cyg2J0QB.js";import{C as t}from"./index-4K3fIj5O.js";const r=p("ui5-color-palette",[],[],[],["item-click"]);r.displayName="ColorPalette";function f(){return n(g,{headerText:this.colorPaletteDialogTitle,children:[a("div",{class:"ui5-cp-dialog-content",children:a(P,{})}),n("div",{slot:"footer",class:"ui5-cp-dialog-footer",children:[a(s,{design:"Emphasized",onClick:this._chooseCustomColor,children:this.colorPaletteDialogOKButton}),a(s,{design:"Transparent",onClick:this._closeDialog,children:this.colorPaletteCancelButton})]})]})}class l extends C{get template(){return f}get colorPaletteDialogTitle(){return l.i18nBundle.getText(v)}get colorPaletteDialogOKButton(){return l.i18nBundle.getText(x)}get colorPaletteCancelButton(){return l.i18nBundle.getText(T)}}d("ColorPaletteMoreColors",l);const j={title:"Data Display / ColorPalette",component:r,argTypes:{children:{control:{disable:!0}}},args:{},tags:["package:@ui5/webcomponents"]},o={render:m=>e.jsxs(r,{...m,children:[e.jsx(t,{value:"darkblue"}),e.jsx(t,{value:"pink"}),e.jsx(t,{value:"#444444"}),e.jsx(t,{value:"rgb(0,200,0)"}),e.jsx(t,{value:"green"}),e.jsx(t,{value:"darkred"}),e.jsx(t,{value:"yellow"}),e.jsx(t,{value:"blue"}),e.jsx(t,{value:"cyan"}),e.jsx(t,{value:"orange"}),e.jsx(t,{value:"#5480e7"}),e.jsx(t,{value:"#ff6699"})]})};var i,u,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const O=["Default"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:O,default:j},Symbol.toStringTag,{value:"Module"}));export{B as C,o as D};
