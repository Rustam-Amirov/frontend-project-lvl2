import _ from 'lodash';
import getStringObject from './getStringObject.js';

export default (text1, text2) => {
  const allKeys = _.uniq([...Object.keys(text1), ...Object.keys(text2)]);
  const result = allKeys.reduce((acc, key) => {
    if ({}.propertyIsEnumerable.call(text2, key) && {}.propertyIsEnumerable.call(text1, key)) {
      if (text1[key] === text2[key]) {
        acc.push({ result: ' ', key, value: text1[key] });
      } else {
        acc.push({ result: '-', key, value: text1[key] });
        acc.push({ result: '+', key, value: text2[key] });
      }
    } else if ({}.propertyIsEnumerable.call(text1, key)) {
      acc.push({ result: '-', key, value: text1[key] });
    } else {
      acc.push({ result: '+', key, value: text2[key] });
    }
    return acc;
  }, []);
  const sortedResult = _.sortBy(result, ['key']);
  return getStringObject(sortedResult);
};
