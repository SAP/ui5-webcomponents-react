import{j as t}from"./iframe-BVTjwwa8.js";import{useMDXComponents as c}from"./index-B7X7f4OL.js";import{A as o}from"./ArgTypesWithNote-Bdf_nzMJ.js";import{C as l}from"./ControlsWithNote-hZUn05pH.js";import{D as g}from"./DocsHeader-BcrStdCo.js";import{F as x}from"./CommandsAndQueries-BxY3Aj9d.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-eGiRc96Y.js";import{C as i,D as r}from"./NavigationLayout.stories-R3TGXANQ.js";import{S as m,a as s,b as d}from"./index-DkGIARUP.js";import{S as p}from"./chain-link-c5kT_D8w.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CMlRFogN.js";import"./information-DblDnfTa.js";import"./sys-enter-2-w3Gdy4bH.js";import"./alert-DS_YR08B.js";import"./Tag-Dd2A7Fyt.js";import"./index-B1gqswNl.js";import"./index-BsaRVQdN.js";import"./Link-B7kPjB45.js";import"./copy-CIRJ6Cju.js";import"./copy-B0_44_hm.js";import"./GitHub-Mark-DdcWzYif.js";import"./TableOfContent-pmxBEo13.js";import"./index-DP8RXEYN.js";import"./index-BvWmgkkb.js";import"./addCustomCSSWithScoping-CzL_B1eM.js";import"./index-ytwNl_Zj.js";import"./index-IhKV7aiN.js";import"./index-BQCzDji_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-yJLdt4rK.js";import"./index-ta6P0LeW.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./menu-EyySz4IG.js";import"./home-qReEZn-h.js";import"./calendar-Bl-3W9l7.js";import"./history-CTJP6OKj.js";import"./background-Bo3TumpZ.js";import"./action-settings-Cio2N8fG.js";import"./locked-BtoQuMB_.js";import"./index-CUgNFvxa.js";import"./ListItemStandard-BAXagnCs.js";import"./ButtonBadge-qRiNZDr5.js";import"./search-ByR_uR02.js";import"./overflow-BAoNFX0o.js";import"./overflow-7AyXiwc_.js";import"./slim-arrow-down-CbdcQMCz.js";import"./slim-arrow-down-q0ei8TSg.js";import"./i18n-defaults-BS8OTJAB.js";import"./navigation-right-arrow-CvYYllXN.js";import"./navigation-right-arrow-CiN3ZT4_.js";import"./navigation-down-arrow-TGu9KNhG.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
`,t.jsx(g,{of:i}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(f,{of:r}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show static code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`function NavigationLayoutComponent(props) {
  const [selectedContent, setSelectedContent] = useState('Home');
  const [mode, setMode] = useState(props.mode);
  const navigationLayoutRef = useRef<NavigationLayoutDomRef>(null);

  const handleSelectionChange: SideNavigationPropTypes['onSelectionChange'] = (e) => {
    setSelectedContent(e.detail.item.text);
  };

  useEffect(() => {
    setMode(props.mode);
  }, [props.mode]);

  return (
    <div style={{ position: 'relative', height: '800px' }}>
      <NavigationLayout
        {...props}
        ref={navigationLayoutRef}
        mode={mode}
        header={
          <ShellBar
            startButton={
              <Button
                icon={menuIcon}
                onClick={() => {
                  if (navigationLayoutRef.current?.isSideCollapsed()) {
                    setMode(NavigationLayoutMode.Expanded);
                  } else {
                    setMode(NavigationLayoutMode.Collapsed);
                  }
                }}
              />
            }
            primaryTitle="UI5 Web Components for React"
            secondaryTitle="The Best Run SAP"
          />
        }
        sideContent={
          <SideNavigation slot="sideContent" onSelectionChange={handleSelectionChange}>
            <SideNavigationItem text="Home" icon="home" />
            <SideNavigationGroup text="Group 1" expanded>
              <SideNavigationItem text="Item 1" icon="locate-me" expanded>
                <SideNavigationSubItem text="Sub Item 1" />
                <SideNavigationSubItem text="Sub Item 2" />
              </SideNavigationItem>
              <SideNavigationItem text="Item 2" icon="calendar" expanded>
                <SideNavigationSubItem text="Sub Item 3" />
                <SideNavigationSubItem text="Sub Item 4" />
              </SideNavigationItem>
              <SideNavigationItem text="Item 3" icon="activity-assigned-to-goal" expanded>
                <SideNavigationSubItem text="Sub Item 5" />
                <SideNavigationSubItem text="Sub Item 6" />
              </SideNavigationItem>
            </SideNavigationGroup>
            <SideNavigationGroup text="Group 2" expanded>
              <SideNavigationItem text="Item 4" icon="history" />
              <SideNavigationItem text="Item 5" icon="source-code" />
              <SideNavigationItem text="Item 6" icon="background" />
            </SideNavigationGroup>

            <SideNavigationItem
              slot="fixedItems"
              text="Legal"
              href="https://www.sap.com/about/legal/impressum.html"
              target="_blank"
              icon="compare"
            />
            <SideNavigationItem
              slot="fixedItems"
              text="Privacy"
              href="https://www.sap.com/about/legal/privacy.html"
              target="_blank"
              icon="locked"
            />
            <SideNavigationItem
              slot="fixedItems"
              text="Terms of Use"
              href="https://www.sap.com/terms-of-use"
              target="_blank"
              icon="document-text"
            />
          </SideNavigation>
        }
      >
        <div style={{ padding: '1rem' }}>
          <div>
            <Title>{selectedContent}</Title>
            <br />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
          </div>
        </div>
      </NavigationLayout>
    </div>
  );
}
`})})]}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:r}),`
`,t.jsx(h,{children:S}),`
`,t.jsx(e.h2,{id:"sidenavigation",children:"SideNavigation"}),`
`,t.jsx(a,{of:m}),`
`,t.jsx(o,{metaOf:i,of:m}),`
`,t.jsx(e.h2,{id:"sidenavigationitem",children:"SideNavigationItem"}),`
`,t.jsx(a,{of:s}),`
`,t.jsx(o,{metaOf:i,of:s}),`
`,t.jsx(e.h2,{id:"sidenavigationsubitem",children:"SideNavigationSubItem"}),`
`,t.jsx(a,{of:d}),`
`,t.jsx(o,{metaOf:i,of:d}),`
`,t.jsx(e.h2,{id:"sidenavigationgroup",children:"SideNavigationGroup"}),`
`,t.jsx(a,{of:p}),`
`,t.jsx(o,{metaOf:i,of:p}),`
`,t.jsx(x,{})]})}function ht(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{ht as default};
