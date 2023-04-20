import{j as e,a as t,F as m}from"./jsx-runtime-670450c2.js";import{C as c,A as d}from"./DomRefTable.module-3d83c57b.js";import{D as h}from"./DocsHeader-f65c67c8.js";import"./index-f1f749bf.js";import"./index-96c5f47c.js";import{D as u}from"./DomRefTable-2b8db518.js";import{M as l,C as f,a as r}from"./chunk-PCJTTTQV-07df005d.js";import{C as g,D as s}from"./Menu.stories-de48bf64.js";import{M}from"./index-41cf13c7.js";import{a as b}from"./index-1cc8a03a.js";import{S as y}from"./SubcomponentsSection-6138f2fc.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-4c258798.js";import"./TableOfContent-8bbfd532.js";import"./index-d1663926.js";import"./iframe-22f8d39f.js";import"../sb-preview/runtime.mjs";import"./Link-3b8926df.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-254d6b69.js";import"./index-a3409209.js";import"./Label-528b8168.js";import"./Device-208919c6.js";import"./class-map-6d48ebd3.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-7acf7a6f.js";import"./Button-fa05cadd.js";import"./slot-76e48863.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./slim-arrow-right-78d167a6.js";import"./ResponsivePopover-152ab708.js";import"./Dialog-610dd06c.js";import"./ValueState-2c5e5904.js";import"./Title-0440ec3f.js";import"./ListItemBase-780d7053.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-c375cd19.js";import"./StandardListItem-38cf6758.js";import"./ListItem-843af2c9.js";import"./RadioButton-412fbbc0.js";import"./CheckBox-f0072def.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./Avatar-0d8d2b25.js";import"./employee-0153a597.js";const w="## Usage\n\n`Menu` contains `Menu-item` components. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n## Keyboard Handling\n\nThe `Menu` provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree:\n\n- `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.\n- `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested in the currently clicked menu item.\n- `Arrow Left` or `Escape` - Closes the currently opened sub-menu.\n\nNote: if the text ditrection is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.\n",v="**Since:** 0.23.0\n\n`MenuItem` is the item to use inside a `Menu`. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Usage\n\n`MenuItem` is an abstract element, representing a node in a `Menu`. The menu itself is rendered as a list, and each `MenuItem` is represented by a list item (`StandardListItem`) in that list. Therefore, you should only use `MenuItem` directly in your apps. The `StandardListItem` list item is internal for the list, and not intended for public use.\n",C=[{name:"close",visibility:"public",description:"Closes the Menu."},{name:"showAt",visibility:"public",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the Menu near the opener element."}];function $e(o={}){const{wrapper:i}=Object.assign({},a(),o.components);return i?e(i,Object.assign({},o,{children:e(p,{})})):p();function p(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em"},a(),o.components);return t(m,{children:[e(l,{of:g}),`
`,e(h,{since:"0.23.0"}),`
`,e(n.h2,{id:"example",children:"Example"}),`
`,e(f,{of:s}),`
`,e(n.h2,{id:"properties",children:"Properties"}),`
`,e(c,{of:s}),`
`,e(r,{children:w}),`
`,e(u,{rows:C}),`
`,e(n.h2,{id:"opening-menus",children:"Opening Menus"}),`
`,e(n.h4,{id:"since-180",children:"since 1.8.0"}),`
`,t(n.p,{children:["We recommend opening and closing the ",e(n.code,{children:"Menu"})," component in a declarative way using the ",e(n.code,{children:"open"})," and ",e(n.code,{children:"opener"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const MyComponentWithMenu = () => {
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
`,e(n.p,{children:t(n.strong,{children:["Opening a ",e(n.code,{children:"Menu"})," by reference and not by ",e(n.code,{children:"id"})]})}),`
`,t(n.p,{children:["This web component exposes a way to pass a reference of an element instead of an ",e(n.code,{children:"id"})," to the ",e(n.code,{children:"opener"})," prop. Since this is not supported when passing the reference in a declarative way to a React ",e(n.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e(M,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
using this approach!`}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const MenuComponent = () => {
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
`,e(n.h4,{id:"before-180",children:"before 1.8.0"}),`
`,t(n.p,{children:[e(n.code,{children:"Menu"}),"s can be opened by attaching a ",e(n.code,{children:"ref"})," to the component and then call the corresponding ",e(n.strong,{children:e(n.code,{children:"showAt"})})," method. The method receives the target element - ",t(n.em,{children:["on which the ",e(n.code,{children:"Menu"})," is to be opened"]})," - as parameter."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const MenuComponent = () => {
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
`,e(r,{children:y}),`
`,e(n.h2,{id:"menuitem",children:"MenuItem"}),`
`,e(r,{children:v}),`
`,e(d,{of:b})]})}}export{$e as default};
//# sourceMappingURL=Menu-e3aa3d23.js.map
