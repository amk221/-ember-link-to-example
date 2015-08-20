import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-link-to-example/tests/helpers/start-app';

module('Acceptance | application', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /application', function(assert) {
  visit('/application');

  andThen(function() {
    assert.equal(currentURL(), '/application');
  });
});
