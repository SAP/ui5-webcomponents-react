import{j as t}from"./useIsomorphicLayoutEffect-BDy32gDd.js";import{useMDXComponents as d}from"./index-D3szj05g.js";import{A as o}from"./ArgTypesWithNote-Cy60-qV-.js";import{C as l}from"./ControlsWithNote-WHJ8UGmH.js";import{D as c}from"./DocsHeader-CzxmL00j.js";import{F as h}from"./CommandsAndQueries-C5gTxcCb.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,d as T,D as m}from"./index-BP0tp6sA.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-lYPukGe2.js";import"./index-CpjS3nZJ.js";import"./iframe-BFVv-vsm.js";import"../sb-preview/runtime.js";import"./withWebComponent--2-UXDGX.js";import"./utils-DLW1sA5D.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-d4QydjzH.js";import"./decline-D1QcXBrl.js";import"./Icon-uF1AIezb.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BflNsp1k.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-DOrNCQ6l.js";import"./alert-RJboOX4N.js";import"./class-map-Oct9Grst.js";import"./Button-BSGOQMBD.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-CY90T2oA.js";import"./TagDesign-Dou_yO3g.js";import"./index-C3ZJCerc.js";import"./utils-C6QUo0aU.js";import"./main-BPTHlokf.js";import"./index-CglwtmF8.js";import"./Tag-BGV0RLgG.js";import"./sys-help-2-Ceay95o3.js";import"./index-XjkuyiAR.js";import"./Popover-CQErUPF9.js";import"./PopupsCommon.css-C72k6bm-.js";import"./getEffectiveScrollbarStyle-Br73qKwi.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-rKzABZ14.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-BuvIaMNd.js";import"./style-map-_S7pHwug.js";import"./BrowserScrollbar.css-BWLGETwt.js";import"./index-BbSxE2we.js";import"./Link-Mzj3wSV5.js";import"./chunk-HLWAVYOI-D6tgB48h.js";import"./client-B23sEKGq.js";import"./copy-C5fIvxWD.js";import"./copy-9e4iEp3h.js";import"./index-DG6x88aM.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Dw38joME.js";import"./index-CwK4hzKA.js";import"./I18nStore-DDVmdcy1.js";import"./GitHub-Mark-9wNGlhWh.js";import"./TableOfContent-D-B3MH3e.js";import"./index-CBSnUv2F.js";import"./Label-BByfo__S.js";import"./index-B1dq4JQQ.js";import"./index-9-KpZ2S6.js";import"./addCustomCSSWithScoping-BAXItpVh.js";import"./index-CYSz5_f-.js";import"./BusyIndicator-B3EKab9f.js";import"./index-BJJQOsHG.js";import"./index-BpYnUsLx.js";import"./Avatar-CILPVfd6.js";import"./employee-WB48gXgq.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./List-DfSjWr-c.js";import"./ItemNavigation-Dx6wFulK.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-DsiM34Kk.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-qWOJFJ7_.js";import"./accept-B87gopI6.js";import"./slim-arrow-right-C0FsT4zj.js";import"./general-leave-request-BPDFPM1Z.js";import"./index-DCCBYBsb.js";import"./index-CyXbH6nV.js";import"./navigation-right-arrow-DnVQgQ9v.js";import"./navigation-down-arrow-DTdx30Jw.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
