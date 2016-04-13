import Ember from 'ember';
import { test, module } from 'qunit';
import { isUndefined } from 'ember-lodash-computed';
module('is-undefinedComputed', {});

test('computes isUndefined', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isUndefined('testVal')
  });
  const obj = TestObject.create({
    testVal: undefined,
  });
  assert.equal(obj.get('result'), true, 'returns true for Undefined');
  obj.set('testVal', { });
  assert.equal(obj.get('result'), false, 'returns false for not Undefined');
});
