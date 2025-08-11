import{j as e,e as s}from"./iframe-DwijkcSC.js";import{useMDXComponents as f}from"./index-dOTQ_8MY.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CUT7ZaGY.js";import"./Tag-Bj54Z3ZV.js";import"./index-Ksk45rXz.js";import{C as u}from"./ControlsWithNote-BmSkHN0c.js";import{D as S}from"./DocsHeader-DyyQoh0O.js";import{F as v}from"./CommandsAndQueries-v2kYi8f6.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,a as p,b as m}from"./sys-help-DQCiFTzO.js";import{C as c,D as d,A as g,E as b,T as P,P as C,N as y,S as M,a as h}from"./ShellBar.stories-CjUXrKEg.js";import"./preload-helper-Dp1pzeXC.js";import"./information-Cs7yxtQc.js";import"./sys-enter-2-DBwV2-51.js";import"./alert-CIuF-VCg.js";import"./index-4CSwoMco.js";import"./index-BFAcwmrh.js";import"./Link-Dpz_tLr_.js";import"./copy-MJNwXVZZ.js";import"./copy-BSROPq_0.js";import"./GitHub-Mark-1fwyJuBu.js";import"./TableOfContent-B_Zj5Anf.js";import"./index-ctat__wp.js";import"./index-DBJu9cre.js";import"./addCustomCSSWithScoping-ZjminMO8.js";import"./index-CKKCTLM1.js";import"./index-BMZXXiof.js";import"./index-g3CDhi_p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMYwIgDk.js";import"./Search-BWGEITit.js";import"./Option-DpDZkHl8.js";import"./ListItemBaseTemplate-DfBjNLTN.js";import"./Select-D322pIg_.js";import"./InvisibleMessage-Bw88KNeA.js";import"./slim-arrow-down-BsLfN3xy.js";import"./slim-arrow-down-DVE3AHXn.js";import"./ResponsivePopoverCommon.css-B6grsBrr.js";import"./ValueStateMessage.css-Bqjq4SCl.js";import"./search-BpoEY7W9.js";import"./Input-Xke3BFuq.js";import"./Suggestions.css-Dr7vVlmc.js";import"./SuggestionItem-T5JUISxm.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./i18n-defaults-dyGKyNAh.js";import"./Person-Bk5r7PMP.js";import"./index-DH3dRYc9.js";import"./less-C5AydNP4.js";import"./index-njBTTssM.js";import"./ListItemStandard-BZEk89Tl.js";import"./ButtonBadge-ODjEuead.js";import"./overflow-wbj_qseK.js";import"./overflow-CNEcMQ-U.js";const k=`## Design-Compliant Examples

These examples demonstrate the implementation of design specifications. They primarily illustrate design concepts and mostly do not provide additional functionality. You can reference them to select the appropriate design patterns.
`;function x(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...f(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:c}),`
`,e.jsx(S,{of:c,since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(u,{of:d}),`
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
`,e.jsx(t,{of:h}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:h}),`
`,e.jsx(v,{})]})}function ke(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{ke as default};
