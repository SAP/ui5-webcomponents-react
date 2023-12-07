import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as d,C as p,b as o}from"./chunk-HLWAVYOI-HMnUgQQO.js";import{C as l,A as h,b as s}from"./DomRefTable.module-v_iDoR1M.js";import{D as u}from"./DocsHeader-UBYQTORW.js";import{F as x}from"./Footer-fyJ_TVVI.js";import"./index-OjgoNOWw.js";import{D as f}from"./DomRefTable-b71uc8eG.js";import{S}from"./SubcomponentsSection-pzdPLcqE.js";import{C as b,D as c,S as g,W as j,a as M}from"./Select.stories-u3edxx5G.js";import{e as m}from"./utils-77gZ8405.js";import{u as a}from"./index-RwE9nQVW.js";import{O}from"./index-QlI-u45U.js";import"./iframe-iXsZpt7G.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./react-jss.esm-tmBtHfec.js";import"./index-DjybF0cW.js";import"./UI5Element-Jt3C0_FN.js";import"./i18nBundle-ZoJ37UJR.js";import"./VersionInfo-LCCO4Ig5.js";import"./CustomElementsScopeUtils-M7hMRmEH.js";import"./withWebComponent-I1wSIv4y.js";import"./utils-KU8RGjGn.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-G6aW2FRW.js";import"./Icons-Nr5kgAbF.js";import"./decline-4Ez_2Sev.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-bkjyqQzA.js";import"./alert-7Etxrsap.js";import"./class-map-CHDPODen.js";import"./Button-CV8gKi73.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-zEJ36VRV.js";import"./index-2_yHJzy3.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-8YolVglE.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-bWwzC2qz.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-B37rLD-H.js";import"./index-qnEzwUoQ.js";import"./Integer-kog98579.js";import"./index-t8xxhwJ6.js";import"./Avatar-VKhV6EwI.js";import"./ResizeHandler-mTFvwsyT.js";import"./employee-9rldWxaE.js";import"./index-in39FtoZ.js";import"./index-9ZD8uBNy.js";import"./Link-ipgrhFOm.js";import"./WrappingType-avPrqc94.js";import"./index-XbOz6Cvl.js";import"./TableOfContent-LTEn09OZ.js";import"./index-jsuqVtEF.js";import"./Label-Xo_6xXB6.js";import"./index-J4C31Y5E.js";import"./index-CoT13OlY.js";import"./Popover-5ANP4Jn7.js";import"./PopupUtils-QCyiTOMI.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-NvRre6vc.js";import"./FocusableElements-sOHKyey_.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-xQ1SPtMO.js";import"./BrowserScrollbar.css-R_PDLCAQ.js";import"./index-pR2GVxJt.js";import"./CustomListItem-UrvLc0OB.js";import"./ListItem-EtFo1sxA.js";import"./ListItemBase-HHKKMj74.js";import"./ItemNavigation--ejGb_nH.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-i2jpCQEr.js";import"./RadioButton-Tsz_-gI0.js";import"./ValueState-zUcANXoY.js";import"./CheckBox-B5lM5OVp.js";import"./accept-ldlQyaEx.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-0wqMoc5g.js";import"./ValueStateMessage.css-T_IO2uU8.js";import"./ResponsivePopoverCommon.css-wcLb9RY0.js";import"./ResponsivePopover-2Y5m0xbo.js";import"./Dialog-ki1YSo8q.js";import"./Title-xXK6MFOu.js";import"./index-X6InDPJO.js";import"./Select-DIczIZP4.js";import"./InvisibleMessage-M8lINMXv.js";import"./slim-arrow-down-kx4Pw-L8.js";import"./StandardListItem-aBJ9MdQm.js";import"./ValueState-I_-hGNIb.js";const w=`## Usage

There are two main usages of the \`Select\`.

1. With Option (\`Option\`) web component:  
   The available options of the Select are defined by using the Option component. The Option comes with predefined design and layout, including \`icon\`, \`text\` and \`additional-text\`.
2. With SelectMenu (\`SelectMenu\`) and SelectMenuOption (\`SelectMenuOption\`) web components:  
   The SelectMenu can be used as alternative to define the Select's dropdown and can be used via the \`menu\` property of the Select to reference SelectMenu by its ID. The component gives the possibility to customize the Select's dropdown by slotting entirely custom options (via the SelectMenuOption component) and adding custom styles. **Note:** SelectMenu is a popover and placing it top-level in the HTML page is recommended, because some page styles (for example transitions) can misplace the SelectMenu.

## Keyboard Handling

The \`Select\` provides advanced keyboard handling.

- \\[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\\] - Opens/closes the drop-down.
- \\[UP, DOWN\\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- \\[SPACE, ENTER\\] - If the drop-down is opened - selects the focused option.
- \\[ESC\\] - Closes the drop-down without changing the selection.
- \\[HOME\\] - Navigates to first option
- \\[END\\] - Navigates to the last option
`,v="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `Option` component defines the content of an option in the `Select`\n",y="**Since:** 1.19.0\n\nThe `SelectMenu` is meant to be used together with the `Select` component as alternative to define the select's dropdown. It acts as a popover on desktop and tablet, and as a Dialog on phone.\n\nThe component gives the possibility to the user to customize the `Select`'s dropdown by slotting custom options and adding custom styles.\n\n### Usage\n\nTo use `Select` with a `SelectMenu`, you need to set the `Select` `menu` property to reference `SelectMenu` either by ID or DOM reference.\n\nFor the `SelectMenu`\n",T=`**Since:** 1.19.0

The code>SelectMenuOption component represents an option in the \`SelectMenu\`.

### Usage

For the \`SelectMenuOption\`
`,D=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."}];function wt(n={}){const{wrapper:i}=Object.assign({},a(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:b}),`
`,e.jsx(u,{since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{of:c}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(o,{children:w}),`
`,e.jsx(f,{rows:D}),`
`,e.jsx(t.h2,{id:"recipes",children:"Recipes"}),`
`,e.jsxs(t.h3,{id:"get-the-id-of-the-selected-item-with-onchange",children:["Get the ID of the selected item with ",e.jsx(t.code,{children:"onChange"})]}),`
`,e.jsxs(t.p,{children:["With the help of the HTML5 ",e.jsx(t.code,{children:"data-"}),` API you can define any primitive value (like numbers, strings)
as an attribute on an element.
This data will be available on the `,e.jsx(t.code,{children:"onChange"})," event as part of the ",e.jsx(t.code,{children:"dataset"})," object of the ",e.jsx(t.code,{children:"selectedOption"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const data = [
  { id: 1, text: 'Option 1' },
  { id: 2, text: 'Option 2' }
];

const onChange = (event) => {
  // event.detail.selectedOption is a reference to the selected HTML Element
  // dataset contains all attributes that were passed with the data- prefix.
  console.log(event.detail.selectedOption.dataset.id);
};

<Select onChange={onChange}>
  {data.map((item) => (
    <Option key={item.id} data-id={item.id}>
      {item.text}
    </Option>
  ))}
</Select>;
`})}),`
`,e.jsx(o,{children:S}),`
`,e.jsx(t.h2,{id:"option",children:"Option"}),`
`,e.jsx(h,{hideHTMLPropsNote:!0,exclude:m,of:O}),`
`,e.jsx(o,{children:v}),`
`,e.jsx(t.h2,{id:"selectmenu",children:"SelectMenu"}),`
`,e.jsx(o,{children:y}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(t.h3,{id:"example-select-with-custom-options",children:"Example: Select with custom Options"}),`
`,e.jsx(p,{of:j}),`
`,e.jsx(t.h2,{id:"selectmenuoption",children:"SelectMenuOption"}),`
`,e.jsx(o,{children:T}),`
`,e.jsx(s,{hideHTMLPropsNote:!0,exclude:m,of:M}),`
`,e.jsx(x,{})]})}}export{wt as default};
