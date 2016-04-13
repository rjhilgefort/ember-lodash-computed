import Ember from 'ember';
import { test, module } from 'qunit';
import { isNumber } from 'ember-lodash-computed';
module('is-numberComputed', {});

test('computes isNumber', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isNumber('testVal')
  });
  const obj = TestObject.create({
    testVal: 1,
  });
  assert.equal(obj.get('result'), true, 'returns true for Number');
  obj.set('testVal', '2');
  assert.equal(obj.get('result'), false, 'returns false for not Number');
});
