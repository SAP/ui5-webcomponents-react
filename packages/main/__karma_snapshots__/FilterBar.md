# `FilterBar`

#### `Render without crashing`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(FilterBar) renderSearch={[Function: renderSearch]} renderVariants={[Function: renderVariants]} displayOnly={true}>
        <FilterBar renderSearch={[Function: renderSearch]} renderVariants={[Function: renderVariants]} displayOnly={true} innerRef={{...}} classes={{...}} theme={{...}}>
          <div className="FilterBar-outerContainer---">
            <div className="FilterBar-filterBarHeader---">
              <Variant Management variantItems={{...}} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" disabled={false}>
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
              <div className="FilterBar-vLine---">
                 
                <Input placeholder="Search" type="Text" value="" valueState="None">
                  <ui5-input placeholder="Search" type="Text" value="" value-state="None" class="" />
                </Input>
                 
              </div>
              <div className="FilterBar-headerRowRight---">
                <Button onClick={[Function]} design="Transparent">
                  <ui5-button design="Transparent" class="">
                    Hide Filter Bar
                  </ui5-button>
                </Button>
              </div>
            </div>
            <div className="FilterBar-filterArea---">
              <FilterItem filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false}>
                <div className="FilterItem--filterItem---" style={[undefined]} title={[undefined]}>
                  <div className="FilterItem--innerFilterItemContainer---">
                    <Label for="">
                      <ui5-label for="" class="">
                        Classification
                      </ui5-label>
                    </Label>
                    <Select onChange={[Function: onSelect]} style={{...}} valueState="None">
                      <ui5-select style={{...}} value-state="None" class="">
                        <Option data-key="1" icon={{...}}>
                          <ui5-option data-key="1" icon={{...}} class="">
                            Text 1
                          </ui5-option>
                        </Option>
                        <Option data-key="2" icon={{...}}>
                          <ui5-option data-key="2" icon={{...}} class="">
                            Text 2
                          </ui5-option>
                        </Option>
                      </ui5-select>
                    </Select>
                  </div>
                </div>
              </FilterItem>
              <FilterItem type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false}>
                <div className="FilterItem--filterItem---" style={[undefined]} title={[undefined]}>
                  <div className="FilterItem--innerFilterItemContainer---">
                    <Label for="">
                      <ui5-label for="" class="">
                        Custom Filter 1
                      </ui5-label>
                    </Label>
                    <div>
                      <Switch onClick={[Function: onClick]} valueParameter="state" style={{...}}>
                        <ui5-switch on-click={[Function: onClick]} value-parameter="state" style={{...}} class="" />
                      </Switch>
                    </div>
                  </div>
                </div>
              </FilterItem>
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
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(FilterBar) renderVariants={[Function: renderVariants]} displayOnly={true}>
        <FilterBar renderVariants={[Function: renderVariants]} displayOnly={true} innerRef={{...}} classes={{...}} theme={{...}}>
          <div className="FilterBar-outerContainer---">
            <div className="FilterBar-filterBarHeader---">
              <Variant Management variantItems={{...}} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" disabled={false}>
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
              <div className="FilterBar-headerRowRight---">
                <Button onClick={[Function]} design="Transparent">
                  <ui5-button design="Transparent" class="">
                    Hide Filter Bar
                  </ui5-button>
                </Button>
              </div>
            </div>
            <div className="FilterBar-filterArea---">
              <FilterItem filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false}>
                <div className="FilterItem--filterItem---" style={[undefined]} title={[undefined]}>
                  <div className="FilterItem--innerFilterItemContainer---">
                    <Label for="">
                      <ui5-label for="" class="">
                        Classification
                      </ui5-label>
                    </Label>
                    <Select onChange={[Function: onSelect]} style={{...}} valueState="None">
                      <ui5-select style={{...}} value-state="None" class="">
                        <Option data-key="1" icon={{...}}>
                          <ui5-option data-key="1" icon={{...}} class="">
                            Text 1
                          </ui5-option>
                        </Option>
                        <Option data-key="2" icon={{...}}>
                          <ui5-option data-key="2" icon={{...}} class="">
                            Text 2
                          </ui5-option>
                        </Option>
                      </ui5-select>
                    </Select>
                  </div>
                </div>
              </FilterItem>
              <FilterItem type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false}>
                <div className="FilterItem--filterItem---" style={[undefined]} title={[undefined]}>
                  <div className="FilterItem--innerFilterItemContainer---">
                    <Label for="">
                      <ui5-label for="" class="">
                        Custom Filter 1
                      </ui5-label>
                    </Label>
                    <div>
                      <Switch onClick={[Function: onClick]} valueParameter="state" style={{...}}>
                        <ui5-switch on-click={[Function: onClick]} value-parameter="state" style={{...}} class="" />
                      </Switch>
                    </div>
                  </div>
                </div>
              </FilterItem>
              <FilterItem loading={true} type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]}>
                <div className="FilterItem--filterItem---" style={[undefined]} title={[undefined]}>
                  <div className="FilterItem--innerFilterItemContainer---">
                    <Label for="">
                      <ui5-label for="" class="">
                        Custom Filter 1
                      </ui5-label>
                    </Label>
                    <div className="FilterItem--loadingContainer---">
                      <BusyIndicator active={true} size="Medium" style={{...}}>
                        <ui5-busyindicator active={true} size="Medium" style={{...}} class="" />
                      </BusyIndicator>
                    </div>
                  </div>
                </div>
              </FilterItem>
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
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(FilterBar) renderVariants={[Function: renderVariants]} displayOnly={true}>
        <FilterBar renderVariants={[Function: renderVariants]} displayOnly={true} innerRef={{...}} classes={{...}} theme={{...}}>
          <div className="FilterBar-outerContainer---">
            <div className="FilterBar-filterBarHeader---">
              <Variant Management variantItems={{...}} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" disabled={false}>
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
              <div className="FilterBar-headerRowRight---">
                <Button onClick={[Function]} design="Transparent">
                  <ui5-button design="Transparent" class="">
                    Hide Filter Bar
                  </ui5-button>
                </Button>
              </div>
            </div>
            <div className="FilterBar-filterArea---">
              <FilterItem filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false}>
                <div className="FilterItem--filterItem---" style={[undefined]} title={[undefined]}>
                  <div className="FilterItem--innerFilterItemContainer---">
                    <Label for="">
                      <ui5-label for="" class="">
                        Classification
                      </ui5-label>
                    </Label>
                    <Select onChange={[Function: onSelect]} style={{...}} valueState="None">
                      <ui5-select style={{...}} value-state="None" class="">
                        <Option data-key="1" icon={{...}}>
                          <ui5-option data-key="1" icon={{...}} class="">
                            Text 1
                          </ui5-option>
                        </Option>
                        <Option data-key="2" icon={{...}}>
                          <ui5-option data-key="2" icon={{...}} class="">
                            Text 2
                          </ui5-option>
                        </Option>
                      </ui5-select>
                    </Select>
                  </div>
                </div>
              </FilterItem>
              <FilterItem loading={true} filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]}>
                <div className="FilterItem--filterItem---" style={[undefined]} title={[undefined]}>
                  <div className="FilterItem--innerFilterItemContainer---">
                    <Label for="">
                      <ui5-label for="" class="">
                        Classification
                      </ui5-label>
                    </Label>
                    <div className="FilterItem--loadingContainer---">
                      <BusyIndicator active={true} size="Medium" style={{...}}>
                        <ui5-busyindicator active={true} size="Medium" style={{...}} class="" />
                      </BusyIndicator>
                    </div>
                  </div>
                </div>
              </FilterItem>
              <FilterItem label="Classification" type="Default" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false}>
                <div className="FilterItem--filterItem---" style={[undefined]} title={[undefined]}>
                  <div className="FilterItem--innerFilterItemContainer---">
                    <Label for="">
                      <ui5-label for="" class="">
                        Classification
                      </ui5-label>
                    </Label>
                    <Input placeholder="" onChange={[Function: onSelect]} style={{...}} type="Text" value="" valueState="None">
                      <ui5-input placeholder="" style={{...}} type="Text" value="" value-state="None" class="" />
                    </Input>
                  </div>
                </div>
              </FilterItem>
              <FilterItem filterItems={{...}} label="Classification" type="MultiSelect" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false}>
                <div className="FilterItem--filterItem---" style={[undefined]} title={[undefined]}>
                  <div className="FilterItem--innerFilterItemContainer---">
                    <Label for="">
                      <ui5-label for="" class="">
                        Classification
                      </ui5-label>
                    </Label>
                    <MultiComboBox onSelectionChange={[Function: onMultiCbChange]} value="" placeholder="" valueState="None">
                      <ui5-multi-combobox value="" placeholder="" value-state="None" class="">
                        <StandardListItem data-key="1" type="Active" infoState="None">
                          <ui5-li data-key="1" type="Active" info-state="None" class="">
                            Text 1
                          </ui5-li>
                        </StandardListItem>
                        <StandardListItem data-key="2" type="Active" infoState="None">
                          <ui5-li data-key="2" type="Active" info-state="None" class="">
                            Text 2
                          </ui5-li>
                        </StandardListItem>
                      </ui5-multi-combobox>
                    </MultiComboBox>
                  </div>
                </div>
              </FilterItem>
            </div>
          </div>
        </FilterBar>
      </WithStyles(FilterBar)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

