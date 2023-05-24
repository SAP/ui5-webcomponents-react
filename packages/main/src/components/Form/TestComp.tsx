import React from 'react';
import { ThemeProvider, Input, FormItem, FormGroup } from '../..';
import { createContext, useContext, useState, useCallback, useMemo, useEffect, useLayoutEffect, useRef } from 'react';
import { FormContext, GroupContext, useFormGroupContext } from './FormContext.js';
import { Form } from './NewForm.js';
import { Form as OldForm } from './index.js';

// TLDR: Best and easiest solution within several iterations; Performant with only two renders. One for register all childrens. One for the final layout
// Problem solved: FromGroup without Items knows it. See TestApp2 (too complicated);
//

function App() {
  return (
    <ThemeProvider>
      <Form titleText="Test">
        <FormGroup id={'Item02'} titleText="Empty" />
        <CustomComponent id="Custom1">
          <FormItem id="CustomFormItem1" label="Hello there">
            <Input />
          </FormItem>
        </CustomComponent>
        {/*  <FormGroup id={'Item03'} titleText="Empty2" />*/}
        {/*  /!*  /!*" Wrapped components "*!/*!/*/}
        {/*  /!*  <FormItem id={'Item2'} /> /!*" Correct map order test - Id shouldn't matter map.forEach => ordered map " *!/*!/*/}
        {/*  /!*  /!*<FormGroup id={'Group1'} /> /!*""No FormItem test "*!/*!/*!/*/}
        {/*  /!*  <FormItem id={'Item1'} /> /!*"" No FormGroup test "*!/*!/*/}
        {/*  /!*  /!*<FormGroup id={'Group2'}>*!/*!/*/}
        {/*  /!*  /!*  /!*""With FormItems test"*!/*!/*!/*/}
        {/*  /!*  /!*  <CustomComponent id="Custom2">*!/*!/*/}
        {/*  /!*  /!*    /!*" Wrapped FormItems "*!/*!/*!/*/}
        {/*  /!*  /!*    <FormItem id={'Item3'} />*!/*!/*/}
        {/*  /!*  /!*    <FormItem id={'Item4'} />*!/*!/*/}
        {/*  /!*  /!*    <CustomComponent id="Custom3">*!/*!/*/}
        {/*  /!*  /!*      /!*""Deep wrapped FormItem "*!/*!/*!/*/}
        {/*  /!*  /!*      <FormItem id={'Item5'} />*!/*!/*/}
        {/*  /!*  /!*    </CustomComponent>*!/*!/*/}
        {/*  /!*  /!*  </CustomComponent>*!/*!/*/}
        {/*  /!*  /!*</FormGroup>*!/*!/*/}
        {/*</CustomComponent>*/}
        <FormGroup id={'Item04'} titleText="Empty">
          <FormItem id="Item01" label="Hello there">
            <Input />
          </FormItem>
        </FormGroup>
      </Form>
    </ThemeProvider>
  );
}

const CustomComponent = ({ children, id }) => {
  console.log('Render CustomComponent ' + id);
  return <>{children}</>;
};

const FormGroupX = ({ id, children }: any) => {
  const { formGroups: layoutInfos, registerItem, unregisterItem } = useContext(FormContext);

  useEffect(() => {
    registerItem?.(id, 'formGroup');
    return () => unregisterItem?.(id);
  }, [id, registerItem, unregisterItem]);

  const value = useMemo(() => ({ id }), [id]);

  const layoutInfo = useMemo(() => layoutInfos?.find(({ id: groupId }) => id === groupId), [layoutInfos]);
  // console.log("Render FormGroup " + id, layoutInfo);
  console.log('Render FormGroup');
  return (
    <GroupContext.Provider value={value}>
      <>
        {/* See below: #1 for description */}
        {layoutInfo && (
          <>
            FormGroup with Id: {layoutInfo.id}; Index: {layoutInfo?.index}
            <br />
          </>
        )}
        {children}
      </>
    </GroupContext.Provider>
  );
};

const FormItemX = ({ id }) => {
  const { formItems: layoutInfos, registerItem, unregisterItem } = useContext(FormContext);
  const groupContext = useFormGroupContext();

  useEffect(() => {
    registerItem?.(id, 'formItem', groupContext.id);
    return () => unregisterItem?.(id, groupContext.id);
  }, [id, registerItem, unregisterItem, groupContext]);

  const layoutInfo = useMemo(() => layoutInfos?.find(({ id: itemId }) => id === itemId), [layoutInfos]);

  // #1
  // Attention: FormItems do only make sense within Forms and only should work with them.
  // If layoutInfos is defined, the FormContext is available and will set the id for the layoutInfo
  // With this solution we prevent flickering for the wrong (not calculated) layout because the first render does not contain the layout
  // I tested useLayoutEffect instead useEffect but this caused me some bugs, when the pages reloads with HMR
  // So this is fine, the layoutInfo will be defined
  if (layoutInfos && !layoutInfo) return null;

  // console.log("Render FormItem " + id, layoutInfo, layoutInfos);
  console.log('Render FormItem');
  return (
    <>
      FormItem with Id: {layoutInfo?.id}; Index: {layoutInfo?.index};{' '}
      {layoutInfo?.groupId ? 'Groupid: ' + layoutInfo.groupId : ''}
      <br />
    </>
  );
};

export default App;
