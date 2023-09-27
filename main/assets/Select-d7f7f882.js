import{j as e}from"./jsx-runtime-d079401a.js";import{M as d,C as s,b as o}from"./chunk-S4VUQJ4A-74ed328f.js";import{C as l,b as h,A as p}from"./DomRefTable.module-ef2f031f.js";import{D as u}from"./DocsHeader-f9445f25.js";import{F as x}from"./Footer-c2244671.js";import"./index-f1f2c4b1.js";import{D as f}from"./DomRefTable-3c95c151.js";import{S as j}from"./SubcomponentsSection-6138f2fc.js";import{C as b,D as m,S,W as g,a as O}from"./Select.stories-8379a028.js";import{e as c}from"./utils-b1ef2149.js";import{u as a}from"./index-59d6410c.js";import{O as M}from"./index-ff6e7462.js";import"./iframe-bb104014.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./react-jss.esm-2e5f50f2.js";import"./index-0d6c4f2d.js";import"./UI5Element-fe43d284.js";import"./CustomElementsScopeUtils-7e643eaa.js";import"./withWebComponent-40b4b429.js";import"./utils-64df43e3.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-4b8e6c3e.js";import"./Icons-1d0bcfc0.js";import"./decline-6c7fc0a2.js";import"./i18n-defaults-bdef1cce.js";import"./information-5d7a8806.js";import"./alert-1b225bb9.js";import"./class-map-c90b90b7.js";import"./Button-ca10e4c6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0dcb0e40.js";import"./index-7bf57a11.js";import"./Integer-f7f172c9.js";import"./index-f53287d3.js";import"./Avatar-b61e760c.js";import"./ResizeHandler-c2d89e75.js";import"./employee-6f8dc3b6.js";import"./index-445b3cf1.js";import"./index-7edabd42.js";import"./Link-39a6449b.js";import"./WrappingType-b81e595a.js";import"./index-fb6e8b5e.js";import"./TableOfContent-ef93a395.js";import"./index-c10b5788.js";import"./Label-44520d2b.js";import"./index-997d175b.js";import"./index-db317946.js";import"./Popover-e0a9892e.js";import"./PopupUtils-6f7aa5d8.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-20392ac5.js";import"./FocusableElements-81dc3a15.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-26bcc635.js";import"./BrowserScrollbar.css-6733af99.js";import"./index-7f5047c9.js";import"./CustomListItem-e6b44855.js";import"./ListItem-8f00fe18.js";import"./ListItemBase-a954caa9.js";import"./ItemNavigation-6fcc55ad.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9ca5d237.js";import"./RadioButton-2fcb52b7.js";import"./ValueState-2c5e5904.js";import"./CheckBox-e1cfdb7e.js";import"./accept-9e169369.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bfe8f962.js";import"./ValueStateMessage.css-a9dd0528.js";import"./ResponsivePopoverCommon.css-fd1b094e.js";import"./ResponsivePopover-a1211aea.js";import"./Dialog-524beb63.js";import"./Title-01167e9e.js";import"./index-942b7a07.js";import"./Select-7dbcad82.js";import"./InvisibleMessage-dcf9afbd.js";import"./slim-arrow-down-b87cbef6.js";import"./StandardListItem-4d8bc973.js";import"./ValueState-ab6838cc.js";const w=`## Keyboard Handling

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
//# sourceMappingURL=Select-d7f7f882.js.map
