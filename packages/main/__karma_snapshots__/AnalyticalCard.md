# `Analytical Card`

#### `Render without Crashing`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(AnalyticalCard) renderHeader={[Function: renderHeader]}>
        <AnalyticalCard renderHeader={[Function: renderHeader]} innerRef={{...}} classes={{...}} theme={{...}}>
          <div className="AnalyticalCard-card---" style={[undefined]} title={[undefined]}>
            <WithStyles(AnalyticalCardHeader) title="Title" subTitle="Subtitle" arrowIndicator="Down" indicatorState="Success" value="Value" valueState="Success" unit="Unit" target="Target" deviation="Deviation" loading={false} showIndicator={true} description="Description" onHeaderPress={{...}}>
              <AnalyticalCardHeader title="Title" subTitle="Subtitle" arrowIndicator="Down" indicatorState="Success" value="Value" valueState="Success" unit="Unit" target="Target" deviation="Deviation" loading={false} showIndicator={true} description="Description" onHeaderPress={{...}} innerRef={{...}} classes={{...}} theme={{...}}>
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
                            <Text renderWhitespace={false} wrapping={true} width={{...}}>
                              <span style={{...}} className="Text---text---" title={[undefined]} slot={[undefined]}>
                                Target
                              </span>
                            </Text>
                          </div>
                        </div>
                        <div className="AnalyticalCardHeader-deviation---">
                          <Label for="">
                            <ui5-label for="" class="">
                              Deviation
                            </ui5-label>
                          </Label>
                          <div>
                            <Text renderWhitespace={false} wrapping={true} width={{...}}>
                              <span style={{...}} className="Text---text---" title={[undefined]} slot={[undefined]}>
                                Deviation
                              </span>
                            </Text>
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
              <Text renderWhitespace={false} wrapping={true} width={{...}}>
                <span style={{...}} className="Text---text---" title={[undefined]} slot={[undefined]}>
                  I&#39;m a content!
                </span>
              </Text>
            </div>
          </div>
        </AnalyticalCard>
      </WithStyles(AnalyticalCard)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

