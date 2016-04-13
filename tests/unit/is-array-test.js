import Ember from 'ember';
import { test, module } from 'qunit';
import { isArray } from 'ember-lodash-computed';
module('is-arrayComputed', {});

test('computes isArray', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isArray('testVal')
  });
  const obj = TestObject.create({
    testVal: [],
  });
  assert.equal(obj.get('result'), true, 'returns true for array');
  obj.set('testVal', { });
  assert.equal(obj.get('result'), false, 'returns false for not array');
});
