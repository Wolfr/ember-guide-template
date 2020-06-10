import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | section2/page2', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:section2/page2');
    assert.ok(route);
  });
});
