import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as d}from"./index-BxVt_j7t.js";import{A as o}from"./ArgTypesWithNote-eBJOM9iA.js";import{C as l}from"./ControlsWithNote-CAZXNf15.js";import{D as c}from"./DocsHeader-BMqU_V-U.js";import{F as h}from"./CommandsAndQueries-D31p5OwQ.js";import"./index-BPJzqUWP.js";import"./index-B7gF9TUu.js";import"./WrappingType-CW8URInd.js";import"./Title-WNL10KUu.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{ae as j,af as i,ag as T,ai as m}from"./index-cxzMOS9T.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-Cwzi9z7f.js";import"./index-DK8f7i65.js";import"./withWebComponent-B0663feL.js";import"./utils-BHIgGaqO.js";import"./useIsomorphicLayoutEffect-DbLUS4-D.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-Dufzc9Ae.js";import"./Icon-DBJtwtpU.js";import"./Keys-CAuuEE_3.js";import"./parameters-bundle.css-DlWxkghp.js";import"./i18n-defaults-neJWcM66.js";import"./information-CILnO36f.js";import"./alert-Z1fiX1-e.js";import"./class-map-C6tyMXoZ.js";import"./Button-D9IHaDB-.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BP6vP6oY.js";import"./i18n-defaults-B_32hVC3.js";import"./TagDesign-Dou_yO3g.js";import"./index-CE_NGgsP.js";import"./utils-CTvIYPAQ.js";import"./main-BwlHOnYP.js";import"./index-DFb0YsWo.js";import"./Tag-BUVp9nj2.js";import"./sys-help-2-BiT1oqNK.js";import"./index-nTxbmOyz.js";import"./Popover-msUg67Np.js";import"./PopupsCommon.css-Dj0xrk9H.js";import"./FocusableElements-DTl1isII.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-xhBJDreD.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-uCTHCAWY.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-gaVbNe_i.js";import"./Link-CpBj26Uf.js";import"./chunk-NUUEMKO5-MZqtixhJ.js";import"./iframe-D7FdDdy7.js";import"../sb-preview/runtime.js";import"./client-DPlujwLe.js";import"./copy-BrFaHfmM.js";import"./copy-C_CjAe8T.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-D5efYGjp.js";import"./TableOfContent-DCqtbPc-.js";import"./index-BbzsynDn.js";import"./I18nStore-DX5SeKlm.js";import"./useStylesheet-BtUg4QTx.js";import"./index-CumkkaaF.js";import"./index-D_YacHjR.js";import"./Label-BoojAdgE.js";import"./index-nKNYXUv1.js";import"./index-DdEMrDoq.js";import"./Text-UwjpUK4f.js";import"./addCustomCSSWithScoping-DFGIdwgf.js";import"./index-dDGTlD2i.js";import"./BusyIndicator-12vkJL71.js";import"./index-BW6gfbnW.js";import"./index-WjQUaYT1.js";import"./Avatar-Z-ciJfNd.js";import"./employee-XwVnUoGs.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./List-UTsWhPBf.js";import"./ItemNavigation-Dt_dQ_rr.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-B9Z5o13N.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-C0P0Pf6G.js";import"./accept-B6Y7z-87.js";import"./slim-arrow-right-CK2xMMRt.js";import"./general-leave-request-DAXHX7L3.js";import"./index-buTGXv_N.js";import"./index-Q9xcn8Kh.js";import"./navigation-right-arrow-CAPQ13Dw.js";import"./navigation-down-arrow-BTQeRU4V.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
`,t.jsx(h,{})]})}function ne(r={}){const{wrapper:e}={...d(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(a,{...r})}):a(r)}export{ne as default};
