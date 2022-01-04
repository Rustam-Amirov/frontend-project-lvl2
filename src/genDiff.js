import * as fs from 'fs';
import doDiff from './doDiff.js';

export default (filePath1, filePath2) => {
  if (!fs.existsSync(filePath1) || !fs.existsSync(filePath2)) {
    console.log('Путь не верный');
    return false;
  }

  const fileContents1 = JSON.parse(fs.readFileSync(filePath1, 'utf8'));
  const fileContents2 = JSON.parse(fs.readFileSync(filePath2, 'utf8'));

  return doDiff(fileContents1, fileContents2);
};
