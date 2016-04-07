import Ember from 'ember';
import { test, module } from 'qunit';
import { isNative } from 'ember-lodash-computed';
module('is-nativeComputed', {});

test('computes isNative', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isNative('testVal')
  });
  const obj = TestObject.create({
    testVal: Array.prototype.push,
  });
  assert.equal(obj.get('result'), true, 'returns true for Native function');
  obj.set('testVal', () => { });
  assert.equal(obj.get('result'), false, 'returns false for not Native function');
});
