import{j as e,a as l,F as c}from"./jsx-runtime-670450c2.js";import{C as a}from"./DomRefTable.module-30f3bd43.js";import{D as m}from"./DocsHeader-ce92ab0e.js";import{F as d}from"./Footer-c8244a58.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-02666777.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as f,C as b,a as i,j as g}from"./index-02423177.js";import{C as y,D as p,S as v}from"./ShellBar.stories-17d1b8a3.js";import{u as s}from"./index-4fb8b842.js";import"./chunk-4XCFV5WA-0265c491.js";import"./iframe-3c157cf7.js";import"../sb-preview/runtime.mjs";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-9d4f0257.js";import"./UI5Element-5c53814f.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-b8903b2e.js";import"./utils-ed90fb1b.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-f33713fa.js";import"./decline-2be11c85.js";import"./Icons-0f428547.js";import"./class-map-a4eccd4f.js";import"./Button-6ca701be.js";import"./Keys-50a1cb5a.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-60eb1828.js";import"./TableOfContent-75175b8f.js";import"./index-63e4052b.js";import"./WrappingType-b81e595a.js";import"./index-bd49c23e.js";import"./Label-aecaa844.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-0db28cca.js";import"./Popover-e3c8ecec.js";import"./Integer-44c9be94.js";import"./FocusableElements-679e4fb9.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-da7c4a52.js";import"./style-map-f4770aeb.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./index-e5a6fbf3.js";import"./AnimationMode-39920991.js";import"./StandardListItem-ddbc126c.js";import"./ValueState-2c5e5904.js";import"./ListItem-bdb92faa.js";import"./ListItemBase-4b52d1f0.js";import"./ItemNavigation-1cd3f78d.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-52be7164.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-3e5a8ca3.js";import"./RadioButton-71b27f26.js";import"./CheckBox-9f80be56.js";import"./accept-4d6b88bc.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ac6f9b0d.js";import"./Avatar-e191e45f.js";import"./employee-01ecb76e.js";import"./search-6cc41abf.js";import"./overflow-332f7cb9.js";import"./i18n-defaults-b5ead0af.js";import"./parameters-bundle.css-0c974f42.js";import"./add-693feba8.js";import"./Person-4ad4078c.js";import"./index-f4037b89.js";import"./index-eb6fe343.js";import"./ValueState-ab6838cc.js";import"./index-83ae6b46.js";import"./Input-2c7cf5dc.js";import"./Suggestions.css-af656ac7.js";import"./ResponsivePopoverCommon.css-1186d6a9.js";import"./ValueStateMessage.css-57760618.js";import"./index-f7b539e8.js";const S="The `ShellBarItem` represents a custom item, that might be added to the `ShellBar`.\n",w=`## Stable DOM Refs

You can use the following stable DOM refs for the \`ShellBar\`:

*   logo
*   copilot
*   notifications
*   overflow
*   profile
*   product-switch

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`ShellBar\` exposes the following CSS Shadow Parts:

*   root - Used to style the outermost wrapper of the \`ShellBar\`

## Keyboard Handling

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\``,D=[{name:"copilotDomRef",readonly:"true",visibility:"public",since:"1.0.0-rc.16",type:"HTMLElement",description:"Returns the <code>copilot</code> DOM ref."},{name:"logoDomRef",readonly:"true",visibility:"public",since:"1.0.0-rc.16",type:"HTMLElement",description:"Returns the <code>logo</code> DOM ref."},{name:"notificationsDomRef",readonly:"true",visibility:"public",since:"1.0.0-rc.16",type:"HTMLElement",description:"Returns the <code>notifications</code> icon DOM ref."},{name:"overflowDomRef",readonly:"true",visibility:"public",since:"1.0.0-rc.16",type:"HTMLElement",description:"Returns the <code>overflow</code> icon DOM ref."},{name:"productSwitchDomRef",readonly:"true",visibility:"public",since:"1.0.0-rc.16",type:"HTMLElement",description:"Returns the <code>product-switch</code> icon DOM ref."},{name:"profileDomRef",readonly:"true",visibility:"public",since:"1.0.0-rc.16",type:"HTMLElement",description:"Returns the <code>profile</code> icon DOM ref."},{name:"accessibilityAttributes",visibility:"public",since:"1.10.0",type:"object",noattribute:"true",description:`An object of strings that defines several additional accessibility attribute values for customization depending on the use case.

It supports the following fields:

<ul> <li><code>expanded</code>: Indicates whether the anchor element, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values: <ul> <li><code>true</code></li> <li><code>false</code></li> </ul> </li> <li><code>hasPopup</code>: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the anchor element. Accepts the following string values: <ul> <li><code>Dialog</code></li> <li><code>Grid</code></li> <li><code>ListBox</code></li> <li><code>Menu</code></li> <li><code>Tree</code></li> </ul> </li> </ul>`},{name:"accessibilityRoles",visibility:"public",since:"1.6.0",type:"object",noattribute:"true",description:`An object of strings that defines additional accessibility roles for further customization.

It supports the following fields: - <code>logoRole</code>: the accessibility role for the <code>logo</code>`},{name:"accessibilityTexts",visibility:"public",since:"1.1.0",type:"object",noattribute:"true",description:`An object of strings that defines several additional accessibility texts for even further customization.

It supports the following fields: - <code>profileButtonTitle</code>: defines the tooltip for the profile button - <code>logoTitle</code>: defines the tooltip for the logo`},{name:"closeOverflow",visibility:"public",description:"Closes the overflow area. Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event"}];function no(t={}){const{wrapper:r}=Object.assign({},s(),t.components);return r?e(r,Object.assign({},t,{children:e(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre"},s(),t.components);return l(c,{children:[e(f,{of:y}),`
`,e(m,{since:"0.4.0"}),`
`,e("br",{}),`
`,e(o.h2,{children:"Example"}),`
`,e(b,{of:p}),`
`,e(o.h2,{children:"Properties"}),`
`,e(a,{of:p}),`
`,e(i,{children:w}),`
`,e(h,{rows:D}),`
`,e("br",{}),`
`,e(o.h1,{children:"More Examples"}),`
`,e("br",{}),`
`,e(o.h3,{children:"Recipe: How to open a popover on ShellBarItem click?"}),`
`,l(o.p,{children:["To open a popover with the ",e(o.code,{children:"ShellBarItem"})," you can use the ",e(o.code,{children:"targetRef"})," property of the ",e(o.code,{children:"onItemClick"})," event."]}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`const ShellBarComponent = () => {
  const popoverRef = useRef(null);
  const handleShellBarItemClick = (e) => {
    popoverRef.current.showAt(e.detail.targetRef);
  };
  return (
    <>
      <ShellBar>
        <ShellBarItem onItemClick={handleShellBarItemClick} icon="add" text="add" />
      </ShellBar>
      <Popover ref={popoverRef}>Hello there!</Popover>
    </>
  );
};
`})}),`
`,e(i,{children:u}),`
`,e(o.h2,{children:"ShellBarItem"}),`
`,e(g,{of:v}),`
`,e(i,{children:S}),`
`,e(d,{})]})}}export{no as default};
//# sourceMappingURL=ShellBar-d14e9bac.js.map
