import{j as e,e as s}from"./iframe-Diowpvbi.js";import{useMDXComponents as f}from"./index-BQd2Q0Z3.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CoZBpVTI.js";import"./Tag-B0clkLGt.js";import"./index-D9YlVxTm.js";import{C as u}from"./ControlsWithNote-DRcGWIdC.js";import{D as S}from"./DocsHeader-B--p9QpE.js";import{F as v}from"./CommandsAndQueries-COPBvCoL.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-D8RGOg2V.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-D2mryYMQ.js";import"./preload-helper-D9Z9MdNV.js";import"./information-CDgRW97e.js";import"./sys-enter-2-DY02qdHz.js";import"./alert-BaFyoXY8.js";import"./index-B-BwEr1u.js";import"./index-CQR2h6vO.js";import"./Link-h6HOkbi0.js";import"./copy-CO2uSkVD.js";import"./copy-Cax_mWEs.js";import"./GitHub-Mark-BMoJ5fEk.js";import"./TableOfContent-DfKTIt_V.js";import"./index-1wgmtjtJ.js";import"./index-D0g3RjgB.js";import"./addCustomCSSWithScoping-BGpjw9gY.js";import"./index-B-dBAONH.js";import"./index-Ds6FKbjF.js";import"./index-xypPraOX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNWGtsu7.js";import"./parameters-bundle.css-34zgZIqy.js";import"./Search-DVPLCNiq.js";import"./Option-DiTkpXiW.js";import"./ListItemBaseTemplate-DEOdvJQ9.js";import"./Select-DkjN3zvd.js";import"./InvisibleMessage-BqM01yov.js";import"./slim-arrow-down-CAPvKWjl.js";import"./slim-arrow-down-BnLxEjYc.js";import"./ResponsivePopoverCommon.css-CASz0Dqp.js";import"./ValueStateMessage.css-Be7X1jMy.js";import"./search-Bon8eDg7.js";import"./Input-CkOt0B6i.js";import"./Suggestions.css-DfleazkQ.js";import"./SuggestionItem-D8-nCGsC.js";import"./i18n-defaults-Cjp7arcT.js";import"./Person-Bk5r7PMP.js";import"./index-CNOPEWpC.js";import"./less-C6xVAuZA.js";import"./index-BX2NXCPt.js";import"./ListItemStandard-BYhRCZSB.js";import"./ButtonBadge-BbeH4V0A.js";import"./overflow-DpyXsfjE.js";import"./overflow-Dy96NZDZ.js";const k=`## Design-Compliant Examples

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
