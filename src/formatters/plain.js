import _ from 'lodash';

const getValue = (value) => {
  if ((typeof value === 'object') && value != null) {
    return '[complex value]';
  } if ((typeof value === 'string')) {
    return `'${value}'`;
  }
  return value;
};

const getString = (result, path, value, newValue) => {
  if (newValue !== undefined) {
    return `Property '${path}' was updated. From ${getValue(value)} to ${getValue(newValue)}\n`;
  } if (result === '+') {
    return `Property '${path}' was added with value: ${getValue(value)}\n`;
  }
  return `Property '${path}' was removed\n`;
};

export default (diff) => {
  const iter = (tree, path = '') => _.reduce(tree, (acc, val) => {
    const newPath = path.length > 0 ? `${path}.${val.key}` : val.key;
    if (val.finish && val.result !== ' ' && val.dismiss !== true) {
      return acc + getString(val.result, newPath, val.value, val.newValue);
    }
    return acc + iter(val.value, newPath);
  }, '');
  const result = iter(diff);
  return result.slice(0, -1);
};
