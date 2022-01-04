import jsonParser from './parsers/jsonParser.js';
import yamlParser from './parsers/yamlParser.js';

export default (fileExtension) => {
  switch (fileExtension) {
    case '.yml':
    case '.yaml':
      return yamlParser;
    case '.json':
      return jsonParser;
    default:
      return false;
  }
};
