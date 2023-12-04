import{M as y,C as h,f as g,b as w}from"./chunk-HLWAVYOI-VbR0yKM4.js";import{P as o,a as j}from"./index-lpHDK1sk.js";import{T as a}from"./Title-QMeEqdxD.js";import{T as s}from"./index-3r6LMaAp.js";import{T as L}from"./index-CrFnN6zV.js";import{T as b}from"./index-sDBYsuHl.js";import{B as m}from"./Button-udd0QuU3.js";import{T as S}from"./index-F4VuT6wa.js";import{B as i}from"./index-avvyQgOI.js";import{S as t}from"./index-s_wL4usL.js";import{L as f}from"./index-2FmYj98w.js";import{b as P}from"./DomRefTable.module-n051UOt3.js";import{D as T}from"./DocsHeader-gOp11F3i.js";import{F as k}from"./Footer-hm5WXwLb.js";import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u as x}from"./index-RwE9nQVW.js";import"./iframe-Ipyh2L0P.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./UI5Element-Y0uzLFOr.js";import"./i18nBundle-Crssojm_.js";import"./VersionInfo-hBCHoyLi.js";import"./CustomElementsScopeUtils-5j4ES8UU.js";import"./withWebComponent-l-jCeTa1.js";import"./utils-NoXYr8Q_.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./Icon-bdsWWJur.js";import"./Icons-WRZ8WMWs.js";import"./slot-HSrR9XJ-.js";import"./slideUp-EM1U0pkt.js";import"./animate-Pj1TncyK.js";import"./AnimationMode-5Uvzyzlf.js";import"./slim-arrow-right-SUiVGFkg.js";import"./style-map-IagzN5gT.js";import"./class-map-kmjzTHDs.js";import"./i18n-defaults-Xpt9ffmz.js";import"./WrappingType-avPrqc94.js";import"./clsx-c3LcQGjR.js";import"./react-jss.esm-tmBtHfec.js";import"./i18n-defaults-b_JjHWlv.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./overflow-6Ph9cY0C.js";import"./i18n-defaults-CPLPRuO1.js";import"./stopPropagation-dV8jBYUw.js";import"./index-2_GkS9Fn.js";import"./Popover-4c8T_r5P.js";import"./Integer-kog98579.js";import"./PopupUtils-7oRQuqE1.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-rFaoTaej.js";import"./FocusableElements-SaTJsZH1.js";import"./isElementHidden-d3-Fo4V6.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./decline-nB1v5zp8.js";import"./ResizeHandler-YlQCt_sN.js";import"./MediaRange-sEMt71Ve.js";import"./BrowserScrollbar.css-aoBbOOT0.js";import"./index-QxVQ829h.js";import"./ToggleButton-y_hXdUnC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./useIsRTL-8rEKWLsl.js";import"./debounce-F9irgL9Y.js";import"./MarkedEvents-aYv14vsS.js";import"./StandardListItem-_FwtV3qH.js";import"./ValueState-zUcANXoY.js";import"./ListItem-3TA4XaMY.js";import"./ListItemBase-1oP3quAZ.js";import"./ItemNavigation-KSoe0GH9.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-NyevkSlP.js";import"./Label-KPXg4zHG.js";import"./RadioButton-oXXhC_M8.js";import"./CheckBox-6Jr3q4fw.js";import"./accept-QwIZktij.js";import"./HasPopup-9BAMrqbD.js";import"./Avatar-PRs4M-6Z.js";import"./employee-fYGGLuhG.js";import"./alert-hH0G14f_.js";import"./ValueState-I_-hGNIb.js";import"./index-1O14NHzh.js";import"./information-7q7IEdiC.js";import"./addCustomCSSWithScoping-_6wxL5DG.js";import"./index-G3vxELyh.js";import"./index-06wKem9k.js";import"./index-onIIMkEE.js";import"./index-K7Ir0dCd.js";import"./Link-iRvTdZPp.js";import"./index-5ETO3hDj.js";import"./index-ZcOIUVJX.js";import"./ModalsContext-0q87fkkd.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-goEofAVS.js";import"./index-ZUUzo-iy.js";const A=`## Guidelines:

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
`;function I(r={}){const{wrapper:c}=Object.assign({},x(),r.components);return c?e.jsx(c,{...r,children:e.jsx(u,{})}):u();function u(){const n=Object.assign({h2:"h2",h1:"h1"},x(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Layouts & Floorplans / Panel",component:o,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{accessibleRole:j.Form,headerLevel:a.H2,headerText:"Panel"}}),`
`,e.jsx(T,{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(h,{children:e.jsx(g,{name:"Default",children:l=>e.jsxs(o,{...l,children:[e.jsx(s,{level:a.H3,children:"Basic Panel"}),e.jsx(L,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]})})}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(P,{story:"Default"}),`
`,e.jsx(w,{children:A}),`
`,e.jsx(n.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"with-custom-header",children:"with custom header"}),`
`,e.jsx(h,{children:e.jsx(g,{name:"with custom header",args:{collapsed:!0,header:e.jsxs(b,{children:[e.jsx(s,{level:a.H2,children:"Countries"}),e.jsx(S,{}),e.jsx(i,{children:"Edit"}),e.jsx(i,{design:m.Negative,children:"Remove"}),e.jsx(i,{design:m.Emphasized,children:"Add"})]})},children:l=>e.jsx(o,{...l,children:e.jsxs(f,{children:[e.jsx(t,{description:"Language: Spanish",children:"Argentina"}),e.jsx(t,{description:"Language: Portuguese",children:"Portugal"}),e.jsx(t,{description:"Language: Spanish",children:"Mexico"}),e.jsx(t,{description:"Language: Portuguese",children:"Brazil"}),e.jsx(t,{description:"Language: German",children:"Germany"}),e.jsx(t,{description:"Language: English",children:"Australia"}),e.jsx(t,{description:"Language: German",children:"Austria"})]})})})}),`
`,e.jsx(k,{})]})}}const v=r=>e.jsxs(o,{...r,children:[e.jsx(s,{level:a.H3,children:"Basic Panel"}),e.jsx(L,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]});v.storyName="Default";v.parameters={storySource:{source:`args => {
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
}`}};const p=r=>e.jsx(o,{...r,children:e.jsxs(f,{children:[e.jsx(t,{description:"Language: Spanish",children:"Argentina"}),e.jsx(t,{description:"Language: Portuguese",children:"Portugal"}),e.jsx(t,{description:"Language: Spanish",children:"Mexico"}),e.jsx(t,{description:"Language: Portuguese",children:"Brazil"}),e.jsx(t,{description:"Language: German",children:"Germany"}),e.jsx(t,{description:"Language: English",children:"Australia"}),e.jsx(t,{description:"Language: German",children:"Austria"})]})});p.storyName="with custom header";p.args={collapsed:!0,header:e.jsxs(b,{children:[e.jsx(s,{level:a.H2,children:"Countries"}),e.jsx(S,{}),e.jsx(i,{children:"Edit"}),e.jsx(i,{design:m.Negative,children:"Remove"}),e.jsx(i,{design:m.Emphasized,children:"Add"})]})};p.parameters={storySource:{source:`args => {
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
}`}};const d={title:"Layouts & Floorplans / Panel",component:o,args:{accessibleRole:j.Form,headerLevel:a.H2,headerText:"Panel"},argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomHeader"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:I};const Pt=["defaultStory","withCustomHeader"];export{Pt as __namedExportsOrder,d as default,v as defaultStory,p as withCustomHeader};
