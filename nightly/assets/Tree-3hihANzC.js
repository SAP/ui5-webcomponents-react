import{j as t}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as d}from"./index-DyCphG7h.js";import{A as o}from"./ArgTypesWithNote-DTXltfUJ.js";import{C as l}from"./ControlsWithNote-b-EP0Q4F.js";import{D as c}from"./DocsHeader-MTQeOIbS.js";import{F as h}from"./CommandsAndQueries-CVMe8F--.js";import"./index-dbrrX5ch.js";import"./index-DysCNOs_.js";import"./WrappingType-CW8URInd.js";import"./Title-DnczWaCy.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{ae as j,af as i,ag as T,ai as m}from"./index-Dxw9-lRg.js";import{C as f,D as n,L as u,T as p,a as s}from"./Tree.stories-DQyAQrlP.js";import"./index-OrErW1tb.js";import"./withWebComponent-DpVKsRHi.js";import"./utils-BMpfTDbr.js";import"./useIsomorphicLayoutEffect-F-N6bu_1.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-Ch4ABsnB.js";import"./Icon-CrKv37md.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-D_LjlJHK.js";import"./alert-CiqdS0Ti.js";import"./class-map-CAgcI9af.js";import"./Button-CzXV-qq-.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-HqN2rB8b.js";import"./i18n-defaults-CMHHS2wK.js";import"./TagDesign-Dou_yO3g.js";import"./index-C4cLd1FO.js";import"./utils-DBG4wFdY.js";import"./main-Dcm2jhNK.js";import"./index-DA9k7rzT.js";import"./Tag-BwJ4pIZx.js";import"./sys-help-2-Dw9i_TLE.js";import"./index-x5zB9JtW.js";import"./Popover-CxadHYVC.js";import"./PopupsCommon.css-Bu1W85h-.js";import"./FocusableElements-DpmShrVF.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D2m47C26.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bigav4TG.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-cawFe0IV.js";import"./Link-CcG_uYXc.js";import"./chunk-NUUEMKO5-CBxgZXZC.js";import"./iframe-BGgQJLC1.js";import"../sb-preview/runtime.js";import"./client-CqEfiX9M.js";import"./copy-C_xK9_A_.js";import"./copy-BtTL6xAX.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DLtQKbjK.js";import"./TableOfContent-DRym89KV.js";import"./index-BjPcBTkz.js";import"./I18nStore-CXxqSOxg.js";import"./useStylesheet-BAIsnduv.js";import"./index-RFezEdyG.js";import"./index-kNlKigw5.js";import"./Label-D_ADNoJV.js";import"./index-DP-u0XOf.js";import"./index-CA4smrai.js";import"./addCustomCSSWithScoping-DYmOnLgW.js";import"./index-qKU3PnwJ.js";import"./BusyIndicator-B17L6t2M.js";import"./index-C6sMyakJ.js";import"./index-CHrZj7jK.js";import"./Avatar-CLqwzIQ4.js";import"./employee-CUDhI-YO.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./List-UhlU2M9F.js";import"./ItemNavigation-DWaDskwg.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-BDOiHASl.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-BxTmgybz.js";import"./accept-B4LET7Ir.js";import"./slim-arrow-right-Bid5UasE.js";import"./general-leave-request-MLe_OcCn.js";import"./index-V2oewtx_.js";import"./index-wpqO8ruj.js";import"./navigation-right-arrow-9pakgOWO.js";import"./navigation-down-arrow-Y4U9XrY4.js";function a(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
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
`,t.jsx(h,{})]})}function me(r={}){const{wrapper:e}={...d(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(a,{...r})}):a(r)}export{me as default};
