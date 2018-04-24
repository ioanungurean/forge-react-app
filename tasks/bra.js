#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');
const currDir = process.cwd();
const defaultName = 'build-react-app';

const choices = fs.readdirSync(`${__dirname}/../templates`);
const questions = [
  {
    name: 'project-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: choices,
  },
];

inquirer.prompt(questions)
  .then((answers) => {
    const projectChoice = answers['project-choice'];
    const projectName = process.argv[2] ? process.argv[2] : defaultName;
    const templatePath = `${__dirname}/../templates/${projectChoice}`;

    fs.mkdirSync(`${currDir}/${projectName}`);

    createDirectoryContents(templatePath, projectName);
  });

function createDirectoryContents(templatePath, newProjectPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');

      const writePath = `${currDir}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${currDir}/${newProjectPath}/${file}`);

      // recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
    }
  });
}
