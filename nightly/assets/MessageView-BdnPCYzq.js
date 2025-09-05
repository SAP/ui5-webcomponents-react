import{j as e}from"./iframe-Dh5R3sl2.js";import{useMDXComponents as h}from"./index-D0kyY75e.js";import{A as i}from"./ArgTypesWithNote-C8zMSTDM.js";import{C as c}from"./ControlsWithNote-CkzOSnbR.js";import{D as p}from"./DocsHeader-C10mQrqO.js";import{F as x}from"./CommandsAndQueries-YFNvLEil.js";import{M as g,C as o,a as j,D as r}from"./blocks-IuY-WHWo.js";import{C as s,D as a,M as u,W as f,a as d}from"./MessageView.stories-BX0nlwa8.js";import{S as w}from"./SubcomponentsSection-BVy4lpQe.js";import{M as l}from"./index-BMXkw1Ww.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DCXZOGva.js";import"./index-DuupinLA.js";import"./information-1k13pukw.js";import"./sys-enter-2-Bg-xb7Sg.js";import"./alert-D22kL76Q.js";import"./Tag-lLVMTbba.js";import"./index-jqGKriQv.js";import"./index-B_8MBugC.js";import"./Link-DL-0s2QE.js";import"./copy-DtvrOkiW.js";import"./copy-DlGd5HR3.js";import"./GitHub-Mark-TQJ1TPXd.js";import"./TableOfContent-DG2LFSrm.js";import"./index-yFvmPqI1.js";import"./index-C6B4Jvhh.js";import"./addCustomCSSWithScoping-BFt5ScaE.js";import"./index-CiXXffOm.js";import"./index-BasyJdtx.js";import"./index-U9nJPHWS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ck5sFlQM.js";import"./index-4nJOmPH_.js";import"./slim-arrow-left-zzeEtHXq.js";import"./index-C5QVA-vv.js";import"./Bar-BsG_P03i.js";import"./AnimationMode-CMNQ38zi.js";import"./InvisibleMessage-CqVAFS8W.js";import"./index-DXERoPHz.js";import"./index-CllrV2Ic.js";import"./index-D0SZ3ivo.js";import"./SegmentedButton-BBntDzPz.js";function m(t){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...h(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{of:s}),`
`,e.jsx(p,{of:s,subComponents:["MessageItem","MessageViewButton"]}),`
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
`,e.jsx(i,{metaOf:s,of:d}),`
`,e.jsx(n.h2,{id:"messageviewbutton",children:"MessageViewButton"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(i,{metaOf:s,of:l}),`
`,e.jsx(x,{})]})}function de(t={}){const{wrapper:n}={...h(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(m,{...t})}):m(t)}export{de as default};
