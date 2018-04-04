import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        addAuthor(){
            let self = this;
            let newAuthor = this.store.createRecord('author',{
                firstName:this.get('firstName'),
                lastName: this.get('lastName'),
                photo: this.get('photo'),
                bio:this.get('bio')
            });
            newAuthor.save();
            self.transitionToRoute('authors');
        }
    }
});

