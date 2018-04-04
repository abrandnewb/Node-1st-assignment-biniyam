import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        editAuthor(model){
            let self = this;

            let firstName = this.get('model.firstName');
            let lastName = this.get('model.lastName');
            let photo = this.get('model.photo');
            let bio = this.get('model.bio');

            model.set('firstName',firstName);
            model.set('lastName',lastName);
            model.set('photo',photo);
            model.set('bio',bio);

            model.save();
            self.transitionToRoute('authors');
        }
    }
});
