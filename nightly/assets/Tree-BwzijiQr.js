import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as d}from"./index-BxVt_j7t.js";import{A as o}from"./ArgTypesWithNote-C6I5PBYh.js";import{C as l}from"./ControlsWithNote-DkPBA7y0.js";import{D as c}from"./DocsHeader-jL7QbK4i.js";import{F as h}from"./CommandsAndQueries-DF3aQ8ul.js";import"./index-BWzcqDfu.js";import"./index-B7gF9TUu.js";import"./WrappingType-CW8URInd.js";import"./Title-1rDkpSXf.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{ae as j,af as i,ag as T,ai as m}from"./index-CGiRmBTj.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-D3P2eO16.js";import"./index-C009Ii_l.js";import"./withWebComponent-CEvNJu7C.js";import"./utils-BPMdnTU-.js";import"./useIsomorphicLayoutEffect-BE7Iif4x.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-D0Sq_J--.js";import"./Icon-Cf72TZgw.js";import"./Keys-CAuuEE_3.js";import"./parameters-bundle.css-DY1ryZJt.js";import"./i18n-defaults-neJWcM66.js";import"./information-Dy9R6tRZ.js";import"./alert-C1M-4Vvc.js";import"./class-map-CFjQlWtw.js";import"./Button-C6xYvRbu.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-XZ46U0Ql.js";import"./i18n-defaults-DteWAmDn.js";import"./TagDesign-Dou_yO3g.js";import"./index-CE_NGgsP.js";import"./utils-C9Y0NiXz.js";import"./main-BwlHOnYP.js";import"./index-EUzft9Z_.js";import"./Tag-xKaXZN0c.js";import"./sys-help-2-C1sMmkr1.js";import"./index-BIKVfRm5.js";import"./Popover-B0GOUfMQ.js";import"./PopupsCommon.css-BerD7w9b.js";import"./FocusableElements-DA0BaiCm.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CJRte1-9.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-g8foa4rA.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-NbVlvM4j.js";import"./Link-2s4hefKa.js";import"./chunk-NUUEMKO5-CqajGF-u.js";import"./iframe-Dg0egVV3.js";import"../sb-preview/runtime.js";import"./client-DPlujwLe.js";import"./copy-BJtGExJZ.js";import"./copy-C7Fphd8b.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-D5efYGjp.js";import"./TableOfContent-DCqtbPc-.js";import"./index-nQTbYscK.js";import"./I18nStore-DnWKAes0.js";import"./useStylesheet-DVp2Y5Uf.js";import"./index-vaKWw58t.js";import"./index-CUd5UQ0Z.js";import"./Label-S_BgfXUY.js";import"./index-Yz8_Wo9H.js";import"./index-D8L7QTA6.js";import"./Text-CTrlD69_.js";import"./addCustomCSSWithScoping-B_vnxDyr.js";import"./index-BBLdTHsH.js";import"./BusyIndicator-CTFEFSn6.js";import"./index-7rUfxUBv.js";import"./index-D6lFKeEV.js";import"./Avatar-DMTAeY6x.js";import"./employee-B31iqtd8.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./List-BeOyiQ4g.js";import"./ItemNavigation-DWbUprUI.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-2y34RTmJ.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-BN3CQ6El.js";import"./accept-W9Dxcudv.js";import"./slim-arrow-right-BHycGIJI.js";import"./general-leave-request-Bn81wMU4.js";import"./index-Ca_8nO-p.js";import"./index-Dz--vSRg.js";import"./navigation-right-arrow-CxGtFS1r.js";import"./navigation-down-arrow-Cac-mlCH.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
