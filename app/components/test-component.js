import Ember from 'ember';
import Immutable from 'immutable';


let counter = 3;

const getDefaultListItem = () => {
  counter++;
  return  {
    name: `foo_${counter}`,
    things: [
      { name: 'something1' },
      { name: 'something2' },
      { name: 'something3' },
    ]
  }
}

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.list = initialList;
  },

  actions: {

    addNewListItem(){
      this.set('list', this.get('list').concat(getDefaultListItem()));
    },
    deleteListItem(itemIndex){
      this.set('list', this.get('list').filter((item, index) => (index !== itemIndex)));

    },
    editThing(itemIndex, thingIndex, e){
      const newText = e.target.value;
      const newList = this.get('list').map((item, currItemIndex) => {
        if (currItemIndex === itemIndex) {
          const newThings = item.things.map((thing, currThingIndex) => {
            if (currThingIndex === thingIndex){
              return Object.assign({}, thing, { name: newText });
            }
            return thing;
          });
          return Object.assign({}, item, { things: newThings });
        }
        return item;
      });  

      this.set('list', newList);     
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
