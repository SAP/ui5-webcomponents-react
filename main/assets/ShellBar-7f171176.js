import{j as e,a as l,F as c}from"./jsx-runtime-670450c2.js";import{C as a}from"./DomRefTable.module-3d3cc401.js";import{D as m}from"./DocsHeader-8c958d98.js";import{F as d}from"./Footer-ae97b86f.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-d18b536f.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as f,C as b,a as i,j as g}from"./index-4c1eaed3.js";import{C as y,D as p,S as v}from"./ShellBar.stories-0febdfe3.js";import{u as s}from"./index-4fb8b842.js";import"./chunk-4XCFV5WA-7b93fc87.js";import"./iframe-abee3a6a.js";import"../sb-preview/runtime.mjs";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-41bcce99.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-f33713fa.js";import"./decline-ff534003.js";import"./Icons-5bcf1e3f.js";import"./class-map-abcca105.js";import"./Button-e1b15b5b.js";import"./Keys-50a1cb5a.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-c0095e75.js";import"./TableOfContent-785675c3.js";import"./index-06a57b02.js";import"./WrappingType-b81e595a.js";import"./index-b411694d.js";import"./Label-6707bdfc.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-79349d08.js";import"./Popover-5336e3a5.js";import"./Integer-a72984d1.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./style-map-7b3eb5df.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./index-a5813dd4.js";import"./AnimationMode-5c67d19b.js";import"./StandardListItem-b3f5cad6.js";import"./ValueState-2c5e5904.js";import"./ListItem-d264515d.js";import"./ListItemBase-948677f0.js";import"./ItemNavigation-4b509b49.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-21c27087.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-39ca40d3.js";import"./RadioButton-a7b6e11f.js";import"./CheckBox-61258afb.js";import"./accept-70258933.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a1b07349.js";import"./Avatar-68f47788.js";import"./employee-10cd14ab.js";import"./search-d68d0f2f.js";import"./overflow-1ae87508.js";import"./i18n-defaults-b5ead0af.js";import"./parameters-bundle.css-0c974f42.js";import"./add-8a589158.js";import"./Person-4ad4078c.js";import"./index-25b66d2b.js";import"./index-55c83f68.js";import"./ValueState-ab6838cc.js";import"./index-85f68b06.js";import"./Input-feb6db44.js";import"./Suggestions.css-1f63061d.js";import"./ResponsivePopoverCommon.css-bc05f183.js";import"./ValueStateMessage.css-6e86a950.js";import"./index-7f5e74af.js";const S="The `ShellBarItem` represents a custom item, that might be added to the `ShellBar`.\n",w=`## Stable DOM Refs

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
//# sourceMappingURL=ShellBar-7f171176.js.map
