import{j as e}from"./jsx-runtime-d079401a.js";import{M as b}from"./chunk-S4VUQJ4A-3cbce536.js";import"./index-f1f2c4b1.js";import{c as u}from"./react-jss.esm-2e5f50f2.js";import{T as s}from"./ThemingParameters-7e2e4e30.js";import{T as x,a as c,b as h,c as r}from"./index-d96bf320.js";import{L as o}from"./index-61a93647.js";import{T as g}from"./index-16b73955.js";import"./DomRefTable.module-4446d599.js";import{T as j}from"./TableOfContent-4e3ddbd7.js";import{F as y}from"./Footer-3091146e.js";import{u as d}from"./index-59d6410c.js";import{M as l,a as m}from"./index-e2f81b86.js";import"./iframe-c980d496.js";import"../sb-preview/runtime.js";import"./index-d203965f.js";import"./index-b42968db.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./UI5Element-a4bd3d38.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./Icon-42236945.js";import"./Icons-74c917eb.js";import"./slot-76e48863.js";import"./ResizeHandler-0af4416f.js";import"./ItemNavigation-0734b7c0.js";import"./Integer-f7f172c9.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-ce1a2cfb.js";import"./Label-287c3220.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-d5d083dd.js";import"./class-map-0ab40ab9.js";import"./CheckBox-355e2cb2.js";import"./Device-6afa24d0.js";import"./ValueState-2c5e5904.js";import"./accept-aa607c05.js";import"./style-map-132a30d8.js";import"./MarkedEvents-b83081e9.js";import"./I18nContext-dd74d568.js";import"./ModalsContext-c6c22f4c.js";import"./CssSizeVariables-17481929.js";import"./CustomVariables-df17d38c.js";import"./GlobalStyleClasses-7209358d.js";import"./index-bb1f9706.js";import"./clsx-1229b3e0.js";import"./addCustomCSSWithScoping-d9b40dee.js";import"./index-9c9dc80a.js";import"./index-35665025.js";import"./Avatar-6c09069b.js";import"./employee-05c578de.js";import"./index-352d6aeb.js";import"./index-592aa2bd.js";import"./Link-498d09c2.js";import"./index-fb6e8b5e.js";import"./index-eed22c01.js";import"./Button-02dfef34.js";import"./index-691f7054.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-309143b9.js";import"./information-dbbb1c9a.js";const f={container:{backgroundColor:s.sapBackgroundColor,fontFamily:s.sapFontFamily,height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},text:{color:s.sapNegativeTextColor,fontSize:s.sapFontLargeSize}},w=u(f),p=()=>{const t=w();return e.jsx("div",{className:t.container,children:e.jsx("span",{className:t.text,children:"My Text"})})};p.__docgenInfo={description:"",methods:[],displayName:"MyCustomElement"};const S=()=>e.jsxs(x,{columns:e.jsxs(e.Fragment,{children:[e.jsx(c,{className:"thGreen",children:e.jsx(o,{children:"Product"})}),e.jsx(c,{children:e.jsx(o,{children:"Price"})})]}),children:[e.jsxs(h,{className:"trBlue",children:[e.jsx(r,{children:e.jsx(o,{children:"Notebook Basic"})}),e.jsx(r,{children:e.jsx(o,{children:"956EUR"})})]}),e.jsxs(h,{children:[e.jsx(r,{children:e.jsx(o,{children:"Notebook Basic 17HT-1001"})}),e.jsx(r,{children:e.jsx(o,{children:"1249EUR"})})]})]});function Ye(t={}){const{wrapper:a}=Object.assign({},d(),t.components);return a?e.jsx(a,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",strong:"strong","ui5-link":"ui5-link"},d(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Styling"}),`
`,e.jsx(n.h1,{id:"styling",children:"Styling"}),`
`,e.jsx(j,{}),`
`,e.jsx(n.h2,{id:"styling-ui5-web-components-for-react-components",children:"Styling UI5 Web Components for React components"}),`
`,e.jsxs(n.p,{children:["You can change the appearance of the Web Components by using ",e.jsx(n.a,{href:"https://www.w3schools.com/Css/css3_variables.asp",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS Variables"}),`.
Per default, we are injecting the Fiori 3 theme parameters as CSS Variables into the `,e.jsx(n.code,{children:"<head>"}),`.
For example, if you want to change the color of all texts that use the `,e.jsx(n.code,{children:"--sapTextColor"})," variable, you can create an additional ",e.jsx(n.code,{children:"style"})," tag with the following content:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<style>
  * {
    --sapTextColor: limegreen;
  }
</style>
`})}),`
`,e.jsx(l,{hideCloseButton:!0,design:m.Warning,children:"Changing the value of a CSS Variable will affect theming capabilities, as it will be changed for all themes!"}),`
`,e.jsxs(n.p,{children:["As a consequence, all HTML Elements in the subtree where this style was applied are now displaying their texts in ",e.jsx(n.code,{children:"limegreen"})," instead of ",e.jsx(n.code,{children:"#32363a"}),` which would be the default value for Fiori 3.
You can change CSS Variables on any level - in the head, or on every single element by using either CSS classes or element style.`]}),`
`,e.jsxs(n.p,{children:["A full list of all supported CSS Variables can be found ",e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/packages/base/src/styling/ThemingParameters.ts",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),`
or in the `,e.jsx(n.a,{href:"https://github.com/SAP/theming-base-content/tree/master/content/Base/baseLib",target:"_blank",rel:"nofollow noopener noreferrer",children:"theming-base-content"})," repo."]}),`
`,e.jsx(n.h2,{id:"reuse-global-style-classes",children:"Reuse global style classes"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ThemeProvider"}),` component is offering global css classes that can be reused in your applications code to help you to achieve a Fiori look-and-feel.
All globally available style classes are tracked in the `,e.jsx(n.code,{children:"GlobalStyleClasses"})," enum which can be imported from ",e.jsx(n.code,{children:'import { GlobalStyleClasses } from "@ui5/webcomponents-react";'}),"."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"CSS Class"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapScrollBar"})}),e.jsx(n.td,{children:"If added to an container that supports scrolling, the scrollbar will be styled according to Fiori guidelines."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"inheritingSapScrollBar"})}),e.jsx(n.td,{children:"If added to a container, the scollbars of the container and of all of its children will be styled according to Fiori guidelines."})]})]})]}),`
`,e.jsx(l,{hideCloseButton:!0,style:{marginBlockEnd:"1rem"},children:`With our next major release (v2.0.0), both style classes will be removed as then the SAP scrollbar will be used per
default for the whole application.`}),`
`,e.jsx(n.h3,{id:"use-default-browser-scrollbar",children:"Use default browser scrollbar"}),`
`,e.jsxs(n.p,{children:["Some components like the ",e.jsx(n.code,{children:"ObjectPage"}),", ",e.jsx(n.code,{children:"DynamicPage"})," and ",e.jsx(n.code,{children:"AnalyticalTable"})," use the CSS class ",e.jsx(n.code,{children:"sapScrollBar"})," by default. To prevent components from using the custom scrollbar, you can pass ",e.jsx(n.code,{children:"data-native-scrollbar"})," as prop."]}),`
`,e.jsx(n.h2,{id:"style-your-own-components",children:"Style your own components"}),`
`,e.jsxs(n.p,{children:[`It's quite likely you have to create some custom components when you are building an app.
In order to reuse our central styling approach, you can import the `,e.jsx(n.code,{children:"ThemingParameters"})," that contain the various CSS variables used in our theming."]}),`
`,e.jsxs(n.p,{children:["If you want to style your components with the ",e.jsx(n.code,{children:"react-jss"})," syntax, you can use the ",e.jsx(n.code,{children:"createUseStyles"}),` styling hook.
`,e.jsx(n.code,{children:"react-jss"})," comes already as a dependency of ",e.jsx(n.code,{children:"@ui5/webcomponents-react"})," to your project - but we recommend adding it to your ",e.jsx(n.code,{children:"package.json"}),` as well.
`,e.jsxs(n.strong,{children:["Please make sure you are installing ",e.jsx(n.code,{children:'"react-jss": "^10.0.0"'})]}),". Previous versions of this library won't work correctly together with our library."]}),`
`,e.jsx(l,{design:m.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[" You can find all ",e.jsx(n.code,{children:"ThemingParameters"})," ",e.jsx(n["ui5-link"],{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-public-utils--docs#theming-parameters",target:"_blank",children:" here"})," . If you don't want to use CSS-in-JS library, you can also just use the corresponding CSS variable."]})}),`
`,e.jsx(n.p,{children:"You can then create a custom component by following this recipe:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React from 'react';
import { createUseStyles } from 'react-jss';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

const styles = {
  container: {
    backgroundColor: ThemingParameters.sapBackgroundColor,
    fontFamily: ThemingParameters.sapFontFamily,
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const useStyles = createUseStyles(styles, { name: 'MyCustomElement' });

const MyCustomElement = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span style={{ color: ThemingParameters.sapNegativeColor, fontSize: ThemingParameters.sapFontLargeSize }}>
        My Text
      </span>
    </div>
  );
};
`})}),`
`,e.jsx(n.p,{children:"This would then be the result:"}),`
`,e.jsx(g,{children:e.jsx(p,{})}),`
`,e.jsxs(n.h2,{id:"applying-styling-via-classname-or-style",children:["Applying styling via ",e.jsx(n.code,{children:"className"})," or ",e.jsx(n.code,{children:"style"})]}),`
`,e.jsxs(n.p,{children:["Almost all components allow setting ",e.jsx(n.code,{children:"className"})," or ",e.jsx(n.code,{children:"style"})," to style the component. For web components, this does ",e.jsx(n.strong,{children:"not"}),` mean that styles are inherited by shadow root elements per default.
Only `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance#inherited_properties",target:"_blank",rel:"nofollow noopener noreferrer",children:"inherited CSS properties"}),` that are not set inside the shadow root or internally passed properties will change the styles of the internal elements.
Another special case are abstract components like the `,e.jsx(n.code,{children:"SuggestionItem"}),". The ",e.jsx(n.code,{children:"ui5-suggestion-item"})," element is mainly there to pass props to the actual component inside the shadow root and is therefore not stylable."]}),`
`,e.jsx(n.h2,{id:"css-shadow-parts",children:"CSS Shadow Parts"}),`
`,e.jsxs(n.p,{children:["When using web components like the ",e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/data-display-table--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Table"}),`, you will sometimes see a "CSS Shadow Parts" section.
One of the main advantages of the shadow root is encapsulation of parts of the DOM and styles, but since it could still be necessary for some elements to be adjusted even though they're inside the shadow root, the ui5-webcomponents offer a way to customize CSS of selected elements by attaching the `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#part",target:"_blank",rel:"nofollow noopener noreferrer",children:"part"}),` attribute.
With the help of this attribute it's possible styling the respective element, by using the `,e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",target:"_blank",rel:"nofollow noopener noreferrer",children:[e.jsx(n.code,{children:"::part"})," pseudo-element"]}),"."]}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(S,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.thGreen::part(column) {
  background-color: lightgreen;
}
.trBlue::part(row) {
  background-color: lightblue;
}
`})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const TableComponent = () => {
  return (
    <Table
      columns={
        <>
          <TableColumn className="thGreen">
            <Label>Product</Label>
          </TableColumn>
          <TableColumn>
            <Label>Price</Label>
          </TableColumn>
        </>
      }
    >
      <TableRow className="trBlue">
        <TableCell>
          <Label>Notebook Basic</Label>
        </TableCell>
        <TableCell>
          <Label>956EUR</Label>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Label>Notebook Basic 17HT-1001</Label>
        </TableCell>
        <TableCell>
          <Label>1249EUR</Label>
        </TableCell>
      </TableRow>
    </Table>
  );
};
`})})]}),`
`,e.jsx(y,{})]})}}export{Ye as default};
//# sourceMappingURL=Styling-919dd9e5.js.map
