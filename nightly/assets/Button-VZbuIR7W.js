import{j as e,e as m}from"./iframe-BohNpW-0.js";import{useMDXComponents as a}from"./index-CNs9TfzQ.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BlqU8BU6.js";import{A as d}from"./ArgTypesWithNote-DH7OlF6T.js";import{C as f}from"./ControlsWithNote-QGl7DIf2.js";import{D as M}from"./DocsHeader-CokbDgUt.js";import{F as I}from"./CommandsAndQueries-dvLT1dsP.js";import{C as o,D as r,B as i}from"./Button.stories-BWBAteeR.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DRrOOsA_.js";import"./information-Cnc3e4nW.js";import"./sys-enter-2-YVZ7RvKW.js";import"./alert-t6wYPrrQ.js";import"./Tag-Cz53inHB.js";import"./index-ByPlsUCp.js";import"./index-DbSbZGAD.js";import"./Link-COIjIkbU.js";import"./copy-CU7ZgL8Y.js";import"./copy-CQ_htW6-.js";import"./GitHub-Mark-C90UNHWU.js";import"./TableOfContent-Dqpo1t13.js";import"./index-BoJlElCR.js";import"./index-0TDPNrCO.js";import"./addCustomCSSWithScoping-k_HNs7SN.js";import"./index-BPmVkbH6.js";import"./index-DMJ_2dM-.js";import"./index-RUOWoGP0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-E0sphTwG.js";import"./ai-BA_7q_yU.js";import"./ai-BkSi364R.js";import"./navigation-down-arrow-D4lgA2BL.js";import"./stop-BQ1Kv2It.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-DfgvrTTO.js";import"./slim-arrow-down-wv1cGsxv.js";import"./slim-arrow-down-LYXn27gh.js";import"./index-BskjQHhS.js";import"./index-CaVTw43x.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
