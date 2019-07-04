# `ActionSheet`

#### `Render without Crashing`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]} id={{...}}>
    <ThemeProvider theme={{...}}>
      <WithStyles(ActionSheet) openBy={{...}} placement="Bottom">
        <ActionSheet openBy={{...}} placement="Bottom" classes={{...}} theme={{...}}>
          <Popover openBy={{...}} placementType="Bottom" style={[undefined]} slot={[undefined]} initialFocus={{...}} headerText="" horizontalAlign="Center" verticalAlign="Center">
            <div style={{...}} onClick={[Function]}>
              <Button design="Default">
                <ui5-button design="Default" class="" />
              </Button>
            </div>
            <WithWebComponent(Popover) placementType="Bottom" style={[undefined]} slot={[undefined]} initialFocus={{...}} headerText="" horizontalAlign="Center" verticalAlign="Center">
              <ui5-popover placement-type="Bottom" style={[undefined]} slot={[undefined]} initial-focus={{...}} header-text="" horizontal-align="Center" vertical-align="Center" class="">
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

