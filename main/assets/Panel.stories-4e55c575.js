import{M as T,C as g,f as L,a as x}from"./chunk-PCJTTTQV-0216b779.js";import{P as o,a as S}from"./index-89aa8470.js";import{T as i}from"./Title-129aeb28.js";import{T as m}from"./index-150d1ba6.js";import{T as f}from"./index-479d8097.js";import{T as v}from"./index-0f890eca.js";import{a as d}from"./Button-bc3a11a1.js";import{T as y}from"./index-ff3cb99b.js";import{B as n}from"./index-e5e73124.js";import{S as t}from"./index-0328d8c2.js";import{L as w}from"./index-e7891227.js";import{d as k}from"./DomRefTable.module-783f81aa.js";import{D as A}from"./DocsHeader-225867ae.js";import{F as I}from"./Footer-dd1f12f5.js";import{a,j as e,F as C}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as b}from"./index-4fb8b842.js";import"./iframe-5ff0fadb.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./slot-634e3e91.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-b8fd41f3.js";import"./slim-arrow-right-52a56681.js";import"./style-map-cae0a379.js";import"./class-map-95320e87.js";import"./i18n-defaults-254d6b69.js";import"./WrappingType-b81e595a.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-2e28eff7.js";import"./ThemingParameters-f4b4144e.js";import"./i18n-defaults-c7cc2cc1.js";import"./I18nContext-bef5b452.js";import"./overflow-8b0fa42a.js";import"./i18n-defaults-80781f7e.js";import"./stopPropagation-da74d54e.js";import"./index-6a568a52.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./Device-208919c6.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./index-6ec468ac.js";import"./ToggleButton-4790913b.js";import"./MarkedEvents-b83081e9.js";import"./CssSizeVariables-bd372cde.js";import"./CustomVariables-fd831c35.js";import"./debounce-2c3bc435.js";import"./StandardListItem-ac3f40c5.js";import"./ValueState-2c5e5904.js";import"./ListItem-83c0fb9e.js";import"./decline-6bd98a2e.js";import"./ListItemBase-a0bc6999.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-15ff681f.js";import"./Label-ccc234fe.js";import"./RadioButton-a8c23c83.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./Avatar-7e1d4e21.js";import"./employee-1bc983a2.js";import"./ValueState-ab6838cc.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-85957014.js";import"./information-b6c8ed8e.js";import"./index-44cc9c22.js";import"./Import-ba1ac012.js";import"./TableOfContent-60430999.js";import"./index-0624b305.js";import"./Link-018547e8.js";import"./index-02b3ffaa.js";const M=`## Guidelines:

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

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\``;function D(r={}){const{wrapper:u}=Object.assign({},b(),r.components);return u?e(u,{...r,children:e(h,{})}):h();function h(){const s=Object.assign({h2:"h2",h1:"h1"},b(),r.components);return a(C,{children:[e(T,{title:"Layouts & Floorplans / Panel",component:o,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{accessibleRole:S.Form,headerLevel:i.H2,headerText:"Panel"}}),`
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
}`}};const l={title:"Layouts & Floorplans / Panel",component:o,args:{accessibleRole:S.Form,headerLevel:i.H2,headerText:"Panel"},argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomHeader"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:D};const Pt=["defaultStory","withCustomHeader"];export{Pt as __namedExportsOrder,l as default,P as defaultStory,c as withCustomHeader};
//# sourceMappingURL=Panel.stories-4e55c575.js.map
