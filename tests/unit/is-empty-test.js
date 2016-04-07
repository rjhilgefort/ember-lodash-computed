import Ember from 'ember';
import { test, module } from 'qunit';
import { isEmpty } from 'ember-lodash-computed';
module('is-emptyComputed', {});

test('computes isEmpty', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isEmpty('testVal')
  });
  const obj = TestObject.create({
    testVal: { },
  });
  assert.equal(obj.get('result'), true, 'returns true for Empty');
  obj.set('testVal', [1, 2]);
  assert.equal(obj.get('result'), false, 'returns false for not Empty');
});
