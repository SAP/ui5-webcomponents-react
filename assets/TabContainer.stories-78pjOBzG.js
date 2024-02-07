import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as u,U as W,u as y,h as k}from"./UI5Element-_cJDeK03.js";import{r as h}from"./Icons-dG5I7pqk.js";import{a as U}from"./add-6BLy2D4s.js";import{e as G}from"./employee-2wNDT3_m.js";import{s as J}from"./settings-ljbZAoEU.js";import{b as H,a as f,c as K,d as S,T as t}from"./index-XsVh7X1e.js";import{_ as Q}from"./iframe-WUzyVZLd.js";import{a as g,l as q,b as w,s as M,c as X,f as Y,w as Z}from"./withWebComponent--kEkWNJH.js";import{o as _}from"./class-map-Y-YjCFqX.js";import{s as v}from"./style-map-5njKSr-C.js";import{s as F}from"./parameters-bundle.css-mPCp9TQx.js";function ee(a,n,o){return g`<div id="${q(this._id)}" role="separator" class="${_(this.classes.root)}"></div>`}function te(a,n,o){return o?g`<${w("ui5-li-custom",n,o)} id="${q(this._id)}" role="separator" class="${_(this.classes.root)}" disabled style="${v(this._style)}"></${w("ui5-li-custom",n,o)}>`:g`<ui5-li-custom id="${q(this._id)}" role="separator" class="${_(this.classes.root)}" disabled style="${v(this._style)}"></ui5-li-custom>`}u("@ui5/webcomponents-theming","sap_horizon",async()=>M);u("@ui5/webcomponents","sap_horizon",async()=>F);const ae={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInStrip.css.ts",content:`.ui5-tc__separator{width:0;border-left:.0625rem solid var(--sapGroup_TitleBorderColor);margin:.5rem .25rem}
`};u("@ui5/webcomponents-theming","sap_horizon",async()=>M);u("@ui5/webcomponents","sap_horizon",async()=>F);const ne={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInOverflow.css.ts",content:`.ui5-tc__separator{min-height:.25rem;border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor);margin-inline-start:calc(var(--_ui5-v1-22-0-rc-3-tab-indentation-level) * .5rem);margin-inline-end:.5rem}[ui5-list]>.ui5-tc__separator:first-child{min-height:.5rem}
`};var oe=function(a,n,o,m){var T=arguments.length,r=T<3?n:m===null?m=Object.getOwnPropertyDescriptor(n,o):m,b;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,n,o,m);else for(var x=a.length-1;x>=0;x--)(b=a[x])&&(r=(T<3?b(r):T>3?b(n,o,r):b(n,o))||r);return T>3&&r&&Object.defineProperty(n,o,r),r},p;let d=p=class extends W{static get stripTemplate(){return ee}static get overflowTemplate(){return te}get classes(){return{root:{"ui5-tc__separator":!0}}}get isSeparator(){return!0}getTabInStripDomRef(){return this.getElementInStrip?this.getElementInStrip():null}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}get stripPresentation(){return y(p.stripTemplate,this)}get overflowPresentation(){return y(p.overflowTemplate,this)}};d=p=oe([X({tag:"ui5-tab-separator",renderer:Y})],d);d.define();H.registerTabStyles(ae);H.registerStaticAreaTabStyles(ne);const re=d,se=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),l=Z("ui5-tab-separator",[],[],[],[],()=>Q(()=>Promise.resolve().then(()=>se),void 0,import.meta.url));l.displayName="TabSeparator";try{l.displayName="TabSeparator",l.__docgenInfo={description:"The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`.",displayName:"TabSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ie="activities",L="M480 32q13 0 22.5 9t9.5 23v384q0 13-9.5 22.5T480 480H32q-14 0-23-9.5T0 448V64q0-14 9-23t23-9h448zm0 32H32v384h448V64zM117 252l-53-53 17-19 36 36 71-88 18 17zm0 164l-53-54 17-18 36 36 71-89 18 18zm283-96q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-160q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z",ce=!0,le="SAP-icons-v4",me="@ui5/webcomponents-icons";h(ie,{pathData:L,ltr:ce,collection:le,packageName:me});const Te="activities",E="M181 71q7-7 17-7 11 0 18.5 7.5T224 90q0 10-8 18L101 217q-7 7-17 7-11 0-18-7L8 162q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm133 89q-11 0-18.5-7.5T288 134t7.5-18 18.5-7h172q11 0 18.5 7t7.5 18-7.5 18.5T486 160H314zM181 295q7-7 17-7 11 0 18.5 7.5T224 314q0 10-8 18L101 441q-7 7-17 7-11 0-18-7L8 386q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm305 38q11 0 18.5 7t7.5 18-7.5 18.5T486 384H314q-11 0-18.5-7.5T288 358t7.5-18 18.5-7h172z",be=!0,pe="SAP-icons-v5",de="@ui5/webcomponents-icons";h(Te,{pathData:E,ltr:be,collection:pe,packageName:de});k();const R="activities",ue="menu",A="M32 64q14 0 23 9.5T64 96q0 14-9 23t-23 9q-13 0-22.5-9T0 96q0-13 9.5-22.5T32 64zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 256q0-13 9.5-22.5T32 224zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 416q0-13 9.5-22.5T32 384zm128-255q-13 0-22.5-9.5T128 97q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 256q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 415q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160z",he=!1,fe="SAP-icons-v4",xe="@ui5/webcomponents-icons";h(ue,{pathData:A,ltr:he,collection:fe,packageName:xe});const ge="menu",B="M48 64q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm438 64H186q-11 0-18.5-7.5T160 102t7.5-18 18.5-7h300q11 0 18.5 7t7.5 18-7.5 18.5T486 128zM48 208q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm438 80H186q-11 0-18.5-7.5T160 262t7.5-18 18.5-7h300q11 0 18.5 7t7.5 18-7.5 18.5T486 288zM48 352q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm438 83H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 384h300q11 0 18.5 7.5T512 410t-7.5 18-18.5 7z",qe=!1,_e="SAP-icons-v5",ye="@ui5/webcomponents-icons";h(ge,{pathData:B,ltr:qe,collection:_e,packageName:ye});k();const V="menu",Se={title:"Layouts & Floorplans / TabContainer",component:f,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{tabLayout:K.Standard,contentBackgroundDesign:S.Solid,headerBackgroundDesign:S.Solid},tags:["package:@ui5/webcomponents"]},s={render:a=>e.jsxs(f,{...a,children:[e.jsx(t,{text:"Tab One",icon:V,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(t,{text:"Tab Two",icon:R,additionalText:"20",children:"Content Tab 2"}),e.jsx(t,{text:"Tab Three",icon:U,children:"Content Tab 3"}),e.jsx(t,{text:"Tab Four",icon:G,children:"Content Tab 4"}),e.jsx(t,{text:"Tab Five",icon:J,children:"Content Tab 5"})]})},i={name:"with TabSeparator",render:a=>e.jsxs(f,{...a,children:[e.jsx(t,{text:"Tab One",icon:V,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(l,{}),e.jsx(t,{text:"Tab Two",icon:R,additionalText:"20",children:"Content Tab 2"})]})},c={name:"with nested tabs",render:a=>e.jsxs(f,{...a,children:[e.jsx(t,{text:"Tab One",selected:!0,subTabs:e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Tab 1.1"}),e.jsx(t,{text:"Tab 1.2"}),e.jsx(t,{text:"Tab 1.3"})]}),children:e.jsx("div",{style:{display:"none"}})}),e.jsx(l,{}),e.jsx(t,{text:"Tab Two"}),e.jsx(t,{text:"Tab Three",subTabs:e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Tab 3.1"}),e.jsx(t,{text:"Tab 3.2"}),e.jsx(t,{text:"Tab 3.3"})]})})]})};var C,$,j;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    return <TabContainer {...args}>
        <Tab text="Tab One" icon={menuIcon} selected additionalText="5">
          Content Tab 1
        </Tab>
        <Tab text="Tab Two" icon={activitiesIcon} additionalText="20">
          Content Tab 2
        </Tab>
        <Tab text="Tab Three" icon={addIcon}>
          Content Tab 3
        </Tab>
        <Tab text="Tab Four" icon={employeeIcon}>
          Content Tab 4
        </Tab>
        <Tab text="Tab Five" icon={settingsIcon}>
          Content Tab 5
        </Tab>
      </TabContainer>;
  }
}`,...(j=($=s.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var z,D,I;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'with TabSeparator',
  render: args => {
    return <TabContainer {...args}>
        <Tab text="Tab One" icon={menuIcon} selected additionalText="5">
          Content Tab 1
        </Tab>
        <TabSeparator />
        <Tab text="Tab Two" icon={activitiesIcon} additionalText="20">
          Content Tab 2
        </Tab>
      </TabContainer>;
  }
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var N,O,P;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'with nested tabs',
  render: args => {
    return <TabContainer {...args}>
        <Tab text="Tab One" selected subTabs={<>
              <Tab text="Tab 1.1" />
              <Tab text="Tab 1.2" />
              <Tab text="Tab 1.3" />
            </>}>
          <div style={{
          display: 'none'
        }} />
        </Tab>
        <TabSeparator />
        <Tab text="Tab Two" />
        <Tab text="Tab Three" subTabs={<>
              <Tab text="Tab 3.1" />
              <Tab text="Tab 3.2" />
              <Tab text="Tab 3.3" />
            </>} />
      </TabContainer>;
  }
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const we=["Default","WithTabSeparator","WithNestedTabs"],Fe=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithNestedTabs:c,WithTabSeparator:i,__namedExportsOrder:we,default:Se},Symbol.toStringTag,{value:"Module"}));export{Fe as C,s as D,l as T,i as W,c as a};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
