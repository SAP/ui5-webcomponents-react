import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as d}from"./index-CcnH5Kt0.js";import{A as o}from"./ArgTypesWithNote-xXtAyc_0.js";import{C as l}from"./ControlsWithNote-DN8Mk5GF.js";import{D as c}from"./DocsHeader-BPgCBiR7.js";import{F as h}from"./CommandsAndQueries-DXxgvwaP.js";import"./index-CXDnUNW3.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CAqRFLM1.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{ae as j,af as i,ag as T,ai as m}from"./index-DYUEgzCx.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-yjiCmsfO.js";import"./index-D7Nv88Gg.js";import"./withWebComponent-BS26LpJo.js";import"./utils-4GUSeNxV.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BUZJrdsA.js";import"./decline-ChPQ5Vpc.js";import"./Icon-BwGmtu7y.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-C_Bqjk9j.js";import"./alert-qaECYIyO.js";import"./class-map-CcXho7vk.js";import"./Button-BoqZ1Nk6.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BJ6YdIbZ.js";import"./i18n-defaults-DyAOnJXW.js";import"./TagDesign-Dou_yO3g.js";import"./index-sbqOYYIm.js";import"./utils-BLg0lq3U.js";import"./main-C6oD7XT2.js";import"./index-CDPCSlUD.js";import"./Tag-C2WChDcP.js";import"./sys-help-2-KG0RzPfQ.js";import"./index-Je_4VAbv.js";import"./Popover-CC4eno7O.js";import"./PopupsCommon.css-D2k_TiiU.js";import"./FocusableElements-DE2dOMez.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CmgjED1E.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-DYOeniYq.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-B8rq_Cwn.js";import"./Link-DWmmrhq6.js";import"./chunk-NUUEMKO5-CGo8NPjk.js";import"./iframe-DnB_Sl9E.js";import"../sb-preview/runtime.js";import"./client-BzooOYO_.js";import"./copy-CLCnF9Ex.js";import"./copy-B8ijgEE_.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DBMEQ9W3.js";import"./index-1cuf08LB.js";import"./I18nStore-ZvXQBe85.js";import"./useStylesheet-CIcp3lSM.js";import"./index-Cn2MHtDd.js";import"./index-D5w6Jnaw.js";import"./Label-DeMESwab.js";import"./index-DOubndiy.js";import"./index-CHNB8-uH.js";import"./addCustomCSSWithScoping-nMrqEq1r.js";import"./index-DYrmYIPb.js";import"./BusyIndicator-DLv3RVXJ.js";import"./index-Z34fJdHI.js";import"./index-BNw2TIlH.js";import"./Avatar-D0wBket6.js";import"./employee-BnxYOghN.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./List-BLM_yTQc.js";import"./ItemNavigation-DY9WPMGj.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-roj2v4D7.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-Bh-hd90L.js";import"./accept-DENHAmCe.js";import"./slim-arrow-right-BNXaNlko.js";import"./general-leave-request-CXW9LogV.js";import"./index-ByWjnIRN.js";import"./index-WgZpfqk2.js";import"./navigation-right-arrow-BBaRQHpS.js";import"./navigation-down-arrow-CscLwpRT.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
`,t.jsx(c,{since:"0.10.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(i,{of:n}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:n}),`
`,t.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"lazy-load-treeitems",children:"Lazy Load TreeItems"}),`
`,t.jsx(i,{of:u}),`
`,t.jsx(e.h3,{id:"code",children:"Code"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const LazyLoadingTree = () => {
  const [lazyChildren, setLazyChildren] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleItemToggle = (e) => {
    if (e.detail.item.dataset.id === 'lazychildren' && !lazyChildren) {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setLazyChildren(
          <>
            <TreeItem text="Tree 3.1" />
            <TreeItem text="Tree 3.2" />
          </>
        );
        e.detail.item.toggle();
      }, 3000);
    }
  };
  return (
    <BusyIndicator active={loading} style={{ width: '100%' }}>
      <Tree onItemToggle={handleItemToggle}>
        <TreeItem text="Has pre-loaded children">
          <TreeItem text="Tree 1.1" />
          <TreeItem text="Tree 1.2" />
        </TreeItem>
        <TreeItem text="Has no children" />
        <TreeItem text="Has children but not yet loaded" hasChildren icon={dlCloutIcon} data-id="lazychildren">
          {lazyChildren}
        </TreeItem>
      </Tree>
    </BusyIndicator>
  );
};
`})}),`
`,t.jsx(T,{children:x}),`
`,t.jsx(e.h2,{id:"treeitem",children:"TreeItem"}),`
`,t.jsx(m,{of:p}),`
`,t.jsx(o,{of:p}),`
`,t.jsx(e.h2,{id:"treeitemcustom",children:"TreeItemCustom"}),`
`,t.jsx(m,{of:s}),`
`,t.jsx(o,{of:s}),`
`,t.jsx(h,{})]})}function pe(r={}){const{wrapper:e}={...d(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(a,{...r})}):a(r)}export{pe as default};
