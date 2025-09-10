import{j as e,e as m}from"./iframe-113A6qfG.js";import{useMDXComponents as a}from"./index-PjC7U6K4.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-D_3UdGcb.js";import{A as d}from"./ArgTypesWithNote-pLrJ2i1I.js";import{C as f}from"./ControlsWithNote-CbvkaQYM.js";import{D as M}from"./DocsHeader-CU4w8qUD.js";import{F as I}from"./CommandsAndQueries-Bg85p3au.js";import{C as o,D as r,B as i}from"./Button.stories-C1SfLsoC.js";import"./preload-helper-D9Z9MdNV.js";import"./index-B2xOcofc.js";import"./information-DODfC2QB.js";import"./sys-enter-2-CVSv3UIQ.js";import"./alert-UNIiqPMX.js";import"./Tag-DaeygpfO.js";import"./index-CWWoZsv-.js";import"./index-AaWwOR4U.js";import"./Link-BPx9Yymb.js";import"./copy-D_4mWOai.js";import"./copy-CcIFyCHE.js";import"./GitHub-Mark-ChlT5k1t.js";import"./TableOfContent-DMFIwU4z.js";import"./index-CcdliY9D.js";import"./index-CnEBtXKD.js";import"./addCustomCSSWithScoping-x2rA9FdH.js";import"./index-BwzRPfoc.js";import"./index-DPN0DnRR.js";import"./index-nQhhjHf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-4PiXj7.js";import"./ai-DojyQk7N.js";import"./ai-Gn83l7CH.js";import"./navigation-down-arrow-YzBoi4OT.js";import"./stop-C1VK2JW5.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-Dbsv4RZd.js";import"./slim-arrow-down-2De9z3rU.js";import"./slim-arrow-down-DZJ_GP1k.js";import"./index-VXFZYeH6.js";import"./index-CrbrY0Do.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
