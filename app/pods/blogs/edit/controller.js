import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        editBlog(model){
            let self = this;
            let title = this.get('model.title');
            let body = this.get('model.body');

            model.set('title',title);
            model.set('body',body);

            model.save();
            self.transitionToRoute('blogs');
        }
    }
});
