import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./WrappingType-OlQEie_k.js";import{n as a,t as o}from"./Label-CC0T01Qq.js";import{n as s,t as c}from"./Avatar-Dm5D8x66.js";import{n as l,t as u}from"./AvatarSize-ck28NMEv.js";import{n as d,t as f}from"./employee-DnTXlWDs.js";import{n as p,t as m}from"./AvatarColorScheme-YeCmNIfk.js";import{n as h,t as g}from"./Menu-DDaftZlK.js";import{n as _,t as v}from"./MenuItem-BhfeUVhl.js";import{a as y,c as b,i as x,n as S,o as C,r as w,s as T,t as E}from"./NotificationListItem-qalStlSR.js";var D=t({Default:()=>A,Grouped:()=>j,__namedExportsOrder:()=>M,default:()=>k}),O,k,A,j,M;function N(){return(N=e((()=>{p(),l(),r(),x(),d(),s(),a(),h(),_(),C(),S(),b(),O=n(),k={title:`Data Display / NotificationList`,component:T,argTypes:{children:{control:{disable:!0}}},args:{},tags:[`package:@ui5/webcomponents-fiori`]},A={render:e=>(0,O.jsxs)(T,{...e,children:[(0,O.jsx)(E,{showClose:!0,avatar:(0,O.jsx)(c,{size:u.XS,icon:f}),footnotes:(0,O.jsx)(o,{children:`3 Days`}),titleText:`New order (#2526) with multiple NotificationAction buttons and close button`,menu:(0,O.jsxs)(g,{children:[(0,O.jsx)(v,{text:`Accept All Requested Information`}),(0,O.jsx)(v,{text:`Reject All Requested Information`})]}),children:`Short description`}),(0,O.jsx)(E,{avatar:(0,O.jsx)(c,{size:u.XS,icon:f,colorScheme:m.Accent1}),footnotes:(0,O.jsx)(o,{children:`3 Days`}),titleText:`New order (#2527) with single NotificationAction and close button`,showClose:!0,menu:(0,O.jsx)(g,{children:(0,O.jsx)(v,{text:`Accept All Requested Information`})}),children:`Short description`}),(0,O.jsxs)(E,{wrappingType:i.Normal,titleText:`New high priority order (#2528) without close button`,importance:w.Important,avatar:(0,O.jsx)(c,{size:u.XS,children:(0,O.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png`})}),footnotes:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(o,{children:`John Smith`}),(0,O.jsx)(o,{children:`1 hour`})]}),children:[`And with a very long description that will not be ellipsed:`,(0,O.jsx)(`br`,{}),`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. `,(0,O.jsx)(`br`,{}),`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.`]})]})},j={render:e=>(0,O.jsx)(T,{...e,children:(0,O.jsxs)(y,{titleText:`Orders`,children:[(0,O.jsx)(E,{importance:w.Standard,titleText:`New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.`,avatar:(0,O.jsx)(c,{size:u.XS,children:(0,O.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png`})}),footnotes:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`span`,{children:`Monique Legrand`}),(0,O.jsx)(`span`,{children:`2 Days`})]}),menu:(0,O.jsxs)(g,{children:[(0,O.jsx)(v,{icon:`accept`,text:`Accept`}),(0,O.jsx)(v,{icon:`message-error`,text:`Reject`})]}),children:`And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.`}),(0,O.jsx)(E,{showClose:!0,titleText:`New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.`,importance:w.Important,avatar:(0,O.jsx)(c,{size:u.XS,children:(0,O.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png`})}),footnotes:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`span`,{children:`Alain Devalier`}),(0,O.jsx)(`span`,{children:`2 Days`})]}),menu:(0,O.jsxs)(g,{children:[(0,O.jsx)(v,{icon:`accept`,text:`Accept`}),(0,O.jsx)(v,{icon:`message-error`,text:`Reject`})]}),children:`And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.`})]})})},M=[`Default`,`Grouped`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <NotificationList {...args}>
        <NotificationListItem showClose avatar={<Avatar size={AvatarSize.XS} icon={employeeIcon} />} footnotes={<Label>3 Days</Label>} titleText="New order (#2526) with multiple NotificationAction buttons and close button" menu={<Menu>
              <MenuItem text="Accept All Requested Information" />
              <MenuItem text="Reject All Requested Information" />
            </Menu>}>
          Short description
        </NotificationListItem>
        <NotificationListItem avatar={<Avatar size={AvatarSize.XS} icon={employeeIcon} colorScheme={AvatarColorScheme.Accent1} />} footnotes={<Label>3 Days</Label>} titleText="New order (#2527) with single NotificationAction and close button" showClose menu={<Menu>
              <MenuItem text="Accept All Requested Information" />
            </Menu>}>
          Short description
        </NotificationListItem>
        <NotificationListItem wrappingType={WrappingType.Normal} titleText="New high priority order (#2528) without close button" importance={NotificationListItemImportance.Important} avatar={<Avatar size={AvatarSize.XS}>
              <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>} footnotes={<>
              <Label>John Smith</Label>
              <Label>1 hour</Label>
            </>}>
          And with a very long description that will not be ellipsed:
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra,
          tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum
          lectus turpis at nunc. <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra,
          tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum
          lectus turpis at nunc.
        </NotificationListItem>
      </NotificationList>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <NotificationList {...args}>
        <NotificationListGroupItem titleText="Orders">
          <NotificationListItem importance={NotificationListItemImportance.Standard} titleText={'New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.'} avatar={<Avatar size={AvatarSize.XS}>
                <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png" />
              </Avatar>} footnotes={<>
                <span>Monique Legrand</span>
                <span>2 Days</span>
              </>} menu={<Menu>
                <MenuItem icon="accept" text="Accept" />
                <MenuItem icon="message-error" text="Reject" />
              </Menu>}>
            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
            nec elementum lectus turpis at nunc.
          </NotificationListItem>
          <NotificationListItem showClose titleText="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." importance={NotificationListItemImportance.Important} avatar={<Avatar size={AvatarSize.XS}>
                <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png" />
              </Avatar>} footnotes={<>
                <span>Alain Devalier</span>
                <span>2 Days</span>
              </>} menu={<Menu>
                <MenuItem icon="accept" text="Accept" />
                <MenuItem icon="message-error" text="Reject" />
              </Menu>}>
            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
            nec elementum lectus turpis at nunc.
          </NotificationListItem>
        </NotificationListGroupItem>
      </NotificationList>;
  }
}`,...j.parameters?.docs?.source}}}})))()}export{N as i,j as n,D as r,A as t};