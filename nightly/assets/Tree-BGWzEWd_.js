import{j as t}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{useMDXComponents as d}from"./index-BrB9znxi.js";import{A as o}from"./ArgTypesWithNote-bLPDsTmT.js";import{C as l}from"./ControlsWithNote-D2wkgvq3.js";import{D as c}from"./DocsHeader-B64LSbjU.js";import{F as h}from"./CommandsAndQueries-CAnyFPkm.js";import"./index-CMKoANNR.js";import"./WrappingType-CW8URInd.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{ae as j,af as i,ag as T,ah as m}from"./index-Bn8zN0Sq.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-BsDdGveH.js";import"./index-B2vAurCE.js";import"./iframe-CtsffICr.js";import"../sb-preview/runtime.js";import"./withWebComponent-jpg_vyBt.js";import"./utils-C0V6LSSR.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DPK5r4a0.js";import"./decline-Rp8-5Vp_.js";import"./Icon-B5H_Qdfl.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B9JyKzKH.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-kkRN0naJ.js";import"./alert-Ddwvrqce.js";import"./class-map-q_nw4FEx.js";import"./Button-Cy3a2-vH.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-Cg7KCFas.js";import"./TagDesign-Dou_yO3g.js";import"./index-CJugYjqS.js";import"./utils-IhHJiS7C.js";import"./main-BPTHlokf.js";import"./index-Cmcqf4Ux.js";import"./Tag-ByGdD5E9.js";import"./sys-help-2-DRBnStTE.js";import"./index-BGYPT_ul.js";import"./Popover-CjvsUr2f.js";import"./PopupsCommon.css-B-WhbPRf.js";import"./getEffectiveScrollbarStyle-Evs_ZBOP.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Dgi63idk.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-B_F0QOq3.js";import"./style-map-CGyh7Z7B.js";import"./BrowserScrollbar.css-BArmuj4M.js";import"./index-S_Fukng6.js";import"./Link-BFdl-cjb.js";import"./chunk-HLWAVYOI-DPLa7-VG.js";import"./client-DpDvupH-.js";import"./copy-D-5m-XxV.js";import"./copy-CSph0-JP.js";import"./index-DNwR1bnO.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BdPJGR6W.js";import"./index-BxQBxwRK.js";import"./I18nStore-B9ZCcbUP.js";import"./GitHub-Mark-DCDQJZl8.js";import"./TableOfContent-DYSF1A7E.js";import"./index-DARdDMho.js";import"./Label-4K9rAZXv.js";import"./index-BG-h_Kqf.js";import"./index-B2DesxhQ.js";import"./addCustomCSSWithScoping-C-29J_EE.js";import"./index-KsoA1c5h.js";import"./BusyIndicator-CE507Ogo.js";import"./index-BBTbE-GF.js";import"./index-ChnQk1Dh.js";import"./Avatar-TQEHR9dU.js";import"./employee-DEw0oR1K.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./_baseAssignValue-680W1HJy.js";import"./_getPrototype-CvhAe9S0.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./List-DMrBO1tG.js";import"./ItemNavigation-BZ1ENz4i.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-GsXsCP0A.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-9HfGUo9N.js";import"./accept-BJbC2y1u.js";import"./slim-arrow-right-Crkvsuh7.js";import"./general-leave-request-DUtuGKga.js";import"./index-DfA1pZxT.js";import"./index-JnRwLhFI.js";import"./navigation-right-arrow-DTbBS5vv.js";import"./navigation-down-arrow-DeltRfJY.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
