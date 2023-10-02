import{j as e}from"./jsx-runtime-d079401a.js";import{C as m,b as c}from"./DomRefTable.module-7e5b3ff6.js";import{D as d}from"./DocsHeader-0be916ce.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";import{M as h,C as s,b as o}from"./chunk-S4VUQJ4A-aa8bbc14.js";import{D as u}from"./DomRefTable-6f2e4230.js";import{C as l,D as p,W as x}from"./Menu.stories-65c45278.js";import{M as f}from"./index-d6910adc.js";import{a as j}from"./index-6ec75497.js";import{S as b}from"./SubcomponentsSection-6138f2fc.js";import{e as g}from"./utils-b1ef2149.js";import{u as a}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0dcb0e40.js";import"./UI5Element-fe43d284.js";import"./CustomElementsScopeUtils-7e643eaa.js";import"./utils-64df43e3.js";import"./index-75eac066.js";import"./iframe-174a0e51.js";import"../sb-preview/runtime.js";import"./withWebComponent-40b4b429.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-4b8e6c3e.js";import"./Icons-1d0bcfc0.js";import"./Integer-f7f172c9.js";import"./class-map-c90b90b7.js";import"./i18n-defaults-d5195a49.js";import"./index-7e54d59e.js";import"./Avatar-b61e760c.js";import"./ResizeHandler-c2d89e75.js";import"./employee-6f8dc3b6.js";import"./alert-1b225bb9.js";import"./index-69c6fd40.js";import"./AriaLabelHelper-43a261ec.js";import"./index-40728f1b.js";import"./Link-39a6449b.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-0cd31373.js";import"./index-65aa6e2e.js";import"./Label-44520d2b.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./index-8e334614.js";import"./Button-ca10e4c6.js";import"./decline-6c7fc0a2.js";import"./i18n-defaults-bdef1cce.js";import"./information-5d7a8806.js";import"./Popover-e0a9892e.js";import"./PopupUtils-6f7aa5d8.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-20392ac5.js";import"./FocusableElements-81dc3a15.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-26bcc635.js";import"./BrowserScrollbar.css-6733af99.js";import"./slim-arrow-right-bfe8f962.js";import"./ResponsivePopover-a1211aea.js";import"./Dialog-524beb63.js";import"./ValueState-2c5e5904.js";import"./Title-01167e9e.js";import"./ListItemBase-a954caa9.js";import"./ItemNavigation-6fcc55ad.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9ca5d237.js";import"./StandardListItem-4d8bc973.js";import"./ListItem-8f00fe18.js";import"./RadioButton-2fcb52b7.js";import"./CheckBox-e1cfdb7e.js";import"./accept-9e169369.js";import"./HasPopup-47461347.js";const M="## Usage\n\n`Menu` contains `Menu-item` components. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n## Keyboard Handling\n\nThe `Menu` provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree:\n\n- `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.\n- `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested in the currently clicked menu item.\n- `Arrow Left` or `Escape` - Closes the currently opened sub-menu.\n\nNote: if the text ditrection is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.\n",w="**Since:** 0.23.0\n**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\n`MenuItem` is the item to use inside a `Menu`. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Usage\n\n`MenuItem` is an abstract element, representing a node in a `Menu`. The menu itself is rendered as a list, and each `MenuItem` is represented by a list item (`StandardListItem`) in that list. Therefore, you should only use `MenuItem` directly in your apps. The `StandardListItem` list item is internal for the list, and not intended for public use.\n",y=[{name:"close",visibility:"public",description:"Closes the Menu."},{name:"showAt",visibility:"public",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the Menu near the opener element."}];function $e(t={}){const{wrapper:r}=Object.assign({},a(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",h3:"h3"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
`,e.jsx(d,{since:"0.23.0"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:p}),`
`,e.jsx(o,{children:M}),`
`,e.jsx(u,{rows:y}),`
`,e.jsx(n.h2,{id:"opening-menus",children:"Opening Menus"}),`
`,e.jsx(n.h4,{id:"since-180",children:"since 1.8.0"}),`
`,e.jsxs(n.p,{children:["We recommend opening and closing the ",e.jsx(n.code,{children:"Menu"})," component in a declarative way using the ",e.jsx(n.code,{children:"open"})," and ",e.jsx(n.code,{children:"opener"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openMenuBtn'}
        onClick={() => {
          setMenuIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <Menu
        opener={'openMenuBtn'}
        open={menuIsOpen}
        onAfterClose={() => {
          setMenuIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Opening a ",e.jsx(n.code,{children:"Menu"})," by reference and not by ",e.jsx(n.code,{children:"id"})]})}),`
`,e.jsxs(n.p,{children:["This web component exposes a way to pass a reference of an element instead of an ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"opener"})," prop. Since this is not supported when passing the reference in a declarative way to a React ",e.jsx(n.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e.jsx(f,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
using this approach!`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const MenuComponent = () => {
  const popoverRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    if (popoverRef.current) {
      popoverRef.current.opener = e.target;
      setOpen((prev) => !prev);
    }
  };
  return (
    <>
      <Button onClick={handleOpenerClick}>Opener</Button>
      <Menu ref={popoverRef} open={open}>
        {/* Content */}
      </Menu>
    </>
  );
};
`})}),`
`,e.jsx(n.h4,{id:"before-180",children:"before 1.8.0"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Menu"}),"s can be opened by attaching a ",e.jsx(n.code,{children:"ref"})," to the component and then call the corresponding ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"showAt"})})," method. The method receives the target element - ",e.jsxs(n.em,{children:["on which the ",e.jsx(n.code,{children:"Menu"})," is to be opened"]})," - as parameter."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const MenuComponent = () => {
  const popoverRef = useRef();
  const onButtonClick = (e) => {
    popoverRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Menu</Button>
      <Menu ref={popoverRef}>
        <MenuItem text="New File" icon="add-document" />
        <MenuItem text="New Folder" icon="add-folder" disabled />
      </Menu>
    </>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"menu-with-submenu",children:"Menu with Submenu"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(o,{children:b}),`
`,e.jsx(n.h2,{id:"menuitem",children:"MenuItem"}),`
`,e.jsx(o,{children:w}),`
`,e.jsx(c,{hideHTMLPropsNote:!0,exclude:g,of:j})]})}}export{$e as default};
//# sourceMappingURL=Menu-cbf0364f.js.map
