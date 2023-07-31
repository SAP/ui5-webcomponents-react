import{j as e}from"./jsx-runtime-d079401a.js";import{C as a,A as s}from"./DomRefTable.module-938ce2d1.js";import{D as d}from"./DocsHeader-0f328460.js";import{F as c}from"./Footer-499c3fd0.js";import"./index-f1f2c4b1.js";import{M as h,C as r,b as l}from"./chunk-PCJTTTQV-a15bcc6c.js";import{S as x}from"./SubcomponentsSection-6138f2fc.js";import{C as f,D as p,S as u,U as C}from"./UploadCollection.stories-dc461bb0.js";import{u as m}from"./index-59d6410c.js";import"./react-jss.esm-c310038c.js";import"./inheritsLoose-93e09647.js";import"./index-57660acc.js";import"./iframe-0de826a4.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-99b005ba.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-31253496.js";import"./Icons-234bf59e.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./class-map-b4d8f3b0.js";import"./Button-0b5fe0db.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-1a83921e.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-783dc33d.js";import"./index-11256eac.js";import"./Integer-f7f172c9.js";import"./index-51b8ebeb.js";import"./Avatar-813f92b3.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-1c77658b.js";import"./index-4938df71.js";import"./Link-b0328393.js";import"./WrappingType-b81e595a.js";import"./index-13bed04c.js";import"./TableOfContent-f84ee829.js";import"./index-9bd3f3a9.js";import"./Label-62dd8470.js";import"./index-c74c9f7f.js";import"./index-4765fcf1.js";import"./index-af1a2774.js";import"./Popover-f3103b78.js";import"./PopupsCommon.css-552c6676.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-56038137.js";import"./BrowserScrollbar.css-527f9f64.js";import"./react-18-50d7df5e.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./index-4a2ac3fd.js";import"./index-13825777.js";import"./Title-3276c542.js";import"./ValueState-2c5e5904.js";import"./ListItem-429c71be.js";import"./ListItemBase-6d1fb082.js";import"./ItemNavigation-a882fb90.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-741cae1e.js";import"./RadioButton-80f32cef.js";import"./CheckBox-6ec8bf24.js";import"./accept-6c83709e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-c0f59065.js";import"./Input-91cde929.js";import"./Suggestions.css-a2899748.js";import"./ResponsivePopoverCommon.css-c96ec8b5.js";import"./ValueStateMessage.css-e53cdf31.js";import"./ProgressIndicator-f3ed1151.js";import"./AnimationMode-b83806eb.js";import"./i18n-defaults-b490e4f6.js";import"./parameters-bundle.css-f9dc8928.js";import"./IllustratedMessage-b72b98e7.js";import"./Tent-2c6a953a.js";const j=`**Since:** 0.9.0

A component to be used within the \`UploadCollection\`.
`;function to(n={}){const{wrapper:t}=Object.assign({},m(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,{})})):i();function i(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre",h1:"h1",h3:"h3"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:f}),`
`,e.jsx(d,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(o.h2,{id:"handling-drag-and-drop-of-files",children:"Handling drag and drop of files"}),`
`,e.jsxs(o.p,{children:["Per default, files can be added by dragging them into the ",e.jsx(o.code,{children:"UploadCollection"}),` component.
To use this functionality the `,e.jsx(o.code,{children:"onDrop"})," handler has to be manually adjusted.",e.jsx("br",{}),`
`,e.jsx(o.strong,{children:"Note:"})," Use ",e.jsx(o.code,{children:"event.preventDefault()"})," in the ",e.jsx(o.code,{children:"onDrop"})," handler, otherwise some browsers will open some files in a different tab."]}),`
`,e.jsxs(o.p,{children:["This example shows, how to dynamically render a ",e.jsx(o.code,{children:"UploadCollectionItem"})," by dropping files into the ",e.jsx(o.code,{children:"UploadCollection"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import React, { useState } from 'react';
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
`,e.jsx("br",{}),`
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"simulate-upload",children:"Simulate Upload"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(o.h3,{id:"code",children:"Code"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const SimulateUploadComponent = () => {
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
            setTimeout(
              () => {
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
              },
              Math.floor(Math.random() * (1000 - 100 + 1)) + 100
            );
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
`,e.jsx(l,{children:x}),`
`,e.jsx(o.h2,{id:"uploadcollectionitem",children:"UploadCollectionItem"}),`
`,e.jsx(l,{children:j}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(c,{})]})}}export{to as default};
//# sourceMappingURL=UploadCollection-51bd69c6.js.map
