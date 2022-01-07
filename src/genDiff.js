import * as fs from 'fs';
import path from 'path';
import doDiff from './doDiff.js';
import getParser from './getParser.js';
import getFormat from './formatters/index.js';

export default (filePath1, filePath2, format = 'stylish') => {
  if (!fs.existsSync(filePath1) || !fs.existsSync(filePath2)) {
    throw new Error('Invalid path to file');
  }
  const parser = getParser(path.extname(filePath1));
  const fileContents1 = parser(fs.readFileSync(filePath1, 'utf8'));
  const fileContents2 = parser(fs.readFileSync(filePath2, 'utf8'));

  const diff = doDiff(fileContents1, fileContents2);
  const formatter = getFormat(format);
  return formatter(diff);
};
