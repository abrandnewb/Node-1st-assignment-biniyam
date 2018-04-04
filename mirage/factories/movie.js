import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    name() {
        return faker.company.catchPhrase();
    },
    length() {
        return faker.random.number({min: 120, max: 280});
    },
    director() {
        return `${faker.name.firstName()} ${faker.name.lastName()}`;
    },
    dateOfRelease() {
        return faker.date.past();
    },
    childFriendly() {
        return faker.random.boolean();
    },
    image() {
        return faker.image.image(150, 150);
    }
});
