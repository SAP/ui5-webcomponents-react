import{j as n}from"./iframe-BOVM1M_Q.js";import{useMDXComponents as i}from"./index-2SvYRCCw.js";import{M as p,C as c}from"./blocks-CrIALgP8.js";import"./Tag-66qvcRmY.js";import"./index-mxAgSE5r.js";import{C as a}from"./ControlsWithNote-YXdYNE8U.js";import{D as m}from"./DocsHeader-C_cgcxX0.js";import{F as h}from"./CommandsAndQueries-B0E3P6p2.js";import{C as o,D as r}from"./ActionSheet.stories-D-woZesB.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CZqrSqxM.js";import"./sys-enter-2-b3EDnzZS.js";import"./alert-sAHWg9Jt.js";import"./index-qyBhFjGo.js";import"./index-6YOnZJx5.js";import"./Link-BXYAhhKR.js";import"./copy-BcsqkCUV.js";import"./copy-DbyPBOXI.js";import"./GitHub-Mark-CtAK2XKn.js";import"./TableOfContent-DUvysCa7.js";import"./index-B2niMIbJ.js";import"./index-CmTbq6An.js";import"./addCustomCSSWithScoping-BosPxWiT.js";import"./index-u_WTLBYa.js";import"./index-Dc7kwzo6.js";import"./index-BK7Il_hf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzZbr1e8.js";import"./delete-CoWW_YJb.js";import"./utils-rXmyLz49.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
