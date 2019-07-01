# `FilterBar`

#### `Render without crashing`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]} id={{...}}>
    <ThemeProvider theme={{...}}>
      <WithStyles(FilterBar) renderSearch={[Function: renderSearch]} renderVariants={[Function: renderVariants]} displayOnly={true}>
        <FilterBar renderSearch={[Function: renderSearch]} renderVariants={[Function: renderVariants]} displayOnly={true} classes={{...}} theme={{...}}>
          <div className="FilterBar-outerContainer---">
            <div className="FilterBar-filterBarHeader---">
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
                        <Button className="VariantManagement-footer---" onPress={[Function]} design="Emphasized" data-ui5-slot="footer">
                          <ui5-button design="Emphasized" data-ui5-slot="footer" class="VariantManagement-footer---">
                            Cancel
                          </ui5-button>
                        </Button>
                        <WithWebComponent(List) onItemPress={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
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
              <div className="FilterBar-vLine---">
                 
                <Input placeholder="Search" type="Text" value="" valueState="None">
                  <ui5-input placeholder="Search" type="Text" value="" value-state="None" class="" />
                </Input>
                 
              </div>
              <div className="FilterBar-headerRowRight---">
                <Button onPress={[Function]} design="Transparent">
                  <ui5-button design="Transparent" class="">
                    Hide Filter Bar
                  </ui5-button>
                </Button>
              </div>
            </div>
            <div className="FilterBar-filterArea---">
              <WithStyles(FilterItem) filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false}>
                <FilterItem filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false} classes={{...}} theme={{...}}>
                  <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                    <Label for="">
                      <ui5-label for="" class="">
                        Classification
                      </ui5-label>
                    </Label>
                    <Select onChange={[Function]} style={{...}} valueState="None">
                      <ui5-select style={{...}} value-state="None" class="">
                        <StandardListItem type="Active" data-key="1" infoState="None">
                          <ui5-li type="Active" data-key="1" info-state="None" class="">
                            Text 1
                          </ui5-li>
                        </StandardListItem>
                        <StandardListItem type="Active" data-key="2" infoState="None">
                          <ui5-li type="Active" data-key="2" info-state="None" class="">
                            Text 2
                          </ui5-li>
                        </StandardListItem>
                      </ui5-select>
                    </Select>
                  </div>
                </FilterItem>
              </WithStyles(FilterItem)>
              <WithStyles(FilterItem) type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false}>
                <FilterItem type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false} classes={{...}} theme={{...}}>
                  <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                    <Label for="">
                      <ui5-label for="" class="">
                        Custom Filter 1
                      </ui5-label>
                    </Label>
                    <div>
                      <Switch onClick={[Function]} valueParameter="state" style={{...}}>
                        <ui5-switch on-click={[Function]} value-parameter="state" style={{...}} class="" />
                      </Switch>
                    </div>
                  </div>
                </FilterItem>
              </WithStyles(FilterItem)>
            </div>
          </div>
        </FilterBar>
      </WithStyles(FilterBar)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Hide Filter Bar`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]} id={{...}}>
    <ThemeProvider theme={{...}}>
      <WithStyles(FilterBar) renderVariants={[Function: renderVariants]} displayOnly={true}>
        <FilterBar renderVariants={[Function: renderVariants]} displayOnly={true} classes={{...}} theme={{...}}>
          <div className="FilterBar-outerContainer---">
            <div className="FilterBar-filterBarHeader---">
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
                        <Button className="VariantManagement-footer---" onPress={[Function]} design="Emphasized" data-ui5-slot="footer">
                          <ui5-button design="Emphasized" data-ui5-slot="footer" class="VariantManagement-footer---">
                            Cancel
                          </ui5-button>
                        </Button>
                        <WithWebComponent(List) onItemPress={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
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
              <div className="FilterBar-headerRowRight---">
                <Button onPress={[Function]} design="Transparent">
                  <ui5-button design="Transparent" class="">
                    Hide Filter Bar
                  </ui5-button>
                </Button>
              </div>
            </div>
            <div className="FilterBar-filterArea---">
              <WithStyles(FilterItem) filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false}>
                <FilterItem filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false} classes={{...}} theme={{...}}>
                  <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                    <Label for="">
                      <ui5-label for="" class="">
                        Classification
                      </ui5-label>
                    </Label>
                    <Select onChange={[Function]} style={{...}} valueState="None">
                      <ui5-select style={{...}} value-state="None" class="">
                        <StandardListItem type="Active" data-key="1" infoState="None">
                          <ui5-li type="Active" data-key="1" info-state="None" class="">
                            Text 1
                          </ui5-li>
                        </StandardListItem>
                        <StandardListItem type="Active" data-key="2" infoState="None">
                          <ui5-li type="Active" data-key="2" info-state="None" class="">
                            Text 2
                          </ui5-li>
                        </StandardListItem>
                      </ui5-select>
                    </Select>
                  </div>
                </FilterItem>
              </WithStyles(FilterItem)>
              <WithStyles(FilterItem) type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false}>
                <FilterItem type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false} classes={{...}} theme={{...}}>
                  <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                    <Label for="">
                      <ui5-label for="" class="">
                        Custom Filter 1
                      </ui5-label>
                    </Label>
                    <div>
                      <Switch onClick={[Function]} valueParameter="state" style={{...}}>
                        <ui5-switch on-click={[Function]} value-parameter="state" style={{...}} class="" />
                      </Switch>
                    </div>
                  </div>
                </FilterItem>
              </WithStyles(FilterItem)>
              <WithStyles(FilterItem) loading={true} type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]}>
                <FilterItem loading={true} type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} classes={{...}} theme={{...}}>
                  <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                    <Label for="">
                      <ui5-label for="" class="">
                        Custom Filter 1
                      </ui5-label>
                    </Label>
                    <BusyIndicator size="Large">
                      <ui5-busyindicator size="Large" class="" />
                    </BusyIndicator>
                  </div>
                </FilterItem>
              </WithStyles(FilterItem)>
            </div>
          </div>
        </FilterBar>
      </WithStyles(FilterBar)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Select Filter Item`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]} id={{...}}>
    <ThemeProvider theme={{...}}>
      <WithStyles(FilterBar) renderVariants={[Function: renderVariants]} displayOnly={true}>
        <FilterBar renderVariants={[Function: renderVariants]} displayOnly={true} classes={{...}} theme={{...}}>
          <div className="FilterBar-outerContainer---">
            <div className="FilterBar-filterBarHeader---">
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
                        <Button className="VariantManagement-footer---" onPress={[Function]} design="Emphasized" data-ui5-slot="footer">
                          <ui5-button design="Emphasized" data-ui5-slot="footer" class="VariantManagement-footer---">
                            Cancel
                          </ui5-button>
                        </Button>
                        <WithWebComponent(List) onItemPress={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
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
              <div className="FilterBar-headerRowRight---">
                <Button onPress={[Function]} design="Transparent">
                  <ui5-button design="Transparent" class="">
                    Hide Filter Bar
                  </ui5-button>
                </Button>
              </div>
            </div>
            <div className="FilterBar-filterArea---">
              <WithStyles(FilterItem) filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false}>
                <FilterItem filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false} classes={{...}} theme={{...}}>
                  <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                    <Label for="">
                      <ui5-label for="" class="">
                        Classification
                      </ui5-label>
                    </Label>
                    <Select onChange={[Function]} style={{...}} valueState="None">
                      <ui5-select style={{...}} value-state="None" class="">
                        <StandardListItem type="Active" data-key="1" infoState="None">
                          <ui5-li type="Active" data-key="1" info-state="None" class="">
                            Text 1
                          </ui5-li>
                        </StandardListItem>
                        <StandardListItem type="Active" data-key="2" infoState="None">
                          <ui5-li type="Active" data-key="2" info-state="None" class="">
                            Text 2
                          </ui5-li>
                        </StandardListItem>
                      </ui5-select>
                    </Select>
                  </div>
                </FilterItem>
              </WithStyles(FilterItem)>
              <WithStyles(FilterItem) loading={true} filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]}>
                <FilterItem loading={true} filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} classes={{...}} theme={{...}}>
                  <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                    <Label for="">
                      <ui5-label for="" class="">
                        Classification
                      </ui5-label>
                    </Label>
                    <BusyIndicator size="Large">
                      <ui5-busyindicator size="Large" class="" />
                    </BusyIndicator>
                  </div>
                </FilterItem>
              </WithStyles(FilterItem)>
              <WithStyles(FilterItem) label="Classification" type="Default" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false}>
                <FilterItem label="Classification" type="Default" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false} classes={{...}} theme={{...}}>
                  <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                    <Label for="">
                      <ui5-label for="" class="">
                        Classification
                      </ui5-label>
                    </Label>
                    <Input placeholder="" onChange={[Function]} style={{...}} type="Text" value="" valueState="None">
                      <ui5-input placeholder="" style={{...}} type="Text" value="" value-state="None" class="" />
                    </Input>
                  </div>
                </FilterItem>
              </WithStyles(FilterItem)>
            </div>
          </div>
        </FilterBar>
      </WithStyles(FilterBar)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

