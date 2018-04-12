import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('examples/edit-example', 'Integration | Component | examples/edit example', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{examples/edit-example}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#examples/edit-example}}
      template block text
    {{/examples/edit-example}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
