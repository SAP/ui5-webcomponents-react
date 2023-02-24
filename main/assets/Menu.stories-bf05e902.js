import{A as b}from"./DomRefTable.module-30f3bd43.js";import{D as w}from"./DocsHeader-ce92ab0e.js";import{F as x}from"./Footer-c8244a58.js";import{a as r,F as m,j as e}from"./jsx-runtime-670450c2.js";import{r as o}from"./index-f1f749bf.js";import{D as v}from"./DomRefTable-02666777.js";import{M as R,C,i as S,a as d}from"./index-02423177.js";import{S as I}from"./SubcomponentsSection-6138f2fc.js";import{B as h}from"./index-373748a1.js";import{M as c,a as t}from"./index-b9211307.js";import{u as l}from"./index-4fb8b842.js";import{M as O}from"./index-9d4f0257.js";import"./chunk-4XCFV5WA-0265c491.js";import"./iframe-3c157cf7.js";import"../sb-preview/runtime.mjs";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-60eb1828.js";import"./TableOfContent-75175b8f.js";import"./index-63e4052b.js";import"./UI5Element-5c53814f.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./AriaLabelHelper-dee23f38.js";import"./withWebComponent-b8903b2e.js";import"./utils-ed90fb1b.js";import"./MarkedEvents-f33713fa.js";import"./Keys-50a1cb5a.js";import"./WrappingType-b81e595a.js";import"./index-bd49c23e.js";import"./Label-aecaa844.js";import"./class-map-a4eccd4f.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-0db28cca.js";import"./Popover-e3c8ecec.js";import"./Integer-44c9be94.js";import"./FocusableElements-679e4fb9.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-da7c4a52.js";import"./style-map-f4770aeb.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Button-6ca701be.js";import"./Icons-0f428547.js";import"./slim-arrow-right-ac6f9b0d.js";import"./ResponsivePopover-9c15f502.js";import"./Dialog-32c7096e.js";import"./ValueState-2c5e5904.js";import"./decline-2be11c85.js";import"./Title-fb9c1aba.js";import"./ListItemBase-4b52d1f0.js";import"./ItemNavigation-1cd3f78d.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-52be7164.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-3e5a8ca3.js";import"./StandardListItem-ddbc126c.js";import"./ListItem-bdb92faa.js";import"./RadioButton-71b27f26.js";import"./CheckBox-9f80be56.js";import"./accept-4d6b88bc.js";import"./HasPopup-47461347.js";import"./Avatar-e191e45f.js";import"./employee-01ecb76e.js";const A="## Usage\n\n`Menu` contains `Menu-item` components. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n## Keyboard Handling\n\nThe `Menu` provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree:\n\n*   `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.\n*   `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested in the currently clicked menu item.\n*   `Arrow Left` or `Escape` - Closes the currently opened sub-menu.\n\nNote: if the text ditrection is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.",B="`MenuItem` is the item to use inside a `Menu`. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n### Usage\n\n`MenuItem` is an abstract element, representing a node in a `Menu`. The menu itself is rendered as a list, and each `MenuItem` is represented by a list item (`StandardListItem`) in that list. Therefore, you should only use `MenuItem` directly in your apps. The `StandardListItem` list item is internal for the list, and not intended for public use.",N=[{name:"close",visibility:"public",description:"Closes the Menu."},{name:"showAt",visibility:"public",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the Menu near the opener element."}];function k(i={}){const{wrapper:s}=Object.assign({},l(),i.components);return s?e(s,{...i,children:e(a,{})}):a();function a(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em"},l(),i.components);return r(m,{children:[e(R,{title:"Modals & Popovers / Menu",component:c,subcomponents:{MenuItem:t},argTypes:{children:{control:{disable:!0}}},parameters:{chromatic:{delay:1e3}}}),`
`,e(w,{since:"0.23.0"}),`
`,e("br",{}),`
`,e(n.h2,{children:"Example"}),`
`,e(C,{children:e(S,{name:"Default",children:M=>{const u=o.useRef(null),g=o.useRef(null);return o.useEffect(()=>{},[]),r(m,{children:[e(h,{ref:g,onClick:y=>{u.current.showAt(y.target)},children:"Show Menu"}),r(c,{...M,ref:u,children:[e(t,{text:"New File",icon:"add-document"}),e(t,{text:"New Folder",icon:"add-folder",disabled:!0}),e(t,{text:"Open",icon:"open-folder",startsSection:!0}),e(t,{text:"Close"}),e(t,{text:"Preferences",icon:"action-settings",startsSection:!0}),e(t,{text:"Exit",icon:"journey-arrive"})]})]})}})}),`
`,e(n.h2,{children:"Properties"}),`
`,e(b,{story:"Default"}),`
`,e(d,{children:A}),`
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
`,e(d,{children:I}),`
`,e(n.h2,{children:"MenuItem"}),`
`,e(d,{children:B}),`
`,e(x,{})]})}}const f=i=>{const s=o.useRef(null),a=o.useRef(null);return o.useEffect(()=>{},[]),r(m,{children:[e(h,{ref:a,onClick:n=>{s.current.showAt(n.target)},children:"Show Menu"}),r(c,{...i,ref:s,children:[e(t,{text:"New File",icon:"add-document"}),e(t,{text:"New Folder",icon:"add-folder",disabled:!0}),e(t,{text:"Open",icon:"open-folder",startsSection:!0}),e(t,{text:"Close"}),e(t,{text:"Preferences",icon:"action-settings",startsSection:!0}),e(t,{text:"Exit",icon:"journey-arrive"})]})]})};f.storyName="Default";f.parameters={storySource:{source:`args => {
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
}`}};const p={title:"Modals & Popovers / Menu",parameters:{chromatic:{delay:1e3}},component:c,subcomponents:{MenuItem:t},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:k};const nn=["defaultStory"];export{nn as __namedExportsOrder,p as default,f as defaultStory};
//# sourceMappingURL=Menu.stories-bf05e902.js.map
