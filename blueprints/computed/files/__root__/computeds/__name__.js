import Ember from 'ember';
const { computed } = Ember;

/**
 * Description [TODO]
 *
 * @name <%= camelizedModuleName %>
 * @param {...String} dependentKeys Argument list of dependent keys
 * @return {Ember.ComputedProperty} computed property
 */
export default function <%= camelizedModuleName %>(...dependentKeys) {
  return computed(dependentKeys, function() {
    return this.getProperties(dependentKeys);
  });
}
