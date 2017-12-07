import Ember from 'ember';
import Immutable from 'immutable';


let counter = 3;

const getDefaultListItem = () => {
  counter++;
  return  Immutable.fromJS({
    name: `foo_${counter}`,
    things: [
      { name: 'something1' },
      { name: 'something2' },
      { name: 'something3' },
    ]
  });
}

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.list = Immutable.fromJS(initialList);
  },

  actions: {

    addNewListItem(){
      this.set('list', this.get('list').push(getDefaultListItem()));
    },

    deleteListItem(itemIndex){
      this.set('list', this.get('list').filter((item, index) => (index !== itemIndex)));
    },

    editThing(itemIndex, thingIndex, evt){
      const newText = evt.target.value;
      this.set('list', this.get('list').setIn([itemIndex, 'things', thingIndex, 'name'], newText));    
    }
  }
});

const initialList = [
    {
      name: 'foo_1',
      things: [
        { name: 'something1' },
        { name: 'something2' },
        { name: 'something3' },
      ]
    },
    {
      name: 'foo_2',
      things: [
        { name: 'something1' },
        { name: 'something2' },
        { name: 'something3' },
      ]
    },
    {
      name: 'foo_3',
      things: [
        { name: 'something1' },
        { name: 'something2' },
        { name: 'something3' },
      ]
    } 
  ]
