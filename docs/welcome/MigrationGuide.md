# Migration Guide

##Migrating from 0.8.X to 0.9.0
Migrating your app from 0.8.X to 0.9.0 requires a few updates to the API properties,
//todo

###Breaking changes
For a complete list of breaking changes from 0.8.X to 0.9.0, please refer to //todo

##Dependencies
The dependencies `@ui5/webcomponents`, `@ui5/webcomponents-fiori` and `@ui5/webcomponents-icons` are now  `peerDependencies` and have to be installed next to `@ui5/webcomponents-react`.

npm:
```sh
npm install @ui5/webcomponents
npm install @ui5/webcomponents-fiori
npm install @ui5/webcomponents-icons
```
yarn:
```sh
yarn add @ui5/webcomponents
yarn add @ui5/webcomponents-fiori
yarn add @ui5/webcomponents-icons
```

##Configure content density
Configuration of compact size is removed.  
The default configuration is `Cozy`, to enable `Compact`, provide the `ui5-content-density-compact` CSS class to any of your HTML elements and it applies compact size to all of its children.

Add `ui5-content-density-compact` to your `<body>` element to apply compact setting to the whole app:
```html
<body class="ui5-content-density-compact">
    <div>
        <ShellBar />
        <Button />
    </div>
</body>
```
Or just to a single container or component:
```html
<Button className="ui5-content-density-compact">Compact Button</Button>
```

##Opening Popovers
Popovers like the `Dialog`, `Popover` and `ResponsivePopover` now only can be opened by attaching a `ref` to the component
and then call the corresponding `open` method:
* Dialog - `.open()`:
    ```JSX
    const DialogComponent = () => {
      const dialogRef = useRef();
      const onButtonClick = useCallback(() => {
        dialogRef.current.open();
      }, [dialogRef]);
   
      return (
        <>
          <Button onClick={onButtonClick}>Open Dialog</Button>
          <Dialog ref={dialogRef}>Some Content</Dialog>
        </>
      );
    };
    ```
* Popover - `.openBy(event.target)`:
    ```JSX
    const PopoverComponent = () => {
      const popoverRef = useRef();
      const onButtonClick = useCallback(
        (e) => {
          popoverRef.current.openBy(e.target);
        },
        [popoverRef]
      );
      return (
        <>
          <Button onClick={onButtonClick}>Open Popover</Button>
          <Popover ref={popoverRef}>Some Content</Popover>
        </>
      );
    };
    ```
* ResponsivePopover - `open(event.target)`:
    ```JSX
    const ResponsivePopoverComponent = () => {
      const popoverRef = useRef();
      const onButtonClick = useCallback(
        (e) => {
          popoverRef.current.open(e.target);
        },
        [popoverRef]
      );
      return (
        <>
          <Button onClick={onButtonClick}>Open Responsive Popover</Button>
          <ResponsivePopover ref={popoverRef}>Some Content</ResponsivePopover>
        </>
      );
    };
    ```


