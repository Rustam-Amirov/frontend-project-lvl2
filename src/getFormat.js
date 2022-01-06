import stylish from './formatters/stylish.js';

export default (format) => {
  switch (format) {
    case 'stylish':
      return stylish;
    default:
      throw new Error(`Format: ${format} is not defined`);
  }
};
