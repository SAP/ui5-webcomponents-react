import{j as e,e as m}from"./iframe-caVmfS0N.js";import{useMDXComponents as a}from"./index-CXGNJi-m.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-ZTuRQuXn.js";import{A as d}from"./ArgTypesWithNote-DQKA80WD.js";import{C as f}from"./ControlsWithNote-BwqNXbrr.js";import{D as M}from"./DocsHeader-CtG9s46Z.js";import{F as I}from"./CommandsAndQueries-DetWBOzr.js";import{C as o,D as r,B as i}from"./Button.stories-CsDlZDbg.js";import"./preload-helper-D9Z9MdNV.js";import"./index-ChGg5Mmk.js";import"./information-Dyf6S5us.js";import"./sys-enter-2-D5_eC5h3.js";import"./alert-BiCZhGMN.js";import"./Tag-D02fgpVR.js";import"./index-CIcgqU5O.js";import"./index-Bs2xAB6r.js";import"./Link-CXOXdny5.js";import"./copy-sAaoLBke.js";import"./copy-DWhnNq-F.js";import"./GitHub-Mark-6VQVGWOs.js";import"./TableOfContent-DyKT0XGl.js";import"./index-BDC18DOY.js";import"./index-IhZ6wtTw.js";import"./addCustomCSSWithScoping-QAXJ-c-T.js";import"./index-D2ylaH5D.js";import"./index-C-mTSqge.js";import"./index-CxKirG4i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGaiMck6.js";import"./ai-94SIalGP.js";import"./ai-J3pOsvCT.js";import"./navigation-down-arrow-BIm6SbwE.js";import"./stop-CmugXm0c.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-FgxzjLwi.js";import"./slim-arrow-down-ChlFFHmi.js";import"./slim-arrow-down-DGRzOAYw.js";import"./index-YLaG7lna.js";import"./index-CDWQHBEV.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
`,e.jsx(M,{of:o,experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:r}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show static code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function AIButton(props) {
  const generationIdRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<ButtonDomRef>(null);
  const [buttonState, setButtonState] = useState("generate");
  const [menuOpen, setMenuOpen] = useState(false);

  const startGeneration = () => {
    generationIdRef.current = setTimeout(() => {
      setButtonState("revise");
    }, 3000);
  };

  const handleClick: ButtonPropTypes["onClick"] = (e) => {
    const btn = e.target;

    setMenuOpen(false);
    switch (btn.state) {
      case "generate":
        setButtonState("generating");
        startGeneration();
        break;
      case "generating":
        if (generationIdRef.current) {
          clearTimeout(generationIdRef.current);
          generationIdRef.current = null;
        }
        setButtonState("generate");
        break;
      case "revise":
        setMenuOpen(true);
        break;
    }
  };

  const handleMenuItemClick: MenuPropTypes["onItemClick"] = (e) => {
    if (e.detail.text === "Regenerate") {
      setButtonState("generating");
      startGeneration();
    }
  };

  return (
    <>
      <Button
        {...props}
        onClick={handleClick}
        state={buttonState}
        ref={buttonRef}
      >
        <ButtonState name="generate" text="Generate" icon={aiIcon} />
        <ButtonState name="generating" text="Stop Generating" icon={stopIcon} />
        <ButtonState
          name="revise"
          text="Revise"
          icon={aiIcon}
          endIcon={navDownIcon}
        />
      </Button>
      {menuOpen && (
        <Menu
          opener={buttonRef.current}
          open
          onItemClick={handleMenuItemClick}
          onClose={() => {
            setMenuOpen(false);
          }}
        >
          <MenuItem text="Regenerate" />
          <MenuSeparator />
          <MenuItem text="Fix Spelling & Grammar" />
          <MenuItem text="Change Tone">
            <MenuItem text="Option 1" />
            <MenuItem text="Option 2" />
            <MenuItem text="Option 3" />
          </MenuItem>
          <MenuItem text="Adjust Length">
            <MenuItem text="Shorten text" />
            <MenuItem text="Lengthen text" />
          </MenuItem>
          <MenuItem text="Bulleted List" />
          <MenuItem text="Translate">
            <MenuItem text="English" />
            <MenuItem text="German" />
            <MenuItem text="Spanish" />
          </MenuItem>
        </Menu>
      )}
    </>
  );
}
`})})]}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(f,{of:r}),`
`,e.jsx(l,{children:u}),`
`,e.jsx(t.h2,{id:"buttonstate",children:"ButtonState"}),`
`,e.jsx(x,{of:i}),`
`,e.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,e.jsx(I,{}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{})})]})}function ie(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{ie as default};
