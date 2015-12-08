import Ember from 'ember';
// import _ from 'lodash';
const { computed } = Ember;
const _ = window._; // :(

/**
 * If one or more properties `isString`
 *
 * @name isString
 * @param {...String} dependentKeys Argument list of dependent keys
 * @return {Ember.ComputedProperty} computed property which returns ...[TODO]
 */
export default function isString(...dependentKeys) {
  return computed(dependentKeys, function() {
    return _.every(this.getProperties(dependentKeys), _.isString);
  });
}
