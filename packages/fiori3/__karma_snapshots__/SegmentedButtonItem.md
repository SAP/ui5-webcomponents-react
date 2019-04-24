# `SegmentedButtonItem`

#### `Basic SegmentedButtonItem`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(SegmentedButtonItem)) id={1} icon={{...}} visible={true} enabled={true} onClick={{...}} selected={false}>
      <WithStyles(SegmentedButtonItem) id={1} icon={{...}} visible={true} enabled={true} onClick={{...}} selected={false} theme={{...}} classes={{...}}>
        <SegmentedButtonItem id={1} icon={{...}} visible={true} enabled={true} onClick={{...}} selected={false} theme={{...}} classes={{...}}>
          <li className="SegmentedButtonItem-segmentedButtonItem--- SegmentedButtonItem-focusableItem---" onClick={[Function]} style={{...}} title={[undefined]}>
            <div className="SegmentedButtonItem-icon--- SegmentedButtonItem-withText---">
              <Icon src="add">
                <WithWebComponent theme={{...}} src="add">
                  <ui5-icon src="add" class="sapUiSizeCompact" />
                </WithWebComponent>
              </Icon>
            </div>
            My Item
          </li>
        </SegmentedButtonItem>
      </WithStyles(SegmentedButtonItem)>
    </Jss(WithStyles(SegmentedButtonItem))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Selected SegmentedButtonItem`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(SegmentedButtonItem)) id={1} icon={{...}} selected={true} visible={true} enabled={true} onClick={{...}}>
      <WithStyles(SegmentedButtonItem) id={1} icon={{...}} selected={true} visible={true} enabled={true} onClick={{...}} theme={{...}} classes={{...}}>
        <SegmentedButtonItem id={1} icon={{...}} selected={true} visible={true} enabled={true} onClick={{...}} theme={{...}} classes={{...}}>
          <li className="SegmentedButtonItem-segmentedButtonItem--- SegmentedButtonItem-focusableItem--- SegmentedButtonItem-selected---" onClick={[Function]} style={{...}} title={[undefined]}>
            <div className="SegmentedButtonItem-icon--- SegmentedButtonItem-withText---">
              <Icon src="add">
                <WithWebComponent theme={{...}} src="add">
                  <ui5-icon src="add" class="sapUiSizeCompact" />
                </WithWebComponent>
              </Icon>
            </div>
            My Item
          </li>
        </SegmentedButtonItem>
      </WithStyles(SegmentedButtonItem)>
    </Jss(WithStyles(SegmentedButtonItem))>
  </ThemeProvider>
</ThemeProvider>
```

#### `SegmentedButtonItem Icon Only`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(SegmentedButtonItem)) id={1} icon={{...}} visible={true} enabled={true} onClick={{...}} selected={false}>
      <WithStyles(SegmentedButtonItem) id={1} icon={{...}} visible={true} enabled={true} onClick={{...}} selected={false} theme={{...}} classes={{...}}>
        <SegmentedButtonItem id={1} icon={{...}} visible={true} enabled={true} onClick={{...}} selected={false} theme={{...}} classes={{...}}>
          <li className="SegmentedButtonItem-segmentedButtonItem--- SegmentedButtonItem-iconOnly--- SegmentedButtonItem-focusableItem---" onClick={[Function]} style={{...}} title={[undefined]}>
            <div className="SegmentedButtonItem-icon---">
              <Icon src="add">
                <WithWebComponent theme={{...}} src="add">
                  <ui5-icon src="add" class="sapUiSizeCompact" />
                </WithWebComponent>
              </Icon>
            </div>
          </li>
        </SegmentedButtonItem>
      </WithStyles(SegmentedButtonItem)>
    </Jss(WithStyles(SegmentedButtonItem))>
  </ThemeProvider>
</ThemeProvider>
```

#### `SegmentedButtonItem Disabled`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(SegmentedButtonItem)) id={1} icon={{...}} enabled={false} onClick={[Function]} visible={true} selected={false}>
      <WithStyles(SegmentedButtonItem) id={1} icon={{...}} enabled={false} onClick={[Function]} visible={true} selected={false} theme={{...}} classes={{...}}>
        <SegmentedButtonItem id={1} icon={{...}} enabled={false} onClick={[Function]} visible={true} selected={false} theme={{...}} classes={{...}}>
          <li className="SegmentedButtonItem-segmentedButtonItem--- SegmentedButtonItem-iconOnly--- SegmentedButtonItem-disabled---" onClick={[Function]} style={{...}} title={[undefined]}>
            <div className="SegmentedButtonItem-icon---">
              <Icon src="add">
                <WithWebComponent theme={{...}} src="add">
                  <ui5-icon src="add" class="sapUiSizeCompact" />
                </WithWebComponent>
              </Icon>
            </div>
          </li>
        </SegmentedButtonItem>
      </WithStyles(SegmentedButtonItem)>
    </Jss(WithStyles(SegmentedButtonItem))>
  </ThemeProvider>
</ThemeProvider>
```

#### `SegmentedButtonItem onClick`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(SegmentedButtonItem)) id={1} icon={{...}} onClick={[Function]} visible={true} enabled={true} selected={false}>
      <WithStyles(SegmentedButtonItem) id={1} icon={{...}} onClick={[Function]} visible={true} enabled={true} selected={false} theme={{...}} classes={{...}}>
        <SegmentedButtonItem id={1} icon={{...}} onClick={[Function]} visible={true} enabled={true} selected={false} theme={{...}} classes={{...}}>
          <li className="SegmentedButtonItem-segmentedButtonItem--- SegmentedButtonItem-iconOnly--- SegmentedButtonItem-focusableItem---" onClick={[Function]} style={{...}} title={[undefined]}>
            <div className="SegmentedButtonItem-icon---">
              <Icon src="add">
                <WithWebComponent theme={{...}} src="add">
                  <ui5-icon src="add" class="sapUiSizeCompact" />
                </WithWebComponent>
              </Icon>
            </div>
          </li>
        </SegmentedButtonItem>
      </WithStyles(SegmentedButtonItem)>
    </Jss(WithStyles(SegmentedButtonItem))>
  </ThemeProvider>
</ThemeProvider>
```

