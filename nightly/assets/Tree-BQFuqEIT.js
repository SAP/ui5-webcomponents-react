import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as d}from"./index-CcnH5Kt0.js";import{A as o}from"./ArgTypesWithNote-Exuo9067.js";import{C as l}from"./ControlsWithNote-BZq2cDDO.js";import{D as c}from"./DocsHeader-CYjgs7id.js";import{F as h}from"./CommandsAndQueries-lgak6iz1.js";import"./index-B-wWQMU_.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-XDMvnQZn.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{ae as j,af as i,ag as T,ah as m}from"./index-CboaAwDc.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-Dk4MuEk9.js";import"./index-fq-A78mQ.js";import"./withWebComponent-CjthvP8A.js";import"./utils-GPKUbrfH.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-GWtZPJ2c.js";import"./decline-CmGSEmfo.js";import"./Icon-BiQiH9AZ.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-OSvSoWlX.js";import"./alert-eD3USdjD.js";import"./class-map-DQ0L7MML.js";import"./Button-BBQ8R6D6.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BLqibUdf.js";import"./i18n-defaults-BotoAXl7.js";import"./TagDesign-Dou_yO3g.js";import"./index-sbqOYYIm.js";import"./utils-tDUbNvQP.js";import"./main-C6oD7XT2.js";import"./index-BAVmR9lv.js";import"./Tag-MIdNBUL-.js";import"./sys-help-2-DCOUH3lY.js";import"./index-BVNesCV8.js";import"./Popover-CTv0B5oi.js";import"./PopupsCommon.css-BCC2ARq6.js";import"./FocusableElements-Br0H5X9U.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C_eCkGSS.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-nG21dhw_.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-C5CUzSoK.js";import"./Link-DZg2nJC9.js";import"./chunk-NUUEMKO5-BtcKnm3r.js";import"./iframe-DtUdM92a.js";import"../sb-preview/runtime.js";import"./client-BzooOYO_.js";import"./copy-DL3IQ6be.js";import"./copy-1gorG9K6.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-bhM-b_eu.js";import"./index-CYzjajp8.js";import"./I18nStore-MR5G_kEB.js";import"./useStylesheet-CIcp3lSM.js";import"./index-uL74TcGH.js";import"./index-Dns6Oz5_.js";import"./Label-CZSx-F1W.js";import"./index-OThGHqLA.js";import"./index-BdA_tfl3.js";import"./addCustomCSSWithScoping-Da--1kqg.js";import"./index-BmvVf3i2.js";import"./BusyIndicator-CFbpjHZX.js";import"./index-p_JN0Moo.js";import"./index-C99ljWuN.js";import"./Avatar-Dvl2_7FY.js";import"./employee-LWQGcPo2.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./List-CuZOmXHL.js";import"./ItemNavigation-Ch7UfbYX.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-GgoeTXQS.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-CM06bEZZ.js";import"./accept-lq3MKKgJ.js";import"./slim-arrow-right-BCeUcVk3.js";import"./general-leave-request-Bl2G4RUw.js";import"./index-DSWkZP8z.js";import"./index-BcPgEfiu.js";import"./navigation-right-arrow-DEdY9Xs-.js";import"./navigation-down-arrow-BtIR6Rt3.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
