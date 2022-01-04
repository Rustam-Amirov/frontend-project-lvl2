import * as fs from 'fs';
import path from 'path';
import doDiff from './doDiff.js';
import getParser from './getParser.js';

export default (filePath1, filePath2) => {
  if (!fs.existsSync(filePath1) || !fs.existsSync(filePath2)) {
    console.log('Путь не верный');
    return false;
  }
  const parser = getParser(path.extname(filePath1));
  const fileContents1 = parser(fs.readFileSync(filePath1, 'utf8'));
  const fileContents2 = parser(fs.readFileSync(filePath2, 'utf8'));

  return doDiff(fileContents1, fileContents2);
};
