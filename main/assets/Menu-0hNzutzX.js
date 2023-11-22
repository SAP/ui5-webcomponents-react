import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{C as m,b as c}from"./DomRefTable.module-1teiQWGe.js";import{D as d}from"./DocsHeader-TZSTd_u-.js";import"./index-OjgoNOWw.js";import"./index-QYh6idnL.js";import{M as h,C as s,b as o}from"./chunk-HLWAVYOI-psJj60ml.js";import{D as u}from"./DomRefTable-wmSENnNG.js";import{C as l,D as p,W as x}from"./Menu.stories-2qQr99uT.js";import{M as f}from"./index--fFZoO1L.js";import{a as j}from"./index-ZjcGdxlC.js";import{S as b}from"./SubcomponentsSection-pzdPLcqE.js";import{e as g}from"./utils-77gZ8405.js";import{u as a}from"./index-RwE9nQVW.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-yaLaEhii.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-PmTGElot.js";import"./i18nBundle-Crssojm_.js";import"./VersionInfo-hBCHoyLi.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-cCePQQVr.js";import"./UI5Element-OBgzz0fv.js";import"./CustomElementsScopeUtils-kYmWas10.js";import"./utils-5CTKRvkw.js";import"./index-Vrh7cvSu.js";import"./iframe-S4JyMSMM.js";import"../sb-preview/runtime.js";import"./withWebComponent-6ZcDnwha.js";import"./slot-HSrR9XJ-.js";import"./Icon-2m0rU9av.js";import"./Icons-zRUxeAje.js";import"./Integer-kog98579.js";import"./class-map-dxoND1Lf.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-RDyNiobK.js";import"./Avatar-LWFiEvrj.js";import"./ResizeHandler-jV9qqcaG.js";import"./employee-DNZboz-g.js";import"./alert-SMfrQE5J.js";import"./index-JiwscGpR.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./index-FFmUsnk4.js";import"./Link-Gs09ax_S.js";import"./MarkedEvents-aYv14vsS.js";import"./WrappingType-avPrqc94.js";import"./index-FvozjNxD.js";import"./index-3PxZPhBC.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-IMpNFjIe.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-uZmr2UoK.js";import"./index-17AA29k7.js";import"./Label-bo0gz_aS.js";import"./index-GL4gBoyB.js";import"./mapValues-HzTlT2lF.js";import"./_baseForOwn-UZJwRxDU.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-070p_6Jf.js";import"./Button-UDaVhcBU.js";import"./decline-P9scilyE.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-eS-oBj3B.js";import"./Popover-SxOPU5wi.js";import"./PopupUtils-7oRQuqE1.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-dlrgNDf3.js";import"./FocusableElements-vmTxt0Po.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-oXcF1--7.js";import"./BrowserScrollbar.css-gfEIeu7r.js";import"./slim-arrow-right-LgQh9lXE.js";import"./ResponsivePopover-voK1PETi.js";import"./Dialog-sWOJmdZ6.js";import"./ValueState-zUcANXoY.js";import"./Title-nBPKLywE.js";import"./ListItemBase-OVhNd6zE.js";import"./ItemNavigation-_xIDlcJ6.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-v8eJGF06.js";import"./StandardListItem-srLARCBi.js";import"./ListItem-sP6HCr5u.js";import"./RadioButton-b_fTB1Cx.js";import"./CheckBox-Hp_NHnWe.js";import"./accept-sNf1zbjr.js";import"./HasPopup-9BAMrqbD.js";const M="## Usage\n\n`Menu` contains `Menu-item` components. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n## Keyboard Handling\n\nThe `Menu` provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree:\n\n- `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.\n- `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested in the currently clicked menu item.\n- `Arrow Left` or `Escape` - Closes the currently opened sub-menu.\n\nNote: if the text ditrection is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.\n",w="**Since:** 0.23.0\n**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\n`MenuItem` is the item to use inside a `Menu`. An arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Usage\n\n`MenuItem` is an abstract element, representing a node in a `Menu`. The menu itself is rendered as a list, and each `MenuItem` is represented by a list item (`StandardListItem`) in that list. Therefore, you should only use `MenuItem` directly in your apps. The `StandardListItem` list item is internal for the list, and not intended for public use.\n",y=[{name:"close",visibility:"public",description:"Closes the Menu."},{name:"showAt",visibility:"public",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the Menu near the opener element."}];function pn(t={}){const{wrapper:r}=Object.assign({},a(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",h3:"h3"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
`,e.jsx(c,{hideHTMLPropsNote:!0,exclude:g,of:j})]})}}export{pn as default};
//# sourceMappingURL=Menu-0hNzutzX.js.map
