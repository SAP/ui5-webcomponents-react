import{j as t}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{useMDXComponents as d}from"./index-D3szj05g.js";import{A as o}from"./ArgTypesWithNote-BNgCUfBk.js";import{C as l}from"./ControlsWithNote-C13Bazel.js";import{D as c}from"./DocsHeader-Di_QAUcv.js";import{F as h}from"./CommandsAndQueries-BWAT6-lb.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,d as T,D as m}from"./index-DaAQgAJE.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-C3QUUcmT.js";import"./index-BcywJTac.js";import"./iframe-CzTfxZop.js";import"../sb-preview/runtime.js";import"./withWebComponent-Bw_l6Ewh.js";import"./utils-BHgxP_Sc.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CyjtwURt.js";import"./decline-BnR7C84V.js";import"./Icon-Bjam5y2n.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-mCyQq_6q.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-DR3Ry5yc.js";import"./alert-CjjdhJ65.js";import"./class-map-DoF19r8m.js";import"./Button-Bn9nox5u.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BuF9xM0k.js";import"./TagDesign-Dou_yO3g.js";import"./index-C3ZJCerc.js";import"./utils-QV6PgHnf.js";import"./main-CzLLrZqh.js";import"./index-BZxUhjfC.js";import"./Tag-oXDdtvF6.js";import"./sys-help-2-BRv5pQ3O.js";import"./index-CrLDM03t.js";import"./Popover-ueRYOmZP.js";import"./PopupsCommon.css-T1OzgQOS.js";import"./getEffectiveScrollbarStyle-D1VPwmZI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CV6FH9MC.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bys0Ab5G.js";import"./BrowserScrollbar.css-AwpGtRUX.js";import"./index-f7ml_RrX.js";import"./Link-DaxkRKad.js";import"./chunk-HLWAVYOI-TokbzC8N.js";import"./client-B23sEKGq.js";import"./copy-DLiPdfEP.js";import"./copy-D_DpjAH5.js";import"./index-PGreZEtb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-waKyCe7Y.js";import"./index-6v2Oy41S.js";import"./I18nStore-CqpKwI0j.js";import"./GitHub-Mark-CULGv64g.js";import"./TableOfContent-BZUwKlVw.js";import"./index-la6ajCYK.js";import"./Label-C8Y7h3Z-.js";import"./index-CL5onr8B.js";import"./index-D-FvZfTx.js";import"./addCustomCSSWithScoping-ClhnucNU.js";import"./index-1cTU228M.js";import"./index-9U97lR9A.js";import"./index-DEfMIyvC.js";import"./Avatar-BRGukaio.js";import"./employee-CWJksvD0.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./List-B4HlHID8.js";import"./ItemNavigation-J0QfqElW.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./BusyIndicator-Cb_VVcAx.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-B8Nc4uiK.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-CXVjyirz.js";import"./accept-vjFjO2tl.js";import"./slim-arrow-right-pLsYwuE7.js";import"./general-leave-request-D_M083HE.js";import"./index-CDN8edB3.js";import"./index-CxOYmqmk.js";import"./navigation-right-arrow-DY5kpQDb.js";import"./navigation-down-arrow-8CjEF7sh.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
