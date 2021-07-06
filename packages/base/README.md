# @ui5/webcomponents-react-base
Base Utilities for ui5-webcomponents-react

## Installation
```
yarn add @ui5/webcomponents-react-base
OR
npm install @ui5/webcomponents-react-base --save
```

## Modules

### StyleClassHelper
Concat multiple CSS Module into an instance of this class helper and place them into a react component.<br>
Example:
```javascript
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import style from 'YOUR_STYLESHEET';

const classes = new StyleClassHelper.of(style.text);
classes.put(style.anotherClass);
classes.put(style.thirdClass)

const MyComponent = props => (
  <div className={classes}>
    My Component
  </div>
);

export default MyComponent;

```

## Contribute
Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents-react/blob/master/CONTRIBUTING.md).

## License
Please see our [LICENSE](https://github.com/SAP/ui5-webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-react).
