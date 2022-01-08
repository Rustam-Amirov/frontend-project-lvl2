import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import * as fs from 'fs';
import { test, expect } from '@jest/globals';
import gendiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('genDIff_json', () => {
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('expected.txt'));
});

test('genDIff_yml', () => {
  expect(gendiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(readFile('expected.txt'));
});

test('genDIff_plain', () => {
  expect(gendiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain')).toEqual(readFile('expected_plain.txt'));
});

test('genDIff_json', () => {
  expect(gendiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'json')).toEqual(readFile('expected.json'));
});
