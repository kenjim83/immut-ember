import Ember from 'ember';

export function toJSON([model]) {
  return model.serialize();
}

export default Ember.Helper.helper(toJSON);
