import{M as T,C as g,f as L,a as x}from"./chunk-PCJTTTQV-03df55fb.js";import{P as o,a as S}from"./index-3f1de95c.js";import{T as i}from"./Title-0440ec3f.js";import{T as m}from"./index-7c49a66e.js";import{T as f}from"./index-479d8097.js";import{T as v}from"./index-6c1efedc.js";import{a as d}from"./Button-fa05cadd.js";import{T as y}from"./index-ff3cb99b.js";import{B as n}from"./index-59fbe46d.js";import{S as t}from"./index-b73bf96b.js";import{L as w}from"./index-9b782f1c.js";import{d as k}from"./DomRefTable.module-ebd0ef32.js";import{D as A}from"./DocsHeader-2b950f28.js";import{F as I}from"./Footer-bbf5eef6.js";import{a,j as e,F as C}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as b}from"./index-4fb8b842.js";import"./iframe-0e4c68f0.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./slot-76e48863.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-9cec4b20.js";import"./slim-arrow-right-78d167a6.js";import"./style-map-51d6dd91.js";import"./class-map-6d48ebd3.js";import"./i18n-defaults-254d6b69.js";import"./WrappingType-b81e595a.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-2e28eff7.js";import"./ThemingParameters-f4b4144e.js";import"./i18n-defaults-98d996e7.js";import"./I18nContext-bef5b452.js";import"./overflow-e82f5104.js";import"./i18n-defaults-80781f7e.js";import"./stopPropagation-da74d54e.js";import"./index-6dcb85dd.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./Device-208919c6.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./index-794fe575.js";import"./ToggleButton-ed4cffda.js";import"./MarkedEvents-b83081e9.js";import"./CssSizeVariables-bd372cde.js";import"./CustomVariables-fd831c35.js";import"./debounce-c3e37d29.js";import"./StandardListItem-38cf6758.js";import"./ValueState-2c5e5904.js";import"./ListItem-843af2c9.js";import"./decline-7cb41e3a.js";import"./ListItemBase-780d7053.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-c375cd19.js";import"./Label-528b8168.js";import"./RadioButton-412fbbc0.js";import"./CheckBox-f0072def.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./Avatar-0d8d2b25.js";import"./employee-0153a597.js";import"./ValueState-ab6838cc.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-0bbd409e.js";import"./information-2c502181.js";import"./index-f9987b26.js";import"./Import-8d6b807c.js";import"./TableOfContent-faa94604.js";import"./index-20e8eaae.js";import"./Link-3b8926df.js";import"./index-3ac565c5.js";const M=`## Guidelines:

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
`;function D(r={}){const{wrapper:u}=Object.assign({},b(),r.components);return u?e(u,{...r,children:e(h,{})}):h();function h(){const s=Object.assign({h2:"h2",h1:"h1"},b(),r.components);return a(C,{children:[e(T,{title:"Layouts & Floorplans / Panel",component:o,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{accessibleRole:S.Form,headerLevel:i.H2,headerText:"Panel"}}),`
`,e(A,{}),`
`,e("br",{}),`
`,e(s.h2,{id:"example",children:"Example"}),`
`,e(g,{children:e(L,{name:"Default",children:p=>a(o,{...p,children:[e(m,{level:i.H3,children:"Basic Panel"}),e(f,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]})})}),`
`,e(s.h2,{id:"properties",children:"Properties"}),`
`,e(k,{story:"Default"}),`
`,e(x,{children:M}),`
`,e(s.h1,{id:"more-examples",children:"More Examples"}),`
`,e("br",{}),`
`,e(s.h2,{id:"with-custom-header",children:"with custom header"}),`
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
}`}};const l={title:"Layouts & Floorplans / Panel",component:o,args:{accessibleRole:S.Form,headerLevel:i.H2,headerText:"Panel"},argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomHeader"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:D};const Pt=["defaultStory","withCustomHeader"];export{Pt as __namedExportsOrder,l as default,P as defaultStory,c as withCustomHeader};
//# sourceMappingURL=Panel.stories-1d2a1535.js.map
