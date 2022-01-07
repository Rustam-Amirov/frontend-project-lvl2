import _ from 'lodash';

const getLine = (result, key, value, finish, newValue = undefined, dismiss = false) => ({
  result, key, value, finish, newValue, dismiss,
});

export default (content1, content2) => {
  const iter = (text1, text2) => {
    const allKeys = _.uniq([...Object.keys(text1), ...Object.keys(text2)]);
    const result = allKeys.reduce((acc, key) => {
      if ({}.propertyIsEnumerable.call(text2, key) && {}.propertyIsEnumerable.call(text1, key)) {
        if (typeof text2[key] === 'object' && typeof text1[key] === 'object') {
          acc.push(getLine(' ', key, iter(text1[key], text2[key]), false));
        } else if (text1[key] === text2[key]) {
          acc.push(getLine(' ', key, text1[key], true));
        } else {
          acc.push(getLine('-', key, text1[key], true, text2[key]));
          acc.push(getLine('+', key, text2[key], true, text1[key], true));
        }
      } else if ({}.propertyIsEnumerable.call(text1, key)) {
        acc.push(getLine('-', key, text1[key], true));
      } else {
        acc.push(getLine('+', key, text2[key], true));
      }
      return acc;
    }, []);
    return _.sortBy(result, ['key']);
  };
  return iter(content1, content2);
};
