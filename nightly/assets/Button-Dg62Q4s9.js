import{j as e,e as m}from"./iframe-BGPLLWda.js";import{useMDXComponents as a}from"./index-CUo1Jk3b.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-indAdCXu.js";import{A as d}from"./ArgTypesWithNote-D1VuiuEb.js";import{C as f}from"./ControlsWithNote-DwWmOGGJ.js";import{D as M}from"./DocsHeader-D7mFShSZ.js";import{F as I}from"./CommandsAndQueries-CMwJiC-3.js";import{C as o,D as r,B as i}from"./Button.stories-CeZXcxdC.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DSpjDgSK.js";import"./index-CQHuRrhk.js";import"./information-CN6qajRX.js";import"./sys-enter-2-DEzg8GhV.js";import"./alert-CDWQg-Kt.js";import"./Tag-BJtvEZ6A.js";import"./index-BUzvoCUF.js";import"./index-DxdciquJ.js";import"./Link-7mG2PaxS.js";import"./copy-BRDDe_qs.js";import"./copy-BU9AAITa.js";import"./GitHub-Mark-DhRpczTj.js";import"./TableOfContent-JH4ytLq7.js";import"./index-BYQsmpt9.js";import"./index-DatG_EGp.js";import"./addCustomCSSWithScoping-C37q5SY_.js";import"./index-Bm9Gzw8H.js";import"./index-7SSPTye2.js";import"./index-DkEMFegB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bg9viRhL.js";import"./ai-DgR2_0ov.js";import"./ai-ByNXgbFW.js";import"./navigation-down-arrow-BxgwGxy_.js";import"./stop-CbT7L50V.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-HxS1iG04.js";import"./slim-arrow-down-CPLxRpFv.js";import"./slim-arrow-down-DMfTGr50.js";import"./index-BDQjTssu.js";import"./index-B4vVYxY5.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
