import{j as e}from"./iframe-nPyk7Pli.js";import{useMDXComponents as s}from"./index-CtkrgsHZ.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-kpZj3_CU.js";import"./Tag-DE1zjgne.js";import"./index-Db4ElCLi.js";import{C as h}from"./ControlsWithNote-Bxn-4kSn.js";import{D as I}from"./DocsHeader-Ct2B1yC6.js";import{F as y}from"./CommandsAndQueries-BH3LWIrk.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-Dqh5DgZJ.js";import{C as d,D as m,a as F}from"./Form.stories-BtBxkWRv.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BO_mntst.js";import"./sys-enter-2-DaFu4CEs.js";import"./alert-UB53-VFT.js";import"./index-Bf4gw30l.js";import"./index-DuhaT3ww.js";import"./Link-DLcMVbxe.js";import"./copy-BLj-zT6B.js";import"./copy-YekArnCd.js";import"./GitHub-Mark-DYogR2nu.js";import"./TableOfContent-txTLOiW_.js";import"./index-B-9nmnKT.js";import"./index-4UD2mlLT.js";import"./addCustomCSSWithScoping-98xqr_q6.js";import"./index-BsO78O3m.js";import"./index-QcasdNWm.js";import"./index-CrWnOU7h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cqyy-sBZ.js";import"./Input-BE7iMtB8.js";import"./ResponsivePopoverCommon.css-DCRzDw4o.js";import"./ValueStateMessage.css-5GikroWi.js";import"./Suggestions.css-BKHPD-ad.js";import"./index-CrHliK5Y.js";import"./index-BoZbY8eq.js";import"./index-ZYyIsLUD.js";import"./Select-RQ6rgJWT.js";import"./InvisibleMessage-CP2XxzVV.js";import"./slim-arrow-down-B-fe4k97.js";import"./slim-arrow-down-BcON-Wjl.js";import"./index-Cx6mx0cC.js";import"./Option-glJsPgx-.js";import"./ListItemBaseTemplate-BHadPsZP.js";import"./index-BxYyMEin.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
`,e.jsx(I,{of:d,subComponents:["FormGroup","FormItem"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{of:m}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(t.h2,{id:"display-only-and-edit-mode",children:"Display-Only and Edit mode"}),`
`,e.jsx(o,{of:F,sourceState:"none"}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const StandardField = ({ editMode, value, inputType = InputType.Text, onInput, ...rest }) => {
  if (editMode) {
    return <Input value={value} style={{ width: '100%' }} type={inputType} onInput={onInput} {...rest} />;
  }
  if (inputType === InputType.URL || inputType === InputType.Email) {
    return (
      <Link href={inputType === InputType.Email ? \`mailto:\${value}\` : value} target="_blank" {...rest}>
        {value}
      </Link>
    );
  }
  return <Text {...rest}>{value}</Text>;
};

const reducer = (state, { field, value }) => {
  return { ...state, [field]: value };
};

const FormComponent = (props) => {
  const [editMode, toggleEditMode] = useReducer((prev) => !prev, false, undefined);
  const [formState, dispatch] = useReducer(
    reducer,
    {
      name: 'Red Point Stores',
      street: 'Main St 1618',
      zip: 31415,
      city: 'Maintown',
      country: 'Germany',
      web: 'https://www.sap.com',
      mail: 'john.smith@sap.com',
      twitter: '@sap',
      phone: '+49 1234 56789'
    },
    undefined
  );
  const { zip, city, name, street, country, web, mail, twitter, phone } = formState;

  const handleInput = (e) => {
    dispatch({ field: Object.keys(e.target.dataset)[0], value: e.target.value });
  };

  return (
    <>
      <Button onClick={toggleEditMode}>Toggle {editMode ? 'Display-Only Mode' : 'Edit Mode'}</Button>
      <Form
        {...props}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormGroup titleText="Address">
          <FormItem label="Name">
            <StandardField editMode={editMode} value={name} onInput={handleInput} data-name />
          </FormItem>
          <FormItem label="Street">
            <StandardField editMode={editMode} value={street} onInput={handleInput} data-street />
          </FormItem>
          <FormItem label="ZIP Code / City">
            {editMode ? (
              <>
                <Input value={zip} type={InputType.Number} style={{ width: '30%' }} onInput={handleInput} data-zip />
                <Input value={city} style={{ width: '70%' }} onInput={handleInput} data-city />
              </>
            ) : (
              <Text>{\`\${zip} \${city}\`}</Text>
            )}
          </FormItem>
          <FormItem label="Country">
            <StandardField editMode={editMode} value={country} onInput={handleInput} data-country />
          </FormItem>
          <FormItem label="Web">
            <StandardField editMode={editMode} value={web} inputType={InputType.URL} onInput={handleInput} data-web />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Contact">
          <FormItem label="Email">
            <StandardField
              editMode={editMode}
              value={mail}
              inputType={InputType.Email}
              onInput={handleInput}
              data-email
            />
          </FormItem>
          <FormItem label="Twitter">
            <StandardField editMode={editMode} value={twitter} onInput={handleInput} data-twitter />
          </FormItem>
          <FormItem label="Phone">
            <StandardField
              editMode={editMode}
              value={phone}
              inputType={InputType.Tel}
              onInput={handleInput}
              data-phone
            />
          </FormItem>
        </FormGroup>
      </Form>
    </>
  );
};
`})})]}),`
`,e.jsx(c,{children:x}),`
`,e.jsx(t.h2,{id:"form-group",children:"Form Group"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h2,{id:"formitem",children:"FormItem"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(y,{})]})}function le(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{le as default};
