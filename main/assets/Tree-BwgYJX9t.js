import{j as t}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{useMDXComponents as d}from"./index-yodfxRVR.js";import{A as o}from"./ArgTypesWithNote-ELwk8SrP.js";import{C as l}from"./ControlsWithNote-D3KOMUNW.js";import{D as c}from"./DocsHeader-CEs0RetQ.js";import{F as h}from"./CommandsAndQueries-CXPNLxw-.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,d as T,D as m}from"./index-BY1QQgZb.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-BS0z9j7E.js";import"./index-C_Z63DAS.js";import"./iframe-CCdjJbb7.js";import"../sb-preview/runtime.js";import"./withWebComponent-BbH_5MIb.js";import"./utils-BXNPXA0w.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CYrspCbQ.js";import"./decline-dJfPkrKK.js";import"./Icon-DgpDEY-g.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Dpm8KApc.js";import"./alert-4iBM3OoX.js";import"./class-map-Cmqcr3Jy.js";import"./Button-B86xSW8p.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-D_1KzAB5.js";import"./TagDesign-Dou_yO3g.js";import"./index-BLtMylri.js";import"./utils-VoVA-FUI.js";import"./main-CzLLrZqh.js";import"./index-lbBrIS5J.js";import"./Tag-Bcq38jV6.js";import"./sys-help-2-CpwrGADB.js";import"./index-EVApV1uw.js";import"./Popover-By40N46R.js";import"./PopupsCommon.css-CUeoloLy.js";import"./getEffectiveScrollbarStyle-Cc8EMEwh.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-OgbCZidP.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CndeHQ5H.js";import"./BrowserScrollbar.css-CgVpWCeO.js";import"./index-B7BjxTf3.js";import"./Link-D7pTqG-L.js";import"./chunk-HLWAVYOI-CVQ0litT.js";import"./client-CM2XqZNc.js";import"./copy-Bk4HvEED.js";import"./copy-D7XnXV4f.js";import"./index-DwEKreE0.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BB85D3ff.js";import"./index-CleVCBXA.js";import"./I18nStore-B0a_FhwZ.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-08X1RYCA.js";import"./TableOfContent-HszWWyLU.js";import"./index-CONv12fc.js";import"./Label-B8i_ob21.js";import"./index-DhzYehnQ.js";import"./index-BNJbAmHv.js";import"./addCustomCSSWithScoping-BT5fwu99.js";import"./index-IayiN-mP.js";import"./index-DyvckQxz.js";import"./index-CfzFFulX.js";import"./Avatar-DddpDFgS.js";import"./employee-DSw1VZX4.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./List-BtEOO51k.js";import"./ItemNavigation-aVrzH0la.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./BusyIndicator-BplFOaZ-.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-CfMumUvo.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-DfOHjXcb.js";import"./accept-V4-1HGXV.js";import"./slim-arrow-right-Br2PeISs.js";import"./general-leave-request-CKo5V47f.js";import"./index-azSntBpp.js";import"./index-oj-8Ltm_.js";import"./navigation-right-arrow-BE1NWXGD.js";import"./navigation-down-arrow-CrBedjXK.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
