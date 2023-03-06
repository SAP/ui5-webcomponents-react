import{A as b}from"./DomRefTable.module-22ed02aa.js";import{D as w}from"./DocsHeader-0d4087d7.js";import{F as x}from"./Footer-e7c8748d.js";import{a as r,F as d,j as e}from"./jsx-runtime-670450c2.js";import{r as o}from"./index-f1f749bf.js";import{D as v}from"./DomRefTable-0df29f0e.js";import{M as R,C,j as S,a as m}from"./index-d916227d.js";import{S as I}from"./SubcomponentsSection-6138f2fc.js";import{B as h}from"./index-5f01baa0.js";import{M as c,a as t}from"./index-42d5ca8e.js";import{u as l}from"./index-4fb8b842.js";import{M as O}from"./index-2095368c.js";import"./chunk-G4YQS2SV-ea26d85a.js";import"./iframe-a0098a98.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-85b0aa49.js";import"./TableOfContent-2179408e.js";import"./index-4954166a.js";import"./UI5Element-4f8793c9.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./MarkedEvents-8627ed01.js";import"./Keys-3acbae73.js";import"./AriaLabelHelper-c82262ef.js";import"./WrappingType-b81e595a.js";import"./index-cbfafae0.js";import"./Label-27ec0466.js";import"./Device-208919c6.js";import"./class-map-5d8e4b2b.js";import"./Footer.module-c4f3b823.js";import"./index-a801d628.js";import"./Popover-84c1d886.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-2f3b9f5d.js";import"./FocusableElements-c64a83a7.js";import"./ResizeHandler-1dae7180.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Button-8fbc19ea.js";import"./Icons-ad6f0d24.js";import"./slim-arrow-right-fdb534c0.js";import"./ResponsivePopover-1e5d6f7e.js";import"./Dialog-846d1fb6.js";import"./ValueState-2c5e5904.js";import"./decline-e7438d7e.js";import"./Title-4c33d979.js";import"./ListItemBase-c15c02a7.js";import"./ItemNavigation-4c4dc0f2.js";import"./TabbableElements-c3d95d8d.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-fb622f11.js";import"./StandardListItem-089df25b.js";import"./ListItem-efa04b9c.js";import"./RadioButton-5efc72cd.js";import"./CheckBox-d7672a83.js";import"./accept-a7f2d970.js";import"./HasPopup-47461347.js";import"./Avatar-6d4f44b6.js";import"./employee-fe809d4d.js";const A="## Usage\n\n`Menu` contains `Menu-item` components. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n## Keyboard Handling\n\nThe `Menu` provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree:\n\n*   `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.\n*   `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested in the currently clicked menu item.\n*   `Arrow Left` or `Escape` - Closes the currently opened sub-menu.\n\nNote: if the text ditrection is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.",B="`MenuItem` is the item to use inside a `Menu`. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n### Usage\n\n`MenuItem` is an abstract element, representing a node in a `Menu`. The menu itself is rendered as a list, and each `MenuItem` is represented by a list item (`StandardListItem`) in that list. Therefore, you should only use `MenuItem` directly in your apps. The `StandardListItem` list item is internal for the list, and not intended for public use.",N=[{name:"close",visibility:"public",description:"Closes the Menu."},{name:"showAt",visibility:"public",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the Menu near the opener element."}];function k(i={}){const{wrapper:s}=Object.assign({},l(),i.components);return s?e(s,{...i,children:e(a,{})}):a();function a(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em"},l(),i.components);return r(d,{children:[e(R,{title:"Modals & Popovers / Menu",component:c,subcomponents:{MenuItem:t},argTypes:{children:{control:{disable:!0}}},parameters:{chromatic:{delay:1e3}}}),`
`,e(w,{since:"0.23.0"}),`
`,e("br",{}),`
`,e(n.h2,{children:"Example"}),`
`,e(C,{children:e(S,{name:"Default",children:M=>{const u=o.useRef(null),g=o.useRef(null);return o.useEffect(()=>{},[]),r(d,{children:[e(h,{ref:g,onClick:y=>{u.current.showAt(y.target)},children:"Show Menu"}),r(c,{...M,ref:u,children:[e(t,{text:"New File",icon:"add-document"}),e(t,{text:"New Folder",icon:"add-folder",disabled:!0}),e(t,{text:"Open",icon:"open-folder",startsSection:!0}),e(t,{text:"Close"}),e(t,{text:"Preferences",icon:"action-settings",startsSection:!0}),e(t,{text:"Exit",icon:"journey-arrive"})]})]})}})}),`
`,e(n.h2,{children:"Properties"}),`
`,e(b,{story:"Default"}),`
`,e(m,{children:A}),`
`,e(v,{rows:N}),`
`,e(n.h2,{children:"Opening Menus"}),`
`,e(n.h4,{children:"since 1.8.0"}),`
`,r(n.p,{children:["We recommend opening and closing the ",e(n.code,{children:"Menu"})," component in a declarative way using the ",e(n.code,{children:"open"})," and ",e(n.code,{children:"opener"}),` prop.
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
`,e(n.p,{children:r(n.strong,{children:["Opening a ",e(n.code,{children:"Menu"})," by reference and not by ",e(n.code,{children:"id"})]})}),`
`,r(n.p,{children:["This web component exposes a way to pass a reference of an element instead of an ",e(n.code,{children:"id"})," to the ",e(n.code,{children:"opener"})," prop. Since this is not supported when passing the reference in a declarative way to a React ",e(n.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e(O,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
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
`,r(n.p,{children:[e(n.code,{children:"Menu"}),"s can be opened by attaching a ",e(n.code,{children:"ref"})," to the component and then call the corresponding ",e(n.strong,{children:e(n.code,{children:"showAt"})})," method. The method receives the target element - ",r(n.em,{children:["on which the ",e(n.code,{children:"Menu"})," is to be opened"]})," - as parameter."]}),`
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
`,e(m,{children:I}),`
`,e(n.h2,{children:"MenuItem"}),`
`,e(m,{children:B}),`
`,e(x,{})]})}}const f=i=>{const s=o.useRef(null),a=o.useRef(null);return o.useEffect(()=>{},[]),r(d,{children:[e(h,{ref:a,onClick:n=>{s.current.showAt(n.target)},children:"Show Menu"}),r(c,{...i,ref:s,children:[e(t,{text:"New File",icon:"add-document"}),e(t,{text:"New Folder",icon:"add-folder",disabled:!0}),e(t,{text:"Open",icon:"open-folder",startsSection:!0}),e(t,{text:"Close"}),e(t,{text:"Preferences",icon:"action-settings",startsSection:!0}),e(t,{text:"Exit",icon:"journey-arrive"})]})]})};f.storyName="Default";f.parameters={storySource:{source:`args => {
  const ref = useRef(null);
  const btnRef = useRef(null);
  useEffect(() => {
    if (isChromatic) {
      ref.current.showAt(btnRef.current);
    }
  }, []);
  return <>
          <Button ref={btnRef} onClick={e => {
      ref.current.showAt(e.target);
    }}>
            Show Menu
          </Button>
          <Menu {...args} ref={ref}>
            <MenuItem text="New File" icon="add-document" />
            <MenuItem text="New Folder" icon="add-folder" disabled />
            <MenuItem text="Open" icon="open-folder" startsSection />
            <MenuItem text="Close" />
            <MenuItem text="Preferences" icon="action-settings" startsSection />
            <MenuItem text="Exit" icon="journey-arrive" />
          </Menu>
        </>;
}`}};const p={title:"Modals & Popovers / Menu",parameters:{chromatic:{delay:1e3}},component:c,subcomponents:{MenuItem:t},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:k};const rn=["defaultStory"];export{rn as __namedExportsOrder,p as default,f as defaultStory};
//# sourceMappingURL=Menu.stories-cf07bf78.js.map
