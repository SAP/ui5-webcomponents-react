import{M as l,C as c,e as d,b as u}from"./chunk-HLWAVYOI-694d4b80.js";import{_ as h}from"./iframe-e9e9386c.js";import"./ColorPicker-36156127.js";import{w as f}from"./withWebComponent-70ea33bf.js";import{A as y}from"./DomRefTable.module-56df4082.js";import{D as C}from"./DocsHeader-bbb7cc1e.js";import{F as _}from"./Footer-92096071.js";import{j as e}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u as s}from"./index-59d6410c.js";import"./index-f82c8853.js";import"./index-c74c9f7f.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"../sb-preview/runtime.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./utils-eb830979.js";import"./CSSColor-f91c8158.js";import"./Integer-f7f172c9.js";import"./Float-99d99064.js";import"./style-map-0570471d.js";import"./Input-bfce6809.js";import"./slot-76e48863.js";import"./ResizeHandler-a1ba39c5.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./getActiveElement-bcae01ed.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./Suggestions.css-07dccdad.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./class-map-a35dc276.js";import"./BrowserScrollbar.css-35e4e851.js";import"./i18n-defaults-edeeca68.js";import"./ResponsivePopoverCommon.css-f284520a.js";import"./ValueStateMessage.css-29f8f350.js";import"./Slider-feb24639.js";import"./SliderBase-e0e149dd.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./Label-2351773c.js";import"./WrappingType-b81e595a.js";import"./react-jss.esm-2e5f50f2.js";import"./index-048f9c81.js";import"./Button-bda40b74.js";import"./MarkedEvents-b83081e9.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-d27beba7.js";import"./index-a447c6e6.js";import"./Avatar-54e46144.js";import"./employee-bd01b92f.js";import"./index-08d120ce.js";import"./index-5274d86d.js";import"./Link-27f41eeb.js";import"./index-12e0da73.js";import"./TableOfContent-811e9882.js";import"./index-eabdec92.js";import"./index-cfa6e315.js";import"./index-2c7a32ad.js";const o=f("ui5-color-picker",["color"],[],[],["change"],()=>h(()=>import("./ColorPicker-36156127.js"),["./ColorPicker-36156127.js","./UI5Element-9ae3ac4a.js","./CustomElementsScopeUtils-a6667bf6.js","./withWebComponent-70ea33bf.js","./utils-eb830979.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./Icon-085ae741.js","./Icons-aa504494.js","./CSSColor-f91c8158.js","./Integer-f7f172c9.js","./Float-99d99064.js","./style-map-0570471d.js","./Input-bfce6809.js","./slot-76e48863.js","./ResizeHandler-a1ba39c5.js","./ValueState-2c5e5904.js","./AriaLabelHelper-43a261ec.js","./getActiveElement-bcae01ed.js","./decline-06bf09c2.js","./i18n-defaults-bdef1cce.js","./Suggestions.css-07dccdad.js","./information-31cb56bb.js","./alert-f95f2d2e.js","./Popover-f88acbeb.js","./PopupUtils-ebc1cf8a.js","./PopupsCommon.css-afd5e311.js","./FocusableElements-ea9d71fb.js","./isElementHidden-01c07146.js","./MediaRange-25b98f31.js","./class-map-a35dc276.js","./BrowserScrollbar.css-35e4e851.js","./i18n-defaults-edeeca68.js","./ResponsivePopoverCommon.css-f284520a.js","./ValueStateMessage.css-29f8f350.js","./Slider-feb24639.js","./SliderBase-e0e149dd.js","./Label-2351773c.js","./WrappingType-b81e595a.js"],import.meta.url));o.displayName="ColorPicker";try{o.displayName="ColorPicker",o.__docgenInfo={description:`The \`ColorPicker\` allows users to choose any color and provides different input options for selecting colors.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ColorPicker)`,displayName:"ColorPicker",props:{onChange:{defaultValue:null,description:"Fired when the the selected color is changed",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPickerDomRef, never>) => void"}},color:{defaultValue:null,description:`Defines the currently selected color of the component.

**Note**: use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property.`,name:"color",required:!1,type:{name:"Color"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const g=`## Usage

### When to use:

- users need to select any color freely.

### When not to use:

- Users need to select one color from a predefined set of colors. Use the ColorPalette component instead.
`;function x(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,{...t,children:e.jsx(i,{})}):i();function i(){const m=Object.assign({h2:"h2"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Inputs / ColorPicker",component:o}),`
`,e.jsx(C,{since:"0.14.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(m.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{children:e.jsx(d,{name:"Default",children:a=>e.jsx(o,{...a})})}),`
`,e.jsx(m.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(y,{story:"Default"}),`
`,e.jsx(u,{children:g}),`
`,e.jsx(_,{})]})}}const p=t=>e.jsx(o,{...t});p.storyName="Default";p.parameters={storySource:{source:`args => {
  return <ColorPicker {...args} />;
}`}};const r={title:"Inputs / ColorPicker",component:o,tags:["stories-mdx"],includeStories:["defaultStory"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:x};const Ae=["defaultStory"];export{Ae as __namedExportsOrder,r as default,p as defaultStory};
//# sourceMappingURL=ColorPicker.stories-50f20230.js.map
