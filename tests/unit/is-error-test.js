import Ember from 'ember';
import { test, module } from 'qunit';
import { isError } from 'ember-lodash-computed';
module('is-errorComputed', {});

test('computes isError', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isError('testVal')
  });
  const obj = TestObject.create({
    testVal: new Error(),
  });
  assert.equal(obj.get('result'), true, 'returns true for Error');
  obj.set('testVal', { });
  assert.equal(obj.get('result'), false, 'returns false for not Error');
});
