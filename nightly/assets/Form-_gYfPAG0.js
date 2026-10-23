import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,n as r,r as i,t as a}from"./FormItem-D_rwFto9.js";import{i as o,r as s}from"./react-fLZJfuRT.js";import{_ as c,d as l,n as u,o as d,r as f,u as p}from"./blocks-MW67Qccu.js";import{b as m,f as h,t as g,u as _}from"./components-hdRKvnj4.js";import{n as v,t as y}from"./SubcomponentsSection-Kv79Q7K7.js";import{i as b,n as x,r as S,t as C}from"./Form.stories-Ct_lNxat.js";function w(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,pre:`pre`,...o(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(l,{of:S}),`
`,(0,E.jsx)(h,{of:S,subComponents:[`FormGroup`,`FormItem`]}),`
`,(0,E.jsx)(`br`,{}),`
`,(0,E.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,E.jsx)(f,{of:C}),`
`,(0,E.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,E.jsx)(m,{of:C}),`
`,(0,E.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,E.jsx)(t.h2,{id:`display-only-and-edit-mode`,children:`Display-Only and Edit mode`}),`
`,(0,E.jsx)(f,{of:x,sourceState:`none`}),`
`,(0,E.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,E.jsxs)(`details`,{children:[(0,E.jsx)(`summary`,{children:`Show Code`}),(0,E.jsx)(t.pre,{children:(0,E.jsx)(t.code,{className:`language-jsx`,children:`const StandardField = ({ editMode, value, inputType = InputType.Text, onInput, ...rest }) => {
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
`,(0,E.jsx)(p,{children:y}),`
`,(0,E.jsx)(t.h2,{id:`form-group`,children:`Form Group`}),`
`,(0,E.jsx)(d,{of:i}),`
`,(0,E.jsx)(u,{of:i}),`
`,(0,E.jsx)(t.h2,{id:`formitem`,children:`FormItem`}),`
`,(0,E.jsx)(d,{of:a}),`
`,(0,E.jsx)(u,{of:a}),`
`,(0,E.jsx)(_,{})]})}function T(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;function D(){return(D=e((()=>{E=t(),s(),g(),v(),c(),n(),r(),b()})))()}D();export{T as default};