# `ActionSheet`

#### `Render without Crashing`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(ActionSheet)) openBy={{...}} placement="Bottom">
      <WithStyles(ActionSheet) openBy={{...}} placement="Bottom" classes={{...}}>
        <ActionSheet openBy={{...}} placement="Bottom" classes={{...}}>
          <ResponsivePopover hideHeader={true} innerComponentRef={[Function]} openBy={{...}} placementType="Bottom" style={[undefined]} data-ui5-slot={[undefined]}>
            <Popover hideHeader={true} innerComponentRef={[Function]} openBy={{...}} placementType="Bottom" style={[undefined]} data-ui5-slot={[undefined]} initialFocus={{...}} headerText="" horizontalAlign="Center" verticalAlign="Center">
              <div style={{...}} onClick={[Function]}>
                <Button type="Default">
                  <WithWebComponent theme={{...}} type="Default">
                    <ui5-button type="Default" class="sapUiSizeCompact" />
                  </WithWebComponent>
                </Button>
              </div>
              <WithTheme(WithWebComponent) hideHeader={true} innerComponentRef={[Function]} placementType="Bottom" style={[undefined]} data-ui5-slot={[undefined]} initialFocus={{...}} headerText="" horizontalAlign="Center" verticalAlign="Center">
                <WithWebComponent theme={{...}} hideHeader={true} innerComponentRef={[Function]} placementType="Bottom" style={[undefined]} data-ui5-slot={[undefined]} initialFocus={{...}} headerText="" horizontalAlign="Center" verticalAlign="Center">
                  <ui5-popover hide-header={true} inner-component-ref={[Function]} placement-type="Bottom" style={[undefined]} data-ui5-slot={[undefined]} initial-focus={{...}} header-text="" horizontal-align="Center" vertical-align="Center" class="sapUiSizeCompact">
                    <ul className="ActionSheet-actionSheet---" />
                  </ui5-popover>
                </WithWebComponent>
              </WithTheme(WithWebComponent)>
            </Popover>
          </ResponsivePopover>
        </ActionSheet>
      </WithStyles(ActionSheet)>
    </Jss(WithStyles(ActionSheet))>
  </ThemeProvider>
</ThemeProvider>
```

