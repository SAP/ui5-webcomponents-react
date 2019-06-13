# `ResponsivePopover`

#### `render on Desktop`

```
<ThemeProvider attachTo={{...}} withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <ResponsivePopover footer={{...}} openBy={{...}}>
      <Popover footer={{...}} openBy={{...}} initialFocus={{...}} headerText="" placementType="Right" horizontalAlign="Center" verticalAlign="Center">
        <div style={{...}} onClick={[Function]}>
          <div>
            test
          </div>
        </div>
        <WithTheme(WithWebComponent) footer={{...}} initialFocus={{...}} headerText="" placementType="Right" horizontalAlign="Center" verticalAlign="Center" innerComponentRef={[Function]}>
          <WithWebComponent theme={{...}} footer={{...}} initialFocus={{...}} headerText="" placementType="Right" horizontalAlign="Center" verticalAlign="Center" innerComponentRef={[Function]}>
            <ui5-popover initial-focus={{...}} header-text="" placement-type="Right" horizontal-align="Center" vertical-align="Center" inner-component-ref={[Function]} class="">
              <div data-ui5-slot="footer">
                Footer
              </div>
              <div>
                DialogContent
              </div>
            </ui5-popover>
          </WithWebComponent>
        </WithTheme(WithWebComponent)>
      </Popover>
    </ResponsivePopover>
  </ThemeProvider>
</ThemeProvider>
```

#### `render on Phone`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <ResponsivePopover footer={{...}} openBy={{...}}>
      <div style={{...}} onClick={[Function]} data-ui5-slot={[undefined]}>
        <div>
          test
        </div>
      </div>
      <Dialog footer={{...}} innerComponentRef={[Function]} open={false} onAfterClose={[Function]} initialFocus={{...}} headerText="">
        <WithTheme(WithWebComponent) footer={{...}} innerComponentRef={[Function]} open={false} onAfterClose={[Function]} initialFocus={{...}} headerText="">
          <WithWebComponent theme={{...}} footer={{...}} innerComponentRef={[Function]} open={false} onAfterClose={[Function]} initialFocus={{...}} headerText="">
            <ui5-dialog inner-component-ref={[Function]} open={false} initial-focus={{...}} header-text="" class="">
              <div data-ui5-slot="footer">
                Footer
              </div>
              <div>
                DialogContent
              </div>
            </ui5-dialog>
          </WithWebComponent>
        </WithTheme(WithWebComponent)>
      </Dialog>
    </ResponsivePopover>
  </ThemeProvider>
</ThemeProvider>
```

