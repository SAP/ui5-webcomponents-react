import{j as e}from"./jsx-runtime-5926aa06.js";import{e as c}from"./employee-1b8c669d.js";import{A as r}from"./index-f9015272.js";import{L as t}from"./index-a085d11d.js";import{L as f}from"./index-ffdd95e1.js";import{b as s,P as v,N as n}from"./index-4be5db64.js";import{a,b as x}from"./Avatar-9e18acb0.js";import{a as l}from"./Button-b124cb06.js";import{W as L}from"./WrappingType-b81e595a.js";const A={title:"Data Display / NotificationListItem",component:s,argTypes:{avatar:{control:{disable:!0}},children:{control:"text"},footnotes:{control:{disable:!0}},actions:{control:{disable:!0}}},args:{titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",priority:v.None,children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",style:{width:"600px"}}},i={args:{avatar:e.jsx(r,{size:a.XS,children:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_1.png"})}),footnotes:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Monique Legrand"}),e.jsx(t,{children:"2 Days"})]})},render:b=>e.jsx(f,{children:e.jsx(s,{...b})})},o={render:()=>e.jsxs(f,{children:[e.jsx(s,{showClose:!0,avatar:e.jsx(r,{size:a.XS,icon:c}),footnotes:e.jsx(t,{children:"3 Days"}),titleText:"New order (#2526) with multiple NotificationAction buttons and close button",actions:e.jsxs(e.Fragment,{children:[e.jsx(n,{design:l.Transparent,text:"Accept All Requested Information"}),e.jsx(n,{design:l.Transparent,text:"Reject All Requested Information"})]}),children:"Short description"}),e.jsx(s,{avatar:e.jsx(r,{size:a.XS,icon:c,colorScheme:x.Accent1}),footnotes:e.jsx(t,{children:"3 Days"}),titleText:"New order (#2527) with single NotificationAction and close button",showClose:!0,actions:e.jsx(n,{design:l.Transparent,text:"Accept All Requested Information"}),children:"Short description"}),e.jsxs(s,{wrappingType:L.Normal,titleText:"New high priority order (#2528) without close button",priority:v.High,avatar:e.jsx(r,{size:a.XS,children:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_1.png"})}),footnotes:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"John Smith"}),e.jsx(t,{children:"1 hour"})]}),children:["And with a very long description that will not be ellipsed:",e.jsx("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. ",e.jsx("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."]})]})};var u,p,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    avatar: <Avatar size={AvatarSize.XS}>
        <img src="https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_1.png" />
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
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,h,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <List>
        <NotificationListItem showClose avatar={<Avatar size={AvatarSize.XS} icon={employeeIcon} />} footnotes={<Label>3 Days</Label>} titleText="New order (#2526) with multiple NotificationAction buttons and close button" actions={<>
              <NotificationAction design={ButtonDesign.Transparent} text="Accept All Requested Information" />
              <NotificationAction design={ButtonDesign.Transparent} text="Reject All Requested Information" />
            </>}>
          Short description
        </NotificationListItem>
        <NotificationListItem avatar={<Avatar size={AvatarSize.XS} icon={employeeIcon} colorScheme={AvatarColorScheme.Accent1} />} footnotes={<Label>3 Days</Label>} titleText="New order (#2527) with single NotificationAction and close button" showClose actions={<NotificationAction design={ButtonDesign.Transparent} text="Accept All Requested Information" />}>
          Short description
        </NotificationListItem>
        <NotificationListItem wrappingType={WrappingType.Normal} titleText="New high priority order (#2528) without close button" priority={Priority.High} avatar={<Avatar size={AvatarSize.XS}>
              <img src="https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_1.png" />
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
//# sourceMappingURL=NotificationListItem.stories-86867b22.js.map
