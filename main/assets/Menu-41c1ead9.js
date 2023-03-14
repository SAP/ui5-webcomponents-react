import{j as e,a as t,F as m}from"./jsx-runtime-670450c2.js";import{C as c,A as d}from"./DomRefTable.module-88fbcd32.js";import{D as h}from"./DocsHeader-18128de7.js";import"./index-f1f749bf.js";import"./index-96c5f47c.js";import"./Footer.module-f90cad7d.js";import{D as l}from"./DomRefTable-ea6a3512.js";import{M as u,C as f,a as r}from"./index-fe83e530.js";import{C as g,D as s}from"./Menu.stories-acb8bfe4.js";import{M}from"./index-0a6ba4bb.js";import{a as y}from"./index-be5dea61.js";import{S as b}from"./SubcomponentsSection-6138f2fc.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-cb209fd4.js";import"./iframe-1aa152d9.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-026b5b0e.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-d9d8bf04.js";import"./TableOfContent-c3e3f98d.js";import"./index-0b38334d.js";import"./Link-6d546ee9.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./event-97133b94.js";import"./Keys-3acbae73.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-d66b3d5e.js";import"./index-a0af1263.js";import"./Label-040efebd.js";import"./Device-208919c6.js";import"./class-map-5d8e4b2b.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./index-2cdc731c.js";import"./Button-04bad9a0.js";import"./slot-634e3e91.js";import"./Icon-459702a7.js";import"./Icons-7b82f601.js";import"./decline-f2b294b3.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./Popover-907d427e.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./slim-arrow-right-bbef5919.js";import"./ResponsivePopover-36c83c4d.js";import"./Dialog-644759b8.js";import"./ValueState-2c5e5904.js";import"./Title-b986a4bd.js";import"./ListItemBase-16737f88.js";import"./ItemNavigation-18222ac6.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-46a9aff5.js";import"./StandardListItem-ed465290.js";import"./ListItem-20b1ed77.js";import"./RadioButton-28647d07.js";import"./CheckBox-90578acd.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./Avatar-7c89587d.js";import"./employee-98ce1b38.js";const w="## Usage\n\n`Menu` contains `Menu-item` components. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n## Keyboard Handling\n\nThe `Menu` provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree:\n\n*   `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.\n*   `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested in the currently clicked menu item.\n*   `Arrow Left` or `Escape` - Closes the currently opened sub-menu.\n\nNote: if the text ditrection is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.",v="`MenuItem` is the item to use inside a `Menu`. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n### Usage\n\n`MenuItem` is an abstract element, representing a node in a `Menu`. The menu itself is rendered as a list, and each `MenuItem` is represented by a list item (`StandardListItem`) in that list. Therefore, you should only use `MenuItem` directly in your apps. The `StandardListItem` list item is internal for the list, and not intended for public use.",C=[{name:"close",visibility:"public",description:"Closes the Menu."},{name:"showAt",visibility:"public",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the Menu near the opener element."}];function rn(o={}){const{wrapper:i}=Object.assign({},a(),o.components);return i?e(i,Object.assign({},o,{children:e(p,{})})):p();function p(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em"},a(),o.components);return t(m,{children:[e(u,{of:g}),`
`,e(h,{}),`
`,e(n.h2,{children:"Example"}),`
`,e(f,{of:s}),`
`,e(n.h2,{children:"Properties"}),`
`,e(c,{of:s}),`
`,e(r,{children:w}),`
`,e(l,{rows:C}),`
`,e(n.h2,{children:"Opening Menus"}),`
`,e(n.h4,{children:"since 1.8.0"}),`
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
`,e(n.h4,{children:"before 1.8.0"}),`
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
`,e(r,{children:b}),`
`,e(n.h2,{children:"MenuItem"}),`
`,e(r,{children:v}),`
`,e(d,{of:y})]})}}export{rn as default};
//# sourceMappingURL=Menu-41c1ead9.js.map
