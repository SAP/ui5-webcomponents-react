import{M as y,C as h,f as g,a as w}from"./chunk-PCJTTTQV-8ff525e3.js";import{P as a,a as j}from"./index-14a4bc8b.js";import{T as o}from"./Title-2e442dfb.js";import{T as s}from"./index-475e8a18.js";import{T as L}from"./index-562e1433.js";import{T as b}from"./index-7dbd7e35.js";import{a as m}from"./Button-21e98691.js";import{T as S}from"./index-d512ac31.js";import{B as i}from"./index-91c69ad6.js";import{S as t}from"./index-7aefeeb2.js";import{L as f}from"./index-867e1fa7.js";import{e as P}from"./DomRefTable.module-68e320b1.js";import{D as T}from"./DocsHeader-8c718f51.js";import{F as k}from"./Footer-b48c0726.js";import{j as e}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{u as x}from"./index-bda0bad7.js";import"./iframe-88cc6741.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./UI5Element-533070c8.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./Icon-2e16c08b.js";import"./Icons-67fab4b0.js";import"./slot-76e48863.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-29586826.js";import"./slim-arrow-right-e957a39c.js";import"./style-map-0c64293c.js";import"./class-map-6a9bd920.js";import"./i18n-defaults-2f9956dc.js";import"./WrappingType-b81e595a.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-022ab528.js";import"./ThemingParameters-7e2e4e30.js";import"./i18n-defaults-00bdea17.js";import"./I18nContext-cdb50611.js";import"./overflow-37050d17.js";import"./i18n-defaults-80781f7e.js";import"./stopPropagation-da74d54e.js";import"./index-0101973f.js";import"./Popover-167ff704.js";import"./Integer-f7f172c9.js";import"./Device-208919c6.js";import"./PopupUtils-ba2b770f.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97917f6d.js";import"./FocusableElements-eec123c0.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./decline-1d33941a.js";import"./ResizeHandler-aaf74c24.js";import"./MediaRange-25b98f31.js";import"./index-344e5119.js";import"./ToggleButton-b0c1a404.js";import"./MarkedEvents-b83081e9.js";import"./CssSizeVariables-e51da639.js";import"./CustomVariables-d3e297a0.js";import"./debounce-a2c7a12f.js";import"./StandardListItem-4965eb0f.js";import"./ValueState-2c5e5904.js";import"./ListItem-fa446a08.js";import"./ListItemBase-bb0e7e03.js";import"./ItemNavigation-211cc58c.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-59389070.js";import"./Label-94e3ba9d.js";import"./RadioButton-a0e5c6e9.js";import"./CheckBox-724085ae.js";import"./accept-f2459768.js";import"./HasPopup-47461347.js";import"./Avatar-01bfa415.js";import"./employee-d2874d42.js";import"./ValueState-ab6838cc.js";import"./index-98e8b5cb.js";import"./information-e88b206d.js";import"./index-4c0ab015.js";import"./TableOfContent-e95236ca.js";import"./index-dbf8e929.js";import"./Link-08f0fbaf.js";import"./index-7539bdc0.js";const A=`## Guidelines:

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
}`}};const d={title:"Layouts & Floorplans / Panel",component:a,args:{accessibleRole:j.Form,headerLevel:o.H2,headerText:"Panel"},argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomHeader"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:I};const jt=["defaultStory","withCustomHeader"];export{jt as __namedExportsOrder,d as default,v as defaultStory,p as withCustomHeader};
//# sourceMappingURL=Panel.stories-224cc6e1.js.map
