import{j as t}from"./iframe-Plj9L4DO.js";import{useMDXComponents as c}from"./index-uN80YAVR.js";import{A as o}from"./ArgTypesWithNote-WT0dlKkA.js";import{C as l}from"./ControlsWithNote-BUu8k3dE.js";import{D as g}from"./DocsHeader-gHpZDn-5.js";import{F as x}from"./CommandsAndQueries-BWyKkggu.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-CBjnjgp2.js";import{C as i,D as r}from"./NavigationLayout.stories-B05LzNAX.js";import{S as m,a as s,b as d}from"./index-DLVMjgyi.js";import{S as p}from"./chain-link-B4uOrS5f.js";import"./preload-helper-Ct5FWWRu.js";import"./index-TPF4FnDa.js";import"./information-gWqn0Y75.js";import"./sys-enter-2-CA_27ms1.js";import"./alert-p9YyGNnM.js";import"./Tag-Chhqj61J.js";import"./index-B6F36pGT.js";import"./index-B4Ji1mzc.js";import"./Link-BaW3AGMM.js";import"./copy-9NjNiENk.js";import"./copy-DLXELO5k.js";import"./GitHub-Mark-Dn5luEEb.js";import"./TableOfContent-awrCgv2Y.js";import"./index-DdhKX7PQ.js";import"./index-BQrHmUPn.js";import"./addCustomCSSWithScoping-DiURvOzS.js";import"./index-q1UVXeS8.js";import"./index-8rr5Mrdg.js";import"./index-B8knOcBx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vnxFP9T5.js";import"./index-CprqgfDl.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./menu-2vPbktPO.js";import"./home-DF7QLhiW.js";import"./calendar-RrV66q6z.js";import"./background-CzY98T_5.js";import"./action-settings-BUQ9ZjVs.js";import"./locked-D63j4vhG.js";import"./index-DtPEQmpe.js";import"./ListItemStandard-CZA0fV_-.js";import"./ButtonBadge-i9rcMP6m.js";import"./search-Ex0sxJcA.js";import"./overflow-BJ_HyDZf.js";import"./overflow-DCuOAMEt.js";import"./slim-arrow-down-D9ZL1EHX.js";import"./slim-arrow-down-bQWmrnVc.js";import"./i18n-defaults-Cjp7arcT.js";import"./navigation-right-arrow-O3aG19yG.js";import"./navigation-right-arrow-DHq6wjVC.js";import"./navigation-down-arrow-DJw6Oxgn.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
