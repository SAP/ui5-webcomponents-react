import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{a as F,b as T,c as M,T as n}from"./index-BMxTi0UK.js";import{p as g,q as i,v as w,a as h,s as P,m as E,y as H,S as U,X as S,w as A}from"./withWebComponent-DpVKsRHi.js";import{f as R}from"./Icon-CrKv37md.js";import{a as B}from"./add-TQ9cPAUO.js";import{e as G}from"./employee-CfY2b6w9.js";import{m as V}from"./menu-9BgrDuL5.js";import{s as X}from"./settings-BDm-5ICY.js";import{o as x}from"./class-map-CAgcI9af.js";import{s as v}from"./style-map-Bigav4TG.js";import{s as W}from"./parameters-bundle.css-R51uC6BG.js";function J(t,a,o){return g`<div id="${i(this._id)}" role="separator" class="${x(this.classes.root)}" .realTabReference="${i(this)}"></div>`}function K(t,a,o){return o?g`<${w("ui5-li-custom",a,o)} id="${i(this._id)}" role="separator" class="${x(this.classes.root)}" disabled style="${v(this._forcedStyleInOverflow)}" .realTabReference="${i(this)}"></${w("ui5-li-custom",a,o)}>`:g`<ui5-li-custom id="${i(this._id)}" role="separator" class="${x(this.classes.root)}" disabled style="${v(this._forcedStyleInOverflow)}" .realTabReference="${i(this)}"></ui5-li-custom>`}h("@ui5/webcomponents-theming","sap_horizon",async()=>P);h("@ui5/webcomponents","sap_horizon",async()=>W);const Q={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInStrip.css.ts",content:`div.ui5-tc__separator{position:relative;width:.5625rem}div.ui5-tc__separator:before{content:" ";position:absolute;width:.0625rem;left:.25rem;top:.5rem;bottom:.5rem;background:var(--sapGroup_TitleBorderColor)}
`};h("@ui5/webcomponents-theming","sap_horizon",async()=>P);h("@ui5/webcomponents","sap_horizon",async()=>W);const Y={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInOverflow.css.ts",content:`[ui5-li-custom].ui5-tc__separator{min-height:.25rem;border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor);margin-inline-start:calc(var(--_ui5-v2-4-0-tab-indentation-level) * .5rem);margin-inline-end:.5rem}[ui5-list]>[ui5-li-custom].ui5-tc__separator:first-child{min-height:.5rem}
`};var Z=function(t,a,o,m){var b=arguments.length,r=b<3?a:m===null?m=Object.getOwnPropertyDescriptor(a,o):m,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,a,o,m);else for(var f=t.length-1;f>=0;f--)(d=t[f])&&(r=(b<3?d(r):b>3?d(a,o,r):d(a,o))||r);return b>3&&r&&Object.defineProperty(a,o,r),r},u;let _=u=class extends U{static get stripTemplate(){return J}static get overflowTemplate(){return K}get classes(){return{root:{"ui5-tc__separator":!0}}}get isSeparator(){return!0}receiveStripInfo({getElementInStrip:a}){this._getElementInStrip=a}receiveOverflowInfo({style:a}){this._forcedStyleInOverflow=a}getDomRefInStrip(){var a;return(a=this._getElementInStrip)==null?void 0:a.call(this)}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}get stripPresentation(){return S(u.stripTemplate,this)}get overflowPresentation(){return S(u.overflowTemplate,this)}};_=u=Z([E({tag:"ui5-tab-separator",renderer:H})],_);_.define();F.registerTabStyles(Q);F.registerTabStyles(Y);const s=A("ui5-tab-separator",[],[],[],[]);s.displayName="TabSeparator";try{s.displayName="TabSeparator",s.__docgenInfo={description:"The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TabSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="TabSeparator",s.__docgenInfo={description:"The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TabSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var y;(function(t){t.Solid="Solid",t.Transparent="Transparent",t.Translucent="Translucent"})(y||(y={}));const C=y,ee="activities",te="M480 32q13 0 22.5 9t9.5 23v384q0 13-9.5 22.5T480 480H32q-14 0-23-9.5T0 448V64q0-14 9-23t23-9h448zm0 32H32v384h448V64zM117 252l-53-53 17-19 36 36 71-88 18 17zm283-92q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zM117 416l-53-54 17-18 36 36 71-89 18 18zm283-96q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z",ae=!0,ne="SAP-icons-v4",oe="@ui5/webcomponents-icons";R(ee,{pathData:te,ltr:ae,collection:ne,packageName:oe});const re="activities",se="M181 295q7-7 17-7 11 0 18.5 7.5T224 314q0 10-8 18L101 441q-7 7-17 7-11 0-18-7L8 386q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm305 38q11 0 18.5 7t7.5 18-7.5 18.5T486 384H314q-11 0-18.5-7.5T288 358t7.5-18 18.5-7h172zM181 71q7-7 17-7 11 0 18.5 7.5T224 90q0 10-8 18L101 217q-7 7-17 7-11 0-18-7L8 162q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm133 89q-11 0-18.5-7.5T288 134t7.5-18 18.5-7h172q11 0 18.5 7t7.5 18-7.5 18.5T486 160H314z",ie=!0,ce="SAP-icons-v5",le="@ui5/webcomponents-icons";R(re,{pathData:se,ltr:ie,collection:ce,packageName:le});const L="activities",pe={title:"Layouts & Floorplans / TabContainer",component:T,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{tabLayout:M.Standard,contentBackgroundDesign:C.Solid,headerBackgroundDesign:C.Solid},tags:["package:@ui5/webcomponents"]},c={render:t=>e.jsxs(T,{...t,children:[e.jsx(n,{text:"Tab One",icon:V,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(n,{text:"Tab Two",icon:L,additionalText:"20",children:"Content Tab 2"}),e.jsx(n,{text:"Tab Three",icon:B,children:"Content Tab 3"}),e.jsx(n,{text:"Tab Four",icon:G,children:"Content Tab 4"}),e.jsx(n,{text:"Tab Five",icon:X,children:"Content Tab 5"})]})},l={name:"with TabSeparator",render:t=>e.jsxs(T,{...t,children:[e.jsx(n,{text:"Tab One",icon:V,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(s,{}),e.jsx(n,{text:"Tab Two",icon:L,additionalText:"20",children:"Content Tab 2"})]})},p={name:"with nested tabs",render:t=>e.jsxs(T,{...t,children:[e.jsx(n,{text:"Tab One",selected:!0,items:e.jsxs(e.Fragment,{children:[e.jsx(n,{text:"Tab 1.1"}),e.jsx(n,{text:"Tab 1.2"}),e.jsx(n,{text:"Tab 1.3"})]}),children:e.jsx("div",{style:{display:"none"}})}),e.jsx(s,{}),e.jsx(n,{text:"Tab Two"}),e.jsx(n,{text:"Tab Three",items:e.jsxs(e.Fragment,{children:[e.jsx(n,{text:"Tab 3.1"}),e.jsx(n,{text:"Tab 3.2"}),e.jsx(n,{text:"Tab 3.3"})]})})]})};var j,q,$;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...($=(q=c.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var I,N,D;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(N=l.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var O,z,k;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'with nested tabs',
  render: args => {
    return <TabContainer {...args}>
        <Tab text="Tab One" selected items={<>
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
        <Tab text="Tab Three" items={<>
              <Tab text="Tab 3.1" />
              <Tab text="Tab 3.2" />
              <Tab text="Tab 3.3" />
            </>} />
      </TabContainer>;
  }
}`,...(k=(z=p.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const me=["Default","WithTabSeparator","WithNestedTabs"],ve=Object.freeze(Object.defineProperty({__proto__:null,Default:c,WithNestedTabs:p,WithTabSeparator:l,__namedExportsOrder:me,default:pe},Symbol.toStringTag,{value:"Module"}));export{ve as C,c as D,s as T,l as W,p as a};
