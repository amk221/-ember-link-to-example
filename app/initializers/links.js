import Ember from 'ember';

export function initialize() {
  Ember.LinkComponent.reopen({
    classNames: ['foo']
  });
}

export default {
  name: 'links',
  initialize: initialize
};
