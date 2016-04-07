import Ember from 'ember';
import { test, module } from 'qunit';
import { isArguments } from 'ember-lodash-computed';
module('is-argumentsComputed', {});

test('computes isArguments', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isArguments('testVal')
  });
  const args = function() { return arguments; }();
  const obj = TestObject.create({
    testVal: args,
  });
  assert.equal(obj.get('result'), true, 'returns true for arguments');
  obj.set('testVal', [2, 3]);
  assert.equal(obj.get('result'), false, 'returns false for not arguments');
});
