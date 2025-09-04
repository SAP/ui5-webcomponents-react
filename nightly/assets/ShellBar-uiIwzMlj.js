import{j as e,e as s}from"./iframe-S1rR11cQ.js";import{useMDXComponents as f}from"./index-69KsrxW4.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-C1kWdW5O.js";import"./Tag-Do4MK6Vd.js";import"./index-DjdMAx9G.js";import{C as u}from"./ControlsWithNote-CHK256Ms.js";import{D as S}from"./DocsHeader-DFJ6mRj_.js";import{F as v}from"./CommandsAndQueries-7fbj5dZq.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-DGPMsHG7.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-CYsXZ5GN.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DSpjDgSK.js";import"./information-C758TG9J.js";import"./sys-enter-2-Bxoe1Z_o.js";import"./alert-DLQYOv1s.js";import"./index-BO-Ud12y.js";import"./index-FsTu0RwH.js";import"./Link-BTk9MhA4.js";import"./copy-l8_6TPqW.js";import"./copy-DEUCxjzs.js";import"./GitHub-Mark-DiNZwmzT.js";import"./TableOfContent-Ckuc7xPL.js";import"./index-qWGPhuwe.js";import"./index-0zwvIbNd.js";import"./addCustomCSSWithScoping-B4lS8qF3.js";import"./index-BuHsyiL7.js";import"./index-PoS1N3ma.js";import"./index-R5oM6KDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cn53W7lk.js";import"./parameters-bundle.css-34zgZIqy.js";import"./Search-DgH42i3a.js";import"./Option-DYLlW_F-.js";import"./ListItemBaseTemplate-DYhywRSV.js";import"./Select-DG78L4ow.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-CRHbxhfI.js";import"./slim-arrow-down-DU0iuCt5.js";import"./ResponsivePopoverCommon.css-Dp9rYv_8.js";import"./ValueStateMessage.css-DP7y8aPL.js";import"./search-DXV4edpr.js";import"./Input-BFiJeabE.js";import"./Suggestions.css-Ci1w_A7X.js";import"./SuggestionItem-CT5TG_5O.js";import"./i18n-defaults-Cjp7arcT.js";import"./Person-Bk5r7PMP.js";import"./index-BlaWbJ4o.js";import"./less-B9DGg7Wi.js";import"./index-CQVRFZRB.js";import"./ListItemStandard-BbQSk8O2.js";import"./ButtonBadge-CbMG0eXl.js";import"./overflow-DHIsQXmn.js";import"./overflow-BmXRCN_Z.js";const k=`## Design-Compliant Examples

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
`,e.jsx(v,{})]})}function De(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{De as default};
