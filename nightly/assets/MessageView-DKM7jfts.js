import{j as e}from"./iframe-Ba8pCVp8.js";import{useMDXComponents as h}from"./index-EJQOh2Id.js";import{A as i}from"./ArgTypesWithNote-9RzLfkHS.js";import{C as c}from"./ControlsWithNote-Bd6pYC1H.js";import{D as p}from"./DocsHeader-C-hjUqfu.js";import{F as x}from"./CommandsAndQueries-BwMOH1SZ.js";import{M as g,C as o,a as j,D as r}from"./blocks-CkgJFs4T.js";import{C as t,D as a,M as u,W as f,a as d}from"./MessageView.stories-Cz7uSerk.js";import{S as w}from"./SubcomponentsSection-BVy4lpQe.js";import{M as l}from"./index-De0G6Asu.js";import"./preload-helper-Ct5FWWRu.js";import"./index-ChA7roql.js";import"./information-D2Jo4xNl.js";import"./sys-enter-2-D153taNV.js";import"./alert-D_vJdNjC.js";import"./Tag-D_p_BT-M.js";import"./index-D9TUnkjB.js";import"./index-chGFhN5O.js";import"./Link-x2Qr5Zbu.js";import"./copy-DvB2frbS.js";import"./copy-BQA3UKNo.js";import"./GitHub-Mark-CMsRbTr-.js";import"./TableOfContent-COtDOSzs.js";import"./index-DotiVDwk.js";import"./index-Dl3ePCz7.js";import"./addCustomCSSWithScoping-Bw6JZ75Q.js";import"./index-CfvbnLXm.js";import"./index-COr_Uezf.js";import"./index-D8qxJJnM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CorCBzMG.js";import"./index-CNCeO74r.js";import"./slim-arrow-left-CsR8a6_-.js";import"./index-BGekTIBc.js";import"./Bar-DmxqO8fN.js";import"./InvisibleMessage-DNAVGHgD.js";import"./index-9Yl4D7c1.js";import"./index-C2e0iirB.js";import"./index-BahYCzWG.js";import"./SegmentedButton-Dd9nWvWy.js";function m(s){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...h(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{of:t}),`
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
