const { Uint8Array } = window;
import Ember from 'ember';
import { test, module } from 'qunit';
import { isTypedArray } from 'ember-lodash-computed';
module('is-typed-arrayComputed', {});

test('computes isTypedArray', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isTypedArray('testVal')
  });
  const obj = TestObject.create({
    testVal: new Uint8Array(),
  });
  assert.equal(obj.get('result'), true, 'returns true for array');
  obj.set('testVal', []);
  assert.equal(obj.get('result'), false, 'returns false for not array');
});
