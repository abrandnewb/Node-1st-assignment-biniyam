import { test } from 'qunit';
import moduleForAcceptance from 'ember-node-mission/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | authors');

test('visiting /authors', function(assert) {
  visit('/authors');

  andThen(function() {
    assert.equal(currentURL(), '/authors');
    assert.equal(find('ul.testing-lists li').length,5);
    assert.equal(find('.testing-lists li:first').text(),'one');
    assert.equal(find('.testing-lists li:last').text(),'five');
  });
});
test('redirect after creating a new author',function(assert){
  visit('/authors/new');
  click('.add-author');
  andThen(function(){
      assert.equal(currentURL(),'/authors');
  });
  });