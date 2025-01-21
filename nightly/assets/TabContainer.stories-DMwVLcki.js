import{j as e}from"./jsx-runtime-CLpGMVip.js";import{a as z,b as m,c as B,T as a}from"./index-AWl6Ur-7.js";import{j as D,p,d as R,m as H,e as M,I as N,Q as g,w as W}from"./withWebComponent-DfVDXLfc.js";import{f as L}from"./Icon-DVzRT9Bg.js";import{a as E}from"./add-APypkyXZ.js";import{e as k}from"./employee-4XFbe-2d.js";import{m as $}from"./menu-DhN9TkrZ.js";import{s as A}from"./settings-CxaJhnVI.js";import{L as G}from"./ListItemCustom-DWSZQ4xn.js";import{d as F}from"./parameters-bundle.css-BzaqQttB.js";function V(){return D("div",{id:this._id,role:"separator",class:"ui5-tc__separator",ref:this.captureRef.bind(this)})}function Q(){return D(G,{id:this._id,class:"ui5-tc__separator",disabled:!0,style:this._forcedStyleInOverflow,ref:this.captureRef.bind(this)})}p("@ui5/webcomponents-theming","sap_horizon",async()=>R);p("@ui5/webcomponents","sap_horizon",async()=>F);const J=`div.ui5-tc__separator{position:relative;width:.5625rem}div.ui5-tc__separator:before{content:" ";position:absolute;width:.0625rem;left:.25rem;top:.5rem;bottom:.5rem;background:var(--sapGroup_TitleBorderColor)}
`;p("@ui5/webcomponents-theming","sap_horizon",async()=>R);p("@ui5/webcomponents","sap_horizon",async()=>F);const K=`[ui5-li-custom].ui5-tc__separator{min-height:.25rem;border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor);margin-inline-start:calc(var(--_ui5-v2-6-2-tab-indentation-level) * .5rem);margin-inline-end:.5rem}[ui5-list]>[ui5-li-custom].ui5-tc__separator:first-child{min-height:.5rem}
`;var U=function(n,t,o,T){var b=arguments.length,r=b<3?t:T===null?T=Object.getOwnPropertyDescriptor(t,o):T,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,t,o,T);else for(var u=n.length-1;u>=0;u--)(l=n[u])&&(r=(b<3?l(r):b>3?l(t,o,r):l(t,o))||r);return b>3&&r&&Object.defineProperty(t,o,r),r},d;let x=d=class extends N{static get stripTemplate(){return V}static get overflowTemplate(){return Q}get isSeparator(){return!0}receiveStripInfo({getElementInStrip:t}){this._getElementInStrip=t}receiveOverflowInfo({style:t}){this._forcedStyleInOverflow=t}getDomRefInStrip(){var t;return(t=this._getElementInStrip)==null?void 0:t.call(this)}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}get stripPresentation(){return g(d.stripTemplate,this)}get overflowPresentation(){return g(d.overflowTemplate,this)}captureRef(t){t&&(t.realTabReference=this)}};x=d=U([H({tag:"ui5-tab-separator",renderer:M})],x);x.define();z.registerTabStyles(J);z.registerTabStyles(K);const f=W("ui5-tab-separator",[],[],[],[]);f.displayName="TabSeparator";var h;(function(n){n.Solid="Solid",n.Transparent="Transparent",n.Translucent="Translucent"})(h||(h={}));const v=h,X="activities",Y="M480 32q13 0 22.5 9t9.5 23v384q0 13-9.5 22.5T480 480H32q-14 0-23-9.5T0 448V64q0-14 9-23t23-9h448zm0 32H32v384h448V64zM117 252l-53-53 17-19 36 36 71-88 18 17zm283-92q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zM117 416l-53-54 17-18 36 36 71-89 18 18zm283-96q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z",Z=!0,ee="SAP-icons-v4",te="@ui5/webcomponents-icons";L(X,{pathData:Y,ltr:Z,collection:ee,packageName:te});const ae="activities",ne="M181 295q7-7 17-7 11 0 18.5 7.5T224 314q0 10-8 18L101 441q-7 7-17 7-11 0-18-7L8 386q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm305 38q11 0 18.5 7t7.5 18-7.5 18.5T486 384H314q-11 0-18.5-7.5T288 358t7.5-18 18.5-7h172zM181 71q7-7 17-7 11 0 18.5 7.5T224 90q0 10-8 18L101 217q-7 7-17 7-11 0-18-7L8 162q-8-8-8-19t7.5-18 18.5-7q10 0 17 7l41 38zm133 89q-11 0-18.5-7.5T288 134t7.5-18 18.5-7h172q11 0 18.5 7t7.5 18-7.5 18.5T486 160H314z",re=!0,oe="SAP-icons-v5",se="@ui5/webcomponents-icons";L(ae,{pathData:ne,ltr:re,collection:oe,packageName:se});const P="activities",ie={title:"Layouts & Floorplans / TabContainer",component:m,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{tabLayout:B.Standard,contentBackgroundDesign:v.Solid,headerBackgroundDesign:v.Solid},tags:["package:@ui5/webcomponents"]},s={render:n=>e.jsxs(m,{...n,children:[e.jsx(a,{text:"Tab One",icon:$,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(a,{text:"Tab Two",icon:P,additionalText:"20",children:"Content Tab 2"}),e.jsx(a,{text:"Tab Three",icon:E,children:"Content Tab 3"}),e.jsx(a,{text:"Tab Four",icon:k,children:"Content Tab 4"}),e.jsx(a,{text:"Tab Five",icon:A,children:"Content Tab 5"})]})},i={name:"with TabSeparator",render:n=>e.jsxs(m,{...n,children:[e.jsx(a,{text:"Tab One",icon:$,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(f,{}),e.jsx(a,{text:"Tab Two",icon:P,additionalText:"20",children:"Content Tab 2"})]})},c={name:"with nested tabs",render:n=>e.jsxs(m,{...n,children:[e.jsx(a,{text:"Tab One",selected:!0,items:e.jsxs(e.Fragment,{children:[e.jsx(a,{text:"Tab 1.1"}),e.jsx(a,{text:"Tab 1.2"}),e.jsx(a,{text:"Tab 1.3"})]}),children:e.jsx("div",{style:{display:"none"}})}),e.jsx(f,{}),e.jsx(a,{text:"Tab Two"}),e.jsx(a,{text:"Tab Three",items:e.jsxs(e.Fragment,{children:[e.jsx(a,{text:"Tab 3.1"}),e.jsx(a,{text:"Tab 3.2"}),e.jsx(a,{text:"Tab 3.3"})]})})]})};var _,S,j;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var w,C,q;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(q=(C=i.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var I,y,O;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(O=(y=c.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};const ce=["Default","WithTabSeparator","WithNestedTabs"],ve=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithNestedTabs:c,WithTabSeparator:i,__namedExportsOrder:ce,default:ie},Symbol.toStringTag,{value:"Module"}));export{ve as C,s as D,f as T,i as W,c as a};
