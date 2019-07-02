# `VariantManagement`

#### `Render without crashing`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]} id={{...}}>
    <ThemeProvider theme={{...}}>
      <WithStyles(VariantManagement) variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4">
        <VariantManagement variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" classes={{...}} theme={{...}}>
          <Popover open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" openBy={{...}} footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center">
            <div style={{...}} onClick={[Function]}>
              <div className="VariantManagement-VariantManagement---">
                <span className="VariantManagement-VariantManagementText---">
                  <Title level="H4">
                    <ui5-title level="H4" class="">
                      Variant 1
                    </ui5-title>
                  </Title>
                </span>
                <Button design="Transparent" icon="navigation-down-arrow">
                  <ui5-button design="Transparent" icon="navigation-down-arrow" class="" />
                </Button>
              </div>
            </div>
            <WithWebComponent(Popover) onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center">
              <ui5-popover header-text="Variants" placement-type="Bottom" tooltip={[undefined]} initial-focus={{...}} horizontal-align="Center" vertical-align="Center" class="">
                <Button className="VariantManagement-footer---" onClick={[Function]} design="Emphasized" data-ui5-slot="footer">
                  <ui5-button design="Emphasized" data-ui5-slot="footer" class="VariantManagement-footer---">
                    Cancel
                  </ui5-button>
                </Button>
                <WithWebComponent(List) onItemClick={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
                  <ui5-list mode="SingleSelect" header-text="" footer-text="" no-data-text="" separators="All" class="">
                    <StandardListItem style={{...}} data-key="1" type="Active" selected={true} infoState="None">
                      <ui5-li selected={true} style={{...}} data-key="1" type="Active" info-state="None" class="">
                        Variant 1
                      </ui5-li>
                    </StandardListItem>
                    <StandardListItem style={{...}} data-key="2" type="Active" selected={false} infoState="None">
                      <ui5-li style={{...}} data-key="2" type="Active" info-state="None" class="">
                        Variant 2
                      </ui5-li>
                    </StandardListItem>
                  </ui5-list>
                </WithWebComponent(List)>
              </ui5-popover>
            </WithWebComponent(Popover)>
          </Popover>
        </VariantManagement>
      </WithStyles(VariantManagement)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

