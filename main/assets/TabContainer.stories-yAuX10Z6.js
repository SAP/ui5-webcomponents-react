import{j as e}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{B as y}from"./BackgroundDesign-WBrF1AQ5.js";import{a as k,b as h,c as V,T as a}from"./index-BmcO2-rS.js";import{f,C as A,j as w}from"./UI5Element-B4CRQCUa.js";import{f as _}from"./Icons-CwMCtZ-T.js";import{a as E}from"./add-NVC2M0IY.js";import{e as L}from"./employee-DNQMDEE3.js";import{s as W}from"./settings-VlXBDsOw.js";import{_ as B}from"./iframe-J5Zwqo25.js";import{b as x,f as S,s as H,m as U,l as G,w as J}from"./withWebComponent-BxrD_3pN.js";import{l as i}from"./if-defined-Cl7uVo8B.js";import{o as q}from"./class-map-CVq5yHuN.js";import{s as v}from"./style-map-BoopDC9U.js";import{s as R}from"./parameters-bundle.css-DQGkr9pp.js";function K(n,t,o){return x`<div id="${i(this._id)}" role="separator" class="${q(this.classes.root)}" .realTabReference="${i(this)}"></div>`}function Q(n,t,o){return o?x`<${S("ui5-li-custom",t,o)} id="${i(this._id)}" role="separator" class="${q(this.classes.root)}" disabled style="${v(this._forcedStyleInOverflow)}" .realTabReference="${i(this)}"></${S("ui5-li-custom",t,o)}>`:x`<ui5-li-custom id="${i(this._id)}" role="separator" class="${q(this.classes.root)}" disabled style="${v(this._forcedStyleInOverflow)}" .realTabReference="${i(this)}"></ui5-li-custom>`}f("@ui5/webcomponents-theming","sap_horizon",async()=>H);f("@ui5/webcomponents","sap_horizon",async()=>R);const X={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInStrip.css.ts",content:`div.ui5-tc__separator{position:relative;width:.5625rem}div.ui5-tc__separator:before{content:" ";position:absolute;width:.0625rem;left:.25rem;top:.5rem;bottom:.5rem;background:var(--sapGroup_TitleBorderColor)}
`};f("@ui5/webcomponents-theming","sap_horizon",async()=>H);f("@ui5/webcomponents","sap_horizon",async()=>R);const Y={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInOverflow.css.ts",content:`[ui5-li-custom].ui5-tc__separator{min-height:.25rem;border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor);margin-inline-start:calc(var(--_ui5-v2-0-0-rc-6-tab-indentation-level) * .5rem);margin-inline-end:.5rem}[ui5-list]>[ui5-li-custom].ui5-tc__separator:first-child{min-height:.5rem}
`};var Z=function(n,t,o,p){var b=arguments.length,r=b<3?t:p===null?p=Object.getOwnPropertyDescriptor(t,o):p,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,t,o,p);else for(var g=n.length-1;g>=0;g--)(d=n[g])&&(r=(b<3?d(r):b>3?d(t,o,r):d(t,o))||r);return b>3&&r&&Object.defineProperty(t,o,r),r},T;let u=T=class extends A{static get stripTemplate(){return K}static get overflowTemplate(){return Q}get classes(){return{root:{"ui5-tc__separator":!0}}}get isSeparator(){return!0}receiveStripInfo({getElementInStrip:t}){this._getElementInStrip=t}receiveOverflowInfo({style:t}){this._forcedStyleInOverflow=t}getDomRefInStrip(){var t;return(t=this._getElementInStrip)==null?void 0:t.call(this)}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}get stripPresentation(){return w(T.stripTemplate,this)}get overflowPresentation(){return w(T.overflowTemplate,this)}};u=T=Z([U({tag:"ui5-tab-separator",renderer:G})],u);u.define();k.registerTabStyles(X);k.registerTabStyles(Y);const ee=u,te=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"})),s=J("ui5-tab-separator",[],[],[],[],()=>B(()=>Promise.resolve().then(()=>te),void 0,import.meta.url));s.displayName="TabSeparator";try{s.displayName="TabSeparator",s.__docgenInfo={description:"The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TabSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="TabSeparator",s.__docgenInfo={description:"The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TabSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ae="activities",ne="M480 32q13 0 22.5 9t9.5 23v384q0 13-9.5 22.5T480 480H32q-14 0-23-9.5T0 448V64q0-14 9-23t23-9h448zm0 32H32v384h448V64zM117 252l-53-53 17-19 36 36 71-88 18 17zm0 164l-53-54 17-18 36 36 71-89 18 18zm283-96q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-160q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z",oe=!0,re="SAP-icons-v4",se="@ui5/webcomponents-icons";_(ae,{pathData:ne,ltr:oe,collection:re,packageName:se});const ie="activities",ce="M181 71q7-7 17-7 11 0 18.5 7.5T224 90q0 10-8 18L101 217q-7 7-17 7-11 0-18-7L8 162q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm133 89q-11 0-18.5-7.5T288 134t7.5-18 18.5-7h172q11 0 18.5 7t7.5 18-7.5 18.5T486 160H314zM181 295q7-7 17-7 11 0 18.5 7.5T224 314q0 10-8 18L101 441q-7 7-17 7-11 0-18-7L8 386q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm305 38q11 0 18.5 7t7.5 18-7.5 18.5T486 384H314q-11 0-18.5-7.5T288 358t7.5-18 18.5-7h172z",le=!0,me="SAP-icons-v5",pe="@ui5/webcomponents-icons";_(ie,{pathData:ce,ltr:le,collection:me,packageName:pe});const F="activities",be="menu",de="M32 64q14 0 23 9.5T64 96q0 14-9 23t-23 9q-13 0-22.5-9T0 96q0-13 9.5-22.5T32 64zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 256q0-13 9.5-22.5T32 224zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 416q0-13 9.5-22.5T32 384zm128-255q-13 0-22.5-9.5T128 97q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 256q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 415q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160z",Te=!1,ue="SAP-icons-v4",he="@ui5/webcomponents-icons";_(be,{pathData:de,ltr:Te,collection:ue,packageName:he});const fe="menu",_e="M48 64q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm438 64H186q-11 0-18.5-7.5T160 102t7.5-18 18.5-7h300q11 0 18.5 7t7.5 18-7.5 18.5T486 128zM48 208q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm438 80H186q-11 0-18.5-7.5T160 262t7.5-18 18.5-7h300q11 0 18.5 7t7.5 18-7.5 18.5T486 288zM48 352q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm438 83H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 384h300q11 0 18.5 7.5T512 410t-7.5 18-18.5 7z",ge=!1,xe="SAP-icons-v5",qe="@ui5/webcomponents-icons";_(fe,{pathData:_e,ltr:ge,collection:xe,packageName:qe});const M="menu",ye={title:"Layouts & Floorplans / TabContainer",component:h,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{tabLayout:V.Standard,contentBackgroundDesign:y.Solid,headerBackgroundDesign:y.Solid},tags:["package:@ui5/webcomponents"]},c={render:n=>e.jsxs(h,{...n,children:[e.jsx(a,{text:"Tab One",icon:M,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(a,{text:"Tab Two",icon:F,additionalText:"20",children:"Content Tab 2"}),e.jsx(a,{text:"Tab Three",icon:E,children:"Content Tab 3"}),e.jsx(a,{text:"Tab Four",icon:L,children:"Content Tab 4"}),e.jsx(a,{text:"Tab Five",icon:W,children:"Content Tab 5"})]})},l={name:"with TabSeparator",render:n=>e.jsxs(h,{...n,children:[e.jsx(a,{text:"Tab One",icon:M,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(s,{}),e.jsx(a,{text:"Tab Two",icon:F,additionalText:"20",children:"Content Tab 2"})]})},m={name:"with nested tabs",render:n=>e.jsxs(h,{...n,children:[e.jsx(a,{text:"Tab One",selected:!0,items:e.jsxs(e.Fragment,{children:[e.jsx(a,{text:"Tab 1.1"}),e.jsx(a,{text:"Tab 1.2"}),e.jsx(a,{text:"Tab 1.3"})]}),children:e.jsx("div",{style:{display:"none"}})}),e.jsx(s,{}),e.jsx(a,{text:"Tab Two"}),e.jsx(a,{text:"Tab Three",items:e.jsxs(e.Fragment,{children:[e.jsx(a,{text:"Tab 3.1"}),e.jsx(a,{text:"Tab 3.2"}),e.jsx(a,{text:"Tab 3.3"})]})})]})};var $,C,j;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(j=(C=c.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var D,z,N;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(z=l.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var I,O,P;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const we=["Default","WithTabSeparator","WithNestedTabs"],Me=Object.freeze(Object.defineProperty({__proto__:null,Default:c,WithNestedTabs:m,WithTabSeparator:l,__namedExportsOrder:we,default:ye},Symbol.toStringTag,{value:"Module"}));export{Me as C,c as D,s as T,l as W,m as a};
