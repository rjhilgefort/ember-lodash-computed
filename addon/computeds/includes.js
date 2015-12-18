const _ = window._;
// import _ from 'lodash/lodash';

import Ember from 'ember';
const { computed } = Ember;

/**
 * If one or more properties satisfy `isString`
 *
 * @name includes
 * @param {...String} dependentKeys Argument list of dependent keys
 * @return {Ember.ComputedProperty} computed property
 */
export default function includes(dependentKey, target, fromIndex) {
  return computed(dependentKey, `${dependentKey}.[]`, function() {
    return _.includes(this.get(dependentKey), target, fromIndex);
  });
}
