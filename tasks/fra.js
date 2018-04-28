#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const spawnSync = require('cross-spawn').sync;

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
  const appPath = `${currDir}/${appName}`;
  const templatePath = `${__dirname}/../templates/${appChoice}`;

  console.log(chalk.cyan('Forging a new React application...'));
  console.log();
  fs.mkdirSync(appPath);
  createDirectoryContents(templatePath, appName);
  fs.renameSync(`${appPath}/.npmignore`, `${appPath}/.gitignore`);

  console.log(chalk.cyan('Running npm install...'));
  console.log();
  try {
    spawnSync('npm', ['install', '--loglevel', 'error', '--prefix', appPath], {
      stdio: 'inherit',
    });
  } catch (error) {
    console.log(chalk.red('Error: '), error);
  }

  console.log();
  console.log(`${chalk.green('Success!')} Created ${appName} at ${appPath}`);
  console.log('Inside that directory, you can run several commands:');
  console.log();
  console.log(chalk.cyan('  npm start'));
  console.log('    Starts the development server.');
  console.log();
  console.log(chalk.cyan('  npm run build'));
  console.log('    Bundles the app into static files for production.');
  console.log();
  console.log(chalk.cyan('  npm test'));
  console.log('    Starts the test runner.');
  console.log();
  console.log('I suggest that you begin by typing:');
  console.log();
  console.log(chalk.cyan('  cd'), appName);
  console.log(chalk.cyan('  npm start'));
  console.log();
});

function createDirectoryContents(templatePath, newAppPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');

      const writePath = `${currDir}/${newAppPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${currDir}/${newAppPath}/${file}`);

      // recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${newAppPath}/${file}`);
    }
  });
}
