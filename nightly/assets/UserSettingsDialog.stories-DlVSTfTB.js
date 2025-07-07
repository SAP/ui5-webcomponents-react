import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as U,c as T,U as a,a as s}from"./action-settings-226PrOmq.js";import"./index-LB2GFOLV.js";import{r as m}from"./index-U0ga5oGA.js";import{S as L}from"./index-CHp_8NGi.js";import{A as R}from"./index-Dj0HSimA.js";import{b as y,a as C,U as M}from"./index-DPyHVsnT.js";import{I as f}from"./index-DVcJAuHe.js";import{T as B}from"./index-D1Et8aR6.js";import{L as t}from"./index-BNsc4RDp.js";import{T as n}from"./index-OzB7lNJQ.js";import{B as i}from"./index-CK7zNLqv.js";import{P as p}from"./index-DUJe68WX.js";import{L as N}from"./index-DoEoZYV5.js";import{L as d}from"./index-Co5dSvyQ.js";import{C as S}from"./index-CBgCoRRT.js";import{C as z,a as l}from"./index-BRxEMCw-.js";import{R as j}from"./index-fSxnYv0p.js";const k={title:"Modals & Popovers / UserSettingsDialog",component:U,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}}},args:{}},c={render(o){const h=m.useRef(null),[I,g]=m.useState(!1),[P,x]=m.useState(o.open),w=r=>{const{settings:u}=r.detail.item.dataset;u&&x(!0)};return m.useEffect(()=>{x(o.open)},[o.open]),e.jsxs(e.Fragment,{children:[e.jsx(L,{primaryTitle:"Corporate Portal",logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(R,{children:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png",alt:"Avatar of the current user"})}),onProfileClick:r=>{h.current.opener=r.detail.targetRef,h.current.open=!0,g(u=>!u)}}),e.jsx(y,{ref:h,open:I,accounts:e.jsx(M,{avatarSrc:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png",titleText:"Alaina Chevalier",subtitleText:"aliana.chevalier@sap.com",description:"Delivery Manager, SAP SE",selected:!0}),onClose:()=>{g(!1)},onItemClick:w,children:e.jsx(C,{icon:T,text:"Settings","data-settings":"true"})}),e.jsxs(U,{...o,open:P,onClose:r=>{o.onClose(r),x(!1)},children:[e.jsx(a,{icon:"user-settings",text:"User Account",tooltip:"User Account",headerText:"User Account",pages:e.jsx(e.Fragment,{children:e.jsxs(s,{children:[e.jsx(f,{name:"person-placeholder"}),e.jsx(B,{level:"H3",size:"H3",className:"ua-name",children:"Alain Chevalier"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"ua-info-item",children:[e.jsx(t,{for:"name",children:"Name:"}),e.jsx(n,{children:"Alain Chevalier"})]}),e.jsxs("div",{className:"ua-info-item",children:[e.jsx(t,{for:"email",children:"Email:"}),e.jsx(n,{children:"alian.chevalier@sap.com"})]}),e.jsxs("div",{className:"ua-info-item",children:[e.jsx(t,{for:"server",children:"Server:"}),e.jsx(n,{children:"delivery-001.sap.com"})]})]}),e.jsx(t,{for:"reset-all-button",children:"Personalization"}),e.jsx("br",{}),e.jsx(i,{children:"Reset All Personalization"}),e.jsx(p,{fixed:!0,className:"ua-panel",children:e.jsx(n,{children:"Reset your personalization settings for the launchpad (such as theme, language, user activities, and home page content)."})})]})})}),e.jsxs(a,{icon:"palette",text:"Appearance",tooltip:"Appearance",headerText:"Appearance",children:[e.jsxs(s,{text:"Themes",children:[e.jsxs(N,{separators:"Inner",children:[e.jsx(d,{icon:"palette",text:"SAP Morning Horizon"}),e.jsx(d,{icon:"palette",text:"SAP Evening Horizon"}),e.jsx(d,{icon:"palette",text:"SAP High Contrast Black (SAP Horizon)"}),e.jsx(d,{icon:"palette",text:"SAP High Contrast White (SAP Horizon)"})]}),e.jsx(i,{className:"save-btn",design:"Emphasized",children:"Save"})]}),e.jsxs(s,{text:"Display settings",children:[e.jsx(S,{checked:!0,text:"Optimized for Touch Input"}),e.jsx(p,{fixed:!0,children:e.jsx(t,{children:"Increases the size and spacing of controls to allow you to interact with them more easily using your fingertip. This is useful for hybrid devices that combine touch and mouse events."})})]})]}),e.jsx(a,{text:"Language & Region",tooltip:"Language & Region",headerText:"Language & Region",pages:e.jsxs(s,{children:[e.jsxs("div",{className:"us-container",children:[e.jsxs("div",{className:"lr-item",children:[e.jsx(t,{children:"Language and Region:"}),e.jsxs(z,{placeholder:"Language",children:[e.jsx(l,{text:"Browse Language"}),e.jsx(l,{text:"English"}),e.jsx(l,{text:"European Spanish"}),e.jsx(l,{text:"French (France)"}),e.jsx(l,{text:"Germany"})]})]}),e.jsxs("div",{className:"lr-item",children:[e.jsx(t,{for:"format",children:"Date Format:"}),e.jsx(n,{children:"MMM d, y"})]})]}),e.jsx(p,{fixed:!0,children:e.jsx(t,{children:`The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check it in the "About" dialog in the "ID of the Application Framework” field.`})}),e.jsx("br",{}),e.jsxs("div",{className:"lt-time-format",children:[e.jsx(t,{for:"timeFormat",children:"Time Format:"}),e.jsx(j,{name:"timeFormat",text:"12h"}),e.jsx(j,{checked:!0,name:"timeFormat",text:"24h"})]}),e.jsx(p,{fixed:!0,children:e.jsx(t,{children:"After you save your settings, the browser will refresh for the new settings to take effect."})})]})}),e.jsxs(a,{icon:"iphone",text:"SAP Mobile Start Application",tooltip:"SAP Mobile Start Application",headerText:"SAP Mobile Start Application",children:[e.jsxs(s,{slot:"pages",children:[e.jsx(i,{children:"iOS"}),e.jsx(i,{children:"Android"})]}),e.jsxs(s,{slot:"pages",text:"Inner Page",secondary:!0,children:[e.jsx(n,{children:"Enable access to your site from the SAP Mobile Start application."}),e.jsx(i,{children:"Install"}),e.jsx(i,{children:"Register"}),e.jsx(n,{children:"Scan the QR Code to install the mobile application"}),e.jsx(f,{name:"qr-code",style:{width:"20rem",height:"20rem"}})]})]}),e.jsx(a,{icon:"bell",text:"Notifications",tooltip:"Notifications",headerText:"Notifications",children:e.jsx(s,{slot:"pages",children:e.jsx(S,{checked:!0,text:"Show High-Priority Notification Alerts"})})}),e.jsxs(a,{icon:"reset",slot:"fixedItems",text:"Reset Settings",tooltip:"Reset Settings",headerText:"Reset Settings",children:[e.jsx(s,{text:"Reset Personalization",children:e.jsx(i,{children:"Reset Personalization content"})}),e.jsx(s,{text:"Reset All Settings",children:e.jsx(i,{children:"Reset All Settings content"})})]})]})]})}};var b,v,A;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render(args) {
    const userMenuRef = useRef<UserMenuDomRef>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(args.open);
    const handleUserMenuItemClick: UserMenuPropTypes['onItemClick'] = e => {
      const {
        settings
      } = e.detail.item.dataset;
      if (settings) {
        setOpen(true);
      }
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <ShellBar primaryTitle={'Corporate Portal'} logo={<img src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />} profile={<Avatar>
              <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png" alt={'Avatar of the current user'} />
            </Avatar>} onProfileClick={event => {
        userMenuRef.current.opener = event.detail.targetRef;
        userMenuRef.current.open = true;
        setMenuOpen(prev => !prev);
      }} />
        <UserMenu ref={userMenuRef} open={menuOpen} accounts={<UserMenuAccount avatarSrc="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png" titleText="Alaina Chevalier" subtitleText="aliana.chevalier@sap.com" description="Delivery Manager, SAP SE" selected />} onClose={() => {
        setMenuOpen(false);
      }} onItemClick={handleUserMenuItemClick}>
          <UserMenuItem icon={actionSettingsIcon} text="Settings" data-settings={'true'} />
        </UserMenu>
        <UserSettingsDialog {...args} open={open} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <UserSettingsItem icon="user-settings" text="User Account" tooltip="User Account" headerText="User Account" pages={<>
                <UserSettingsView>
                  <Icon name="person-placeholder" />
                  <Title level="H3" size="H3" className="ua-name">
                    Alain Chevalier
                  </Title>
                  <div className="container">
                    <div className="ua-info-item">
                      <Label for="name">Name:</Label>
                      <Text>Alain Chevalier</Text>
                    </div>
                    <div className="ua-info-item">
                      <Label for="email">Email:</Label>
                      <Text>alian.chevalier@sap.com</Text>
                    </div>
                    <div className="ua-info-item">
                      <Label for="server">Server:</Label>
                      <Text>delivery-001.sap.com</Text>
                    </div>
                  </div>
                  <Label for="reset-all-button">Personalization</Label>
                  <br />
                  <Button>Reset All Personalization</Button>
                  <Panel fixed className="ua-panel">
                    <Text>
                      Reset your personalization settings for the launchpad (such as theme, language, user activities,
                      and home page content).
                    </Text>
                  </Panel>
                </UserSettingsView>
              </>} />
          <UserSettingsItem icon="palette" text="Appearance" tooltip="Appearance" headerText="Appearance">
            <UserSettingsView text="Themes">
              <List separators="Inner">
                <ListItemStandard icon="palette" text="SAP Morning Horizon" />
                <ListItemStandard icon="palette" text="SAP Evening Horizon" />
                <ListItemStandard icon="palette" text="SAP High Contrast Black (SAP Horizon)" />
                <ListItemStandard icon="palette" text="SAP High Contrast White (SAP Horizon)" />
              </List>
              <Button className="save-btn" design="Emphasized">
                Save
              </Button>
            </UserSettingsView>
            <UserSettingsView text="Display settings">
              <CheckBox checked text="Optimized for Touch Input" />
              <Panel fixed>
                <Label>
                  Increases the size and spacing of controls to allow you to interact with them more easily using your
                  fingertip. This is useful for hybrid devices that combine touch and mouse events.
                </Label>
              </Panel>
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem text="Language & Region" tooltip="Language & Region" headerText="Language & Region" pages={<UserSettingsView>
                <div className="us-container">
                  <div className="lr-item">
                    <Label>Language and Region:</Label>
                    <ComboBox placeholder="Language">
                      <ComboBoxItem text="Browse Language" />
                      <ComboBoxItem text="English" />
                      <ComboBoxItem text="European Spanish" />
                      <ComboBoxItem text="French (France)" />
                      <ComboBoxItem text="Germany" />
                    </ComboBox>
                  </div>
                  <div className="lr-item">
                    <Label for="format">Date Format:</Label>
                    <Text>MMM d, y</Text>
                  </div>
                </div>
                <Panel fixed>
                  <Label>
                    The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check
                    it in the "About" dialog in the "ID of the Application Framework” field.
                  </Label>
                </Panel>
                <br />
                <div className="lt-time-format">
                  <Label for="timeFormat">Time Format:</Label>
                  <RadioButton name="timeFormat" text="12h" />
                  <RadioButton checked name="timeFormat" text="24h" />
                </div>
                <Panel fixed>
                  <Label>
                    After you save your settings, the browser will refresh for the new settings to take effect.
                  </Label>
                </Panel>
              </UserSettingsView>} />
          <UserSettingsItem icon="iphone" text="SAP Mobile Start Application" tooltip="SAP Mobile Start Application" headerText="SAP Mobile Start Application">
            <UserSettingsView slot="pages">
              <Button>iOS</Button>
              <Button>Android</Button>
            </UserSettingsView>
            <UserSettingsView slot="pages" text="Inner Page" secondary>
              <Text>Enable access to your site from the SAP Mobile Start application.</Text>
              <Button>Install</Button>
              <Button>Register</Button>
              <Text>Scan the QR Code to install the mobile application</Text>
              <Icon name="qr-code" style={{
              width: '20rem',
              height: '20rem'
            }} />
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem icon="bell" text="Notifications" tooltip="Notifications" headerText="Notifications">
            <UserSettingsView slot="pages">
              <CheckBox checked text="Show High-Priority Notification Alerts" />
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem icon="reset" slot="fixedItems" text="Reset Settings" tooltip="Reset Settings" headerText="Reset Settings">
            <UserSettingsView text="Reset Personalization">
              <Button>Reset Personalization content</Button>
            </UserSettingsView>
            <UserSettingsView text="Reset All Settings">
              <Button>Reset All Settings content</Button>
            </UserSettingsView>
          </UserSettingsItem>
        </UserSettingsDialog>
      </>;
  }
}`,...(A=(v=c.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const E=["Default"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:c,__namedExportsOrder:E,default:k},Symbol.toStringTag,{value:"Module"}));export{se as C,c as D};
