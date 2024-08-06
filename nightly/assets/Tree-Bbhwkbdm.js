import{j as t}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{useMDXComponents as d}from"./index-D3szj05g.js";import{A as o}from"./ArgTypesWithNote-Dd8_K8rn.js";import{C as l}from"./ControlsWithNote-BPS_tqfa.js";import{D as c}from"./DocsHeader-EGAEduEv.js";import{F as h}from"./CommandsAndQueries-RpQuIxkZ.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,d as T,D as m}from"./index-BAmWtMDW.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-yaLGkc-b.js";import"./index-C-bNuxbL.js";import"./iframe-CNne69o2.js";import"../sb-preview/runtime.js";import"./withWebComponent-Dj0CMfaz.js";import"./utils-B21VtmG1.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-vPfkXYRc.js";import"./decline-Dtt8f7gG.js";import"./Icon-8rAbDJhl.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B8mU3KX1.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-pNQtyMX0.js";import"./alert-D6VWtbrR.js";import"./class-map-DwAhupCS.js";import"./Button-LAxw2z5E.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BrbxGX_s.js";import"./TagDesign-Dou_yO3g.js";import"./index-C3ZJCerc.js";import"./utils-OTswyn8Z.js";import"./main-CzLLrZqh.js";import"./index-GLIBtNTn.js";import"./Tag-DOc2KdyV.js";import"./sys-help-2-CBpcyxoA.js";import"./index-BHzxwIzJ.js";import"./Popover-C3k48onv.js";import"./PopupsCommon.css-CL-yqmiO.js";import"./getEffectiveScrollbarStyle-CFKww5-v.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CuRzO4ve.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CpZMqJvf.js";import"./BrowserScrollbar.css-C7k9hgHd.js";import"./index-DxS1xq0o.js";import"./Link-B1bLgUAx.js";import"./chunk-HLWAVYOI-BxRKGeJD.js";import"./client-B23sEKGq.js";import"./copy-DzY-XerN.js";import"./copy-eLLizoPG.js";import"./index-PGreZEtb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-waKyCe7Y.js";import"./index-BZAvLi5K.js";import"./I18nStore-D1uEcPVD.js";import"./GitHub-Mark-CULGv64g.js";import"./TableOfContent-C4-I3Rqo.js";import"./index-BC6Sa5OT.js";import"./Label-DYSmE5xX.js";import"./index-BiycBBmo.js";import"./index-BRRZ3ctB.js";import"./addCustomCSSWithScoping-B01F51vr.js";import"./index-aQF491Uq.js";import"./index-DfpOXlFZ.js";import"./index-BjXtP3F2.js";import"./Avatar-CTO3QSeR.js";import"./employee-CIkKCEkx.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./List-DVxeIYhq.js";import"./ItemNavigation-C9YbrAXd.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./BusyIndicator-DGQpVjo-.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-DDuVo1bF.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-BhcLB9oj.js";import"./accept-D3yUlJXE.js";import"./slim-arrow-right-DdY7s39k.js";import"./general-leave-request-B3kttQx6.js";import"./index-Q99RaNNf.js";import"./index-BPiPJkTO.js";import"./navigation-right-arrow-D7o_w5oN.js";import"./navigation-down-arrow-BnF04B7f.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
