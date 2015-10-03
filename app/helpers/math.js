import Ember from 'ember';

export function math(params/*, hash*/) {
  const [operand1, operator, operand2] = params;
  switch (operator) {
    case '+':
    return operand1 + operand2;
    case '-':
    return operand1 - operand2;
    case '*':
    return operand1 * operand2;
    case '/':
    return operand1 / operand2;
  }
}

export default Ember.Helper.helper(math);
