import Ember from 'ember';
import { test, module } from 'qunit';
import { isElement } from 'ember-lodash-computed';
module('is-elementComputed', {});

test('computes isElement', (assert) => {
  assert.expect(2);
  const TestObject = Ember.Object.extend({
    result: isElement('testVal')
  });
  const Element = function () {
        this.nodeType = 1;
  };
  const obj = TestObject.create({
    testVal: new Element(),
  });
  assert.equal(obj.get('result'), true, 'returns true for Element');
  obj.set('testVal', { });
  assert.equal(obj.get('result'), false, 'returns false for not Element');
});
