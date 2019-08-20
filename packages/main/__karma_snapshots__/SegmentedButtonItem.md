# `SegmentedButtonItem`

#### `Basic SegmentedButtonItem`

```
<ThemeProvider withToastContainer={false} noInjectThemeProperties={false}>
  <JssProvider generateId={[Function]} jss={[undefined]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(SegmentedButtonItem) id={1} icon={{...}} visible={true} enabled={true} onClick={{...}} selected={false}>
        <SegmentedButtonItem id={1} icon={{...}} visible={true} enabled={true} onClick={{...}} selected={false} innerRef={{...}} classes={{...}} theme={{...}}>
          <li className="SegmentedButtonItem-segmentedButtonItem--- SegmentedButtonItem-focusableItem---" onClick={[Function]} style={{...}} title={[undefined]}>
            <div className="SegmentedButtonItem-icon--- SegmentedButtonItem-withText---">
              <Icon src="add">
                <ui5-icon src="add" class="" />
              </Icon>
            </div>
            My Item
          </li>
        </SegmentedButtonItem>
      </WithStyles(SegmentedButtonItem)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Selected SegmentedButtonItem`

```
<ThemeProvider withToastContainer={false} noInjectThemeProperties={false}>
  <JssProvider generateId={[Function]} jss={[undefined]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(SegmentedButtonItem) id={1} icon={{...}} selected={true} visible={true} enabled={true} onClick={{...}}>
        <SegmentedButtonItem id={1} icon={{...}} selected={true} visible={true} enabled={true} onClick={{...}} innerRef={{...}} classes={{...}} theme={{...}}>
          <li className="SegmentedButtonItem-segmentedButtonItem--- SegmentedButtonItem-focusableItem--- SegmentedButtonItem-selected---" onClick={[Function]} style={{...}} title={[undefined]}>
            <div className="SegmentedButtonItem-icon--- SegmentedButtonItem-withText---">
              <Icon src="add">
                <ui5-icon src="add" class="" />
              </Icon>
            </div>
            My Item
          </li>
        </SegmentedButtonItem>
      </WithStyles(SegmentedButtonItem)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `SegmentedButtonItem Icon Only`

```
<ThemeProvider withToastContainer={false} noInjectThemeProperties={false}>
  <JssProvider generateId={[Function]} jss={[undefined]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(SegmentedButtonItem) id={1} icon={{...}} visible={true} enabled={true} onClick={{...}} selected={false}>
        <SegmentedButtonItem id={1} icon={{...}} visible={true} enabled={true} onClick={{...}} selected={false} innerRef={{...}} classes={{...}} theme={{...}}>
          <li className="SegmentedButtonItem-segmentedButtonItem--- SegmentedButtonItem-iconOnly--- SegmentedButtonItem-focusableItem---" onClick={[Function]} style={{...}} title={[undefined]}>
            <div className="SegmentedButtonItem-icon---">
              <Icon src="add">
                <ui5-icon src="add" class="" />
              </Icon>
            </div>
          </li>
        </SegmentedButtonItem>
      </WithStyles(SegmentedButtonItem)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `SegmentedButtonItem Disabled`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(SegmentedButtonItem) id={1} icon={{...}} enabled={false} onClick={[Function]} visible={true} selected={false}>
        <SegmentedButtonItem id={1} icon={{...}} enabled={false} onClick={[Function]} visible={true} selected={false} innerRef={{...}} classes={{...}} theme={{...}}>
          <li className="SegmentedButtonItem-segmentedButtonItem--- SegmentedButtonItem-iconOnly--- SegmentedButtonItem-disabled---" onClick={[Function]} style={{...}} title={[undefined]}>
            <div className="SegmentedButtonItem-icon---">
              <Icon src="add">
                <ui5-icon src="add" class="" />
              </Icon>
            </div>
          </li>
        </SegmentedButtonItem>
      </WithStyles(SegmentedButtonItem)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `SegmentedButtonItem onClick`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(SegmentedButtonItem) id={1} icon={{...}} onClick={[Function]} visible={true} enabled={true} selected={false}>
        <SegmentedButtonItem id={1} icon={{...}} onClick={[Function]} visible={true} enabled={true} selected={false} innerRef={{...}} classes={{...}} theme={{...}}>
          <li className="SegmentedButtonItem-segmentedButtonItem--- SegmentedButtonItem-iconOnly--- SegmentedButtonItem-focusableItem---" onClick={[Function]} style={{...}} title={[undefined]}>
            <div className="SegmentedButtonItem-icon---">
              <Icon src="add">
                <ui5-icon src="add" class="" />
              </Icon>
            </div>
          </li>
        </SegmentedButtonItem>
      </WithStyles(SegmentedButtonItem)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

