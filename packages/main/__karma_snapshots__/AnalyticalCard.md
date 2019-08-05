# `Analytical Card`

#### `Render without Crashing`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <ForwardRef header={{...}} width="20rem">
        <div className="AnalyticalCard--card--- AnalyticalCard--card----" style={[undefined]} title={[undefined]}>
          <ForwardRef title="Title" subTitle="Subtitle" arrowIndicator="Down" indicatorState="Success" value="Value" valueState="Success" unit="Unit" target="Target" deviation="Deviation" showIndicator={true} description="Description" onHeaderPress={{...}} counter={{...}} counterState="None" currency={{...}}>
            <div onClick={[Function: onClick]} className="Analytical-Card-Header--cardHeader---" title={[undefined]} style={[undefined]}>
              <div className="Analytical-Card-Header--headerContent---">
                <div className="Analytical-Card-Header--headerTitles---">
                  <FlexBox justifyContent="SpaceBetween" wrap="NoWrap" alignItems="Stretch" direction="Row" displayInline={false} height="" width="">
                    <div className="FlexBox--flexBox--- FlexBox--flexBoxDirectionRow--- FlexBox--justifyContentSpaceBetween--- FlexBox--alignItemsStretch--- FlexBox--flexWrapNoWrap---" style={{...}} title={[undefined]} slot={[undefined]}>
                      <div className="Analytical-Card-Header--headerText---">
                        Title
                      </div>
                      <WithStyles(Component) className="Analytical-Card-Header--counter---" state="None" showDefaultIcon={false} icon={{...}}>
                        <Component className="Analytical-Card-Header--counter---" state="None" showDefaultIcon={false} icon={{...}} innerRef={{...}} classes={{...}} theme={{...}}>
                          <div className="Component-objectStatus--- Analytical-Card-Header--counter---" style={[undefined]} title={[undefined]} slot={[undefined]} />
                        </Component>
                      </WithStyles(Component)>
                    </div>
                  </FlexBox>
                  <div className="Analytical-Card-Header--subHeaderText---">
                    Subtitle
                  </div>
                </div>
                <FlexBox direction="Row" className="Analytical-Card-Header--kpiContent---" alignItems="End" displayInline={false} height="" justifyContent="Start" width="" wrap="NoWrap">
                  <div className="FlexBox--flexBox--- FlexBox--flexBoxDirectionRow--- FlexBox--justifyContentStart--- FlexBox--alignItemsEnd--- FlexBox--flexWrapNoWrap--- Analytical-Card-Header--kpiContent---" style={{...}} title={[undefined]} slot={[undefined]}>
                    <FlexBox direction="Row" alignItems="Stretch" displayInline={false} height="" justifyContent="Start" width="" wrap="NoWrap">
                      <div className="FlexBox--flexBox--- FlexBox--flexBoxDirectionRow--- FlexBox--justifyContentStart--- FlexBox--alignItemsStretch--- FlexBox--flexWrapNoWrap---" style={{...}} title={[undefined]} slot={[undefined]}>
                        <div className="Analytical-Card-Header--valueAndUnit--- Analytical-Card-Header--good---">
                          <div className="Analytical-Card-Header--value---">
                            Value
                          </div>
                          <div className="Analytical-Card-Header--indicatorAndUnit---">
                            <div className="Analytical-Card-Header--arrowIndicatorShape--- Analytical-Card-Header--arrowDown--- Analytical-Card-Header--good---" />
                            <div className="Analytical-Card-Header--unit---">
                              Unit
                            </div>
                          </div>
                        </div>
                      </div>
                    </FlexBox>
                    <FlexBox direction="Row" wrap="NoWrap" className="Analytical-Card-Header--targetAndDeviation---" alignItems="Stretch" displayInline={false} height="" justifyContent="Start" width="">
                      <div className="FlexBox--flexBox--- FlexBox--flexBoxDirectionRow--- FlexBox--justifyContentStart--- FlexBox--alignItemsStretch--- FlexBox--flexWrapNoWrap--- Analytical-Card-Header--targetAndDeviation---" style={{...}} title={[undefined]} slot={[undefined]}>
                        <FlexBox direction="Column" className="Analytical-Card-Header--targetAndDeviationColumn---" wrap="NoWrap" alignItems="Stretch" displayInline={false} height="" justifyContent="Start" width="">
                          <div className="FlexBox--flexBox--- FlexBox--flexBoxDirectionColumn--- FlexBox--justifyContentStart--- FlexBox--alignItemsStretch--- FlexBox--flexWrapNoWrap--- Analytical-Card-Header--targetAndDeviationColumn---" style={{...}} title={[undefined]} slot={[undefined]}>
                            <span>
                              Target
                            </span>
                            <span className="Analytical-Card-Header--targetAndDeviationValue---">
                              Target
                            </span>
                          </div>
                        </FlexBox>
                        <FlexBox direction="Column" className="Analytical-Card-Header--targetAndDeviationColumn---" wrap="NoWrap" alignItems="Stretch" displayInline={false} height="" justifyContent="Start" width="">
                          <div className="FlexBox--flexBox--- FlexBox--flexBoxDirectionColumn--- FlexBox--justifyContentStart--- FlexBox--alignItemsStretch--- FlexBox--flexWrapNoWrap--- Analytical-Card-Header--targetAndDeviationColumn---" style={{...}} title={[undefined]} slot={[undefined]}>
                            <span>
                              Deviation
                            </span>
                            <span className="Analytical-Card-Header--targetAndDeviationValue---">
                              Deviation
                            </span>
                          </div>
                        </FlexBox>
                      </div>
                    </FlexBox>
                  </div>
                </FlexBox>
                <div className="Analytical-Card-Header--description---">
                  Description
                </div>
              </div>
            </div>
          </ForwardRef>
          <div className="AnalyticalCard--content---">
            <Text renderWhitespace={false} wrapping={true} width={{...}}>
              <span style={{...}} className="Text--text---" title={[undefined]} slot={[undefined]}>
                I&#39;m a content!
              </span>
            </Text>
          </div>
        </div>
      </ForwardRef>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

