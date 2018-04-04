import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findAll('comment');
    },
    actions:{
        deleteComment(comment){
            comment.destroyRecord();
        }
    }
});
