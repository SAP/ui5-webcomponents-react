import{j as e}from"./useIsomorphicLayoutEffect-BDy32gDd.js";import{a as H,b as h,c as A,T as n}from"./index-GdT4usnn.js";import{h as x,j as S,f,s as M,m as E,k as L,I as W,H as w,w as U}from"./withWebComponent-CPW0iYAf.js";import{f as _}from"./Icon-BIxZr4TA.js";import{a as B}from"./add-C31AYfoH.js";import{e as G}from"./employee-BUU-8vVA.js";import{s as J}from"./settings-vVVGVRsk.js";import{_ as K}from"./iframe-D7O9TNL9.js";import{l as i}from"./if-defined-BCPYWAh1.js";import{o as q}from"./class-map-CQfLTfub.js";import{s as v}from"./style-map-Do0KrzH5.js";import{s as R}from"./parameters-bundle.css-DJWIHzS2.js";function Q(t,a,o){return x`<div id="${i(this._id)}" role="separator" class="${q(this.classes.root)}" .realTabReference="${i(this)}"></div>`}function X(t,a,o){return o?x`<${S("ui5-li-custom",a,o)} id="${i(this._id)}" role="separator" class="${q(this.classes.root)}" disabled style="${v(this._forcedStyleInOverflow)}" .realTabReference="${i(this)}"></${S("ui5-li-custom",a,o)}>`:x`<ui5-li-custom id="${i(this._id)}" role="separator" class="${q(this.classes.root)}" disabled style="${v(this._forcedStyleInOverflow)}" .realTabReference="${i(this)}"></ui5-li-custom>`}f("@ui5/webcomponents-theming","sap_horizon",async()=>M);f("@ui5/webcomponents","sap_horizon",async()=>R);const Y={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInStrip.css.ts",content:`div.ui5-tc__separator{position:relative;width:.5625rem}div.ui5-tc__separator:before{content:" ";position:absolute;width:.0625rem;left:.25rem;top:.5rem;bottom:.5rem;background:var(--sapGroup_TitleBorderColor)}
`};f("@ui5/webcomponents-theming","sap_horizon",async()=>M);f("@ui5/webcomponents","sap_horizon",async()=>R);const Z={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInOverflow.css.ts",content:`[ui5-li-custom].ui5-tc__separator{min-height:.25rem;border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor);margin-inline-start:calc(var(--_ui5-v2-1-1-tab-indentation-level) * .5rem);margin-inline-end:.5rem}[ui5-list]>[ui5-li-custom].ui5-tc__separator:first-child{min-height:.5rem}
`};var ee=function(t,a,o,p){var b=arguments.length,r=b<3?a:p===null?p=Object.getOwnPropertyDescriptor(a,o):p,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,a,o,p);else for(var g=t.length-1;g>=0;g--)(d=t[g])&&(r=(b<3?d(r):b>3?d(a,o,r):d(a,o))||r);return b>3&&r&&Object.defineProperty(a,o,r),r},T;let u=T=class extends W{static get stripTemplate(){return Q}static get overflowTemplate(){return X}get classes(){return{root:{"ui5-tc__separator":!0}}}get isSeparator(){return!0}receiveStripInfo({getElementInStrip:a}){this._getElementInStrip=a}receiveOverflowInfo({style:a}){this._forcedStyleInOverflow=a}getDomRefInStrip(){var a;return(a=this._getElementInStrip)==null?void 0:a.call(this)}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}get stripPresentation(){return w(T.stripTemplate,this)}get overflowPresentation(){return w(T.overflowTemplate,this)}};u=T=ee([E({tag:"ui5-tab-separator",renderer:L})],u);u.define();H.registerTabStyles(Y);H.registerTabStyles(Z);const te=u,ae=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"})),s=U("ui5-tab-separator",[],[],[],[],()=>K(()=>Promise.resolve().then(()=>ae),void 0,import.meta.url));s.displayName="TabSeparator";try{s.displayName="TabSeparator",s.__docgenInfo={description:"The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TabSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="TabSeparator",s.__docgenInfo={description:"The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TabSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var y;(function(t){t.Solid="Solid",t.Transparent="Transparent",t.Translucent="Translucent"})(y||(y={}));const $=y,ne="activities",oe="M480 32q13 0 22.5 9t9.5 23v384q0 13-9.5 22.5T480 480H32q-14 0-23-9.5T0 448V64q0-14 9-23t23-9h448zm0 32H32v384h448V64zM117 252l-53-53 17-19 36 36 71-88 18 17zm283-92q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zM117 416l-53-54 17-18 36 36 71-89 18 18zm283-96q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z",re=!0,se="SAP-icons-v4",ie="@ui5/webcomponents-icons";_(ne,{pathData:oe,ltr:re,collection:se,packageName:ie});const ce="activities",le="M181 295q7-7 17-7 11 0 18.5 7.5T224 314q0 10-8 18L101 441q-7 7-17 7-11 0-18-7L8 386q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm305 38q11 0 18.5 7t7.5 18-7.5 18.5T486 384H314q-11 0-18.5-7.5T288 358t7.5-18 18.5-7h172zM181 71q7-7 17-7 11 0 18.5 7.5T224 90q0 10-8 18L101 217q-7 7-17 7-11 0-18-7L8 162q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm133 89q-11 0-18.5-7.5T288 134t7.5-18 18.5-7h172q11 0 18.5 7t7.5 18-7.5 18.5T486 160H314z",me=!0,pe="SAP-icons-v5",be="@ui5/webcomponents-icons";_(ce,{pathData:le,ltr:me,collection:pe,packageName:be});const F="activities",de="menu",Te="M32 64q14 0 23 9.5T64 96q0 14-9 23t-23 9q-13 0-22.5-9T0 96q0-13 9.5-22.5T32 64zm128 65q-13 0-22.5-9.5T128 97q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zM32 224q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 256q0-13 9.5-22.5T32 224zm128 64q-13 0-22.5-9.5T128 256q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 415q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zM32 384q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 416q0-13 9.5-22.5T32 384z",ue=!1,he="SAP-icons-v4",fe="@ui5/webcomponents-icons";_(de,{pathData:Te,ltr:ue,collection:he,packageName:fe});const _e="menu",ge="M486 435H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 384h300q11 0 18.5 7.5T512 410t-7.5 18-18.5 7zm0-307H186q-11 0-18.5-7.5T160 102t7.5-18 18.5-7h300q11 0 18.5 7t7.5 18-7.5 18.5T486 128zM48 352q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm0-144q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm0-144q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm438 224H186q-11 0-18.5-7.5T160 262t7.5-18 18.5-7h300q11 0 18.5 7t7.5 18-7.5 18.5T486 288z",xe=!1,qe="SAP-icons-v5",ye="@ui5/webcomponents-icons";_(_e,{pathData:ge,ltr:xe,collection:qe,packageName:ye});const V="menu",Se={title:"Layouts & Floorplans / TabContainer",component:h,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{tabLayout:A.Standard,contentBackgroundDesign:$.Solid,headerBackgroundDesign:$.Solid},tags:["package:@ui5/webcomponents"]},c={render:t=>e.jsxs(h,{...t,children:[e.jsx(n,{text:"Tab One",icon:V,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(n,{text:"Tab Two",icon:F,additionalText:"20",children:"Content Tab 2"}),e.jsx(n,{text:"Tab Three",icon:B,children:"Content Tab 3"}),e.jsx(n,{text:"Tab Four",icon:G,children:"Content Tab 4"}),e.jsx(n,{text:"Tab Five",icon:J,children:"Content Tab 5"})]})},l={name:"with TabSeparator",render:t=>e.jsxs(h,{...t,children:[e.jsx(n,{text:"Tab One",icon:V,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(s,{}),e.jsx(n,{text:"Tab Two",icon:F,additionalText:"20",children:"Content Tab 2"})]})},m={name:"with nested tabs",render:t=>e.jsxs(h,{...t,children:[e.jsx(n,{text:"Tab One",selected:!0,items:e.jsxs(e.Fragment,{children:[e.jsx(n,{text:"Tab 1.1"}),e.jsx(n,{text:"Tab 1.2"}),e.jsx(n,{text:"Tab 1.3"})]}),children:e.jsx("div",{style:{display:"none"}})}),e.jsx(s,{}),e.jsx(n,{text:"Tab Two"}),e.jsx(n,{text:"Tab Three",items:e.jsxs(e.Fragment,{children:[e.jsx(n,{text:"Tab 3.1"}),e.jsx(n,{text:"Tab 3.2"}),e.jsx(n,{text:"Tab 3.3"})]})})]})};var C,j,z;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(z=(j=c.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var D,I,N;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(I=l.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var O,P,k;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(k=(P=m.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const we=["Default","WithTabSeparator","WithNestedTabs"],Re=Object.freeze(Object.defineProperty({__proto__:null,Default:c,WithNestedTabs:m,WithTabSeparator:l,__namedExportsOrder:we,default:Se},Symbol.toStringTag,{value:"Module"}));export{Re as C,c as D,s as T,l as W,m as a};
