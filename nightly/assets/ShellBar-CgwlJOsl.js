import{j as e,e as s}from"./iframe-CS0WNVf3.js";import{useMDXComponents as f}from"./index-DDJWQvBk.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CKA1zSBc.js";import"./Tag-BP97hCxl.js";import"./index-DSXhn2lw.js";import{C as u}from"./ControlsWithNote-BQ2uotKo.js";import{D as S}from"./DocsHeader-D11tTFdv.js";import{F as v}from"./CommandsAndQueries-DZ6pwvzq.js";import"./WrappingType-BBpR8qCJ.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,a as p,b as m}from"./sys-help-fnG4FYNb.js";import{C as c,D as d,A as g,E as b,T as P,P as C,N as y,S as M,a as h}from"./ShellBar.stories-B2iV6ztu.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CvdaSHT3.js";import"./sys-enter-2-ySqjHw_c.js";import"./alert-Gh91-OFF.js";import"./index-CvNKNR4d.js";import"./index-BaMTSIaX.js";import"./Link-NB8Z-JgQ.js";import"./copy-JmzkmJ0Q.js";import"./copy-BAUFdAAv.js";import"./GitHub-Mark-7sJAyAvv.js";import"./TableOfContent-CIMB7FlB.js";import"./index-6Qc8M-Ay.js";import"./index-DF926y_l.js";import"./addCustomCSSWithScoping-C76Rlx9D.js";import"./index-DAA990cp.js";import"./index-CSbnywRm.js";import"./index-DDKfF0P0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSbnBFaN.js";import"./Search-CFdNXHvU.js";import"./Option-ndsoEHeD.js";import"./ListItemBaseTemplate-Bs0FUKcz.js";import"./Select-B8PsMZPZ.js";import"./InvisibleMessage-BLaLHaBV.js";import"./slim-arrow-down-B0zNzNFy.js";import"./slim-arrow-down-13yyQzi6.js";import"./ResponsivePopoverCommon.css-wgN2az89.js";import"./ValueStateMessage.css-2utQpejI.js";import"./search-Bc2Nz4fY.js";import"./Input-908QQXPy.js";import"./Suggestions.css-DCRjJQiV.js";import"./SuggestionItem-2mukNXq8.js";import"./parameters-bundle.css-BcDcM98N.js";import"./i18n-defaults-dyGKyNAh.js";import"./Person-Bk5r7PMP.js";import"./index-C46NzNVi.js";import"./less-DiQQu1Dh.js";import"./index-DWgPwV45.js";import"./ListItemStandard-BH1fH6pr.js";import"./ButtonBadge-BeVHCR2w.js";import"./overflow-MwxozSaj.js";import"./overflow-C5yG1y_w.js";const k=`## Design-Compliant Examples

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
`,e.jsx(v,{})]})}function De(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{De as default};
