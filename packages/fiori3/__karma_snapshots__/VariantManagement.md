# `VariantManagement`

#### `Render without crashing`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(VariantManagement)) variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4">
      <WithStyles(VariantManagement) variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" theme={{...}} classes={{...}}>
        <VariantManagement variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" theme={{...}} classes={{...}}>
          <ResponsivePopover open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" openBy={{...}} footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]}>
            <div style={{...}} onClick={[Function]} data-ui5-slot={[undefined]}>
              <div className="VariantManagement-VariantManagement---">
                <span className="VariantManagement-VariantManagementText---">
                  <Title level="H4">
                    <WithWebComponent theme={{...}} level="H4">
                      <ui5-title level="H4" class="sapUiSizeCompact">
                        Variant 1
                      </ui5-title>
                    </WithWebComponent>
                  </Title>
                </span>
                <Button type="Transparent" icon="navigation-down-arrow" activeIcon={{...}}>
                  <WithWebComponent theme={{...}} type="Transparent" icon="navigation-down-arrow" activeIcon={{...}}>
                    <ui5-button type="Transparent" icon="navigation-down-arrow" active-icon={{...}} class="sapUiSizeCompact" />
                  </WithWebComponent>
                </Button>
              </div>
            </div>
            <Dialog open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} innerComponentRef={[Function]} onAfterClose={[Function]} initialFocus={{...}}>
              <WithTheme(WithWebComponent) open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} innerComponentRef={[Function]} onAfterClose={[Function]} initialFocus={{...}}>
                <WithWebComponent theme={{...}} open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} innerComponentRef={[Function]} onAfterClose={[Function]} initialFocus={{...}}>
                  <ui5-dialog open={false} header-text="Variants" placement-type="Bottom" tooltip={[undefined]} inner-component-ref={[Function]} initial-focus={{...}} class="sapUiSizeCompact">
                    <Button className="VariantManagement-footer---" onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}} data-ui5-slot="footer">
                      <WithWebComponent theme={{...}} className="VariantManagement-footer---" onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}} data-ui5-slot="footer">
                        <ui5-button type="Emphasized" icon={{...}} active-icon={{...}} data-ui5-slot="footer" class="sapUiSizeCompact VariantManagement-footer---">
                          Cancel
                        </ui5-button>
                      </WithWebComponent>
                    </Button>
                    <WithTheme(WithWebComponent) onItemPress={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
                      <WithWebComponent theme={{...}} onItemPress={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
                        <ui5-list mode="SingleSelect" header-text="" footer-text="" no-data-text="" separators="All" class="sapUiSizeCompact">
                          <StandardListItem style={{...}} data-key="1" type="Active" selected={true} description="" icon={{...}} image={{...}}>
                            <WithWebComponent theme={{...}} style={{...}} data-key="1" type="Active" selected={true} description="" icon={{...}} image={{...}}>
                              <ui5-li selected={true} style={{...}} data-key="1" type="Active" description="" icon={{...}} image={{...}} class="sapUiSizeCompact">
                                Variant 1
                              </ui5-li>
                            </WithWebComponent>
                          </StandardListItem>
                          <StandardListItem style={{...}} data-key="2" type="Active" selected={false} description="" icon={{...}} image={{...}}>
                            <WithWebComponent theme={{...}} style={{...}} data-key="2" type="Active" selected={false} description="" icon={{...}} image={{...}}>
                              <ui5-li style={{...}} data-key="2" type="Active" description="" icon={{...}} image={{...}} class="sapUiSizeCompact">
                                Variant 2
                              </ui5-li>
                            </WithWebComponent>
                          </StandardListItem>
                        </ui5-list>
                      </WithWebComponent>
                    </WithTheme(WithWebComponent)>
                  </ui5-dialog>
                </WithWebComponent>
              </WithTheme(WithWebComponent)>
            </Dialog>
          </ResponsivePopover>
        </VariantManagement>
      </WithStyles(VariantManagement)>
    </Jss(WithStyles(VariantManagement))>
  </ThemeProvider>
</ThemeProvider>
```

