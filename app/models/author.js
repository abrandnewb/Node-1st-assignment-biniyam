import DS from 'ember-data';
//import Ember from 'ember';
import {computed} from '@ember/object';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    country: DS.attr('string'),
    photo: DS.attr('string'),
    fullName:computed('firstName','lastName',function(){
        return `${this.get('firstName')} ${this.get('lastName')}`;
    }),
    bio: DS.attr(),

    blog: DS.hasMany('blog'),

    //testing object method
    count:0,
    testIncriment(){
        this.incrementProperty('count');
        let value = this.get('count');
        return `value: ${value}`;
    }
});

