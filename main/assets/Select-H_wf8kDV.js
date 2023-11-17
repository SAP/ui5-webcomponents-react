import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as d,C as s,b as o}from"./chunk-HLWAVYOI-HSzqdAt5.js";import{C as l,b as h,A as p}from"./DomRefTable.module-jfGnHvXO.js";import{D as u}from"./DocsHeader-VGodCP4n.js";import{F as x}from"./Footer-JKDoi-qe.js";import"./index-OjgoNOWw.js";import{D as f}from"./DomRefTable-_iKhR_nZ.js";import{S}from"./SubcomponentsSection-pzdPLcqE.js";import{C as b,D as c,S as g,W as j,a as M}from"./Select.stories-ura4LgxI.js";import{e as a}from"./utils-77gZ8405.js";import{u as m}from"./index-RwE9nQVW.js";import{O}from"./index-k2FF3EPY.js";import"./iframe-G8lfeiS_.js";import"../sb-preview/runtime.js";import"./index--F0XPsCm.js";import"./index-QYh6idnL.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-S5YuBGaL.js";import"./UI5Element-66_7Xn_3.js";import"./i18nBundle-Q0g0h3jg.js";import"./VersionInfo-pP_ltRZs.js";import"./CustomElementsScopeUtils-EW5YHFd4.js";import"./withWebComponent-2sjwM42G.js";import"./utils-QJOW-WwB.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-Pjew2RCR.js";import"./Icons-nm0Q71Sx.js";import"./decline-qJ6wR11R.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-ME8CmmmC.js";import"./alert-Ymv9FYbl.js";import"./class-map--IQ_mtyb.js";import"./Button-mmkHl5a0.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-qkhvCaCQ.js";import"./clsx-2Jv0kmJG.js";import"./i18n-defaults-iuWYBGeC.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-57oB5XHU.js";import"./index-4vNu-MrC.js";import"./Integer-kog98579.js";import"./index-iPNiOMNv.js";import"./Avatar-AvAtElJx.js";import"./ResizeHandler-hw9R1O21.js";import"./employee-AJKdaGgo.js";import"./index-1EWkVUW9.js";import"./index-Cs3jAn61.js";import"./Link-4yu6Lagp.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./TableOfContent-tm4UXGZQ.js";import"./index-7TQNuSpN.js";import"./Label-h0RP0plm.js";import"./index-VNdXUfUp.js";import"./index-DT9_YYrE.js";import"./Popover-9STvCKGK.js";import"./PopupUtils-yApLm5YW.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-dDtjLgUi.js";import"./FocusableElements-yzAVBk6R.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-Pb14hoiG.js";import"./BrowserScrollbar.css-F0Fjr-0B.js";import"./index-iKAbV9TQ.js";import"./CustomListItem-JDKFEeLw.js";import"./ListItem-NVO5T8ja.js";import"./ListItemBase-fdTzy_Aa.js";import"./ItemNavigation-mp_C8WK4.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-gSXNPx0K.js";import"./RadioButton-A2EwJNLh.js";import"./ValueState-zUcANXoY.js";import"./CheckBox-aQkbgIUH.js";import"./accept-mkX15jfz.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-EDPK7lfa.js";import"./ValueStateMessage.css-HnaKgAF6.js";import"./ResponsivePopoverCommon.css-8D_HttHM.js";import"./ResponsivePopover-nrtXbJy9.js";import"./Dialog-7t0KZPjl.js";import"./Title-kFJuFDOq.js";import"./index-6BPVkQDA.js";import"./Select-B6PdELjh.js";import"./InvisibleMessage-crOnSuEV.js";import"./slim-arrow-down-0-b6XiA5.js";import"./StandardListItem-h7F8OyVI.js";import"./ValueState-I_-hGNIb.js";const w=`## Usage

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
`,D=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."}];function St(n={}){const{wrapper:i}=Object.assign({},m(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:b}),`
`,e.jsx(u,{since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:c}),`
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
`,e.jsx(h,{hideHTMLPropsNote:!0,exclude:a,of:O}),`
`,e.jsx(o,{children:v}),`
`,e.jsx(t.h2,{id:"selectmenu",children:"SelectMenu"}),`
`,e.jsx(o,{children:y}),`
`,e.jsx(p,{of:g}),`
`,e.jsx(t.h3,{id:"example-select-with-custom-options",children:"Example: Select with custom Options"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(t.h2,{id:"selectmenuoption",children:"SelectMenuOption"}),`
`,e.jsx(o,{children:T}),`
`,e.jsx(p,{hideHTMLPropsNote:!0,exclude:a,of:M}),`
`,e.jsx(x,{})]})}}export{St as default};
//# sourceMappingURL=Select-H_wf8kDV.js.map
