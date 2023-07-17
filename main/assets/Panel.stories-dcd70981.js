import{M as y,C as h,f as g,a as w}from"./chunk-PCJTTTQV-a9e3658a.js";import{P as a,a as j}from"./index-1b90d07f.js";import{T as o}from"./Title-1daec987.js";import{T as s}from"./index-a0ac4e5c.js";import{T as L}from"./index-562e1433.js";import{T as b}from"./index-9aa6e949.js";import{a as m}from"./Button-4160b137.js";import{T as S}from"./index-d512ac31.js";import{B as i}from"./index-1e6d36e9.js";import{S as t}from"./index-515f3b89.js";import{L as f}from"./index-9cb02da8.js";import{e as P}from"./DomRefTable.module-14c44f12.js";import{D as T}from"./DocsHeader-f649463f.js";import{F as k}from"./Footer-6ef542a8.js";import{j as e}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{u as x}from"./index-bda0bad7.js";import"./iframe-7c494daf.js";import"../sb-preview/runtime.js";import"./react-18-95218780.js";import"./mapValues-f5a21168.js";import"./_baseForOwn-8b0cf1d5.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-20c8b51e.js";import"./_baseUniq-8051c65b.js";import"./index-356e4a49.js";import"./UI5Element-fb9ecf93.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./Icon-ef594e9f.js";import"./Icons-2c98f222.js";import"./slot-76e48863.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-2f524303.js";import"./slim-arrow-right-a768cef3.js";import"./style-map-54298215.js";import"./class-map-18f572ce.js";import"./i18n-defaults-a58643fd.js";import"./WrappingType-b81e595a.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-022ab528.js";import"./ThemingParameters-7e2e4e30.js";import"./i18n-defaults-7eea5c5b.js";import"./I18nContext-cdb50611.js";import"./overflow-eb38ad18.js";import"./i18n-defaults-80781f7e.js";import"./stopPropagation-da74d54e.js";import"./index-5c82c908.js";import"./Popover-510446d9.js";import"./Integer-f7f172c9.js";import"./Device-99b8bbf4.js";import"./PopupsCommon.css-f7aa7df0.js";import"./FocusableElements-6f0cd02a.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./decline-3df8c953.js";import"./ResizeHandler-36560530.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-0e9b1550.js";import"./index-70c6dea5.js";import"./ToggleButton-3042cd98.js";import"./MarkedEvents-b83081e9.js";import"./CssSizeVariables-cd649ef5.js";import"./CustomVariables-d3e297a0.js";import"./debounce-8486f6b5.js";import"./StandardListItem-049f31eb.js";import"./ValueState-2c5e5904.js";import"./ListItem-bb2d09ef.js";import"./ListItemBase-32e7e45c.js";import"./ItemNavigation-c74bf7f7.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-80d43f0f.js";import"./Label-7f4aa83d.js";import"./RadioButton-75d95420.js";import"./CheckBox-c44317b4.js";import"./accept-756ca6cd.js";import"./HasPopup-47461347.js";import"./Avatar-3c16d274.js";import"./employee-f2f473ef.js";import"./ValueState-ab6838cc.js";import"./index-42ec113b.js";import"./information-451d615b.js";import"./addCustomCSSWithScoping-9af65fbe.js";import"./index-d843ee57.js";import"./index-a53c6ece.js";import"./index-3855522a.js";import"./index-95e30611.js";import"./Link-057b3642.js";import"./index-2c77de22.js";import"./TableOfContent-d0aaab26.js";import"./index-c885d522.js";const A=`## Guidelines:

- Nesting two or more panels is not recommended.
- Do not stack too many panels on one page.

## Structure

The panel's header area consists of a title bar with a header text or custom header.  
The header is clickable and can be used to toggle between the expanded and collapsed state. It includes an icon which rotates depending on the state.  
The custom header can be set through the \`header\` slot and it may contain arbitraray content, such as: title, buttons or any other HTML elements.  
The content area can contain an arbitrary set of controls.  
**Note:** The custom header is not clickable out of the box, but in this case the icon is interactive and allows to show/hide the content area.

## Responsive Behavior

- If the width of the panel is set to 100% (default), the panel and its children are resized responsively, depending on its parent container.
- If the panel has a fixed height, it will take up the space even if the panel is collapsed.
- When the panel is expandable (the \`fixed\` property is set to \`false\`), an arrow icon (pointing to the right) appears in front of the header.
- When the animation is activated, expand/collapse uses a smooth animation to open or close the content area.
- When the panel expands/collapses, the arrow icon rotates 90 degrees clockwise/counter-clockwise.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Panel\` exposes the following CSS Shadow Parts:

- header - Used to style the wrapper of the header
- content - Used to style the wrapper of the content

## Keyboard Handling

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`
`;function I(r={}){const{wrapper:c}=Object.assign({},x(),r.components);return c?e.jsx(c,{...r,children:e.jsx(u,{})}):u();function u(){const n=Object.assign({h2:"h2",h1:"h1"},x(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Layouts & Floorplans / Panel",component:a,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{accessibleRole:j.Form,headerLevel:o.H2,headerText:"Panel"}}),`
`,e.jsx(T,{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(h,{children:e.jsx(g,{name:"Default",children:l=>e.jsxs(a,{...l,children:[e.jsx(s,{level:o.H3,children:"Basic Panel"}),e.jsx(L,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]})})}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(P,{story:"Default"}),`
`,e.jsx(w,{children:A}),`
`,e.jsx(n.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"with-custom-header",children:"with custom header"}),`
`,e.jsx(h,{children:e.jsx(g,{name:"with custom header",args:{collapsed:!0,header:e.jsxs(b,{children:[e.jsx(s,{level:o.H2,children:"Countries"}),e.jsx(S,{}),e.jsx(i,{children:"Edit"}),e.jsx(i,{design:m.Negative,children:"Remove"}),e.jsx(i,{design:m.Emphasized,children:"Add"})]})},children:l=>e.jsx(a,{...l,children:e.jsxs(f,{children:[e.jsx(t,{description:"Language: Spanish",children:"Argentina"}),e.jsx(t,{description:"Language: Portuguese",children:"Portugal"}),e.jsx(t,{description:"Language: Spanish",children:"Mexico"}),e.jsx(t,{description:"Language: Portuguese",children:"Brazil"}),e.jsx(t,{description:"Language: German",children:"Germany"}),e.jsx(t,{description:"Language: English",children:"Australia"}),e.jsx(t,{description:"Language: German",children:"Austria"})]})})})}),`
`,e.jsx(k,{})]})}}const v=r=>e.jsxs(a,{...r,children:[e.jsx(s,{level:o.H3,children:"Basic Panel"}),e.jsx(L,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]});v.storyName="Default";v.parameters={storySource:{source:`args => {
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
}`}};const p=r=>e.jsx(a,{...r,children:e.jsxs(f,{children:[e.jsx(t,{description:"Language: Spanish",children:"Argentina"}),e.jsx(t,{description:"Language: Portuguese",children:"Portugal"}),e.jsx(t,{description:"Language: Spanish",children:"Mexico"}),e.jsx(t,{description:"Language: Portuguese",children:"Brazil"}),e.jsx(t,{description:"Language: German",children:"Germany"}),e.jsx(t,{description:"Language: English",children:"Australia"}),e.jsx(t,{description:"Language: German",children:"Austria"})]})});p.storyName="with custom header";p.args={collapsed:!0,header:e.jsxs(b,{children:[e.jsx(s,{level:o.H2,children:"Countries"}),e.jsx(S,{}),e.jsx(i,{children:"Edit"}),e.jsx(i,{design:m.Negative,children:"Remove"}),e.jsx(i,{design:m.Emphasized,children:"Add"})]})};p.parameters={storySource:{source:`args => {
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
}`}};const d={title:"Layouts & Floorplans / Panel",component:a,args:{accessibleRole:j.Form,headerLevel:o.H2,headerText:"Panel"},argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomHeader"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:I};const St=["defaultStory","withCustomHeader"];export{St as __namedExportsOrder,d as default,v as defaultStory,p as withCustomHeader};
//# sourceMappingURL=Panel.stories-dcd70981.js.map
