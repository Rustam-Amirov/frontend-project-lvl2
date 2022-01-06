import _ from 'lodash';

const stringify = (val, deep) => {
  const replacer = ' ';
  const iter = (value, depth) => {
    if ((typeof value) === 'object' && value !== null) {
      const allKeys = Object.keys(value);
      const result = allKeys.reduce((acc, key) => `${acc + replacer.repeat(depth + 2) + key}: ${iter(value[key], depth + 4)}\n`, '');
      return `{\n${result}${replacer.repeat(depth - 2)}}`;
    }
    return value;
  };
  return iter(val, deep);
};

export default (diff) => {
  const replacer = ' ';
  const iter = (obj, depth) => {
    const content = _.reduce(obj, (acc, val) => {
      if (val.finish) {
        return `${acc}${replacer.repeat(depth)}${val.result} ${val.key}: ${stringify(val.value, depth + 4)}\n`;
      }
      return `${acc}${replacer.repeat(depth)}${val.result} ${val.key}: ${stringify(iter(val.value, depth + 4), depth + 4)}\n`;
    }, '');
    return `{\n${content}${replacer.repeat(depth - 2)}}`;
  };
  return iter(diff, 2);
};
