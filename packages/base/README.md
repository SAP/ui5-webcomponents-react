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
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
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
Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, Version 2.0 except as noted otherwise in the [LICENSE](https://github.com/SAP/ui5-webcomponents-react/blob/master/LICENSE) file.
