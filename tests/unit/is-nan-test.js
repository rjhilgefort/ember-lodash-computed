import Ember from 'ember';
import { test, module } from 'qunit';
import { isNaN } from 'ember-lodash-computed';
module('is-nanComputed', {});

test('computes isNaN', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isNaN('testVal')
  });
  const obj = TestObject.create({
    testVal: NaN,
  });
  assert.equal(obj.get('result'), true, 'returns true for NaN');
  obj.set('testVal', 2);
  assert.equal(obj.get('result'), false, 'returns false for not NaN');
});
