import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as d,C as p,b as o}from"./chunk-HLWAVYOI-cMz1dExQ.js";import{C as l,b as h,A as s}from"./DomRefTable.module-kHPMHC7O.js";import{D as u}from"./DocsHeader-bjKxd91K.js";import{F as x}from"./Footer-x39og2gE.js";import"./index-OjgoNOWw.js";import{D as f}from"./DomRefTable-lt4LQFlN.js";import{S}from"./SubcomponentsSection-pzdPLcqE.js";import{C as b,D as c,S as g,W as j,a as M}from"./Select.stories-XLKYaZbL.js";import{e as m}from"./utils-77gZ8405.js";import{u as a}from"./index-RwE9nQVW.js";import{O}from"./index-8dDCEy09.js";import"./iframe-t-rHYtPH.js";import"../sb-preview/runtime.js";import"./index-GL4gBoyB.js";import"./index-QYh6idnL.js";import"./mapValues-HzTlT2lF.js";import"./_baseForOwn-UZJwRxDU.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-iwDG_vZQ.js";import"./UI5Element-OBgzz0fv.js";import"./i18nBundle-Crssojm_.js";import"./VersionInfo-hBCHoyLi.js";import"./CustomElementsScopeUtils-kYmWas10.js";import"./withWebComponent-6ZcDnwha.js";import"./utils-5CTKRvkw.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-2m0rU9av.js";import"./Icons-zRUxeAje.js";import"./decline-P9scilyE.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-eS-oBj3B.js";import"./alert-SMfrQE5J.js";import"./class-map-dxoND1Lf.js";import"./Button-UDaVhcBU.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-yaLaEhii.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-PmTGElot.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-cCePQQVr.js";import"./index-RxEFhK7x.js";import"./Integer-kog98579.js";import"./index-yx_LOmz5.js";import"./Avatar-LWFiEvrj.js";import"./ResizeHandler-jV9qqcaG.js";import"./employee-DNZboz-g.js";import"./index-PVWN9Cgh.js";import"./index-D5f_p-ou.js";import"./Link-Gs09ax_S.js";import"./WrappingType-avPrqc94.js";import"./index-FvozjNxD.js";import"./index-3PxZPhBC.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-IMpNFjIe.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-Xbw0zMAN.js";import"./index-u7IfFnRf.js";import"./Label-bo0gz_aS.js";import"./index-vO-fDM1P.js";import"./index-ABXz0ZHN.js";import"./Popover-SxOPU5wi.js";import"./PopupUtils-7oRQuqE1.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-dlrgNDf3.js";import"./FocusableElements-vmTxt0Po.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-oXcF1--7.js";import"./BrowserScrollbar.css-gfEIeu7r.js";import"./index-4IMtoDv3.js";import"./CustomListItem-rZV_FYSo.js";import"./ListItem-sP6HCr5u.js";import"./ListItemBase-OVhNd6zE.js";import"./ItemNavigation-_xIDlcJ6.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-v8eJGF06.js";import"./RadioButton-b_fTB1Cx.js";import"./ValueState-zUcANXoY.js";import"./CheckBox-Hp_NHnWe.js";import"./accept-sNf1zbjr.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-LgQh9lXE.js";import"./ValueStateMessage.css-eVPOpCbJ.js";import"./ResponsivePopoverCommon.css-6WNiAmDC.js";import"./ResponsivePopover-voK1PETi.js";import"./Dialog-sWOJmdZ6.js";import"./Title-nBPKLywE.js";import"./index-WJmTlroW.js";import"./Select-OYQfuxjH.js";import"./InvisibleMessage-6ybI_HtB.js";import"./slim-arrow-down-RxdyuLbk.js";import"./StandardListItem-srLARCBi.js";import"./ValueState-I_-hGNIb.js";const w=`## Usage

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
`,D=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."}];function Ot(n={}){const{wrapper:i}=Object.assign({},a(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:b}),`
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
`,e.jsx(x,{})]})}}export{Ot as default};
//# sourceMappingURL=Select-5XtivNKD.js.map
