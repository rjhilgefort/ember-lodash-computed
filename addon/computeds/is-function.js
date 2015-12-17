const _ = window._;
// import _ from 'lodash/lodash';

import Ember from 'ember';
const { computed } = Ember;

/**
 * If one or more properties satisfy `isFunction`
 *
 * @name isFunction
 * @param {...String} dependentKeys Argument list of dependent keys
 * @return {Ember.ComputedProperty} computed property
 */
export default function isFunction(...dependentKeys) {
  return computed(dependentKeys, function() {
    return _.every(this.getProperties(dependentKeys), _.isFunction);
  });
}
