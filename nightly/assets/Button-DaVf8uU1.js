import{j as e,e as m}from"./iframe-BbyAdBbD.js";import{useMDXComponents as a}from"./index-DMrgLDcS.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BmDzJ9zc.js";import{A as d}from"./ArgTypesWithNote-B_AmpCKK.js";import{C as f}from"./ControlsWithNote-OBGD-axJ.js";import{D as M}from"./DocsHeader-BeiEWE-i.js";import{F as I}from"./CommandsAndQueries-DIG7kTa0.js";import{C as o,D as r,B as i}from"./Button.stories-Xi-RZDMW.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BOJCW3Cn.js";import"./information-DKaoIqMf.js";import"./sys-enter-2-CKPkjpqY.js";import"./alert-D9XuLZDQ.js";import"./Tag-DFDkNEbD.js";import"./index-B8lW2Kcg.js";import"./index-B0_PQF5c.js";import"./Link-Dyaix8DR.js";import"./copy-DZVuyA5K.js";import"./copy-BF7pXxeM.js";import"./GitHub-Mark-BJZEaSEo.js";import"./TableOfContent-CIUFbz_I.js";import"./index-C8J3KSH2.js";import"./index-DoDw--JI.js";import"./addCustomCSSWithScoping-C5eZLuHk.js";import"./index-CzGjDUib.js";import"./index-uwT0wEXF.js";import"./index-DOb7Y-7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CPnL0edq.js";import"./ai-DgVH4f3f.js";import"./ai-CxN3qUfC.js";import"./navigation-down-arrow-BCp3Wl54.js";import"./stop-CRoAv8D5.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-CVYZEskw.js";import"./slim-arrow-down-Cx1RPm1s.js";import"./slim-arrow-down-B5KGIjFP.js";import"./index-DlkK5T87.js";import"./index-DGEAwp-5.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
