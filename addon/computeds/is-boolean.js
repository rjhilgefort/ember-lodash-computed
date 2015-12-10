import _ from 'lodash/lodash';
import Ember from 'ember';
const { computed } = Ember;

/**
 * If one or more properties satisfy `isBoolean`
 *
 * @name isBoolean
 * @param {...String} dependentKeys Argument list of dependent keys
 * @return {Ember.ComputedProperty} computed property
 */
export default function isBoolean(...dependentKeys) {
  return computed(dependentKeys, function() {
    return _.every(this.getProperties(dependentKeys), _.isBoolean);
  });
}
