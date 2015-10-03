import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('computed', 'Integration | Component | computed', {
  integration: true
});


test('computed are re-evaluted correctly on glimmer hooks', function(assert) {
  assert.expect(4);

  this.registry.register('component:x-foo', Ember.Component.extend({
    layout: hbs`{{ids}}`,
    opposite: Ember.computed('value', {
      get(){
        return !this.get('value');
      }
    }),
    didReceiveAttrs() {
      assert.equal(this.get('opposite'), !this.get('value'),
        "computed and manual are equal in didReceiveAttrs");
    },
    didRender() {
      assert.equal(this.get('opposite'), !this.get('value'),
        "computed and manual are equal in didRender");
    }
  }));

  this.set('value', true);
  this.render(hbs`{{x-foo value=value}}`);
  this.set('value', false);
});

test('computed.mapBy is re-evaluted correctly on glimmer hooks', function(assert) {
  assert.expect(4);

  this.registry.register('component:x-foo', Ember.Component.extend({
    layout: hbs`{{ids}}`,
    ids: Ember.computed.mapBy('posts', 'id'),
    didReceiveAttrs() {
      assert.deepEqual(this.get('ids'), this.get('posts').mapBy('id'),
        "computed and manual are equal in didReceiveAttrs");
    },
    didRender() {
      assert.deepEqual(this.get('ids'), this.get('posts').mapBy('id'),
        "computed and manual are equal in didRender");
    }
  }));

  this.set('posts', [{id: 'foo'}, {id: 'bar'}]);
  this.render(hbs`{{x-foo posts=posts}}`);
  this.set('posts', [{id: 'baz'}, {id: 'zoo'}]);
});
