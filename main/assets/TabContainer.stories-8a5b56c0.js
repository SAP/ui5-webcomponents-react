import{M as j,C as m,j as h,a as T}from"./index-fc65de3d.js";import{b as z,T as i,a as t,S as u,c as k,d as f}from"./index-360132de.js";import{_ as U}from"./iframe-51c9489d.js";import{r as x,U as V,q,l as C}from"./UI5Element-386cb3f6.js";import{e as y,l as b,s as v,d as N,a as M,b as W,w as X}from"./withWebComponent-34dd487e.js";import{o as S}from"./class-map-60f59e95.js";import{s as _}from"./style-map-63946e4f.js";import{A as D}from"./DomRefTable.module-fb210060.js";import{D as G}from"./DocsHeader-b1974699.js";import{F as K}from"./Footer-54fe8402.js";import{a as n,j as e,F as p}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{D as J}from"./DomRefTable-675f43fa.js";import{a as d}from"./Icons-03f19c25.js";import"./add-b355a3ca.js";import"./calendar-1fcf0142.js";import"./settings-6ab1e637.js";import{S as Q}from"./SubcomponentsSection-6138f2fc.js";import{u as $}from"./index-4fb8b842.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./MarkedEvents-0e37da6f.js";import"./decline-48ecb430.js";import"./ListItem-5a448e1e.js";import"./Integer-5fa4beea.js";import"./AriaLabelHelper-dee23f38.js";import"./FocusableElements-13161f05.js";import"./Keys-50a1cb5a.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-b3fcb37c.js";import"./MediaRange-25b98f31.js";import"./ListItemBase-a71fd372.js";import"./ItemNavigation-a1cb3c20.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-98652d50.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-344b418d.js";import"./Label-f9741f9c.js";import"./WrappingType-b81e595a.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./RadioButton-bb0fefa8.js";import"./ValueState-2c5e5904.js";import"./CheckBox-5c169af0.js";import"./accept-39710bd2.js";import"./Button-981a9381.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-dcb3f847.js";import"./CustomListItem-0552ac45.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-c9e53615.js";import"./slim-arrow-up-c63b5718.js";import"./slim-arrow-down-fdce342b.js";import"./ResponsivePopover-f9a06272.js";import"./Popover-ff8f156e.js";import"./Dialog-30b3aaf0.js";import"./Title-256f7c0a.js";import"./ResponsivePopoverCommon.css-c2b66233.js";import"../sb-preview/runtime.mjs";import"./chunk-G4YQS2SV-3a764711.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./index-cbce79a2.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-8d74f27b.js";import"./TableOfContent-9c193c7f.js";import"./index-e644fe70.js";import"./index-224c0e2b.js";import"./Footer.module-c4f3b823.js";import"./index-273db19e.js";const Y=(a,c,s)=>y`<div id="${b(a._id)}" data-ui5-stable="${b(a.stableDomRef)}" role="separator" class="${S(a.classes)}"></div>`,Z=(a,c,s)=>s?y`<${v("ui5-li-custom",c,s)} id="${b(a._id)}" data-ui5-stable="${b(a.stableDomRef)}" role="separator" class="${S(a.classes)}" disabled style="${_(a._style)}"></${v("ui5-li-custom",c,s)}>`:y`<ui5-li-custom id="${b(a._id)}" data-ui5-stable="${b(a.stableDomRef)}" role="separator" class="${S(a.classes)}" disabled style="${_(a._style)}"></ui5-li-custom>`;x("@ui5/webcomponents-theming","sap_fiori_3",()=>N);x("@ui5/webcomponents","sap_fiori_3",()=>M);const ee={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInStrip.css",content:".ui5-tc__separator{width:0;border-left:.0625rem solid var(--sapGroup_TitleBorderColor);margin:.5rem .25rem}"};x("@ui5/webcomponents-theming","sap_fiori_3",()=>N);x("@ui5/webcomponents","sap_fiori_3",()=>M);const te={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInOverflow.css",content:".ui5-tc__separator{min-height:.25rem;border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor);margin-inline-start:calc(var(--_ui5-tab-indentation-level)*0.5rem);margin-inline-end:.5rem}[ui5-list]>.ui5-tc__separator:first-child{min-height:.5rem}"},ae={tag:"ui5-tab-separator"};let O=class extends V{static get metadata(){return ae}static get render(){return W}static get stripTemplate(){return Y}static get overflowTemplate(){return Z}get classes(){return{"ui5-tc__separator":!0}}get isSeparator(){return!0}getTabInStripDomRef(){return this._getElementInStrip()}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}get stripPresentation(){return q(this.constructor.stripTemplate,this)}get overflowPresentation(){return q(this.constructor.overflowTemplate,this)}};O.define();z.registerTabStyles(ee);z.registerStaticAreaTabStyles(te);const ne=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),r=X("ui5-tab-separator",[],[],[],[],()=>U(()=>Promise.resolve().then(()=>ne),void 0,import.meta.url));r.displayName="TabSeparator";try{r.displayName="TabSeparator",r.__docgenInfo={description:'The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TabContainer" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TabSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const oe=`## Structure

The \`TabContainer\` can hold two types of entities:

*   \`Tab\` - contains all the information on an item (text and icon)
*   \`TabSeparator\` - used to separate tabs with a line

## Hierarchies

Multiple sub tabs could be placed underneath one main tab. Nesting allows deeper hierarchies with indentations to indicate the level of each nested tab. When a tab has both sub tabs and own content its click area is split to allow the user to display the content or alternatively to expand / collapse the list of sub tabs.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TabContainer\` exposes the following CSS Shadow Parts:

*   content - Used to style the content of the component

## Keyboard Handling

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\``,ie="menu",P="M481 384q14 0 23 9t9 23-9 23-23 9H194q-15 0-23.5-9t-8.5-23 8.5-23 23.5-9h287zM194 129q-15 0-23.5-9T162 97t8.5-23 23.5-9h287q14 0 23 9t9 23-9 23-23 9H194zM50 368q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm0-159q20 0 34 13.5T98 256t-14 34-34 14-34-14-14-34 14-33.5T50 209zm0-160q20 0 34 14t14 34-14 34-34 14-34-14T2 97t14-34 34-14zm431 175q14 0 23 9t9 23q0 15-9 23.5t-23 8.5H194q-32 0-32-32 0-14 8.5-23t23.5-9h287z",re=!1,se="SAP-icons-v5",le="@ui5/webcomponents-icons";d(ie,{pathData:P,ltr:re,collection:se,packageName:le});const ce="menu",F="M32 64q14 0 23 9.5T64 96q0 14-9 23t-23 9q-13 0-22.5-9T0 96q0-13 9.5-22.5T32 64zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 256q0-13 9.5-22.5T32 224zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 416q0-13 9.5-22.5T32 384zm128-255q-13 0-22.5-9.5T128 97q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 256q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 415q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160z",be=!1,de="SAP-icons",pe="@ui5/webcomponents-icons";d(ce,{pathData:F,ltr:be,collection:de,packageName:pe});C("sap_horizon");const me="activities",H="M179 251q9-9 20.5-9t19.5 9q8 8 8 19.5t-8 19.5L105 404q-8 9-19.5 9T66 404L9 347q-9-8-9-19.5T9 307q8-8 19.5-8t19.5 8l37 37zm0-171q9-9 20.5-9t19.5 9q8 8 8 19.5t-8 20.5L105 233q-8 9-19.5 9T66 233L9 177q-9-9-9-20.5T9 137q8-9 19.5-9t19.5 9l37 37zm134 105q-28 0-28-28 0-13 7.5-21t20.5-8h171q13 0 20.5 8t7.5 21q0 28-28 28H313zm171 114q28 0 28 28 0 13-7.5 21t-20.5 8H313q-13 0-20.5-8t-7.5-21q0-28 28-28h171z",he=!0,Te="SAP-icons-v5",ue="@ui5/webcomponents-icons";d(me,{pathData:H,ltr:he,collection:Te,packageName:ue});const fe="activities",I="M480 32q13 0 22.5 9t9.5 23v384q0 13-9.5 22.5T480 480H32q-14 0-23-9.5T0 448V64q0-14 9-23t23-9h448zm0 32H32v384h448V64zM117 252l-53-53 17-19 36 36 71-88 18 17zm0 164l-53-54 17-18 36 36 71-89 18 18zm283-96q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-160q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z",ge=!0,xe="SAP-icons",we="@ui5/webcomponents-icons";d(fe,{pathData:I,ltr:ge,collection:xe,packageName:we});C("sap_horizon");const ye="sys-monitor",R="M435.5 1q32 0 54 22t22 55v255q0 32-22 54.5t-54 22.5h-103v51h51q26 0 26 25 0 26-26 26h-255q-11 0-18.5-7t-7.5-19q0-11 7.5-18t18.5-7h51v-51h-102q-33 0-55-22.5T.5 333V78q0-33 22-55t55-22h358zm-154 409h-51v51h51v-51zm179-332q0-26-25-26h-358q-11 0-18.5 7t-7.5 19v255q0 11 7.5 18.5t18.5 7.5h358q11 0 18-7.5t7-18.5V78z",Se=!1,Ce="SAP-icons-v5",qe="@ui5/webcomponents-icons";d(ye,{pathData:R,ltr:Se,collection:Ce,packageName:qe});const ve="sys-monitor",A="M480 32q14 0 23 9t9 23v320q0 13-9 22.5t-23 9.5H32q-13 0-22.5-9.5T0 384V64q0-14 9.5-23T32 32h448zm0 32H32v320h448V64zM368 448q16 0 16 16 0 6-4.5 11t-11.5 5H144q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h224z",_e=!1,De="SAP-icons",$e="@ui5/webcomponents-icons";d(ve,{pathData:A,ltr:_e,collection:De,packageName:$e});C("sap_horizon");const ze="The `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected\n",ke="The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n",Ne=[{name:"allItems",readonly:"true",visibility:"public",type:"undefined",description:'Returns all slotted tabs and their subTabs in a flattened array. The order of tabs is depth-first. For example, given the following slotted elements: <code> <ui5-tabcontainer> <ui5-tab id="First"> ... <ui5-tab slot="subTabs" id="Nested">...</ui5-tab> </ui5-tab> <ui5-tab id="Second">...</ui5-tab> <ui5-tab-separator id="sep"></ui5-tab-separator> <ui5-tab id="Third">...</ui5-tab> </ui5-tabcontainer> </code> Calling <code>allItems</code> on this TabContainer will return the instances in the following order: <code>[ ui5-tab#First, ui5-tab#Nested, ui5-tab#Second, ui5-tab-separator#sep, ui5-tab#Third ]</code>'}];function Me(a={}){const{wrapper:c}=Object.assign({},$(),a.components);return c?e(c,{...a,children:e(s,{})}):s();function s(){const o=Object.assign({h2:"h2",h1:"h1",p:"p",div:"div"},$(),a.components);return n(p,{children:[e(j,{title:"Layouts & Floorplans / TabContainer",component:i,subcomponents:{Tab:t,TabSeparator:r},argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{tabLayout:k.Standard,contentBackgroundDesign:f.Solid,headerBackgroundDesign:f.Solid}}),`
`,e(G,{}),`
`,e("br",{}),`
`,e(o.h2,{children:"Example"}),`
`,e(m,{children:e(h,{name:"Default",children:l=>n(i,{...l,children:[e(t,{text:"Tab One",icon:"menu",selected:!0,additionalText:"5",children:"Content Tab 1"}),e(t,{text:"Tab Two",icon:"activities",additionalText:"20",children:"Content Tab 2"}),e(t,{text:"Tab Three",icon:"add",children:"Content Tab 3"}),e(t,{text:"Tab Four",icon:"employee",children:"Content Tab 4"}),e(t,{text:"Tab Five",icon:"settings",children:"Content Tab 5"})]})})}),`
`,e(o.h2,{children:"Properties"}),`
`,e(D,{story:"Default"}),`
`,e(T,{children:oe}),`
`,e(J,{rows:Ne}),`
`,e(o.h1,{children:"More Examples"}),`
`,e("br",{}),`
`,e(o.h2,{children:"TabContainer with customizable Tab"}),`
`,n(o.p,{children:["The ",e("code",{children:"Tab"})," represents a selectable item inside a ",e("code",{children:"TabContainer"}),`. It defines both the item in the
tab strip (top part of the `,e("code",{children:"TabContainer"}),`) and the content that is presented to the user once the tab is
selected`]}),`
`,e(m,{children:e(h,{name:"with customizable Tab",args:{additionalText:"10",disabled:!1,icon:"sys-monitor",selected:!0,design:u.Positive,text:"Customizable Tab",children:"Tab Content"},argTypes:{additionalText:{description:'Represents the "additionalText" text, which is displayed in the tab filter.'},disabled:{description:"Enabled items can be selected."},icon:{description:'Defines the icon source URI to be displayed as graphical element within the <code>Tab</code>. The SAP-icons font provides numerous built-in icons. See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.'},selected:{description:"Specifies if the <code>Tab</code> is selected."},design:{options:Object.values(u),control:{type:"radio"}},stableDomRef:{description:"Defines the stable selector that you can use via getStableDomRef method."},text:{description:"The text to be displayed for the item."},children:{description:"Defines the tab content.",control:{disable:!1}},collapsed:{table:{disable:!0}},fixed:{table:{disable:!0}},showOverflow:{table:{disable:!0}},tabLayout:{table:{disable:!0}},overflowButton:{table:{disable:!0}},onTabSelect:{table:{disable:!0}}},children:l=>n(i,{...l,children:[e(t,{...l}),e(t,{text:"Tab 2",icon:"activities",children:"Content Tab 2"}),e(t,{text:"Tab 3",icon:"add",children:"Content Tab 3"}),e(t,{text:"Tab 4",icon:"employee",children:"Content Tab 4"}),e(t,{text:"Tab 5",icon:"settings",children:"Content Tab 5"})]})})}),`
`,e(D,{story:"with customizable Tab"}),`
`,e("br",{}),`
`,e(o.h2,{children:"TabContainer with TabSeparator"}),`
`,n(o.p,{children:["The ",e("code",{children:"TabSeparator"})," represents a vertical line to separate tabs inside a ",e("code",{children:"TabContainer"})]}),`
`,e(m,{children:e(h,{name:"with TabSeparator",children:l=>n(i,{...l,children:[e(t,{text:"Tab One",icon:"menu",selected:!0,additionalText:"5",children:"Content Tab 1"}),e(r,{}),e(t,{text:"Tab Two",icon:"activities",additionalText:"20",children:"Content Tab 2"})]})})}),`
`,e(o.h2,{children:"TabContainer with nested Tabs"}),`
`,e(m,{children:e(h,{name:"with nested tabs",children:l=>n(i,{children:[e(t,{text:"Tab One",selected:!0,subTabs:n(p,{children:[e(t,{text:"Tab 1.1"}),e(t,{text:"Tab 1.2"}),e(t,{text:"Tab 1.3"})]}),children:e(o.div,{style:{display:"none"}})}),e(r,{}),e(t,{text:"Tab Two"}),e(t,{text:"Tab Three",subTabs:n(p,{children:[e(t,{text:"Tab 3.1"}),e(t,{text:"Tab 3.2"}),e(t,{text:"Tab 3.3"})]})})]})})}),`
`,e(T,{children:Q}),`
`,e(o.h2,{children:"Tab"}),`
`,e(T,{children:ze}),`
`,e(o.h2,{children:"TabSeparator"}),`
`,e(T,{children:ke}),`
`,e(K,{})]})}}const E=a=>n(i,{...a,children:[e(t,{text:"Tab One",icon:"menu",selected:!0,additionalText:"5",children:"Content Tab 1"}),e(t,{text:"Tab Two",icon:"activities",additionalText:"20",children:"Content Tab 2"}),e(t,{text:"Tab Three",icon:"add",children:"Content Tab 3"}),e(t,{text:"Tab Four",icon:"employee",children:"Content Tab 4"}),e(t,{text:"Tab Five",icon:"settings",children:"Content Tab 5"})]});E.storyName="Default";E.parameters={storySource:{source:`args => {
  return <TabContainer {...args}>
          <Tab text="Tab One" icon="menu" selected additionalText="5">
            Content Tab 1
          </Tab>
          <Tab text="Tab Two" icon="activities" additionalText="20">
            Content Tab 2
          </Tab>
          <Tab text="Tab Three" icon="add">
            Content Tab 3
          </Tab>
          <Tab text="Tab Four" icon="employee">
            Content Tab 4
          </Tab>
          <Tab text="Tab Five" icon="settings">
            Content Tab 5
          </Tab>
        </TabContainer>;
}`}};const w=a=>n(i,{...a,children:[e(t,{...a}),e(t,{text:"Tab 2",icon:"activities",children:"Content Tab 2"}),e(t,{text:"Tab 3",icon:"add",children:"Content Tab 3"}),e(t,{text:"Tab 4",icon:"employee",children:"Content Tab 4"}),e(t,{text:"Tab 5",icon:"settings",children:"Content Tab 5"})]});w.storyName="with customizable Tab";w.argTypes={additionalText:{description:'Represents the "additionalText" text, which is displayed in the tab filter.'},disabled:{description:"Enabled items can be selected."},icon:{description:'Defines the icon source URI to be displayed as graphical element within the <code>Tab</code>. The SAP-icons font provides numerous built-in icons. See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.'},selected:{description:"Specifies if the <code>Tab</code> is selected."},design:{options:Object.values(u),control:{type:"radio"}},stableDomRef:{description:"Defines the stable selector that you can use via getStableDomRef method."},text:{description:"The text to be displayed for the item."},children:{description:"Defines the tab content.",control:{disable:!1}},collapsed:{table:{disable:!0}},fixed:{table:{disable:!0}},showOverflow:{table:{disable:!0}},tabLayout:{table:{disable:!0}},overflowButton:{table:{disable:!0}},onTabSelect:{table:{disable:!0}}};w.args={additionalText:"10",disabled:!1,icon:"sys-monitor",selected:!0,design:u.Positive,text:"Customizable Tab",children:"Tab Content"};w.parameters={storySource:{source:`args => {
  return <TabContainer {...args}>
          <Tab {...args} />
          <Tab text="Tab 2" icon="activities">
            Content Tab 2
          </Tab>
          <Tab text="Tab 3" icon="add">
            Content Tab 3
          </Tab>
          <Tab text="Tab 4" icon="employee">
            Content Tab 4
          </Tab>
          <Tab text="Tab 5" icon="settings">
            Content Tab 5
          </Tab>
        </TabContainer>;
}`}};const L=a=>n(i,{...a,children:[e(t,{text:"Tab One",icon:"menu",selected:!0,additionalText:"5",children:"Content Tab 1"}),e(r,{}),e(t,{text:"Tab Two",icon:"activities",additionalText:"20",children:"Content Tab 2"})]});L.storyName="with TabSeparator";L.parameters={storySource:{source:`args => {
  return <TabContainer {...args}>
          <Tab text="Tab One" icon="menu" selected additionalText="5">
            Content Tab 1
          </Tab>
          <TabSeparator />
          <Tab text="Tab Two" icon="activities" additionalText="20">
            Content Tab 2
          </Tab>
        </TabContainer>;
}`}};const B=a=>n(i,{children:[e(t,{text:"Tab One",selected:!0,subTabs:n(p,{children:[e(t,{text:"Tab 1.1"}),e(t,{text:"Tab 1.2"}),e(t,{text:"Tab 1.3"})]}),children:e("div",{style:{display:"none"}})}),e(r,{}),e(t,{text:"Tab Two"}),e(t,{text:"Tab Three",subTabs:n(p,{children:[e(t,{text:"Tab 3.1"}),e(t,{text:"Tab 3.2"}),e(t,{text:"Tab 3.3"})]})})]});B.storyName="with nested tabs";B.parameters={storySource:{source:`args => {
  return <TabContainer>
          <Tab text="Tab One" selected subTabs={<>
                <Tab text="Tab 1.1" />
                <Tab text="Tab 1.2" />
                <Tab text="Tab 1.3" />
              </>}>
            <div style={{
        display: "none"
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
}`}};const g={title:"Layouts & Floorplans / TabContainer",component:i,subcomponents:{Tab:t,TabSeparator:r},args:{tabLayout:k.Standard,contentBackgroundDesign:f.Solid,headerBackgroundDesign:f.Solid},argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomizableTab","withTabSeparator","withNestedTabs"]};g.parameters=g.parameters||{};g.parameters.docs={...g.parameters.docs||{},page:Me};const da=["defaultStory","withCustomizableTab","withTabSeparator","withNestedTabs"];export{da as __namedExportsOrder,g as default,E as defaultStory,w as withCustomizableTab,B as withNestedTabs,L as withTabSeparator};
//# sourceMappingURL=TabContainer.stories-8a5b56c0.js.map
