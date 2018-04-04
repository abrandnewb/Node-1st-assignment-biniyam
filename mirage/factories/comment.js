import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    date(){
        return faker.date.past();
    },
    body(){
        return faker.lorem.paragraph();
    }
});
