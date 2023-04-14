import{j as e,a as t,F as d}from"./jsx-runtime-670450c2.js";import{C as s,A as c}from"./DomRefTable.module-ebd0ef32.js";import{D as h}from"./DocsHeader-2b950f28.js";import{F as f}from"./Footer-bbf5eef6.js";import"./index-f1f749bf.js";import{M as u,C as l,a as p}from"./chunk-PCJTTTQV-03df55fb.js";import{S as C}from"./SubcomponentsSection-6138f2fc.js";import{C as g,D as a,S as U,U as x}from"./UploadCollection.stories-3c03d7e9.js";import{u as m}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-0bbd409e.js";import"./iframe-0e4c68f0.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-6d48ebd3.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f9987b26.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-8d6b807c.js";import"./TableOfContent-faa94604.js";import"./index-20e8eaae.js";import"./Link-3b8926df.js";import"./WrappingType-b81e595a.js";import"./index-3ac565c5.js";import"./Label-528b8168.js";import"./index-96c5f47c.js";import"./index-6dcb85dd.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-59fbe46d.js";import"./index-47448c9e.js";import"./index-7c49a66e.js";import"./Title-0440ec3f.js";import"./ValueState-2c5e5904.js";import"./ListItem-843af2c9.js";import"./ListItemBase-780d7053.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-c375cd19.js";import"./RadioButton-412fbbc0.js";import"./CheckBox-f0072def.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./Input-405066de.js";import"./Suggestions.css-1532b733.js";import"./ResponsivePopoverCommon.css-0466170a.js";import"./ValueStateMessage.css-7363aec7.js";import"./ProgressIndicator-641e8e9a.js";import"./AnimationMode-9cec4b20.js";import"./i18n-defaults-217b10b4.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./IllustratedMessage-1c6923b4.js";const b=`**Since:** 0.9.0

A component to be used within the \`UploadCollection\`.
`;function to(n={}){const{wrapper:i}=Object.assign({},m(),n.components);return i?e(i,Object.assign({},n,{children:e(r,{})})):r();function r(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre",h1:"h1",h3:"h3"},m(),n.components);return t(d,{children:[e(u,{of:g}),`
`,e(h,{since:"0.9.0"}),`
`,e("br",{}),`
`,e(o.h2,{id:"example",children:"Example"}),`
`,e(l,{of:a}),`
`,e(o.h2,{id:"properties",children:"Properties"}),`
`,e(s,{of:a}),`
`,e(o.h2,{id:"handling-drag-and-drop-of-files",children:"Handling drag and drop of files"}),`
`,t(o.p,{children:["Per default, files can be added by dragging them into the ",e(o.code,{children:"UploadCollection"}),` component.
To use this functionality the `,e(o.code,{children:"onDrop"})," handler has to be manually adjusted.",e("br",{}),`
`,e(o.strong,{children:"Note:"})," Use ",e(o.code,{children:"event.preventDefault()"})," in the ",e(o.code,{children:"onDrop"})," handler, otherwise some browsers will open some files in a different tab."]}),`
`,t(o.p,{children:["This example shows, how to dynamically render a ",e(o.code,{children:"UploadCollectionItem"})," by dropping files into the ",e(o.code,{children:"UploadCollection"}),":"]}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`import React, { useState } from 'react';
import { Icon, Text, UploadCollection, UploadCollectionItem } from '@ui5/webcomponents-react';

export const UploadCollectionComponent = () => {
  const [children, setChildren] = useState([]);
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    files.forEach((file) => {
      setChildren((prev) => [
        ...prev,
        <UploadCollectionItem file={file} fileName={file.name} thumbnail={<Icon name="document" />}>
          <Text>Uploaded On: Right now</Text>
        </UploadCollectionItem>
      ]);
    });
  };
  return <UploadCollection onDrop={handleDrop}>{children}</UploadCollection>;
};
`})}),`
`,e("br",{}),`
`,e(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e("br",{}),`
`,e(o.h2,{id:"simulate-upload",children:"Simulate Upload"}),`
`,e(l,{of:U}),`
`,e(o.h3,{id:"code",children:"Code"}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`const SimulateUploadComponent = () => {
  const [children, setChildren] = useState([
    <UploadCollectionItem
      file={null}
      fileName={'file-name.txt'}
      thumbnail={<img src="https://sap.github.io/ui5-webcomponents/assets/images/logo.png" />}
    >
      <Text>Uploaded by: Susanne Schmitt · Uploaded On: 2019-04-20</Text>
    </UploadCollectionItem>
  ]);
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    files.forEach((file) => {
      setChildren((prev) => [
        ...prev,
        <UploadCollectionItem file={file} fileName={file.name} thumbnail={<Icon name="document" />}>
          <Text>{\`
Last
modified: \${file.lastModifiedDate} ·
Size: \${(file.size / 1000).toFixed(2)}KB\`}</Text>
        </UploadCollectionItem>
      ]);
    });
  };
  const simulateUpload = () => {
    if (children.length > 0) {
      Children.forEach(children, (child, index) => {
        if (child.props.uploadState === UploadState.Ready) {
          let progress = 0;
          const recTimeout = () => {
            setTimeout(() => {
              progress += Math.floor(Math.random() * 4) + 1;
              setChildren((prev) => {
                const updatedChildren = [...prev];
                updatedChildren[index] = cloneElement(prev[index], {
                  uploadState: UploadState.Uploading,
                  progress: Math.min(progress, 100)
                });
                return updatedChildren;
              });
              if (progress < 100) {
                recTimeout();
              } else {
                setChildren((prev) => {
                  const updatedChildren = [...prev];
                  updatedChildren[index] = cloneElement(prev[index], {
                    uploadState: UploadState.Complete
                  });
                  return updatedChildren;
                });
              }
            }, Math.floor(Math.random() * (1000 - 100 + 1)) + 100);
          };
          recTimeout();
        }
      });
    }
  };
  return (
    <UploadCollection
      onDrop={handleDrop}
      header={
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <Title>Start upload:</Title>
          <Button onClick={simulateUpload}>Upload!</Button>
        </FlexBox>
      }
    >
      {children}
    </UploadCollection>
  );
};
`})}),`
`,e(p,{children:C}),`
`,e(o.h2,{id:"uploadcollectionitem",children:"UploadCollectionItem"}),`
`,e(p,{children:b}),`
`,e(c,{of:x}),`
`,e(f,{})]})}}export{to as default};
//# sourceMappingURL=UploadCollection-12deded0.js.map
