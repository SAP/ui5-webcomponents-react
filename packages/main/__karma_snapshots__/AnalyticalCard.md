# `Analytical Card`

#### `Render without Crashing`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]} id={{...}}>
    <ThemeProvider theme={{...}}>
      <WithStyles(AnalyticalCard) renderHeader={[Function: renderHeader]}>
        <AnalyticalCard renderHeader={[Function: renderHeader]} classes={{...}} theme={{...}}>
          <div className="AnalyticalCard-card---" style={[undefined]} title={[undefined]}>
            <WithStyles(AnalyticalCardHeader) title="Title" subTitle="Subtitle" arrowIndicator="Down" indicatorState="Success" value="Value" valueState="Success" unit="Unit" target="Target" deviation="Deviation" loading={false} showIndicator={true} description="Description" onHeaderPress={{...}}>
              <AnalyticalCardHeader title="Title" subTitle="Subtitle" arrowIndicator="Down" indicatorState="Success" value="Value" valueState="Success" unit="Unit" target="Target" deviation="Deviation" loading={false} showIndicator={true} description="Description" onHeaderPress={{...}} classes={{...}} theme={{...}}>
                <div onClick={[Function]} className="AnalyticalCardHeader-cardHeader---" title={[undefined]} style={[undefined]}>
                  <div className="AnalyticalCardHeader-headerContent---">
                    <div className="AnalyticalCardHeader-headerText---">
                      <span>
                        Title
                      </span>
                      <div className="AnalyticalCardHeader-subHeaderText---">
                        Subtitle
                      </div>
                    </div>
                    <div className="AnalyticalCardHeader-kpiContent---">
                      <div className="AnalyticalCardHeader-leftContent---">
                        <div className="AnalyticalCardHeader-valueAndUnit--- AnalyticalCardHeader-good---">
                          <div className="AnalyticalCardHeader-value---">
                            Value
                          </div>
                          <div className="AnalyticalCardHeader-indicatorAndUnit---">
                            <div className="AnalyticalCardHeader-arrowIndicatorShape--- AnalyticalCardHeader-arrowDown--- AnalyticalCardHeader-good---" />
                            <div className="AnalyticalCardHeader-unit---">
                              Unit
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="AnalyticalCardHeader-targetAndDeviation---">
                        <div>
                          <Label for="">
                            <ui5-label for="" class="">
                              Target
                            </ui5-label>
                          </Label>
                          <div>
                            <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}}>
                              <Component renderWhitespace={false} wrapping={true} width={{...}} classes={{...}} theme={{...}}>
                                <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
                                  Target
                                </span>
                              </Component>
                            </WithStyles(Component)>
                          </div>
                        </div>
                        <div className="AnalyticalCardHeader-deviation---">
                          <Label for="">
                            <ui5-label for="" class="">
                              Deviation
                            </ui5-label>
                          </Label>
                          <div>
                            <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}}>
                              <Component renderWhitespace={false} wrapping={true} width={{...}} classes={{...}} theme={{...}}>
                                <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
                                  Deviation
                                </span>
                              </Component>
                            </WithStyles(Component)>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="AnalyticalCardHeader-subHeaderText---">
                      Description
                    </div>
                  </div>
                </div>
              </AnalyticalCardHeader>
            </WithStyles(AnalyticalCardHeader)>
            <div style={{...}}>
              <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}}>
                <Component renderWhitespace={false} wrapping={true} width={{...}} classes={{...}} theme={{...}}>
                  <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
                    I&#39;m a content!
                  </span>
                </Component>
              </WithStyles(Component)>
            </div>
          </div>
        </AnalyticalCard>
      </WithStyles(AnalyticalCard)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

