import{j as e}from"./jsx-runtime-5926aa06.js";import{M as h}from"./chunk-PCJTTTQV-de6395ac.js";import"./index-ebeaab24.js";import{c as d}from"./react-jss.esm-022ab528.js";import{T as o}from"./ThemingParameters-7e2e4e30.js";import{T as m}from"./index-89c896a6.js";import"./DomRefTable.module-a912df1c.js";import{T as p}from"./TableOfContent-277e8de6.js";import{F as u}from"./Footer-c07411d0.js";import{u as a}from"./index-bda0bad7.js";import{M as s,a as l}from"./index-d95aa59d.js";import"./iframe-5937d610.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./UI5Element-b1843653.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./I18nContext-cdb50611.js";import"./ModalsContext-1c9f64b4.js";import"./CssSizeVariables-02fb2fd8.js";import"./CustomVariables-fd831c35.js";import"./GlobalStyleClasses-7209358d.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-1a349afe.js";import"./Label-350e96fc.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-fca59c5d.js";import"./index-c71597e0.js";import"./Link-64c69167.js";import"./Icon-aac9cdc2.js";import"./Icons-9f549e0f.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./index-3ef98d7c.js";import"./Popover-a3a62d04.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./Device-208919c6.js";import"./PopupUtils-2f7e8748.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-38257fbf.js";import"./FocusableElements-72585d9b.js";import"./isElementHidden-01c07146.js";import"./decline-d907918c.js";import"./i18n-defaults-80781f7e.js";import"./ResizeHandler-8726336f.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./class-map-6a9bd920.js";import"./information-0f993e39.js";import"./Button-37a8c146.js";const g={container:{backgroundColor:o.sapBackgroundColor,fontFamily:o.sapFontFamily,height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},text:{color:o.sapNegativeTextColor,fontSize:o.sapFontLargeSize}},y=d(g),c=()=>{const n=y();return e.jsx("div",{className:n.container,children:e.jsx("span",{className:n.text,children:"My Text"})})};c.__docgenInfo={description:"",methods:[],displayName:"MyCustomElement"};function ke(n={}){const{wrapper:r}=Object.assign({},a(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",strong:"strong","ui5-link":"ui5-link"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Styling"}),`
`,e.jsx(t.h1,{id:"styling",children:"Styling"}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"styling-ui5-web-components-for-react-components",children:"Styling UI5 Web Components for React components"}),`
`,e.jsxs(t.p,{children:["You can change the appearance of the Web Components by using ",e.jsx(t.a,{href:"https://www.w3schools.com/Css/css3_variables.asp",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS Variables"}),`.
Per default, we are injecting the Fiori 3 theme parameters as CSS Variables into the `,e.jsx(t.code,{children:"<head>"}),`.
For example, if you want to change the color of all texts that use the `,e.jsx(t.code,{children:"--sapTextColor"})," variable, you can create an additional ",e.jsx(t.code,{children:"style"})," tag with the following content:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<style>
  * {
    --sapTextColor: limegreen;
  }
</style>
`})}),`
`,e.jsx(s,{hideCloseButton:!0,design:l.Warning,children:"Changing the value of a CSS Variable will affect theming capabilities, as it will be changed for all themes!"}),`
`,e.jsxs(t.p,{children:["As a consequence, all HTML Elements in the subtree where this style was applied are now displaying their texts in ",e.jsx(t.code,{children:"limegreen"})," instead of ",e.jsx(t.code,{children:"#32363a"}),` which would be the default value for Fiori 3.
You can change CSS Variables on any level - in the head, or on every single element by using either CSS classes or element style.`]}),`
`,e.jsxs(t.p,{children:["A full list of all supported CSS Variables can be found ",e.jsx(t.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/packages/base/src/styling/ThemingParameters.ts",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),`
or in the `,e.jsx(t.a,{href:"https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/theming/webapp/index.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"SAPUI5 Theming Parameters Toolbox"}),"."]}),`
`,e.jsx(t.h2,{id:"reuse-global-style-classes",children:"Reuse global style classes"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"ThemeProvider"}),` component is offering global css classes that can be reused in your applications code to help you to achieve a Fiori look-and-feel.
All globally available style classes are tracked in the `,e.jsx(t.code,{children:"GlobalStyleClasses"})," enum which can be imported from ",e.jsx(t.code,{children:'import { GlobalStyleClasses } from "@ui5/webcomponents-react";'}),"."]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"CSS Class"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"sapScrollBar"})}),e.jsx(t.td,{children:"If added to an container that supports scrolling, the scrollbar will be styled according to Fiori guidelines."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"inheritingSapScrollBar"})}),e.jsx(t.td,{children:"If added to a container, the scollbars of the container and of all of its children will be styled according to Fiori guidelines."})]})]})]}),`
`,e.jsx(s,{hideCloseButton:!0,style:{marginBlockEnd:"1rem"},children:`With our next major release (v2.0.0), both style classes will be removed as then the SAP scrollbar will be used per
default for the whole application.`}),`
`,e.jsx(t.h3,{id:"use-default-browser-scrollbar",children:"Use default browser scrollbar"}),`
`,e.jsxs(t.p,{children:["Some components like the ",e.jsx(t.code,{children:"ObjectPage"}),", ",e.jsx(t.code,{children:"DynamicPage"})," and ",e.jsx(t.code,{children:"AnalyticalTable"})," use the CSS class ",e.jsx(t.code,{children:"sapScrollBar"})," by default. To prevent components from using the custom scrollbar, you can pass ",e.jsx(t.code,{children:"data-native-scrollbar"})," as prop."]}),`
`,e.jsx(t.h2,{id:"style-your-own-components",children:"Style your own components"}),`
`,e.jsxs(t.p,{children:[`It's quite likely you have to create some custom components when you are building an app.
In order to reuse our central styling approach, you can import the `,e.jsx(t.code,{children:"ThemingParameters"})," that contain the various CSS variables used in our theming."]}),`
`,e.jsxs(t.p,{children:["If you want to style your components with the ",e.jsx(t.code,{children:"react-jss"})," syntax, you can use the ",e.jsx(t.code,{children:"createUseStyles"}),` styling hook.
`,e.jsx(t.code,{children:"react-jss"})," comes already as a dependency of ",e.jsx(t.code,{children:"@ui5/webcomponents-react"})," to your project - but we recommend adding it to your ",e.jsx(t.code,{children:"package.json"}),` as well.
`,e.jsxs(t.strong,{children:["Please make sure you are installing ",e.jsx(t.code,{children:'"react-jss": "^10.0.0"'})]}),". Previous versions of this library won't work correctly together with our library."]}),`
`,e.jsx(s,{design:l.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[" You can find all ",e.jsx(t.code,{children:"ThemingParameters"})," ",e.jsx(t["ui5-link"],{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-public-utils--page#theming-parameters",target:"_blank",children:" here"})," . If you don't want to use CSS-in-JS library, you can also just use the corresponding CSS variable."]})}),`
`,e.jsx(t.p,{children:"You can then create a custom component by following this recipe:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import React from 'react';
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
`,e.jsx(t.p,{children:"This would then be the result:"}),`
`,e.jsx(m,{children:e.jsx(c,{})}),`
`,e.jsxs(t.h2,{id:"applying-styling-via-classname-or-style",children:["Applying styling via ",e.jsx(t.code,{children:"className"})," or ",e.jsx(t.code,{children:"style"})]}),`
`,e.jsxs(t.p,{children:["Almost all components allow setting ",e.jsx(t.code,{children:"className"})," or ",e.jsx(t.code,{children:"style"})," to style the component. For web components, this does ",e.jsx(t.strong,{children:"not"}),` mean that styles are inherited by shadow root elements per default.
Only `,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance#inherited_properties",target:"_blank",rel:"nofollow noopener noreferrer",children:"inherited CSS properties"}),` that are not set inside the shadow root or internally passed properties will change the styles of the internal elements.
Another special case are abstract components like the `,e.jsx(t.code,{children:"SuggestionItem"}),". The ",e.jsx(t.code,{children:"ui5-suggestion-item"})," element is mainly there to pass props to the actual component inside the shadow root and is therefore not stylable."]}),`
`,e.jsx(u,{})]})}}export{ke as default};
//# sourceMappingURL=Styling-8732eba1.js.map
