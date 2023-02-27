import{j as t,a as n,F as l}from"./jsx-runtime-670450c2.js";import"./chunk-4XCFV5WA-1d38d068.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as m}from"./index-af73ac4a.js";import"./index-f1f749bf.js";import{c as p}from"./react-jss.esm-e54d2f1d.js";import{T as r}from"./ThemingParameters-f4b4144e.js";import{T as u}from"./index-24f042dd.js";import"./DomRefTable.module-b639743d.js";import"./Import-4854b3a2.js";import{F as g}from"./Footer-a7e3ddcb.js";import{u as c}from"./index-4fb8b842.js";import{M as i,a as h}from"./index-fc4a35b3.js";import"./iframe-1309f788.js";import"../sb-preview/runtime.mjs";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./I18nContext-bef5b452.js";import"./ModalsContext-131e4070.js";import"./CssSizeVariables-bd372cde.js";import"./GlobalStyleClasses-7209358d.js";import"./CustomVariables-fd831c35.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-9ade7ea8.js";import"./Label-6707bdfc.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./class-map-abcca105.js";import"./WrappingType-b81e595a.js";import"./index-156601ea.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-0e37da6f.js";import"./Keys-50a1cb5a.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-4c3dd6ed.js";import"./Popover-97ca01c1.js";import"./Integer-8010a7ae.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./style-map-7b3eb5df.js";import"./decline-ff534003.js";import"./Icons-5bcf1e3f.js";import"./Button-2e5054c2.js";const y={container:{backgroundColor:r.sapBackgroundColor,fontFamily:r.sapFontFamily,height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},text:{color:r.sapNegativeTextColor,fontSize:r.sapFontLargeSize}},b=p(y),d=()=>{const o=b();return t("div",{className:o.container,children:t("span",{className:o.text,children:"My Text"})})};d.__docgenInfo={description:"",methods:[],displayName:"MyCustomElement"};function Ce(o={}){const{wrapper:a}=Object.assign({},c(),o.components);return a?t(a,Object.assign({},o,{children:t(s,{})})):s();function s(){const e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",strong:"strong","ui5-link":"ui5-link"},c(),o.components);return n(l,{children:[t(m,{title:"Styling"}),`
`,t(e.h1,{children:"Styling"}),`
`,n(e.p,{children:["You can change the appearance of the Web Components by using ",t(e.a,{href:"https://www.w3schools.com/Css/css3_variables.asp",children:"CSS Variables"}),`.
Per default, we are injecting the Fiori 3 theme parameters as CSS Variables into the `,t(e.code,{children:"<head>"}),`.
For example, if you want to change the color of all texts that use the `,t(e.code,{children:"--sapTextColor"})," variable, you can create an additional ",t(e.code,{children:"style"})," tag with the following content:"]}),`
`,t(e.pre,{children:t(e.code,{className:"language-html",children:`<style>
  * {
    --sapTextColor: limegreen;
  }
</style>
`})}),`
`,t(i,{hideCloseButton:!0,design:h.Warning,children:"Changing the value of a CSS Variable will affect theming capabilities, as it will be changed for all themes!"}),`
`,n(e.p,{children:["As a consequence, all HTML Elements in the subtree where this style was applied are now displaying their texts in ",t(e.code,{children:"limegreen"})," instead of ",t(e.code,{children:"#32363a"}),` which would be the default value for Fiori 3.
You can change CSS Variables on any level - in the head, or on every single element by using either CSS classes or element style.`]}),`
`,n(e.p,{children:["A full list of all supported CSS Variables can be found ",t(e.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/packages/base/src/styling/ThemingParameters.ts",children:"here"}),`
or in the `,t(e.a,{href:"https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/theming/webapp/index.html",children:"SAPUI5 Theming Parameters Toolbox"}),"."]}),`
`,t(e.h2,{children:"Reuse global style classes"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"ThemeProvider"}),` component is offering global css classes that can be reused in your applications code to help you to achieve a Fiori look-and-feel.
All globally available style classes are tracked in the `,t(e.code,{children:"GlobalStyleClasses"})," enum which can be imported from ",t(e.code,{children:'import { GlobalStyleClasses } from "@ui5/webcomponents-react";'}),"."]}),`
`,n(e.table,{children:[t(e.thead,{children:n(e.tr,{children:[t(e.th,{children:"CSS Class"}),t(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[t(e.td,{children:t(e.code,{children:"sapScrollBar"})}),t(e.td,{children:"If added to an container that supports scrolling, the scrollbar will be styled according to Fiori guidelines."})]}),n(e.tr,{children:[t(e.td,{children:t(e.code,{children:"inheritingSapScrollBar"})}),t(e.td,{children:"If added to a container, the scollbars of the container and of all of its children will be styled according to Fiori guidelines."})]})]})]}),`
`,t(i,{hideCloseButton:!0,style:{marginBlockEnd:"1rem"},children:`With our next major release (v2.0.0), both style classes will be removed as then the SAP scrollbar will be used per
default for the whole application.`}),`
`,t(e.h3,{children:"Use default browser scrollbar"}),`
`,n(e.p,{children:["Some components like the ",t(e.code,{children:"ObjectPage"}),", ",t(e.code,{children:"DynamicPage"})," and ",t(e.code,{children:"AnalyticalTable"})," use the CSS class ",t(e.code,{children:"sapScrollBar"})," by default. To prevent components from using the custom scrollbar, you can pass ",t(e.code,{children:"data-native-scrollbar"})," as prop."]}),`
`,t(e.h2,{children:"Style your own components"}),`
`,n(e.p,{children:[`It's quite likely you have to create some custom components when you are building an app.
In order to reuse our central styling approach, you can import the `,t(e.code,{children:"ThemingParameters"})," that contain the various CSS variables used in our theming."]}),`
`,n(e.p,{children:["If you want to style your components with the ",t(e.code,{children:"react-jss"})," syntax, you can use the ",t(e.code,{children:"createUseStyles"}),` styling hook.
`,t(e.code,{children:"react-jss"})," comes already as a dependency of ",t(e.code,{children:"@ui5/webcomponents-react"})," to your project - but we recommend adding it to your ",t(e.code,{children:"package.json"}),` as well.
`,n(e.strong,{children:["Please make sure you are installing ",t(e.code,{children:'"react-jss": "^10.0.0"'})]}),". Previous versions of this library won't work correctly together with our library."]}),`
`,t(i,{design:h.Information,hideCloseButton:!0,children:n(l,{children:[" You can find all ",t(e.code,{children:"ThemingParameters"})," ",t(e["ui5-link"],{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-public-utils--page#theming-parameters",target:"_blank",children:" here"})," . If you don't want to use CSS-in-JS library, you can also just use the corresponding CSS variable."]})}),`
`,t(e.p,{children:"You can then create a custom component by following this recipe:"}),`
`,t(e.pre,{children:t(e.code,{className:"language-jsx",children:`import React from 'react';
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
`,t(e.p,{children:"This would then be the result:"}),`
`,t(u,{children:t(d,{})}),`
`,n(e.h2,{children:["Applying styling via ",t(e.code,{children:"className"})," or ",t(e.code,{children:"style"})]}),`
`,n(e.p,{children:["Almost all components allow setting ",t(e.code,{children:"className"})," or ",t(e.code,{children:"style"})," to style the component. For web components, this does ",t(e.strong,{children:"not"}),` mean that styles are inherited by shadow root elements per default.
Only `,t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance#inherited_properties",children:"inherited CSS properties"}),` that are not set inside the shadow root or internally passed properties will change the styles of the internal elements.
Another special case are abstract components like the `,t(e.code,{children:"SuggestionItem"}),". The ",t(e.code,{children:"ui5-suggestion-item"})," element is mainly there to pass props to the actual component inside the shadow root and is therefore not stylable."]}),`
`,t(g,{})]})}}export{Ce as default};
//# sourceMappingURL=Styling-36406c12.js.map
