import Ember from 'ember';
import range from 'lodash/utility/range';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model(params) {
    return range(1, 11).map(function(i){
      const id = i + (params.page - 1) * 10;
      const title = `Post ${id}`;
      return { id, title };
    });
  }
});
