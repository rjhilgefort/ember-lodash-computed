import Ember from 'ember';
import { test, module } from 'qunit';
import { includes } from 'ember-lodash-computed';

module('includesComputed', {});

test('computes includes', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: includes('dependentKey', 1)
  });
  const obj = TestObject.create({
    dependentKey: [1, 2, 3],
  });
  assert.equal(obj.get('result'), true, 'returns true for includes');
  obj.set('dependentKey', [2, 3]);
  assert.equal(obj.get('result'), false, 'returns false for doesn\'t include');
});
