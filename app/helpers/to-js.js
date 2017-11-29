import Ember from 'ember';

export function toJS([scope]) {
  return JSON.stringify(scope.toJS(), null, 4);
}

export default Ember.Helper.helper(toJS);
