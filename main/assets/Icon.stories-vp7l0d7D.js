import{M as a,C as l,e as u,b as d}from"./chunk-HLWAVYOI-Fsp-hxMS.js";import{I as t}from"./index-tyGgJ5Dg.js";import"./employee-AJKdaGgo.js";import{A as h}from"./DomRefTable.module-V_iz5pw3.js";import{D as b}from"./DocsHeader-HlAwRvXd.js";import{F as w}from"./Footer-eFiH6U5V.js";import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u as p}from"./index-RwE9nQVW.js";import"./iframe-Lw9Evt3s.js";import"../sb-preview/runtime.js";import"./index--F0XPsCm.js";import"./index-QYh6idnL.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./Icon-Pjew2RCR.js";import"./UI5Element-66_7Xn_3.js";import"./i18nBundle-Q0g0h3jg.js";import"./VersionInfo-pP_ltRZs.js";import"./CustomElementsScopeUtils-EW5YHFd4.js";import"./withWebComponent-2sjwM42G.js";import"./utils-QJOW-WwB.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./Icons-nm0Q71Sx.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-9Rd_IMLD.js";import"./slot-HSrR9XJ-.js";import"./decline-qJ6wR11R.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-ME8CmmmC.js";import"./alert-Ymv9FYbl.js";import"./class-map--IQ_mtyb.js";import"./Button-mmkHl5a0.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-qkhvCaCQ.js";import"./clsx-2Jv0kmJG.js";import"./i18n-defaults-iuWYBGeC.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-57oB5XHU.js";import"./index-74gTEkhE.js";import"./Integer-kog98579.js";import"./index-jnaUnQ4S.js";import"./Avatar-AvAtElJx.js";import"./ResizeHandler-hw9R1O21.js";import"./index-FGcl4OpY.js";import"./index-ElgmpuNv.js";import"./Link-4yu6Lagp.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./TableOfContent-E9FhblW9.js";import"./index-lbOevkjn.js";import"./Label-h0RP0plm.js";import"./index-yQJZHkj2.js";import"./index-mV7dNsSC.js";import"./Popover-9STvCKGK.js";import"./PopupUtils-yApLm5YW.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-dDtjLgUi.js";import"./FocusableElements-yzAVBk6R.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-Pb14hoiG.js";import"./BrowserScrollbar.css-F0Fjr-0B.js";const g=`## Usage

1\\. **Get familiar with the icons collections.**  
Before displaying an icon, you need to explore the icons collections to find and import the desired icon.  
Currently there are 3 icons collection, available as 3 npm packages:

- <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons">@ui5/webcomponents-icons</ui5-link> represents the "SAP-icons" collection and includes the following <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons">icons</ui5-link>.
- <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt">@ui5/webcomponents-icons-tnt</ui5-link> represents the "tnt" collection and includes the following <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT">icons</ui5-link>.
- <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite">@ui5/webcomponents-icons-icons-business-suite</ui5-link> represents the "business-suite" collection and includes the following <ui5-link target="_blank" href="https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/BusinessSuiteInAppSymbols">icons</ui5-link>.

2\\. **After exploring the icons collections, add one or more of the packages as dependencies to your project.**  
\`npm i @ui5/webcomponents-icons\`  
\`npm i @ui5/webcomponents-icons-tnt\`  
\`npm i @ui5/webcomponents-icons-business-suite\`

3\\. **Then, import the desired icon**.  
\`import "@ui5/{package_name}/dist/{icon_name}.js";\`

**For Example**:  
For the standard "SAP-icons" icon collection, import an icon from the \`@ui5/webcomponents-icons\` package:  
\`import "@ui5/webcomponents-icons/dist/employee.js";\`

For the "tnt" (SAP Fiori Tools) icon collection, import an icon from the \`@ui5/webcomponents-icons-tnt\` package:  
\`import "@ui5/webcomponents-icons-tnt/dist/antenna.js";\`

For the "business-suite" (SAP Business Suite) icon collection, import an icon from the \`@ui5/webcomponents-icons-business-suite\` package:  
\`import "@ui5/webcomponents-icons-business-suite/dist/ab-testing.js";\`

4\\. **Display the icon using the \`Icon\` web component.**  
Set the icon collection ("SAP-icons", "tnt" or "business-suite" - "SAP-icons" is the default icon collection and can be skipped)  
and the icon name to the \`name\` property.

\`<Icon name="employee"></Icon>\`  
\`<Icon name="tnt/antenna"></Icon>\`  
\`<Icon name="business-suite/ab-testing"></Icon>\`

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Icon\` exposes the following CSS Shadow Parts:

- root - Used to style the outermost wrapper of the \`Icon\`

## Keyboard Handling

- \\[SPACE, ENTER, RETURN\\] - Fires the \`click\` event if the \`interactive\` property is set to true.
- \\[SHIFT\\] - If \\[SPACE\\] or \\[ENTER\\],\\[RETURN\\] is pressed, pressing \\[SHIFT\\] releases the Icon without triggering the click event.
`;function f(o={}){const{wrapper:i}=Object.assign({},p(),o.components);return i?e.jsx(i,{...o,children:e.jsx(s,{})}):s();function s(){const r=Object.assign({h2:"h2"},p(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / Icon",component:t,args:{name:"employee"}}),`
`,e.jsx(b,{}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(l,{children:e.jsx(u,{name:"Default",children:c=>e.jsx(t,{...c})})}),`
`,e.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{story:"Default"}),`
`,e.jsx(d,{children:g}),`
`,e.jsx(w,{})]})}}const m=o=>e.jsx(t,{...o});m.storyName="Default";m.parameters={storySource:{source:`args => {
  return <Icon {...args} />;
}`}};const n={title:"Data Display / Icon",component:t,args:{name:"employee"},tags:["stories-mdx"],includeStories:["defaultStory"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:f};const Fe=["defaultStory"];export{Fe as __namedExportsOrder,n as default,m as defaultStory};
//# sourceMappingURL=Icon.stories-vp7l0d7D.js.map
