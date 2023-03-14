import{j as e,a as i,F as u}from"./jsx-runtime-670450c2.js";import{e as p}from"./employee-98ce1b38.js";import{A as n}from"./index-014a500a.js";import{L as t}from"./index-6172aa9c.js";import{L as b}from"./index-5d236974.js";import{b as a,P as L,N as l}from"./index-90170e7a.js";import{a as s,b as w}from"./Avatar-7c89587d.js";import{a as c}from"./Button-04bad9a0.js";import{W as N}from"./WrappingType-b81e595a.js";const y={title:"Data Display / NotificationListItem",component:a,argTypes:{avatar:{control:{disable:!0}},children:{control:"text"},footnotes:{control:{disable:!0}},actions:{control:{disable:!0}}},args:{titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",priority:L.None,children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",style:{width:"600px"}}},o={args:{avatar:e(n,{size:s.XS,children:e("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_1.png"})}),footnotes:i(u,{children:[e(t,{children:"Monique Legrand"}),e(t,{children:"2 Days"})]})},render:A=>e(b,{children:e(a,{...A})})},r={render:()=>i(b,{children:[e(a,{showClose:!0,avatar:e(n,{size:s.XS,icon:p}),footnotes:e(t,{children:"3 Days"}),titleText:"New order (#2526) with multiple NotificationAction buttons and close button",actions:i(u,{children:[e(l,{design:c.Transparent,text:"Accept All Requested Information"}),e(l,{design:c.Transparent,text:"Reject All Requested Information"})]}),children:"Short description"}),e(a,{avatar:e(n,{size:s.XS,icon:p,colorScheme:w.Accent1}),footnotes:e(t,{children:"3 Days"}),titleText:"New order (#2527) with single NotificationAction and close button",showClose:!0,actions:e(l,{design:c.Transparent,text:"Accept All Requested Information"}),children:"Short description"}),i(a,{wrappingType:N.Normal,titleText:"New high priority order (#2528) without close button",priority:L.High,avatar:e(n,{size:s.XS,children:e("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_1.png"})}),footnotes:i(u,{children:[e(t,{children:"John Smith"}),e(t,{children:"1 hour"})]}),children:["And with a very long description that will not be ellipsed:",e("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. ",e("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."]})]})};var m,d,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,f,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const S=["Default","MultipleNotifications"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:o,MultipleNotifications:r,__namedExportsOrder:S,default:y},Symbol.toStringTag,{value:"Module"}));export{R as C,o as D,r as M};
//# sourceMappingURL=NotificationListItem.stories-73ff15d0.js.map
