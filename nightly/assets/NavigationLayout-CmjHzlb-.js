import{j as t}from"./iframe-C6IJVCey.js";import{useMDXComponents as c}from"./index-Ds5KjzB0.js";import{A as o}from"./ArgTypesWithNote-jPFx2Q3U.js";import{C as l}from"./ControlsWithNote-BtPDnNM4.js";import{D as g}from"./DocsHeader-BJPbmgAK.js";import{F as x}from"./CommandsAndQueries-Bd9H39B6.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-DeRnr9iF.js";import{C as i,D as r}from"./NavigationLayout.stories-BQkItd0r.js";import{S as m,a as s,b as d}from"./index-DyvwUjsV.js";import{S as p}from"./chain-link-D1xhIC4n.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BUG7WGA1.js";import"./information-DqbvobJ3.js";import"./sys-enter-2-DTDb_XUo.js";import"./alert-1QQg-aMK.js";import"./Tag-cnX1vvNU.js";import"./index-DmVW3kBm.js";import"./index-WUc2kbX8.js";import"./Link-B3ojWDNP.js";import"./copy-DIWsVONk.js";import"./copy-CbqLCcHM.js";import"./GitHub-Mark-BvzV3HVh.js";import"./TableOfContent-C68i5x5x.js";import"./index-BVcSPkXT.js";import"./index--LhHeSe7.js";import"./addCustomCSSWithScoping-DU4SAdPD.js";import"./index-Bud7zdyR.js";import"./index-DlMuD-u3.js";import"./index-42vsznvH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DogAS-dB.js";import"./index-CrM4G3XO.js";import"./parameters-bundle.css-34zgZIqy.js";import"./menu-Aw15OqSE.js";import"./home-C_qsrdDw.js";import"./calendar-Cl-yZyFq.js";import"./background-DjVGesKs.js";import"./action-settings-CuonnEQj.js";import"./locked-NfhjIVvn.js";import"./index-BocFmLJe.js";import"./ListItemStandard-gdtXb5F2.js";import"./ButtonBadge-C36HEEpV.js";import"./search-CaBFQiR2.js";import"./overflow-CQuHfOGl.js";import"./overflow-9DD4nOyl.js";import"./slim-arrow-down-BAej_MsU.js";import"./slim-arrow-down-CwgCCUKm.js";import"./i18n-defaults-Cjp7arcT.js";import"./navigation-right-arrow-D2MkXcV7.js";import"./navigation-right-arrow-CiZi-qcJ.js";import"./navigation-down-arrow-DUB_9yJR.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
