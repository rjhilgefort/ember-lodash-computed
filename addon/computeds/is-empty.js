const _ = window._;
import Ember from 'ember';
const { computed } = Ember;

/**
 * If one or more properties satisfy `isEmpty`
 *
 * @name isEmpty
 * @param {...String} dependentKeys Argument list of dependent keys
 * @return {Ember.ComputedProperty} computed property
 */
export default function isEmpty(...dependentKeys) {
  return computed(dependentKeys, function() {
    return _.every(this.getProperties(dependentKeys), _.isEmpty);
  });
}
