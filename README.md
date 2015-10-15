# [Turret](http://bigfishtv.github.io/turret/)

Turret is a responsive frontend framework built with Less to normalize styles for default HTML elements, created by [Scott de Jonge](https://twitter.com/scottdejonge). It was ported to Sass by [Gökay Gürcan](https://twitter.com/gokaygurcan).


## Quick start

There are four quick start ways to download Turret available:

- [Download the latest release](https://github.com/bigfishtv/turret/).
- Clone the repo: `git clone https://github.com/bigfishtv/turret.git`.
- Install with [npm](https://www.npmjs.org): `npm install bigfishtv-turret`.
- Install with [bower](http://bower.io/): `bower install turret`.

## Build

Turret has both Less and Sass support. You can use either [Grunt](http://gruntjs.com/) or npm scripts to build your css from Less/Sass. 

### Grunt way

```javascript
  cd path/to/folder
  grunt less2css // for less-to-css
  grunt sass2css // for sass-to-css
```
These will run `clean`, `less`/`sass` and `cssmin` tasks accordingly. They'll clean `dist` folder, convert less/sass into css and minify it. 

If you want to automatize this process and don't want to spend your time to run task after each change, you can use `watch` task: 
```javascript
  cd path/to/folder
  grunt watch // for any change in less and/or sass files

  grunt watch:less // for only less changes
  grunt watch:sass // for only sass changes
```

### npm way

```javascript
  cd path/to/folder
  npm run build:less && npm run minify // for less-to-css
  npm run build:sass && npm run minify // for sass-to-css
```
This will almost do the same thing as Grunt way above, only difference is this option doesn't clean the folder but overwrites the existing files at the end of the process. 

And of course, you can watch the changes:
```javascript
  cd path/to/folder
  npm run watch // for any change in less and/or sass files

  npm run watch:less // for only less changes
  npm run watch:sass // for only sass changes
```


## Documentation

View full documentation at: <http://bigfishtv.github.io/turret/>


## Updates

Keep track development updates by following [@bigfishtvturret](https://twitter.com/bigfishtvturret) on Twitter.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Turret is maintained under [the Semantic Versioning guidelines](http://semver.org/).


## Contributors

**Scott de Jonge**

- Twitter: [@scottdejonge](https://twitter.com/scottdejonge)
- Github: [@scottdejonge](https://github.com/scottdejonge)

**Gökay Gürcan**

- Twitter: [@gokaygurcan](https://twitter.com/gokaygurcan)
- Github: [@gokaygurcan](https://github.com/gokaygurcan)


## Copyright and license

Code and documentation copyright 2015 Bigfish.tv, Inc. Code released under [the MIT license](https://github.com/bigfishtv/turret/LICENSE). Docs released under [Creative Commons](https://github.com/bigfishtv/turret/LICENSE).
