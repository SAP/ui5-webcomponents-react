import{j as e,e as s}from"./iframe-BM9OIWQT.js";import{useMDXComponents as f}from"./index-BmDGYHRp.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-DGMiQa0Z.js";import"./Tag-Bg9SPuPk.js";import"./index-DdMY_iOX.js";import{C as u}from"./ControlsWithNote-jMhQcm0L.js";import{D as S}from"./DocsHeader-BkMyfoY7.js";import{F as v}from"./CommandsAndQueries-CxAAQY3-.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-1WGrXpxo.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-l3Bw0IhJ.js";import"./preload-helper-Ct5FWWRu.js";import"./information-Ofjl_yVD.js";import"./sys-enter-2-BDJ8zEGu.js";import"./alert-BRWAPDyh.js";import"./index-DEAaUqYT.js";import"./index-9kU-764p.js";import"./Link-D90fL3tj.js";import"./copy-CanxbKAr.js";import"./copy-C5RvIJ1i.js";import"./GitHub-Mark-CoBOY9LH.js";import"./TableOfContent-DDTzQYJ7.js";import"./index-9uui-4yc.js";import"./index-BFMSgsw3.js";import"./addCustomCSSWithScoping-DJtAPEon.js";import"./index-CLY-4HWK.js";import"./index-DnPpq_H3.js";import"./index-6r2kDh88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B4WbvrxN.js";import"./parameters-bundle.css-34zgZIqy.js";import"./Search-CkphHKOy.js";import"./Option-C3MxzwCu.js";import"./ListItemBaseTemplate-4FD8RdDt.js";import"./Select-BMZ7_MPl.js";import"./InvisibleMessage-B5HLZjpk.js";import"./slim-arrow-down-BTYV_0EQ.js";import"./slim-arrow-down-DZH9bZ7T.js";import"./ResponsivePopoverCommon.css-C06uDNZk.js";import"./ValueStateMessage.css-45247xTr.js";import"./search-CVNLuNpt.js";import"./Input-Dn5iQQwi.js";import"./Suggestions.css-D3BTSrmf.js";import"./SuggestionItem-9SkfTs2v.js";import"./i18n-defaults-Cjp7arcT.js";import"./Person-Bk5r7PMP.js";import"./index-ysk2H2x2.js";import"./less-DktO_gOV.js";import"./index-BdjAG-mJ.js";import"./ListItemStandard-CN3OLFlW.js";import"./ButtonBadge-DKOhLa23.js";import"./overflow-Do8RnhBa.js";import"./overflow-Cukj32OJ.js";const k=`## Design-Compliant Examples

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
