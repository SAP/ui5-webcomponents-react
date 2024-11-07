import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as d}from"./index-CcnH5Kt0.js";import{A as o}from"./ArgTypesWithNote-DflsPjAJ.js";import{C as l}from"./ControlsWithNote-VyGZNHE2.js";import{D as c}from"./DocsHeader-D2gSJb13.js";import{F as h}from"./CommandsAndQueries-DxYs4yww.js";import"./index-COBIehfD.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-acGyIFev.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{ae as j,af as i,ag as T,ai as m}from"./index-C_MvBP8p.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-EYcfxU5h.js";import"./index-D9yJfDXX.js";import"./withWebComponent-v3aPz19k.js";import"./utils-BWMMwCMQ.js";import"./useIsomorphicLayoutEffect-yry-y2Q-.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-m373cvJP.js";import"./Icon-Bq3V4Dpj.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-BZEj3R5z.js";import"./alert-C_n2K4SQ.js";import"./class-map-CH6JYcvP.js";import"./Button-BOw4gYNT.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BxgbG8pQ.js";import"./i18n-defaults-CMHHS2wK.js";import"./TagDesign-Dou_yO3g.js";import"./index-sbqOYYIm.js";import"./utils-DZvVN-p9.js";import"./main-Dcm2jhNK.js";import"./index-le1LDJU4.js";import"./Tag-C2md_B1U.js";import"./sys-help-2-SBEgXGVK.js";import"./index-ziIcWBHz.js";import"./Popover-DNjdezPs.js";import"./PopupsCommon.css-WLQXQ1BG.js";import"./FocusableElements-CvTAVvdZ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-40ebLclU.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D4Rgk784.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CUAyzcJr.js";import"./Link-CaNG8aKk.js";import"./chunk-NUUEMKO5-DlqzRb9u.js";import"./iframe-ClSon6AU.js";import"../sb-preview/runtime.js";import"./client-BzooOYO_.js";import"./copy-D2YPqkc4.js";import"./copy-C9H6Zlih.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-TNI-4ed_.js";import"./index-BW9_6GnZ.js";import"./I18nStore-C5VicRCB.js";import"./useStylesheet-BXpvj2j9.js";import"./index-DmoPyW9s.js";import"./index-D5soTVf3.js";import"./Label-DdUk4dNr.js";import"./index-DYGApiRr.js";import"./index-jVoXpPWr.js";import"./addCustomCSSWithScoping-BWTAHsoK.js";import"./index-X9t538J9.js";import"./BusyIndicator-FUNbKGLu.js";import"./index-CkXQ_HSf.js";import"./index-BRIQar7A.js";import"./Avatar-cCdUUE_c.js";import"./employee-CICz8oty.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./List-CVE8axbO.js";import"./ItemNavigation-Cpw3mMvK.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-VoJW4GtG.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-DKa-BKsy.js";import"./accept-BLyty2Fr.js";import"./slim-arrow-right-Dax12esc.js";import"./general-leave-request-T-6q-t9G.js";import"./index-BSG3jsMu.js";import"./index-DowKepYt.js";import"./navigation-right-arrow-BZS6aijN.js";import"./navigation-down-arrow-D_RUrFbJ.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
