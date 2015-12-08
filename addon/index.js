import Ember from 'ember';
import isString from './macros/is-string';

// TODO: Install
// https://github.com/cibernox/ember-cpm/blob/master/addon/index.js

if (Ember.libraries) {
  Ember.libraries.register('EmberLodashMacros');
}

export default {
  isString: isString
};
// export { isString } from './macros/is-string';
