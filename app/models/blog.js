import DS from "ember-data";
import Ember from 'ember';

export default DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string'),
    date: DS.attr('date'),
    dateFormated:Ember.computed('date',function(){
        let month = this.get('date').getMonth()+1;//month starts from 0
        if(month < 10){
            month = `0${month}`;           
        }
            return `${this.get('date').getDate()}-${month}-${this.get('date').getFullYear()}`;
    }),

    author: DS.belongsTo('author'),
    comment: DS.hasMany('comment')
});