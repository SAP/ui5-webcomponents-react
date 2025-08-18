import{j as e}from"./iframe-BZQDLaud.js";import{useMDXComponents as h}from"./index-C_GG0ZGD.js";import{A as i}from"./ArgTypesWithNote-DVCDjsS-.js";import{C as c}from"./ControlsWithNote-D3crpagW.js";import{D as p}from"./DocsHeader-BBbzR6Xb.js";import{F as x}from"./CommandsAndQueries-DWGWAVRo.js";import{M as g,C as o,a as j,D as r}from"./blocks-Cx9bcs1C.js";import{C as t,D as a,M as u,W as f,a as d}from"./MessageView.stories-COSNuvjL.js";import{S as w}from"./SubcomponentsSection-BVy4lpQe.js";import{M as l}from"./index-CrBCITBh.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DJN5YABY.js";import"./information-B9S0fYTB.js";import"./sys-enter-2-CBLZgJFq.js";import"./alert-BSsrq5HK.js";import"./Tag-D-gB3YeX.js";import"./index-CKSa3A9-.js";import"./index-AG4whyzM.js";import"./Link-CNK5l0fe.js";import"./copy-FMabBKUP.js";import"./copy-BROMiSoG.js";import"./GitHub-Mark-CJ_rqd6q.js";import"./TableOfContent-BmdOjVK1.js";import"./index-8dfRRBIr.js";import"./index-D_nwxPuV.js";import"./addCustomCSSWithScoping-BvPnid_d.js";import"./index-Cfu_YQna.js";import"./index-CGfYsqbH.js";import"./index-CvEaTXbe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVHMP-qL.js";import"./index-ClooUb3H.js";import"./slim-arrow-left-Dl6dMVcL.js";import"./index-5rNecsMP.js";import"./Bar-_9jUmp3_.js";import"./InvisibleMessage-BonTwXKe.js";import"./index-BamKFxC-.js";import"./index--V_YgYAz.js";import"./index-C8Fyun0P.js";import"./SegmentedButton-BVtCBJOm.js";function m(s){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...h(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{of:t}),`
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
