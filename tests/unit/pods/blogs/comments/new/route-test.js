import { moduleFor, test } from 'ember-qunit';

moduleFor('route:blogs/comments/new', 'Unit | Route | blogs/comments/new', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
