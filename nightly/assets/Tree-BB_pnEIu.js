import{j as t}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{useMDXComponents as d}from"./index-BrB9znxi.js";import{A as o}from"./ArgTypesWithNote-C-kXjQAp.js";import{C as l}from"./ControlsWithNote-BJM9X-A4.js";import{D as c}from"./DocsHeader-DX8ckPdb.js";import{F as h}from"./CommandsAndQueries-CmLcGIj2.js";import"./index-CMKoANNR.js";import"./WrappingType-CW8URInd.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{ae as j,af as i,ag as T,ah as m}from"./index-DPu9uMAg.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-CTq9PF31.js";import"./index-D9mSLAO6.js";import"./iframe-KLsYqwp3.js";import"../sb-preview/runtime.js";import"./withWebComponent-BbgN5sxI.js";import"./utils-B91Jjtng.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CwTDKhhX.js";import"./decline-CRs0CuFn.js";import"./Icon-ClAYWRjo.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BJMHgp7g.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-DxOUV61z.js";import"./alert-QN-C0-di.js";import"./class-map-DWnotN9Q.js";import"./Button-cuQy5RCN.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-jWmICHmQ.js";import"./TagDesign-Dou_yO3g.js";import"./index-CJugYjqS.js";import"./utils-C3aJZCJa.js";import"./main-BPTHlokf.js";import"./index-irNJ6CSF.js";import"./Tag-DV5SP9Oh.js";import"./sys-help-2-Cu5M0nic.js";import"./index-DxuhKa6X.js";import"./Popover-CNg3OGLR.js";import"./PopupsCommon.css-F2oSnJih.js";import"./getEffectiveScrollbarStyle-BM2MSN9M.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DghOwUYf.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-RCwOVsWq.js";import"./style-map-D73I43XI.js";import"./BrowserScrollbar.css-CNIKbe81.js";import"./index-iGQiREFo.js";import"./Link-DDy4Rfx-.js";import"./chunk-HLWAVYOI-Coud5hri.js";import"./client-DpDvupH-.js";import"./copy-DTi-Y5PU.js";import"./copy-BYxOf-QH.js";import"./index-DNwR1bnO.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BdPJGR6W.js";import"./index-CGvbx4PR.js";import"./I18nStore-3tee64za.js";import"./GitHub-Mark-DCDQJZl8.js";import"./TableOfContent-DYSF1A7E.js";import"./index-DyjExw4T.js";import"./Label-B16HW9k1.js";import"./index-Bagfh5Ak.js";import"./index-BuE3DcMI.js";import"./addCustomCSSWithScoping-CgCJVuIw.js";import"./index-CQJpx1Dt.js";import"./BusyIndicator-DYwg6ta4.js";import"./index-DppNGE5g.js";import"./index-BunniqVh.js";import"./Avatar-Dkq5x8aO.js";import"./employee-bAM6jRYC.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./_baseAssignValue-680W1HJy.js";import"./_getPrototype-CvhAe9S0.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./List-BfZf_G4a.js";import"./ItemNavigation-k4sy1HLj.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-Cj5zcxD0.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-Dk6kQZ_w.js";import"./accept-DQ3e4AKx.js";import"./slim-arrow-right-WCG9hUY4.js";import"./general-leave-request-DEOqNNuo.js";import"./index-DAgnB0eB.js";import"./index-DqKD8PaR.js";import"./navigation-right-arrow-CM60g4mV.js";import"./navigation-down-arrow-CYc2v_gR.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
`,t.jsx(h,{})]})}function se(r={}){const{wrapper:e}={...d(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(a,{...r})}):a(r)}export{se as default};
