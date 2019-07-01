# `MessageStrip`

#### `Basic Test (generated)`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]} id={{...}}>
    <ThemeProvider theme={{...}}>
      <MessageStrip type="Information">
        <ui5-messagestrip type="Information" class="" />
      </MessageStrip>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Dismissible`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageStrip)) dismissible={true} showIcon={true} valueState="None" state={true}>
      <WithStyles(MessageStrip) dismissible={true} showIcon={true} valueState="None" state={true} theme={{...}} classes={{...}}>
        <MessageStrip dismissible={true} showIcon={true} valueState="None" state={true} theme={{...}} classes={{...}}>
          <div className="MessageStrip-messageStrip--- MessageStrip-stateNone--- MessageStrip-textAndIcon---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="MessageStrip-icon---">
              <Icon src="message-information">
                <WithWebComponent theme={{...}} src="message-information">
                  <ui5-icon src="message-information" class="sapUiSizeCompact" />
                </WithWebComponent>
              </Icon>
            </div>
            <div className="MessageStrip-text---">
              Fiori Message Strip
            </div>
            <div className="MessageStrip-closeButton---" onClick={[Function]}>
              <Icon src="decline">
                <WithWebComponent theme={{...}} src="decline">
                  <ui5-icon src="decline" class="sapUiSizeCompact" />
                </WithWebComponent>
              </Icon>
            </div>
          </div>
        </MessageStrip>
      </WithStyles(MessageStrip)>
    </Jss(WithStyles(MessageStrip))>
  </ThemeProvider>
</ThemeProvider>
```

#### `MessageStrip with state Error`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageStrip)) showIcon={true} valueState="Error" dismissible={false} state={true}>
      <WithStyles(MessageStrip) showIcon={true} valueState="Error" dismissible={false} state={true} theme={{...}} classes={{...}}>
        <MessageStrip showIcon={true} valueState="Error" dismissible={false} state={true} theme={{...}} classes={{...}}>
          <div className="MessageStrip-messageStrip--- MessageStrip-stateError--- MessageStrip-textAndIcon---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="MessageStrip-icon---">
              <Icon src="message-error">
                <WithWebComponent theme={{...}} src="message-error">
                  <ui5-icon src="message-error" class="sapUiSizeCompact" />
                </WithWebComponent>
              </Icon>
            </div>
            <div className="MessageStrip-text---">
              Fiori Message Strip
            </div>
          </div>
        </MessageStrip>
      </WithStyles(MessageStrip)>
    </Jss(WithStyles(MessageStrip))>
  </ThemeProvider>
</ThemeProvider>
```

#### `MessageStrip with state None`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageStrip)) showIcon={true} valueState="None" dismissible={false} state={true}>
      <WithStyles(MessageStrip) showIcon={true} valueState="None" dismissible={false} state={true} theme={{...}} classes={{...}}>
        <MessageStrip showIcon={true} valueState="None" dismissible={false} state={true} theme={{...}} classes={{...}}>
          <div className="MessageStrip-messageStrip--- MessageStrip-stateNone--- MessageStrip-textAndIcon---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="MessageStrip-icon---">
              <Icon src="message-information">
                <WithWebComponent theme={{...}} src="message-information">
                  <ui5-icon src="message-information" class="sapUiSizeCompact" />
                </WithWebComponent>
              </Icon>
            </div>
            <div className="MessageStrip-text---">
              Fiori Message Strip
            </div>
          </div>
        </MessageStrip>
      </WithStyles(MessageStrip)>
    </Jss(WithStyles(MessageStrip))>
  </ThemeProvider>
</ThemeProvider>
```

#### `MessageStrip with state Success`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageStrip)) showIcon={true} valueState="Success" dismissible={false} state={true}>
      <WithStyles(MessageStrip) showIcon={true} valueState="Success" dismissible={false} state={true} theme={{...}} classes={{...}}>
        <MessageStrip showIcon={true} valueState="Success" dismissible={false} state={true} theme={{...}} classes={{...}}>
          <div className="MessageStrip-messageStrip--- MessageStrip-stateSuccess--- MessageStrip-textAndIcon---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="MessageStrip-icon---">
              <Icon src="message-success">
                <WithWebComponent theme={{...}} src="message-success">
                  <ui5-icon src="message-success" class="sapUiSizeCompact" />
                </WithWebComponent>
              </Icon>
            </div>
            <div className="MessageStrip-text---">
              Fiori Message Strip
            </div>
          </div>
        </MessageStrip>
      </WithStyles(MessageStrip)>
    </Jss(WithStyles(MessageStrip))>
  </ThemeProvider>
</ThemeProvider>
```

#### `MessageStrip with state Warning`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageStrip)) showIcon={true} valueState="Warning" dismissible={false} state={true}>
      <WithStyles(MessageStrip) showIcon={true} valueState="Warning" dismissible={false} state={true} theme={{...}} classes={{...}}>
        <MessageStrip showIcon={true} valueState="Warning" dismissible={false} state={true} theme={{...}} classes={{...}}>
          <div className="MessageStrip-messageStrip--- MessageStrip-stateWarning--- MessageStrip-textAndIcon---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="MessageStrip-icon---">
              <Icon src="message-warning">
                <WithWebComponent theme={{...}} src="message-warning">
                  <ui5-icon src="message-warning" class="sapUiSizeCompact" />
                </WithWebComponent>
              </Icon>
            </div>
            <div className="MessageStrip-text---">
              Fiori Message Strip
            </div>
          </div>
        </MessageStrip>
      </WithStyles(MessageStrip)>
    </Jss(WithStyles(MessageStrip))>
  </ThemeProvider>
</ThemeProvider>
```

#### `MessageStrip with state Information`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageStrip)) showIcon={true} valueState="Information" dismissible={false} state={true}>
      <WithStyles(MessageStrip) showIcon={true} valueState="Information" dismissible={false} state={true} theme={{...}} classes={{...}}>
        <MessageStrip showIcon={true} valueState="Information" dismissible={false} state={true} theme={{...}} classes={{...}}>
          <div className="MessageStrip-messageStrip--- MessageStrip-stateInformation--- MessageStrip-textAndIcon---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="MessageStrip-icon---">
              <Icon src="hint">
                <WithWebComponent theme={{...}} src="hint">
                  <ui5-icon src="hint" class="sapUiSizeCompact" />
                </WithWebComponent>
              </Icon>
            </div>
            <div className="MessageStrip-text---">
              Fiori Message Strip
            </div>
          </div>
        </MessageStrip>
      </WithStyles(MessageStrip)>
    </Jss(WithStyles(MessageStrip))>
  </ThemeProvider>
</ThemeProvider>
```

