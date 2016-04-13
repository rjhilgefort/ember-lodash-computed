import Ember from 'ember';
import { test, module } from 'qunit';
import { isDate } from 'ember-lodash-computed';
module('is-dateComputed', {});

test('computes isDate', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isDate('testVal')
  });
  const obj = TestObject.create({
    testVal: new Date(),
  });
  assert.equal(obj.get('result'), true, 'returns true for Date');
  obj.set('testVal', { });
  assert.equal(obj.get('result'), false, 'returns false for not Date');
});
