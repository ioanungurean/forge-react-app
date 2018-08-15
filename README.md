# Forge React App
Lightweight React boilerplate using Webpack 4 with a highly scalable architecture and a [production build 3 times smaller](#production-build-size) than [Create React App](https://github.com/facebook/create-react-app)

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
│   ├── test
│   │   ├── enzyme.config.js
│   │   └── mocks
│   ├── webpack
│   │   ├── development.js
│   │   ├── plugins.js
│   │   └── production.js
│   └── webpack.config.js
├── package.json
├── package-lock.json
└── src
    ├── components
    │   └── Title
    │       ├── test
    │       │   └── Title.test.js
    │       ├── Title.js
    │       └── Title.scss
    ├── favicon.ico
    ├── index.js
    ├── modules
    │   ├── About
    │   │   ├── About.js
    │   │   ├── About.scss
    │   │   └── test
    │   │       └── About.test.js
    │   ├── App
    │   │   ├── App.js
    │   │   ├── App.scss
    │   │   └── test
    │   │       └── App.test.js
    │   └── Home
    │       ├── Home.js
    │       ├── Home.scss
    │           └── Home.test.js
    └── ui
        ├── assets
        │   └── images
        └── theme
            ├── _colors.scss
            ├── _normalize.scss
            ├── _sizes.scss
            └── theme.scss

23 directories, 31 files
```

Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

#### `npm start` or `yarn start`
Runs the app in development mode.<br>
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will automatically modify without reloading when you make changes to the code. ([React Hot Loader](https://github.com/gaearon/react-hot-loader)) <br>
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
| Package       |Version |
| ------------- |--------|
| React         |^16.x.x |
| React Router  |^4.x.x  |
| Jest          |^23.x.x |
| Enzyme        |^3.x.x  |
| Babel         |^6.x.x  |
| Webpack       |^4.x.x  |

## Features
* Scope Hoisting
* Uglification of base app via `webpack --mode production`
* [React Hot Loader](https://github.com/gaearon/react-hot-loader)
* Deterministic Hashes
* [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

## Production build size
* All (36 KB) (gzip)
    * vendor.ae9379741f871b6ba2be.js (34.11 KB)
    * index.1f1cbf641d603d86f8ee.js (1.89 KB)

## Feedback and suggestions
If you want to leave some suggestions or give me constructive feedback please don't hesitate to [file an issue](https://github.com/ioanungurean/forge-react-app/issues/new). I will gladdly look into into it.

Thank you for your time! :wink:
