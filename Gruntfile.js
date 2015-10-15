/*!
 * Turret v3.2.0
 * http://turret.bigfish.tv
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2015 Bigfish
 * http://www.bigfish.tv
 */

'use strict';

// grunt module
module.exports = function(grunt) {

  // load package.json
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({

    // package info
    pkg: pkg,

    // directories
    dir: {
      'dist': pkg.directories.dist,
      'less': pkg.directories.less,
      'sass': pkg.directories.sass
    },

    // meta settings
    meta: {
      version: '<%= pkg.version %>',
      banner: '/*!\n'+
              ' * Turret v<%= pkg.version %>\n'+
              ' * <%= pkg.homepage %>\n'+
              ' * \n'+
              ' * Licensed under the MIT license.\n'+
              ' * http://www.opensource.org/licenses/mit-license.php\n'+
              ' * \n'+
              ' * Copyright 2015 Bigfish\n'+
              ' * http://www.bigfish.tv\n'+
              ' */\n'
    },

    // clean dist folder
    clean: {
      build: {
        src: [
          '<%= dir.dist %>/*'
        ]
      }
    },

    // convert less files to css
    less: {
      build: {
        files: {
          '<%= dir.dist %>/turret.css': '<%= dir.less %>/turret.less'
        }
      }
    },

    // convert sass files to css
    sass: {
      build: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= dir.dist %>/turret.css': '<%= dir.sass %>/turret.scss'
        }
      }
    },

    // minify css file
    cssmin: {
      build: {
        options: {
          banner: '<%= meta.banner %>',
          report: 'gzip',
          sourceMap: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= dir.dist %>',
            src: [
              '*.css',
              '!*.min.css'
            ],
            dest: '<%= dir.dist %>',
            ext: '.min.css'
          }
        ]
      }
    },

    // watch changes seperately and run the tasks
    watch: {
      less: {
        files: [
          '<%= dir.less %>/**/*.less'
        ],
        tasks: [
          'less2css'
        ]
      },
      sass: {
        files: [
          '<%= dir.sass %>/**/*.{scss,sass}'
        ],
        tasks: [
          'sass2css'
        ]
      }
    }

  });

  // load all grunt tasks
  require('matchdep').filterDev('grunt-contrib-*').forEach(grunt.loadNpmTasks);

  // register less tasks
  grunt.registerTask('less2css', 'Less -> CSS', [
    'clean',
    'less',
    'cssmin'
  ]);

  // register sass tasks
  grunt.registerTask('sass2css', 'Sass -> CSS', [
    'clean',
    'sass',
    'cssmin'
  ]);

};
