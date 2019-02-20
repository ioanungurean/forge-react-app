# Forge React App [![Build Status](https://travis-ci.com/ioanungurean/forge-react-app.svg?branch=master)](https://travis-ci.com/ioanungurean/forge-react-app)

Forge React apps with no build configuration. (TypeScript or ECMAScript)

- [Creating an App](#creating-an-app) – How to create a new app.

Forge React App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/ioanungurean/forge-react-app/issues/new).

## Quick Overview
```sh
npx forge-react-app my-app
cd my-app
npm start
```

Then open [http://localhost:9000/](http://localhost:9000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

### Get Started Immediately
You **don’t** need to install or configure tools like Webpack or Babel.<br>
They are preconfigured so that you can focus on the code.

Just create a project, and you’re good to go.

## Creating an App
**You’ll need to have Node 8.10.0 or later on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx
```sh
npx create-react-app my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── node_modules
├── package.json
├── .gitignore
├── devtools
│   └── webpack.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── index.js
│   └── vendor.js
└── src
    ├── index.js
    ├── components
    │   └── Title
    │       ├── index.tsx
    │       ├── Title.tsx
    │       ├── Title.scss
    │       └── test
    │           └── Title.test.tsx
    ├── modules
    │   └── App
    │       ├── index.tsx
    │       ├── App.tsx
    │       ├── App.scss
    │       └── test
    │           └── App.test.tsx
    └── ui
        ├── assets
        │   └── images
        └── shared
            ├── colors.scss
            └── sizes.scss
```

No configuration or complicated folder structures, just the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`
Runs the app in development mode.<br>
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`
Runs the test watcher in an interactive mode.<br>

### `npm run build` or `yarn build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

### `npm run analyze` or `yarn analyze` (Webpack Bundle Analyzer)
This script will help you:
* Realize what's really inside your bundle
* Find out what modules make up the most of it's size
* Find modules that got there by mistake
* Optimize it!
* And the best thing is it supports minified bundles. It parses them to get real size of bundled modules. And it also shows their gzipped sizes.

## Features
- **No Configuration Required:** You don't need to configure anything. A reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.

- **Highly Scalable Folder Structure**

- **[Small Production Build Size](#production-build-size)**


## Main dependencies
| Package       | Version | Details                |
| ------------- |---------|------------------------|
| React         | ^16.x   |                        |
| TypeScript    | ^3.x    | for TypeScript version |
| Jest          | ^24.x   |                        |
| Enzyme        | ^3.x    |                        |
| Babel         | ^7.x    | for ECMAScript version |
| Webpack       | ^4.x    |                        |

## Production build size
* All (36.61 KB) (gzip)
    * vendor.a106ef9a79e0a54d062b.js (35.09 KB)
    * index.4bc3d8a674d7249b58c8.js (1.52 KB)

## Feedback and suggestions
If you want to leave some suggestions or give me constructive feedback please don't hesitate to [file an issue](https://github.com/ioanungurean/forge-react-app/issues/new).

## License

Forge React App is open source software [licensed as MIT](https://github.com/ioanungurean/forge-react-app/blob/master/LICENSE.md).
