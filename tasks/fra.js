#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');

const defaultAppName = 'forge-react-app';
const currDir = process.cwd();

const choices = fs.readdirSync(`${__dirname}/../templates`);
const questions = [
  {
    name: 'app-choice',
    type: 'list',
    message: 'What application template would you like to generate?',
    choices: choices,
  },
];

inquirer.prompt(questions).then((answers) => {
  const appChoice = answers['app-choice'];
  const appName = process.argv[2] ? process.argv[2] : defaultAppName;
  const templatePath = `${__dirname}/../templates/${appChoice}`;

  fs.mkdirSync(`${currDir}/${appName}`);

  createDirectoryContents(templatePath, appName);
});

function createDirectoryContents(templatePath, newAppPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');

      // rename
      if (file === '.npmignore') {
        file = '.gitignore';
      }

      const writePath = `${currDir}/${newAppPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${currDir}/${newAppPath}/${file}`);

      // recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${newAppPath}/${file}`);
    }
  });
}
