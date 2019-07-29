# `MessageBox`

#### `Confirm - OK`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(MessageBox) type="Confirm" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}}>
        <MessageBox type="Confirm" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} innerRef={{...}} classes={{...}} theme={{...}}>
          <div className="MessageBox-overlay---" slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Confirm">
                <div className="MessageBox-icon---">
                  <Icon src="question-mark">
                    <ui5-icon src="question-mark" class="" />
                  </Icon>
                </div>
                <Title level="H5">
                  <ui5-title level="H5" class="">
                    Confirmation
                  </ui5-title>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Text renderWhitespace={false} wrapping={true} width={{...}}>
                  <span style={{...}} className="Text--text---" title={[undefined]} slot={[undefined]}>
                    Confirm - OK
                  </span>
                </Text>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onClick={[Function]} design="Emphasized">
                    <ui5-button style={{...}} design="Emphasized" class="">
                      OK
                    </ui5-button>
                  </Button>
                </MessageBoxButton>
                <MessageBoxButton emphasize={false} onClick={[Function]} action="Cancel">
                  <Button style={{...}} onClick={[Function]} design="Transparent">
                    <ui5-button style={{...}} design="Transparent" class="">
                      Cancel
                    </ui5-button>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Confirm - Cancel`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(MessageBox) type="Confirm" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}}>
        <MessageBox type="Confirm" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} innerRef={{...}} classes={{...}} theme={{...}}>
          <div className="MessageBox-overlay---" slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Confirm">
                <div className="MessageBox-icon---">
                  <Icon src="question-mark">
                    <ui5-icon src="question-mark" class="" />
                  </Icon>
                </div>
                <Title level="H5">
                  <ui5-title level="H5" class="">
                    Confirmation
                  </ui5-title>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Text renderWhitespace={false} wrapping={true} width={{...}}>
                  <span style={{...}} className="Text--text---" title={[undefined]} slot={[undefined]}>
                    Confirm - Cancel
                  </span>
                </Text>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onClick={[Function]} design="Emphasized">
                    <ui5-button style={{...}} design="Emphasized" class="">
                      OK
                    </ui5-button>
                  </Button>
                </MessageBoxButton>
                <MessageBoxButton emphasize={false} onClick={[Function]} action="Cancel">
                  <Button style={{...}} onClick={[Function]} design="Transparent">
                    <ui5-button style={{...}} design="Transparent" class="">
                      Cancel
                    </ui5-button>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Success`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(MessageBox) type="Success" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}}>
        <MessageBox type="Success" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} innerRef={{...}} classes={{...}} theme={{...}}>
          <div className="MessageBox-overlay---" slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Success">
                <div className="MessageBox-icon---">
                  <Icon src="message-success">
                    <ui5-icon src="message-success" class="" />
                  </Icon>
                </div>
                <Title level="H5">
                  <ui5-title level="H5" class="">
                    Success
                  </ui5-title>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Text renderWhitespace={false} wrapping={true} width={{...}}>
                  <span style={{...}} className="Text--text---" title={[undefined]} slot={[undefined]}>
                    Success
                  </span>
                </Text>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onClick={[Function]} design="Emphasized">
                    <ui5-button style={{...}} design="Emphasized" class="">
                      OK
                    </ui5-button>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Warning`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(MessageBox) type="Warning" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}}>
        <MessageBox type="Warning" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} innerRef={{...}} classes={{...}} theme={{...}}>
          <div className="MessageBox-overlay---" slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Warning">
                <div className="MessageBox-icon---">
                  <Icon src="message-warning">
                    <ui5-icon src="message-warning" class="" />
                  </Icon>
                </div>
                <Title level="H5">
                  <ui5-title level="H5" class="">
                    Warning
                  </ui5-title>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Text renderWhitespace={false} wrapping={true} width={{...}}>
                  <span style={{...}} className="Text--text---" title={[undefined]} slot={[undefined]}>
                    Warning
                  </span>
                </Text>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onClick={[Function]} design="Emphasized">
                    <ui5-button style={{...}} design="Emphasized" class="">
                      OK
                    </ui5-button>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Error`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(MessageBox) type="Error" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}}>
        <MessageBox type="Error" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} innerRef={{...}} classes={{...}} theme={{...}}>
          <div className="MessageBox-overlay---" slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Error">
                <div className="MessageBox-icon---">
                  <Icon src="message-error">
                    <ui5-icon src="message-error" class="" />
                  </Icon>
                </div>
                <Title level="H5">
                  <ui5-title level="H5" class="">
                    Error
                  </ui5-title>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Text renderWhitespace={false} wrapping={true} width={{...}}>
                  <span style={{...}} className="Text--text---" title={[undefined]} slot={[undefined]}>
                    Error
                  </span>
                </Text>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="Close">
                  <Button style={{...}} onClick={[Function]} design="Emphasized">
                    <ui5-button style={{...}} design="Emphasized" class="">
                      Close
                    </ui5-button>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Information`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(MessageBox) type="Information" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}}>
        <MessageBox type="Information" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} innerRef={{...}} classes={{...}} theme={{...}}>
          <div className="MessageBox-overlay---" slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Information">
                <div className="MessageBox-icon---">
                  <Icon src="message-information">
                    <ui5-icon src="message-information" class="" />
                  </Icon>
                </div>
                <Title level="H5">
                  <ui5-title level="H5" class="">
                    Information
                  </ui5-title>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Text renderWhitespace={false} wrapping={true} width={{...}}>
                  <span style={{...}} className="Text--text---" title={[undefined]} slot={[undefined]}>
                    Information
                  </span>
                </Text>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onClick={[Function]} design="Emphasized">
                    <ui5-button style={{...}} design="Emphasized" class="">
                      OK
                    </ui5-button>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Show`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(MessageBox) visible={true} onClose={[Function]} title="Custom" actions={{...}} icon={{...}} type="Confirm">
        <MessageBox visible={true} onClose={[Function]} title="Custom" actions={{...}} icon={{...}} type="Confirm" innerRef={{...}} classes={{...}} theme={{...}}>
          <div className="MessageBox-overlay---" slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Confirm">
                <div className="MessageBox-icon---">
                  <Icon src="question-mark">
                    <ui5-icon src="question-mark" class="" />
                  </Icon>
                </div>
                <Title level="H5">
                  <ui5-title level="H5" class="">
                    Custom
                  </ui5-title>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Text renderWhitespace={false} wrapping={true} width={{...}}>
                  <span style={{...}} className="Text--text---" title={[undefined]} slot={[undefined]}>
                    Custom
                  </span>
                </Text>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="Yes">
                  <Button style={{...}} onClick={[Function]} design="Emphasized">
                    <ui5-button style={{...}} design="Emphasized" class="">
                      Yes
                    </ui5-button>
                  </Button>
                </MessageBoxButton>
                <MessageBoxButton emphasize={false} onClick={[Function]} action="No">
                  <Button style={{...}} onClick={[Function]} design="Transparent">
                    <ui5-button style={{...}} design="Transparent" class="">
                      No
                    </ui5-button>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Success w/ custom title`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(MessageBox) type="Success" visible={true} onClose={[Function]} title="Custom Success" icon={{...}} actions={{...}}>
        <MessageBox type="Success" visible={true} onClose={[Function]} title="Custom Success" icon={{...}} actions={{...}} innerRef={{...}} classes={{...}} theme={{...}}>
          <div className="MessageBox-overlay---" slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Success">
                <div className="MessageBox-icon---">
                  <Icon src="message-success">
                    <ui5-icon src="message-success" class="" />
                  </Icon>
                </div>
                <Title level="H5">
                  <ui5-title level="H5" class="">
                    Custom Success
                  </ui5-title>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Text renderWhitespace={false} wrapping={true} width={{...}}>
                  <span style={{...}} className="Text--text---" title={[undefined]} slot={[undefined]}>
                    Custom Success
                  </span>
                </Text>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onClick={[Function]} design="Emphasized">
                    <ui5-button style={{...}} design="Emphasized" class="">
                      OK
                    </ui5-button>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Not visible`

```
"<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(MessageBox) type=\"Success\" visible={false} onClose={[Function]} title=\"Custom Success\" icon={{...}} actions={{...}}>
        <MessageBox type=\"Success\" visible={false} onClose={[Function]} title=\"Custom Success\" icon={{...}} actions={{...}} innerRef={{...}} classes={{...}} theme={{...}} />
      </WithStyles(MessageBox)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>"
```

#### `No Title`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]}>
    <ThemeProvider theme={{...}}>
      <WithStyles(MessageBox) visible={true} onClose={[Function]} title={{...}} icon={{...}} type="Confirm" actions={{...}}>
        <MessageBox visible={true} onClose={[Function]} title={{...}} icon={{...}} type="Confirm" actions={{...}} innerRef={{...}} classes={{...}} theme={{...}}>
          <div className="MessageBox-overlay---" slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Confirm">
                <div className="MessageBox-icon---">
                  <Icon src="question-mark">
                    <ui5-icon src="question-mark" class="" />
                  </Icon>
                </div>
                <Title level="H5">
                  <ui5-title level="H5" class="">
                    Confirmation
                  </ui5-title>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Text renderWhitespace={false} wrapping={true} width={{...}}>
                  <span style={{...}} className="Text--text---" title={[undefined]} slot={[undefined]}>
                    No Title
                  </span>
                </Text>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onClick={[Function]} design="Emphasized">
                    <ui5-button style={{...}} design="Emphasized" class="">
                      OK
                    </ui5-button>
                  </Button>
                </MessageBoxButton>
                <MessageBoxButton emphasize={false} onClick={[Function]} action="Cancel">
                  <Button style={{...}} onClick={[Function]} design="Transparent">
                    <ui5-button style={{...}} design="Transparent" class="">
                      Cancel
                    </ui5-button>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

