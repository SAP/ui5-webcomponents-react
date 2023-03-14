import{M as l,C as c,j as d,a as u}from"./index-cacdbb95.js";import{_ as h}from"./iframe-d8f0136d.js";import"./ColorPicker-14a92c59.js";import{w as f}from"./withWebComponent-e4481254.js";import{b as y}from"./DomRefTable.module-1de5e215.js";import{D as g}from"./DocsHeader-94e77d61.js";import{F as _}from"./Footer-1e5b71e8.js";import{j as e,a as C,F as b}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as p}from"./index-4fb8b842.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./event-97133b94.js";import"./Keys-3acbae73.js";import"./CSSColor-f91c8158.js";import"./Integer-f7f172c9.js";import"./Float-99d99064.js";import"./style-map-77d201d2.js";import"./utils-ed90fb1b.js";import"./Input-e1aea171.js";import"./slot-634e3e91.js";import"./ResizeHandler-1fa8a094.js";import"./Device-208919c6.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./getActiveElement-bcae01ed.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./Suggestions.css-faab6178.js";import"./information-50e1ad0f.js";import"./Popover-54e30804.js";import"./PopupsCommon.css-d3649668.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./MediaRange-25b98f31.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./i18n-defaults-6bc67b6a.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./Slider-46e7406f.js";import"./SliderBase-b3752822.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Label-040efebd.js";import"./WrappingType-b81e595a.js";import"./chunk-PCJTTTQV-bdecd16c.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-d152d46c.js";import"./Button-876771f0.js";import"./MarkedEvents-b83081e9.js";import"./index-57eaac56.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-ce148b3b.js";import"./TableOfContent-85fba779.js";import"./index-60f41380.js";import"./Link-687260e5.js";import"./index-e9e4dc98.js";import"./Footer.module-f90cad7d.js";import"./index-f14605c0.js";const o=f("ui5-color-picker",["color"],[],[],["change"],()=>h(()=>import("./ColorPicker-14a92c59.js"),["./ColorPicker-14a92c59.js","./UI5Element-427ec721.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-e4481254.js","./utils-ed90fb1b.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./event-97133b94.js","./Keys-3acbae73.js","./CSSColor-f91c8158.js","./Integer-f7f172c9.js","./Float-99d99064.js","./style-map-77d201d2.js","./Input-e1aea171.js","./slot-634e3e91.js","./ResizeHandler-1fa8a094.js","./Device-208919c6.js","./ValueState-2c5e5904.js","./AriaLabelHelper-43a261ec.js","./getActiveElement-bcae01ed.js","./decline-f2b294b3.js","./Icons-7b82f601.js","./i18n-defaults-80781f7e.js","./Suggestions.css-faab6178.js","./information-50e1ad0f.js","./Popover-54e30804.js","./PopupsCommon.css-d3649668.js","./FocusableElements-7e25663e.js","./isElementHidden-01c07146.js","./BrowserScrollbar.css-615afd63.js","./MediaRange-25b98f31.js","./class-map-5d8e4b2b.js","./Icon-459702a7.js","./i18n-defaults-6bc67b6a.js","./ResponsivePopoverCommon.css-187e38b6.js","./ValueStateMessage.css-37773c69.js","./Slider-46e7406f.js","./SliderBase-b3752822.js","./Label-040efebd.js","./WrappingType-b81e595a.js"],import.meta.url));o.displayName="ColorPicker";try{o.displayName="ColorPicker",o.__docgenInfo={description:`The \`ColorPicker\` allows users to choose any color and provides different input options for selecting colors.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPicker" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"ColorPicker",props:{onChange:{defaultValue:null,description:"Fired when the the selected color is changed",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPickerDomRef, never>) => void"}},color:{defaultValue:null,description:`Defines the currently selected color of the component.

**Note**: use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property.`,name:"color",required:!1,type:{name:"Color"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const w=`## Usage

### When to use:

*   users need to select any color freely.

### When not to use:

*   Users need to select one color from a predefined set of colors. Use the ColorPalette component instead.`;function k(t={}){const{wrapper:n}=Object.assign({},p(),t.components);return n?e(n,{...t,children:e(i,{})}):i();function i(){const m=Object.assign({h2:"h2"},p(),t.components);return C(b,{children:[e(l,{title:"Inputs / ColorPicker",component:o}),`
`,e(g,{since:"0.14.0"}),`
`,e("br",{}),`
`,e(m.h2,{children:"Example"}),`
`,e(c,{children:e(d,{name:"Default",children:a=>e(o,{...a})})}),`
`,e(m.h2,{children:"Properties"}),`
`,e(y,{story:"Default"}),`
`,e(u,{children:w}),`
`,e(_,{})]})}}const s=t=>e(o,{...t});s.storyName="Default";s.parameters={storySource:{source:`args => {
  return <ColorPicker {...args} />;
}`}};const r={title:"Inputs / ColorPicker",component:o,tags:["stories-mdx"],includeStories:["defaultStory"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:k};const Le=["defaultStory"];export{Le as __namedExportsOrder,r as default,s as defaultStory};
//# sourceMappingURL=ColorPicker.stories-77dc1959.js.map
