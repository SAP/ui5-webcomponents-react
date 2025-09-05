import{j as e,e as m}from"./iframe-DEht8tsT.js";import{useMDXComponents as a}from"./index-CHmvqmZV.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-B9eJfK2p.js";import{A as d}from"./ArgTypesWithNote-Cdt2AYQ3.js";import{C as f}from"./ControlsWithNote-9o3rXavj.js";import{D as M}from"./DocsHeader-CHi1snSz.js";import{F as I}from"./CommandsAndQueries-r7FFQXZn.js";import{C as o,D as r,B as i}from"./Button.stories-CPIrZnrJ.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DCXZOGva.js";import"./index-qqa4-hS-.js";import"./information-qGG1TAK7.js";import"./sys-enter-2-Wo80rP1Y.js";import"./alert-BsRJ2cl_.js";import"./Tag-Bo7VmRFf.js";import"./index-v8e_2LrN.js";import"./index-Dwyff0cB.js";import"./Link-DQiRK5OG.js";import"./copy-CMVPQJQP.js";import"./copy-DdxSmOcQ.js";import"./GitHub-Mark-swxpQ8aX.js";import"./TableOfContent-BBCeB6M5.js";import"./index-DLGND6CU.js";import"./index-Boj5J7Ot.js";import"./addCustomCSSWithScoping-BN-zHrab.js";import"./index-D0y5lDJX.js";import"./index--icAFx10.js";import"./index-BRdP8YZI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cl7xFzXJ.js";import"./ai-CGwZK6gh.js";import"./ai-DrNfuv1Q.js";import"./navigation-down-arrow-DpGvha-M.js";import"./stop-CyMpFPKt.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-Dx2xY3yS.js";import"./slim-arrow-down-c8qc4hiX.js";import"./slim-arrow-down-B6hMDuTF.js";import"./index-CWDiH7Lv.js";import"./index-fc4c5o9V.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
`,e.jsx(t.pre,{children:e.jsx(t.code,{})})]})}function se(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{se as default};
