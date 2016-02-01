# Skill Sheet Demo App 

This is an attempt at a non trivial Angular 2.x, Redux, TypeScript and Webpack app to clearly showcase how real world scenarios can be implemented using the architecture.

This was created using the angular2-redux-starter from rangle.

## Planned Functionality

- Users can login
- Users can have skill sheets
- A skill sheet can have skills
- Each skill will have a star rating and a name
- The user can modify skill ratings

## Visual Components

star
skill-bar
skill-sheet
create-skill-sheet
create-skill-bar
login

## Goals

- showcase how to test real world, non trivial apps with Angular 2 and Redux
- showcase how to engineer high DX code with Redux and Angular 2
- showcase how to think about and architect dumb/smart component combinations


## Commands

* `npm install`: install npm dependencies specified in package.json as well as typings specified in tsd.json (typings will be put into *typings* folder which is also git ignored).
* `postinstall`: runs automatically after `npm install` and triggers a `npm run build` to provide a build directory to `npm start` by default

* `npm run dev`: will start webpack's development server (with live reloading) on [http://localhost:8080](http://localhost:8080). Note that in this case the bundle will be generated in memory and your bundle in *dist* might get out of sync.
* `npm start`: starts a production server serving the *dist* directory on [http://localhost:3000](http://localhost:3000)

* `npm run build`: bundle all of the application including js/css/html files, with index.html generated according to a template specified in *index.html* (Everything will be put into *dist* folder).
* `npm test`: will run the unit tests for the project as specified in *karma.conf.js* (everything ending in .test.ts will ge picked up, refer to *src/tests.entry.ts* if other extensions should be used).
* `npm run e2e`: will run the e2e suite for this project located in *e2e* (refer to *wdio.conf.js* and *gulpfile.js* for more info, this is the only `gulp` dependency).
* `npm run typings`: removes existing typings located in *typings* directory, reinstalls them based on *tsd.json*, and links whatever is available in *node_modules* (using `tsd link`).

Copyright (c) 2016 kosz 

[MIT License][MIT]

[MIT]: ./LICENSE "Mit License"
