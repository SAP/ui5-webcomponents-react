import{j as t}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{useMDXComponents as d}from"./index-yodfxRVR.js";import{A as o}from"./ArgTypesWithNote-C3fapQhM.js";import{C as l}from"./ControlsWithNote-BKkTUkpj.js";import{D as c}from"./DocsHeader-BXj47gnE.js";import{F as h}from"./CommandsAndQueries-C0rRpFD_.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,d as T,D as m}from"./index-Bf1c7Mt6.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-PONup_yk.js";import"./index-DXr0vy18.js";import"./iframe-BwxJ3pXh.js";import"../sb-preview/runtime.js";import"./withWebComponent-DykTwaBJ.js";import"./utils-BXNPXA0w.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CEPDwMcb.js";import"./decline-PQHY0vmQ.js";import"./Icon-C1aVUqaK.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-4yB5uAXJ.js";import"./information-s0rUc520.js";import"./alert-B5x9ZRdn.js";import"./class-map-BBkLNtsu.js";import"./Button-gEiq340s.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-Ddp6Qu_n.js";import"./TagDesign-Dou_yO3g.js";import"./index-BLtMylri.js";import"./utils-CufwspCM.js";import"./main-CzLLrZqh.js";import"./index-BvLw7F-u.js";import"./Tag-BkeKwJ-5.js";import"./sys-help-2-CnqpxX4c.js";import"./index-BQmRbu3J.js";import"./Popover-xb-dB4fv.js";import"./PopupsCommon.css-BS0HwvId.js";import"./getEffectiveScrollbarStyle-C7TfqF8H.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CwA30WlK.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CP3POd5N.js";import"./BrowserScrollbar.css-3d9vQOhG.js";import"./index-CobuMNAm.js";import"./Link-DvVq2Sbg.js";import"./chunk-HLWAVYOI-yOl12oZX.js";import"./client-CM2XqZNc.js";import"./copy-CR8fi4tI.js";import"./copy-CIslHIHM.js";import"./index-Did8UXWE.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BB85D3ff.js";import"./index-BsDgV4lW.js";import"./I18nStore-DkMZE6H0.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-08X1RYCA.js";import"./TableOfContent-bVo8HMe2.js";import"./index-DUR8esmO.js";import"./Label-Cn8Z-EZA.js";import"./index-DXLJS-Jo.js";import"./index-CVvdPFjH.js";import"./addCustomCSSWithScoping-CP2Nptdn.js";import"./index-D-YjU-fH.js";import"./index-DWEk247T.js";import"./index-DvQmjdp3.js";import"./Avatar-CTYNbiCX.js";import"./employee-CVOZDo5u.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./List-DVPfGYAo.js";import"./ItemNavigation-CJ0Lvk1x.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./BusyIndicator-Cc-m-tN-.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-fVFozh54.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-0-u6R5RF.js";import"./accept-068edCLR.js";import"./slim-arrow-right-BYeS3U5E.js";import"./general-leave-request-BuFYSdHG.js";import"./index-5a8qt42Y.js";import"./index-DSr8imlt.js";import"./navigation-right-arrow-DtA8ZOwy.js";import"./navigation-down-arrow-Cq0FgW-j.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
