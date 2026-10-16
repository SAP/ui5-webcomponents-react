import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./MessageViewButton-CD2egNFF.js";import{i,r as a}from"./react-BOKIvUzN.js";import{_ as o,d as s,o as c,r as l,u}from"./blocks-DXeKFkas.js";import{S as d,b as f,f as p,t as m,u as h}from"./components-B-xCMNi4.js";import{n as g,t as _}from"./SubcomponentsSection-Kv79Q7K7.js";import{a as v,i as y,n as b,o as x,r as S,s as C,t as w}from"./MessageView.stories-C6k1VEbH.js";function T(e){let t={code:`code`,em:`em`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...i(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(s,{of:S}),`
`,(0,D.jsx)(p,{of:S,subComponents:[`MessageItem`,`MessageViewButton`]}),`
`,(0,D.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,D.jsx)(l,{of:w}),`
`,(0,D.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,D.jsx)(f,{of:w}),`
`,(0,D.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,D.jsx)(t.p,{children:`This component exposes public methods. You can invoke them directly on the instance of the component, e.g. by using React Refs.`}),`
`,(0,D.jsxs)(t.table,{children:[(0,D.jsx)(t.thead,{children:(0,D.jsxs)(t.tr,{children:[(0,D.jsx)(t.th,{children:`Name`}),(0,D.jsx)(t.th,{children:`Parameters`}),(0,D.jsx)(t.th,{children:`Description`})]})}),(0,D.jsx)(t.tbody,{children:(0,D.jsxs)(t.tr,{children:[(0,D.jsx)(t.td,{children:(0,D.jsx)(t.strong,{children:(0,D.jsx)(t.code,{children:`navigateBack`})})}),(0,D.jsx)(t.td,{children:`—`}),(0,D.jsx)(t.td,{children:`Navigates back to the list view if you are in the details view of a message`})]})})]}),`
`,(0,D.jsx)(t.h2,{id:`usage-notes`,children:`Usage Notes`}),`
`,(0,D.jsxs)(t.p,{children:[`The `,(0,D.jsx)(t.code,{children:`MessageView`}),` can be used in several scenarios, but most likely in Dialogs or Popovers.`]}),`
`,(0,D.jsxs)(t.p,{children:[`If used in a Popover it is recommended that the `,(0,D.jsx)(t.code,{children:`MessageViewButton`}),` is used as an opener.
The `,(0,D.jsx)(t.code,{children:`type`}),` of the button should always reflect the highest severity (Error -> Warning -> Success -> Information).`]}),`
`,(0,D.jsxs)(t.p,{children:[`If the `,(0,D.jsx)(t.code,{children:`MessageView`}),` is used in a standalone way, you can set the prop `,(0,D.jsx)(t.code,{children:`showDetailsPageHeader`}),` to `,(0,D.jsx)(t.code,{children:`true`}),`.
This will add a bar to the details page where a back button is contained.`]}),`
`,(0,D.jsxs)(t.p,{children:[`When used in a `,(0,D.jsx)(t.code,{children:`Dialog`}),` or a `,(0,D.jsx)(t.code,{children:`Popover`}),`, we recommend not setting the `,(0,D.jsx)(t.code,{children:`showDetailsPageHeader`}),` prop but rather listen
to the `,(0,D.jsx)(t.code,{children:`onItemSelect`}),` event and add a back button to your Dialog or Popover header and use the `,(0,D.jsx)(t.code,{children:`navigateBack()`}),` method
to get back to the list view.`]}),`
`,(0,D.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,D.jsx)(t.h3,{id:`messageview-in-a-dialog`,children:`MessageView in a Dialog`}),`
`,(0,D.jsx)(l,{of:b}),`
`,(0,D.jsxs)(t.p,{children:[`Sample Code: `,(0,D.jsx)(t.em,{children:`(Button and Dialog opening are omitted here)`})]}),`
`,(0,D.jsx)(t.pre,{children:(0,D.jsx)(t.code,{className:`language-tsx`,children:`function MyComponent() {
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
`,(0,D.jsx)(t.h3,{id:`messageview-in-popover-with-messageviewbutton`,children:`MessageView in Popover with MessageViewButton`}),`
`,(0,D.jsx)(l,{of:y}),`
`,(0,D.jsx)(u,{children:_}),`
`,(0,D.jsx)(t.h2,{id:`messageitem`,children:`MessageItem`}),`
`,(0,D.jsx)(c,{of:x}),`
`,(0,D.jsx)(d,{metaOf:S,of:x}),`
`,(0,D.jsx)(t.h2,{id:`messageviewbutton`,children:`MessageViewButton`}),`
`,(0,D.jsx)(c,{of:r}),`
`,(0,D.jsx)(d,{metaOf:S,of:r}),`
`,(0,D.jsx)(h,{})]})}function E(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;function O(){return(O=e((()=>{D=t(),a(),m(),o(),v(),g(),C(),n()})))()}O();export{E as default};