# Ember-link-to-example

A simple app to demo an issue when testing `{{link-to}}` helpers.

This app contains 1 initialiser which re-opens `Ember.LinkComponent` and adds a class name `foo`.

For each acceptance test that is run, the Initialisers are run.

This results in multiple class names being added:

	<a id="ember342" class="ember-view foo foo foo foo foo"></a>


Relevant files are:

* [app/initializers/links.js](app/initializers/links.js)

* [app/templates/components/x-foo.hbs](app/templates/components/x-foo.hbs)

* [tests/integration/components/x-foo-test.js](tests/integration/components/x-foo-test.js)

