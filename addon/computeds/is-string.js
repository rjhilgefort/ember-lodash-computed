const _ = window._;
// import _ from 'lodash/lodash';

import Ember from 'ember';
const { computed } = Ember;

/**
 * If one or more properties satisfy `isString`
 *
 * @name isString
 * @param {...String} dependentKeys Argument list of dependent keys
 * @return {Ember.ComputedProperty} computed property
 */
export default function isString(...dependentKeys) {
  return computed(dependentKeys, function() {
    return _.every(this.getProperties(dependentKeys), _.isString);
  });
}
