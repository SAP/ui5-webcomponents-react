import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as d}from"./index-CcnH5Kt0.js";import{A as o}from"./ArgTypesWithNote-2ftS2V-v.js";import{C as l}from"./ControlsWithNote-DvP0B85M.js";import{D as c}from"./DocsHeader-BjjM2MiE.js";import{F as h}from"./CommandsAndQueries-mr3RTSxi.js";import"./index-BhOUCmxs.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-DRIb7dCb.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{ae as j,af as i,ag as T,ai as m}from"./index-B0c7zXBl.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-DeiZMZEn.js";import"./index-CWNpgAgp.js";import"./withWebComponent-CBrmozIb.js";import"./utils-DzvJSare.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-G8JuKszz.js";import"./Icon-Babe3lNb.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-DxGaCl7C.js";import"./alert-DvJUOzHP.js";import"./class-map-AHFyjGyG.js";import"./Button-BQJgivV9.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-cv-4nGwj.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./index-sbqOYYIm.js";import"./utils-BBlUXS_q.js";import"./main-r7D-Vqmb.js";import"./index-CQvivwrc.js";import"./Tag-BQIFRBJg.js";import"./sys-help-2-BaATxjSF.js";import"./index-CsIMTQX-.js";import"./Popover-BcsvPu0A.js";import"./PopupsCommon.css-D29T90hQ.js";import"./FocusableElements-Di3gf8aJ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-jJKP5Zvq.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-DE0Tc7Nn.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BVjwHeu4.js";import"./Link-C9hNQ5a2.js";import"./chunk-NUUEMKO5-Dg2SVZ6b.js";import"./iframe-UNUnnh18.js";import"../sb-preview/runtime.js";import"./client-BzooOYO_.js";import"./copy-C6evqKWO.js";import"./copy-DU9gbUoW.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DBMEQ9W3.js";import"./index-Fm8sVCyb.js";import"./I18nStore-CvBoH44U.js";import"./useStylesheet-DPBS0l4j.js";import"./index-GDTSF2Z6.js";import"./index-CCisTIRW.js";import"./Label-DyMppobl.js";import"./index-DO5b_HjU.js";import"./index-Clpx57uo.js";import"./addCustomCSSWithScoping-C23b4S6i.js";import"./index-BL8YXbRM.js";import"./BusyIndicator-DsVolhjz.js";import"./index-BO6WyhhL.js";import"./index-pSwmqRCk.js";import"./Avatar-Co3KYXN1.js";import"./employee-D2O7hYRc.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./List-CYL2dg9d.js";import"./ItemNavigation-eT-cJPdT.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-dgLOp33S.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-D8nfwBVp.js";import"./accept-CN1NljlK.js";import"./slim-arrow-right--3dMC0uI.js";import"./general-leave-request-BL926_pK.js";import"./index-C6Ks8YdD.js";import"./index-CSjB_S4c.js";import"./navigation-right-arrow-BvcwK9Vq.js";import"./navigation-down-arrow-DpJiX91m.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
