import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./SideNavigationSubItem-BdAbPA3z.js";import{c,s as l}from"./chain-link-DPQ_dr7i.js";import{i as u,r as d}from"./react-fLZJfuRT.js";import{_ as f,d as p,o as m,r as h,u as g}from"./blocks-BL36d_RL.js";import{S as _,b as v,f as y,t as b,u as x}from"./components-BxKQlBaO.js";import{n as S,t as C}from"./SubcomponentsSection-Kv79Q7K7.js";import{n as w,r as T,t as E}from"./NavigationLayout.stories-D8LKkLXB.js";function D(e){let t={code:`code`,h2:`h2`,pre:`pre`,...u(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p,{of:w}),`
`,(0,k.jsx)(y,{of:w}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,k.jsx)(h,{of:E}),`
`,(0,k.jsxs)(`details`,{children:[(0,k.jsx)(`summary`,{children:`Show static code`}),(0,k.jsx)(t.pre,{children:(0,k.jsx)(t.code,{className:`language-tsx`,children:`function NavigationLayoutComponent(props) {
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
`,(0,k.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,k.jsx)(v,{of:E}),`
`,(0,k.jsx)(g,{children:C}),`
`,(0,k.jsx)(t.h2,{id:`sidenavigation`,children:`SideNavigation`}),`
`,(0,k.jsx)(m,{of:n}),`
`,(0,k.jsx)(_,{metaOf:w,of:n}),`
`,(0,k.jsx)(t.h2,{id:`sidenavigationitem`,children:`SideNavigationItem`}),`
`,(0,k.jsx)(m,{of:o}),`
`,(0,k.jsx)(_,{metaOf:w,of:o}),`
`,(0,k.jsx)(t.h2,{id:`sidenavigationsubitem`,children:`SideNavigationSubItem`}),`
`,(0,k.jsx)(m,{of:s}),`
`,(0,k.jsx)(_,{metaOf:w,of:s}),`
`,(0,k.jsx)(t.h2,{id:`sidenavigationgroup`,children:`SideNavigationGroup`}),`
`,(0,k.jsx)(m,{of:l}),`
`,(0,k.jsx)(_,{metaOf:w,of:l}),`
`,(0,k.jsx)(x,{})]})}function O(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;function A(){return(A=e((()=>{k=t(),d(),b(),S(),f(),T(),a(),r(),c(),i()})))()}A();export{O as default};