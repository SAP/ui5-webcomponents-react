import{M as T,C as g,j as L,a as x}from"./index-fb9c0e91.js";import{P as o,a as S}from"./index-76dd14a9.js";import{T as i}from"./Title-4c33d979.js";import{T as m}from"./index-6ee26003.js";import{T as f}from"./index-2eaff221.js";import{T as v}from"./index-541b5900.js";import{a as d}from"./Button-8fbc19ea.js";import{T as y}from"./index-ff3cb99b.js";import{B as n}from"./index-22e45419.js";import{S as t}from"./index-33f9eee5.js";import{L as w}from"./index-f94b3c3b.js";import{A as k}from"./DomRefTable.module-075bf2d5.js";import{D as A}from"./DocsHeader-7989e4fc.js";import{F as I}from"./Footer-69a42fd0.js";import{a,j as e,F as C}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as b}from"./index-4fb8b842.js";import"./iframe-e103fb9d.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./UI5Element-4f8793c9.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./MarkedEvents-8627ed01.js";import"./AriaLabelHelper-c82262ef.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./Keys-3acbae73.js";import"./AnimationMode-2e79af00.js";import"./slim-arrow-right-fdb534c0.js";import"./Icons-ad6f0d24.js";import"./style-map-77d201d2.js";import"./class-map-5d8e4b2b.js";import"./WrappingType-b81e595a.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./ThemingParameters-f4b4144e.js";import"./i18n-defaults-1f918df5.js";import"./I18nContext-bef5b452.js";import"./overflow-19c39e55.js";import"./decline-e7438d7e.js";import"./stopPropagation-da74d54e.js";import"./index-aba46643.js";import"./Popover-84c1d886.js";import"./Integer-d9976c13.js";import"./Device-208919c6.js";import"./PopupsCommon.css-2f3b9f5d.js";import"./FocusableElements-c64a83a7.js";import"./ResizeHandler-1dae7180.js";import"./MediaRange-25b98f31.js";import"./index-f66f3f51.js";import"./ToggleButton-63576987.js";import"./CssSizeVariables-bd372cde.js";import"./CustomVariables-fd831c35.js";import"./debounce-5c77766a.js";import"./StandardListItem-089df25b.js";import"./ValueState-2c5e5904.js";import"./ListItem-efa04b9c.js";import"./ListItemBase-c15c02a7.js";import"./ItemNavigation-4c4dc0f2.js";import"./TabbableElements-c3d95d8d.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-fb622f11.js";import"./Label-27ec0466.js";import"./RadioButton-5efc72cd.js";import"./CheckBox-d7672a83.js";import"./accept-a7f2d970.js";import"./HasPopup-47461347.js";import"./Avatar-6d4f44b6.js";import"./employee-fe809d4d.js";import"./ValueState-ab6838cc.js";import"./chunk-G4YQS2SV-4c374140.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-b0ce239d.js";import"./index-da505e61.js";import"./Import-97ec0f64.js";import"./TableOfContent-1ecd06be.js";import"./index-4bf67b0b.js";import"./index-3904d700.js";import"./Footer.module-c4f3b823.js";const M=`## Guidelines:

*   Nesting two or more panels is not recommended.
*   Do not stack too many panels on one page.

## Structure

The panel's header area consists of a title bar with a header text or custom header.  
The header is clickable and can be used to toggle between the expanded and collapsed state. It includes an icon which rotates depending on the state.  
The custom header can be set through the \`header\` slot and it may contain arbitraray content, such as: title, buttons or any other HTML elements.  
The content area can contain an arbitrary set of controls.  
**Note:** The custom header is not clickable out of the box, but in this case the icon is interactive and allows to show/hide the content area.

## Responsive Behavior

*   If the width of the panel is set to 100% (default), the panel and its children are resized responsively, depending on its parent container.
*   If the panel has a fixed height, it will take up the space even if the panel is collapsed.
*   When the panel is expandable (the \`fixed\` property is set to \`false\`), an arrow icon (pointing to the right) appears in front of the header.
*   When the animation is activated, expand/collapse uses a smooth animation to open or close the content area.
*   When the panel expands/collapses, the arrow icon rotates 90 degrees clockwise/counter-clockwise.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Panel\` exposes the following CSS Shadow Parts:

*   header - Used to style the wrapper of the header
*   content - Used to style the wrapper of the content

## Keyboard Handling

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\``;function j(r={}){const{wrapper:u}=Object.assign({},b(),r.components);return u?e(u,{...r,children:e(h,{})}):h();function h(){const s=Object.assign({h2:"h2",h1:"h1"},b(),r.components);return a(C,{children:[e(T,{title:"Layouts & Floorplans / Panel",component:o,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{accessibleRole:S.Form,headerLevel:i.H2,headerText:"Panel"}}),`
`,e(A,{}),`
`,e("br",{}),`
`,e(s.h2,{children:"Example"}),`
`,e(g,{children:e(L,{name:"Default",children:p=>a(o,{...p,children:[e(m,{level:i.H3,children:"Basic Panel"}),e(f,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]})})}),`
`,e(s.h2,{children:"Properties"}),`
`,e(k,{story:"Default"}),`
`,e(x,{children:M}),`
`,e(s.h1,{children:"More Examples"}),`
`,e("br",{}),`
`,e(s.h2,{children:"with custom header"}),`
`,e(g,{children:e(L,{name:"with custom header",args:{collapsed:!0,header:a(v,{children:[e(m,{level:i.H2,children:"Countries"}),e(y,{}),e(n,{children:"Edit"}),e(n,{design:d.Negative,children:"Remove"}),e(n,{design:d.Emphasized,children:"Add"})]})},children:p=>e(o,{...p,children:a(w,{children:[e(t,{description:"Language: Spanish",children:"Argentina"}),e(t,{description:"Language: Portuguese",children:"Portugal"}),e(t,{description:"Language: Spanish",children:"Mexico"}),e(t,{description:"Language: Portuguese",children:"Brazil"}),e(t,{description:"Language: German",children:"Germany"}),e(t,{description:"Language: English",children:"Australia"}),e(t,{description:"Language: German",children:"Austria"})]})})})}),`
`,e(I,{})]})}}const P=r=>a(o,{...r,children:[e(m,{level:i.H3,children:"Basic Panel"}),e(f,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]});P.storyName="Default";P.parameters={storySource:{source:`args => {
  return <Panel {...args}>
          <Title level={TitleLevel.H3}>Basic Panel</Title>
          <Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Text>
        </Panel>;
}`}};const c=r=>e(o,{...r,children:a(w,{children:[e(t,{description:"Language: Spanish",children:"Argentina"}),e(t,{description:"Language: Portuguese",children:"Portugal"}),e(t,{description:"Language: Spanish",children:"Mexico"}),e(t,{description:"Language: Portuguese",children:"Brazil"}),e(t,{description:"Language: German",children:"Germany"}),e(t,{description:"Language: English",children:"Australia"}),e(t,{description:"Language: German",children:"Austria"})]})});c.storyName="with custom header";c.args={collapsed:!0,header:a(v,{children:[e(m,{level:i.H2,children:"Countries"}),e(y,{}),e(n,{children:"Edit"}),e(n,{design:d.Negative,children:"Remove"}),e(n,{design:d.Emphasized,children:"Add"})]})};c.parameters={storySource:{source:`args => {
  return <Panel {...args}>
          <List>
            <StandardListItem description="Language: Spanish">Argentina</StandardListItem>
            <StandardListItem description="Language: Portuguese">Portugal</StandardListItem>
            <StandardListItem description="Language: Spanish">Mexico</StandardListItem>
            <StandardListItem description="Language: Portuguese">Brazil</StandardListItem>
            <StandardListItem description="Language: German">Germany</StandardListItem>
            <StandardListItem description="Language: English">Australia</StandardListItem>
            <StandardListItem description="Language: German">Austria</StandardListItem>
          </List>
        </Panel>;
}`}};const l={title:"Layouts & Floorplans / Panel",component:o,args:{accessibleRole:S.Form,headerLevel:i.H2,headerText:"Panel"},argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomHeader"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:j};const bt=["defaultStory","withCustomHeader"];export{bt as __namedExportsOrder,l as default,P as defaultStory,c as withCustomHeader};
//# sourceMappingURL=Panel.stories-d9341fdf.js.map
