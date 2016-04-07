import Ember from 'ember';
import { test, module } from 'qunit';
import { isFunction } from 'ember-lodash-computed';
module('is-functionComputed', {});

test('computes isFunction', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isFunction('testVal')
  });
  const obj = TestObject.create({
    testVal: () => { },
  });
  assert.equal(obj.get('result'), true, 'returns true for Function');
  obj.set('testVal', { });
  assert.equal(obj.get('result'), false, 'returns false for not Function');
});
