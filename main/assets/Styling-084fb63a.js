import{j as t,a as n,F as l}from"./jsx-runtime-670450c2.js";import{M as m}from"./chunk-PCJTTTQV-033e93ae.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-f1f749bf.js";import{c as p}from"./react-jss.esm-2e28eff7.js";import{T as r}from"./ThemingParameters-f4b4144e.js";import{T as u}from"./index-ab8b7ff2.js";import"./DomRefTable.module-27ff0d58.js";import"./Import-88b92467.js";import{T as g}from"./TableOfContent-376139fb.js";import{F as y}from"./Footer-625b5790.js";import{u as c}from"./index-4fb8b842.js";import{M as i,a as h}from"./index-bd788123.js";import"./iframe-05f772a0.js";import"../sb-preview/runtime.mjs";import"./react-18-3458636e.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./I18nContext-bef5b452.js";import"./ModalsContext-131e4070.js";import"./CssSizeVariables-bd372cde.js";import"./GlobalStyleClasses-7209358d.js";import"./CustomVariables-fd831c35.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./index-94bcf4c7.js";import"./clsx.m-1229b3e0.js";import"./index-3f7df9e3.js";import"./Label-ccc234fe.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-95320e87.js";import"./index-ba3d49cb.js";import"./Link-018547e8.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-254d6b69.js";import"./index-1171b3d3.js";import"./Popover-224d761a.js";import"./slot-634e3e91.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./Button-bc3a11a1.js";const b={container:{backgroundColor:r.sapBackgroundColor,fontFamily:r.sapFontFamily,height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},text:{color:r.sapNegativeTextColor,fontSize:r.sapFontLargeSize}},f=p(b),d=()=>{const o=f();return t("div",{className:o.container,children:t("span",{className:o.text,children:"My Text"})})};d.__docgenInfo={description:"",methods:[],displayName:"MyCustomElement"};function Ne(o={}){const{wrapper:a}=Object.assign({},c(),o.components);return a?t(a,Object.assign({},o,{children:t(s,{})})):s();function s(){const e=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",strong:"strong","ui5-link":"ui5-link"},c(),o.components);return n(l,{children:[t(m,{title:"Styling"}),`
`,t(e.h1,{children:"Styling"}),`
`,t(g,{}),`
`,t(e.h2,{children:"Styling UI5 Web Components for React components"}),`
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
`,t(y,{})]})}}export{Ne as default};
//# sourceMappingURL=Styling-084fb63a.js.map
