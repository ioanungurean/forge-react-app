# Forge React App
Forge React App: React starter that uses TypeScript or ECMAScript bundled with Webpack 4 that has a highly scalable folder structure and a [production build 5 times smaller](#production-build-size) than [Create React App](https://github.com/facebook/create-react-app)

Create React apps with no initial build configuration.
* [Creating an App](#creating-an-app) – How to create a new app.

Forge React App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/ioanungurean/forge-react-app/issues/new).

## Quick overview
```sh
npx forge-react-app my-app
cd my-app
npm start
```

*([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](#instructions-for-older-npm-versions))*

Then open [http://localhost:9000](http://localhost:9000) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

## Creating an app
**You’ll need to have Node >= 6 on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

To create a new app, run a single command:

```sh
npx forge-react-app my-app
```

*([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))*

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```sh
.
├── devtools
│   └── webpack.config.js
└── src
    ├── components
    │   └── Title
    │       ├── test
    │       │   └── Title.test.tsx
    │       ├── Title.tsx
    │       └── Title.scss
    ├── favicon.ico
    ├── index.tsx
    ├── modules
    │   └── App
    │       ├── App.tsx
    │       ├── App.scss
    │       └── test
    │           └── App.test.tsx
    └── ui
        ├── assets
        │   └── images
        └── shared
            ├── sizes.scss
            ├── colors.scss
            ├── normalize.scss
            └── shared.scss
```

Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

#### `npm start` or `yarn start`
Runs the app in development mode.<br>
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will automatically modify when you make changes to the code. <br>
You will see the build errors and lint warnings in the console.

#### `npm run test` or `yarn test`
Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

#### `npm run build` or `yarn build`
Builds the app for production to the `public` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

#### `npm run analyze` or `yarn analyze` (Webpack Bundle Analyzer)
This script will help you:
* Realize what's really inside your bundle
* Find out what modules make up the most of it's size
* Find modules that got there by mistake
* Optimize it!
* And the best thing is it supports minified bundles. It parses them to get real size of bundled modules. And it also shows their gzipped sizes.

## Instructions for older `npm` versions
If you use npm 5.1 or earlier, you can't use `npx`.
Instead, install `forge-react-app` globally:

```sh
npm install -g forge-react-app
```

Now you can run:

```
forge-react-app my-app
```

## Main dependencies
| Package       | Version | Details                |
| ------------- |---------|------------------------|
| React         | ^16.x   |                        |
| TypeScript    | ^3.x    | for TypeScript version |
| Jest          | ^24.x   |                        |
| Enzyme        | ^3.x    |                        |
| Babel         | ^7.x    | for ECMAScript version |
| Webpack       | ^4.x    |                        |

## Features
* Scope Hoisting
* Uglification of base app via `webpack --mode production`
* Deterministic Hashes
* [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

## Production build size
* All (36.61 KB) (gzip)
    * vendor.a106ef9a79e0a54d062b.js (35.09 KB)
    * index.4bc3d8a674d7249b58c8.js (1.52 KB)

## Feedback and suggestions
If you want to leave some suggestions or give me constructive feedback please don't hesitate to [file an issue](https://github.com/ioanungurean/forge-react-app/issues/new).
