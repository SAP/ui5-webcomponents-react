import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{n,t as r}from"./withWebComponent-DDACWNN1.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./sys-enter-2-RkTVhYCs.js";import{n as d,t as f}from"./edit-BFBUpPac.js";import{n as p,t as m}from"./Avatar-C4WM0q77.js";import{n as h}from"./employee-BRwqGlx7.js";import{n as g}from"./AvatarBadge-DAtAParg.js";var _;function v(){return(v=e((()=>{g(),r(),_=n(`ui5-avatar-badge`,[`colorScheme`,`icon`,`state`,`tooltip`],[],[],[]),_.displayName=`AvatarBadge`;try{_.displayName=`AvatarBadge`,_.__docgenInfo={description:`The \`AvatarBadge\` component is used to display a badge on top of \`Avatar\` component.
The badge can display an icon and supports different states for visual affordance.

### Usage

The badge should be used as a child element of \`Avatar\` in the \`badge\` slot.

\`\`\`html
<Avatar>
  <AvatarBadge icon="edit" slot="badge"></AvatarBadge>
</Avatar>
\`\`\`

### Keyboard Handling

The badge does not receive keyboard focus.



__Note:__ This is a UI5 Web Component! [AvatarBadge UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/AvatarBadge) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`AvatarBadge`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,methods:[],props:{colorScheme:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`}],description:'Defines the color scheme of the badge using the indication color palette.\n\nAvailable options are `"1"` through `"10"`, matching the indication colors.\n\n**Note:** `state` takes precedence - when `state` is set to any value other than `None`,\nthe semantic state styling applies and `colorScheme` is ignored.\n\n**Note:** Available since [v2.27.0](https://github.com/UI5/webcomponents/releases/tag/v2.27.0) of **@ui5/webcomponents**.',name:`colorScheme`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},icon:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`}],description:`Defines the icon name to be displayed inside the badge.

**Note:** You should import the desired icon first, then use its name as "icon".

\`import "@ui5/webcomponents-icons/dist/{icon_name}.js"\``,name:`icon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},state:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`}],description:"Defines the state of the badge, which determines its styling.\n\nAvailable options:\n- `None` (default) - Standard appearance\n- `Positive` - Green, used for success/approved states\n- `Critical` - Orange, used for warning states\n- `Negative` - Red, used for error/rejected states\n- `Information` - Blue, used for informational states\n\n**Note:** `state` takes precedence over `colorScheme`. When `state` is set\nto any value other than `None`, the semantic styling applies and `colorScheme` is ignored.",name:`state`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Critical" | ValueState | "Positive" | "Negative" | "Information"`,value:[{value:`"None"`},{value:`"Critical"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`},{value:`"Negative"`},{value:`"Information"`}]}},tooltip:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`}],description:`Defines the tooltip text of the badge icon.

**Note:** If not provided, the badge uses the icon accessible name.
If no icon accessible name is available, a generic fallback text is used.

**Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents**.`,name:`tooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/AvatarBadge/index.d.ts`,name:`AvatarBadgeAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.19.0](https://github.com/UI5/webcomponents/releases/tag/v2.19.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var y=t({CustomStyling:()=>T,Default:()=>S,WithBadge:()=>w,WithImage:()=>C,__namedExportsOrder:()=>E,default:()=>x}),b,x,S,C,w,T,E;function D(){return(D=e((()=>{h(),o(),d(),c(),u(),v(),p(),b=i(),x={title:`Data Display / Avatar`,component:m,argTypes:{children:{control:{disable:!0}},badge:{control:{disable:!0}}},args:{icon:`employee`},tags:[`package:@ui5/webcomponents`]},S={},C={args:{fallbackIcon:`employee`,icon:void 0},render:e=>(0,b.jsx)(m,{...e,children:(0,b.jsx)(`img`,{alt:`Person`,src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png`})})},w={render:e=>(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,columnGap:`0.5rem`},children:[(0,b.jsx)(m,{...e,initials:`JD`,colorScheme:`Accent5`,badge:(0,b.jsx)(_,{icon:f,state:`None`})}),(0,b.jsx)(m,{...e,icon:`employee`,colorScheme:`Accent10`,badge:(0,b.jsx)(_,{icon:l,state:`Critical`})}),(0,b.jsx)(m,{...e,badge:(0,b.jsx)(_,{icon:s,state:`Positive`}),children:(0,b.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/man_avatar_1.png`,alt:`Person`})}),(0,b.jsx)(m,{...e,shape:`Square`,badge:(0,b.jsx)(_,{icon:a,state:`Negative`}),children:(0,b.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_5.png`,alt:`Person`})})]})},T={args:{style:{width:`250px`,height:`250px`,border:`1px solid var(--sapField_BorderColor)`}},render:e=>(0,b.jsx)(m,{...e,children:(0,b.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/Lamp_avatar_01.jpg`,alt:`Lamp`,style:{objectFit:`contain`}})})},E=[`Default`,`WithImage`,`WithBadge`,`CustomStyling`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    fallbackIcon: 'employee',
    icon: undefined
  },
  render: args => <Avatar {...args}>
      <img alt="Person" src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png" />
    </Avatar>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    columnGap: '0.5rem'
  }}>
      <Avatar {...args} initials="JD" colorScheme="Accent5" badge={<AvatarBadge icon={editIcon} state="None" />} />
      <Avatar {...args} icon="employee" colorScheme="Accent10" badge={<AvatarBadge icon={alertIcon} state="Critical" />} />
      <Avatar {...args} badge={<AvatarBadge icon={sysEnter2Icon} state="Positive" />}>
        <img src="https://ui5.github.io/webcomponents/images/avatars/man_avatar_1.png" alt="Person" />
      </Avatar>
      <Avatar {...args} shape="Square" badge={<AvatarBadge icon={errorIcon} state="Negative" />}>
        <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_5.png" alt="Person" />
      </Avatar>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      width: '250px',
      height: '250px',
      border: '1px solid var(--sapField_BorderColor)'
    }
  },
  render: args => <Avatar {...args}>
      <img src="https://ui5.github.io/webcomponents/images/avatars/Lamp_avatar_01.jpg" alt="Lamp" style={{
      objectFit: 'contain'
    }} />
    </Avatar>
}`,...T.parameters?.docs?.source}}}})))()}export{C as a,w as i,T as n,D as o,S as r,y as t};