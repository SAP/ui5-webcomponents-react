import{j as e}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{A as b}from"./AvatarColorScheme-Bo7yU2Uu.js";import{A as n}from"./AvatarSize-BceVhWoP.js";import{W as L}from"./WrappingType-CW8URInd.js";import{N as r,a as f}from"./index-DsA5IJvA.js";import{e as l}from"./employee-B3bmkxqw.js";import{A as a}from"./index-C2TtTFQP.js";import{L as t}from"./index-BEyNji6N.js";import{L as v}from"./index-DHu-iORM.js";import{M as c}from"./index-CHBbOhqT.js";import{M as s}from"./index-DR9c-_EI.js";const A={title:"Data Display / NotificationListItem",component:r,argTypes:{avatar:{control:{disable:!0}},children:{control:"text"},footnotes:{control:{disable:!0}},menu:{control:{disable:!0}}},args:{titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",importance:f.Standard,children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",style:{width:"600px"}},tags:["package:@ui5/webcomponents-fiori"]},i={args:{avatar:e.jsx(a,{size:n.XS,children:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Monique Legrand"}),e.jsx(t,{children:"2 Days"})]})},render:x=>e.jsx(v,{children:e.jsx(r,{...x})})},o={render:()=>e.jsxs(v,{children:[e.jsx(r,{showClose:!0,avatar:e.jsx(a,{size:n.XS,icon:l}),footnotes:e.jsx(t,{children:"3 Days"}),titleText:"New order (#2526) with multiple NotificationAction buttons and close button",menu:e.jsxs(c,{children:[e.jsx(s,{text:"Accept All Requested Information"}),e.jsx(s,{text:"Reject All Requested Information"})]}),children:"Short description"}),e.jsx(r,{avatar:e.jsx(a,{size:n.XS,icon:l,colorScheme:b.Accent1}),footnotes:e.jsx(t,{children:"3 Days"}),titleText:"New order (#2527) with single NotificationAction and close button",showClose:!0,menu:e.jsx(c,{children:e.jsx(s,{text:"Accept All Requested Information"})}),children:"Short description"}),e.jsxs(r,{wrappingType:L.Normal,titleText:"New high priority order (#2528) without close button",importance:f.Important,avatar:e.jsx(a,{size:n.XS,children:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"John Smith"}),e.jsx(t,{children:"1 hour"})]}),children:["And with a very long description that will not be ellipsed:",e.jsx("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. ",e.jsx("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."]})]})};var u,m,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    avatar: <Avatar size={AvatarSize.XS}>
        <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
      </Avatar>,
    footnotes: <>
        <Label>Monique Legrand</Label>
        <Label>2 Days</Label>
      </>
  },
  render: args => {
    return <List>
        <NotificationListItem {...args} />
      </List>;
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,h,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <List>
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
      </List>;
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const w=["Default","MultipleNotifications"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:i,MultipleNotifications:o,__namedExportsOrder:w,default:A},Symbol.toStringTag,{value:"Module"}));export{P as C,i as D,o as M};
