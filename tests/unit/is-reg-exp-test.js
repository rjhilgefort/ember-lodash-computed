import Ember from 'ember';
import { test, module } from 'qunit';
import { isRegExp } from 'ember-lodash-computed';
module('is-reg-expComputed', {});

test('computes isRegExp', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isRegExp('testVal')
  });
  const obj = TestObject.create({
    testVal: /test/,
  });
  assert.equal(obj.get('result'), true, 'returns true for Reg Exp');
  obj.set('testVal', { });
  assert.equal(obj.get('result'), false, 'returns false for not Reg Exp');
});
