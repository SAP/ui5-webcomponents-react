import{j as t}from"./iframe-D5q1aMGI.js";import{useMDXComponents as c}from"./index-B6q-95ic.js";import{A as o}from"./ArgTypesWithNote-CZh6m_UT.js";import{C as l}from"./ControlsWithNote-CWcYvev_.js";import{D as g}from"./DocsHeader-RJwQjyez.js";import{F as x}from"./CommandsAndQueries-B7jUlW4q.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-VrnxRsTA.js";import{C as i,D as r}from"./NavigationLayout.stories-Cmbju8dH.js";import{S as m,a as s,b as d}from"./index-BOdOZiF2.js";import{S as p}from"./chain-link-OapBxcVa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-YdpDWp2e.js";import"./information-DvQXlJSA.js";import"./sys-enter-2-BD4KOzII.js";import"./alert-4vj1CvHm.js";import"./Tag-DDiTsJ0v.js";import"./index-Bo48Ce9s.js";import"./index-DEUGWJD9.js";import"./Link-CDAcJh87.js";import"./copy-B6UvXJ1_.js";import"./copy-BKgapaDk.js";import"./GitHub-Mark-cX8qIbC6.js";import"./TableOfContent-CCvgAgpP.js";import"./index-BCRNDJSO.js";import"./index-B87mq1Uz.js";import"./addCustomCSSWithScoping-Z_1KU2KU.js";import"./index-S9YU7LKi.js";import"./index-DBgGZpdq.js";import"./index-BFl6kxHT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLq1yiI3.js";import"./index-OSnuRySg.js";import"./parameters-bundle.css-gLosEED4.js";import"./menu-BQOouaSG.js";import"./home-crMz_kUC.js";import"./calendar-Cn-ZbcKZ.js";import"./background-CoUcEL67.js";import"./action-settings-DOQywaG2.js";import"./locked-DyPl-vg5.js";import"./index-DsNZwESx.js";import"./ListItemStandard-bTvWpL2a.js";import"./ButtonBadge-Dopehd-v.js";import"./search-0eeaHI1S.js";import"./overflow-BNg4UsUJ.js";import"./overflow-CDgfinqz.js";import"./slim-arrow-down-Cqz8o9QR.js";import"./slim-arrow-down-BJL2q3GT.js";import"./i18n-defaults-dyGKyNAh.js";import"./navigation-right-arrow--Ae6reK-.js";import"./navigation-right-arrow-B_hqUMX3.js";import"./navigation-down-arrow-5y5ThNfn.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
`,t.jsx(x,{})]})}function ft(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{ft as default};
