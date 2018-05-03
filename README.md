## JavaScript Development Environment

A working JS environment built to be compatible with [Express](https://expressjs.com/) and [React](https://reactjs.org/).

Current structure is not agnostic for other JS frameworks like [Sails](https://sailsjs.com/), [Ember.js](https://www.emberjs.com/), [Meteor](https://www.meteor.com/)

### Styling and Linting

[.editorconfig](http://editorconfig.org/) has been setup to allow for consistent rules between editors and IDEs that support [EditorConfig](http://editorconfig.org/).

Indent size is two and indent style are spaces.

Base [eslint](https://eslint.org/) settings: ecmaVersion = 7, browser = true, node = true, mocha = true


### Other Tooling

[Babel](https://babeljs.io/) is used as the JS compiler to use next-generation JS features.

[localtunnel](https://localtunnel.github.io/www/) allows your project to share a web service to be shared without configuring DNS or firewall settings. All tunneling is done through HTTPS.

Typing `npm run localtunnel` into the a terminal will create an instance on a designated port.

[nsp](https://nodesecurity.io/) runs sercurity checks to verify if any known vulnerabilities exists in your dependencies.

Typing `npm run security-check` into a terminal will run a basic security audit.

### Mock API

The Mock API in the `src/` directory is meant to mock a user database

To view this database run the following command into your terminal: `npm run open:src`

To start the mock api run the following command: `npm run start-mockapi`

### To-do list

- [x] Write basic documentation
- [ ] Update depreciated dependencies
- [ ] Update depreciated build scripts

