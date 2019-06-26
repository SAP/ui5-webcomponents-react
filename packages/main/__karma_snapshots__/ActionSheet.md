# `ActionSheet`

#### `Render without Crashing`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(ActionSheet)) openBy={{...}} placement="Bottom">
      <WithStyles(ActionSheet) openBy={{...}} placement="Bottom" classes={{...}}>
        <ActionSheet openBy={{...}} placement="Bottom" classes={{...}}>
          <Popover noHeader={true} innerComponentRef={[Function]} openBy={{...}} placementType="Bottom" style={[undefined]} data-ui5-slot={[undefined]} initialFocus={{...}} headerText="" horizontalAlign="Center" verticalAlign="Center">
            <div style={{...}} onClick={[Function]}>
              <Button design="Default">
                <WithWebComponent theme={{...}} design="Default">
                  <ui5-button design="Default" class="" />
                </WithWebComponent>
              </Button>
            </div>
            <WithTheme(WithWebComponent) noHeader={true} innerComponentRef={[Function]} placementType="Bottom" style={[undefined]} data-ui5-slot={[undefined]} initialFocus={{...}} headerText="" horizontalAlign="Center" verticalAlign="Center">
              <WithWebComponent theme={{...}} noHeader={true} innerComponentRef={[Function]} placementType="Bottom" style={[undefined]} data-ui5-slot={[undefined]} initialFocus={{...}} headerText="" horizontalAlign="Center" verticalAlign="Center">
                <ui5-popover no-header={true} inner-component-ref={[Function]} placement-type="Bottom" style={[undefined]} data-ui5-slot={[undefined]} initial-focus={{...}} header-text="" horizontal-align="Center" vertical-align="Center" class="">
                  <ul className="ActionSheet-actionSheet---" />
                </ui5-popover>
              </WithWebComponent>
            </WithTheme(WithWebComponent)>
          </Popover>
        </ActionSheet>
      </WithStyles(ActionSheet)>
    </Jss(WithStyles(ActionSheet))>
  </ThemeProvider>
</ThemeProvider>
```

