import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    firstName(){
        return faker.name.firstName();
    },
    lastName(){
        return faker.name.lastName();
    },
    country(){
        return faker.address.country();
    },
    photo(){
        return faker.image.avatar();
    },
    bio(){
        return faker.lorem.paragraphs(5);
    }
});
