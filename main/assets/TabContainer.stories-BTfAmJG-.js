import{j as e}from"./ManagedStyles-B3AuKgSD.js";import{r as h,i as k}from"./Boot-DOb84JFo.js";import{r as f}from"./Icons-BEU0Gkqb.js";import{a as B}from"./add-JcGrPM4V.js";import{e as G}from"./employee-Cmzn10U8.js";import{s as J}from"./settings-NyRlvaHW.js";import{b as R,a as g,c as K,d as q,T as t}from"./index-O52Z8Mi8.js";import{_ as Q}from"./iframe-D0hJidP0.js";import{U as X,e as S}from"./UI5Element-BDMamLf2.js";import{a as x,l as i,b as w,s as H,p as Y,c as Z,d as ee,w as te}from"./withWebComponent-B6oBGWld.js";import{o as y}from"./class-map-k-XuEcbQ.js";import{s as v}from"./style-map-C_Zo2l27.js";import{s as F}from"./parameters-bundle.css-CG8awnKl.js";function ae(a,n,o){return x`<div id="${i(this._id)}" role="separator" class="${y(this.classes.root)}" .realTabReference="${i(this)}"></div>`}function ne(a,n,o){return o?x`<${w("ui5-li-custom",n,o)} id="${i(this._id)}" role="separator" class="${y(this.classes.root)}" disabled style="${v(this._style)}" .realTabReference="${i(this)}"></${w("ui5-li-custom",n,o)}>`:x`<ui5-li-custom id="${i(this._id)}" role="separator" class="${y(this.classes.root)}" disabled style="${v(this._style)}" .realTabReference="${i(this)}"></ui5-li-custom>`}h("@ui5/webcomponents-theming","sap_horizon",async()=>H);h("@ui5/webcomponents","sap_horizon",async()=>F);const oe={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInStrip.css.ts",content:`.ui5-tc__separator{position:relative;width:.5625rem}.ui5-tc__separator:before{content:" ";position:absolute;width:.0625rem;left:.25rem;top:.5rem;bottom:.5rem;background:var(--sapGroup_TitleBorderColor)}
`};h("@ui5/webcomponents-theming","sap_horizon",async()=>H);h("@ui5/webcomponents","sap_horizon",async()=>F);const re={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInOverflow.css.ts",content:`.ui5-tc__separator{min-height:.25rem;border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor);margin-inline-start:calc(var(--_ui5-v1-24-2-tab-indentation-level) * .5rem);margin-inline-end:.5rem}[ui5-list]>.ui5-tc__separator:first-child{min-height:.5rem}
`};var M=function(a,n,o,b){var T=arguments.length,r=T<3?n:b===null?b=Object.getOwnPropertyDescriptor(n,o):b,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,n,o,b);else for(var _=a.length-1;_>=0;_--)(d=a[_])&&(r=(T<3?d(r):T>3?d(n,o,r):d(n,o))||r);return T>3&&r&&Object.defineProperty(n,o,r),r},u;let m=u=class extends X{static get stripTemplate(){return ae}static get overflowTemplate(){return ne}get classes(){return{root:{"ui5-tc__separator":!0}}}get isSeparator(){return!0}getTabInStripDomRef(){return this.getElementInStrip?this.getElementInStrip():null}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}get stripPresentation(){return S(u.stripTemplate,this)}get overflowPresentation(){return S(u.overflowTemplate,this)}};M([Y({type:Object,defaultValue:null})],m.prototype,"realTabReference",void 0);m=u=M([Z({tag:"ui5-tab-separator",renderer:ee})],m);m.define();R.registerTabStyles(oe);R.registerStaticAreaTabStyles(re);const se=m,ie=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"})),s=te("ui5-tab-separator",[],[],[],[],()=>Q(()=>Promise.resolve().then(()=>ie),void 0,import.meta.url));s.displayName="TabSeparator";try{s.displayName="TabSeparator",s.__docgenInfo={description:"The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TabSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="TabSeparator",s.__docgenInfo={description:"The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TabSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ce="activities",E="M480 32q13 0 22.5 9t9.5 23v384q0 13-9.5 22.5T480 480H32q-14 0-23-9.5T0 448V64q0-14 9-23t23-9h448zm0 32H32v384h448V64zM117 252l-53-53 17-19 36 36 71-88 18 17zm0 164l-53-54 17-18 36 36 71-89 18 18zm283-96q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-160q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z",le=!0,pe="SAP-icons-v4",me="@ui5/webcomponents-icons";f(ce,{pathData:E,ltr:le,collection:pe,packageName:me});const be="activities",L="M181 71q7-7 17-7 11 0 18.5 7.5T224 90q0 10-8 18L101 217q-7 7-17 7-11 0-18-7L8 162q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm133 89q-11 0-18.5-7.5T288 134t7.5-18 18.5-7h172q11 0 18.5 7t7.5 18-7.5 18.5T486 160H314zM181 295q7-7 17-7 11 0 18.5 7.5T224 314q0 10-8 18L101 441q-7 7-17 7-11 0-18-7L8 386q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm305 38q11 0 18.5 7t7.5 18-7.5 18.5T486 384H314q-11 0-18.5-7.5T288 358t7.5-18 18.5-7h172z",Te=!0,de="SAP-icons-v5",ue="@ui5/webcomponents-icons";f(be,{pathData:L,ltr:Te,collection:de,packageName:ue});k();const V="activities",he="menu",A="M32 64q14 0 23 9.5T64 96q0 14-9 23t-23 9q-13 0-22.5-9T0 96q0-13 9.5-22.5T32 64zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 256q0-13 9.5-22.5T32 224zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 416q0-13 9.5-22.5T32 384zm128-255q-13 0-22.5-9.5T128 97q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 256q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 415q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160z",fe=!1,ge="SAP-icons-v4",_e="@ui5/webcomponents-icons";f(he,{pathData:A,ltr:fe,collection:ge,packageName:_e});const xe="menu",U="M48 64q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm438 64H186q-11 0-18.5-7.5T160 102t7.5-18 18.5-7h300q11 0 18.5 7t7.5 18-7.5 18.5T486 128zM48 208q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm438 80H186q-11 0-18.5-7.5T160 262t7.5-18 18.5-7h300q11 0 18.5 7t7.5 18-7.5 18.5T486 288zM48 352q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm438 83H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 384h300q11 0 18.5 7.5T512 410t-7.5 18-18.5 7z",ye=!1,qe="SAP-icons-v5",Se="@ui5/webcomponents-icons";f(xe,{pathData:U,ltr:ye,collection:qe,packageName:Se});k();const W="menu",we={title:"Layouts & Floorplans / TabContainer",component:g,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{tabLayout:K.Standard,contentBackgroundDesign:q.Solid,headerBackgroundDesign:q.Solid},tags:["package:@ui5/webcomponents"]},c={render:a=>e.jsxs(g,{...a,children:[e.jsx(t,{text:"Tab One",icon:W,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(t,{text:"Tab Two",icon:V,additionalText:"20",children:"Content Tab 2"}),e.jsx(t,{text:"Tab Three",icon:B,children:"Content Tab 3"}),e.jsx(t,{text:"Tab Four",icon:G,children:"Content Tab 4"}),e.jsx(t,{text:"Tab Five",icon:J,children:"Content Tab 5"})]})},l={name:"with TabSeparator",render:a=>e.jsxs(g,{...a,children:[e.jsx(t,{text:"Tab One",icon:W,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(s,{}),e.jsx(t,{text:"Tab Two",icon:V,additionalText:"20",children:"Content Tab 2"})]})},p={name:"with nested tabs",render:a=>e.jsxs(g,{...a,children:[e.jsx(t,{text:"Tab One",selected:!0,subTabs:e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Tab 1.1"}),e.jsx(t,{text:"Tab 1.2"}),e.jsx(t,{text:"Tab 1.3"})]}),children:e.jsx("div",{style:{display:"none"}})}),e.jsx(s,{}),e.jsx(t,{text:"Tab Two"}),e.jsx(t,{text:"Tab Three",subTabs:e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Tab 3.1"}),e.jsx(t,{text:"Tab 3.2"}),e.jsx(t,{text:"Tab 3.3"})]})})]})};var C,$,j;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=($=c.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var D,z,N;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(z=l.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var I,P,O;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(O=(P=p.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const ve=["Default","WithTabSeparator","WithNestedTabs"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Default:c,WithNestedTabs:p,WithTabSeparator:l,__namedExportsOrder:ve,default:we},Symbol.toStringTag,{value:"Module"}));export{Ee as C,c as D,s as T,l as W,p as a};
