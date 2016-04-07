import Ember from 'ember';
import { test, module } from 'qunit';
import { isObject } from 'ember-lodash-computed';
module('is-objectComputed', {});

test('computes isObject', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isObject('testVal')
  });
  const obj = TestObject.create({
    testVal: { },
  });
  assert.equal(obj.get('result'), true, 'returns true for Object');
  obj.set('testVal', 1);
  assert.equal(obj.get('result'), false, 'returns false for not Object');
});
