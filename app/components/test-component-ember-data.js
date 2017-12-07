import Ember from 'ember';
import Immutable from 'immutable';

let id = 3;

export default Ember.Component.extend({
  
  store: Ember.inject.service(),

  actions: {

    addNewListItem(){
      id++;
      this.get('store').createRecord('list-item', {
        name: `item_${id}`
      });
    },

    deleteListItem(listItem){
      listItem.deleteRecord();
    },

    editThing(thing, e){
      thing.set('name', e.target.value);
  
    }
  }
});
