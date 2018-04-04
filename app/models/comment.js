import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr(),
    body: DS.attr(),

    blog: DS.belongsTo('blog')
});