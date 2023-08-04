# Web Serve using Node's http module

## Table of content

## Setting Up

For the set up, I initialised a npm package & initialised git. I then installed a couple of packages that allowed me to use [typescript](https://www.typescriptlang.org/) instead of javascript. I followed this [tutorial](https://blog.appsignal.com/2022/01/19/how-to-set-up-a-nodejs-project-with-typescript.html). It only took a minute or 2 to configure everything, but it was a smooth process.

I made a few npm scripts that made developmemt easier.

- `ts-version` - I personally don't like working with global installation, If you look in the [package.json](./package.json), you'll notice typescript as one of the development dependancies. This npm script is just for checking the package's typescrip compiler version.
- `compile` - This one is self explanatory, it is meant to compile all the ts files into javascript.
- `.` - Is meant to run the [index.ts](./src/index.ts), I just find it easier to run a js/ts script file with npm by typing `npm run .` in the console.
- `dev` - To spin up a development server, it utilises [nodemon](https://nodemon.io/) so that I didn;t have to refresh the server everytime I made some changes.
