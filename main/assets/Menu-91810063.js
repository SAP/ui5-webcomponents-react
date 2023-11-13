import{j as e}from"./jsx-runtime-d079401a.js";import{C as c,b as m}from"./DomRefTable.module-013d3597.js";import{D as d}from"./DocsHeader-0abe57bd.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";import{M as h,C as s,b as o}from"./chunk-HLWAVYOI-c897462f.js";import{D as u}from"./DomRefTable-66329cf8.js";import{C as l,D as p,W as x}from"./Menu.stories-eb3cc4e8.js";import{M as f}from"./index-825c1998.js";import{a as j}from"./index-5fe73602.js";import{S as b}from"./SubcomponentsSection-6138f2fc.js";import{e as g}from"./utils-b1ef2149.js";import{u as a}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./UI5Element-d089e658.js";import"./CustomElementsScopeUtils-90546106.js";import"./utils-85c0effb.js";import"./index-09e66765.js";import"./iframe-559567e7.js";import"../sb-preview/runtime.js";import"./withWebComponent-1bab39e1.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-6c84d99e.js";import"./Icons-d115de21.js";import"./Integer-f7f172c9.js";import"./class-map-a86e04c8.js";import"./i18n-defaults-a1ecaff4.js";import"./index-84a32ca5.js";import"./Avatar-a6bd6a5d.js";import"./ResizeHandler-36d5a74c.js";import"./employee-0930782f.js";import"./alert-fa33aca2.js";import"./index-30b5d169.js";import"./AriaLabelHelper-43a261ec.js";import"./index-4603e29d.js";import"./Link-50cf71c5.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-fd3436f0.js";import"./index-4a38c759.js";import"./Label-49cb1c79.js";import"./index-f82c8853.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./index-d1a15b3e.js";import"./Button-28aa77f1.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./information-ff75d6c3.js";import"./Popover-d31df830.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-5dfc3685.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-753edde8.js";import"./BrowserScrollbar.css-20b91c11.js";import"./slim-arrow-right-f2ee719f.js";import"./ResponsivePopover-b595d56f.js";import"./Dialog-89b0a2f0.js";import"./ValueState-2c5e5904.js";import"./Title-3bee1f39.js";import"./ListItemBase-9072af4d.js";import"./ItemNavigation-5bb0bc27.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-65dcbbf7.js";import"./StandardListItem-db320c2b.js";import"./ListItem-39a60ab2.js";import"./RadioButton-2c7192c2.js";import"./CheckBox-f5047736.js";import"./accept-b3993803.js";import"./HasPopup-47461347.js";const M="## Usage\n\n`Menu` contains `Menu-item` components. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n## Keyboard Handling\n\nThe `Menu` provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree:\n\n- `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.\n- `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested in the currently clicked menu item.\n- `Arrow Left` or `Escape` - Closes the currently opened sub-menu.\n\nNote: if the text ditrection is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.\n",w="**Since:** 0.23.0\n**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\n`MenuItem` is the item to use inside a `Menu`. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Usage\n\n`MenuItem` is an abstract element, representing a node in a `Menu`. The menu itself is rendered as a list, and each `MenuItem` is represented by a list item (`StandardListItem`) in that list. Therefore, you should only use `MenuItem` directly in your apps. The `StandardListItem` list item is internal for the list, and not intended for public use.\n",y=[{name:"close",visibility:"public",description:"Closes the Menu."},{name:"showAt",visibility:"public",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the Menu near the opener element."}];function Ve(t={}){const{wrapper:r}=Object.assign({},a(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",h3:"h3"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
`,e.jsx(d,{since:"0.23.0"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:p}),`
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
`,e.jsx(m,{hideHTMLPropsNote:!0,exclude:g,of:j})]})}}export{Ve as default};
//# sourceMappingURL=Menu-91810063.js.map
