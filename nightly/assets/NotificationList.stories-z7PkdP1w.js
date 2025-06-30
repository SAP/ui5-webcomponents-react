import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as L}from"./AvatarColorScheme-CysxkulG.js";import{A as s}from"./AvatarSize-BtKTMFJ5.js";import{W as j}from"./WrappingType-BBpR8qCJ.js";import{b as m,N as a,c as u,a as b}from"./index-Fc_bsRso.js";import{e as p}from"./employee-CBSPn2r1.js";import{A as r}from"./index-Dj0HSimA.js";import{L as n}from"./index-BHoJB3Bj.js";import{M as c}from"./index-Bvqyugkx.js";import{M as t}from"./index-BfSk7JT9.js";const A={title:"Data Display / NotificationList",component:m,argTypes:{children:{control:{disable:!0}}},args:{},tags:["package:@ui5/webcomponents-fiori"]},i={render:l=>e.jsxs(m,{...l,children:[e.jsx(a,{showClose:!0,avatar:e.jsx(r,{size:s.XS,icon:p}),footnotes:e.jsx(n,{children:"3 Days"}),titleText:"New order (#2526) with multiple NotificationAction buttons and close button",menu:e.jsxs(c,{children:[e.jsx(t,{text:"Accept All Requested Information"}),e.jsx(t,{text:"Reject All Requested Information"})]}),children:"Short description"}),e.jsx(a,{avatar:e.jsx(r,{size:s.XS,icon:p,colorScheme:L.Accent1}),footnotes:e.jsx(n,{children:"3 Days"}),titleText:"New order (#2527) with single NotificationAction and close button",showClose:!0,menu:e.jsx(c,{children:e.jsx(t,{text:"Accept All Requested Information"})}),children:"Short description"}),e.jsxs(a,{wrappingType:j.Normal,titleText:"New high priority order (#2528) without close button",importance:u.Important,avatar:e.jsx(r,{size:s.XS,children:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"John Smith"}),e.jsx(n,{children:"1 hour"})]}),children:["And with a very long description that will not be ellipsed:",e.jsx("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. ",e.jsx("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."]})]})},o={render:l=>e.jsx(m,{...l,children:e.jsxs(b,{titleText:"Orders",children:[e.jsx(a,{importance:u.Standard,titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",avatar:e.jsx(r,{size:s.XS,children:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Monique Legrand"}),e.jsx("span",{children:"2 Days"})]}),menu:e.jsxs(c,{children:[e.jsx(t,{icon:"accept",text:"Accept"}),e.jsx(t,{icon:"message-error",text:"Reject"})]}),children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."}),e.jsx(a,{showClose:!0,titleText:"New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",importance:u.Important,avatar:e.jsx(r,{size:s.XS,children:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Alain Devalier"}),e.jsx("span",{children:"2 Days"})]}),menu:e.jsxs(c,{children:[e.jsx(t,{icon:"accept",text:"Accept"}),e.jsx(t,{icon:"message-error",text:"Reject"})]}),children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."})]})})};var d,h,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
              <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
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
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,f,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <NotificationList {...args}>
        <NotificationListGroupItem titleText="Orders">
          <NotificationListItem importance={NotificationListItemImportance.Standard} titleText={'New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.'} avatar={<Avatar size={AvatarSize.XS}>
                <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
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
                <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
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
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const w=["Default","Grouped"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Grouped:o,__namedExportsOrder:w,default:A},Symbol.toStringTag,{value:"Module"}));export{D as C,i as D,o as G};
