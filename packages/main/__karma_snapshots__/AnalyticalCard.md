# `Analytical Card`

#### `Render without Crashing`

```
<ThemeProvider withToastContainer={false} noInjectThemeProperties={false}>
  <JssProvider generateId={[Function]} jss={[undefined]}>
    <ThemeProvider theme={{...}}>
      <AnalyticalCard header={{...}} width="20rem">
        <div className="AnalyticalCard--card---" style={{...}} title={[undefined]}>
          <AnalyticalCardHeader title="Title" subTitle="Subtitle" arrowIndicator="Down" indicatorState="Success" value="Value" valueState="Success" unit="Unit" target="Target" deviation="Deviation" showIndicator={true} description="Description" onHeaderPress={{...}} counter={{...}} counterState="None" currency={{...}}>
            <div onClick={[Function]} className="AnalyticalCardHeader--cardHeader---" title={[undefined]} style={[undefined]}>
              <div className="AnalyticalCardHeader--headerContent---">
                <div className="AnalyticalCardHeader--headerTitles---">
                  <FlexBox justifyContent="SpaceBetween" wrap="NoWrap" alignItems="Stretch" direction="Row" displayInline={false} height="" width="">
                    <div className="FlexBox--flexBox--- FlexBox--flexBoxDirectionRow--- FlexBox--justifyContentSpaceBetween--- FlexBox--alignItemsStretch--- FlexBox--flexWrapNoWrap---" style={{...}} title={[undefined]} slot={[undefined]}>
                      <div className="AnalyticalCardHeader--headerText---">
                        Title
                      </div>
                      <WithStyles(Component) className="AnalyticalCardHeader--counter---" state="None" showDefaultIcon={false} icon={{...}}>
                        <Component className="AnalyticalCardHeader--counter---" state="None" showDefaultIcon={false} icon={{...}} innerRef={{...}} classes={{...}} theme={{...}}>
                          <div className="Component-objectStatus--- AnalyticalCardHeader--counter---" style={[undefined]} title={[undefined]} slot={[undefined]} />
                        </Component>
                      </WithStyles(Component)>
                    </div>
                  </FlexBox>
                  <div className="AnalyticalCardHeader--subHeaderText---">
                    Subtitle
                  </div>
                </div>
                <FlexBox direction="Row" className="AnalyticalCardHeader--kpiContent---" alignItems="End" displayInline={false} height="" justifyContent="Start" width="" wrap="NoWrap">
                  <div className="FlexBox--flexBox--- FlexBox--flexBoxDirectionRow--- FlexBox--justifyContentStart--- FlexBox--alignItemsEnd--- FlexBox--flexWrapNoWrap--- AnalyticalCardHeader--kpiContent---" style={{...}} title={[undefined]} slot={[undefined]}>
                    <FlexBox direction="Row" alignItems="Stretch" displayInline={false} height="" justifyContent="Start" width="" wrap="NoWrap">
                      <div className="FlexBox--flexBox--- FlexBox--flexBoxDirectionRow--- FlexBox--justifyContentStart--- FlexBox--alignItemsStretch--- FlexBox--flexWrapNoWrap---" style={{...}} title={[undefined]} slot={[undefined]}>
                        <div className="AnalyticalCardHeader--valueAndUnit--- AnalyticalCardHeader--good---">
                          <div className="AnalyticalCardHeader--value---">
                            Value
                          </div>
                          <div className="AnalyticalCardHeader--indicatorAndUnit---">
                            <div className="AnalyticalCardHeader--arrowIndicatorShape--- AnalyticalCardHeader--arrowDown--- AnalyticalCardHeader--good---" />
                            <div className="AnalyticalCardHeader--unit---">
                              Unit
                            </div>
                          </div>
                        </div>
                      </div>
                    </FlexBox>
                    <FlexBox direction="Row" wrap="NoWrap" className="AnalyticalCardHeader--targetAndDeviation---" alignItems="Stretch" displayInline={false} height="" justifyContent="Start" width="">
                      <div className="FlexBox--flexBox--- FlexBox--flexBoxDirectionRow--- FlexBox--justifyContentStart--- FlexBox--alignItemsStretch--- FlexBox--flexWrapNoWrap--- AnalyticalCardHeader--targetAndDeviation---" style={{...}} title={[undefined]} slot={[undefined]}>
                        <FlexBox direction="Column" className="AnalyticalCardHeader--targetAndDeviationColumn---" wrap="NoWrap" alignItems="Stretch" displayInline={false} height="" justifyContent="Start" width="">
                          <div className="FlexBox--flexBox--- FlexBox--flexBoxDirectionColumn--- FlexBox--justifyContentStart--- FlexBox--alignItemsStretch--- FlexBox--flexWrapNoWrap--- AnalyticalCardHeader--targetAndDeviationColumn---" style={{...}} title={[undefined]} slot={[undefined]}>
                            <span>
                              Target
                            </span>
                            <span className="AnalyticalCardHeader--targetAndDeviationValue---">
                              Target
                            </span>
                          </div>
                        </FlexBox>
                        <FlexBox direction="Column" className="AnalyticalCardHeader--targetAndDeviationColumn---" wrap="NoWrap" alignItems="Stretch" displayInline={false} height="" justifyContent="Start" width="">
                          <div className="FlexBox--flexBox--- FlexBox--flexBoxDirectionColumn--- FlexBox--justifyContentStart--- FlexBox--alignItemsStretch--- FlexBox--flexWrapNoWrap--- AnalyticalCardHeader--targetAndDeviationColumn---" style={{...}} title={[undefined]} slot={[undefined]}>
                            <span>
                              Deviation
                            </span>
                            <span className="AnalyticalCardHeader--targetAndDeviationValue---">
                              Deviation
                            </span>
                          </div>
                        </FlexBox>
                      </div>
                    </FlexBox>
                  </div>
                </FlexBox>
                <div className="AnalyticalCardHeader--description---">
                  Description
                </div>
              </div>
            </div>
          </AnalyticalCardHeader>
          <div className="AnalyticalCard--content---">
            <Text renderWhitespace={false} wrapping={true} width={{...}}>
              <span style={{...}} className="Text--text---" title={[undefined]} slot={[undefined]}>
                I&#39;m a content!
              </span>
            </Text>
          </div>
        </div>
      </AnalyticalCard>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

