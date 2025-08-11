import{j as n}from"./iframe-DwijkcSC.js";import{useMDXComponents as i}from"./index-dOTQ_8MY.js";import{M as p,C as c}from"./blocks-CUT7ZaGY.js";import"./Tag-Bj54Z3ZV.js";import"./index-Ksk45rXz.js";import{C as a}from"./ControlsWithNote-BmSkHN0c.js";import{D as m}from"./DocsHeader-DyyQoh0O.js";import{F as h}from"./CommandsAndQueries-v2kYi8f6.js";import{C as o,D as r}from"./ActionSheet.stories-CfDGQVsw.js";import"./preload-helper-Dp1pzeXC.js";import"./information-Cs7yxtQc.js";import"./sys-enter-2-DBwV2-51.js";import"./alert-CIuF-VCg.js";import"./index-4CSwoMco.js";import"./index-BFAcwmrh.js";import"./Link-Dpz_tLr_.js";import"./copy-MJNwXVZZ.js";import"./copy-BSROPq_0.js";import"./GitHub-Mark-1fwyJuBu.js";import"./TableOfContent-B_Zj5Anf.js";import"./index-ctat__wp.js";import"./index-DBJu9cre.js";import"./addCustomCSSWithScoping-ZjminMO8.js";import"./index-CKKCTLM1.js";import"./index-BMZXXiof.js";import"./index-g3CDhi_p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMYwIgDk.js";import"./delete-aAHersLJ.js";import"./utils-DFydI20z.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
