import _ from 'lodash';

export default (content1, content2) => {
  const iter = (text1, text2) => {
    const allKeys = _.uniq([...Object.keys(text1), ...Object.keys(text2)]);
    const result = allKeys.reduce((acc, key) => {
      if ({}.propertyIsEnumerable.call(text2, key) && {}.propertyIsEnumerable.call(text1, key)) {
        if (typeof text2[key] === 'object' && typeof text1[key] === 'object') {
          acc.push({
            result: ' ', key, value: iter(text1[key], text2[key]), finish: false,
          });
        } else if (text1[key] === text2[key]) {
          acc.push({
            result: ' ', key, value: text1[key], finish: true,
          });
        } else {
          acc.push({
            result: '-', key, value: text1[key], finish: true,
          });
          acc.push({
            result: '+', key, value: text2[key], finish: true,
          });
        }
      } else if ({}.propertyIsEnumerable.call(text1, key)) {
        acc.push({
          result: '-', key, value: text1[key], finish: true,
        });
      } else {
        acc.push({
          result: '+', key, value: text2[key], finish: true,
        });
      }
      return acc;
    }, []);
    return _.sortBy(result, ['key']);
  };
  return iter(content1, content2);
};
