export default (obj) => {
  const content = obj.reduce((acc, val) => {
    const newAcc = `${acc}  ${val.result} ${val.key}: ${val.value}\n`;
    return newAcc;
  }, '');
  return `{\n${content}}`;
};
