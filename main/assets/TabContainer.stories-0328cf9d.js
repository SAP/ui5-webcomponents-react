import{a as m,j as t,F as w}from"./jsx-runtime-670450c2.js";import{a as f,U as G,q as v,k as F}from"./UI5Element-427ec721.js";import{h as g}from"./Icons-fe6e657a.js";import{a as J}from"./add-eaa5d1e7.js";import{e as K}from"./employee-1bc983a2.js";import{s as Q}from"./settings-f4b98acd.js";import{b as M,T as _,c as X,d as x,a}from"./index-c4b3f228.js";import{_ as Y}from"./iframe-a2917a3a.js";import{e as y,l as s,s as C,a as R,b as L,c as Z,d as ee,w as te}from"./withWebComponent-65cd39a0.js";import{o as S}from"./class-map-95320e87.js";import{s as $}from"./style-map-cae0a379.js";const ae=(e,o,n)=>y`<div id="${s(e._id)}" data-ui5-stable="${s(e.stableDomRef)}" role="separator" class="${S(e.classes.root)}"></div>`,oe=(e,o,n)=>n?y`<${C("ui5-li-custom",o,n)} id="${s(e._id)}" data-ui5-stable="${s(e.stableDomRef)}" role="separator" class="${S(e.classes.root)}" disabled style="${$(e._style)}"></${C("ui5-li-custom",o,n)}>`:y`<ui5-li-custom id="${s(e._id)}" data-ui5-stable="${s(e.stableDomRef)}" role="separator" class="${S(e.classes.root)}" disabled style="${$(e._style)}"></ui5-li-custom>`;f("@ui5/webcomponents-theming","sap_fiori_3",async()=>R);f("@ui5/webcomponents","sap_fiori_3",async()=>L);const ne={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInStrip.css.ts",content:".ui5-tc__separator{width:0;border-left:.0625rem solid var(--sapGroup_TitleBorderColor);margin:.5rem .25rem}"};f("@ui5/webcomponents-theming","sap_fiori_3",async()=>R);f("@ui5/webcomponents","sap_fiori_3",async()=>L);const re={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInOverflow.css.ts",content:".ui5-tc__separator{min-height:.25rem;border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor);margin-inline-start:calc(var(--_ui5-tab-indentation-level)*0.5rem);margin-inline-end:.5rem}[ui5-list]>.ui5-tc__separator:first-child{min-height:.5rem}"};var se=globalThis&&globalThis.__decorate||function(e,o,n,T){var p=arguments.length,r=p<3?o:T===null?T=Object.getOwnPropertyDescriptor(o,n):T,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,n,T);else for(var q=e.length-1;q>=0;q--)(d=e[q])&&(r=(p<3?d(r):p>3?d(o,n,r):d(o,n))||r);return p>3&&r&&Object.defineProperty(o,n,r),r},u;let h=u=class extends G{static get stripTemplate(){return ae}static get overflowTemplate(){return oe}get classes(){return{root:{"ui5-tc__separator":!0}}}get isSeparator(){return!0}getTabInStripDomRef(){return this._getElementInStrip?this._getElementInStrip():null}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}get stripPresentation(){return v(u.stripTemplate,this)}get overflowPresentation(){return v(u.overflowTemplate,this)}};h=u=se([Z({tag:"ui5-tab-separator",renderer:ee})],h);h.define();M.registerTabStyles(ne);M.registerStaticAreaTabStyles(re);const ie=h,ce=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),b=te("ui5-tab-separator",[],[],[],[],()=>Y(()=>Promise.resolve().then(()=>ce),void 0,import.meta.url));b.displayName="TabSeparator";try{b.displayName="TabSeparator",b.__docgenInfo={description:'The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TabContainer" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TabSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const le="activities",E="M480 32q13 0 22.5 9t9.5 23v384q0 13-9.5 22.5T480 480H32q-14 0-23-9.5T0 448V64q0-14 9-23t23-9h448zm0 32H32v384h448V64zM117 252l-53-53 17-19 36 36 71-88 18 17zm0 164l-53-54 17-18 36 36 71-89 18 18zm283-96q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-160q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z",me=!0,be="SAP-icons-v4",Te="@ui5/webcomponents-icons";g(le,{pathData:E,ltr:me,collection:be,packageName:Te});const pe="activities",W="M179 251q9-9 20.5-9t19.5 9q8 8 8 19.5t-8 19.5L105 404q-8 9-19.5 9T66 404L9 347q-9-8-9-19.5T9 307q8-8 19.5-8t19.5 8l37 37zm0-171q9-9 20.5-9t19.5 9q8 8 8 19.5t-8 20.5L105 233q-8 9-19.5 9T66 233L9 177q-9-9-9-20.5T9 137q8-9 19.5-9t19.5 9l37 37zm134 105q-28 0-28-28 0-13 7.5-21t20.5-8h171q13 0 20.5 8t7.5 21q0 28-28 28H313zm171 114q28 0 28 28 0 13-7.5 21t-20.5 8H313q-13 0-20.5-8t-7.5-21q0-28 28-28h171z",de=!0,ue="SAP-icons-v5",he="@ui5/webcomponents-icons";g(pe,{pathData:W,ltr:de,collection:ue,packageName:he});F("sap_horizon");const A="activities",fe="menu",B="M32 64q14 0 23 9.5T64 96q0 14-9 23t-23 9q-13 0-22.5-9T0 96q0-13 9.5-22.5T32 64zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 256q0-13 9.5-22.5T32 224zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 416q0-13 9.5-22.5T32 384zm128-255q-13 0-22.5-9.5T128 97q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 256q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 415q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160z",ge=!1,_e="SAP-icons-v4",qe="@ui5/webcomponents-icons";g(fe,{pathData:B,ltr:ge,collection:_e,packageName:qe});const ye="menu",U="M481 384q14 0 23 9t9 23-9 23-23 9H194q-15 0-23.5-9t-8.5-23 8.5-23 23.5-9h287zM194 129q-15 0-23.5-9T162 97t8.5-23 23.5-9h287q14 0 23 9t9 23-9 23-23 9H194zM50 368q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm0-159q20 0 34 13.5T98 256t-14 34-34 14-34-14-14-34 14-33.5T50 209zm0-160q20 0 34 14t14 34-14 34-34 14-34-14T2 97t14-34 34-14zm431 175q14 0 23 9t9 23q0 15-9 23.5t-23 8.5H194q-32 0-32-32 0-14 8.5-23t23.5-9h287z",Se=!1,we="SAP-icons-v5",ve="@ui5/webcomponents-icons";g(ye,{pathData:U,ltr:Se,collection:we,packageName:ve});F("sap_horizon");const V="menu",xe={title:"Layouts & Floorplans / TabContainer",component:_,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{tabLayout:X.Standard,contentBackgroundDesign:x.Solid,headerBackgroundDesign:x.Solid}},i={render:e=>m(_,{...e,children:[t(a,{text:"Tab One",icon:V,selected:!0,additionalText:"5",children:"Content Tab 1"}),t(a,{text:"Tab Two",icon:A,additionalText:"20",children:"Content Tab 2"}),t(a,{text:"Tab Three",icon:J,children:"Content Tab 3"}),t(a,{text:"Tab Four",icon:K,children:"Content Tab 4"}),t(a,{text:"Tab Five",icon:Q,children:"Content Tab 5"})]})},c={name:"with TabSeparator",render:e=>m(_,{...e,children:[t(a,{text:"Tab One",icon:V,selected:!0,additionalText:"5",children:"Content Tab 1"}),t(b,{}),t(a,{text:"Tab Two",icon:A,additionalText:"20",children:"Content Tab 2"})]})},l={name:"with nested tabs",render:e=>m(_,{...e,children:[t(a,{text:"Tab One",selected:!0,subTabs:m(w,{children:[t(a,{text:"Tab 1.1"}),t(a,{text:"Tab 1.2"}),t(a,{text:"Tab 1.3"})]}),children:t("div",{style:{display:"none"}})}),t(b,{}),t(a,{text:"Tab Two"}),t(a,{text:"Tab Three",subTabs:m(w,{children:[t(a,{text:"Tab 3.1"}),t(a,{text:"Tab 3.2"}),t(a,{text:"Tab 3.3"})]})})]})};var D,z,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(z=i.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var N,k,O;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var P,H,j;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(j=(H=l.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};const Ce=["Default","WithTabSeparator","WithNestedTabs"],Re=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithNestedTabs:l,WithTabSeparator:c,__namedExportsOrder:Ce,default:xe},Symbol.toStringTag,{value:"Module"}));export{Re as C,i as D,b as T,c as W,l as a};
//# sourceMappingURL=TabContainer.stories-0328cf9d.js.map
