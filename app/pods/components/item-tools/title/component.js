import Ember from 'ember';

const {
   Component
} = Ember;

const ComponentClass = Component.extend({
  classNameBindings: ['type']
});

ComponentClass.reopenClass({
  positionalParams: ['title', 'icon']
})

export default ComponentClass;