import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as l,C as s,b as o}from"./chunk-HLWAVYOI-oJ2RarBX.js";import{C as d,A as h,b as p}from"./DomRefTable.module-iSgdj24_.js";import{D as u}from"./DocsHeader-En7spcqj.js";import{F as f}from"./Footer-GGUnCBSP.js";import"./index-OjgoNOWw.js";import{D as b}from"./DomRefTable-e5xZ4RrJ.js";import{S as x}from"./SubcomponentsSection-pzdPLcqE.js";import{C as g,D as c,S,W as j,a as M}from"./Select.stories-MxKBCybX.js";import{e as a}from"./utils-77gZ8405.js";import{u as m}from"./index-RwE9nQVW.js";import{O as v}from"./index-Lq_3Y-dc.js";import"./iframe-xAOJR0Gf.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./react-jss.esm-tmBtHfec.js";import"./index-Em3onj3s.js";import"./UI5Element-kBA_KQxG.js";import"./i18nBundle-7ihWi2Lo.js";import"./VersionInfo-quO5DfnC.js";import"./CustomElementsScopeUtils-QKoQ990a.js";import"./withWebComponent-22JjwLkL.js";import"./utils-3rf7SAGj.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-r6t1Zphl.js";import"./Icons-jRef6OLh.js";import"./decline-XpWJwTfv.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-U_TSW4LN.js";import"./alert-kkNs8dOr.js";import"./class-map-2qwEQoLI.js";import"./Button-jlOsC8Op.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-QBShB6vc.js";import"./index-9hLZiafD.js";import"./clsx-Zbgk8kpT.js";import"./i18n-defaults-gX8Lho5I.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-YJVSj-ci.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-Ha-6ONKz.js";import"./index-otRVUEeT.js";import"./Integer-kog98579.js";import"./index-PA7gOUjG.js";import"./Avatar-kcq5ywk4.js";import"./ResizeHandler-3FzJmCyz.js";import"./employee-APVUdoZS.js";import"./index-LmohLZpF.js";import"./index-aGX1tCK-.js";import"./Link-xIUn2Lee.js";import"./WrappingType-avPrqc94.js";import"./index-f1R-0qJ_.js";import"./TableOfContent-iE8EO8JN.js";import"./index-g4dSwyuf.js";import"./Label-yPOoTXIn.js";import"./index-giNGrV_N.js";import"./index-6vxCaLEl.js";import"./Popover-qTobexuh.js";import"./PopupUtils-FgdW7Gkh.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-fa8QSlgN.js";import"./FocusableElements-jbTazhpM.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-duavIDje.js";import"./BrowserScrollbar.css-aT2mYiFz.js";import"./index-wRU35nxq.js";import"./CustomListItem-QOqv9KBA.js";import"./ListItem-_0EIb7ra.js";import"./List-XV25F2MG.js";import"./ItemNavigation-1Qtl9Bqn.js";import"./TabbableElements-L1VqloMt.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-ic-NtdR-.js";import"./CheckBox-vOrD_Qxh.js";import"./ValueState-zUcANXoY.js";import"./accept-RviPAaVm.js";import"./RadioButton-ssFCKs8g.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-0oBZC6Yv.js";import"./ValueStateMessage.css-fNiak5rA.js";import"./ResponsivePopoverCommon.css-h8Z4T2yV.js";import"./ResponsivePopover-wHlXl3nI.js";import"./Dialog-Y9sM4F0U.js";import"./Title-dLDxQQ5A.js";import"./index-nRh8j1VG.js";import"./Select-FDawIrzH.js";import"./InvisibleMessage-Ih9G-uba.js";import"./slim-arrow-down-I_Bw-gbQ.js";import"./StandardListItem-cf7NJ5rV.js";import"./ValueState-I_-hGNIb.js";const w=`## Usage

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
`,O="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `Option` component defines the content of an option in the `Select`\n",y="**Since:** 1.19.0\n\nThe `SelectMenu` is meant to be used together with the `Select` component as alternative to define the select's dropdown. It acts as a popover on desktop and tablet, and as a Dialog on phone.\n\nThe component gives the possibility to the user to customize the `Select`'s dropdown by slotting custom options and adding custom styles.\n\n### Usage\n\nTo use `Select` with a `SelectMenu`, you need to set the `Select` `menu` property to reference `SelectMenu` either by ID or DOM reference.\n\nFor the `SelectMenu`\n",D=`**Since:** 1.19.0

The \`SelectMenuOption\` component represents an option in the \`SelectMenu\`.

### Usage

For the \`SelectMenuOption\`
`,T=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."},{name:"value",visibility:"public",since:"1.20.0",formEvents:"change,liveChange",formProperty:"true",type:"string",description:"Defines the value of the component: <br> - when get - returns the value of the component, e.g. the <code>value</code> property of the selected option or its text content. <br> - when set - selects the option with matching <code>value</code> property or text content. <br><br> <b>Note:</b> If the given value does not match any existing option, the first option will get selected.",defaultValue:'""'},{name:"menu",visibility:"public",since:"1.17.0",type:"sap.ui.webc.base.types.DOMReference",description:"Defines a reference (ID or DOM element) of component's menu of options as alternative to define the select's dropdown. <br><br> <b>Note:</b> Usage of <code>ui5-select-menu</code> is recommended."}];function wt(n={}){const{wrapper:i}=Object.assign({},m(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:g}),`
`,e.jsx(u,{since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(d,{of:c}),`
`,e.jsx(o,{children:w}),`
`,e.jsx(b,{rows:T}),`
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
`,e.jsx(o,{children:x}),`
`,e.jsx(t.h2,{id:"option",children:"Option"}),`
`,e.jsx(h,{hideHTMLPropsNote:!0,exclude:a,of:v}),`
`,e.jsx(o,{children:O}),`
`,e.jsx(t.h2,{id:"selectmenu",children:"SelectMenu"}),`
`,e.jsx(o,{children:y}),`
`,e.jsx(p,{of:S}),`
`,e.jsx(t.h3,{id:"example-select-with-custom-options",children:"Example: Select with custom Options"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(t.h2,{id:"selectmenuoption",children:"SelectMenuOption"}),`
`,e.jsx(o,{children:D}),`
`,e.jsx(p,{hideHTMLPropsNote:!0,exclude:a,of:M}),`
`,e.jsx(f,{})]})}}export{wt as default};
