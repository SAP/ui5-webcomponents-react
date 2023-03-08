import{M as T,C as g,j as L,a as x}from"./index-f70aee0a.js";import{P as o,a as S}from"./index-3cf7258b.js";import{T as i}from"./Title-b986a4bd.js";import{T as m}from"./index-6aaf98fe.js";import{T as f}from"./index-c7ba7a71.js";import{T as v}from"./index-cbcd726a.js";import{a as d}from"./Button-e27d9549.js";import{T as y}from"./index-ff3cb99b.js";import{B as n}from"./index-1699659b.js";import{S as t}from"./index-ee9d4751.js";import{L as w}from"./index-05e3bf0d.js";import{A as k}from"./DomRefTable.module-96664c38.js";import{D as A}from"./DocsHeader-a1ee531e.js";import{F as I}from"./Footer-1b2f397f.js";import{a,j as e,F as C}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as b}from"./index-4fb8b842.js";import"./iframe-010bdd4f.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./MarkedEvents-8627ed01.js";import"./AriaLabelHelper-c82262ef.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./Keys-3acbae73.js";import"./AnimationMode-b8fd41f3.js";import"./slim-arrow-right-bbef5919.js";import"./Icons-7b82f601.js";import"./style-map-77d201d2.js";import"./class-map-5d8e4b2b.js";import"./WrappingType-b81e595a.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-fe4dc3ff.js";import"./ThemingParameters-f4b4144e.js";import"./i18n-defaults-41f1487d.js";import"./I18nContext-bef5b452.js";import"./overflow-28a3a237.js";import"./decline-0a03b0b0.js";import"./stopPropagation-da74d54e.js";import"./index-ae377cfa.js";import"./Popover-cbbb060d.js";import"./Integer-d9976c13.js";import"./Device-208919c6.js";import"./PopupsCommon.css-ab0735c6.js";import"./FocusableElements-c2f39514.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./index-2af3ff93.js";import"./ToggleButton-09752afe.js";import"./CssSizeVariables-bd372cde.js";import"./CustomVariables-fd831c35.js";import"./debounce-5c77766a.js";import"./StandardListItem-0b926583.js";import"./ValueState-2c5e5904.js";import"./ListItem-b545bc6e.js";import"./ListItemBase-9f62536c.js";import"./ItemNavigation-9e1aa83a.js";import"./TabbableElements-0285a530.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-b3c085b8.js";import"./Label-040efebd.js";import"./RadioButton-4ed70174.js";import"./CheckBox-2761aa24.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./Avatar-358386af.js";import"./employee-98ce1b38.js";import"./ValueState-ab6838cc.js";import"./chunk-QDOP3WTA-1206d1a4.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-bddfc370.js";import"./index-cbb29537.js";import"./Import-df0df183.js";import"./TableOfContent-87698423.js";import"./index-7bcee539.js";import"./index-417f6fe5.js";import"./Footer.module-c4f3b823.js";const M=`## Guidelines:

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
//# sourceMappingURL=Panel.stories-143d4a15.js.map
