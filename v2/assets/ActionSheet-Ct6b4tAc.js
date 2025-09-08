import{j as n}from"./iframe-CGUWa3l5.js";import{useMDXComponents as i}from"./index-Cg9cAKJC.js";import{M as p,C as c}from"./blocks-C0vLrpaE.js";import"./Tag-BIHZtDOF.js";import"./index-CL_zuYv3.js";import{C as a}from"./ControlsWithNote-CLRZIdA4.js";import{D as m}from"./DocsHeader-bLXXKsa0.js";import{F as h}from"./CommandsAndQueries-D9MoTrLH.js";import{C as o,D as r}from"./ActionSheet.stories-CLBuuoqt.js";import"./preload-helper-D9Z9MdNV.js";import"./information-gqQAsN3Y.js";import"./sys-enter-2-CDAeFjyO.js";import"./alert-ClZlqLU4.js";import"./index-DVv4DYKP.js";import"./index-Be3QtdR7.js";import"./Link-0YCTvvlv.js";import"./copy-CqMmNhIc.js";import"./copy-WtCMvp6x.js";import"./GitHub-Mark-r0BUaYbl.js";import"./TableOfContent-BXgVIGFG.js";import"./index-BsFrl4mG.js";import"./index-Dagge6tW.js";import"./addCustomCSSWithScoping-C_LLLVaV.js";import"./index-M2L2LSTo.js";import"./index-G9i70mAv.js";import"./index-CqG7yhFq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmz3vIHQ.js";import"./delete-D8iOVq_P.js";import"./utils-Bvg3-Eiz.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
`,n.jsx(m,{of:o,subComponents:["Button"]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(c,{of:r}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(e.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,n.jsx("br",{}),`
`,n.jsxs(e.p,{children:["You can open and close the ",n.jsx(e.code,{children:"ActionSheet"})," component in a declarative way using the ",n.jsx(e.code,{children:"open"})," and ",n.jsx(e.code,{children:"opener"})," prop."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyComponentWithActionSheet = () => {
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openActionSheetBtn'}
        onClick={() => {
          setActionSheetIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <ActionSheet
        opener={'openActionSheetBtn'}
        open={actionSheetIsOpen}
        onClose={() => {
          setActionSheetIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Opening an ",n.jsx(e.code,{children:"ActionSheet"})," by reference"]})}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ActionSheet"})," exposes a way to pass a reference of an element instead of an ",n.jsx(e.code,{children:"id"})," to the ",n.jsx(e.code,{children:"opener"}),` prop.
You can do that by e.g. leveraging a React Ref.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={handleOpenerClick}>
        Opener
      </Button>
      <ActionSheet opener={buttonRef.current} open={open}>
        {/* Content */}
      </ActionSheet>
    </>
  );
};
`})}),`
`,n.jsx(h,{})]})}function P(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{P as default};
