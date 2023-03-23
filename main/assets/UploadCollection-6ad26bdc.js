import{j as e,a as t,F as d}from"./jsx-runtime-670450c2.js";import{C as s,A as c}from"./DomRefTable.module-96695cc0.js";import{D as h}from"./DocsHeader-97ed7337.js";import{F as f}from"./Footer-521f1dae.js";import"./index-f1f749bf.js";import{M as u,C as l,a as p}from"./chunk-PCJTTTQV-e20cc1b2.js";import{S as C}from"./SubcomponentsSection-6138f2fc.js";import{C as U,D as m,S as g,U as x}from"./UploadCollection.stories-fe4ad061.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-ff79d9bd.js";import"./iframe-5170d9e7.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ba7ce6e.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-36c63901.js";import"./TableOfContent-b6d35422.js";import"./index-d562b2b7.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-6d82c142.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./index-f3184289.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-801f00f0.js";import"./index-2944281b.js";import"./index-ca069248.js";import"./Title-129aeb28.js";import"./languageAware-b2dd96bd.js";import"./ValueState-2c5e5904.js";import"./ListItem-83c0fb9e.js";import"./ListItemBase-a0bc6999.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-15ff681f.js";import"./RadioButton-a8c23c83.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-52a56681.js";import"./Input-4940ecdf.js";import"./Suggestions.css-154c701b.js";import"./ResponsivePopoverCommon.css-ca4e9b7c.js";import"./ValueStateMessage.css-f5f87de3.js";import"./ProgressIndicator-6f4076d1.js";import"./AnimationMode-b8fd41f3.js";import"./i18n-defaults-0a7ef706.js";import"./parameters-bundle.css-6b4a2ffb.js";const b=`**Since:** 0.9.0

A component to be used within the \`UploadCollection\`.
`;function tn(o={}){const{wrapper:i}=Object.assign({},a(),o.components);return i?e(i,Object.assign({},o,{children:e(r,{})})):r();function r(){const n=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre",h1:"h1",h3:"h3"},a(),o.components);return t(d,{children:[e(u,{of:U}),`
`,e(h,{since:"0.9.0"}),`
`,e("br",{}),`
`,e(n.h2,{children:"Example"}),`
`,e(l,{of:m}),`
`,e(n.h2,{children:"Properties"}),`
`,e(s,{of:m}),`
`,e(n.h2,{children:"Handling drag and drop of files"}),`
`,t(n.p,{children:["Per default, files can be added by dragging them into the ",e(n.code,{children:"UploadCollection"}),` component.
To use this functionality the `,e(n.code,{children:"onDrop"})," handler has to be manually adjusted.",e("br",{}),`
`,e(n.strong,{children:"Note:"})," Use ",e(n.code,{children:"event.preventDefault()"})," in the ",e(n.code,{children:"onDrop"})," handler, otherwise some browsers will open some files in a different tab."]}),`
`,t(n.p,{children:["This example shows, how to dynamically render a ",e(n.code,{children:"UploadCollectionItem"})," by dropping files into the ",e(n.code,{children:"UploadCollection"}),":"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`import React, { useState } from 'react';
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
`,e(n.h1,{children:"More Examples"}),`
`,e("br",{}),`
`,e(n.h2,{children:"Simulate Upload"}),`
`,e(l,{of:g}),`
`,e(n.h3,{children:"Code"}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const SimulateUploadComponent = () => {
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
`,e(n.h2,{children:"UploadCollectionItem"}),`
`,e(p,{children:b}),`
`,e(c,{of:x}),`
`,e(f,{})]})}}export{tn as default};
//# sourceMappingURL=UploadCollection-6ad26bdc.js.map
