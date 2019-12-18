#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");
const spawnSync = require("cross-spawn").sync;

const choices = fs.readdirSync(path.join(__dirname, "..", "templates"));
const questions = [
  {
    name: "app-choice",
    type: "list",
    message: "What application template would you like to generate?",
    choices: choices
  }
];

const defaultAppName = "forge-react-app";
const currDir = process.cwd();

function buildStructure(templatePath, newAppPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = path.join(templatePath, file);

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const content = fs.readFileSync(origFilePath);

      const writePath = path.join(currDir, newAppPath, file);
      fs.writeFileSync(writePath, content);
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(currDir, newAppPath, file));

      // recursive call
      buildStructure(
        path.join(templatePath, file),
        path.join(newAppPath, file)
      );
    }
  });
}

inquirer.prompt(questions).then(answers => {
  const appChoice = answers["app-choice"];
  const appName = process.argv[2] ? process.argv[2] : defaultAppName;
  const appPath = path.join(currDir, appName);

  const templatePath = path.join(__dirname, "..", "templates", appChoice);

  console.log(chalk.cyan("Forging a new React application..."));
  console.log();
  fs.mkdirSync(appPath);
  buildStructure(templatePath, appName);
  fs.renameSync(
    path.join(appPath, ".ignorefile"),
    path.join(appPath, ".gitignore")
  );

  console.log(chalk.cyan("Running npm install..."));
  console.log();
  try {
    spawnSync("npm", ["install", "--loglevel", "error", "--prefix"], {
      cwd: appPath,
      stdio: "inherit"
    });
  } catch (error) {
    console.log(chalk.red("Error: "), error);
  }

  console.log();
  console.log(`${chalk.green("Success!")} Created ${appName} at ${appPath}`);
  console.log("Inside that directory, you can run several commands:");
  console.log();
  console.log(chalk.cyan("  npm start"));
  console.log("    Starts the development server.");
  console.log();
  console.log(chalk.cyan("  npm run build"));
  console.log("    Bundles the app into static files for production.");
  console.log();
  console.log(chalk.cyan("  npm test"));
  console.log("    Starts the test runner.");
  console.log();
  console.log("I suggest that you begin by typing:");
  console.log();
  console.log(chalk.cyan("  cd"), appName);
  console.log(chalk.cyan("  npm start"));
  console.log();
});
