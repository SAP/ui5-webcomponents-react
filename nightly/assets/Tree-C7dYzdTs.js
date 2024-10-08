import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as d}from"./index-CcnH5Kt0.js";import{A as o}from"./ArgTypesWithNote-B7TIIERP.js";import{C as l}from"./ControlsWithNote-BVxdWhDs.js";import{D as c}from"./DocsHeader-BCQ8ZVzA.js";import{F as h}from"./CommandsAndQueries-D0a4p_gh.js";import"./index-BFWus7dV.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-Bw4-azjR.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{ae as j,af as i,ag as T,ai as m}from"./index-Bnrwa5-0.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-B0Gc_KcX.js";import"./index-CYMmuDNo.js";import"./withWebComponent-wFYtA7If.js";import"./utils-U7G133b4.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-C0oweRvl.js";import"./Icon-BcSHg7oQ.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-BGBEnzgc.js";import"./alert-2Fjq9UKP.js";import"./class-map-B9XgGk97.js";import"./Button-KM4-V0NS.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cyb-S5u3.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./index-sbqOYYIm.js";import"./utils-C0qqoGYl.js";import"./main-r7D-Vqmb.js";import"./index-BzJgpzCi.js";import"./Tag-Bu1O2kVJ.js";import"./sys-help-2-W_np5NtH.js";import"./index-ax0weve5.js";import"./Popover-C5qlK_nP.js";import"./PopupsCommon.css-C_WF48EP.js";import"./FocusableElements-BIj5ki0J.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CTXj7VRO.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BvbZz5j6.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CDY2pqSn.js";import"./Link-0XT9hN4f.js";import"./chunk-NUUEMKO5-BHeIknDV.js";import"./iframe-Ab05dSaX.js";import"../sb-preview/runtime.js";import"./client-BzooOYO_.js";import"./copy-7GRBkhIV.js";import"./copy-lw60TSjb.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DBMEQ9W3.js";import"./index-N3aXTj11.js";import"./I18nStore-CIizPkd0.js";import"./useStylesheet-DPBS0l4j.js";import"./index-GDTSF2Z6.js";import"./index-BV7383_0.js";import"./Label-C5_omeHE.js";import"./index-DDTf4_9s.js";import"./index-B3JK_dxj.js";import"./addCustomCSSWithScoping-Dz0L6MFE.js";import"./index-BdtzyfaT.js";import"./BusyIndicator-Blb6RTs2.js";import"./index-DMEGOjSg.js";import"./index-CDIA3NMf.js";import"./Avatar-qMkK7jki.js";import"./employee-DAjWhiTf.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./List-Dx4Hcm_o.js";import"./ItemNavigation-B3YJmLhv.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-BNPIs62B.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-HDy9tGTA.js";import"./accept-DWqszFD7.js";import"./slim-arrow-right-C_RUE-4M.js";import"./general-leave-request-vG0cJu4i.js";import"./index-nPVVzyH9.js";import"./index-5LNODdy_.js";import"./navigation-right-arrow-BmegpMWu.js";import"./navigation-down-arrow-5mnpasmo.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
