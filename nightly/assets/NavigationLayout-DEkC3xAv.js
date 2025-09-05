import{j as t}from"./iframe-BGSq42U4.js";import{useMDXComponents as c}from"./index-DdgODfaa.js";import{A as o}from"./ArgTypesWithNote-VQvfHWQN.js";import{C as l}from"./ControlsWithNote-DnZvZ46K.js";import{D as g}from"./DocsHeader-CwHPHKpF.js";import{F as x}from"./CommandsAndQueries-DmG8Z04y.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-DinJR8BJ.js";import{C as i,D as r}from"./NavigationLayout.stories-B3ZdQd8z.js";import{S as m,a as s,b as d}from"./index-DH1hIz2j.js";import{S as p}from"./chain-link-CSEJUFWH.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DCXZOGva.js";import"./index-4G2XFF8s.js";import"./information-BYqUssqf.js";import"./sys-enter-2-dj_WkcIy.js";import"./alert-pmNi1f9N.js";import"./Tag-DFLgZ7W6.js";import"./index-Dv5XzTWy.js";import"./index-DBkY9uWW.js";import"./Link-YDiGCC73.js";import"./copy-B4CJ-Uvv.js";import"./copy-BkyD6IBJ.js";import"./GitHub-Mark-ClzIIXtg.js";import"./TableOfContent-CeNmhJSM.js";import"./index-CFLPIYxg.js";import"./index-DeoM-MQY.js";import"./addCustomCSSWithScoping-BoN0_mzK.js";import"./index-81YUArEn.js";import"./index-DnKOFCSh.js";import"./index-D1i96R2Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJV2VOx9.js";import"./index-DxssoIE7.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./menu-DZUgBfPQ.js";import"./home-eniIzk2j.js";import"./calendar-D9zp3q47.js";import"./history-D5K2OxwP.js";import"./background-Df94qN4M.js";import"./action-settings-B5Y-3Q0k.js";import"./locked-JwRlmAFT.js";import"./index-DxjMqm-C.js";import"./ListItemStandard-C9eXVr7n.js";import"./ButtonBadge-B6T9H6xp.js";import"./search-D5CgONOf.js";import"./overflow-BoVNchMZ.js";import"./overflow-D34homVp.js";import"./slim-arrow-down-tJmQ7xBW.js";import"./slim-arrow-down-DLcfp9eI.js";import"./i18n-defaults-BS8OTJAB.js";import"./navigation-right-arrow-DL470iX4.js";import"./navigation-right-arrow-CLB8HeYS.js";import"./navigation-down-arrow-7ufWXDu9.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
`,t.jsx(x,{})]})}function Nt(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{Nt as default};
