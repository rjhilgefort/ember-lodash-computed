import Ember from 'ember';
import { test, module } from 'qunit';
import { isPlainObject } from 'ember-lodash-computed';
module('is-plain-objectComputed', {});

test('computes isPlainObject', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isPlainObject('testVal')
  });
  const obj = TestObject.create({
    testVal: { },
  });
  assert.equal(obj.get('result'), true, 'returns true for Plain Object');
  obj.set('testVal', () => { });
  assert.equal(obj.get('result'), false, 'returns false for not Plain Object');
});
