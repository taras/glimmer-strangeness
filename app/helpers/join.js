import Ember from 'ember';

export function join(params/*, hash*/) {
  const [array, joiner] = params;
  return array.join(joiner);
}

export default Ember.Helper.helper(join);
