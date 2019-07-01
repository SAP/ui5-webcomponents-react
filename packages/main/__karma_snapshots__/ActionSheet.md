# `ActionSheet`

#### `Render without Crashing`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]} id={{...}}>
    <ThemeProvider theme={{...}}>
      <WithStyles(ActionSheet) openBy={{...}} placement="Bottom">
        <ActionSheet openBy={{...}} placement="Bottom" classes={{...}} theme={{...}}>
          <Popover noHeader={true} openBy={{...}} placementType="Bottom" style={[undefined]} data-ui5-slot={[undefined]} initialFocus={{...}} headerText="" horizontalAlign="Center" verticalAlign="Center">
            <div style={{...}} onClick={[Function]}>
              <Button design="Default">
                <ui5-button design="Default" class="" />
              </Button>
            </div>
            <WithWebComponent(Popover) noHeader={true} placementType="Bottom" style={[undefined]} data-ui5-slot={[undefined]} initialFocus={{...}} headerText="" horizontalAlign="Center" verticalAlign="Center">
              <ui5-popover no-header={true} placement-type="Bottom" style={[undefined]} data-ui5-slot={[undefined]} initial-focus={{...}} header-text="" horizontal-align="Center" vertical-align="Center" class="">
                <ul className="ActionSheet-actionSheet---" />
              </ui5-popover>
            </WithWebComponent(Popover)>
          </Popover>
        </ActionSheet>
      </WithStyles(ActionSheet)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

