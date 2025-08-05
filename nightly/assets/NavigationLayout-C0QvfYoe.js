import{j as t}from"./iframe-CG2rGjbc.js";import{useMDXComponents as c}from"./index-DS69H-n6.js";import{A as o}from"./ArgTypesWithNote-CzPVYTqN.js";import{C as l}from"./ControlsWithNote-BFQM5fX0.js";import{D as g}from"./DocsHeader-BGOyORj-.js";import{F as x}from"./CommandsAndQueries-DskZpT92.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-BOXfYYlZ.js";import{C as i,D as r}from"./NavigationLayout.stories-DTgGoGjG.js";import{S as m,a as s,b as d}from"./index-DAost97n.js";import{S as p}from"./chain-link-CG2dRJcE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BVmbnKNa.js";import"./information-CUctzDB0.js";import"./sys-enter-2-58dTwXpy.js";import"./alert-xERNdQ9e.js";import"./Tag-B3NEGkkI.js";import"./index-vBa65tZZ.js";import"./index-4ahbKnxX.js";import"./Link-BOSvSmJd.js";import"./copy-Cd5gRkoK.js";import"./copy-Cj_PeOWN.js";import"./GitHub-Mark-C4GRBKUH.js";import"./TableOfContent-DgRpeg8V.js";import"./index-BEeaA3No.js";import"./index-Bm2fVwXT.js";import"./addCustomCSSWithScoping-CQY8oQwD.js";import"./index-B3gloDnF.js";import"./index-DEr8Ja6X.js";import"./index-dno7x-xA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBxXpI3-.js";import"./index-CjcVrUpi.js";import"./parameters-bundle.css-gLosEED4.js";import"./menu-Dl3Hb7yy.js";import"./home-By324z7I.js";import"./calendar-CLw_PYAN.js";import"./background-BY7v1bBV.js";import"./action-settings-BV2bxdjj.js";import"./locked-ZaY1jh7J.js";import"./index-BBqIEwuc.js";import"./ListItemStandard-CYmen0Jk.js";import"./ButtonBadge-E631WtGL.js";import"./search-BnLzWJyB.js";import"./overflow-wr8ORUDX.js";import"./overflow-D9GZ3dm-.js";import"./slim-arrow-down-DmJvDhwU.js";import"./slim-arrow-down-B6ZGeZyP.js";import"./i18n-defaults-dyGKyNAh.js";import"./navigation-right-arrow-rBI3rFQp.js";import"./navigation-right-arrow-tevQ1gbb.js";import"./navigation-down-arrow-NWSQUDrt.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
