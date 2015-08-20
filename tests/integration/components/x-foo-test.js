import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-foo', 'Integration | Component | x foo', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  this.render(hbs`{{x-foo}}`);

  console.log(this.$().html());
});
