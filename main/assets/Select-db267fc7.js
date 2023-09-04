import{j as e}from"./jsx-runtime-d079401a.js";import{M as d,C as s,b as o}from"./chunk-S4VUQJ4A-4fa5dc4f.js";import{C as l,b as h,A as p}from"./DomRefTable.module-e5b03d92.js";import{D as u}from"./DocsHeader-fbbef25b.js";import{F as x}from"./Footer-7d879eed.js";import"./index-f1f2c4b1.js";import{D as f}from"./DomRefTable-e7697380.js";import{S as j}from"./SubcomponentsSection-6138f2fc.js";import{C as b,D as m,S,W as g,a as O}from"./Select.stories-d310c08a.js";import{e as c}from"./utils-b1ef2149.js";import{u as a}from"./index-59d6410c.js";import{O as M}from"./index-8436e27d.js";import"./iframe-262e17e0.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./react-jss.esm-2e5f50f2.js";import"./index-18848af0.js";import"./UI5Element-e590cd60.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./withWebComponent-b4c67a1a.js";import"./utils-e9940b93.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./information-e97f915a.js";import"./alert-7494fabe.js";import"./class-map-e1b423a4.js";import"./Button-4505b9f6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-203b56de.js";import"./index-19acbf5e.js";import"./Integer-f7f172c9.js";import"./index-9793d3ed.js";import"./Avatar-60d18bb8.js";import"./ResizeHandler-34ecee99.js";import"./employee-78fe46d2.js";import"./index-3fea7b74.js";import"./index-df09d16d.js";import"./Link-a373b451.js";import"./WrappingType-b81e595a.js";import"./index-fb6e8b5e.js";import"./TableOfContent-c03877c7.js";import"./index-b8305db1.js";import"./Label-69062358.js";import"./index-11624588.js";import"./index-10afe6b8.js";import"./Popover-742c9988.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-ecc46a93.js";import"./BrowserScrollbar.css-4a87524a.js";import"./index-5d06b406.js";import"./CustomListItem-c46c3838.js";import"./ListItem-65b5ee84.js";import"./ListItemBase-e8a1d82b.js";import"./ItemNavigation-52fe434f.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-7cb729ee.js";import"./RadioButton-bfff4944.js";import"./ValueState-2c5e5904.js";import"./CheckBox-c32e2a79.js";import"./accept-92104380.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-7a309837.js";import"./ValueStateMessage.css-ca082762.js";import"./ResponsivePopoverCommon.css-5a4ca537.js";import"./ResponsivePopover-ffa286b7.js";import"./Dialog-cf714d6a.js";import"./Title-0fb688d3.js";import"./index-5f3e2e3b.js";import"./Select-bafc0df3.js";import"./InvisibleMessage-71605293.js";import"./slim-arrow-down-16231f47.js";import"./StandardListItem-32d37e59.js";import"./ValueState-ab6838cc.js";const w=`## Keyboard Handling

The \`Select\` provides advanced keyboard handling.

- \\[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\\] - Opens/closes the drop-down.
- \\[UP, DOWN\\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- \\[SPACE, ENTER\\] - If the drop-down is opened - selects the focused option.
- \\[ESC\\] - Closes the drop-down without changing the selection.
- \\[HOME\\] - Navigates to first option
- \\[END\\] - Navigates to the last option
`,D="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `Option` component defines the content of an option in the `Select`\n",C="**Since:** 1.19.0\n\nThe `SelectMenu` is meant to be used together with the `Select` component as alternative to define the select's dropdown. It acts as a popover on desktop and tablet, and as a Dialog on phone.\n\nThe component gives the possibility to the user to customize the `Select`'s dropdown by slotting custom options and adding custom styles.\n\n### Usage\n\nTo use `Select` with a `SelectMenu`, you need to set the `Select` `menu` property to reference `SelectMenu` either by ID or DOM reference.\n\nFor the `SelectMenu`\n",v=`**Since:** 1.19.0

The code>SelectMenuOption component represents an option in the \`SelectMenu\`.

### Usage

For the \`SelectMenuOption\`
`,T=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."}];function xt(n={}){const{wrapper:i}=Object.assign({},a(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:b}),`
`,e.jsx(u,{since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(o,{children:w}),`
`,e.jsx(f,{rows:T}),`
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
`,e.jsx(o,{children:j}),`
`,e.jsx(t.h2,{id:"option",children:"Option"}),`
`,e.jsx(h,{hideHTMLPropsNote:!0,exclude:c,of:M}),`
`,e.jsx(o,{children:D}),`
`,e.jsx(t.h2,{id:"selectmenu",children:"SelectMenu"}),`
`,e.jsx(o,{children:C}),`
`,e.jsx(p,{of:S}),`
`,e.jsx(t.h3,{id:"example-select-with-custom-options",children:"Example: Select with custom Options"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(t.h2,{id:"selectmenuoption",children:"SelectMenuOption"}),`
`,e.jsx(o,{children:v}),`
`,e.jsx(p,{hideHTMLPropsNote:!0,exclude:c,of:O}),`
`,e.jsx(x,{})]})}}export{xt as default};
//# sourceMappingURL=Select-db267fc7.js.map
