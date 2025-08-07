import{j as e}from"./iframe-BOVM1M_Q.js";import{useMDXComponents as h}from"./index-2SvYRCCw.js";import{A as i}from"./ArgTypesWithNote-DJPNiFu9.js";import{C as c}from"./ControlsWithNote-YXdYNE8U.js";import{D as p}from"./DocsHeader-C_cgcxX0.js";import{F as x}from"./CommandsAndQueries-B0E3P6p2.js";import{M as g,C as o,a as j,D as r}from"./blocks-CrIALgP8.js";import{C as t,D as a,M as u,W as f,a as d}from"./MessageView.stories-6h6DSgqb.js";import{S as w}from"./SubcomponentsSection-BVy4lpQe.js";import{M as l}from"./index-CF1Gg2gP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-mxAgSE5r.js";import"./information-CZqrSqxM.js";import"./sys-enter-2-b3EDnzZS.js";import"./alert-sAHWg9Jt.js";import"./Tag-66qvcRmY.js";import"./index-qyBhFjGo.js";import"./index-6YOnZJx5.js";import"./Link-BXYAhhKR.js";import"./copy-BcsqkCUV.js";import"./copy-DbyPBOXI.js";import"./GitHub-Mark-CtAK2XKn.js";import"./TableOfContent-DUvysCa7.js";import"./index-B2niMIbJ.js";import"./index-CmTbq6An.js";import"./addCustomCSSWithScoping-BosPxWiT.js";import"./index-u_WTLBYa.js";import"./index-Dc7kwzo6.js";import"./index-BK7Il_hf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzZbr1e8.js";import"./index-BpCltbmx.js";import"./slim-arrow-left-hw0fXSQS.js";import"./index-CfaNYaHG.js";import"./Bar-Byc8BclX.js";import"./InvisibleMessage-DLe-kdrD.js";import"./index-Bel1DcL3.js";import"./index-B90FK1mG.js";import"./index-BeaqvZoz.js";import"./SegmentedButton-YHRsBGL8.js";function m(s){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...h(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{of:t}),`
`,e.jsx(p,{of:t,subComponents:["MessageItem","MessageViewButton"]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.p,{children:"This component exposes public methods. You can invoke them directly on the instance of the component, e.g. by using React Refs."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Parameters"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"navigateBack"})})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Navigates back to the list view if you are in the details view of a message"})]})})]}),`
`,e.jsx(n.h2,{id:"usage-notes",children:"Usage Notes"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"MessageView"})," can be used in several scenarios, but most likely in Dialogs or Popovers."]}),`
`,e.jsxs(n.p,{children:["If used in a Popover it is recommended that the ",e.jsx(n.code,{children:"MessageViewButton"}),` is used as an opener.
The `,e.jsx(n.code,{children:"type"})," of the button should always reflect the highest severity (Error -> Warning -> Success -> Information)."]}),`
`,e.jsxs(n.p,{children:["If the ",e.jsx(n.code,{children:"MessageView"})," is used in a standalone way, you can set the prop ",e.jsx(n.code,{children:"showDetailsPageHeader"})," to ",e.jsx(n.code,{children:"true"}),`.
This will add a bar to the details page where a back button is contained.`]}),`
`,e.jsxs(n.p,{children:["When used in a ",e.jsx(n.code,{children:"Dialog"})," or a ",e.jsx(n.code,{children:"Popover"}),", we recommend not setting the ",e.jsx(n.code,{children:"showDetailsPageHeader"}),` prop but rather listen
to the `,e.jsx(n.code,{children:"onItemSelect"})," event and add a back button to your Dialog or Popover header and use the ",e.jsx(n.code,{children:"navigateBack()"}),` method
to get back to the list view.`]}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(n.h3,{id:"messageview-in-a-dialog",children:"MessageView in a Dialog"}),`
`,e.jsx(o,{of:u}),`
`,e.jsxs(n.p,{children:["Sample Code: ",e.jsx(n.em,{children:"(Button and Dialog opening are omitted here)"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function MyComponent() {
  const messageViewRef = useRef<MessageViewDomRef>(null);
  const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
  return (
    <Dialog
      resizable
      style={{ width: '500px' }}
      className="modal-without-padding"
      onClose={() => {
        messageViewRef.current.navigateBack();
      }}
      header={
        <Bar
          startContent={
            <FlexBox alignItems={FlexBoxAlignItems.Center}>
              {isOnDetailsPage && (
                <Button
                  icon="slim-arrow-left"
                  design={ButtonDesign.Transparent}
                  onClick={() => {
                    setIsOnDetailsPage(false);
                    messageViewRef.current.navigateBack();
                  }}
                  style={{ marginInline: '0 0.5rem' }}
                />
              )}
              <Title level={TitleLevel.H4}>Messages</Title>
            </FlexBox>
          }
        />
      }
    >
      <MessageView
        ref={messageViewRef}
        showDetailsPageHeader={false}
        onItemSelect={() => {
          setIsOnDetailsPage(true);
        }}
      >
        {/* children */}
      </MessageView>
    </Dialog>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"messageview-in-popover-with-messageviewbutton",children:"MessageView in Popover with MessageViewButton"}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(j,{children:w}),`
`,e.jsx(n.h2,{id:"messageitem",children:"MessageItem"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(i,{metaOf:t,of:d}),`
`,e.jsx(n.h2,{id:"messageviewbutton",children:"MessageViewButton"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(i,{metaOf:t,of:l}),`
`,e.jsx(x,{})]})}function re(s={}){const{wrapper:n}={...h(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(m,{...s})}):m(s)}export{re as default};
