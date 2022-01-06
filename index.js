import { Command } from 'commander';
import genDiff from './src/genDiff.js';

export default () => {
  const program = new Command();
  program
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'output format', 'stylish')
    .arguments('<filePath1> <filePath2>')
    .action((filePath1, filePath2, arg) => {
      console.log(genDiff(filePath1, filePath2, arg.format));
    });
  program.parse();
};
