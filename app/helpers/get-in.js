import Ember from 'ember';

export function getIn([scope, path]) {
  return scope.getIn(path.split('.'));
}

export default Ember.Helper.helper(getIn);
