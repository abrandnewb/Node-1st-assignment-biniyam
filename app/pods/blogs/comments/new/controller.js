import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        addComment(){
            let newComment = this.store.createRecord('comment',{
                date:new Date(),
                body:this.get('body')
            });
            newComment.save();
        }
    }
});
