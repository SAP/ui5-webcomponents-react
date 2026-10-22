import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DhD1x6sB.js";import{i as r,n as i}from"./Tab-CSr6dTbA.js";var a;function o(){return(o=e((()=>{i(),n(),a=t(`ui5-tab`,[`additionalText`,`design`,`icon`,`text`],[`disabled`,`movable`,`selected`],[`items`],[`click`]),a.displayName=`Tab`;try{a.displayName=`Tab`,a.__docgenInfo={description:"The `Tab` represents a selectable item inside a `TabContainer`.\nIt defines both the item in the tab strip (top part of the `TabContainer`) and the\ncontent that is presented to the user once the tab is selected.\n\n__Note:__ This is a UI5 Web Component! [Tab UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Tab) | [Repository](https://github.com/UI5/webcomponents)",displayName:`Tab`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabPropTypes`}],description:`Holds the content associated with this tab.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},items:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabPropTypes`}],description:`Defines hierarchies with nested sub tabs.

**Note:** Use \`Tab\` and \`TabSeparator\` for the intended design.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="items"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<ITab>\``,name:`items`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabPropTypes`}],description:`Fired when the tab is selected either with a mouse/tap or by using the Enter or Space key.

**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TabDomRef, TabClickEventDetail>) => void`}},additionalText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`}],description:`Represents the "additionalText" text, which is displayed in the tab. In the cases when in the same time there are tabs with icons and tabs without icons, if a tab has no icon the "additionalText" is displayed larger.`,name:`additionalText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},design:{defaultValue:{value:`"Default"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`}],description:'Defines the component\'s design color.\n\nThe design is applied to:\n\n- the component icon\n- the `text` when the component overflows\n- the tab selection line\n\nAvailable designs are: `"Default"`, `"Neutral"`, `"Positive"`, `"Critical"` and `"Negative"`.\n\n**Note:** The design depends on the current theme.',name:`design`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`},required:!1,tags:{default:`"Default"`},type:{name:`enum`,raw:`"Critical" | "Neutral" | "Positive" | "Negative" | "Default" | SemanticColor`,value:[{value:`"Critical"`},{value:`"Neutral"`},{value:`"Positive"`},{value:`"Negative"`},{value:`"Default"`},{value:`"Default"`,description:`Default color (brand color)`,fullComment:`Default color (brand color)
@public`,tags:{public:``}},{value:`"Positive"`,description:`Positive color`,fullComment:`Positive color
@public`,tags:{public:``}},{value:`"Negative"`,description:`Negative color`,fullComment:`Negative color
@public`,tags:{public:``}},{value:`"Critical"`,description:`Critical color`,fullComment:`Critical color
@public`,tags:{public:``}},{value:`"Neutral"`,description:`Neutral color.`,fullComment:`Neutral color.
@public`,tags:{public:``}}]}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`}],description:`Disabled tabs can't be selected.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},icon:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`}],description:`Defines the icon source URI to be displayed as graphical element within the component.
The SAP-icons font provides numerous built-in icons.
See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:`icon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},movable:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`}],description:`Defines if the tab is movable.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:`movable`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},selected:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`}],description:`Specifies if the component is selected.`,name:`selected`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`}],description:`The text to be displayed for the item.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tab/index.d.ts`,name:`TabAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{abstract:``}}}catch{}})))()}var s;function c(){return(c=e((()=>{r(),n(),s=t(`ui5-tabcontainer`,[`contentBackgroundDesign`,`headerBackgroundDesign`,`overflowMode`,`tabLayout`],[`collapsed`,`noAutoSelection`],[`overflowButton`,`startOverflowButton`],[`move-over`,`move`,`tab-select`]),s.displayName=`TabContainer`;try{s.displayName=`TabContainer`,s.__docgenInfo={description:`The \`TabContainer\` represents a collection of tabs with associated content.
Navigation through the tabs changes the content display of the currently active content area.
A tab can be labeled with text only, or icons with text.

### Structure

The \`TabContainer\` can hold two types of entities:

- \`Tab\` - contains all the information on an item (text and icon)
- \`TabSeparator\` - used to separate tabs with a line

### Hierarchies
Multiple sub tabs could be placed underneath one main tab. Nesting allows deeper hierarchies with indentations
to indicate the level of each nested tab. When a tab has both sub tabs and own content its click area is split
to allow the user to display the content or alternatively to expand / collapse the list of sub tabs.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



\`import "@ui5/webcomponents/dist/Tab.js";\` (for \`Tab\`)

\`import "@ui5/webcomponents/dist/TabSeparator.js";\` (for \`TabSeparator\`)

__Note:__ This is a UI5 Web Component! [TabContainer UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TabContainer) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`TabContainer`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerPropTypes`}],description:"Defines the tabs.\n\n**Note:** Use `Tab` and `TabSeparator` for the intended design.\n\n__Supported Node Type/s:__ `Array<ITab>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},overflowButton:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerPropTypes`}],description:`Defines the button which will open the overflow menu. If nothing is provided to this slot,
the default button will be used.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="overflowButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<IButton>\``,name:`overflowButton`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},startOverflowButton:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerPropTypes`}],description:`Defines the button which will open the start overflow menu if available. If nothing is provided to this slot,
the default button will be used.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="startOverflowButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<IButton>\``,name:`startOverflowButton`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onMove:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerPropTypes`}],description:`Fired when element is moved to the tab container.

**Note:** \`move\` event is fired only if there was a preceding \`move-over\` with prevented default action.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onMove`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TabContainerDomRef, TabContainerMoveEventDetail>) => void`}},onMoveOver:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerPropTypes`}],description:`Fired when element is being moved over the tab container.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onMoveOver`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TabContainerDomRef, TabContainerMoveEventDetail>) => void`}},onTabSelect:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerPropTypes`}],description:`Fired when a tab is selected.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onTabSelect`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TabContainerDomRef, TabContainerTabSelectEventDetail>) => void`}},collapsed:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerAttributes`}],description:`Defines whether the tab content is collapsed.`,name:`collapsed`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},contentBackgroundDesign:{defaultValue:{value:`"Solid"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerAttributes`}],description:"Sets the background color of the Tab Container's content as `Solid`, `Transparent`, or `Translucent`.\n\n**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.",name:`contentBackgroundDesign`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerAttributes`},required:!1,tags:{default:`"Solid"`},type:{name:`enum`,raw:`"Transparent" | "Solid" | BackgroundDesign | "Translucent"`,value:[{value:`"Transparent"`},{value:`"Solid"`},{value:`"Solid"`,description:`A solid background color dependent on the theme.`,fullComment:`A solid background color dependent on the theme.
@public`,tags:{public:``}},{value:`"Transparent"`,description:`Transparent background.`,fullComment:`Transparent background.
@public`,tags:{public:``}},{value:`"Translucent"`,description:`A translucent background depending on the opacity value of the theme.`,fullComment:`A translucent background depending on the opacity value of the theme.
@public`,tags:{public:``}},{value:`"Translucent"`}]}},headerBackgroundDesign:{defaultValue:{value:`"Solid"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerAttributes`}],description:"Sets the background color of the Tab Container's header as `Solid`, `Transparent`, or `Translucent`.\n\n**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.",name:`headerBackgroundDesign`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerAttributes`},required:!1,tags:{default:`"Solid"`},type:{name:`enum`,raw:`"Transparent" | "Solid" | BackgroundDesign | "Translucent"`,value:[{value:`"Transparent"`},{value:`"Solid"`},{value:`"Solid"`,description:`A solid background color dependent on the theme.`,fullComment:`A solid background color dependent on the theme.
@public`,tags:{public:``}},{value:`"Transparent"`,description:`Transparent background.`,fullComment:`Transparent background.
@public`,tags:{public:``}},{value:`"Translucent"`,description:`A translucent background depending on the opacity value of the theme.`,fullComment:`A translucent background depending on the opacity value of the theme.
@public`,tags:{public:``}},{value:`"Translucent"`}]}},noAutoSelection:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerAttributes`}],description:`Defines if automatic tab selection is deactivated.

**Note:** By default, if none of the child tabs have the \`selected\` property set, the first tab will be automatically selected.
Setting this property to \`true\` allows preventing this behavior.

**Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.`,name:`noAutoSelection`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},overflowMode:{defaultValue:{value:`"End"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerAttributes`}],description:`Defines the overflow mode of the header (the tab strip). If you have a large number of tabs, only the tabs that can fit on screen will be visible.
All other tabs that can 't fit on the screen are available in an overflow tab "More".

**Note:**
Only one overflow at the end would be displayed by default,
but when set to \`StartAndEnd\`, there will be two overflows on both ends, and tab order will not change on tab selection.

**Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:`overflowMode`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerAttributes`},required:!1,tags:{default:`"End"`},type:{name:`enum`,raw:`"End" | OverflowMode | "StartAndEnd"`,value:[{value:`"End"`},{value:`"End"`,description:`End type is used if there should be only one overflow with hidden the tabs at the end of the tab container.`,fullComment:`End type is used if there should be only one overflow with hidden the tabs at the end of the tab container.
@public`,tags:{public:``}},{value:`"StartAndEnd"`,description:`StartAndEnd type is used if there should be two overflows on both ends of the tab container.`,fullComment:`StartAndEnd type is used if there should be two overflows on both ends of the tab container.
@public`,tags:{public:``}},{value:`"StartAndEnd"`}]}},tabLayout:{defaultValue:{value:`"Standard"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerAttributes`}],description:"Defines the alignment of the content and the `additionalText` of a tab.\n\n**Note:**\nThe content and the `additionalText` would be displayed vertically by default,\nbut when set to `Inline`, they would be displayed horizontally.",name:`tabLayout`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TabContainer/index.d.ts`,name:`TabContainerAttributes`},required:!1,tags:{default:`"Standard"`},type:{name:`enum`,raw:`"Standard" | TabLayout | "Inline"`,value:[{value:`"Standard"`},{value:`"Inline"`,description:`Inline type, the tab "main text" and "additionalText" are displayed horizotally.`,fullComment:`Inline type, the tab "main text" and "additionalText" are displayed horizotally.
@public`,tags:{public:``}},{value:`"Standard"`,description:`Standard type, the tab "main text" and "additionalText" are displayed vertically.`,fullComment:`Standard type, the tab "main text" and "additionalText" are displayed vertically.
@public`,tags:{public:``}},{value:`"Inline"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{o as i,c as n,a as r,s as t};