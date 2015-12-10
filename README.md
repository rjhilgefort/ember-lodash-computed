# ember-lodash-computed

#### Computed macros for lodash `is` methods

## Installation

```shell
# ember-cli > 0.2.3
ember install ember-lodash-computed
# ember-cli <= 0.2.3
ember install:addon ember-lodash-computed
```

## Usage

```javascript
import Ember from 'ember';
import { isString } from 'ember-lodash-computed';

export default Ember.Object.create({
  foo: "foo",
  isFooString: isString('foo') // true
});
```

## Implemented Computed Methods

- `isArguments`
- `isArray`
- `isBoolean`
- `isDate`
- `isElement`
- `isEmpty`
- `isFunction`
- `isNaN`
- `isNative`
- `isNull`
- `isNumber`
- `isObject`
- `isPlainObject`
- `isRegExp`
- `isString`
- `isTypedArray`
- `isUndefined`
