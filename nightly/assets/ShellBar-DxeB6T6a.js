import{j as e,e as s}from"./iframe-DXDeCCXH.js";import{useMDXComponents as f}from"./index-BVVJ9Xmn.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BG5MO-vk.js";import"./Tag-DzUeer7g.js";import"./index-BpNq_jfs.js";import{C as u}from"./ControlsWithNote-hJ8WC7xW.js";import{D as S}from"./DocsHeader-1wDTrNBL.js";import{F as v}from"./CommandsAndQueries-Dq5DBaAz.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,a as p,b as m}from"./sys-help-DKqtQFVq.js";import{C as c,D as d,A as g,E as b,T as P,P as C,N as y,S as M,a as h}from"./ShellBar.stories-BvC4zZ8G.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BWB8PmSI.js";import"./sys-enter-2-DsdlSsi2.js";import"./alert-DDgM_rg5.js";import"./index-CtGW4gqB.js";import"./index-DVXfqmRM.js";import"./Link-BdCp1PFu.js";import"./copy-Bp4cxNkh.js";import"./copy-WTqS65ha.js";import"./GitHub-Mark-DJyWkpqr.js";import"./TableOfContent-Cw9to3Gb.js";import"./index-Dr41l3ov.js";import"./index-B35aGJp7.js";import"./addCustomCSSWithScoping-pbauK9ix.js";import"./index-0UOQT5j_.js";import"./index-CgbMOzL5.js";import"./index-BBizv3Sp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DAjsaoK3.js";import"./Search-DliOYDE9.js";import"./Option-fRgebOG_.js";import"./ListItemBaseTemplate-hEZgOtsu.js";import"./Select-l_bkPr5Y.js";import"./InvisibleMessage-NggmVjf-.js";import"./slim-arrow-down-CckH6L3O.js";import"./slim-arrow-down-DvqwO1-7.js";import"./ResponsivePopoverCommon.css-OCxrxVe7.js";import"./ValueStateMessage.css-DPy1qgQz.js";import"./search-CNLpCb0m.js";import"./Input-DT5a2INw.js";import"./Suggestions.css-I2XPtCpK.js";import"./SuggestionItem-R5703Eet.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./i18n-defaults-dyGKyNAh.js";import"./Person-Bk5r7PMP.js";import"./index-NB_80aDw.js";import"./less-C0O3--Il.js";import"./index-CuO6RMQG.js";import"./ListItemStandard-B6LXITg6.js";import"./ButtonBadge-CB2greoT.js";import"./overflow-D-8mxgIx.js";import"./overflow-BA0Yh05n.js";const k=`## Design-Compliant Examples

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
