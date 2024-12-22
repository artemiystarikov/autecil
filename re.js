import _ from 'lodash';

const fieldDef = {
  legend: 'some legend',
  axis: 'some axis',
  header: 'some header',
  scale: 'some scale',
  otherProp: 'some other prop'
};

const updatedFieldDef = _.omit(fieldDef, ['legend', 'axis', 'header', 'scale']);

console.log(updatedFieldDef);
// Output: { otherProp: 'some other prop' }
