import{M as y,C as h,f as g,a as w}from"./chunk-PCJTTTQV-b0180856.js";import{P as a,a as j}from"./index-60c08851.js";import{T as o}from"./Title-a54d13df.js";import{T as s}from"./index-0b018bab.js";import{T as L}from"./index-d460da36.js";import{T as b}from"./index-d4d2b746.js";import{a as m}from"./Button-3c41aad1.js";import{T as S}from"./index-380c6b97.js";import{B as i}from"./index-b1a7e68f.js";import{S as t}from"./index-13958aa6.js";import{L as f}from"./index-5884ee6e.js";import{d as P}from"./DomRefTable.module-2539c24a.js";import{D as T}from"./DocsHeader-9714759e.js";import{F as k}from"./Footer-56d98619.js";import{j as e}from"./jsx-runtime-b5ed1ca8.js";import"./index-64f120e9.js";import{u as x}from"./index-de4e61b4.js";import"./iframe-6a31bc73.js";import"../sb-preview/runtime.mjs";import"./react-18-1e96cd1b.js";import"./mapValues-30a52a16.js";import"./_baseForOwn-931ad773.js";import"./index-7bf58b0a.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-e1b46df2.js";import"./_baseUniq-5a3eb61c.js";import"./index-356e4a49.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d0e572fe.js";import"./utils-d29e59c7.js";import"./useIsomorphicLayoutEffect-4a8db993.js";import"./Icon-46afc304.js";import"./Icons-5b18f7d2.js";import"./slot-76e48863.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-9cec4b20.js";import"./slim-arrow-right-78d167a6.js";import"./style-map-02d033ae.js";import"./class-map-fc32fe45.js";import"./i18n-defaults-254d6b69.js";import"./WrappingType-b81e595a.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-a429ae4e.js";import"./ThemingParameters-f4b4144e.js";import"./i18n-defaults-c061e17d.js";import"./I18nContext-0b0a9f3e.js";import"./overflow-e82f5104.js";import"./i18n-defaults-80781f7e.js";import"./stopPropagation-da74d54e.js";import"./index-e85c7628.js";import"./Popover-f0a3f494.js";import"./Integer-f7f172c9.js";import"./Device-208919c6.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-2a26d007.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./BrowserScrollbar.css-e40faf20.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./index-7937c484.js";import"./ToggleButton-38bba196.js";import"./MarkedEvents-b83081e9.js";import"./CssSizeVariables-bd372cde.js";import"./CustomVariables-fd831c35.js";import"./debounce-8390a477.js";import"./StandardListItem-cb4e34fa.js";import"./ValueState-2c5e5904.js";import"./ListItem-541883fa.js";import"./decline-7cb41e3a.js";import"./ListItemBase-7c4b6958.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-f42ddeb7.js";import"./Label-51e2d33c.js";import"./RadioButton-07abdc79.js";import"./CheckBox-826a6744.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./Avatar-5cc62690.js";import"./employee-0153a597.js";import"./ValueState-ab6838cc.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-eed85d68.js";import"./information-2c502181.js";import"./index-336951e7.js";import"./Import-f19a2ffd.js";import"./TableOfContent-18b07dd7.js";import"./index-25317c5d.js";import"./Link-20aa90b6.js";import"./index-639f8eb3.js";const A=`## Guidelines:

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
//# sourceMappingURL=Panel.stories-50148987.js.map
