import{j as e,e as m}from"./iframe-BCRKbB-F.js";import{useMDXComponents as a}from"./index-BX-rGI6y.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-7Z_E6jI9.js";import{A as d}from"./ArgTypesWithNote-IjngABwd.js";import{C as f}from"./ControlsWithNote-CZlmxkvK.js";import{D as M}from"./DocsHeader-oxYn0Q0e.js";import{F as I}from"./CommandsAndQueries-B-6PqVJi.js";import{C as o,D as r,B as i}from"./Button.stories-KMs9J8-n.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D-3HueK4.js";import"./information-DeBw_tQ-.js";import"./sys-enter-2-pSQieqxz.js";import"./alert-xw5ZZb5l.js";import"./Tag-DS_H74jk.js";import"./index-C9k5hi-S.js";import"./index-DsSU62b9.js";import"./Link-DusYvz_E.js";import"./copy-_UA8GWmu.js";import"./copy-B5cEq6fF.js";import"./GitHub-Mark-C2uv7FuH.js";import"./TableOfContent-DlQOflHd.js";import"./index-BH2JzlMl.js";import"./index-eqaCtQgG.js";import"./addCustomCSSWithScoping-DUsuu1QR.js";import"./index-Cfre80S4.js";import"./index-DNvh-56A.js";import"./index-K2GRSkK5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mh7-FWH-.js";import"./ai-DKbg95v3.js";import"./ai-4lPShq7t.js";import"./navigation-down-arrow-BKM0aIaY.js";import"./stop-C0nLtljt.js";import"./query-DOGTENGM.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-BKAzOq-I.js";import"./slim-arrow-down-COohbeSu.js";import"./slim-arrow-down-BPFD1Mj1.js";import"./index-CJecfYOd.js";import"./index-Dm8Awjge.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
