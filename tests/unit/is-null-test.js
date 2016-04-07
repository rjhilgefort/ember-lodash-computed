import Ember from 'ember';
import { test, module } from 'qunit';
import { isNull } from 'ember-lodash-computed';
module('is-nullComputed', {});

test('computes isNull', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isNull('testVal')
  });
  const obj = TestObject.create({
    testVal: null,
  });
  assert.equal(obj.get('result'), true, 'returns true for Null');
  obj.set('testVal', { });
  assert.equal(obj.get('result'), false, 'returns false for not Null');
});
