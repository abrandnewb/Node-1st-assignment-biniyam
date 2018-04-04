import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        addBlog(){
            let self = this;
            let newBlog = this.store.createRecord('blog',{
                title:this.get('title'),
                body:this.get('body'),
                date:new Date()
            });
            newBlog.save();
            self.transitionToRoute('blogs');

            
        }
    }
});
