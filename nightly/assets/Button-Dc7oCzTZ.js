import{j as e,e as m}from"./iframe-C5HYk_w9.js";import{useMDXComponents as a}from"./index-NAtY6U9A.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-C9zU_CnO.js";import{A as d}from"./ArgTypesWithNote--HDfkprY.js";import{C as f}from"./ControlsWithNote-D85sRsQV.js";import{D as M}from"./DocsHeader-j2xomDQy.js";import{F as I}from"./CommandsAndQueries-D55ZIYIG.js";import{C as o,D as r,B as i}from"./Button.stories-CYkEGItT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DDk7xvH6.js";import"./information-CZ-iBUXB.js";import"./sys-enter-2-Dq_SL8zM.js";import"./alert-D8SJwSxQ.js";import"./Tag-B9SFZhnL.js";import"./index-BrZnxm7s.js";import"./index-KbHDLtpi.js";import"./Link-B-N5NiBa.js";import"./copy-fXr871V-.js";import"./copy-C5SWnutv.js";import"./GitHub-Mark-Dm-NBxFc.js";import"./TableOfContent-DsGDxpKI.js";import"./index-LTyOz7tz.js";import"./index-G9j5f01x.js";import"./addCustomCSSWithScoping-BFQWIBF3.js";import"./index-CFd9-fPm.js";import"./index-DSpr5FZx.js";import"./index-CO2rizW7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfasPfI1.js";import"./ai-DSygkNnk.js";import"./ai-C9N4soY-.js";import"./navigation-down-arrow-hy_35llr.js";import"./stop-DvQ60Muq.js";import"./query-DOGTENGM.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-_KgztMMd.js";import"./slim-arrow-down-CWrkxAdp.js";import"./slim-arrow-down-CBehnyc2.js";import"./index-BNU9hzFS.js";import"./index-DTam1UnX.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
