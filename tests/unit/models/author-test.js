import { moduleForModel, test } from 'ember-qunit';
import { run } from '@ember/runloop';

moduleForModel('author', 'Unit | Model | author', {
  // Specify the other units that are required for this test.
  needs: []
});

test('full name concatination', function(assert) {
  const model = this.subject();
  run(function(){
    model.set('firstName', 'Biniyam');
    model.set('lastName', 'Alemayehu');
  });
  
  assert.equal(model.get('fullName'),'Biniyam Alemayehu','Concatination works perfectly.');
});

test('test object method testIncriment()',function(assert){
  const model = this.subject();
  assert.equal(model.testIncriment(),'value: 1','incriment is working');
  assert.equal(model.testIncriment(),'value: 2','incriment is working');
});