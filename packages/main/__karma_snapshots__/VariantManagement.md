# `VariantManagement`

#### `Render without crashing`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <Variant Management variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" disabled={false}>
        <Popover open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" openBy={{...}} footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center">
          <div style={{...}} onClick={[Function]}>
            <div className="Variant-Management--VariantManagement---">
              <Title level="H4" className="Variant-Management--VariantManagementText---">
                <ui5-title level="H4" class="Variant-Management--VariantManagementText---">
                  Variant 1
                </ui5-title>
              </Title>
              <Button design="Transparent" icon="navigation-down-arrow" disabled={false}>
                <ui5-button design="Transparent" icon="navigation-down-arrow" class="" />
              </Button>
            </div>
          </div>
          <WithWebComponent(Popover) onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center">
            <ui5-popover header-text="Variants" placement-type="Bottom" tooltip={[undefined]} initial-focus={{...}} horizontal-align="Center" vertical-align="Center" class="">
              <Button className="Variant-Management--footer---" onClick={[Function]} design="Emphasized" slot="footer">
                <ui5-button design="Emphasized" slot="footer" class="Variant-Management--footer---">
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
      </Variant Management>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

