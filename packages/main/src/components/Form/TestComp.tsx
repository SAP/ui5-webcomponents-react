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
      <Form titleText="Test" columnsXL={5} columnsL={4} columnsM={3} columnsS={1}>
        <FormItem id="Item01" label="Single 1">
          <Input />
        </FormItem>
        <FormGroup id={'Item02'} titleText="Empty Group" />
        <CustomComponent id="Custom1">
          <FormItem id="CustomFormItem1" label="Single in Custom">
            <Input />
          </FormItem>
        </CustomComponent>
        <CustomComponent id="Custom1">
          <FormGroup titleText="Group in Custom">
            <FormItem id="CustomFormItem1" label="Group in Custom - Item">
              <Input />
            </FormItem>
          </FormGroup>
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
        <FormItem id="Item01" label="Single 2">
          <Input />
        </FormItem>
        <FormGroup id={'Item04'} titleText="Group 1">
          <FormItem id="Item01" label="G1Hello there">
            <Input />
          </FormItem>
          <FormItem id="Item01" label="G1Hello there">
            <Input />
          </FormItem>
          <FormItem id="Item01" label="G1Hello there">
            <Input />
          </FormItem>
        </FormGroup>
        <FormItem id="Item01" label="Single 3">
          <Input />
        </FormItem>
        <FormGroup id={'Item04'} titleText="Group 2">
          <FormItem id="Item01" label="G2Hello there">
            <Input />
          </FormItem>
          <FormItem id="Item01" label="G2Hello there">
            <Input />
          </FormItem>
          <FormItem id="Item01" label="G2Hello there">
            <Input />
          </FormItem>
        </FormGroup>
        <FormItem id="Item01" label="Single 4">
          <Input />
        </FormItem>
      </Form>
    </ThemeProvider>
  );
}

const CustomComponent = ({ children, id }) => {
  // console.log('Render CustomComponent ' + id);
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
  // console.log('Render FormGroup');
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
  // console.log('Render FormItem');
  return (
    <>
      FormItem with Id: {layoutInfo?.id}; Index: {layoutInfo?.index};{' '}
      {layoutInfo?.groupId ? 'Groupid: ' + layoutInfo.groupId : ''}
      <br />
    </>
  );
};

export default App;
