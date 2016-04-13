# Ember-lodash-computed

[![npm version](https://badge.fury.io/js/ember-lodash-computed.svg)](https://badge.fury.io/js/ember-lodash-computed) [![Build Status](https://travis-ci.org/rjhilgefort/ember-lodash-computed.svg?branch=master)](https://travis-ci.org/rjhilgefort/ember-lodash-computed) [![Ember Observer Score](https://emberobserver.com/badges/ember-lodash-computed.svg)](https://emberobserver.com/addons/ember-lodash-computed)
#### Computed macros for lodash `is` methods. As well as blueprint for generating computed properties in your own ember project.

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

- `includes`
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

## Blueprints

There are also blueprints added as part of this repo. You can generate custom computed methods by doing the following. The command will generate the custom computed.

```shell
ember generate computed foo
```

After implementing the computed generated at `app/computeds/foo.js`, you can then use it in your project like so:

```javascript
import Ember from 'ember';
import { foo } from 'app/computeds/foo';

export default Ember.Object.create({
  bar: "bar",
  barComputed: foo('bar')
});
```
