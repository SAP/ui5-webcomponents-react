# `Switch`

#### `Basic Rendering`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Switch)) textOn="On" textOff="Off" onClick={[Function: onClick]} state={false} enabled={true}>
      <WithStyles(Switch) textOn="On" textOff="Off" onClick={[Function: onClick]} state={false} enabled={true} theme={{...}} classes={{...}}>
        <Switch textOn="On" textOff="Off" onClick={[Function: onClick]} state={false} enabled={true} theme={{...}} classes={{...}}>
          <div className="Switch-switchOuter--- Switch-compact---" onClick={[Function]} style={[undefined]} title={[undefined]}>
            <div className="Switch-switch--- Switch-off---">
              <div className="Switch-innerContainer---">
                <div className="Switch-switchInner---">
                  <div className="Switch-text---">
                    <span className="Switch-label--- Switch-labelOn---" />
                  </div>
                  <div className="Switch-text--- Switch-textOff---">
                    <span className="Switch-label--- Switch-labelOff---">
                      Off
                    </span>
                  </div>
                </div>
              </div>
              <div className="Switch-handle---" />
            </div>
          </div>
        </Switch>
      </WithStyles(Switch)>
    </Jss(WithStyles(Switch))>
  </ThemeProvider>
</ThemeProvider>
```

#### `enabled prop`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Switch)) state={true} enabled={false} onClick={[Function]} textOn="On" textOff="Off">
      <WithStyles(Switch) state={true} enabled={false} onClick={[Function]} textOn="On" textOff="Off" theme={{...}} classes={{...}}>
        <Switch state={true} enabled={false} onClick={[Function]} textOn="On" textOff="Off" theme={{...}} classes={{...}}>
          <div className="Switch-switchOuter--- Switch-compact--- Switch-disabled---" onClick={[Function]} style={[undefined]} title={[undefined]}>
            <div className="Switch-switch--- Switch-on---">
              <div className="Switch-innerContainer---">
                <div className="Switch-switchInner---">
                  <div className="Switch-text---">
                    <span className="Switch-label--- Switch-labelOn---">
                      On
                    </span>
                  </div>
                  <div className="Switch-text--- Switch-textOff---">
                    <span className="Switch-label--- Switch-labelOff---" />
                  </div>
                </div>
              </div>
              <div className="Switch-handle---" />
            </div>
          </div>
        </Switch>
      </WithStyles(Switch)>
    </Jss(WithStyles(Switch))>
  </ThemeProvider>
</ThemeProvider>
```

