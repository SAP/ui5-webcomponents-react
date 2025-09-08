import{j as e,e as s}from"./iframe-CGUWa3l5.js";import{useMDXComponents as f}from"./index-Cg9cAKJC.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-C0vLrpaE.js";import"./Tag-BIHZtDOF.js";import"./index-CL_zuYv3.js";import{C as u}from"./ControlsWithNote-CLRZIdA4.js";import{D as S}from"./DocsHeader-bLXXKsa0.js";import{F as v}from"./CommandsAndQueries-D9MoTrLH.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-EWvcMkrR.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-CpibEreJ.js";import"./preload-helper-D9Z9MdNV.js";import"./information-gqQAsN3Y.js";import"./sys-enter-2-CDAeFjyO.js";import"./alert-ClZlqLU4.js";import"./index-DVv4DYKP.js";import"./index-Be3QtdR7.js";import"./Link-0YCTvvlv.js";import"./copy-CqMmNhIc.js";import"./copy-WtCMvp6x.js";import"./GitHub-Mark-r0BUaYbl.js";import"./TableOfContent-BXgVIGFG.js";import"./index-BsFrl4mG.js";import"./index-Dagge6tW.js";import"./addCustomCSSWithScoping-C_LLLVaV.js";import"./index-M2L2LSTo.js";import"./index-G9i70mAv.js";import"./index-CqG7yhFq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmz3vIHQ.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./Search-Cc1N-dZY.js";import"./Option-KkRC9zkJ.js";import"./ListItemBaseTemplate-DPo3rTK0.js";import"./Select-DqU7IOqL.js";import"./InvisibleMessage-DsoM_md7.js";import"./slim-arrow-down-C2D4hy1c.js";import"./slim-arrow-down-DTV0qdqM.js";import"./ResponsivePopoverCommon.css-BEg546Rm.js";import"./ValueStateMessage.css-2dCo7gv0.js";import"./search-lKDBaYMG.js";import"./Input-D6uk9j64.js";import"./Suggestions.css-BzuWn3c7.js";import"./SuggestionItem-B72aMk-1.js";import"./i18n-defaults-BS8OTJAB.js";import"./Person-Bk5r7PMP.js";import"./index-buTEIynB.js";import"./less-CKtxa6cj.js";import"./index-Cc2jQ_K2.js";import"./ListItemStandard-ZmC8AzlV.js";import"./ButtonBadge-CF2cSoke.js";import"./overflow-DXL8cPmE.js";import"./overflow-Q3TDcKuD.js";const k=`## Design-Compliant Examples

These examples demonstrate the implementation of design specifications. They primarily illustrate design concepts and mostly do not provide additional functionality. You can reference them to select the appropriate design patterns.
`;function x(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...f(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:d}),`
`,e.jsx(S,{of:d,since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(u,{of:h}),`
`,e.jsx(a,{children:k}),`
`,e.jsx(n.h3,{id:"all-features",children:"All Features"}),`
`,e.jsx(n.p,{children:"A comprehensive ShellBar demonstrating all available features including notifications, search, content items, and profile."}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"embedded-back-navigation",children:"Embedded Back Navigation"}),`
`,e.jsx(n.p,{children:"ShellBar with embedded back navigation button in the start area."}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(n.h3,{id:"trial-example",children:"Trial Example"}),`
`,e.jsx(n.p,{children:"ShellBar configured for trial environments with trial tags and remaining days indicator."}),`
`,e.jsx(r,{of:P}),`
`,e.jsx(n.h3,{id:"multiple-productive-instances",children:"Multiple Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple productive system instances with region indicators."}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h3,{id:"multiple-non-productive-instances",children:"Multiple Non-Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple non-productive system instances with system and region tags."}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"open-a-popover-on-shellbaritem-click",children:"Open a Popover on ShellBarItem click"}),`
`,e.jsxs(n.p,{children:["To open a popover with the ",e.jsx(n.code,{children:"ShellBarItem"})," you can use the ",e.jsx(n.code,{children:"detail.targetRef"})," property of the ",e.jsx(n.code,{children:"onClick"})," event."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const ShellBarComponent = () => {
  const popoverRef = useRef<PopoverDomRef>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const handleShellBarItemClick: ShellBarItemPropTypes['onClick'] = (e) => {
    popoverRef.current!.opener = e.detail.targetRef;
    setPopoverOpen(true);
  };
  return (
    <>
      <ShellBar>
        <ShellBarItem onClick={handleShellBarItemClick} icon="add" text="add" />
      </ShellBar>
      <Popover
        ref={popoverRef}
        open={popoverOpen}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Hello there!
      </Popover>
    </>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"shellbar-with-shellbarbranding-slot",children:"ShellBar with ShellBarBranding slot"}),`
`,e.jsx(r,{of:M}),`
`,e.jsx(a,{children:B}),`
`,e.jsx(n.h2,{id:"shellbaritem",children:"ShellBarItem"}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:l}),`
`,e.jsx(n.h2,{id:"shellbarspacer",children:"ShellBarSpacer"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:p}),`
`,e.jsx(n.h2,{id:"shellbarsearch-experimental",children:"ShellBarSearch (experimental)"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:m}),`
`,e.jsx(n.h2,{id:"shellbarbranding-experimental",children:"ShellBarBranding (experimental)"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:c}),`
`,e.jsx(v,{})]})}function ke(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{ke as default};
