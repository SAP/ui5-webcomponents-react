import{j as t}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as d}from"./index-CcnH5Kt0.js";import{A as o}from"./ArgTypesWithNote-CAYC6ANp.js";import{C as l}from"./ControlsWithNote-3H4UQTlf.js";import{D as c}from"./DocsHeader-BetOIZJj.js";import{F as h}from"./CommandsAndQueries-CjeXxYxy.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CE707q_n.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{ae as j,af as i,ag as T,ah as m}from"./index-B_JisXEm.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-SWo7unFa.js";import"./index-Dbw5Efj6.js";import"./iframe-hZ9PAetX.js";import"../sb-preview/runtime.js";import"./withWebComponent-_WQ2NUTk.js";import"./utils-DNCbgL6O.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Cey6jF2F.js";import"./decline-BO1MJY4p.js";import"./Icon-F4CTdRe4.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B1auRMLy.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-T18VK69N.js";import"./alert-Cstw3ukw.js";import"./class-map-BevVk84l.js";import"./Button-B2giC9cI.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-QZuI92fE.js";import"./TagDesign-Dou_yO3g.js";import"./index-sbqOYYIm.js";import"./utils-j22s8sEg.js";import"./main-BPTHlokf.js";import"./index-Ccx9Q3VY.js";import"./Tag-CyMlqXkf.js";import"./sys-help-2-Dka1TfNv.js";import"./index-Csar8lRO.js";import"./Popover-BSoFyw8J.js";import"./PopupsCommon.css-CgymFC1Z.js";import"./getEffectiveScrollbarStyle-D0HAoBVS.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CdXdU0-i.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BtPMqoOr.js";import"./BrowserScrollbar.css-DMtZWp5G.js";import"./index-D0E-fN6R.js";import"./Link-D7mI2b7i.js";import"./chunk-HLWAVYOI-DNe8q3AO.js";import"./client-BZNFO7bv.js";import"./copy-ITQxovDS.js";import"./copy-Dq9dQZCS.js";import"./index-CcQSza-P.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DbWqkQQL.js";import"./index-Dxh7pR9i.js";import"./I18nStore-Dyr3cAVj.js";import"./GitHub-Mark-07DkmEp8.js";import"./TableOfContent-CGtrISih.js";import"./index-DI2hh086.js";import"./Label-COQgloJF.js";import"./index-BMoHtLal.js";import"./index-Cfo8YjkM.js";import"./addCustomCSSWithScoping-C8yl6nHi.js";import"./index-B529WYkd.js";import"./BusyIndicator-C2GpyWwn.js";import"./index-CB3FoJQs.js";import"./index-DFS-xBS1.js";import"./Avatar-DDjIX45r.js";import"./employee-BW41J3Tc.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./List-CSFnPxXa.js";import"./ItemNavigation-CQqeVVOg.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-B0Zfttmb.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-DJ3qeSEk.js";import"./accept-Cz9082jw.js";import"./slim-arrow-right-D8Qeq0Vj.js";import"./general-leave-request-ekkkNBvE.js";import"./index-BPkDI4VR.js";import"./index-Cc4SEnhI.js";import"./navigation-right-arrow-CSKDCint.js";import"./navigation-down-arrow-LKyfrg_G.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
