import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DhD1x6sB.js";import{n as r}from"./Input-BDkyv1Wr.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-input`,[`accessibleDescription`,`accessibleDescriptionRef`,`accessibleName`,`accessibleNameRef`,`filter`,`maxlength`,`name`,`placeholder`,`type`,`value`,`valueState`],[`disabled`,`noTypeahead`,`open`,`readonly`,`required`,`showClearIcon`,`showSuggestions`],[`icon`,`valueStateMessage`],[`change`,`close`,`input`,`open`,`select`,`selection-change`]),i.displayName=`Input`;try{i.displayName=`Input`,i.__docgenInfo={description:`The \`Input\` component allows the user to enter and edit text or numeric values in one line.

Additionally, you can provide \`suggestionItems\`
that are displayed in a popover right under the input. Keep in mind that \`Input\` with type \`Number\` does not support suggestions.

The text field can be editable or read-only (\`readonly\` property),
and it can be enabled or disabled (\`disabled\` property).
To visualize semantic states, such as "Negative" or "Critical", the \`valueState\` property is provided.
When the user makes changes to the text, the change event is fired,
which enables you to react on any text change.

### Keyboard Handling
The \`Input\` provides the following keyboard shortcuts:

- [Escape] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- [Enter] or [Return] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- [Down] - Focuses the next matching item in the suggestion list. Selection-change event is fired.
- [Up] - Focuses the previous matching item in the suggestion list. Selection-change event is fired.
- [Home] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- [End] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- [Page Up] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- [Page Down] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
- [Ctrl]+[Alt]+[F8] or [Command]+[Option]+[F8] - Focuses the first link in the value state message, if available. Pressing [Tab] moves the focus to the next link in the value state message, or closes the value state message if there are no more links.



__Note:__ This is a UI5 Web Component! [Input UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Input) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Input`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`}],description:"Defines the suggestion items.\n\n**Note:** The suggestions would be displayed only if the `showSuggestions`\nproperty is set to `true`.\n\n**Note:** The `<SuggestionItem>`, `<SuggestionItemGroup>` and `SuggestionItemCustom` are recommended to be used as suggestion items.\n\n**Note:** Input with type `Number` does not support suggestions.\n\n__Supported Node Type/s:__ `Array<IInputSuggestionItem>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},icon:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`}],description:`Defines the icon to be displayed in the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<IIcon>\``,name:`icon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},valueStateMessage:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`}],description:`Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

**Note:** If the component has \`suggestionItems\`,
the \`valueStateMessage\` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`valueStateMessage`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when the input operation has finished by pressing Enter or on focusout.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, never>) => void`}},onClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when the suggestions picker is closed.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, never>) => void`}},onInput:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onInput`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, never>) => void`}},onOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when the suggestions picker is open.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, never>) => void`}},onSelect:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when some text has been selected.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onSelect`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, never>) => void`}},onSelectionChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`}],description:`Fired when the user navigates to a suggestion item via the ARROW keys,
as a preview, before the final selection.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onSelectionChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, InputSelectionChangeEventDetail>) => void`}},accessibleDescription:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines the accessible description of the component.

**Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.`,name:`accessibleDescription`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleDescriptionRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Receives id(or many ids) of the elements that describe the input.

**Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.`,name:`accessibleDescriptionRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Receives id(or many ids) of the elements that label the input.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},filter:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines the filter type of the component.

**Note:** Available since [v2.19.0](https://github.com/UI5/webcomponents/releases/tag/v2.19.0) of **@ui5/webcomponents**.`,name:`filter`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | InputSuggestionsFilter | "StartsWithPerTerm" | "StartsWith" | "Contains"`,value:[{value:`"None"`},{value:`"StartsWithPerTerm"`,description:`Defines filtering by first symbol of each word of item's text.`,fullComment:`Defines filtering by first symbol of each word of item's text.
@public`,tags:{public:``}},{value:`"StartsWith"`,description:`Defines filtering by starting symbol of item's text.`,fullComment:`Defines filtering by starting symbol of item's text.
@public`,tags:{public:``}},{value:`"Contains"`,description:`Defines contains filtering.`,fullComment:`Defines contains filtering.
@public`,tags:{public:``}},{value:`"None"`,description:`Removes any filtering applied while typing`,fullComment:`Removes any filtering applied while typing
@public`,tags:{public:``}},{value:`"StartsWithPerTerm"`},{value:`"StartsWith"`},{value:`"Contains"`}]}},maxlength:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Sets the maximum number of characters available in the input field.

**Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`maxlength`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`number`}},name:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:`name`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},noTypeahead:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines whether the value will be autcompleted to match an item

**Note:** Available since [v1.4.0](https://github.com/UI5/webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents**.`,name:`noTypeahead`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},open:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:"Defines whether the suggestions picker is open.\nThe picker will not open if the `showSuggestions` property is set to `false`, the input is disabled or the input is readonly.\nThe picker will close automatically and `close` event will be fired if the input is not in the viewport.\n\n**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:`open`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},placeholder:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,name:`placeholder`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},readonly:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:`readonly`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},required:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines whether the component is required.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`required`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},showClearIcon:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines whether the clear icon of the input will be shown.

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:`showClearIcon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},showSuggestions:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines whether the component should show suggestions, if such are present.`,name:`showSuggestions`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},type:{defaultValue:{value:`"Text"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines the HTML type of the component.

**Notes:**

- The particular effect of this property differs depending on the browser
and the current language settings, especially for type \`Number\`.
- The property is mostly intended to be used with touch devices
that use different soft keyboard layouts depending on the given input type.
- Type \`Number\` does not support suggestions.`,name:`type`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`"Text"`},type:{name:`enum`,raw:`InputType | "Text" | "Email" | "Number" | "Password" | "Tel" | "URL" | "Search"`,value:[{value:`"Text"`,description:`Defines a one-line text input field:`,fullComment:`Defines a one-line text input field:
@public`,tags:{public:``}},{value:`"Email"`,description:`Used for input fields that must contain an e-mail address.`,fullComment:`Used for input fields that must contain an e-mail address.
@public`,tags:{public:``}},{value:`"Number"`,description:`Defines a numeric input field.`,fullComment:`Defines a numeric input field.
@public`,tags:{public:``}},{value:`"Password"`,description:`Defines a password field.`,fullComment:`Defines a password field.
@public`,tags:{public:``}},{value:`"Tel"`,description:`Used for input fields that should contain a telephone number.`,fullComment:`Used for input fields that should contain a telephone number.
@public`,tags:{public:``}},{value:`"URL"`,description:`Used for input fields that should contain a URL address.`,fullComment:`Used for input fields that should contain a URL address.
@public`,tags:{public:``}},{value:`"Search"`,description:`Used for input fields that should contain a search term.`,fullComment:`Used for input fields that should contain a search term.
@since 2.0.0
@public`,tags:{since:`2.0.0`,public:``}},{value:`"Text"`},{value:`"Email"`},{value:`"Number"`},{value:`"Password"`},{value:`"Tel"`},{value:`"URL"`},{value:`"Search"`}]}},value:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{},type:{name:`string`}},valueState:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`}],description:`Defines the value state of the component.`,name:`valueState`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Input/index.d.ts`,name:`InputAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Critical" | ValueState | "Positive" | "Negative" | "Information"`,value:[{value:`"None"`},{value:`"Critical"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`},{value:`"Negative"`},{value:`"Information"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};