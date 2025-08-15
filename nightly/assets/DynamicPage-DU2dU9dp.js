import{j as e}from"./iframe-BxEu-xci.js";import{useMDXComponents as m}from"./index-DIpNHUFd.js";import{A as i}from"./ArgTypesWithNote-D7lkaH_7.js";import{C as p}from"./ControlsWithNote-CRd9VQnb.js";import{D as l}from"./DocsHeader-Dr9Ssyxo.js";import{F as g}from"./CommandsAndQueries-BL1k5Lab.js";import{M as u,C as r,a as f,D as s}from"./blocks-DPfoGqoC.js";import{C as o,D as a,S as x}from"./DynamicPage.stories-C5v_Bjwr.js";import{S as y}from"./SubcomponentsSection-BVy4lpQe.js";import{a as d,b as c}from"./index-vFCD9hHA.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BorC4J59.js";import"./information-BKw42Lxc.js";import"./sys-enter-2-BkwngAtf.js";import"./alert-DQ3naR-W.js";import"./Tag-BNi2hR4G.js";import"./index-zhC6_est.js";import"./index-CnHUdtnF.js";import"./Link-CkCyRMbi.js";import"./copy-C1-_5U69.js";import"./copy-byxAjSE6.js";import"./GitHub-Mark-CyAQ8h1x.js";import"./TableOfContent-B_Sk6ocw.js";import"./index-CFj32LYi.js";import"./index-CL8FjSwM.js";import"./addCustomCSSWithScoping-C3RRJQPN.js";import"./index-DSeLD822.js";import"./index-Dzht26Rp.js";import"./index-BV37wPbr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dYhLm2AL.js";import"./index-CKyJieRa.js";import"./query-CzSBusdE.js";import"./sort-descending-CFm0YXL_.js";import"./IconDesign-DXd8PPVF.js";import"./overflow-DZ4WZKUG.js";import"./BarDesign-0UK-o0dt.js";import"./full-screen-08YerDsi.js";import"./ThemingParameters-pyhX3s39.js";import"./index-RGLPGspT.js";import"./Bar-uGamGJM3.js";import"./index-Biiq3MIO.js";import"./index-CMUCHCGS.js";import"./ListItemStandard-DDZZwHz8.js";import"./slim-arrow-down-poKh_hcw.js";import"./slim-arrow-down-UD2Q1IDE.js";import"./index-BumSaUKr.js";import"./ToolbarButton-ByoepSUH.js";import"./overflow-uN77qsgH.js";import"./InvisibleMessage-CwUOjoUf.js";import"./slim-arrow-up-DKKfL8ne.js";import"./pushpin-on-DdOW8dKC.js";import"./ToggleButton-BnmaRB9r.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./i18n-defaults-Cjp7arcT.js";function h(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:o}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(n.h2,{id:"dynamicpage-with-sticky-subheaders",children:"DynamicPage with sticky subheaders"}),`
`,e.jsxs(n.p,{children:[`The DynamicPage currently doesn't support sticky subheaders out of the box.
This example shows how you could achieve this behavior by applying custom CSS and using a `,e.jsx(n.code,{children:"ResizeObserver"})," for measuring the header height."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," We only recommend applying custom CSS if the ",e.jsx(n.code,{children:"DynamicPage"})," is scrollable."]}),`
`,e.jsx(r,{of:x,sourceState:"none"}),`
`,e.jsx(n.p,{children:"These are the key points of this implementation:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Using the ",e.jsx(n.code,{children:"part"})," pseudo-element selector to set the ",e.jsx(n.code,{children:"fit-content"})," part to use ",e.jsx(n.code,{children:"position: static;"}),"."]}),`
`,e.jsxs(n.li,{children:["Adding a ",e.jsx(n.code,{children:"ResizeObserver"})," to measure the ",e.jsx(n.code,{children:"header"})," element inside the shadow root of the component."]}),`
`,e.jsxs(n.li,{children:["Waiting for the custom element to be defined and for the ",e.jsx(n.code,{children:"shadowRoot"})," to be populated."]}),`
`]}),`
`,e.jsx(n.h3,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.dynamicPageStickyContent::part(fit-content) {
  position: static;
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const useGetHeaderHeight = (dynamicPageRef: RefObject<DynamicPageDomRef & { shadowRoot: ShadowRoot }>) => {
  const [headerHeight, setHeaderHeight] = useState<undefined | number>(undefined);
  useEffect(() => {
    const headerObserver = new ResizeObserver(([header]) => {
      setHeaderHeight(header.contentRect.height);
    });
    if (dynamicPageRef.current) {
      // wait for the custom element to be defined (adjust the tag-name if you're using the scoping feature)
      void customElements.whenDefined('ui5-dynamic-page').then(() => {
        const { shadowRoot } = dynamicPageRef.current;

        // wait for the shadowRoot to be populated
        const shadowRootObserver = new MutationObserver(() => {
          const header = shadowRoot.querySelector('header');
          if (header) {
            shadowRootObserver.disconnect();
            headerObserver.observe(header);
          }
        });

        if (shadowRoot && shadowRoot.childElementCount) {
          headerObserver.observe(shadowRoot.querySelector('header'));
        } else {
          shadowRootObserver.observe(shadowRoot, { childList: true });
        }
      });
    }
    return () => {
      headerObserver.disconnect();
    };
  }, []);
  return headerHeight;
};

function DynamicPageWithStickyContent(props) {
  const dynamicPageRef = useRef<DynamicPageDomRef & { shadowRoot: ShadowRoot }>(null);
  const headerHeight = useGetHeaderHeight(dynamicPageRef);

  return (
    <DynamicPage {...props} ref={dynamicPageRef} className="dynamicPageStickyContent">
      <>
        <div
          style={{
            position: 'sticky',
            width: '100%',
            height: '4rem',
            background: 'lightgreen',
            insetBlockStart: \`\${headerHeight}px\`
          }}
        >
          Sticky Header
        </div>
        <div style={{ width: '100%', background: 'orange', height: '10rem' }}>Content</div>
        <div
          style={{
            position: 'sticky',
            width: '100%',
            height: '8rem',
            background: 'lightgreen',
            insetBlockStart: \`calc(\${headerHeight}px + 4rem)\`
          }}
        >
          Sticky Header 2
        </div>
        <div style={{ background: 'lightblue', height: '2000px', width: '100%' }}>Content</div>
      </>
    </DynamicPage>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"opening-popover-components-by-pressing-an-action",children:"Opening popover components by pressing an action"}),`
`,e.jsxs(n.p,{children:["Please see the ",e.jsx(n.a,{href:"?path=/docs/layouts-floorplans-toolbar--docs#open-popovers-with-toolbarbutton",children:"Docs"})," of the ",e.jsx(n.code,{children:"Toolbar"})," component."]}),`
`,e.jsx(f,{children:y}),`
`,e.jsx(n.h2,{id:"dynamicpageheader",children:"DynamicPageHeader"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(i,{metaOf:o,of:d}),`
`,e.jsx(n.h2,{id:"dynamicpagetitle",children:"DynamicPageTitle"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(i,{metaOf:o,of:c}),`
`,e.jsx(g,{})]})}function be(t={}){const{wrapper:n}={...m(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(h,{...t})}):h(t)}export{be as default};
