import Ember from 'ember';
import { test, module } from 'qunit';
import { isBoolean } from 'ember-lodash-computed';
module('is-booleanComputed', {});

test('computes isBoolean', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isBoolean('testVal')
  });
  const obj = TestObject.create({
    testVal: true,
  });
  assert.equal(obj.get('result'), true, 'returns true for Boolean');
  obj.set('testVal', { });
  assert.equal(obj.get('result'), false, 'returns false for not Boolean');
});
