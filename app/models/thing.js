import DS from 'ember-data';

export default DS.Model.extend({
  listItem: DS.belongsTo('list-item'),

  name: DS.attr('string')
});
