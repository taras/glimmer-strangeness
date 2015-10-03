import Ember from 'ember';

export default Ember.Component.extend({
  ids: Ember.computed.mapBy('posts', 'id'),
  didReceiveAttrs() {
    this.set('_ids', (this.get('posts') || []).mapBy('id'));
  }
});
