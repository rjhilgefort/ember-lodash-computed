import Ember from 'ember';
import { test, module } from 'qunit';
import { isString } from 'ember-lodash-computed';
module('is-stringComputed', {});

test('computes isString', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isString('testVal')
  });
  const obj = TestObject.create({
    testVal: '1',
  });
  assert.equal(obj.get('result'), true, 'returns true for String');
  obj.set('testVal', 1);
  assert.equal(obj.get('result'), false, 'returns false for not String');
});
