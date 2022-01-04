import yaml from 'js-yaml';

export default (filePath) => yaml.load(filePath);
