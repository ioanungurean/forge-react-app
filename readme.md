# React Boilerplate

## Install

#### `npm install` or `yarn install`

## Getting started

#### 1. `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will automatically modify without reloading when you make changes to the code. (React Hot Loader) <br>
You will see the build errors and lint warnings in the console.

#### 2. `npm run test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

#### 3. `npm run build` or `yarn build`

Builds the app for production to the `public` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

#### 4. `npm run analysis` or `yarn analysis` (Webpack Bundle Analyzer)

This script will help you:
* Realize what's really inside your bundle
* Find out what modules make up the most of it's size
* Find modules that got there by mistake
* Optimize it!
* And the best thing is it supports minified bundles! It parses them to get real size of bundled modules. And it also shows their gzipped sizes!

## Folder Structure

```
├───devtools
│   ├───test                         // Jest and Enzyme config files
│   │   └───mocks
│   └───webpack                      // Webpack config files
└───src
    ├───components                   // Reusable components
    │   └───title
    │       └───test
    │           └───__snapshots__
    ├───gui                          // Layout and theming
    │   ├───layout
    │   └───themes
    │       └───default
    │           ├───fonts
    │           │   └───icons
    │           └───patterns
    ├───libs                         // Custom reusable libraries
    └───modules                      // Complex components that are not reusable even entire pages
        └───app
            └───test
                └───__snapshots__
```

## Base App

| Package       |Version |
| ------------- |--------|
| React         |^16.x.x |
| [xBEM][1]     |^0.x.x  |
| Jest          |^22.x.x |
| Enzyme        |^3.x.x  |
| Babel         |^6.x.x  |
| Webpack       |^3.x.x  |

[1]: https://github.com/bogdan-prisecaru/xbem

## Using

* [Scope Hoisting](https://github.com/dangodev/webpack-optimize-sample-project/tree/master/1-scope-hoisting)
* Uglification of base app via `webpack -p`
* [React Hot Loader](https://github.com/gaearon/react-hot-loader)
* [Deterministic Hashes](https://github.com/dangodev/webpack-optimize-sample-project/tree/master/4-deterministic-hashes)
* [Commons Chunk Plugin](https://github.com/dangodev/webpack-optimize-sample-project/tree/master/5-commons-chunk)
* [Webpack Bundle Analyzer](https://github.com/dangodev/webpack-optimize-sample-project/tree/master/7-webpack-bundle-analyzer)

## App's Size In Production

![alt text](https://s2.postimg.org/wvrsiiz5l/bundle-size.png 'Bundle Size')
#

## Thank You

* [Bogdan Prisecaru (@bogdan-prisecaru)](https://github.com/bogdan-prisecaru)

