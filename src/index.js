import {Command} from 'commander';

export default () => {
    const program = new Command();
    program
        .version('1.0.0')
        .description('Compares two configuration files and shows a difference.')
        .option('-f, --format [type]', 'output format')
        .arguments('<filePath1> <filePath2>')
        .action((filePath1, filePath2) => {});
    program.parse();
};