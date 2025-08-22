import{j as o}from"./iframe-C6IJVCey.js";import{useMDXComponents as s}from"./index-Ds5KjzB0.js";import{M as i,C as m}from"./blocks-DeRnr9iF.js";import"./Tag-cnX1vvNU.js";import"./index-BUG7WGA1.js";import{C as c}from"./ControlsWithNote-BtPDnNM4.js";import{D as a}from"./DocsHeader-BJPbmgAK.js";import{F as d}from"./CommandsAndQueries-Bd9H39B6.js";import{C as r,D as t}from"./Popover.stories-DIDPwejL.js";import"./preload-helper-Ct5FWWRu.js";import"./information-DqbvobJ3.js";import"./sys-enter-2-DTDb_XUo.js";import"./alert-1QQg-aMK.js";import"./index-DmVW3kBm.js";import"./index-WUc2kbX8.js";import"./Link-B3ojWDNP.js";import"./copy-DIWsVONk.js";import"./copy-CbqLCcHM.js";import"./GitHub-Mark-BvzV3HVh.js";import"./TableOfContent-C68i5x5x.js";import"./index-BVcSPkXT.js";import"./index--LhHeSe7.js";import"./addCustomCSSWithScoping-DU4SAdPD.js";import"./index-Bud7zdyR.js";import"./index-DlMuD-u3.js";import"./index-42vsznvH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DogAS-dB.js";import"./settings-CaUhFBfT.js";import"./index-DoVpOxB3.js";import"./index-Bejl1epP.js";import"./ListItemStandard-gdtXb5F2.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <Popover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(d,{})]})}function A(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{A as default};
